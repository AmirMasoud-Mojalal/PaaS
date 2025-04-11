const process = require('process');
//  each route must equall with appObjectId of 'content'
//  maximum 3 layers
exports.routes = {
  // appName: 'mutualUnderstanding', //  TODO
  // baseUrl: `/api/v1`, //  TODO
  //  Parent Route MUST have its own PK and indexs
  tafahomInformation: {
    //  All Child Routes will have:
    //  1)  default Id column i.e. IdColumn
    //  2)  Index column i.e virtualPK column of their direct parent
    eghdamat: {
      //  'pathVariable' is the parent route column name (archiveNumber)
      //   that will be "index" column and  of child non-route
      //   used in listByArchieveNumber
      //  It means:
      //  1)  default Id column i.e. will be same IdColumn
      //  2)  Index column i.e name of its own 'pathVariable'
      pathVariable: 'archiveNumber',
    },
    //  virtualPK column (tafCode) of parent route
    //  will automatically be index column of child
    //  used in listByTafCode
    agent: {},
    account: {},
    customerWithHadSaghf: {},
    organizationalChart: {},
    edms: {},
    finantialStatementAbstract: {},
    finantialInformation: {},
    resourcesAndExpenses: {},
    uploadFileRM: {},
    tafahomState: {},
    loanState: {},
    sendToHQ: {},
    retrievedAccount: {},
    dashboardMasterRpt: {},
    dashboardDetailRpt: {},
    search: {},
    commitmentsRpt: {},
    customerRialResourceRpt: {},
    customerArzResourceRpt: {},
    customerRialResourceAvgRpt: {},
    customerArzResourceAvgRpt: {},
    customerProfileAbstractRpt: {},
    lendingRpt: {},
    collateralRpt: {},
    costBenefitRpt: {},
    performanceRpt: {},
    userActivity: {}
  },

  tasParameter: {},
  smsParameter: {},
  notificationParameter: {},
};
