const {
  createFile,
  isPathExists,
  isNotEmptyObject,
  firstLetterCaptalize,
  generateJpaRepositoryOperation,
} = require('./util');
const {
  getJpaByJpaName,
  getStoredProcedureByStoredProcedureName,
} = require('./DomainConfig');

const {
  getRoutePathString,
  getOwnOrParentPathVariableByRouteName,
} = require('./ContentMapValidator');

const RepositoryGenerator = (applicationObject, ConfigObject) => {
  let shouldCreateFile = false;
  let injectedContent = ``;

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
    let springframeworkImportBlock = {};
    // Set required variable name

    const result = getJpaByJpaName(jpaName, parentJpaName);
    const targetJpa = result['finalJpa'];

    shouldCreateFile = true;
    const datasourceName = targetJpa['datasourceName'];
    const repositoryPath = ConfigObject.getRepositoryPath(datasourceName);

    let importString = ``;

    importString = `package ${ConfigObject.getRepositoryPackageName(
      datasourceName
    )};
  
import ${ConfigObject.getEntityPackageName(
      datasourceName
    )}.${firstLetterCaptalize(jpaName)};
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

`;

    const generatedRepository = generateJpaRepositoryOperation(
      jpaName,
      targetJpa,
      result['uniqueIndexes']
      // pathVariables
    );

    Object.keys(generatedRepository.typeList).map((importUnit) => {
      importString += `import ${importUnit};
`;
    });

    injectedContent += `${importString}

${generatedRepository.repositoryfields}
`;

    if (shouldCreateFile == true) {
      /**
       * Create File
       */
      isPathExists(repositoryPath);
      createFile(
        repositoryPath,
        // applicationObject['appObjectIdClass'] +
        firstLetterCaptalize(jpaName) + `Repository.java`,
        injectedContent
      );
    }

    injectedContent = ``

    // in case we have storedProcedure datasource provider
    if (Object.keys(generatedRepository['dataSourceProvider']).length > 0) {
      Object.keys(generatedRepository['dataSourceProvider']).includes('storedProcedure')
        ? (
          Object.keys(generatedRepository['dataSourceProvider']['storedProcedure']).map((storedProcedureName) => {
            const targetStoredProcedure =
              getStoredProcedureByStoredProcedureName(storedProcedureName);

            const datasourceName = targetStoredProcedure['datasourceName'];
            if (
              targetStoredProcedure['datasourceName'] !=
              ConfigObject['defaultDataSource']
            ) {

              const repositoryPath = ConfigObject.getRepositoryPath(datasourceName);
              // console.log(entityPath);

              injectedContent = `package ${ConfigObject.getRepositoryPackageName(
                datasourceName
              )};
        
import ${ConfigObject.getEntityPackageName(
                datasourceName
              )}.${firstLetterCaptalize(storedProcedureName)};
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ${firstLetterCaptalize(storedProcedureName)}Repository extends JpaRepository<${firstLetterCaptalize(storedProcedureName)}, Long>, PagingAndSortingRepository<${firstLetterCaptalize(
                storedProcedureName
              )}, Long>{
}`;

              isPathExists(repositoryPath);
              createFile(
                repositoryPath,
                firstLetterCaptalize(storedProcedureName) + `Repository.java`,
                injectedContent
              );
            }
          })
        )
        : Object.keys(generatedRepository['dataSourceProvider']).includes('restService')
          ? '' : ''
      // Object.keys(generatedRepository['dataSourceProvider']).map((k) => {
      //   // entityPath = ConfigObject.getEntityPath(datasourceName);


      // })
    }
  });

  /********************************************************************************
   *                        StoredProcedure
   ********************************************************************************/

  Object.keys(applicationObject['dataAccessLayer']['storedProcedures']).map(
    (storedProcedureName) => {
      // if (storedProcedureName == 'jBGBKZO3') {
      const targetStoredProcedure =
        getStoredProcedureByStoredProcedureName(storedProcedureName);

      const datasourceName = targetStoredProcedure['datasourceName'];
      if (
        targetStoredProcedure['datasourceName'] !=
        ConfigObject['defaultDataSource']
      ) {
        const repositoryPath = ConfigObject.getRepositoryPath(datasourceName);

        injectedContent = `package ${ConfigObject.getRepositoryPackageName(
          datasourceName
        )};
  
import ${ConfigObject.getEntityPackageName(
          datasourceName
        )}.${firstLetterCaptalize(storedProcedureName)};
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ${firstLetterCaptalize(storedProcedureName)}Repository extends JpaRepository<${firstLetterCaptalize(storedProcedureName)}, Long>, PagingAndSortingRepository<${firstLetterCaptalize(
          storedProcedureName
        )}, Long>{
}`;

        isPathExists(repositoryPath);
        createFile(
          repositoryPath,
          firstLetterCaptalize(storedProcedureName) + `Repository.java`,
          injectedContent
        );
      }
      // }
    }
  );
  /********************************************************************************
   *                        REST Service
   ********************************************************************************/
};

module.exports = RepositoryGenerator;
