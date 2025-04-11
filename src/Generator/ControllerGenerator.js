const {
  isPathExists,
  createFile,
  firstLetterCaptalize,
  isNotEmptyObject,
  generateImportStatementFromUniqueDataTypes,
  controllerJpaMethodCaller,
  controllerStoredProcedureMethodCaller,
  extractUniqueDataTypefromParametersObject,
  serviceImplJpaMethodCaller,
  extractColObjByColName,
} = require('./util');

const {
  getJpaByJpaName,
  getColObjByColName,
  getPrimaryKeyByJpaName,
  getStoredProcedureByStoredProcedureName,
} = require('./DomainConfig');

const {
  getParentIndexByRouteName,
  getRoutePathString,
  getRootRoutes,
  getOwnIndexByRouteName,
  getRequestMappingString,
  getOwnOrParentPathVariableByRouteName,
} = require('./ContentMapValidator');

const { validationRules } = require('./Data/Validation');

const ControllerGenerator = (applicationObject, ConfigObject) => {
  let shouldCreateFile = false;

  let serviceString = ``;
  let selectedDataType = {};

  let importBlockObj = {};
  let serviceInputObj = {};
  let serviceOutputObj = {};
  let serviceResultSetObj = {};

  // let entityManagerObject = {};
  let cosntantImportBlock = `import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import java.security.Principal;
import java.time.LocalDateTime;
import java.util.Map;`;

  // console.log(applicationObject['appObjectId']);
  // console.log(getRequestMappingString(applicationObject['appObjectId']));
  // console.log(
  //   `${ConfigObject['webAccessPath']}${ConfigObject['artifactId']}/${applicationObject['appObjectId']}s`
  // );
  // console.log(
  //   ConfigObject['webAccessPath'] +
  //     ConfigObject['artifactId'] +
  //     '/' +
  //     applicationObject['appObjectId'] +
  //     s
  // );

  let bodyBlock = `
    public static final String ${applicationObject['appObjectIdClass']}_PATH = "${ConfigObject['webAccessPath']}/${applicationObject['appObjectId']}";
    public static final String ${applicationObject['appObjectIdClass']}_PATH_ID = ${applicationObject['appObjectIdClass']}_PATH + "/{${applicationObject['appObjectId']}Id}";

    private final ${applicationObject['appObjectIdClass']}Service ${applicationObject['appObjectId']}Service;
    ${applicationObject['appObjectId'] != 'userActivity' ? `private final UserActivityService userActivityService;` : ''}`;

  const controllerPath = ConfigObject.getControllerPath();

  let uniqueInput = ``;
  let uniqueOutput = ``;
  let uniqueResultSet = ``;

  let methodName;

  const objectName = applicationObject['appObjectId'];
  // console.log(objectName);
  // console.log(applicationObject['appObjectId']);

  //  1) for each appObjectId get complete route path
  const routePathString = getRoutePathString(objectName);
  // console.log(objectName);
  const [first, ...completeRoutePathArray] = routePathString.split('/');
  //  2) get direct parent route path
  const directParentRoutePath =
    completeRoutePathArray.length > 1
      ? completeRoutePathArray[completeRoutePathArray.length - 2]
      : '';
  // console.log(directParentRoutePath);

  const parentJpaName =
    directParentRoutePath.length > 1
      ? applicationObject.getJpaNameByAppObjectId(directParentRoutePath)
      : '';

  // @RequestMapping("${ConfigObject['webAccessPath']}/${ConfigObject['artifactId']
  methodName = `
@RestController
@RequestMapping("${getRootRoutes().includes(objectName) ? `/${objectName}` : `/${parentJpaName}s/{id}/${objectName}`}s")
@RequiredArgsConstructor
public class ${applicationObject['appObjectIdClass']}Controller {`;
  // }

  // *********************************************************
  // File System Storage Service  
  if (applicationObject['appObjectId'] == 'uploadFileRM') {
    bodyBlock += `
    private final StorageService storageService;
    `

    //     bodyBlock += `@PostMapping("/{idColumn}")
    //     public ResponseEntity<String> handleFileUpload(@RequestParam("file") MultipartFile file,
    //                                                    @PathVariable @NotNull @NotBlank long idColumn,
    //                                                    @RequestParam Map<String, String> docTypes,
    //                                                    RedirectAttributes redirectAttributes,
    //                                                    Principal principal
    //     ) {
    //         //  upload to DocumentManagement Service
    //         String Ids = storageService.store(file);

    // //        redirectAttributes.addFlashAttribute("message",
    // //                "You successfully uploaded " + file.getOriginalFilename() + "!");

    //         UploadFileRMDTO uploadFileRMDTO = uploadFileRMService.findById(idColumn, principal);

    //         //  convert docTypes to its corresponding column
    //         docTypes.forEach((key, docTypeNO) -> {
    //             if (docTypeNO == "23004") {
    //                 //  document is Asasname
    //                 uploadFileRMDTO.setAsasname(Ids);
    //             }
    // //                else if(){}
    //         });

    //         UploadFileRM uploadFileRM = uploadFileRMLogic.convertToEntity(uploadFileRMDTO);

    //         if (uploadFileRMDTO.getIdColumn() == 0) {
    //             //  if record does NOT exist
    //             URI uri = uploadFileRMService.save(uploadFileRM, principal);
    //         } else if (uploadFileRMDTO.getIdColumn() != 0) {
    //             //  if record does exist
    //             UploadFileRMDTO updatedUploadFileRM = uploadFileRMService.updateByIdColumn(idColumn, uploadFileRM, principal);
    //         }
    // //        return "redirect:/";
    //         return ResponseEntity.ok("ids");
    //     }`
  }
  /********************************************************************************
   *                        Jakarta Persistence API
   ********************************************************************************/
  let controllerContent = ``

  Object.keys(applicationObject['dataAccessLayer']['jpas']).map((jpaName) => {
    bodyBlock += `
    private final ${firstLetterCaptalize(jpaName)}Logic ${jpaName}Logic;`;

    let targetCol = ``;
    // Set required variable name
    const result = getJpaByJpaName(jpaName, parentJpaName);
    const targetJpa = result['finalJpa'];

    // if(jpaName == 'tafahomInformation'){
    // if(jpaName == 'eghdamat'){
    // if(jpaName == 'tasParameter'){
    // if(jpaName == 'account'){
    // if (jpaName == 'customerArzResourceRpt') {
    // console.log(firstLetterCaptalize(result['targetJpaParentPK']));
    // console.log(result['uniqueIndexes']);
    // console.log(result);
    // result['targetJpaParentPK'] == '' ? console.log('-') : console.log(result['virtualPKColumn']['title']);
    // }

    // const targetJpa = getJpaByJpaName(
    //   jpaName,
    //   applicationObject['appObjectId']
    // )['finalJpa'];

    // const pathVariables = getOwnOrParentPathVariableByRouteName(
    //   applicationObject['appObjectId']
    // );

    // console.log(targetJpa);
    shouldCreateFile = true;
    const datasourceName = targetJpa['datasourceName'];


    importBlockObj[
      `${ConfigObject.getEntityPackageName(
        datasourceName
      )}.${firstLetterCaptalize(jpaName)}`
    ] = {};
    importBlockObj[
      `${ConfigObject.getEntityPackageName(
        datasourceName
      )}.UserActivity`
    ] = {};
    importBlockObj[
      `${ConfigObject.getModelPackageName()}.${firstLetterCaptalize(
        jpaName
      )}DTO`
    ] = {};
    importBlockObj[
      `${ConfigObject.getServicePackageName()}.logic.${firstLetterCaptalize(
        jpaName
      )}Logic`
    ] = {};
    importBlockObj[
      `${ConfigObject.getServicePackageName()}.${applicationObject['appObjectIdClass']
      }Service`
    ] = {};
    importBlockObj[
      `${ConfigObject.getServicePackageName()}.UserActivityService`
    ] = {};

    // console.log(getRequestMappingString(applicationObject['appObjectId']));
    // console.log(getRequestMappingString(jpaName));

    const customAnnotationPath = ConfigObject.getCustomAnnotationPath();
    //  1)  get all available 'validationRuleSets' in jpa/storedProcedure/restService from 'Validation.js' file
    const actualValidationRuleSet =
      applicationObject.getValidationRuleSetOfContentEntryName(
        applicationObject['appObjectId']
      );
    // console.log(jpaName);
    // console.log(actualValidationRuleSet);
    // console.log(Object.keys(actualValidationRuleSet).length);

    //  check if there is any 'ValidationRule'
    if (Object.keys(actualValidationRuleSet).length > 0) {

      //  create Validation & Validator files
      Object.keys(actualValidationRuleSet).map((validationRuleName) => {
        const targetValidation = actualValidationRuleSet[validationRuleName];

        const targetJpax = getJpaByJpaName(
          //  2)  get 'sourceObjectName' from each 'validationRule'
          targetValidation['sourceObjectName'], //  jpaName : tafahomFirstForm
          // `tafahomFirstForm`,
          applicationObject['appObjectId'] //  applicationObject['appObjectId']
        )['finalJpa'];

        //  3)  get 'parthVariable' of intended route from 'ContentMapValidator'
        // const idx = getOwnIndexByRouteName(
        //   //    get appObjectId by jpaName
        //   // applicationObject.getAppObjectIdByJpaName(
        //   targetValidation['sourceObjectName']
        //   // )
        // );
        const targetJpaxPrimaryKey = getPrimaryKeyByJpaName(
          targetValidation['sourceObjectName']
        );

        // console.log('targetJpaxPrimaryKey');
        // console.log(targetJpaxPrimaryKey);

        //  4)  get actual 'parthVariable' column key & column value from 'DomainConfig'
        // targetCol = extractColObjByColName(targetJpax, idx);
        targetCol = extractColObjByColName(targetJpax, targetJpaxPrimaryKey);

        // console.log(`Controller   : `+targetValidation['sourceObjectName']);
        //  4)  get actual 'parthVariable' column key & column value from 'DomainConfig'
        // targetCol = getColObjByColName(
        //   //  2)  get 'sourceObjectName' from each 'validationRule'
        //   targetValidation['sourceObjectName'], //  jpaName : tafahomFirstForm
        //   // `tafahomFirstForm`,
        //   applicationObject['appObjectId'], //  applicationObject['appObjectId']
        //   //  3)  get 'parthVariable' of intended route from 'ContentMapValidator'
        //   getOwnIndexByRouteName(
        //     //    get appObjectId by jpaName
        //     applicationObject.getAppObjectIdByJpaName(
        //       targetValidation['sourceObjectName']
        //     )
        //   )
        // );

        // console.log(targetCol);
        // console.log(targetCol['title']);                       // arvhiveNumber
        // console.log(targetCol['value']['schema']['type']);     // String
        // console.log(targetCol);
        // console.log(targetCol['title']);
        const targetJpaPrimaryKeyTitle = targetCol['title'];
        const targetJpaPrimaryKeyValue = targetCol['value']['schema']['type'];
        // console.log(targetJpaPrimaryKeyTitle);
        // console.log(targetJpaPrimaryKeyValue);
        // console.log('');
        //  custom annotation - validation file
        const sourceObjectName = targetValidation['sourceObjectName'];
        const sourceKey = targetValidation['sourceKey'];
        const sourceKeyType = targetValidation['sourceKeyType'];
        const operation = targetValidation['operation'];
        const intendedValue = targetValidation['intendedValue'];
        const errorMessage = targetValidation['errorMessage'];

        importBlockObj[`java.math.BigDecimal`] = {};
        //  Update Import block
        importBlockObj[
          `${ConfigObject.getCustomAnnotationPackageName()}.${sourceObjectName}${firstLetterCaptalize(
            sourceKey
          )}Validation`
        ] = {};

        let annotationContent = `package ${ConfigObject.getCustomAnnotationPackageName()};

import jakarta.validation.Constraint;
import jakarta.validation.Payload;

import java.lang.annotation.*;

@Target({ElementType.FIELD, ElementType.PARAMETER, ElementType.METHOD})
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Constraint(validatedBy = ${sourceObjectName}${firstLetterCaptalize(
          sourceKey
        )}Validator.class)
public @interface ${sourceObjectName}${firstLetterCaptalize(
          sourceKey
        )}Validation {
    //error message
    public String message() default "${errorMessage}";
    
    //represents group of constraints
    public Class<?>[] groups() default {};

    //represents additional information about annotation
    public Class<? extends Payload>[] payload() default {};
}`;
        /**
         * Create validation File
         */
        isPathExists(customAnnotationPath);
        createFile(
          customAnnotationPath,
          `${sourceObjectName}${firstLetterCaptalize(
            sourceKey
          )}Validation.java`,
          annotationContent
        );

        let validatiorImportString = ``;
        if (targetJpaPrimaryKeyValue === 'BigDecimal') {
          validatiorImportString += `import java.math.BigDecimal;`;
        }
        //  annotation implementation  - validator file
        let annotationImplementation = `package ${ConfigObject.getCustomAnnotationPackageName()};

import ${ConfigObject.getEntityPackageName(
          datasourceName
        )}.${firstLetterCaptalize(sourceObjectName)};
import ${ConfigObject.getModelPackageName()}.${firstLetterCaptalize(
          sourceObjectName
        )}DTO;

import ${ConfigObject.getServicePackageName()}.${firstLetterCaptalize(
          applicationObject.getAppObjectIdByJpaName(
            targetValidation['sourceObjectName']
          )
        )}Service;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;
import lombok.RequiredArgsConstructor;
${validatiorImportString}

@RequiredArgsConstructor
public class ${sourceObjectName}${firstLetterCaptalize(
          sourceKey
        )}Validator implements ConstraintValidator<${sourceObjectName}${firstLetterCaptalize(
          sourceKey
        )}Validation, ${targetJpaPrimaryKeyValue}> {

    private final ${firstLetterCaptalize(
          applicationObject.getAppObjectIdByJpaName(
            targetValidation['sourceObjectName']
          )
        )}Service ${applicationObject.getAppObjectIdByJpaName(
          targetValidation['sourceObjectName']
        )}Service;

    @Override
    public void initialize(${sourceObjectName}${firstLetterCaptalize(
          sourceKey
        )}Validation constraintAnnotation) {
        ConstraintValidator.super.initialize(constraintAnnotation);
    }

    @Override
    //TODO
    public boolean isValid(${targetJpaPrimaryKeyValue} ${targetJpaPrimaryKeyTitle}, ConstraintValidatorContext constraintValidatorContext) {
        ${firstLetterCaptalize(
          sourceObjectName
        )}DTO ${sourceObjectName} = ${applicationObject.getAppObjectIdByJpaName(
          targetValidation['sourceObjectName']
        )}Service.findById(${targetJpaPrimaryKeyTitle}, null);
        if(${sourceObjectName}.get${firstLetterCaptalize(
          sourceKey
        )}() != "${errorMessage}")
            return false;
        return true;
    }
}`;
        /**
         * Create validator File
         */
        createFile(
          customAnnotationPath,
          `${sourceObjectName}${firstLetterCaptalize(sourceKey)}Validator.java`,
          annotationImplementation
        );
      });
    }
    // console.log(result['primaryKey']);

    const controllerJpa = controllerJpaMethodCaller(
      applicationObject['appObjectId'], //  from Content  ref. to Service
      jpaName, //  Content -> ref. to Model/DTO
      targetJpa, //  from 'Domain'
      applicationObject['dataAccessLayer']['jpas'][jpaName], //  from 'Content'
      applicationObject.getValidationRuleSetOfContentEntryName(
        applicationObject['appObjectId']
      ), //  from 'Validation'
      targetCol,
      result['uniqueIndexes'],
      result['primaryKey'],
      result['targetJpaParentPK'] == '' ? '' : result['virtualPKColumn']['title']
    );

    bodyBlock += controllerJpa.resultString;
    bodyBlock += `
        `;
    Object.keys(controllerJpa.typeList).map((x) => {
      importBlockObj[x] = controllerJpa.typeList[x];
    });

    //  WE USE FROM SERVICEiMPL
    const generatedService = serviceImplJpaMethodCaller(
      applicationObject['appObjectId'],
      'dataSourceProvider',
      jpaName,
      targetJpa,
      result['uniqueIndexes']
    );

    //  in case we have 'DataSoruceProvider' in JPA definition
    if (Object.keys(generatedService['dataSourceProvider']).length > 0) {
      if (Object.keys(generatedService['dataSourceProvider']).includes('storedProcedure')) {
        Object.keys(generatedService['dataSourceProvider']['storedProcedure']).map((storedProcedureName) => {

          controllerImportBlockObj = {}
          controllerServiceInputObj = {}
          controllerServiceOutputObj = {}
          controllerServiceResultSetObj = {}

          // cosntantImportBlock = {}
          controllerImportString = {}
          let controllerClassName = ``
          // bodyBlock = {}

          // @RequestMapping("${ConfigObject['webAccessPath']}/${ConfigObject['artifactId']}/${storedProcedureName}s")
          controllerClassName = `
@RestController
@RequestMapping("/${storedProcedureName}s")
@RequiredArgsConstructor
public class ${firstLetterCaptalize(storedProcedureName)}Controller {`;

          const methodNameClosing = `}`

          let controlleFinalBlock = `
private final ${firstLetterCaptalize(storedProcedureName)}Service ${storedProcedureName}Service;
private final UserActivityService userActivityService;`;


          const targetStoredProcedure =
            getStoredProcedureByStoredProcedureName(
              storedProcedureName
            );

          // if (objectName == 'account') {
          //   console.log(targetStoredProcedure);
          // }

          // const datasourceName = targetStoredProcedure['datasourceName'];
          // if (
          //   //  Default(implicit) behaviour in case no 'exposInputOutput' is specified in  storedProcedureName.
          //   Object.keys(
          //     applicationObject['dataAccessLayer']['storedProcedures'][
          //     storedProcedureName
          //     ]
          //   ).length == 0 ||
          //   //  or in case 'exposInputOutput' is specified explicitly in  storedProcedureName.
          //   (Object.keys(
          //     applicationObject['dataAccessLayer']['storedProcedures'][
          //     storedProcedureName
          //     ]
          //   ).length > 0 &&
          //     applicationObject['dataAccessLayer']['storedProcedures'][
          //     storedProcedureName
          //     ]['exposeInputOutput'] == true)
          // ) {
          shouldCreateFile = true;

          controllerImportBlockObj[
            `com.behsazan.projects.mutualUnderstanding.localds.entity.UserActivity`
          ] = {};

          controllerImportBlockObj[
            `${ConfigObject.getServicePackageName()}.${applicationObject['appObjectIdClass']
            }Service`
          ] = {};

          /*********************** IN/OUT Model *********************************/
          if (isNotEmptyObject(targetStoredProcedure['parameters']) == true) {
            /*********************** Input Parameter Model *********************************/
            uniqueInput = extractUniqueDataTypefromParametersObject(
              targetStoredProcedure['parameters'],
              'IN'
            );
            if (Object.keys(uniqueInput).length > 0) {
              controllerImportBlockObj[
                `${ConfigObject.getModelPackageName()}.${firstLetterCaptalize(
                  storedProcedureName
                )}InputDTO`
              ] = {};

              controllerImportBlockObj[`static jakarta.persistence.ParameterMode.IN`] = {};
              controllerServiceInputObj[`${storedProcedureName}InputDTO`] = {};
            }

            /*********************** Output Parameter Model *********************************/
            uniqueOutput = extractUniqueDataTypefromParametersObject(
              targetStoredProcedure['parameters'],
              'OUT'
            );
            if (Object.keys(uniqueOutput).length > 0) {
              controllerImportBlockObj[
                `${ConfigObject.getModelPackageName()}.${firstLetterCaptalize(
                  storedProcedureName
                )}OutputDTO`
              ] = {};

              controllerImportBlockObj[`static jakarta.persistence.ParameterMode.OUT`] = {};
              controllerServiceOutputObj[`${storedProcedureName}OutputDTO`] = {};
            }
          }
          /*********************** ResultSet Model *********************************/
          if (isNotEmptyObject(targetStoredProcedure['resultSet']) == true) {
            uniqueResultSet = extractUniqueDataTypefromParametersObject(
              targetStoredProcedure['resultSet'],
              'OUT'
            );
            if (Object.keys(uniqueResultSet).length > 0) {
              controllerImportBlockObj[
                `${ConfigObject.getModelPackageName()}.${firstLetterCaptalize(
                  storedProcedureName
                )}ResultListDTO`
              ] = {};
              controllerImportBlockObj[`java.util.List`] = {};
              controllerServiceResultSetObj[`${storedProcedureName}ResultListDTO`] = {};
            }
          }
          controllerImportBlockObj[
            `${ConfigObject.getServicePackageName()}.${firstLetterCaptalize(storedProcedureName)
            }Service`
          ] = {};
          controllerImportBlockObj[
            `com.behsazan.projects.mutualUnderstanding.service.UserActivityService`
          ] = {};


          const controllerBodyBlock = controllerStoredProcedureMethodCaller(
            `${storedProcedureName}`,
            storedProcedureName,

            targetStoredProcedure,
            controllerServiceInputObj,
            controllerServiceOutputObj,
            controllerServiceResultSetObj,

            uniqueInput,
            uniqueOutput,
            uniqueResultSet,
            generatedService['dataSourceProvider']['storedProcedure'][storedProcedureName]
          );
          // }

          // if (jpaName == 'loanState') {
          //   console.log(controllerBodyBlock);
          // }

          // if ((jpaName == 'search' || jpaName == 'tafahomInformation')) {
          // && storedProcedureName == 'orgUnitChart'

          // if (storedProcedureName == 'orgUnitChart') {
          // // if (storedProcedureName == 'branchList') {
          // console.log(jpaName + ' -> ' + storedProcedureName);
          //   // console.log(applicationObject['appObjectId']);
          //   // console.log(controllerContent);
          //   // console.log(controllerContent);
          // }
          // }

          controllerContent = ``
          let importString = ``;
          Object.keys(controllerImportBlockObj).map((importUnit) => {
            importString += `import ${importUnit};
`;
          });

          controllerContent = `package ${ConfigObject.getControllerPackageName()};
${cosntantImportBlock}
${importString}
${controllerClassName}
${controlleFinalBlock}
${controllerBodyBlock}
}`;

          if ((jpaName != 'search')) {
            isPathExists(controllerPath);
            createFile(
              controllerPath,
              firstLetterCaptalize(storedProcedureName) + `Controller.java`,
              controllerContent
            );
          }

        })
      }
      // ? (

      // )
      else if (Object.keys(generatedService['dataSourceProvider']).includes('restService')) { }
      // ? '' : ''

      // Object.keys(generatedModel['dataSourceProvider']).map((k) => {
      //   // entityPath = ConfigObject.getEntityPath(datasourceName);


      // })
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

      // const datasourceName = targetStoredProcedure['datasourceName'];
      if (
        //  Default(implicit) behaviour in case no 'exposInputOutput' is specified in  storedProcedureName.
        Object.keys(
          applicationObject['dataAccessLayer']['storedProcedures'][
          storedProcedureName
          ]
        ).length == 0 ||
        //  or in case 'exposInputOutput' is specified explicitly in  storedProcedureName.
        (Object.keys(
          applicationObject['dataAccessLayer']['storedProcedures'][
          storedProcedureName
          ]
        ).length > 0 &&
          applicationObject['dataAccessLayer']['storedProcedures'][
          storedProcedureName
          ]['exposeInputOutput'] == true)
      ) {
        shouldCreateFile = true;

        importBlockObj[
          `${ConfigObject.getServicePackageName()}.${applicationObject['appObjectIdClass']
          }Service`
        ] = {};

        /*********************** IN/OUT Model *********************************/
        if (isNotEmptyObject(targetStoredProcedure['parameters']) == true) {
          /*********************** Input Parameter Model *********************************/
          uniqueInput = extractUniqueDataTypefromParametersObject(
            targetStoredProcedure['parameters'],
            'IN'
          );
          if (Object.keys(uniqueInput).length > 0) {
            importBlockObj[
              `${ConfigObject.getModelPackageName()}.${firstLetterCaptalize(
                storedProcedureName
              )}InputDTO`
            ] = {};

            importBlockObj[`static jakarta.persistence.ParameterMode.IN`] = {};
            serviceInputObj[`${storedProcedureName}InputDTO`] = {};
          }

          /*********************** Output Parameter Model *********************************/
          uniqueOutput = extractUniqueDataTypefromParametersObject(
            targetStoredProcedure['parameters'],
            'OUT'
          );
          if (Object.keys(uniqueOutput).length > 0) {
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
          uniqueResultSet = extractUniqueDataTypefromParametersObject(
            targetStoredProcedure['resultSet'],
            'OUT'
          );
          if (Object.keys(uniqueResultSet).length > 0) {
            importBlockObj[
              `${ConfigObject.getModelPackageName()}.${firstLetterCaptalize(
                storedProcedureName
              )}ResultListDTO`
            ] = {};
            importBlockObj[`java.util.List`] = {};
            serviceResultSetObj[`${storedProcedureName}ResultListDTO`] = {};
          }
        }
        // if(objectName=='organizationalChart'){
        //   console.log('********');
        //   console.log(objectName);
        //   // console.log(storedProcedureName);
        //   console.log(bodyBlock);
        // }
        bodyBlock += controllerStoredProcedureMethodCaller(
          applicationObject['appObjectId'],
          storedProcedureName,

          targetStoredProcedure,
          serviceInputObj,
          serviceOutputObj,
          serviceResultSetObj,

          uniqueInput,
          uniqueOutput,
          uniqueResultSet
        );
      }
    }
  );

  /********************************************************************************
   *                        REST API
   ********************************************************************************/

  // *********************************************************
  // File System Storage Service  
  if (applicationObject['appObjectId'] == 'uploadFileRM') {
    // bodyBlock += `
    // private final StorageService storageService;
    // `

    bodyBlock += `@PostMapping(
      // path = "/{idColumn}",
      params = {"docTypeNo"}
)
public ResponseEntity<String> handleFileUpload(@RequestParam("file") MultipartFile file,
                                            //  @PathVariable @NotNull @NotBlank long idColumn,
                                             @RequestParam Map<String, String> docTypes,
                                             RedirectAttributes redirectAttributes,
                                             Principal principal
) {
  //  upload to Document Management Service
  String Ids = storageService.store(file);

//        redirectAttributes.addFlashAttribute("message",
//                "You successfully uploaded " + file.getOriginalFilename() + "!");

  //  load file old properties from local database
  // UploadFileRMDTO uploadFileRMDTO = uploadFileRMService.findById(idColumn, principal);

  //  save file new properties to local database
  FileProperty fileProperty = FileProperty.builder()
          .name(file.getOriginalFilename())
          .type(file.getContentType())
          .size(file.getSize())
          .id(Ids)
          .build();

  ObjectMapper objectMapper = new ObjectMapper();

  try {

      //  convert file properties form java object to json
      String filePropertyAsJson = objectMapper.writeValueAsString(fileProperty);

      //  convert docTypes to its corresponding column
      // docTypes.forEach((key, docTypeNO) -> {
      //     if (docTypeNO.equals("23004")) {
      //         //  document is Asasname
      //         uploadFileRMDTO.setAsasname(filePropertyAsJson);
      //     }
//                else if(){}
      // });

      //  convert DTO to Entity
      // UploadFileRM uploadFileRM = uploadFileRMLogic.convertToEntity(uploadFileRMDTO);

      // if (uploadFileRMDTO.getIdColumn() == 0) {
      //     //  create record, if it does NOT exist
      //     //  save new file properties to local database
      //     URI uri = uploadFileRMService.save(uploadFileRM, principal);
      // } else if (uploadFileRMDTO.getIdColumn() != 0) {
      //     //  update record, if it does exist
      //     //  save new file properties to local database
      //     UploadFileRMDTO updatedUploadFileRM = uploadFileRMService.updateByIdColumn(idColumn, uploadFileRM, principal);
      // }
//            System.out.println(fileProperty);
      return ResponseEntity.ok(filePropertyAsJson);

  } catch (JsonProcessingException ex) {
      return ResponseEntity.notFound().build();
  }

}

@GetMapping(
      path = "/{idColumn}",
      params = {"docTypeNo"}
)
@ResponseBody
//    public ResponseEntity<Map<String, Object>> handelFileDownload(
//    public ResponseEntity<Resource> handelFileDownload(
public HttpEntity<byte[]> handelFileDownload(
      @PathVariable @NotNull @NotEmpty long idColumn,
      @RequestParam Map<String, String> docTypes,
      Principal principal
) {

  try {
//            Resource file;
      byte[] file;
      //  load file property json from local database
      UploadFileRMDTO uploadFileRMDTO = uploadFileRMService.findById(idColumn, principal);

      if (uploadFileRMDTO.getIdColumn() != 0) {

          if (docTypes.get("docTypeNo").equals("23004")) {

              ObjectMapper mapper = new ObjectMapper();
              //  convert file properties form json to java object
              FileProperty fileProperty = mapper.readValue(uploadFileRMDTO.getAsasname(), FileProperty.class);

              //  download from Document Management Service
              file = storageService.loadAsResource(fileProperty.getId());

              if (file == null)
                  return ResponseEntity.notFound().build();

//                    System.out.println(fileProperty.getFileType());

//                    Map<String, Object> map = new HashMap<>();

//                    map.put("content", file);
//                    map.put("name", fileProperty.getFileName());
//                    map.put("type", fileProperty.getFileType());
//                    map.put("size", fileProperty.getFileSize());
//                    map.put("id", fileProperty.getFileId());

              HttpHeaders httpHeader = new HttpHeaders();
//                    httpHeader.set("name",fileProperty.getFileName());
//                    httpHeader.setAccessControlAllowHeaders(Arrays.asList("Access-Control-Expose-Headers"));

              MediaType contentType = fileProperty.getType().equals("image/jpeg")
                      ?
                      MediaType.IMAGE_JPEG
                      :
                      fileProperty.getType().equals("image/png")
                              ?
                              MediaType.IMAGE_PNG
                              :
                              fileProperty.getType().equals("application/octet-stream") || fileProperty.getType() == "text/plain"
                                      ?
                                      MediaType.TEXT_XML
                                      : fileProperty.getType().equals("application/pdf")
                                      ?
                                      MediaType.APPLICATION_JSON
                                      : MediaType.ALL;

//                    httpHeader.setContentType(contentType);
//                    httpHeader.setContentLength(fileProperty.getFileSize());
//
//                    return new HttpEntity<byte[]>(file,httpHeader);
              return ResponseEntity.ok()
//                            .headers(httpHeader)
                      .header(
                              HttpHeaders.CONTENT_DISPOSITION,
                              "inline; filename=picture.png"
//                                    "attachment; filename=\"" + fileProperty.getFileName() + "\""
                      )
                      .contentLength(fileProperty.getSize())
                      .contentType(contentType)
                      .body(file);
//                            .body(map);


          }
//            else if () {}
      }
//        });

      return null;

//        });
  } catch (JsonProcessingException ex) {
      return null;
  }


}`
  }
  let importString = ``;
  Object.keys(importBlockObj).map((importUnit) => {
    importString += `import ${importUnit};
`;
  });

  importString += generateImportStatementFromUniqueDataTypes(uniqueInput);



  // *********************************************************
  //  CustomerLifeCycle
  const customerLifeCycle = `package com.behsazan.projects.mutualUnderstanding.controller;

import com.behsazan.projects.mutualUnderstanding.model.CustomerLifeCycleInputDTO;
import com.behsazan.projects.mutualUnderstanding.model.CustomerLifeCycleOutputDTO;
import com.behsazan.projects.mutualUnderstanding.service.CustomerLifeCycleWebService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@RequestMapping("/clv")
@RequiredArgsConstructor
public class CustomerLifeCycleController {

    private final CustomerLifeCycleWebService customerLifeCycleWebService;
//    @Autowired
//    ClvClient clvClient;
    @PostMapping("")
//    @GetMapping("")
    public CustomerLifeCycleOutputDTO getCustomerGroup(@Validated @RequestBody CustomerLifeCycleInputDTO customerLifeCycleInputDTO, Principal principal) throws Exception{
      return customerLifeCycleWebService.callUserAuthentication(customerLifeCycleInputDTO.getIntervalCode(), customerLifeCycleInputDTO.getCustomerNumber());
//		ClvClient clvClient = new ClvClient();
//        GetCustomerScoreDataResponse response = clvClient.getCustomerData();
//        System.out.println(response);
    }
}
`
  createFile(
    controllerPath,
    'CustomerLifeCycleController.java',
    customerLifeCycle
  );
  // *********************************************************

  if (shouldCreateFile == true) {
    let injectedContent = `package ${ConfigObject.getControllerPackageName()};
${cosntantImportBlock}
${importString}
${methodName}
${bodyBlock}
}`;
    /**
     * Create File
     */
    isPathExists(controllerPath);
    createFile(
      controllerPath,
      applicationObject['appObjectIdClass'] + `Controller.java`,
      injectedContent
    );
  }
};

module.exports = ControllerGenerator;
