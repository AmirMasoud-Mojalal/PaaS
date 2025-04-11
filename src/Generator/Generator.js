//  Run from Command line
//  node Generator.js

let EntityGenerator = require('./EntityGenerator');
let ModelGenerator = require('./ModelGenerator');
let RepositoryGenerator = require('./RepositoryGenerator');
let ServiceGenerator = require('./ServiceGenerator');
let ServiceImplGenerator = require('./ServiceImplGenerator');
let ServiceLogicGenerator = require('./ServiceLogicGenerator');
let ControllerGenerator = require('./ControllerGenerator');
let TestGenerator = require('./TestGenerator');
let ProjectBaseFilesGenerator = require('./ProjectBaseFilesGenerator');
let ConfigGenerator = require('./ConfigGenerator');
const SecurityGenerator = require('./SecurityGenerator');

const feedContent = require('./FeedContent');
const feedConfigWithSuger = require('./FeedGlobalConfigWithSuger');

const DomainConfig = require('./DomainConfig');
// const ContentMapValidator = require('./ContentMapValidator');

const ClientProjectBaseFilesGenerator = require('./frontEnd/react/ClientProjectBaseFilesGenerator');
const ClientProjectConfigGenerator = require('./frontEnd/react/ClientProjectConfigGenerator');
// const ClientProjectSideBarGenerator = require('./frontEnd/react/ClientProjectSideBarGenerator');
const ClientProjectHeaderGenerator = require('./frontEnd/react/ClientProjectHeaderGenerator')
const ClientProjectSecurityGenerator = require('./frontEnd/react/ClientProjectSecurityGenerator');
const clientProjectRouterGenerator = require('./frontEnd/react/ClientProjectRouterGenerator');
const clientProjectRouteGenerator = require('./frontEnd/react/ClientProjectRouteGenerator');
const clientProjectListGenerator = require('./frontEnd/react/ClientProjectListGenerator');
const clientProjectNewGenerator = require('./frontEnd/react/ClientProjectNewGenerator');
const clientProjectViewGenerator = require('./frontEnd/react/ClientProjectViewGenerator');
const clientProjectEditGenerator = require('./frontEnd/react/ClientProjectEditGenerator');
const clientProjectDeleteGenerator = require('./frontEnd/react/ClientProjectDeleteGenerator');
const clientProjectSearchGenerator = require('./frontEnd/react/ClientProjectSearchGenerator');
const ClientProjectUIComponentGenerator = require('./frontEnd/react/ClientProjectUICompoenentGenerator')
const clientProjectReportGenerator = require('./frontEnd/react/ClientProjectReportGenerator');

const clientViewForm = require('./ClientViewForm');
const commonGenerator = require('./commonGenerator');

const generate = () => { };

