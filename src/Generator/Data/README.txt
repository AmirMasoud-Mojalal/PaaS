Content.js
==========
pageName: {
    appObjectId: 'pageName',
    dataAccessLayer: {
      jpas: {
        jpaName: {
          findAll: {},
          findById: {},
          saveAll: {},
        },
      storedProcedures: {
        storedProcedureName: {
          exposed:true
        },
      },
      restServices: {},
      },


This is main input data objects
1) improt Objects from 'FeedObjects.json'
2) complete 'appObjectId' field
3) insert 'dataAccessLayer' field including
    'jpas' or
    'storedProcedures' or
    'restService'
4) convert dataType of each content:
   string -> String
   date -> Date
5) domain exprets must specify ('Data Direction') what he/she want to have a 'form' or 'reportPage'
6) to let the 'entity' and 'repository' classes be generated :
   [jpas]['jpaName'] field of 'feedContent' must have at least one of these fields (operation):
     getAll(),
     saveAll(),
     getById() and
   corresponding [jpas]['jpa'] field of 'DomainConfig' must have the 'Content' field ('Data')
 in  or 'storedProcedure' or 'restService' should be greater than 0
7) each field in 'Content' field of 'feedContent' is what domain experts expects from system
   some maybe come from jpa, some form storedprocedure and some from restService
Chech only one instance of jpa/storedProcedure/restService exists in FeedContent
BusinesssExpert is responsible for FeedContent
IT is responsible for DomainConfig

domain: 'mutualUnderstanding',
Datasource include: direct access to Table, call StoredProcedure, RestService
Always first datasource is default datasource.
jpaName, storedProcedureName should begin with small letter and
should Not have - _ ...
bi-directional controller for all spring-data-jpa methods will be created.


to have methods in service/ serviceImpl and Controller layer, each
jpa name should define some method in it.
By default jpa names in caplital (JPANAME) will be used as the "map" string in Controller layer
   e.i. GetMapping("/JPANAME")

   
no method for service/ serviceImpl and controller layer will be created if there is no corresponding name in DomainConfig
ghodghod: {
  findAll: {},
}, //  wrong jpa name results to generate no entity or repository


      //   controller with input for storedprocedure input and
      //   controller with output for storedprocedure output

      
        //  By default storedProcedure names in caplital (FULLACCOUNTINFO) will be used as the "map" string in Controller layer
        //    e.i. GetMapping("/FULLACCOUNTINFO")

        
          // exposeInputOutput: true,     //  Default value
          // exposeInputOutput: false,

          
      //   controller with input for REST input and
      //   controller with output for REST output

      
    // EntityGenerator.js processes the content:[] filed only if dataAccessLayer/jpa was defined.
    //  or
    //  to process the content:[] field by EntityGenerator.js,
    //  each object should have to be defined with a dataAccessLayer/jpas field.
    // content: [],


  each '.appObjectId'  in 'Contnt' file must have an equivalent entry in 'ContentMap' file.
  