/**
 * This is input configs
 */
exports.config = {
  groupId: 'com\\behsazan\\projects',
  artifactId: 'mutualUnderstanding',
  version: `0.0.23`,
  //  TODO - To be removed
  webAccessPath: {
    url: `/api/v1`,
  },
  // 1) development_SpringBoot | development_Tomcat | test_alpha | test_beta | production
  // mode: 'development_SpringBoot',
  // mode: 'development_Tomcat',
  // mode: 'test_alpha',
  mode: 'test_beta',
  // mode: 'production',
  // 
  // ===================================================
  //                1-  Development
  // ===================================================
  //  1.1)  backend ip address where Spring Boot listens
  //                |  Spring   |
  //                +===========+
  backendIpAddress_Development_SpringBoot: '172.20.148.12:8080',
  //                |  Tomcat   |
  //                +===========+
  //  1-1)  backend ip address where local Apache Tomcat listens on port 80
  backendIpAddress_Development_Tomcat: '172.20.148.12',

  // ===================================================
  //                2-  Test
  // ===================================================
  //                |   Alpha   |
  //                +===========+
  backendIpAddress_Alpha: '172.20.141.52',
  //                |    Beta   |
  //                +===========+
  backendIpAddress_Beta: '172.26.34.39',

  // ===================================================
  //                3-  Production
  // ===================================================
  backendIpAddress_Production: '172.26.34.122',



  //              ========================
  //             |          BMT1 - Alpha        | 
  //              ========================
  //  3-2)  backend ip address where Apache Tomcat listens on port 80
  // backendIpAddress_Alpha: '172.26.34.39',

  //              ========================
  //             |       BMT1-Mojgan      | 
  //              ========================
  //  3-3)  backend ip address where Apache Tomcat listens on port 80
  // backendIpAddress_Beta: '172.20.141.52',
  //              ========================
  //             |       BMT-Production      | 
  //              ========================
  //  3-3)  backend ip address where Apache Tomcat listens on port 80
  // backendIpAddress_Production: '172.26.34.122',




  // allowedOriginsDev: '*',
  // allowedMethodsDev: '*',

  // allowedOrigins: 'http://172.20.148.12:8090/',
  allowedOrigins: '*',
  allowedMethods: '*',
  // availableDatasources: getDataSources(),

  //  1)  defaultDataSource should be one of 'used' DataSources that are configured in
  //  JPA->datasource or StoredProcedure->datasource (DomainConfig.js)
  //  2)  defaultDataSource is not choose form 'available' DataSources (DataSourceConfig.js)
  //  3)  should be in canonical form i.e. all in lowercase letters
  defaultDataSource: 'localds',
  // datasources: ds.datasources,
  // defaultDataSource: getDefaultDataSource(),
  // defaultDataSourceName: getDefaultDataSourceName(),
  // defaultDataSourceSchema: getDefaultDataSourceSchema(),
  // {
  //   //  TODO
  //   //  Should be read from datasourceConfig.js or DomainConfig
  //   //  Always first datasource is default datasource.
  //   localDB: {
  //     url: 'jdbc:db2://172.26.34.39:50001/bmt1',
  //     username: 'tafdev',
  //     password: 'GCVbw41@',
  //     schema: 'TAFSHMA',
  //     driverClassName: 'com.ibm.db2.jcc.DB2Driver',
  //   },
  //   coreDB: {
  //     url: 'jdbc:db2://172.16.16.92:478/DEV',
  //     username: 'ayat',
  //     password: 'ltub707',
  //     schema: 'CORSHMA',
  //     driverClassName: 'com.ibm.db2.jcc.DB2Driver',
  //   },
  // }
  globalSetting: {
    //  15 minutes
    allowedIdleTime: 1000 * 60 * 15
  },
  template: {
    landingPage: {
      title: 'پورتال تفاهم نامه ها',
      tmeplate: '',
      favicon: 'favicon-16x16.png'
    },
    header: {
      backgroundImage: 'logo.690fe601.png',
      backgroundURL: ''
    }
  },
  jpa: {
    showSQL: 'true',
    formatSQL: 'true',
    stat: 'debug',
    ddlAuto: 'create', //  none, create, update
    dialect: 'org.hibernate.dialect.DB2Dialect',
  },
  token: {
    tokenRetrival: 'static',
    tokenSigningKey:
      '413F4428472B4B6250655368566D5970337336763979244226452948404D6351',
    // tokenLifeLong: 1000 * 60 * 60 * 8,
    // tokenLifeLong: 1000 * 60 * 15,
    //  8 hours
    tokenLifeLong: 1000 * 60 * 60 * 8,
    // tokenLifeLong: 5000,
  },
  globalPaging: {
    sizeParameter: 'size',
    pageParameter: 'page',
    pageSize: '20',
    maxPageSize: '2000',
  },
  compiler: {
    javaCompiler: 'JDK_17',
    targetByteCodeVersion: '17',
  },
  buildTool: {
    //  ProjectBaseFilesGenerator.js - jarRepository.xml file
    maven: {
      central: {
        id: `central`,
        name: `behsazan-repo`,
        url: `http://maven-dev.behsazan.net/artifactory/behsazan-repo`,
      },
      snapshots: {
        id: `snapshots`,
        name: `behsazan-repo`,
        url: `http://maven-dev.behsazan.net/artifactory/behsazan-repo`,
      },
    },
  },
  user: {
    superUser: {
      firstName: 'کاربر',
      lastName: 'ارشد',
      email: 'superuser@behsazan.ir',
      username: '15909',
      password: '$2a$10$d.LgBzbj5sbLiTVcqkoFm.uUDcvj6BAjJz4/Lite6/PT0IiBCQHzy',
      owner: '',
      date: '',
      telNumber: '09391717968',
      roles: 'sueprUser',
    },
    priviledgedUser: {
      firstName: 'priviledgedUser0',
      lastName: 'priviledgedUser0',
      email: 'priviledgedUser@bankmellat.ir0',
      password: 'priviledgedUser0',
      owner: 'owner0',
      roles: 'user0',
    },
    role: {
      suerUser: '',
      user: '',
      reportUser: '',
    },
  },
  // make domain JPA/StoredProcedure/RestService call information globally available to the application. in login.action
  globalBaseInformation: ''
};
