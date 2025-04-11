const {
  isPathExists,
  createFile,
  firstLetterCaptalize,
  isNotEmptyObject,
  serviceJpaRepositoryMethodCaller,
  serviceRestServiceCaller,
  generateImportStatementFromUniqueDataTypes,
  serviceCallStoredProcedureWithParameters,
  extractUniqueDataTypefromParametersObject,
} = require('./util');
const {
  getJpaByJpaName,
  getRestServiceByRestServiceName,
  getStoredProcedureByStoredProcedureName,
} = require('./DomainConfig');

const {
  getRoutePathString,
} = require('./ContentMapValidator');

const ServiceGenerator = (applicationObject, ConfigObject) => {
  let shouldCreateFile = false;
  let importBlockPackageObj = {};
  let serviceInputObj = {};
  let serviceOutputObj = {};
  let serviceResponseObj = {};
  let serviceResultListObj = {};
  let importBlockObj = {};
  let methodName = `public interface ${applicationObject['appObjectIdClass']}Service {`;
  let injectedContent = ``;
  let spRestBodyBlock = ``;
  let jpaBodyBlock = ``;
  const servicePath = ConfigObject.getServiceBasePath();

  let uniqueInput = ``;
  let uniqueOutput = ``;
  let uniqueResultSet = ``;

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
    const targetJpa = result['finalJpa'];

    shouldCreateFile = true;
    const datasourceName = targetJpa['datasourceName'];

    importBlockPackageObj[
      `${ConfigObject.getModelPackageName()}.${firstLetterCaptalize(
        jpaName
      )}DTO`
    ] = {};
    importBlockObj[
      `${ConfigObject.getEntityPackageName(
        datasourceName
      )}.${firstLetterCaptalize(jpaName)}`
    ] = {};
    importBlockObj[`org.springframework.data.domain.Pageable`] = {};
    importBlockObj[`java.net.URI`] = {};
    importBlockObj[`java.security.Principal`] = {};
    importBlockObj[`java.util.Map`] = {};

    let tmp = ``;
    Object.keys(applicationObject['dataAccessLayer']['jpas'][jpaName]).map(
      (jpaMethodName) => {

        //  1)  generate service operation for each jpaMethod name i.e findAll, findById, ... in 'Content'
        const serviceJpaService = serviceJpaRepositoryMethodCaller(
          applicationObject['appObjectId'],
          jpaMethodName,
          jpaName,
          targetJpa,
          result['uniqueIndexes']
        );

        jpaBodyBlock += serviceJpaService.resultString;
        tmp = serviceJpaService.typeList;
        Object.keys(tmp).map((importUnit) => {
          importBlockObj[importUnit] = tmp[importUnit];
        });
      }


    );

    // 2) generate service operation for each column of 'Domain' that has 'dataSourceProvider' attribute
    const generatedService = serviceJpaRepositoryMethodCaller(
      applicationObject['appObjectId'],
      'dataSourceProvider',
      jpaName,
      targetJpa,
      result['uniqueIndexes']
    );

    // console.log(generatedService);
    if (Object.keys(generatedService['dataSourceProvider']).length > 0) {
      Object.keys(generatedService['dataSourceProvider']).includes('storedProcedure')
        &&
        (

          Object.keys(generatedService['dataSourceProvider']['storedProcedure']).map((storedProcedureName) => {

            let importString = ``;
            let importBlockPackageObj = {}
            let serviceInputObj = {}
            let serviceOutputObj = {}
            let serviceResultListObj = {}
            let importBlockObj = {}

            importBlockObj[`java.security.Principal`] = {};

            //  retrieve storedProcedure full definition by its name from 'Domain'
            const targetStoredProcedure =
              getStoredProcedureByStoredProcedureName(storedProcedureName);

            /*********************** IN/OUT Model *********************************/
            if (isNotEmptyObject(targetStoredProcedure['parameters']) == true) {
              /*********************** Input Parameter Model *********************************/

              uniqueInput = extractUniqueDataTypefromParametersObject(
                targetStoredProcedure['parameters'],
                'IN'
              );

              if (Object.keys(uniqueInput).length > 0) {
                importBlockPackageObj[
                  `${ConfigObject.getModelPackageName()}.${firstLetterCaptalize(
                    storedProcedureName
                  )}InputDTO`
                ] = {};
                serviceInputObj[`${storedProcedureName}InputDTO`] = {};
              }

              /*********************** Output Parameter Model *********************************/
              uniqueOutput = extractUniqueDataTypefromParametersObject(
                targetStoredProcedure['parameters'],
                'OUT'
              );
              if (Object.keys(uniqueOutput).length > 0) {
                importBlockPackageObj[
                  `${ConfigObject.getModelPackageName()}.${firstLetterCaptalize(
                    storedProcedureName
                  )}OutputDTO`
                ] = {};
                serviceOutputObj[`${storedProcedureName}OutputDTO`] = {};
              }
            }

            // console.log(targetStoredProcedure);

            // if (jpaName == 'account') {
            // //   // console.log(targetStoredProcedure);
            //   console.log(uniqueInput);
            // //   // console.log(uniqueOutput);
            // //   console.log(storedProcedureName);
            // //   console.log(targetStoredProcedure);
            // }
            /*********************** ResultSet Model *********************************/

            if (isNotEmptyObject(targetStoredProcedure['resultSet']) == true) {
              uniqueResultSet = extractUniqueDataTypefromParametersObject(
                targetStoredProcedure['resultSet'],
                'OUT'
              );
              if (Object.keys(uniqueResultSet).length > 0) {
                importBlockPackageObj[
                  `${ConfigObject.getModelPackageName()}.${firstLetterCaptalize(
                    storedProcedureName
                  )}ResultListDTO`
                ] = {};
                importBlockPackageObj[`java.util.List`] = {};
                
                serviceResultListObj[`${storedProcedureName}ResultListDTO`] = {};
              }
            } else {
              uniqueResultSet = {}
            }

            // if (jpaName == 'tafahomInformation') {
            //   // if (storedProcedureName == 'extCustNo2Name') {
            //   // if (storedProcedureName == 'fullAccountInfo') {
            //     console.log(storedProcedureName);
            //     // console.log(targetStoredProcedure);
            //     console.log(targetStoredProcedure['resultSet']);
            //   // console.log(uniqueInput);
            //   // console.log(uniqueOutput);
            //   console.log(uniqueResultSet)
            //   console.log('');
            //   // console.log(findStoredProcedure);
            // }


            let spRestBodyBlock111 = serviceCallStoredProcedureWithParameters(
              storedProcedureName,
              serviceInputObj,
              serviceOutputObj,
              serviceResultListObj,

              uniqueInput,
              uniqueOutput,
              uniqueResultSet
            );

            shouldCreateFile = true;

            Object.keys(importBlockObj).map((importUnit) => {
              importString += `
import ${importUnit};`;
            });

            Object.keys(importBlockPackageObj).map((importUnit) => {
              importString += `
import ${importUnit};`;
            });

            shouldCreateFile = true;
            const datasourceName = targetStoredProcedure['datasourceName'];

            if (shouldCreateFile == true) {
              let injectedContent = `package ${ConfigObject.getServicePackageName()};
${importString}
public interface ${firstLetterCaptalize(storedProcedureName)}Service {
${spRestBodyBlock111}
}`;

              isPathExists(servicePath);
              createFile(
                servicePath,
                firstLetterCaptalize(storedProcedureName) + `Service.java`,
                injectedContent
              );
            }


          })
        )
      // :
      Object.keys(generatedService['dataSourceProvider']).includes('restService')
        // ? 
        &&
        ''
      // : 
      // ''

    }

  });

  /********************************************************************************
   *                        storedProcedures API
   ********************************************************************************/

  Object.keys(applicationObject['dataAccessLayer']['storedProcedures']).map(
    (storedProcedureName) => {
      // Set required variable name
      const targetStoredProcedure =
        getStoredProcedureByStoredProcedureName(storedProcedureName);

      /*********************** IN/OUT Model *********************************/
      if (isNotEmptyObject(targetStoredProcedure['parameters']) == true) {
        /*********************** Input Parameter Model *********************************/

        uniqueInput = extractUniqueDataTypefromParametersObject(
          targetStoredProcedure['parameters'],
          'IN'
        );

        if (Object.keys(uniqueInput).length > 0) {
          importBlockPackageObj[
            `${ConfigObject.getModelPackageName()}.${firstLetterCaptalize(
              storedProcedureName
            )}InputDTO`
          ] = {};
          serviceInputObj[`${storedProcedureName}InputDTO`] = {};
        }

        /*********************** Output Parameter Model *********************************/
        uniqueOutput = extractUniqueDataTypefromParametersObject(
          targetStoredProcedure['parameters'],
          'OUT'
        );
        if (Object.keys(uniqueOutput).length > 0) {
          importBlockPackageObj[
            `${ConfigObject.getModelPackageName()}.${firstLetterCaptalize(
              storedProcedureName
            )}OutputDTO`
          ] = {};
          serviceOutputObj[`${storedProcedureName}OutputDTO`] = {};
        }
      }

      /*********************** ResultSet Model *********************************/

      if (isNotEmptyObject(targetStoredProcedure['resultSet']) == true) {
        uniqueResultSet = extractUniqueDataTypefromParametersObject(
          targetStoredProcedure['resultSet'],
          'OUT'
        );
        if (Object.keys(uniqueResultSet).length > 0) {
          importBlockPackageObj[
            `${ConfigObject.getModelPackageName()}.${firstLetterCaptalize(
              storedProcedureName
            )}ResultListDTO`
          ] = {};
          importBlockPackageObj[`java.util.List`] = {};
          serviceResultListObj[`${storedProcedureName}ResultListDTO`] = {};
        }
      }

      spRestBodyBlock += serviceCallStoredProcedureWithParameters(
        storedProcedureName,
        serviceInputObj,
        serviceOutputObj,
        serviceResultListObj,

        uniqueInput,
        uniqueOutput,
        uniqueResultSet
      );

      shouldCreateFile = true;
      const datasourceName = targetStoredProcedure['datasourceName'];
    }
  );

  /********************************************************************************
   *                        restServices API
   ********************************************************************************/
  Object.keys(applicationObject['dataAccessLayer']['restServices']).map(
    (restServiceName) => {
      const targetRestService =
        getRestServiceByRestServiceName(restServiceName);

      let uniqueInput = ``;
      let uniqueOutput = ``;
      let uniqueResultSet = ``;

      /*********************** requestBody IN/OUT Model *********************************/
      if (
        isNotEmptyObject(targetRestService['request']['requestBody']) == true
      ) {
        /*********************** Input Parameter Model *********************************/
        uniqueInput = extractUniqueDataTypefromParametersObject(
          targetRestService['request']['requestBody'],
          'IN'
        );
        if (Object.keys(uniqueInput).length > 0) {
          importBlockObj[
            `${ConfigObject.getModelPackageName()}.${firstLetterCaptalize(
              restServiceName
            )}InputDTO`
          ] = {};

          serviceInputObj[`${restServiceName}InputDTO`] = {};
        }
        /*********************** Output Parameter Model *********************************/
        uniqueOutput = extractUniqueDataTypefromParametersObject(
          targetRestService['request']['requestBody'],
          'OUT'
        );
        if (Object.keys(uniqueOutput).length > 0) {
          importBlockObj[
            `${ConfigObject.getModelPackageName()}.${firstLetterCaptalize(
              restServiceName
            )}OutputDTO`
          ] = {};
          importBlockObj[`org.springframework.http.ResponseEntity`] = {};

          serviceOutputObj[`${restServiceName}OutputDTO`] = {};
        }
      }
      /*********************** responseBody OUT Model *********************************/
      if (
        isNotEmptyObject(targetRestService['response']['responseBody']) == true
      ) {
        uniqueResponse = extractUniqueDataTypefromParametersObject(
          targetRestService['response']['responseBody'],
          'OUT'
        );
        if (Object.keys(uniqueResponse).length > 0) {
          importBlockObj[
            `${ConfigObject.getModelPackageName()}.${firstLetterCaptalize(
              restServiceName
            )}OutputDTO`
          ] = {};
          importBlockObj[`org.springframework.http.ResponseEntity`] = {};
          serviceResponseObj[`${restServiceName}OutputDTO`] = {};
        }
      }

      spRestBodyBlock += serviceRestServiceCaller(
        restServiceName,
        targetRestService,
        uniqueInput,
        serviceInputObj,
        serviceOutputObj,
        serviceResponseObj
      );
    }
  );

  // *********************************************************
  // Storage Service
  const storageService = `package com.behsazan.projects.mutualUnderstanding.service;

  import org.springframework.core.io.Resource;
  import org.springframework.web.multipart.MultipartFile;
  
  import java.io.IOException;
  import java.nio.file.Path;
  import java.util.stream.Stream;
  
  public interface StorageService {
      void init();
  
      String store(MultipartFile file);
  
      Stream<Path> loadAll();
  
      Path load(String filename);
  
      // Resource loadAsResource(String filename);
      byte[] loadAsResource(String filename);
  
      void deleteAll();
  }`
  createFile(
    servicePath,
    `StorageService.java`,
    storageService
  );
  // *********************************************************
  //  CustomerWebService
  const customerWebService = `package com.behsazan.projects.mutualUnderstanding.service;
import com.behsazan.projects.mutualUnderstanding.model.CustomerLifeCycleOutputDTO;

public interface CustomerLifeCycleWebService {
    CustomerLifeCycleOutputDTO callUserAuthentication(int intervalCode, long customerCode) throws Exception;
}
`
createFile(
  servicePath,
  `CustomerLifeCycleWebService.java`,
  customerWebService
);

  shouldCreateFile = true;

  let importString = ``;

  Object.keys(importBlockObj).map((importUnit) => {
    importString += `
import ${importUnit};`;
  });

  Object.keys(importBlockPackageObj).map((importUnit) => {
    importString += `
import ${importUnit};`;
  });

  importString += generateImportStatementFromUniqueDataTypes(uniqueInput);

  if (shouldCreateFile == true) {
    let injectedContent = `package ${ConfigObject.getServicePackageName()};
${importString}
${methodName}
${jpaBodyBlock}
${spRestBodyBlock}
}`;
    // console.log(injectedContent);
    /**
     * Create File
     */
    isPathExists(servicePath);
    createFile(
      servicePath,
      applicationObject['appObjectIdClass'] + `Service.java`,
      injectedContent
    );
  }
};

module.exports = ServiceGenerator;
