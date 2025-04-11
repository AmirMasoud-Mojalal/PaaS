let feedContent = require('./FeedContent.js');
let feedConfig = require('./FeedConfig.js');

let dir = `${__dirname}`;

/**
 * Aggregate data object and config
 */
exports.ApplicationObjects = {
  ...feedConfig.config,
  contents: {
    ...feedContent.content,
  },
};

// const ApplicationObjects = {
//   ...feedConfig.config,
//   contents: {
//     ...feedContent.content,
//   },
// };

// exports.aggregatedObject = {
//   groupId: ApplicationObjects['groupId'].toLowerCase(),
//   packageName: ApplicationObjects['groupId']
//     .toLowerCase()
//     .split('\\')
//     .join('.'),
//   artifactId:
//     ApplicationObjects['artifactId'].charAt(0).toLowerCase() +
//     ApplicationObjects['artifactId'].slice(1),
//   schema: ApplicationObjects['datasource']['schema'],
//   webAccessPath: ApplicationObjects['webAccessPath']['url'],
//   buildTool: ApplicationObjects['buildTool'],
//   compiler: ApplicationObjects['compiler'],
//   datasource: ApplicationObjects['datasource'],
//   jpa: ApplicationObjects['jpa'],
//   token: ApplicationObjects['token'],
//   globalPaging: ApplicationObjects['globalPaging'],

//   getBasePackageName() {
//     return this.packageName + `.` + this.artifactId;
//   },
//   getEntityPackageName() {
//     return this.getBasePackageName() + `.entity`;
//   },
//   getModelPackageName() {
//     return this.getBasePackageName() + `.model`;
//   },
//   getRepositoryPackageName() {
//     return this.getBasePackageName() + `.repository`;
//   },
//   getServicePackageName() {
//     return this.getBasePackageName() + `.service`;
//   },
//   getServiceImplPackageName() {
//     return this.getBasePackageName() + `.service.impl`;
//   },
//   getServiceLogicPackageName() {
//     return this.getBasePackageName() + `.service.logic`;
//   },
//   getControllerPackageName() {
//     return this.getBasePackageName() + `.controller`;
//   },
//   getExceptionPackageName() {
//     return this.getBasePackageName() + `.exception`;
//   },
//   //** */
//   getBasePath() {
//     return `${dir}\\` + this.artifactId;
//   },
//   getIdeaPath() {
//     return this.getBasePath() + `\\.idea`;
//   },
//   getActualPath() {
//     return (
//       this.getBasePath() +
//       `\\src\\main\\java\\` +
//       this.groupId +
//       `\\` +
//       this.artifactId
//     );
//   },
//   getResourcePath() {
//     return `` + this.getBasePath() + `\\src\\main\\resources`;
//   },
//   getConfigPath() {
//     return this.getActualPath() + `\\config`;
//   },
//   getControllerPath() {
//     return this.getActualPath() + `\\controller`;
//   },
//   getEntityPath() {
//     return this.getActualPath() + `\\entity`;
//   },
//   getExceptionPath() {
//     return this.getActualPath() + `\\exception`;
//   },
//   getModelPath() {
//     return this.getActualPath() + `\\model`;
//   },
//   getModelRequestPath() {
//     return this.getActualPath() + `\\model\\request`;
//   },
//   getModelResponsePath() {
//     return this.getActualPath() + `\\model\\response`;
//   },
//   getRepositoryPath() {
//     return this.getActualPath() + `\\repository`;
//   },
//   getRepositoryImplPath() {
//     return this.getActualPath() + `\\repository\\impl`;
//   },
//   getServiceBasePath() {
//     return this.getActualPath() + `\\service`;
//   },
//   getServiceImplPath() {
//     return this.getActualPath() + `\\service\\impl`;
//   },
//   getServiceLogicPath() {
//     return this.getActualPath() + `\\service\\logic`;
//   },
//   getActualTestPath() {
//     return (
//       this.getBasePath() +
//       `\\src\\test\\java\\` +
//       this.groupId +
//       `\\` +
//       this.artifactId
//     );
//   },
//   getTestControllerPath() {
//     return this.getActualTestPath() + `\\controller`;
//   },
//   getTestRepositoryPath() {
//     return this.getActualTestPath() + `\\repository`;
//   },
// };

// userParameter: {
//   appObjectId: 'user',
//   content: [
//     [
//       {
//         name: 'نام',
//         title: 'firstName',
//         value: {
//           type: 'primitive',
//           schema: {
//             type: 'String',
//           },
//         },
//       },
//       {
//         name: 'نام خانوادگی',
//         title: 'lastName',
//         value: {
//           type: 'primitive',
//           schema: {
//             type: 'String',
//           },
//         },
//       },
//       {
//         name: 'ایمیل',
//         title: 'email',
//         value: {
//           type: 'primitive',
//           schema: {
//             type: 'String',
//           },
//         },
//       },
//       {
//         name: 'پسورد',
//         title: 'password',
//         value: {
//           type: 'primitive',
//           schema: {
//             type: 'String',
//           },
//         },
//       },
//       {
//         name: 'نقش',
//         title: 'role',
//         value: {
//           type: 'primitive',
//           schema: {
//             type: 'Role',
//           },
//         },
//       },
//     ],
//   ],
// },
