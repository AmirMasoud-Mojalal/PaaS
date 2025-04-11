const {
  isPathExists,
  createFile,
  isNotEmptyObject,
  firstLetterCaptalize,
  generateModelFields,
  generatePostmanRequestModelFields,
  extractUniqueDataTypefromParametersObject,
  generateImportStatementFromUniqueDataTypes,
} = require('./util');
const {
  getJpaByJpaName,
  getRestServiceByRestServiceName,
  getStoredProcedureByStoredProcedureName,
  generateModelBodyFromRestService,
  generateModelBodyFromStoredProcedure,
} = require('./DomainConfig');

const { getRoutePathString } = require('./ContentMapValidator');

const ModelGenerator = (applicationObject, ConfigObject) => {
  let shouldCreateFile = false;

  let serviceInputObj = ``;
  let serviceOutputObj = ``;

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

    // const targetJpa = getJpaByJpaName(
    //   jpaName,
    //   applicationObject['appObjectId']
    // )['finalJpa'];

    shouldCreateFile = true;

    const modelPath = ConfigObject.getModelPath();

    let importPart = `import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

// import java.util.ArrayList;
// import java.util.Collection;
// import java.util.Set;
`;

    const generatedModel = generateModelFields(targetJpa);
    // if (jpaName == 'tafahomInformation') {
    //   console.log(generatedModel);
    // }
    modelfields = generatedModel.modelfields;
    // importPart
    const mtp = generatedModel.importString;
    // console.log(mtp)
    importPart += mtp;
    // console.log(importPart);
    // console.log(modelfields);
    let injectedContent = `package ${ConfigObject.getModelPackageName()};

${importPart}

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ${firstLetterCaptalize(jpaName)}DTO{
${modelfields}
}`;
    /**
     * Create File
     */
    isPathExists(modelPath);
    createFile(
      modelPath,
      firstLetterCaptalize(jpaName) + `DTO.java`,
      injectedContent
    );

    const postmanRequestModelPath = ConfigObject.getPostmanRequestModelPath();
    // console.log(jpaName);
    // console.log(targetJpa['content'].length);
    /**
     * Create File - generate PostmanRequest
     */
    isPathExists(postmanRequestModelPath);
    createFile(
      postmanRequestModelPath,
      firstLetterCaptalize(jpaName) + `.json`,
      generatePostmanRequestModelFields(targetJpa['content'])
    );

    // console.log(generatedModel.dataSourceProvider)
    injectedContent = ``

    // in case we have storedProcedure datasource provider
    if (Object.keys(generatedModel).includes('dataSourceProvider') && Object.keys(generatedModel['dataSourceProvider']).length > 0) {

      // console.log('ModelGenerator')

      Object.keys(generatedModel['dataSourceProvider']).includes('storedProcedure') && Object.keys(generatedModel['dataSourceProvider']['storedProcedure']).length > 0
        ? (
          Object.keys(generatedModel['dataSourceProvider']['storedProcedure']).map((storedProcedureName) => {
            // console.log(storedProcedureName);
            // console.log(generatedModel);
            // console.log(Object.keys(generatedModel['dataSourceProvider']['storedProcedure']).length);

            const targetStoredProcedure =
              getStoredProcedureByStoredProcedureName(storedProcedureName);
            importPart = `import lombok.*;`;
            const modelPath = ConfigObject.getModelPath();

            /*********************** IN/OUT Model *********************************/
            if (isNotEmptyObject(targetStoredProcedure['parameters']) == true) {
              /*********************** Input Parameter Model *********************************/

              const uniqueInputDataType = extractUniqueDataTypefromParametersObject(
                targetStoredProcedure['parameters'],
                'IN'
              );

              if (Object.keys(uniqueInputDataType).length > 0) {
                const uniqueInputImportString =
                  generateImportStatementFromUniqueDataTypes(uniqueInputDataType);
                importPart += `
      ${uniqueInputImportString}`;

                let injectedContent = ``;
                injectedContent = `package ${ConfigObject.getModelPackageName()};

${importPart}
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ${firstLetterCaptalize(storedProcedureName)}InputDTO {
      `;
                injectedContent += generateModelBodyFromStoredProcedure(
                  storedProcedureName,
                  'IN'
                );

                injectedContent += `\r}`;
                /**
                 * Create File
                 */
                isPathExists(modelPath);
                createFile(
                  modelPath,
                  firstLetterCaptalize(storedProcedureName) + `InputDTO.java`,
                  injectedContent
                );
              }

              /*********************** Output Parameter Model *********************************/

              const uniqueOutput = extractUniqueDataTypefromParametersObject(
                targetStoredProcedure['parameters'],
                'OUT'
              );

              if (Object.keys(uniqueOutput).length > 0) {
                const uniqueOutputImportString =
                  generateImportStatementFromUniqueDataTypes(uniqueOutput);
                importPart += `
      ${uniqueOutputImportString}`;

                let injectedContent = ``;
                injectedContent = `package ${ConfigObject.getModelPackageName()};

${importPart}
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ${firstLetterCaptalize(storedProcedureName)}OutputDTO {`;
                injectedContent += generateModelBodyFromStoredProcedure(
                  storedProcedureName,
                  'OUT'
                );

                injectedContent += `
}`;
                /**
                 * Create File
                 */

                isPathExists(modelPath);
                createFile(
                  modelPath,
                  firstLetterCaptalize(storedProcedureName) + `OutputDTO.java`,
                  injectedContent
                );
              }
            }

            /*********************** ResultSet Model *********************************/
            if (isNotEmptyObject(targetStoredProcedure['resultSet']) == true) {
              const uniqueResultSet = extractUniqueDataTypefromParametersObject(
                targetStoredProcedure['resultSet'],
                'OUT'
              );

              const uniqueResultSetImportString =
                generateImportStatementFromUniqueDataTypes(uniqueResultSet);
              importPart += `
      ${uniqueResultSetImportString}`;

              let injectedContent = ``;
              injectedContent = `package ${ConfigObject.getModelPackageName()};

${importPart}
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ${firstLetterCaptalize(storedProcedureName)}ResultListDTO {`;
              injectedContent += generateModelBodyFromStoredProcedure(
                storedProcedureName,
                'ResultSet'
              );

              injectedContent += `\r}`;
              /**
               * Create File
               */
              isPathExists(modelPath);
              createFile(
                modelPath,
                firstLetterCaptalize(storedProcedureName) + `ResultListDTO.java`,
                injectedContent
              );
            }

          })

        )
        : Object.keys(generatedModel['dataSourceProvider']).includes('restService') && Object.keys(generatedModel['dataSourceProvider']['restService']).length > 0
          ? '' : ''
      // Object.keys(generatedModel['dataSourceProvider']).map((k) => {
      //   // entityPath = ConfigObject.getEntityPath(datasourceName);
      // })
    }
  });
  /********************************************************************************
   *                        storedProcedures
   ********************************************************************************/

  Object.keys(applicationObject['dataAccessLayer']['storedProcedures']).map(
    (storedProcedureName) => {
      // Set required variable name
      const targetStoredProcedure =
        getStoredProcedureByStoredProcedureName(storedProcedureName);

      let importPart = `import lombok.*;`;
      const modelPath = ConfigObject.getModelPath();

      /*********************** IN/OUT Model *********************************/
      if (isNotEmptyObject(targetStoredProcedure['parameters']) == true) {
        /*********************** Input Parameter Model *********************************/

        const uniqueInputDataType = extractUniqueDataTypefromParametersObject(
          targetStoredProcedure['parameters'],
          'IN'
        );

        if (Object.keys(uniqueInputDataType).length > 0) {
          const uniqueInputImportString =
            generateImportStatementFromUniqueDataTypes(uniqueInputDataType);
          importPart += `
${uniqueInputImportString}`;

          let injectedContent = ``;
          injectedContent = `package ${ConfigObject.getModelPackageName()};

${importPart}

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ${firstLetterCaptalize(storedProcedureName)}InputDTO {
    `;
          injectedContent += generateModelBodyFromStoredProcedure(
            storedProcedureName,
            'IN'
          );

          injectedContent += `\r}`;
          /**
           * Create File
           */
          isPathExists(modelPath);
          createFile(
            modelPath,
            firstLetterCaptalize(storedProcedureName) + `InputDTO.java`,
            injectedContent
          );
        }

        /*********************** Output Parameter Model *********************************/

        const uniqueOutput = extractUniqueDataTypefromParametersObject(
          targetStoredProcedure['parameters'],
          'OUT'
        );

        if (Object.keys(uniqueOutput).length > 0) {
          const uniqueOutputImportString =
            generateImportStatementFromUniqueDataTypes(uniqueOutput);
          importPart += `
${uniqueOutputImportString}`;

          let injectedContent = ``;
          injectedContent = `package ${ConfigObject.getModelPackageName()};



${importPart}

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ${firstLetterCaptalize(storedProcedureName)}OutputDTO {
    `;
          injectedContent += generateModelBodyFromStoredProcedure(
            storedProcedureName,
            'OUT'
          );

          injectedContent += `\r}`;
          /**
           * Create File
           */

          isPathExists(modelPath);
          createFile(
            modelPath,
            firstLetterCaptalize(storedProcedureName) + `OutputDTO.java`,
            injectedContent
          );
        }
      }

      /*********************** ResultSet Model *********************************/
      if (isNotEmptyObject(targetStoredProcedure['resultSet']) == true) {
        const uniqueResultSet = extractUniqueDataTypefromParametersObject(
          targetStoredProcedure['resultSet'],
          'OUT'
        );

        const uniqueResultSetImportString =
          generateImportStatementFromUniqueDataTypes(uniqueResultSet);
        importPart += `
${uniqueResultSetImportString}`;

        let injectedContent = ``;
        injectedContent = `package ${ConfigObject.getModelPackageName()};



${importPart}

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ${firstLetterCaptalize(storedProcedureName)}ResultListDTO {
    `;
        injectedContent += generateModelBodyFromStoredProcedure(
          storedProcedureName,
          'ResultSet'
        );

        injectedContent += `\r}`;
        /**
         * Create File
         */
        isPathExists(modelPath);
        createFile(
          modelPath,
          firstLetterCaptalize(storedProcedureName) + `ResultListDTO.java`,
          injectedContent
        );
      }
    }
  );

  /********************************************************************************
   *                        REST Service
   ********************************************************************************/
  Object.keys(applicationObject['dataAccessLayer']['restServices']).map(
    (restServiceName) => {
      // Set required variable name
      const targetRestService =
        getRestServiceByRestServiceName(restServiceName);
      let importPart = `import lombok.*;`;
      const modelPath = ConfigObject.getModelPath();

      /*********************** IN/OUT Model *********************************/
      if (
        isNotEmptyObject(targetRestService['request']['requestBody']) == true
      ) {
        /*********************** Input Parameter Model *********************************/

        const uniqueInputDataType = extractUniqueDataTypefromParametersObject(
          targetRestService['request']['requestBody'],
          'IN'
        );
        if (Object.keys(uniqueInputDataType).length > 0) {
          importPart +=
            generateImportStatementFromUniqueDataTypes(uniqueInputDataType);

          injectedContent = `package ${ConfigObject.getModelPackageName()};
${importPart}
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ${firstLetterCaptalize(restServiceName)}InputDTO {
    `;

          injectedContent += generateModelBodyFromRestService(
            restServiceName,
            'IN'
          );
          injectedContent += `\r}`;
          /**
           * Create File
           */
          isPathExists(modelPath);
          createFile(
            modelPath,
            firstLetterCaptalize(restServiceName) + `InputDTO.java`,
            injectedContent
          );
        }

        /*********************** Output Parameter Model *********************************/

        const uniqueOutput = extractUniqueDataTypefromParametersObject(
          targetRestService['request']['requestBody'],
          'OUT'
        );

        if (Object.keys(uniqueOutput).length > 0) {
          importPart +=
            generateImportStatementFromUniqueDataTypes(uniqueOutput);

          let injectedContent = ``;
          injectedContent = `package ${ConfigObject.getModelPackageName()};
${importPart}
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ${firstLetterCaptalize(restServiceName)}OutputDTO {
    `;
          injectedContent += generateModelBodyFromRestService(
            restServiceName,
            'OUT'
          );

          injectedContent += `\r}`;
          /**
           * Create File
           */

          isPathExists(modelPath);
          createFile(
            modelPath,
            firstLetterCaptalize(restServiceName) + `OutputDTO.java`,
            injectedContent
          );
        }
      }

      /*********************** ResponseBody Model *********************************/
      if (
        isNotEmptyObject(targetRestService['response']['responseBody']) == true
      ) {
        const uniqueResultSet = extractUniqueDataTypefromParametersObject(
          targetRestService['response']['responseBody'],
          'OUT'
        );

        importPart +=
          generateImportStatementFromUniqueDataTypes(uniqueResultSet);

        let injectedContent = ``;
        injectedContent = `package ${ConfigObject.getModelPackageName()};
${importPart}
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ${firstLetterCaptalize(restServiceName)}OutputDTO {
    `;
        injectedContent += generateModelBodyFromRestService(
          restServiceName,
          'responseBody'
        );

        injectedContent += `\r}`;
        /**
         * Create File
         */
        isPathExists(modelPath);
        createFile(
          modelPath,
          firstLetterCaptalize(restServiceName) + `OutputDTO.java`,
          injectedContent
        );
      }
    }
  );

  const modelPath = ConfigObject.getModelPath()

  // *********************************************************
  //  CustomerLifeCycle
  let customerLifeCycle = `package com.behsazan.projects.mutualUnderstanding.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CustomerLifeCycleInputDTO {
      
      private Integer intervalCode;
      private Long customerNumber;
}`
  createFile(
    modelPath,
    'CustomerLifeCycleInputDTO.java',
    customerLifeCycle
  );

  customerLifeCycle = `package com.behsazan.projects.mutualUnderstanding.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CustomerLifeCycleOutputDTO {
    private String benefitSource;
    private String customerCode;
    private String customerGeneralTypeTitle;
    private String customerName;
    private String facilityBenefits;
    private String groupBenefitTitle;
    private String oLDYearlyGroupBenefitTitle;
    private String profitFromBeginningYear;
    private String profitLiabilities;
    private String valueFromBeginningYear;
    private String yearlyGroupBenefitTitle;
    private String isSuccessful;
    private String message;
}`
createFile(
  modelPath,
  'CustomerLifeCycleOutputDTO.java',
  customerLifeCycle
);
  // *********************************************************

  // console.log(`${modelPath}\\request`);
  let fileUploadRequest = `package com.behsazan.projects.mutualUnderstanding.model.request;

  import lombok.AllArgsConstructor;
  import lombok.Builder;
  import lombok.Data;
  import lombok.NoArgsConstructor;
  
  @Data
  @Builder
  @NoArgsConstructor
  @AllArgsConstructor
  public class FileUploadRequest {
      private Integer pi_ACTIVITYNO;
      private Integer pi_CASENO;
      private Integer pi_CASENOGEN;
      private Integer pi_CASETYPE;
      private String pi_DOCDESC;
      private Integer pi_DOCNO;
      private Integer pi_DOCPAGENUMBER;
      private Integer pi_DOCTYPENO;
      private Integer pi_ENVCODE;
      private Integer pi_EXECODE;
      private Integer pi_EXPIREDATE;
      private Integer pi_FACODE;
      private String pi_FileName;
      private Integer pi_GROUPCODE;
      private Integer pi_IBRANCH;
      private Integer pi_IDATE;
      private String pi_IUSERID;
      private Integer pi_OLDDOCNO;
      private Integer pi_OWNERCODE;
      private Integer pi_OWNERTYPE;
      private Integer pi_PAGENO;
      private String pi_PARNTID;
      private Integer pi_PRODUCTCODE;
      private Integer pi_ROLECODE;
      private Integer pi_STATUS;
      private Integer pi_SUBGROUPCODE;
      private Integer pi_VERSIONNO;
      private String pi_DataFile;
  }`

  createFile(
    `${modelPath}\\request`,
    `FileUploadRequest.java`,
    fileUploadRequest
  );
  fileUploadRequest = `package com.behsazan.projects.mutualUnderstanding.model.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class FileProperty {
    private String name;
    private long size;
    private String type;
    private String id;
}`

  createFile(
    `${modelPath}\\request`,
    `FileProperty.java`,
    fileUploadRequest
  );

  fileUploadRequest = `package com.behsazan.projects.mutualUnderstanding.model.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class FileDownloadRequest {
    private String id;
    private Integer size;
}
`
  createFile(
    `${modelPath}\\request`,
    `FileDownloadRequest.java`,
    fileUploadRequest
  );

};
module.exports = ModelGenerator;
