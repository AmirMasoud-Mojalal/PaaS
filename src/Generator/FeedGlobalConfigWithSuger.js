const { getDataSourceByDataSourceName, getDataSourceNameList } = require('./DataSourceConfig');

const feedContent = require('./FeedContent');

const feedConfig = require('./FeedGlobalConfig');

const {
  getJpaDatasources,
  isThereAnyRestService,
  getDataSourceNameByJpaName,
  getDataSourceNameByStoredProcedureName,
} = require('./DomainConfig');

let dir = `${__dirname}`;

exports.ExpandedConfig = {
  ...feedConfig['config'],
  groupId: feedConfig['config']['groupId'].toLowerCase(),
  packageName: feedConfig['config']['groupId']
    .toLowerCase()
    .split('\\')
    .join('.'),
  artifactId:
    feedConfig['config']['artifactId'].charAt(0).toLowerCase() +
    feedConfig['config']['artifactId'].slice(1),
  // schema: feedConfig['config']['datasource']['schema'],
  webAccessPath: feedConfig['config']['webAccessPath']['url'],
  getBackendURI() {
    if (feedConfig['config']['mode'] == 'development_SpringBoot') {
      return `http://${feedConfig['config']['backendIpAddress_Development_SpringBoot']}`;
    } else if (feedConfig['config']['mode'] == 'development_Tomcat') {
      return `http://${feedConfig['config']['backendIpAddress_Development_Tomcat']}/${feedConfig['config']['artifactId']}-${feedConfig['config']['version']}`;
    } else if (feedConfig['config']['mode'] == 'test_alpha') {
      return `http://${feedConfig['config']['backendIpAddress_Alpha']}/${feedConfig['config']['artifactId']}-${feedConfig['config']['version']}`;
    } else if (feedConfig['config']['mode'] == 'test_beta') {
      return `http://${feedConfig['config']['backendIpAddress_Beta']}/${feedConfig['config']['artifactId']}-${feedConfig['config']['version']}`;
    } else if (feedConfig['config']['mode'] == 'production') {
      return `http://${feedConfig['config']['backendIpAddress_Production']}/${feedConfig['config']['artifactId']}-${feedConfig['config']['version']}`;
    }
  },
  defaultDataSourceSchema: getDataSourceByDataSourceName(
    feedConfig['config']['defaultDataSource']
  )['schema'],
  isThereAnyRestService: isThereAnyRestService(),
  getBasePackageName() {
    return this.packageName + `.` + this.artifactId;
  },
  validateDataSourceName(datasourceName) {
    if (
      `${typeof datasourceName}` != 'undefined' &&
      typeof datasourceName == `string` &&
      datasourceName.length > 0
    ) {
      let correctDataSourceName = ``;
      // Object.keys(feedConfig['config']['datasources']).map((dsName) => {
      // Object.keys(getDataSourceByDataSourceName()).map((dsName) => {
      // console.log('^^^^^^^^^^^^^^^^^^^6');
      // console.log(this.getConfiguredDatasources());
      // Object.keys(this.getConfiguredDatasources()).map((dsName) => {
      getDataSourceNameList().map((dsName) => {
        if (dsName == datasourceName) {
          correctDataSourceName += dsName;
        }
      });
      return correctDataSourceName.length > 0
        ? `.` + correctDataSourceName
        : ``;
    } else {
      console.log(`${datasourceName} is not a valid name;`);
    }
  },
  getValidDataSource(datasourceName) {
    if (typeof datasourceName != 'undefined') {
      return (
        this.getBasePackageName() +
        `` +
        this.validateDataSourceName(datasourceName)
      );
    } else {
      return this.getBasePackageName();
    }
  },
  getCustomAnnotationPackageName(datasourceName) {
    return this.getValidDataSource(datasourceName) + `.annotation`;
  },
  getConfgiPackageName(datasourceName) {
    return this.getValidDataSource(datasourceName) + `.config`;
  },
  getEntityPackageName(datasourceName) {
    return this.getValidDataSource(datasourceName) + `.entity`;
  },
  getModelPackageName(datasourceName) {
    return this.getValidDataSource(datasourceName) + `.model`;
  },
  getSigninRequestPackageName(datasourceName) {
    return this.getValidDataSource(datasourceName) + `.model.request`;
  },
  getRepositoryPackageName(datasourceName) {
    return this.getValidDataSource(datasourceName) + `.repository`;
  },
  getServicePackageName(datasourceName) {
    return this.getValidDataSource(datasourceName) + `.service`;
  },
  getServiceImplPackageName(datasourceName) {
    return this.getValidDataSource(datasourceName) + `.service.impl`;
  },
  getServiceLogicPackageName(datasourceName) {
    return this.getValidDataSource(datasourceName) + `.service.logic`;
  },
  getControllerPackageName(datasourceName) {
    return this.getValidDataSource(datasourceName) + `.controller`;
  },
  getExceptionPackageName(datasourceName) {
    return this.getValidDataSource(datasourceName) + `.exception`;
  },
  getTestControllerPackageName(datasourceName) {
    return this.getValidDataSource(datasourceName) + `.controller`;
  },
  //** */
  getRootPath() {
    return `${dir}`;
  },
  getUtilPath() {
    return this.getRootPath() + `\\util`;
  },
  getBasePath() {
    return `${dir}\\` + `Output\\Server\\` + this.artifactId;
  },
  getIdeaPath() {
    return this.getBasePath() + `\\.idea`;
  },
  getActualPath(datasourceName) {
    if (typeof datasourceName != 'undefined') {
      return (
        this.getBasePath() +
        `\\src\\main\\java\\` +
        this.groupId +
        `\\` +
        this.artifactId +
        `\\` +
        datasourceName
      );
    } else {
      return (
        this.getBasePath() +
        `\\src\\main\\java\\` +
        this.groupId +
        `\\` +
        this.artifactId
      );
    }
  },
  getResourcePath() {
    return `` + this.getBasePath() + `\\src\\main\\resources`;
  },
  getConfigPath() {
    return this.getActualPath() + `\\config`;
  },
  getCommonPath() {
    return this.getActualPath() + `\\common`;
  },
  getCustomAnnotationPath() {
    return this.getActualPath() + `\\annotation`;
  },
  getControllerPath() {
    return this.getActualPath() + `\\controller`;
  },
  getEntityPath(datasourceName) {
    return this.getActualPath(datasourceName) + `\\entity`;
  },
  getExceptionPath() {
    return this.getActualPath() + `\\exception`;
  },
  getModelPath(datasourceName) {
    return this.getActualPath(datasourceName) + `\\model`;
  },
  getModelRequestPath(datasourceName) {
    return this.getActualPath(datasourceName) + `\\model\\request`;
  },
  getPostmanRequestModelPath() {
    return this.getActualPath() + `\\model\\request\\postman`;
  },
  getModelResponsePath(datasourceName) {
    return this.getActualPath(datasourceName) + `\\model\\response`;
  },
  getRepositoryPath(datasourceName) {
    return this.getActualPath(datasourceName) + `\\repository`;
  },
  getRepositoryImplPath(datasourceName) {
    return this.getActualPath(datasourceName) + `\\repository\\impl`;
  },
  getServiceBasePath(datasourceName) {
    return this.getActualPath(datasourceName) + `\\service`;
  },
  getServiceImplPath(datasourceName) {
    return this.getActualPath(datasourceName) + `\\service\\impl`;
  },
  getServiceLogicPath(datasourceName) {
    return this.getActualPath(datasourceName) + `\\service\\logic`;
  },
  getActualTestPath() {
    return (
      this.getBasePath() +
      `\\src\\test\\java\\` +
      this.groupId +
      `\\` +
      this.artifactId
    );
  },
  getTestControllerPath() {
    // console.log('getTestControllerPath');
    return this.getActualTestPath() + `\\controller`;
  },
  getTestRepositoryPath() {
    return this.getActualTestPath() + `\\repository`;
  },
  //  Client
  getClientBasePath() {
    return `${dir}\\Output\\Client\\` + this.artifactId;
  },
  getClientActualPath(datasourceName) {
    if (typeof datasourceName != 'undefined') {
      return (
        this.getClientBasePath() + `\\test1`
        // `\\src\\main\\java\\` +
        // this.groupId +
        // `\\` +
        // this.artifactId +
        // `\\` +
        // datasourceName
      );
    } else {
      return this.getClientBasePath();
      // this.getClientBasePath() + `\\test2`
      // `\\src\\main\\java\\` +
      // this.groupId +
      // `\\` +
      // this.artifactId
    }
  },
  getClientViewPath() {
    return this.getClientActualPath() + `\\test3`;
  },
  getClientSourcePath() {
    return this.getClientActualPath() + `\\src`;
  },
  getFontSourcePath() {
    return `${dir}\\fonts`;
  },
  getIconSourcePath() {
    return `${dir}\\icons`;
  },
  getClientFontPath() {
    return this.getClientSourcePath() + `\\font`;
  },
  getClientIconPath() {
    return this.getClientSourcePath() + `\\icon`;
  },
  getClientUtilPath() {
    return this.getClientSourcePath() + `\\util`;
  },
  getClientStylePath() {
    return this.getClientSourcePath() + `\\scss`;
  },
  getClientStylesheetPath() {
    return this.getClientSourcePath() + `\\stylesheet`;
  },


  getClientUIComponentPackagePath() {
    return `../../UIComponent`
  },
  getClientComponentGridPath() {
    return this.getClientUIComponentPackagePath() + `/grid`;
  },
  getClientComponentBreadCrumbPath() {
    return this.getClientUIComponentPackagePath() + `/breadcrumb/Breadcrumb`
  },


  getClientUIComponentPath() {
    return this.getClientSourcePath() + `\\components\\UIComponent`;
  },
  getClientComponentPath() {
    return this.getClientSourcePath() + `\\components`;
  },
  getClientComponentErrorPath() {
    return this.getClientComponentPath() + `\\error`;
  },
  getClientComponentLayoutPath() {
    return this.getClientComponentPath() + `\\layout`;
  },
  getClientComponentPublicPath() {
    return this.getClientComponentPath() + `\\public`;
  },
  getClientComponentLoginPath() {
    return this.getClientComponentPath() + `\\login`;
  },
  getClientComponentDashboradPath() {
    return this.getClientComponentPath() + `\\dashboard`;
  },
  getClientComponentFooterPath() {
    return this.getClientComponentPath() + `\\footer`;
  },
  getClientComponentHeaderPath() {
    return this.getClientComponentPath() + `\\header`;
  },
  getClientComponentLogoutPath() {
    return this.getClientComponentPath() + `\\logout`;
  },
  getClientComponentSidebarPath() {
    return this.getClientComponentPath() + `\\sidebar`;
  },
  getClientComponentUserPath() {
    return this.getClientComponentPath() + `\\user`;
  },
  // getClientComponentBreadcrumbPath() {
  //   return this.getClientUIComponentPath() + `\\Breadcrumb`;
  // },
  getClientComponentModalPath() {
    return this.getClientUIComponentPath() + `\\modal`;
  },
  getConfiguredDatasources() {
    /********************************************************************************
     *                        storedProcedures API
     ********************************************************************************/
    //  1)  fetch 'available' datasource names from DataSourceConfig.js file
    // const availableDataSources = getDataSourceNameList();
    let selectedDatasources = {};
    //  2)  extract 'used' data accesses names from Jpa/StoredProcedure parts
    //      of feedContent.js file
    Object.keys(feedContent.content).map((key) => {
      if (typeof feedContent.content[key]['dataAccessLayer'] != 'undefined') {
        if (
          typeof feedContent.content[key]['dataAccessLayer']['jpas'] !=
          'undefined'
        ) {
          //  2-1)  used JPA data access name
          Object.keys(feedContent.content[key]['dataAccessLayer']['jpas']).map(
            (jpa) => {
              //  3)  extracted datasource of any 'used' data access names from 'configured'
              //      datasources in DomainConfig.js file to helth check if exists.
              const findDataSource = getDataSourceNameByJpaName(jpa);
              //  4)  compare the
              if (typeof findDataSource != 'undefined') {
                selectedDatasources[findDataSource] =
                  getDataSourceByDataSourceName(findDataSource);
              }
              // console.log(getJpaDatasources());
              // console.log(jpa);
              // console.log(findDataSource);
              // console.log('');
            }
          );
        } else {
          console.log(
            `FeedGlobalConfigWithSuger: ${key} has no JPA DataSource defined!`
          );
        }
        if (
          typeof feedContent.content[key]['dataAccessLayer'][
          'storedProcedures'
          ] != 'undefined'
        ) {
          //  2-2)  used storedProcedures data access name
          Object.keys(
            feedContent.content[key]['dataAccessLayer']['storedProcedures']
          ).map((storedProcedure) => {
            //  3)  extract configured datasources from DomainConfig.js file
            const findDataSource =
              getDataSourceNameByStoredProcedureName(storedProcedure);
            if (typeof findDataSource != 'undefined') {
              selectedDatasources[findDataSource] =
                getDataSourceByDataSourceName(findDataSource);
            }
          });
          // console.log(
          //   feedContent.content[key]['dataAccessLayer']['storedProcedures']
          // );
        } else {
          console.log(
            `FeedGlobalConfigWithSuger: ${key} has no storedProcedure DataSource defined!`
          );
        }
      } else {
        console.log(
          `FeedGlobalConfigWithSuger: feedContent has no DataSource defined!`
        );
      }
    });
    // console.log('selectedDatasources');
    // console.log(selectedDatasources);
    return selectedDatasources;
  },
  // getCorseMapping(){
  //   if(feedConfig['config']['mode' == 'development']){
  //     return `/${this.artifactId}/**`
  //   }
  // }
};

