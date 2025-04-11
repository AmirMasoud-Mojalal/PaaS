let fs = require('fs');

const datasourceGenerator = (applicationObject, ConfigObject) => {
  if (
    typeof applicationObject['dataAccessLayer'] != 'undefined' &&
    typeof applicationObject['dataAccessLayer']['storedProcedures'] !=
      'undefined' &&
    isNotEmptyObject(
      applicationObject['dataAccessLayer']['storedProcedures']
    ) &&
    typeof applicationObject['dataAccessLayer']['storedProcedures'] == 'object'
  ) {
    //  TODO
    //  getDataSources
    //  getDefaultDataSources
  }
};

module.exports = datasourceGenerator;
