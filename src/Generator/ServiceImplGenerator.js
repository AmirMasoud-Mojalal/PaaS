const {
  isPathExists,
  createFile,
  isNotEmptyObject,
  firstLetterCaptalize,
  serviceImplJpaMethodCaller,
  serviceImplRestServiceCaller,
  extractUniqueDataTypefromParametersObject,
  generateImportStatementFromUniqueDataTypes,
} = require('./util');
const {
  getJpaByJpaName,
  getRestServiceByRestServiceName,
  generateJakartaStoredProcedureQuery,
  getStoredProcedureByStoredProcedureName,
} = require('./DomainConfig');

const {
  getRoutePathString,
  getOwnOrParentPathVariableByRouteName,
} = require('./ContentMapValidator');

const ServiceImplGenerator = (applicationObject, ConfigObject) => {
  let shouldCreateFile = false;
  let importBlockObj = {};
  let serviceInputObj = {};
  let serviceOutputObj = {};
  let serviceResultSetObj = {};
  let entityManagerString = ``;
  let entityManagerObject = {};
  let cosntantImportBlock = `import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;`;

  let restServiceInputObj = {};
  let restServiceOutputObj = {};
  let restServiceResponseObj = {};

  let instanceBlock = ``;

  let uniqueInputDataType = ``;
  let uniqueOutputDataType = ``;
  let uniqueResultSetDataType = ``;

  let methodName = `
@Slf4j
@Service
@RequiredArgsConstructor
public class ${applicationObject['appObjectIdClass']}ServiceImpl implements ${applicationObject['appObjectIdClass']}Service {`;
  let bodyBlock = ``;
  const serviceImplPath = ConfigObject.getServiceImplPath();

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

    cosntantImportBlock += `
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.security.Principal;
import java.util.Map;`;

    importBlockObj[
      `${ConfigObject.getEntityPackageName(
        datasourceName
      )}.${firstLetterCaptalize(jpaName)}`
    ] = {};
    importBlockObj[
      `${ConfigObject.getExceptionPackageName()}.EntityNotFoundException`
    ] = {};
    importBlockObj[
      `${ConfigObject.getModelPackageName()}.${firstLetterCaptalize(
        jpaName
      )}DTO`
    ] = {};
    importBlockObj[
      `${ConfigObject.getRepositoryPackageName(
        datasourceName
      )}.${firstLetterCaptalize(jpaName)}Repository`
    ] = {};
    importBlockObj[
      `${ConfigObject.getServicePackageName()}.${applicationObject['appObjectIdClass']
      }Service`
    ] = {};
    importBlockObj[
      `${ConfigObject.getServicePackageName()}.logic.${firstLetterCaptalize(
        jpaName
      )}Logic`
    ] = {};

    instanceBlock += `
    private final ${firstLetterCaptalize(
      jpaName
    )}Repository ${jpaName}Repository;
    private final ${firstLetterCaptalize(jpaName)}Logic ${jpaName}Logic;`;

    let tmp = {};
    Object.keys(applicationObject['dataAccessLayer']['jpas'][jpaName]).map(
      (jpaMethodName) => {
        const serviceImplJpa = serviceImplJpaMethodCaller(
          applicationObject['appObjectId'],
          jpaMethodName,
          jpaName,
          targetJpa,
          // ConfigObject['webAccessPath'],
          result['uniqueIndexes']
          // pathVariables
        );
        bodyBlock += serviceImplJpa.resultString;
        tmp = serviceImplJpa.typeList;

        Object.keys(tmp).map((importUnit) => {
          importBlockObj[importUnit] = tmp[importUnit];
        });
      }
    );

    const generatedService = serviceImplJpaMethodCaller(
      applicationObject['appObjectId'],
      'dataSourceProvider',
      jpaName,
      targetJpa,
      result['uniqueIndexes']
    );

    // generate Service implemention for DataSourceProvider
    if (Object.keys(generatedService['dataSourceProvider']).length > 0) {
      Object.keys(generatedService['dataSourceProvider']).includes('storedProcedure')
        && (

          Object.keys(generatedService['dataSourceProvider']['storedProcedure']).map((storedProcedureName) => {
            let importString = ``;
            let importBlockPackageObj = {}
            let serviceInputObj = {}
            let serviceOutputObj = {}
            // let serviceResultListObj = {}
            let importBlockObj = {}
            let serviceClassOpen = `
@Slf4j
@Service
@RequiredArgsConstructor
public class ${firstLetterCaptalize(storedProcedureName)}ServiceImpl implements ${firstLetterCaptalize(storedProcedureName)}Service {`
            let serviceClassClose = `}`

            serviceResultSetObj = {}
            uniqueResultSetDataType = {}

            importBlockObj[`java.security.Principal`] = {};
            importBlockObj[`jakarta.persistence.EntityManager`] = {};
            importBlockObj[`com.behsazan.projects.mutualUnderstanding.exception.SQLGrammerException`] = {};
            importBlockObj[`jakarta.persistence.StoredProcedureQuery`] = {};

            const targetStoredProcedure =
              getStoredProcedureByStoredProcedureName(storedProcedureName, ConfigObject['mode']);

            cosntantImportBlock += `
import jakarta.persistence.EntityManager;
import jakarta.persistence.ParameterMode;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.StoredProcedureQuery;`;
            importBlockObj[
              `${ConfigObject.getServicePackageName()}.${applicationObject['appObjectIdClass']
              }Service`
            ] = {};

            if (!(targetStoredProcedure['datasourceName'] in entityManagerObject)) {
              entityManagerObject[
                targetStoredProcedure['datasourceName']
              ] = `\r@PersistenceContext(unitName = "${targetStoredProcedure['datasourceName']}")
                private EntityManager ${targetStoredProcedure['datasourceName']}entityManager;`;
              entityManagerString = `    @PersistenceContext(unitName = "${targetStoredProcedure['datasourceName']}")
    private EntityManager ${targetStoredProcedure['datasourceName']}EntityManager;`;
            }


            /*********************** IN/OUT Model *********************************/
            if (isNotEmptyObject(targetStoredProcedure['parameters']) == true) {
              /*********************** Input Parameter Model *********************************/

              uniqueInputDataType = extractUniqueDataTypefromParametersObject(
                targetStoredProcedure['parameters'],
                'IN'
              );
              if (Object.keys(uniqueInputDataType).length > 0) {
                Object.keys(uniqueInputDataType).map(input => {
                  if (input == 'BigDecimal') {
                    importBlockObj['java.math.BigDecimal'] = {}
                  }
                })

                importBlockObj[
                  `${ConfigObject.getModelPackageName()}.${firstLetterCaptalize(
                    storedProcedureName
                  )}InputDTO`
                ] = {};
                importBlockObj[`static jakarta.persistence.ParameterMode.IN`] = {};
                serviceInputObj[`${storedProcedureName}InputDTO`] = {};
              }

              /*********************** Output Parameter Model *********************************/
              uniqueOutputDataType = extractUniqueDataTypefromParametersObject(
                targetStoredProcedure['parameters'],
                'OUT'
              );
              if (Object.keys(uniqueOutputDataType).length > 0) {
                importBlockObj[
                  `${ConfigObject.getModelPackageName()}.${firstLetterCaptalize(
                    storedProcedureName
                  )}OutputDTO`
                ] = {};

                importBlockObj[`static jakarta.persistence.ParameterMode.OUT`] = {};
                serviceOutputObj[`${storedProcedureName}OutputDTO`] = {};
              }
            }

            /*********************** ResultSet Model *********************************/
            if (isNotEmptyObject(targetStoredProcedure['resultSet']) == true) {
              uniqueResultSetDataType = extractUniqueDataTypefromParametersObject(
                targetStoredProcedure['resultSet'],
                'OUT'
              );
              if (Object.keys(uniqueResultSetDataType).length > 0) {
                importBlockObj[
                  `${ConfigObject.getModelPackageName()}.${firstLetterCaptalize(
                    storedProcedureName
                  )}ResultListDTO`
                ] = {};
                importBlockObj[`java.util.List`] = {};
                importBlockObj[`java.util.ArrayList`] = {};
                importBlockObj[`java.util.ListIterator`] = {};

                serviceResultSetObj[`${storedProcedureName}ResultListDTO`] = {};
              }
            }
            // else {
            //   uniqueResultSetDataType = {}
            // }


            importBlockObj[
              `${ConfigObject.getServicePackageName()}.${firstLetterCaptalize(
                storedProcedureName
              )}Service`
            ] = {};

            // if (jpaName == 'tafahomInformation') {
            // if (jpaName == 'sendToHQ') {
            //   // if (storedProcedureName == 'extCustNo2Name') {
            //   // if (storedProcedureName == 'fullAccountInfo') {
            //   console.log(storedProcedureName);
            // console.log(targetStoredProcedure);
            //   // console.log(targetStoredProcedure['resultSet']);

            //   // console.log(serviceInputObj);
            //   // console.log(uniqueInputDataType);

            //   // console.log(serviceOutputObj)
            //   // console.log(uniqueOutputDataType)

            //   console.log(serviceResultSetObj);
            //   // console.log(serviceResultListObj);
            //   console.log(uniqueResultSetDataType);


            //   console.log('');
            // }

            let spRestBodyBlock = generateJakartaStoredProcedureQuery(
              storedProcedureName,
              targetStoredProcedure,

              serviceInputObj,
              serviceOutputObj,
              serviceResultSetObj,

              uniqueInputDataType,
              uniqueOutputDataType,
              uniqueResultSetDataType
            );

            //             if(jpaName == 'account'){
            //   // console.log(targetStoredProcedure);
            //   console.log(spRestBodyBlock);
            // }
            // let spRestBodyBlock111 = serviceCallStoredProcedureWithParameters(
            //   storedProcedureName,
            //   serviceInputObj,
            //   serviceOutputObj,
            //   serviceResultListObj,

            //   uniqueInputDataType,
            //   uniqueOutputDataType,
            //   uniqueResultSetDataType
            // );

            // console.log('spRestBodyBlock');
            // console.log(spRestBodyBlock);

            shouldCreateFile = true;

            // TODO should be organized in an Object
            importString += `
import com.behsazan.projects.mutualUnderstanding.common.Encoding;
import java.math.BigDecimal;
import java.util.Objects;`


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
              let injectedContent = `package ${ConfigObject.getServiceImplPackageName()};
${importString}
${cosntantImportBlock}
${serviceClassOpen}
${entityManagerString}
${spRestBodyBlock}
${serviceClassClose}`;

              if ((jpaName != 'search')) {
                isPathExists(serviceImplPath);
                createFile(
                  serviceImplPath,
                  firstLetterCaptalize(storedProcedureName) + `ServiceImpl.java`,
                  injectedContent
                );
              }

            }


          })
        )
      Object.keys(generatedService['dataSourceProvider']).includes('restService')
        && ''
      // Object.keys(generatedModel['dataSourceProvider']).map((k) => {
      //   // entityPath = ConfigObject.getEntityPath(datasourceName);


      // })
    }
    // console.log();
    //     if (Object.keys(generatedService['dataSourceProvider']).length > 0) {
    //       Object.keys(generatedService['dataSourceProvider']).includes('storedProcedure')
    //         && (

    //           Object.keys(generatedService['dataSourceProvider']['storedProcedure']).map((storedProcedureName) => {
    //             let importString = ``;
    //             let importBlockPackageObj = {}
    //             let serviceInputObj = {}
    //             let serviceOutputObj = {}
    //             // let serviceResultListObj = {}
    //             let importBlockObj = {}
    //             let serviceClassOpen = `
    // @Slf4j
    // @Service
    // @RequiredArgsConstructor
    // public class ${firstLetterCaptalize(storedProcedureName)}ServiceImpl implements ${firstLetterCaptalize(storedProcedureName)}Service {`
    //             let serviceClassClose = `}`

    //             serviceResultSetObj = {}
    //             uniqueResultSetDataType = {}

    //             importBlockObj[`java.security.Principal`] = {};
    //             importBlockObj[`jakarta.persistence.EntityManager`] = {};
    //             importBlockObj[`jakarta.persistence.StoredProcedureQuery`] = {};

    //             const targetStoredProcedure =
    //               getStoredProcedureByStoredProcedureName(storedProcedureName, ConfigObject['mode']);

    //             cosntantImportBlock += `
    // import jakarta.persistence.EntityManager;
    // import jakarta.persistence.ParameterMode;
    // import jakarta.persistence.PersistenceContext;
    // import jakarta.persistence.StoredProcedureQuery;`;
    //             importBlockObj[
    //               `${ConfigObject.getServicePackageName()}.${applicationObject['appObjectIdClass']
    //               }Service`
    //             ] = {};

    //             if (!(targetStoredProcedure['datasourceName'] in entityManagerObject)) {
    //               entityManagerObject[
    //                 targetStoredProcedure['datasourceName']
    //               ] = `\r@PersistenceContext(unitName = "${targetStoredProcedure['datasourceName']}")
    //                 private EntityManager ${targetStoredProcedure['datasourceName']}entityManager;`;
    //               entityManagerString = `    @PersistenceContext(unitName = "${targetStoredProcedure['datasourceName']}")
    //     private EntityManager ${targetStoredProcedure['datasourceName']}EntityManager;`;
    //             }


    //             /*********************** IN/OUT Model *********************************/
    //             if (isNotEmptyObject(targetStoredProcedure['parameters']) == true) {
    //               /*********************** Input Parameter Model *********************************/

    //               uniqueInputDataType = extractUniqueDataTypefromParametersObject(
    //                 targetStoredProcedure['parameters'],
    //                 'IN'
    //               );
    //               if (Object.keys(uniqueInputDataType).length > 0) {
    //                 Object.keys(uniqueInputDataType).map(input => {
    //                   if (input == 'BigDecimal') {
    //                     importBlockObj['java.math.BigDecimal'] = {}
    //                   }
    //                 })

    //                 importBlockObj[
    //                   `${ConfigObject.getModelPackageName()}.${firstLetterCaptalize(
    //                     storedProcedureName
    //                   )}InputDTO`
    //                 ] = {};
    //                 importBlockObj[`static jakarta.persistence.ParameterMode.IN`] = {};
    //                 importBlockObj[`com.behsazan.projects.mutualUnderstanding.common.Encoding`] = {};
    //                 serviceInputObj[`${storedProcedureName}InputDTO`] = {};
    //               }

    //               /*********************** Output Parameter Model *********************************/
    //               uniqueOutputDataType = extractUniqueDataTypefromParametersObject(
    //                 targetStoredProcedure['parameters'],
    //                 'OUT'
    //               );
    //               if (Object.keys(uniqueOutputDataType).length > 0) {
    //                 importBlockObj[
    //                   `${ConfigObject.getModelPackageName()}.${firstLetterCaptalize(
    //                     storedProcedureName
    //                   )}OutputDTO`
    //                 ] = {};

    //                 importBlockObj[`static jakarta.persistence.ParameterMode.OUT`] = {};
    //                 serviceOutputObj[`${storedProcedureName}OutputDTO`] = {};
    //               }
    //             }

    //             /*********************** ResultSet Model *********************************/
    //             if (isNotEmptyObject(targetStoredProcedure['resultSet']) == true) {
    //               uniqueResultSetDataType = extractUniqueDataTypefromParametersObject(
    //                 targetStoredProcedure['resultSet'],
    //                 'OUT'
    //               );
    //               if (Object.keys(uniqueResultSetDataType).length > 0) {
    //                 importBlockObj[
    //                   `${ConfigObject.getModelPackageName()}.${firstLetterCaptalize(
    //                     storedProcedureName
    //                   )}ResultListDTO`
    //                 ] = {};
    //                 importBlockObj[`java.util.List`] = {};
    //                 importBlockObj[`java.util.ArrayList`] = {};
    //                 importBlockObj[`java.util.ListIterator`] = {};
    //                 importBlockObj[`com.behsazan.projects.mutualUnderstanding.common.Encoding`] = {};

    //                 serviceResultSetObj[`${storedProcedureName}ResultListDTO`] = {};
    //               }
    //             }
    //             // else {
    //             //   uniqueResultSetDataType = {}
    //             // }


    //             importBlockObj[
    //               `${ConfigObject.getServicePackageName()}.${firstLetterCaptalize(
    //                 storedProcedureName
    //               )}Service`
    //             ] = {};

    //             // if (jpaName == 'tafahomInformation') {
    //             //   // if (storedProcedureName == 'extCustNo2Name') {
    //             //   // if (storedProcedureName == 'fullAccountInfo') {
    //             //   console.log(storedProcedureName);
    //             //   // console.log(targetStoredProcedure);
    //             //   // console.log(targetStoredProcedure['resultSet']);

    //             //   // console.log(serviceInputObj);
    //             //   // console.log(uniqueInputDataType);

    //             //   // console.log(serviceOutputObj)
    //             //   // console.log(uniqueOutputDataType)

    //             //   console.log(serviceResultSetObj);
    //             //   // console.log(serviceResultListObj);
    //             //   console.log(uniqueResultSetDataType);


    //             //   console.log('');
    //             // }

    //             let spRestBodyBlock = generateJakartaStoredProcedureQuery(
    //               storedProcedureName,
    //               targetStoredProcedure,

    //               serviceInputObj,
    //               serviceOutputObj,
    //               serviceResultSetObj,

    //               uniqueInputDataType,
    //               uniqueOutputDataType,
    //               uniqueResultSetDataType
    //             );

    //             //             if(jpaName == 'account'){
    //             //   // console.log(targetStoredProcedure);
    //             //   console.log(spRestBodyBlock);
    //             // }
    //             // let spRestBodyBlock111 = serviceCallStoredProcedureWithParameters(
    //             //   storedProcedureName,
    //             //   serviceInputObj,
    //             //   serviceOutputObj,
    //             //   serviceResultListObj,

    //             //   uniqueInputDataType,
    //             //   uniqueOutputDataType,
    //             //   uniqueResultSetDataType
    //             // );

    //             // console.log('spRestBodyBlock');
    //             // console.log(spRestBodyBlock);

    //             shouldCreateFile = true;



    //             Object.keys(importBlockObj).map((importUnit) => {
    //               importString += `
    // import ${importUnit};`;
    //             });

    //             Object.keys(importBlockPackageObj).map((importUnit) => {
    //               importString += `
    // import ${importUnit};`;
    //             });

    //             shouldCreateFile = true;
    //             const datasourceName = targetStoredProcedure['datasourceName'];

    //             if (shouldCreateFile == true) {
    //               let injectedContent = `package ${ConfigObject.getServiceImplPackageName()};
    // ${importString}
    // ${cosntantImportBlock}
    // ${serviceClassOpen}
    // ${entityManagerString}
    // ${spRestBodyBlock}
    // ${serviceClassClose}`;

    //               isPathExists(serviceImplPath);
    //               createFile(
    //                 serviceImplPath,
    //                 firstLetterCaptalize(storedProcedureName) + `ServiceImpl.java`,
    //                 injectedContent
    //               );
    //             }


    //           })
    //         )
    //       Object.keys(generatedService['dataSourceProvider']).includes('restService')
    //         && ''
    //       // Object.keys(generatedModel['dataSourceProvider']).map((k) => {
    //       //   // entityPath = ConfigObject.getEntityPath(datasourceName);


    //       // })
    //     }
    // if(Object.keys(generatedService))
    importBlockObj[`com.behsazan.projects.mutualUnderstanding.common.Encoding`] = {};

  });
  /********************************************************************************
   *                        storedProcedures API
   ********************************************************************************/

  Object.keys(applicationObject['dataAccessLayer']['storedProcedures']).map(
    (storedProcedureName) => {
      // Set required variable name
      const targetStoredProcedure =
        getStoredProcedureByStoredProcedureName(storedProcedureName, ConfigObject['mode']);

      cosntantImportBlock += `
import jakarta.persistence.EntityManager;
import jakarta.persistence.ParameterMode;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.StoredProcedureQuery;`;
      importBlockObj[
        `${ConfigObject.getServicePackageName()}.${applicationObject['appObjectIdClass']
        }Service`
      ] = {};

      if (!(targetStoredProcedure['datasourceName'] in entityManagerObject)) {
        entityManagerObject[
          targetStoredProcedure['datasourceName']
        ] = `\r@PersistenceContext(unitName = "${targetStoredProcedure['datasourceName']}")
  private EntityManager ${targetStoredProcedure['datasourceName']}entityManager;`;
        entityManagerString += `    @PersistenceContext(unitName = "${targetStoredProcedure['datasourceName']}")
    private EntityManager ${targetStoredProcedure['datasourceName']}entityManager;`;
      }
      /*********************** IN/OUT Model *********************************/
      if (isNotEmptyObject(targetStoredProcedure['parameters']) == true) {
        /*********************** Input Parameter Model *********************************/
        uniqueInputDataType = extractUniqueDataTypefromParametersObject(
          targetStoredProcedure['parameters'],
          'IN'
        );
        if (Object.keys(uniqueInputDataType).length > 0) {
          importBlockObj[
            `${ConfigObject.getModelPackageName()}.${firstLetterCaptalize(
              storedProcedureName
            )}InputDTO`
          ] = {};

          importBlockObj[`static jakarta.persistence.ParameterMode.IN`] = {};
          serviceInputObj[`${storedProcedureName}InputDTO`] = {};
        }

        /*********************** Output Parameter Model *********************************/
        uniqueOutputDataType = extractUniqueDataTypefromParametersObject(
          targetStoredProcedure['parameters'],
          'OUT'
        );
        if (Object.keys(uniqueOutputDataType).length > 0) {
          importBlockObj[
            `${ConfigObject.getModelPackageName()}.${firstLetterCaptalize(
              storedProcedureName
            )}OutputDTO`
          ] = {};

          importBlockObj[`static jakarta.persistence.ParameterMode.OUT`] = {};
          serviceOutputObj[`${storedProcedureName}OutputDTO`] = {};
        }
      }

      /*********************** ResultSet Model *********************************/
      if (isNotEmptyObject(targetStoredProcedure['resultSet']) == true) {
        uniqueResultSetDataType = extractUniqueDataTypefromParametersObject(
          targetStoredProcedure['resultSet'],
          'OUT'
        );
        if (Object.keys(uniqueResultSetDataType).length > 0) {
          importBlockObj[
            `${ConfigObject.getModelPackageName()}.${firstLetterCaptalize(
              storedProcedureName
            )}ResultListDTO`
          ] = {};
          importBlockObj[`java.util.List`] = {};
          importBlockObj[`java.util.ArrayList`] = {};
          importBlockObj[`java.util.ListIterator`] = {};
          serviceResultSetObj[`${storedProcedureName}ResultListDTO`] = {};
        }
      }

      // console.log(targetStoredProcedure['resultSet']);
      shouldCreateFile = true;

      const datasourceName = targetStoredProcedure['datasourceName'];

      bodyBlock += generateJakartaStoredProcedureQuery(
        storedProcedureName,
        targetStoredProcedure,
        true,
        serviceInputObj,
        serviceOutputObj,
        serviceResultSetObj,

        uniqueInputDataType,
        uniqueOutputDataType,
        uniqueResultSetDataType
      );
    }
  );

  /********************************************************************************
   *                        REST API
   ********************************************************************************/
  Object.keys(applicationObject['dataAccessLayer']['restServices']).map(
    (restServiceName) => {
      const targetRestService =
        getRestServiceByRestServiceName(restServiceName);

      let uniqueInputDataType = ``;
      let uniqueOutputDataType = ``;
      let uniqueResultSetDataType = ``;

      importBlockObj[
        `${ConfigObject.getServicePackageName()}.${applicationObject['appObjectIdClass']
        }Service`
      ] = {};
      importBlockObj[`org.springframework.http.HttpEntity`] = {};

      importBlockObj[`org.springframework.http.HttpMethod`] = {};

      // importBlockObj[`org.springframework.beans.factory.annotation.Autowired`] =
      //   {};

      importBlockObj[`org.springframework.web.client.RestTemplate`] = {};

      instanceBlock += `    private final RestTemplate restTemplate;`;
      /*********************** requestBody IN/OUT Model *********************************/
      if (
        isNotEmptyObject(targetRestService['request']['requestBody']) == true
      ) {
        /*********************** Input Parameter Model *********************************/
        uniqueInputDataType = extractUniqueDataTypefromParametersObject(
          targetRestService['request']['requestBody'],
          'IN'
        );
        if (Object.keys(uniqueInputDataType).length > 0) {
          importBlockObj[
            `${ConfigObject.getModelPackageName()}.${firstLetterCaptalize(
              restServiceName
            )}InputDTO`
          ] = {};

          restServiceInputObj[`${restServiceName}InputDTO`] = {};
        }

        /*********************** Output Parameter Model *********************************/
        uniqueOutputDataType = extractUniqueDataTypefromParametersObject(
          targetRestService['request']['requestBody'],
          'OUT'
        );
        if (Object.keys(uniqueOutputDataType).length > 0) {
          importBlockObj[
            `${ConfigObject.getModelPackageName()}.${firstLetterCaptalize(
              restServiceName
            )}OutputDTO`
          ] = {};
          importBlockObj[`org.springframework.http.ResponseEntity`] = {};

          restServiceOutputObj[`${restServiceName}OutputDTO`] = {};
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
          restServiceResponseObj[`${restServiceName}OutputDTO`] = {};
        }
      }

      bodyBlock += serviceImplRestServiceCaller(
        restServiceName,
        targetRestService,
        uniqueInputDataType,
        restServiceInputObj,
        restServiceOutputObj,
        restServiceResponseObj
      );
    }
  );

  // *********************************************************
  // File System Storage Service
  const fileSystemStorageService = `package com.behsazan.projects.mutualUnderstanding.service.impl;

  import com.behsazan.projects.mutualUnderstanding.config.StorageProperties;
  import com.behsazan.projects.mutualUnderstanding.exception.StorageException;
  import com.behsazan.projects.mutualUnderstanding.exception.StorageFileNotFoundException;
  import com.behsazan.projects.mutualUnderstanding.model.request.FileDownloadRequest;
  import com.behsazan.projects.mutualUnderstanding.model.request.FileUploadRequest;
  // import com.behsazan.projects.mutualUnderstanding.model.response.Abc;
  import com.behsazan.projects.mutualUnderstanding.service.StorageService;
  import com.fasterxml.jackson.databind.JsonNode;
  import com.fasterxml.jackson.databind.ObjectMapper;
  import com.fasterxml.jackson.databind.node.ObjectNode;
  import lombok.RequiredArgsConstructor;
  import org.apache.tomcat.util.codec.binary.Base64;
  import org.springframework.beans.factory.annotation.Autowired;
  import org.springframework.core.io.ByteArrayResource;
  import org.springframework.core.io.Resource;
  import org.springframework.core.io.UrlResource;
  import org.springframework.http.*;
  import org.springframework.security.crypto.codec.Hex;
  import org.springframework.stereotype.Service;
  import org.springframework.util.FileSystemUtils;
  import org.springframework.util.LinkedMultiValueMap;
  import org.springframework.util.MultiValueMap;
  import org.springframework.web.client.RestTemplate;
  import org.springframework.web.multipart.MultipartFile;
  
  import java.io.IOException;
  import java.io.InputStream;
  import java.net.MalformedURLException;
  import java.nio.file.Files;
  import java.nio.file.Path;
  import java.nio.file.Paths;
  import java.nio.file.StandardCopyOption;
  import java.util.HexFormat;
  import java.util.stream.Stream;
  
  @RequiredArgsConstructor
  @Service
  public class FileSystemStorageService implements StorageService {
      private final Path rootLocation;
  //    @Autowired
  //    RestTemplate restTemplate;
  
  
  //    ObjectMapper mapper;
  
      @Autowired
      public FileSystemStorageService(StorageProperties properties) {
  
          if (properties.getLocation().trim().length() == 0) {
              throw new StorageException("File upload location can not be Empty.");
          }
  
          this.rootLocation = Paths.get(properties.getLocation());
      }
  
      @Override
      public String store(MultipartFile file) {
  
          try {
              //        String uploadFile = Base64.encodeBase64String(file.getBytes());
  
              /*
              Alborz.pdf
              504373
              application/pdf
  */
  
              //  convert byte[] to HEX string
              HexFormat hexFormat = HexFormat.of();
              String fileInHex = hexFormat.formatHex(file.getBytes());
  
              System.out.println(file.getSize());
              System.out.println(fileInHex.length());
  
              FileUploadRequest fileUploadRequest = FileUploadRequest.builder()
                      .pi_ACTIVITYNO(0)
                      .pi_CASENO(159753)      //fnrDma/srvCaseDocsRetrieve
                      //  tafahom.tafCode
                      .pi_CASENOGEN(1)
                      .pi_CASETYPE(1)
                      .pi_DOCDESC("")
                      .pi_DOCNO(0)
                      .pi_DOCPAGENUMBER(1)
                      .pi_DOCTYPENO(23004)
  //                    .pi_DataFile("")
                      //                  .casetype(3)
                      .pi_DataFile(fileInHex)
                      //                  .datafile(Base64.encodeBase64String(file.getBytes()))
                      .pi_ENVCODE(1)
                      //                  .envcode(5)
                      .pi_EXECODE(0)
                      .pi_EXPIREDATE(0)
                      //                                            tafahom.expireDate()
                      .pi_FACODE(0)
                      //                  .facode(3)
                      .pi_FileName("fileMe.pdf")
                      .pi_GROUPCODE(0)
                      .pi_IBRANCH(2402)
                      .pi_IDATE(14020401)
                      //                  .idate(0)               //  Date of today
                      .pi_IUSERID("Mojalal")
                      .pi_OLDDOCNO(0)
                      .pi_OWNERCODE(42849398)
                      //                  .ownercode(428493982)   //  Error - Asked from Ramezani
                      .pi_OWNERTYPE(2)
                      //                    .ownertype(1)
                      .pi_PAGENO(1)
                      .pi_PARNTID("")
                      .pi_PRODUCTCODE(254)
                      .pi_ROLECODE(1)
                      .pi_STATUS(2)
                      .pi_SUBGROUPCODE(0)
                      .pi_VERSIONNO(0)
                      .build();
  
              //            Hex.encode()
              //            ObjectMapper mapper = new ObjectMapper();
              //            String josn = mapper.writeValueAsString(fileUploadRequest);
  
  
              //            file.getInputStream();
              //            byte[] bytes = file.getBytes();
              //            System.out.println(bytes.length);
              //            byte[] dataFile = new byte[(int) bytes.length];
  
              HttpHeaders httpHeader = new HttpHeaders();
              httpHeader.setContentType(MediaType.APPLICATION_JSON);
  
              //            MultiValueMap<String, Object> body = new LinkedMultiValueMap<>();
              //            body.add("file", );
  
              HttpEntity<FileUploadRequest> entity = new HttpEntity<>(fileUploadRequest, httpHeader);
  
              RestTemplate restTemplate = new RestTemplate();
              ResponseEntity<String> responseEntity = restTemplate.exchange(
                      "http://172.20.238.27:9080/dmnDma/fnrDma/srvDocumentUpload",
                      HttpMethod.POST,
                      entity,
                      String.class
              );
  
              ObjectMapper mapper = new ObjectMapper();
              JsonNode root = mapper.readTree(responseEntity.getBody());
  
              JsonNode result = root.path("result");
              JsonNode ids = result.path("ids");
  
              return ids.asText();
  
          } catch (Exception e) {
              System.out.println(e);
          }
          //        try {
          //            if (file.isEmpty()) {
          //                throw new StorageException("Failed to store empty file.");
          //            }
          //            Path destinationFile = this.rootLocation.resolve(
          //                            Paths.get(file.getOriginalFilename()))
          //                    .normalize().toAbsolutePath();
          //            if (!destinationFile.getParent().equals(this.rootLocation.toAbsolutePath())) {
          //                // This is a security check
          //                throw new StorageException(
          //                        "Cannot store file outside current directory.");
          //            }
          //            try (InputStream inputStream = file.getInputStream()) {
          //                Files.copy(inputStream, destinationFile
          ////                        ,
          ////                        StandardCopyOption.REPLACE_EXISTING
          //                );
          //            }
          //        } catch (IOException e) {
          //            throw new StorageException("Failed to store file.", e);
          //        }
          return null;
      }
  
      @Override
      public Stream<Path> loadAll() {
          try {
              return Files.walk(this.rootLocation, 1)
                      .filter(path -> !path.equals(this.rootLocation))
                      .map(this.rootLocation::relativize);
          } catch (IOException e) {
              throw new StorageException("Failed to read stored files", e);
          }
  
      }
  
      @Override
      public Path load(String filename) {
          return rootLocation.resolve(filename);
      }
  
      /*   @Override
         public Resource loadAsResource(String filename) {
  
             //            MultiValueMap<String, Object> body = new LinkedMultiValueMap<>();
             //            body.add("file", );
  
             FileDownloadRequest fileUploadRequest = FileDownloadRequest.builder()
                     .id(filename)
                     .size(0)
                     .build();
  
             HttpHeaders httpHeader = new HttpHeaders();
             httpHeader.setContentType(MediaType.APPLICATION_JSON);
  
             HttpEntity<FileDownloadRequest> entity = new HttpEntity<>(fileUploadRequest, httpHeader);
  
             RestTemplate restTemplate = new RestTemplate();
             ResponseEntity<String> responseEntity = restTemplate.exchange(
                     "http://172.20.238.27:9080/dmnDma/fnrDma/srvDownloadDoc",
                     HttpMethod.POST,
                     entity,
                     String.class
             );
  
             try {
  
                 ObjectMapper mapper = new ObjectMapper();
                 JsonNode root = mapper.readTree(responseEntity.getBody());
                 JsonNode result = root.path("result");
                 JsonNode docDataHex = result.path("docDataHex");
  
                 //  convert HEX value to byte[]
                 HexFormat hexFormat = HexFormat.of();
  
     //            System.out.println(docDataHex.textValue());
                 System.out.println(docDataHex.textValue().length());
     //            System.out.println(hexFormat.parseHex(docDataHex.textValue()));
                 System.out.println(hexFormat.parseHex(docDataHex.textValue()).length);
  
                 byte[] fileInByteArray = hexFormat.parseHex(docDataHex.textValue());
  
                 ByteArrayResource byteArrayResource = new ByteArrayResource(fileInByteArray);
  
                 return byteArrayResource;
  
             } catch (Exception exception) {
                 return null;
             }
     //        Resource resource = new
     //          try {
     //              Path file = load(filename);
     //              Resource resource = new UrlResource(file.toUri());
     //              if (resource.exists() || resource.isReadable()) {
     //                  return resource;
     //              } else {
     //                  throw new StorageFileNotFoundException(
     //                          "Could not read file: " + filename);
     //
     //              }
     //          } catch (MalformedURLException e) {
     //              throw new StorageFileNotFoundException("Could not read file: " + filename, e);
     //          }
         }
     */
  
      @Override
      public byte[] loadAsResource(String filename) {
  
          //            MultiValueMap<String, Object> body = new LinkedMultiValueMap<>();
          //            body.add("file", );
  
          FileDownloadRequest fileUploadRequest = FileDownloadRequest.builder()
                  .id(filename)
                  .size(0)
                  .build();
  
          HttpHeaders httpHeader = new HttpHeaders();
          httpHeader.setContentType(MediaType.APPLICATION_JSON);
  
          HttpEntity<FileDownloadRequest> entity = new HttpEntity<>(fileUploadRequest, httpHeader);
  
          RestTemplate restTemplate = new RestTemplate();
          ResponseEntity<String> responseEntity = restTemplate.exchange(
                  "http://172.20.238.27:9080/dmnDma/fnrDma/srvDownloadDoc",
                  HttpMethod.POST,
                  entity,
                  String.class
          );
  
          try {
  
              ObjectMapper mapper = new ObjectMapper();
              JsonNode root = mapper.readTree(responseEntity.getBody());
              JsonNode result = root.path("result");
              JsonNode docDataHex = result.path("docDataHex");
  
              //  convert HEX value to byte[]
              HexFormat hexFormat = HexFormat.of();
  
  //            System.out.println(docDataHex.textValue());
              System.out.println(docDataHex.textValue().length());
  //            System.out.println(hexFormat.parseHex(docDataHex.textValue()));
              System.out.println(hexFormat.parseHex(docDataHex.textValue()).length);
  
              byte[] fileInByteArray = hexFormat.parseHex(docDataHex.textValue());
  
  //            ByteArrayResource byteArrayResource = new ByteArrayResource(fileInByteArray);
  //
  //            return byteArrayResource;
              return fileInByteArray;
  
          } catch (Exception exception) {
              return null;
          }
  //        Resource resource = new
  //          try {
  //              Path file = load(filename);
  //              Resource resource = new UrlResource(file.toUri());
  //              if (resource.exists() || resource.isReadable()) {
  //                  return resource;
  //              } else {
  //                  throw new StorageFileNotFoundException(
  //                          "Could not read file: " + filename);
  //
  //              }
  //          } catch (MalformedURLException e) {
  //              throw new StorageFileNotFoundException("Could not read file: " + filename, e);
  //          }
      }
  
      @Override
      public void deleteAll() {
          FileSystemUtils.deleteRecursively(rootLocation.toFile());
      }
  
      @Override
      public void init() {
          try {
              Files.createDirectories(rootLocation);
          } catch (IOException e) {
              throw new StorageException("Could not initialize storage", e);
          }
      }
  }
`
  createFile(
    serviceImplPath,
    `FileSystemStorageService.java`,
    fileSystemStorageService
  );

  // *********************************************************
  // CustomerLifeCycle
  const customerLifeCycle = `package com.behsazan.projects.mutualUnderstanding.service.impl;

import com.behsazan.projects.mutualUnderstanding.model.CustomerLifeCycleOutputDTO;
import com.behsazan.projects.mutualUnderstanding.service.CustomerLifeCycleWebService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.w3c.dom.Document;
import org.w3c.dom.NodeList;
import org.xml.sax.InputSource;
import org.xml.sax.SAXException;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLConnection;
import java.util.Date;

@Slf4j
@Service
//@RequiredArgsConstructor
//@Slf4j
public class CustomerLifeCycleWebServiceImpl implements CustomerLifeCycleWebService {
    //    public static void main(String[] args) throws Exception {
//        new CustomerLifeCycleWebService().callUserAuthentication();
//    }
    private String userAuthenticationSayadErrorCode = "";
    private String userAuthenticationSayadErrorDesc = "";
    private String userAuthenticationSayadRotoTypeBranch = "";
    private String userAuthenticationSayadToken = "";
    private Date tokenTime = null; // (new Date().getTime() - tokenTime.getTime() > 2 * 60 * 1000) ? "yes" : "no";
    /////////////////////////////////////////////////////////
    private String chequeIssueSayadErrorCode = "";
    private String chequeIssueSayadErrorDesc = "";
    private String L_ErrorDesc = "";
    private int L_ErrorCode;
    private int L_SUCCESSCOUNT;

    private String wsURL;

    public CustomerLifeCycleWebServiceImpl() {
//        if (Environment.isDebug)
//            wsURL = "http://172.16.167.25:9080/cheque-test/ws/ChequeWebService";
//        else
        wsURL = "https://customerranking.branch.bm/WebServiceCustomerGroups/GetDataForCustomerGroups.svc";
    }

    public int getL_SUCCESSCOUNT() {
        return L_SUCCESSCOUNT;
    }

    public void setL_SUCCESSCOUNT(int l_SUCCESSCOUNT) {
        L_SUCCESSCOUNT = l_SUCCESSCOUNT;
    }

    public String getL_ErrorDesc() {
        return L_ErrorDesc;
    }

    public void setL_ErrorDesc(String l_ErrorDesc) {
        L_ErrorDesc = l_ErrorDesc;
    }

    public int getL_ErrorCode() {
        return L_ErrorCode;
    }

    public void setL_ErrorCode(int l_ErrorCode) {
        L_ErrorCode = l_ErrorCode;
    }

    public String getUserName() {
        return "USERWEB2";
    }

    public String getPassword() {
        return "9622";
    }

    public CustomerLifeCycleOutputDTO callUserAuthentication(int intervalCode, long customerNumber/*MasterModel masterModel*/) throws Exception {
        String result = "";
//        String wsURL = "http://172.16.167.25:9080/cheque-test/ws/ChequeWebService";
        URL url = null;
        URLConnection connection = null;
        HttpURLConnection httpConn = null;
        String responseString = null;
        StringBuilder outputString = new StringBuilder();
        OutputStream out = null;
        InputStreamReader isr = null;
        BufferedReader in = null;
        resetValues();
        String xmlInput =
                "<soapenv:Envelope xmlns:soapenv=\\"http://schemas.xmlsoap.org/soap/envelope/\\" xmlns:tem=\\"http://tempuri.org/\\">\\n" +
                        \"   <soapenv:Header/>\\n\" +
                        \"   <soapenv:Body>\\n\" +
                        \"      <tem:GetCustomerScoreData>\\n\" +
                        \"         <!--Optional:-->\\n\" +
                        \"         <tem:userName>wsuser</tem:userName>\\n\" +
                        \"         <!--Optional:-->\\n\" +
                        \"         <tem:password>wsuser1401!%&amp;*</tem:password>\\n\" +
                        \"         <!--Optional:-->\\n\" +
                        \"         <tem:intervalCode>" + intervalCode + "</tem:intervalCode>\\n\" +
                        \"         <!--Optional:-->\\n\" +
                        \"         <tem:customerNumber>" + customerNumber + "</tem:customerNumber>\\n\" +
                        \"      </tem:GetCustomerScoreData>\\n\" +
                        \"   </soapenv:Body>\\n\" +
                        \"</soapenv:Envelope>\";

        CustomerLifeCycleOutputDTO customerLifeCycleOutputDTO = null;

        try {
            url = new URL(wsURL);
            System.out.println("callUserAuthentication called  with URL: " + wsURL + "  --   xmlInput:\\n " + xmlInput);
            connection = url.openConnection();
            httpConn = (HttpURLConnection) connection;

            byte[] buffer = new byte[xmlInput.length()];
            buffer = xmlInput.getBytes();

            String SOAPAction = "http://tempuri.org/IGetDataForCustomerGroups/GetCustomerScoreData";
            // Set the appropriate HTTP parameters.
            httpConn.setRequestProperty("Content-Length", String
                    .valueOf(buffer.length));

//            httpConn.setRequestProperty("Content-Type", "text/xml; charset=iso-8859-1");
            httpConn.setRequestProperty("Content-Type", "text/xml;");


            httpConn.setRequestProperty("SOAPAction", SOAPAction);
            httpConn.setRequestMethod("POST");
            httpConn.setDoOutput(true);
            httpConn.setDoInput(true);
            httpConn.setReadTimeout(30000);
            out = httpConn.getOutputStream();
            out.write(buffer);
            out.close();

            // Read the response and write it to standard out.
            isr = new InputStreamReader(httpConn.getInputStream());
            in = new BufferedReader(isr);

            while ((responseString = in.readLine()) != null) {
                outputString.append(responseString);
            }
            result = outputString.toString();
            System.out.println("callUserAuthentication result: " + outputString);
//            System.out.println(outputString);
//            System.out.println("");

            // Get the response from the web service call
            Document document = parseXmlFile(outputString.toString());

//            NodeList nodeLst = document.getElementsByTagName("ns2:cheqIssueResponse");
            NodeList getCustomerScoreDataResponse = document.getElementsByTagName("GetCustomerScoreDataResponse");
            NodeList benefitSource = document.getElementsByTagName("a:_BenefitSource");
            NodeList customerCode = document.getElementsByTagName("a:_CustomerCode");
            NodeList CustomerGeneralTypeTitle = document.getElementsByTagName("a:_CustomerGeneralTypeTitle");
            NodeList CustomerName = document.getElementsByTagName("a:_CustomerName");
            NodeList FacilityBenefits = document.getElementsByTagName("a:_FacilityBenefits");
            NodeList GroupBenefitTitle = document.getElementsByTagName("a:_GroupBenefitTitle");
            NodeList OLDYearlyGroupBenefitTitle = document.getElementsByTagName("a:_OLDYearlyGroupBenefitTitle");
            NodeList ProfitFromBeginningYear = document.getElementsByTagName("a:_ProfitFromBeginningYear");
            NodeList ProfitLiabilities = document.getElementsByTagName("a:_ProfitLiabilities");
            NodeList ValueFromBeginningYear = document.getElementsByTagName("a:_ValueFromBeginningYear");
            NodeList YearlyGroupBenefitTitle = document.getElementsByTagName("a:_YearlyGroupBenefitTitle");
            NodeList isSuccessful = document.getElementsByTagName("a:_IsSuccessful");
            NodeList message = document.getElementsByTagName("a:_Message");

//            System.out.println(getCustomerScoreDataResponse.item(0).getTextContent());
            if (getCustomerScoreDataResponse.getLength() > 0) {
                if (isSuccessful.item(0).getChildNodes().item(0).getTextContent().equals("true")) {
                  customerLifeCycleOutputDTO = CustomerLifeCycleOutputDTO
                      .builder()
                          .benefitSource(benefitSource.item(0).getChildNodes().item(0).getTextContent())
                          .customerCode(customerCode.item(0).getChildNodes().item(0).getTextContent())
                          .customerGeneralTypeTitle(CustomerGeneralTypeTitle.item(0).getChildNodes().item(0).getTextContent())
                          .customerName(CustomerName.item(0).getChildNodes().item(0).getTextContent())
                          .facilityBenefits(FacilityBenefits.item(0).getChildNodes().item(0).getTextContent())
                          .groupBenefitTitle(GroupBenefitTitle.item(0).getChildNodes().item(0).getTextContent())
                          .oLDYearlyGroupBenefitTitle(OLDYearlyGroupBenefitTitle.item(0).getChildNodes().item(0).getTextContent())
                          .profitFromBeginningYear(ProfitFromBeginningYear.item(0).getChildNodes().item(0).getTextContent())
                          .profitLiabilities(ProfitLiabilities.item(0).getChildNodes().item(0).getTextContent())
                          .valueFromBeginningYear(ValueFromBeginningYear.item(0).getChildNodes().item(0).getTextContent())
                          .yearlyGroupBenefitTitle(YearlyGroupBenefitTitle.item(0).getChildNodes().item(0).getTextContent())
                          .isSuccessful(isSuccessful.item(0).getChildNodes().item(0).getTextContent())
                          .message(message.item(0).getChildNodes().item(0).getTextContent())
                      .build();
                }
//                System.out.println(getCustomerScoreDataResponse.item(0).getChildNodes().item(0).getTextContent());
//                System.out.println(getCustomerScoreDataResponse.item(0).getChildNodes().item(1).getTextContent());
//                System.out.println(getCustomerScoreDataResponse.item(0).getChildNodes().item(2).getTextContent());
//                System.out.println(benefitSource.item(0).getChildNodes().item(0).getTextContent());
//                System.out.println(customerCode.item(0).getChildNodes().item(0).getTextContent());
//                System.out.println(CustomerGeneralTypeTitle.item(0).getChildNodes().item(0).getTextContent());
//                System.out.println(CustomerName.item(0).getChildNodes().item(0).getTextContent());
//                System.out.println(FacilityBenefits.item(0).getChildNodes().item(0).getTextContent());
//                System.out.println(GroupBenefitTitle.item(0).getChildNodes().item(0).getTextContent());
//                System.out.println(OLDYearlyGroupBenefitTitle.item(0).getChildNodes().item(0).getTextContent());
//                System.out.println(ProfitFromBeginningYear.item(0).getChildNodes().item(0).getTextContent());
//                System.out.println(ProfitLiabilities.item(0).getChildNodes().item(0).getTextContent());
//                System.out.println(ValueFromBeginningYear.item(0).getChildNodes().item(0).getTextContent());
//                System.out.println(YearlyGroupBenefitTitle.item(0).getChildNodes().item(0).getTextContent());
            }

//            userAuthenticationSayadErrorCode = nodeLst.item(0).getChildNodes().item(0).getTextContent();
//            userAuthenticationSayadErrorDesc = nodeLst.item(0).getChildNodes().item(1).getTextContent();
//            if (userAuthenticationSayadErrorCode.equals("200000")) {
//                tokenTime = new Date();
//                userAuthenticationSayadRotoTypeBranch = nodeLst.item(0).getChildNodes().item(2).getTextContent();
//                userAuthenticationSayadToken = nodeLst.item(0).getChildNodes().item(3).getTextContent();
//            } else {
//                throw new Exception("userAuthenticationSayad - ErrorCode:" + userAuthenticationSayadErrorCode + "  ErrorDesc:" + userAuthenticationSayadErrorDesc);
//            }

        } catch (Exception e) {
//            e.printStackTrace();
            System.out.println(e.toString());
//            masterModel.setErrorMessage(e.getMessage());
//            masterModel.setErrorCode(40979);
            throw e;
        }
//        return result;
        return customerLifeCycleOutputDTO;
    }

//    public String callChequeIssueSayad(String rotoTypeBranch,
//                                       String token,
//                                       String arzCode,
//                                       String branch,
//                                       String chequeType,
//                                       String deliveryBranch,
//                                       String extAccNo,
//                                       String fromSerial,
//                                       String issueDate,
//                                       String issueTime,
//                                       String requestBranch,
//                                       String requestNo,
//                                       String seri,
//                                       String toSerial,
//                                       List<ChequeDetail> chequeDetailList,
//                                       long rawNo,
//                                       MasterModel masterModel
//    ) {
//        String result = "";
////        String wsURL = "http://172.16.167.25:9080/cheque-test/ws/ChequeWebService";
//        URL url = null;
//        URLConnection connection = null;
//        HttpURLConnection httpConn = null;
//        String responseString = null;
//        StringBuilder outputString = new StringBuilder();
//        OutputStream out = null;
//        InputStreamReader isr = null;
//        BufferedReader in = null;
//        resetValues();
//        String chqSheets = "";
//
//        int calc = ((Integer.parseInt(toSerial) - Integer.parseInt(fromSerial)) / 100 + 1) * ((int) rawNo - 1);
//        int i = calc + 1;
//        for (ChequeDetail chequeDetail : chequeDetailList) {
//            chqSheets +=
//                    "<chqSheets>\\n" +
//                            " <chequeSerial>" + chequeDetail.getInquirySerial() + "</chequeSerial>\\n" +
//                            " <seri>" + chequeDetail.getSeriesNo() + "</seri>\\n" +
//                            " <serial>" + Integer.valueOf(chequeDetail.getSerialNo()) * 100 + "</serial>\\n" +
//                            " <serialNo>" + i++ + "</serialNo>\\n" +
//                            "</chqSheets>\\n";
//        }
//
//        String xmlInput =
//                "<soap:Envelope xmlns:soap=\"http://www.w3.org/2003/05/soap-envelope\" xmlns:ws=\"http://ws.cheque.core.bmc.com/\">\\n" +
//                        "   <soap:Header/>\\n" +
//                        "   <soap:Body>\\n" +
//                        "      <ws:chequeIssueSayad>\\n" +
//                        "         <ipCheqIssue>\\n" +
//                        "            <rotoTypeBranch>" + rotoTypeBranch + "</rotoTypeBranch>\\n" +
//                        "            <token>" + token + "</token>\\n" +
//                        "            <arzCode>" + arzCode + "</arzCode>\\n" +
//                        "            <branch>" + branch + "</branch>\\n" +
//                        "            <chequeType>" + chequeType + "</chequeType>\\n" +
//                        "            <deliveryBranch>" + deliveryBranch + "</deliveryBranch>\\n" +
//                        "            <extAccNo>" + extAccNo + "</extAccNo>\\n" +
//                        "            <fromSerial>" + fromSerial + "</fromSerial>\\n" +
//                        "            <issueDate>" + issueDate + "</issueDate>\\n" +
//                        "            <issueTime>" + issueTime + "</issueTime>\\n" +
//                        "            <requestBranch>" + requestBranch + "</requestBranch>\\n" +
//                        "            <requestNo>" + requestNo + "</requestNo>\\n" +
//                        "            <seri>" + seri + "</seri>\\n" +
//                        "            <toSerial>" + toSerial + "</toSerial>\\n" + chqSheets +
////                        "            <chqSheets>\\n" +
////                        "               <chequeSerial>" + chqSheets_chequeSerial + "</chequeSerial>\\n" +
////                        "               <seri>" + chqSheets_seri + "</seri>\\n" +
////                        "               <serial>" + chqSheets_serial + "</serial>\\n" +
////                        "               <serialNo>" + chqSheets_serialNo + "</serialNo>\\n" +
////                        "            </chqSheets>\\n" +
//                        "         </ipCheqIssue>\\n" +
//                        "      </ws:chequeIssueSayad>\\n" +
//                        "   </soap:Body>\\n" +
//                        "</soap:Envelope>";
//
//        try {
//            url = new URL(wsURL);
//            log.debug("callChequeIssueSayad called  with URL: " + wsURL + "  --   xmlInput:\\n " + xmlInput);
//            connection = url.openConnection();
//            httpConn = (HttpURLConnection) connection;
//
//            byte[] buffer = new byte[xmlInput.length()];
//            buffer = xmlInput.getBytes();
//
//            String SOAPAction = "";
//            // Set the appropriate HTTP parameters.
//            httpConn.setRequestProperty("Content-Length", String
//                    .valueOf(buffer.length));
//
////            httpConn.setRequestProperty("Content-Type", "text/xml; charset=iso-8859-1");
//            httpConn.setRequestProperty("Content-Type", "text/xml;");
//
//
//            httpConn.setRequestProperty("SOAPAction", SOAPAction);
//            httpConn.setRequestMethod("POST");
//            httpConn.setDoOutput(true);
//            httpConn.setDoInput(true);
//            out = httpConn.getOutputStream();
//            out.write(buffer);
//            out.close();
//
//            // Read the response and write it to standard out.
//            isr = new InputStreamReader(httpConn.getInputStream());
//            in = new BufferedReader(isr);
//
//            while ((responseString = in.readLine()) != null) {
//                outputString.append(responseString);
//            }
//            result = outputString.toString();
//            log.debug("callChequeIssueSayad result: " + outputString);
////            System.out.println(outputString);
////            System.out.println("");
//
//            // Get the response from the web service call
//            Document document = parseXmlFile(outputString.toString());
//
////            NodeList nodeLst = document.getElementsByTagName("ns2:cheqIssueResponse");
//            NodeList nodeLst = document.getElementsByTagName("return");
//            chequeIssueSayadErrorCode = nodeLst.item(0).getChildNodes().item(0).getTextContent();
//            chequeIssueSayadErrorDesc = nodeLst.item(0).getChildNodes().item(1).getTextContent();
//            if (chequeIssueSayadErrorCode.equals("200000")) {
//                setL_ErrorCode(0);
//                setL_ErrorDesc("chequeIssueSayad " + chequeIssueSayadErrorCode + " " + chequeIssueSayadErrorDesc);
////                setL_SUCCESSCOUNT(getL_SUCCESSCOUNT() + 1);
//                masterModel.getResponse().setSUCCESSCOUNT(masterModel.getResponse().getSUCCESSCOUNT() + 1);
//            } else {
//                setL_ErrorCode(40980);
//                setL_ErrorDesc("chequeIssueSayad " + chequeIssueSayadErrorCode + " " + chequeIssueSayadErrorDesc);
//            }
//        } catch (Exception e) {
////            e.printStackTrace();
//            log.error(e.toString());
//            setL_ErrorCode(40980);
//            setL_ErrorDesc("an error occurred in chequeIssueSayad " + e);
//        }
//        return result;
//    }
//

    private Document parseXmlFile(String in) {
        try {
            DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();
            DocumentBuilder db = dbf.newDocumentBuilder();
            InputSource is = new InputSource(new StringReader(in));
            return db.parse(is);
        } catch (ParserConfigurationException | IOException | SAXException e) {
            System.out.println("exception in parseXmlFile methode: " + e);
            throw new RuntimeException(e);
        }
    }


    public String getChequeIssueSayadErrorCode() {
        return chequeIssueSayadErrorCode;
    }

    public void setChequeIssueSayadErrorCode(String chequeIssueSayadErrorCode) {
        this.chequeIssueSayadErrorCode = chequeIssueSayadErrorCode;
    }

    public String getChequeIssueSayadErrorDesc() {
        return chequeIssueSayadErrorDesc;
    }

    public void setChequeIssueSayadErrorDesc(String chequeIssueSayadErrorDesc) {
        this.chequeIssueSayadErrorDesc = chequeIssueSayadErrorDesc;
    }

    public Date getTokenTime() {
        return tokenTime;
    }

    public void setTokenTime(Date tokenTime) {
        this.tokenTime = tokenTime;
    }

    public String getUserAuthenticationSayadErrorCode() {
        return userAuthenticationSayadErrorCode;
    }

    public void setUserAuthenticationSayadErrorCode(String userAuthenticationSayadErrorCode) {
        this.userAuthenticationSayadErrorCode = userAuthenticationSayadErrorCode;
    }

    public String getUserAuthenticationSayadErrorDesc() {
        return userAuthenticationSayadErrorDesc;
    }

    public void setUserAuthenticationSayadErrorDesc(String userAuthenticationSayadErrorDesc) {
        this.userAuthenticationSayadErrorDesc = userAuthenticationSayadErrorDesc;
    }

    public String getUserAuthenticationSayadRotoTypeBranch() {
        return userAuthenticationSayadRotoTypeBranch;
    }

    public void setUserAuthenticationSayadRotoTypeBranch(String userAuthenticationSayadRotoTypeBranch) {
        this.userAuthenticationSayadRotoTypeBranch = userAuthenticationSayadRotoTypeBranch;
    }

    public String getUserAuthenticationSayadToken() {
        return userAuthenticationSayadToken;
    }

    public void setUserAuthenticationSayadToken(String userAuthenticationSayadToken) {
        this.userAuthenticationSayadToken = userAuthenticationSayadToken;
    }

    private void resetValues() {
        userAuthenticationSayadErrorCode = "";
        userAuthenticationSayadErrorDesc = "";
        userAuthenticationSayadRotoTypeBranch = "";
        userAuthenticationSayadToken = "";
        tokenTime = null;
        chequeIssueSayadErrorCode = "";
        chequeIssueSayadErrorDesc = "";
        L_ErrorCode = 0;
        L_ErrorDesc = "";
        L_SUCCESSCOUNT = 0;
    }


}
`
  createFile(
    serviceImplPath,
    `CustomerLifeCycleWebServiceImpl.java`,
    customerLifeCycle
  );
  // *********************************************************

  shouldCreateFile = true;

  bodyBlock += ``;

  let importString = ``;
  Object.keys(importBlockObj).map((uniqueImport) => {
    importString += `
import ${uniqueImport};`;
  });

  importString += generateImportStatementFromUniqueDataTypes(uniqueInputDataType);

  if (shouldCreateFile == true) {
    let injectedContent = `package ${ConfigObject.getServiceImplPackageName()};

${cosntantImportBlock}
${importString}
${methodName}
${instanceBlock}
${entityManagerString}
${bodyBlock}
}
`;

    /**
     * Create File
     */
    isPathExists(serviceImplPath);
    createFile(
      serviceImplPath,
      applicationObject['appObjectIdClass'] + `ServiceImpl.java`,
      injectedContent
    );
  }
};
module.exports = ServiceImplGenerator;
