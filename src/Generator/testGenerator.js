let fs = require('fs');

const {
  isPathExists,
  createFile,
  firstLetterCaptalize,
  isNotEmptyObject,
  objectBuilderFactory,
  objectBuilderFactoryWithData,
  extractUniqueDataTypefromParametersObject,
} = require('./util');

const {
  getJpaByJpaName,
  getStoredProcedureByStoredProcedureName,
} = require('./DomainConfig');

const { getRoutePathString } = require('./ContentMapValidator');

// const TestGenerator = (dir, applicationObject) => {
const TestGenerator = (wrappedUser, applicationObject, ConfigObject) => {
  // console.log(wrappedUser);
  // const actualPath = `${dir}\\${applicationObject['artifactId']}\\src\\test\\java\\${applicationObject['groupdId']}\\${applicationObject['artifactId']}`;
  const testControllerPath = ConfigObject.getTestControllerPath();
  let importBlock = ``;
  let bodyBlock = ``;
  // const fields = applicationObject['content'];
  // const rowNum = fields.length;
  let typeName = ``;
  let abc = ``;
  let shouldCreateFile = false;

  let importBlockObj = {};
  let serviceInputObj = {};
  let serviceOutputObj = {};
  let serviceResultSetObj = {};

  importBlockObj['java.net.URI'] = {};
  importBlockObj['org.junit.jupiter.api.Test'] = {};
  importBlockObj['com.jayway.jsonpath.JsonPath'] = {};
  importBlockObj['com.jayway.jsonpath.DocumentContext'] = {};
  importBlockObj['static org.assertj.core.api.Assertions.assertThat'] = {};
  importBlockObj['org.springframework.beans.factory.annotation.Autowired'] = {};
  importBlockObj['org.springframework.boot.test.context.SpringBootTest'] = {};
  importBlockObj['org.springframework.boot.test.web.client.TestRestTemplate'] =
    {};
  importBlockObj['org.springframework.http.HttpStatus'] = {};
  importBlockObj['org.springframework.http.ResponseEntity'] = {};
  importBlockObj['org.springframework.http.*'] = {};
  importBlockObj[
    `${ConfigObject.getSigninRequestPackageName()}.${
      wrappedUser['appObjectIdClass']
    }`
  ] = {};
  // bodyBlock += objectBuilderFactoryWithData(
  //   // applicationObject['appObjectId'],
  //   wrappedUser,
  //   ConfigObject['user']['priviledgedUser'],
  //   // methodName,
  //   firstLetterCaptalize(jpaName)
  // );

  bodyBlock += `@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class ${applicationObject['appObjectIdClass']}TestController {`;
  bodyBlock += `
    @Autowired
  	TestRestTemplate restTemplate;
  	@Test
  	void contextLoads() {
  	}`;

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
  if (
    typeof applicationObject['dataAccessLayer'] != 'undefined' &&
    typeof applicationObject['dataAccessLayer']['jpas'] != 'undefined' &&
    isNotEmptyObject(applicationObject['dataAccessLayer']['jpas']) &&
    typeof applicationObject['dataAccessLayer']['jpas'] == 'object'
  ) {
    Object.keys(applicationObject['dataAccessLayer']['jpas']).map((jpaName) => {
      // console.log('');
      // console.log(jpaName);
      // storedProcedureName
      // console.log('');

      // Set required variable name
      const targetJpa = getJpaByJpaName(
        jpaName,
        // applicationObject['appObjectId']
        parentJpaName
      )['finalJpa'];
      if (
        Object.keys(targetJpa).length > 0 &&
        typeof targetJpa != 'undefined'
      ) {
        shouldCreateFile = true;

        importBlockObj[
          `${ConfigObject.getModelPackageName()}.${firstLetterCaptalize(
            jpaName
          )}DTO`
        ] = {};

        // Object.keys(applicationObject['dataAccessLayer']['jpas'][jpaName]).map(
        //   (methodName) => {
        // console.log(jpaName);
        // console.log(ConfigObject['user']['priviledgedUser']['firstName']);
        // console.log(ConfigObject['user']['superUser']);
        // console.log(applicationObject);
        // console.log(user);

        bodyBlock += `
    @Test
  	void shouldCreateNew${firstLetterCaptalize(jpaName)}(){
      ${objectBuilderFactoryWithData(
        wrappedUser,
        ConfigObject['user']['priviledgedUser']
      )}
        //  Sign-in
  	  	System.out.println("** A **");
        ResponseEntity createResponse = restTemplate.postForEntity("/api/v1/auth/signin", signinRequest, String.class);
        assertThat(createResponse.getStatusCode()).isEqualTo(HttpStatus.OK);
        DocumentContext documentContext = JsonPath.parse(createResponse.getBody());
        String val = documentContext.read("$");
        System.out.println("** B **");
        //  get token
        String plainCreds = val.substring(10,(val.length()-2));
        System.out.println(plainCreds);
        
        // set token in Authorization header
        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "Bearer " + plainCreds);`;

        // console.log('');
        // console.log(applicationObject['appObjectId']);
        // console.log('');
        // console.log('&&&&&&&&&&&&&&&');

        bodyBlock += objectBuilderFactory(
          // applicationObject['appObjectId'],
          applicationObject,
          null,
          // methodName,
          jpaName + `DTO`,
          targetJpa['content']
        );

        bodyBlock += `
        //TODO
        HttpEntity<${firstLetterCaptalize(
          jpaName
        )}DTO> postRequest = new HttpEntity<${firstLetterCaptalize(
          jpaName
        )}DTO>(${jpaName}DTO, headers);
        ResponseEntity<String> postRequestResponse = restTemplate.exchange("${
          ConfigObject['webAccessPath']
        }${
          applicationObject['appObjectId']
        }s",HttpMethod.POST,postRequest,String.class);

        assertThat(postRequestResponse.getStatusCode()).isEqualTo(HttpStatus.CREATED);
        URI new${
          applicationObject['appObjectId']
        }Location = postRequestResponse.getHeaders().getLocation();
        HttpEntity<${firstLetterCaptalize(
          jpaName
        )}DTO> getRequest = new HttpEntity<${firstLetterCaptalize(
          jpaName
        )}DTO>(null , headers);
        ResponseEntity<String> getRequestResponse = restTemplate.exchange(new${
          applicationObject['appObjectId']
        }Location, HttpMethod.GET, getRequest, String.class);
        assertThat(getRequestResponse.getStatusCode()).isEqualTo(HttpStatus.OK);
  	}
`;
        // }
        // );
      }
    });
  }
  /********************************************************************************
   *                        storedProcedures API
   ********************************************************************************/
  if (
    typeof applicationObject['dataAccessLayer'] != 'undefined' &&
    typeof applicationObject['dataAccessLayer']['storedProcedures'] !=
      'undefined' &&
    isNotEmptyObject(
      applicationObject['dataAccessLayer']['storedProcedures']
    ) &&
    typeof applicationObject['dataAccessLayer']['storedProcedures'] == 'object'
  ) {
    Object.keys(applicationObject['dataAccessLayer']['storedProcedures']).map(
      (storedProcedureName) => {
        shouldCreateFile = true;

        const targetStoredProcedure =
          getStoredProcedureByStoredProcedureName(storedProcedureName);

        /*********************** IN/OUT Model *********************************/
        if (isNotEmptyObject(targetStoredProcedure['parameters']) == true) {
          /*********************** Input Parameter Model *********************************/
          const uniqueInput = extractUniqueDataTypefromParametersObject(
            targetStoredProcedure['parameters'],
            'IN'
          );

          if (Object.keys(uniqueInput).length > 0) {
            importBlockObj[
              `${ConfigObject.getModelPackageName()}.${firstLetterCaptalize(
                storedProcedureName
              )}InputDTO`
            ] = {};

            // importBlockObj[`static jakarta.persistence.ParameterMode.IN`] = {};
            serviceInputObj[`${storedProcedureName}InputDTO`] = {};
          }

          /*********************** Output Parameter Model *********************************/
          const uniqueOutput = extractUniqueDataTypefromParametersObject(
            targetStoredProcedure['parameters'],
            'OUT'
          );
          if (Object.keys(uniqueOutput).length > 0) {
            importBlockObj[
              `${ConfigObject.getModelPackageName()}.${firstLetterCaptalize(
                storedProcedureName
              )}OutputDTO`
            ] = {};

            // importBlockObj[`static jakarta.persistence.ParameterMode.OUT`] = {};
            serviceOutputObj[`${storedProcedureName}OutputDTO`] = {};
          }
        }

        /*********************** ResultSet Model *********************************/
        if (isNotEmptyObject(targetStoredProcedure['resultSet']) == true) {
          const uniqueResultSet = extractUniqueDataTypefromParametersObject(
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

        bodyBlock += `
    @Test
  	void shouldCreateNew${storedProcedureName}(){
      ${objectBuilderFactoryWithData(
        wrappedUser,
        ConfigObject['user']['priviledgedUser']
      )}
        //  Sign-in
  	  	System.out.println("** A **");
        ResponseEntity createResponse = restTemplate.postForEntity("/api/v1/auth/signin", signinRequest, String.class);
        assertThat(createResponse.getStatusCode()).isEqualTo(HttpStatus.OK);
        DocumentContext documentContext = JsonPath.parse(createResponse.getBody());
        String val = documentContext.read("$");
        System.out.println("** B **");
        //  get token
        String plainCreds = val.substring(10,(val.length()-2));
        System.out.println(plainCreds);
        
        // set token in Authorization header
        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "Bearer " + plainCreds);`;

        bodyBlock += objectBuilderFactory(
          // applicationObject['appObjectId'],
          applicationObject,
          null,
          // methodName,
          storedProcedureName + `OutputDTO`,

          serviceInputObj,
          serviceResultSetObj,

          applicationObject,
          ConfigObject
        );
        bodyBlock += `}`;
      }
    );
  }
  /********************************************************************************
   *                        REST API
   ********************************************************************************/
  if (
    typeof applicationObject['dataAccessLayer'] != 'undefined' &&
    typeof applicationObject['dataAccessLayer']['restServices'] !=
      'undefined' &&
    isNotEmptyObject(applicationObject['dataAccessLayer']['restServices']) &&
    typeof applicationObject['dataAccessLayer']['restServices'] == 'object'
  ) {
  }

  //     	@Test
  // 	void testReturn${applicationObject['formId']}WhenDataIsSaved(){
  // //		ResponseEntity<String> response = restTemplate.getForEntity()
  // 	}

  // }
  let importString = ``;
  Object.keys(importBlockObj).map((importUnit) => {
    importString += `import ${importUnit};
`;
  });

  // ${importBlock}

  let injectedContent = `package ${ConfigObject.getTestControllerPackageName()};

${importString}
${bodyBlock}
}
`;

  if (shouldCreateFile == true) {
    /**
     * Create Directory
     */

    isPathExists(testControllerPath);
    createFile(
      testControllerPath,
      applicationObject['appObjectIdClass'] + `TestController.java`,
      injectedContent
    );
  }
  // if (!fs.existsSync(actualPath)) {
  //   fs.mkdirSync(actualPath, { recursive: true });
  // }

  // console.log(`${actualPath}/${applicationObject['formId']}Repository.java`);
  /**
   * Create File
   */
  // fs.writeFile(
  //   `${actualPath}/${applicationObject['formId']}Test.java`,
  //   injectedContent,
  //   function (err) {
  //     if (err) throw err;
  //     console.log('Test file is created successfully.');
  //   }
  // );
};

module.exports = TestGenerator;