// console.log(this.ExpandedConfig['defaultDataSource']);
// console.log(this.ExpandedConfig);

// exports.getDataSources = () => {
//   /********************************************************************************
//    *                        storedProcedures API
//    ********************************************************************************/
//   //  1)  fetch available datasources from DataSourceConfig.js file
//   // const availableDataSources = getDataSourceNameList();
//   let selectedDatasources = {};
//   //  2)  get used datasources from feedContent.js file
//                 console.log('----------1---');
//   Object.keys(feedContent.content).map((key) => {
//     if (typeof feedContent.content[key]['dataAccessLayer'] != 'undefined') {
//       if (
//         typeof feedContent.content[key]['dataAccessLayer']['jpas'] !=
//         'undefined'
//       ) {
//         //  2-1)  used JPA datasources
//         Object.keys(feedContent.content[key]['dataAccessLayer']['jpas']).map(
//           (jpa) => {
//             //  3)  extract configured datasources from DomainConfig.js file
//             const findDataSource = getJpaNameByDataSourceName(jpa);
//                 console.log('----------1---');
//             if (typeof findDataSource != 'undefined') {
//               selectedDatasources[findDataSource] =
//                 getDataSourceByDataSourceName(findDataSource);
//                 console.log('----------2---');
//                 console.log(findDataSource);
//                 console.log(getDataSourceByDataSourceName(findDataSource));
//                 console.log(selectedDatasources);
//             }
//           }
//         );
//       } else {
//         console.log(
//           `FeedGlobalConfigWithSuger: ${key} has no JPA DataSource defined!`
//         );
//       }
//       if (
//         typeof feedContent.content[key]['dataAccessLayer'][
//           'storedProcedures'
//         ] != 'undefined'
//       ) {
//         //  2-2)  used storedProcedures datasources
//         Object.keys(
//           feedContent.content[key]['dataAccessLayer']['storedProcedures']
//         ).map((storedProcedure) => {
//           //  3)  extract configured datasources from DomainConfig.js file
//           const findDataSource =
//             getDataSourceNameByStoredProcedureName(storedProcedure);
//           if (typeof findDataSource != 'undefined') {
//             selectedDatasources[findDataSource] =
//               getDataSourceByDataSourceName(findDataSource);
//           }
//         });
//       } else {
//         console.log(
//           `FeedGlobalConfigWithSuger: ${key} has no storedProcedure DataSource defined!`
//         );
//       }
//     } else {
//       console.log(
//         `FeedGlobalConfigWithSuger: feedContent has no DataSource defined!`
//       );
//     }
//   });
//   // console.log('selectedDatasources');
//   // console.log(selectedDatasources);
//   return selectedDatasources;
// };

// exports.getDefaultDataSource = () => {
//   console.log(this.ExpandedConfig.defaultDataSource);
//   return this.ExpandedConfig.defaultDataSource;
//   // console.log(this.content['dataAccessLayer']);
// };

// this.getDefaultDataSource();
// this.getDataSources();
