const {
  isPathExists,
  createFile,
  firstLetterCaptalize,
  generateEntityFields,
  extractColObjByColName,
} = require('./util');

const {
  getJpaByJpaName,
  getStoredProcedureByStoredProcedureName,
} = require('./DomainConfig');

const {
  getRoutePathString,
} = require('./ContentMapValidator');

const EntityGenerator = (applicationObject, ConfigObject) => {
  let shouldCreateFile = false;
  let injectedContent = ``;
  let entityPath = null;
  let dataSourceProviders = {}
  const objectName = applicationObject['appObjectId'];

  //  1) for each appObjectId get complete route path
  const routePathString = getRoutePathString(objectName);
  const [first, ...completeRoutePathArray] = routePathString.split('/');
  //  2) get direct parent route path
  const directParentRoutePath =
    completeRoutePathArray.length > 1
      ? completeRoutePathArray[completeRoutePathArray.length - 2]
      : '';

  const parentJpaName =
    directParentRoutePath.length > 1
      ? applicationObject.getJpaNameByAppObjectId(directParentRoutePath)
      : '';
  /********************************************************************************
   *                        Jakarta Persistence API
   ********************************************************************************/
  Object.keys(applicationObject['dataAccessLayer']['jpas']).map((jpaName) => {
    // Set required variable name
    // console.log(applicationObject['appObjectId']);
    // console.log('--------');

    let jakartaImportBlock = {};
    let lombokImportBlock = {};

    jakartaImportBlock['jakarta.persistence.Entity'] = {};
    jakartaImportBlock['jakarta.persistence.Column'] = {};
    jakartaImportBlock['jakarta.persistence.GeneratedValue'] = {};
    jakartaImportBlock['jakarta.persistence.GenerationType'] = {};
    jakartaImportBlock['jakarta.persistence.Table'] = {};
    jakartaImportBlock['jakarta.persistence.Id'] = {};

    jakartaImportBlock['jakarta.validation.constraints.Size'] = {};
    jakartaImportBlock['jakarta.validation.constraints.NotNull'] = {};
    jakartaImportBlock['jakarta.validation.constraints.NotBlank'] = {};
    jakartaImportBlock['lombok.NoArgsConstructor'] = {};

    lombokImportBlock['lombok.AllArgsConstructor'] = {};
    lombokImportBlock['lombok.Builder'] = {};
    lombokImportBlock['lombok.Data'] = {};

    // console.log('**************');
    // console.log(jpaName);

    const result = getJpaByJpaName(jpaName, parentJpaName);
    const targetJpa = result['finalJpa'];

    uniqueIndexString = ``;
    if (result['uniqueIndexes'].length) {
      jakartaImportBlock['jakarta.persistence.Index'] = {};
      uniqueIndexString += `, 
        indexes = {`;
      result['uniqueIndexes'].map((uniqueIndex, index) => {
        const end =
          index + 1 < result['uniqueIndexes'].length ? `,` : ``;
        uniqueIndexString += `
                @Index(name="${jpaName}${firstLetterCaptalize(uniqueIndex)}IDX", columnList = "${uniqueIndex}", unique = false)${end}`;
      });
      uniqueIndexString += `
        }`;
    }
    // if (Object.keys(result['uniqueIndexes']).length) {
    //   jakartaImportBlock['jakarta.persistence.Index'] = {};
    //   uniqueIndexString += `, 
    //     indexes = {`;
    //   Object.keys(result['uniqueIndexes']).map((uniqueIndex, index) => {
    //     const end =
    //       index + 1 < Object.keys(result['uniqueIndexes']).length ? `,` : ``;
    //     uniqueIndexString += `
    //             @Index(columnList = "\\"${uniqueIndex}\\"", unique = false)${end}`;
    //   });
    //   uniqueIndexString += `
    //     }`;
    // }
    // console.log(uniqueIndexString);

    // console.log(result['uniqueIndexes']);

    // const pathVariables = getOwnOrParentPathVariableByRouteName(
    //   applicationObject['appObjectId']
    // );

    // let indexList = ``;
    // const pathVariablesCount = Object.keys(pathVariables).length;
    // if (pathVariablesCount > 0) {
    //   jakartaImportBlock['jakarta.persistence.Index'] = {};
    //   indexList += `indexes = {`;
    //   Object.keys(pathVariables).map((pathVariable, rowIndex) => {
    //     const end = rowIndex + 1 < pathVariablesCount ? `,` : ``;
    //     indexList += `
    //             @Index(columnList = "\\"${pathVariables[pathVariable]}\\"", unique = false)${end}`;
    //   });
    //   indexList += `
    //     }`;
    // }

    // console.log(uniqueIndexString)

    shouldCreateFile = true;
    const datasourceName = targetJpa['datasourceName'];
    entityPath = ConfigObject.getEntityPath(datasourceName);
    // if(jpaName == 'eghdamat'){
    //   console.log(targetJpa.content);
    // }
    // lets generate entity fields
    let generatedEntity = generateEntityFields(targetJpa);
    // if (jpaName == 'tafahomInformation') {
    //   console.log(generatedEntity);
    // }
    let importString = ``;
    Object.keys(jakartaImportBlock).map((importUnit) => {
      importString += `import ${importUnit};
`;
    });

    Object.keys(lombokImportBlock).map((importUnit) => {
      importString += `import ${importUnit};
`;
    });

    //  extract each types of entity column
    Object.keys(generatedEntity.typeList).map((importUnit) => {
      importString += `import ${importUnit};
`;
    });

    injectedContent = `package ${ConfigObject.getEntityPackageName(
      datasourceName
    )};

${importString}

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(schema = "${targetJpa['schema']}", name = "${applicationObject['appObjectIdClass']
      }"${uniqueIndexString})
public class ${firstLetterCaptalize(jpaName)} {${generatedEntity.entityfields}
}`;

    // console.log(injectedContent);
    // injectedContent += `\n}`;
    if (shouldCreateFile == true) {
      // console.log(jpaName);
      /**
       * Create File
       */
      isPathExists(entityPath);
      createFile(
        entityPath,
        firstLetterCaptalize(jpaName) + `.java`,
        injectedContent
      );
    }

    injectedContent = ``

    // in case we have storedProcedure datasource provider
    if (Object.keys(generatedEntity['dataSourceProvider']).length > 0) {
      Object.keys(generatedEntity['dataSourceProvider']).includes('storedProcedure')
        ? (

          Object.keys(generatedEntity['dataSourceProvider']['storedProcedure']).map((storedProcedureName) => {
            const targetStoredProcedure =
              getStoredProcedureByStoredProcedureName(storedProcedureName);

            const datasourceName = targetStoredProcedure['datasourceName'];
            if (
              targetStoredProcedure['datasourceName'] !=
              ConfigObject['defaultDataSource']
            ) {
              entityPath = ConfigObject.getEntityPath(datasourceName);
              // console.log(entityPath);

              injectedContent = `package ${ConfigObject.getEntityPackageName(
                datasourceName
              )};

    import jakarta.persistence.Entity;
    import jakarta.persistence.GeneratedValue;
    import jakarta.persistence.GenerationType;
    import jakarta.persistence.Table;
    import jakarta.persistence.Id;
    import lombok.AllArgsConstructor;
    import lombok.Builder;
    import lombok.Data;
    import lombok.NoArgsConstructor;

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    @Entity
    @Table(schema ="${targetStoredProcedure['schema']}" , name = "${applicationObject['appObjectIdClass']
                }")
    public class ${firstLetterCaptalize(storedProcedureName)} {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long Id;
    } `;
              // console.log(storedProcedureName);
              if ((jpaName != 'search')) {
                isPathExists(entityPath);
                createFile(
                  entityPath,
                  firstLetterCaptalize(storedProcedureName) + `.java`,
                  injectedContent
                );
              }
            }
          })
        )
        : Object.keys(generatedEntity['dataSourceProvider']).includes('restService')
          ? '' : ''
      // Object.keys(generatedEntity['dataSourceProvider']).map((k) => {
      //   // entityPath = ConfigObject.getEntityPath(datasourceName);


      // })
    }

  });

  /********************************************************************************
   *                        StoredProcedure
   ********************************************************************************/
  Object.keys(applicationObject['dataAccessLayer']['storedProcedures']).map(
    (storedProcedureName) => {
      const targetStoredProcedure =
        getStoredProcedureByStoredProcedureName(storedProcedureName);

      const datasourceName = targetStoredProcedure['datasourceName'];

      if (
        targetStoredProcedure['datasourceName'] !=
        ConfigObject['defaultDataSource']
      ) {
        entityPath = ConfigObject.getEntityPath(datasourceName);

        injectedContent = `package ${ConfigObject.getEntityPackageName(
          datasourceName
        )};

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Table;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(schema ="${targetStoredProcedure['schema']}" , name = "${applicationObject['appObjectIdClass']
          }")
public class ${firstLetterCaptalize(storedProcedureName)} {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
} `;
        // console.log(entityPath);

        isPathExists(entityPath);
        createFile(
          entityPath,
          firstLetterCaptalize(storedProcedureName) + `.java`,
          injectedContent
        );
      }
    }
  );
  /********************************************************************************
   *                        REST Service
   ********************************************************************************/
};

module.exports = EntityGenerator;
