const {
  isPathExists,
  createFile,
  firstLetterCaptalize,
  modelBuilder,
  entityBuilder,
  isNotEmptyObject,
  responseBuilder,
} = require('./util');
const { getJpaByJpaName } = require('./DomainConfig');

const { getRoutePathString } = require('./ContentMapValidator');

const ServiceLogicGenerator = (applicationObject, ConfigObject) => {
  const serviceLogicPath = ConfigObject.getServiceLogicPath();
  let importBlock = ``;
  let staticImports = ``;

  let bodyPart = ``;
  let injectedContent = ``;
  let bodyBlock = ``;

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

    const result = getJpaByJpaName(jpaName, parentJpaName);
    // const targetJpa = result['finalJpa'];
    const targetJpa = {
      appObjectId: applicationObject['appObjectId'],
      ...result['finalJpa']
    };


    // const targetJpa = getJpaByJpaName(
    //   jpaName,
    //   applicationObject['appObjectId']
    // )['finalJpa'];

    importBlock = ``;
    staticImports = ``;
    bodyBlock = ``;
    // if (Object.keys(applicationObject['content']).length > 0) {
    const datasourceName = targetJpa['datasourceName'];
    let methodName = `@Service
@RequiredArgsConstructor
public class ${firstLetterCaptalize(jpaName)}Logic {`;
    importBlock += `
/**
 * ******** ${datasourceName} ********
*/
import ${ConfigObject.getEntityPackageName(
      datasourceName
    )}.${firstLetterCaptalize(jpaName)};
import ${ConfigObject.getModelPackageName()}.${firstLetterCaptalize(
      jpaName
    )}DTO;`;

    bodyBlock += `    private final PasswordEncoder passwordEncoder;

    public ${firstLetterCaptalize(
      jpaName
    )}DTO convertToDto(${firstLetterCaptalize(jpaName)} ${jpaName}) {
    ${modelBuilder(targetJpa, jpaName)}
    }
    
    public ${firstLetterCaptalize(
      jpaName
    )} convertToEntity(${firstLetterCaptalize(jpaName)}DTO ${jpaName}DTO){
            ${entityBuilder(targetJpa, jpaName)}
    }
    
    Map<String, Object> response = new HashMap<>();
    
    ${responseBuilder(targetJpa, jpaName)}
`;

    /**
     * *******************************************
     */

    //         let injectedContent = `package ${ConfigObject.getServiceLogicPackageName(
    //           datasourceName
    //         )};

    // import ${ConfigObject.getEntityPackageName()}.${
    //           applicationObject['appObjectIdClass']
    //         };
    // import ${ConfigObject.getModelPackageName()}.${
    //           applicationObject['appObjectIdClass']
    //         }DTO;

    // import lombok.RequiredArgsConstructor;
    // import org.springframework.data.domain.Page;
    // import org.springframework.security.crypto.password.PasswordEncoder;
    // import org.springframework.stereotype.Service;

    // import java.text.DateFormat;
    // import java.util.*;
    // import java.util.stream.Collectors;

    // @Service
    // @RequiredArgsConstructor
    // public class ${applicationObject['appObjectIdClass']}Logic {

    //     private final PasswordEncoder passwordEncoder;

    //     public ${applicationObject['appObjectIdClass']}DTO convertToDto(${
    //           applicationObject['appObjectIdClass']
    //         } ${applicationObject['appObjectId']}) {

    //     ${modelBuilder(applicationObject)}

    //   }

    //     public ${applicationObject['appObjectIdClass']} convertToEntity(${
    //           applicationObject['appObjectIdClass']
    //         }DTO ${applicationObject['appObjectId']}DTO){
    //     ${entityBuilder(applicationObject)}
    // }
    //     Map<String, Object> response = new HashMap<>();
    //     ${responseBuilder(applicationObject)}
    // }
    // `;

    staticImports += `import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.text.DateFormat;
import java.util.*;
import java.util.stream.Collectors;
`;

    let injectedContent = `package ${ConfigObject.getServiceLogicPackageName()};

${importBlock}
${staticImports}
${methodName}
${bodyBlock}
}
`;
    /**
     * Create File
     */
    isPathExists(serviceLogicPath);
    createFile(
      serviceLogicPath,
      firstLetterCaptalize(jpaName) + `Logic.java`,
      injectedContent
    );
    // } else {
    //   console.log(
    //     `ServiceLogicFactory : ${applicationObject['appObjectIdClass']} -> either ${jpaName} is not defined or has an empty 'Content' in DomainModel! `
    //   );
    // }
  });
};
module.exports = ServiceLogicGenerator;