if (DomainConfig.validate()) {
  if (feedContent.validate()) {
    // if (ContentMapValidator.validateRoutes()) {
    /**
     * Declare Variables
     */
    const ConfigObject = feedConfigWithSuger['ExpandedConfig'];
    /**
     ***************** Run Server-Side Algorithm *****************
     */
    ProjectBaseFilesGenerator(ConfigObject);
    commonGenerator(ConfigObject);
    ConfigGenerator(feedContent, ConfigObject);
    SecurityGenerator(feedContent, ConfigObject);

    /**
     *************************************************************
     ***************** Run Client-Side Algorithm *****************
     *************************************************************
     */
    ClientProjectUIComponentGenerator(ConfigObject)
    ClientProjectBaseFilesGenerator(ConfigObject);
    ClientProjectConfigGenerator(ConfigObject);
    ClientProjectSecurityGenerator(feedContent, ConfigObject);
    clientProjectRouterGenerator(feedContent, ConfigObject);
    //  replaced by HeaderGenerator()
    // ClientProjectSideBarGenerator(feedContent, ConfigObject);
    ClientProjectHeaderGenerator(feedContent, ConfigObject)

    Object.keys(feedContent['content']).map((appObjectId) => {
      /**
     *************************************************************
     ***************** Run Server-Side Algorithm *****************
     *************************************************************
     */
      const appObject = feedContent['content'][appObjectId];
      const user = feedContent['user']['signinRequest'];
      wrappedApplicationObject = {
        getValidationRuleSetOfContentEntryName:
          feedContent.getValidationRuleSetOfContentEntryName,
        getAppObjectIdByJpaName: feedContent.getAppObjectIdByJpaName,
        getJpaNameByAppObjectId: feedContent.getJpaNameByAppObjectId,
        getAppObjectByAppObjectId: feedContent.getAppObjectByAppObjectId,
        ...appObject,
        appObjectId: feedContent['content'][appObjectId]['appObjectId'].charAt(0).toLowerCase() + feedContent['content'][appObjectId]['appObjectId'].slice(1),
        // appObjectId: appObjectId.charAt(0).toLowerCase() + appObjectId.slice(1),
        // appObject.appObjectId.charAt(0).toLowerCase() +
        // appObject.appObjectId.slice(1),
        appObjectIdClass: feedContent['content'][appObjectId]['appObjectId'].charAt(0).toUpperCase() + feedContent['content'][appObjectId]['appObjectId'].slice(1),
        // appObjectIdClass: appObjectId.charAt(0).toUpperCase() + appObjectId.slice(1),
        // appObject.appObjectId.charAt(0).toUpperCase() +
        // appObject.appObjectId.slice(1),
        hasAnyValidCreateMethod: feedContent.hasAnyValidCreateMethod,
        hasAnyValidReadMethod: feedContent.hasAnyValidReadMethod,
        hasAnyValidUpdateMethod: feedContent.hasAnyValidUpdateMethod,
        hasAnyValidDeleteMethod: feedContent.hasAnyValidDeleteMethod,
        hasAnyValidListMethod: feedContent.hasAnyValidListMethod,
      };
      wrappedUser = {
        ...user,
        appObjectId:
          user.appObjectId.charAt(0).toLowerCase() + user.appObjectId.slice(1),
        appObjectIdClass:
          user.appObjectId.charAt(0).toUpperCase() + user.appObjectId.slice(1),
      };

      EntityGenerator(wrappedApplicationObject, ConfigObject);
      RepositoryGenerator(wrappedApplicationObject, ConfigObject);
      ModelGenerator(wrappedApplicationObject, ConfigObject);
      ServiceGenerator(wrappedApplicationObject, ConfigObject);
      ServiceLogicGenerator(wrappedApplicationObject, ConfigObject);
      ServiceImplGenerator(wrappedApplicationObject, ConfigObject);
      ControllerGenerator(wrappedApplicationObject, ConfigObject);

      // ExceptionGenerator(wrappedApplicationObject, ConfigObject);
      // TestGenerator(dir, wrappedApplicationObject);
      TestGenerator(wrappedUser, wrappedApplicationObject, ConfigObject);

      /**
       ***************** Run Client-Side Algorithm *****************
       */
      clientProjectRouteGenerator(wrappedApplicationObject, ConfigObject);

      if (appObjectId.slice(-3) == 'Rpt') {
        clientProjectReportGenerator(wrappedApplicationObject, ConfigObject);
      } else if (appObjectId == 'search') {
        clientProjectSearchGenerator(wrappedApplicationObject, ConfigObject);
      } else if (appObjectId.slice(-3) != 'Rpt') {
        clientProjectNewGenerator(wrappedApplicationObject, ConfigObject);
        clientProjectListGenerator(wrappedApplicationObject, ConfigObject);
        clientProjectViewGenerator(wrappedApplicationObject, ConfigObject);
        clientProjectEditGenerator(wrappedApplicationObject, ConfigObject);
        clientProjectDeleteGenerator(wrappedApplicationObject, ConfigObject);
      }
      // ReactConfigGenerator(ConfigObject);
      // ReactSecurityGenerator(feedContent, ConfigObject);
      // RouteGenerator();
      // loaderGenerateo();
      // viewGenerator();
      // console.log(`*** ${appObjectId} ***`);
      // clientViewForm(wrappedApplicationObject, ConfigObject);
    });
  } else {
    console.log('Content data must be validated!');
  }
} else {
  console.log('Message from Generator: Domain data must be validated!');
}
