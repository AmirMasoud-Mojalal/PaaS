//  Custom Annotation ->  Interface
//  Validator         ->  Implementation Class
//  there is no fear if there is an entry in 'validationRule' object that has not equivalent in 'content' object
//  all check has done form 'content' object to 'validationRule' obejct.
exports.validationRules = {
  // tafahomStateMustBeOnGoing: {
  //   sourceObjectName: 'tafahomInformation', //  ->  jpaName -> Entity/Repository/Model objects
  //   // sourceObjectName: 'tafahomFirstFormJpa', //  ->  jpaName -> Entity/Repository/Model objects
  //   //  e.i. TafahomFirstForm Id (name, type)
  //   //  ->  storedProcedure/ restService -> input/ output model file
  //   //  TODO
  //   //  candidate to be indexed
  //   sourceKey: 'tafState',
  //   sourceKeyType: 'String',
  //   operation: '==',
  //   intendedValue: 'دردست اقدام',
  //   errorMessage:
  //     'Invalid State: The mutualUnderstanding must be دردست اقدام state.',
  // },
};

//  called form feedContent.js
exports.getValidationRuleByName = (targetRuleName) => {
  let targetRule = ``;
  Object.keys(this.validationRules).map((ruleName) => {
    if (ruleName == targetRuleName) {
      targetRule = this.validationRules[ruleName];
    }
  });
  return targetRule;
};
// console.log(typeof this.getValidationRuleByName('tafahomStateMustBeOnGoing')=='object');

//  Called from FeedContent.js
exports.isValidationRuleNameExist = (targetRuleName) => {
  let isExist = false;
  const findRule = this.getValidationRuleByName(targetRuleName);
  isExist = typeof findRule == 'object' ? true : false;
  // Object.keys(this.validationRules).map((ruleName) => {
  //   if (ruleName == targetRuleName) {
  //     targetRule = true;
  //   }
  // });
  return isExist;
};
// console.log(this.isValidationRuleNameExist('tafahomStateMustBeOnGoing'));


// exports.validate = () => {
//   Object.keys(this.validationRules).map((ruleName) => {
//     console.log(ruleName);
//     console.log(this.validationRules[ruleName]['sourceObject']);
//   });
// };
