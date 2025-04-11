##in FeedGlobalConfig.js
  level up 'version'
  change mode to "production"
  set 'backendIpAddress' ip address
##change localds in DataSourceConfig.js file
  localds: {
    BETA ->  url: 'jdbc:db2://172.26.34.39:50001/bmt1',
                    OR
     ALPHA  ->  url: 'jdbc:db2://172.20.141.52:50001/bmt1',
  }
##change storedProcedure datasource
  getSeriFromTashilat
  activeDeActiveTashilat
  revokeSeriTashilat
  getGovahiEmza
  lending
  rialLetterOfGuarantie
  rialLetterOfCredit
  arzLetterOfGuarantie
  arzLetterOfCredit
  collateral
##run command
  node Generate.js
##intellij Idea
  ###delete datasource from config folder
    CoredsDataSourceConfiguration
  ###delete 'test' package
  //delete FACILITY specific repositories from devds/coreds package if it changed
  //  ActiveDeActiveTashilat
  //  GetSeriFromTashilat 
  ###clean project folders
    *** NO *** delete 'devds' if build for BETA release production ***
    *** NO *** delete 'misds' if build for ALPHA release development ***
  ###Build project (Ctl+F9) for any inconsistency
  ###maven clean
  ###maven package

##vscode (for DEV release)
  ###customerLifeCycle:
    comment getCustomerLifeCycleValue(...)
    comment const customerLifeCycleValue = ...
##copy .war file
  ->  D:\projects\PaaS\src\Generator\Output\Server\mutualUnderstanding\target
  from 'target' folder to tomcat 'webapps' folder
