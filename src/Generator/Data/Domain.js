exports.domainData = {
  // template valid formatrts
  //    DomainName: {
  //      jpas: {
  //                                                      ->  By calling getJpaByJpaName(jpaName) in all facotry methods used to retrieve jpa full bodies
  //        jpaName: {
  //          lable: '...',                               -> farsi name
  //          datasourceName: '...',                      ->  By calling getXXXPath() & getXXXPackageName(datasourceName) where XXX is factory name in all factory methods
  //                                                      ->  retrieve actual datasource from datasource.js file
  //
  //          schema: '...',                              ->  Entity factory -> @Table(Shema=... )
  // 
  //          multiStepForm: ['','']                      ->  list of steps in multi-step forms
  //                                                      ->  referenced by 'step' attribute to  indexs of one of these steps in this array.
  //
  //          content: [                                  ->  Entity factory -> entity fields
  //            {
  //              name: '...',                            ->  1) person name of Entity field
  //                                                          2) check whether Entity field is EmptyCell or not
  //              title: '...',                           ->  Entity field name
  //              value: {
  //                type: 'primitive',
  //                schema: {
  //                                                      ->  Entity Schema
  //                                                      ->  EntityGenerator.js
  //
  //                  type: 'file',                       ->  File DataType
  //                  docTypeNo: '23004',                 ->  docType in Document Management System
  //
  //                  type: 'BigDecimal',                 ->  BigDecimal DataType
  //                  precision: 18, 
  //                  scale: 0, 
  // 
  //                  type: 'String',                     ->  Entity field datatype
  //                  size: { minValue: 5, maxValue: 50 },  //  Default Value
  //                  minValue: Number.MIN_SAFE_INTEGER, ,            //  Default Value
  //                  maxValue: Number.MAX_SAFE_INTEGER, ,            //  Default Value
  //                  columnLength: 50,                     //  Default Value
  //
  //                  enum: ['بلی', 'خیر'],
  //                  option: 'check',
  //                  Actually 'option' indicates WHAT comes back from dataSoruce
  //                           textWithResultSetDataSource                  branch, administration
  //                           textWithResultSetDataSourceAndOnBlurEvent    branchManagement
  //                           textWithObjectDataSource                     branchManagementTitle, branchTitle
  //                           textWithObjectDataSourceAndOnBlurEvent       tafahomInformaiton/extCustId, Account/extAccNo
  //                           textWithStateDataSource

  //                  type: 'Date',                     ->  Calendar datatype 
  //                  position: top/buttom/right/left
  
  //                  dataSourceProvider: {               ->  eigher storedProcedure/ restServie/ formula
  //                  Actually 'dataSourceProvider' indicates from WHERE dataSource comes
  //                    storedProcedure: {
  //                      name: '',                       ->  StoredProcedure name
  //                      key: '',                        ->  expected return from storedProcedure output, used as key
  //                      value: '',                      ->  expected return from storedProcedure output, used as value  i.e. in onBlur column::   setState({  'title': response['this output value']})
  //                      callPlace: '',                  ->  loader/form/onBlur
  //                      parameters: {
  //                        xxx: {                        ->  input parameter name to call this storedProcedure
  //                          direction: 'IN',            ->  parameter direction IN/OUT
  //                          type: '',                   ->  parameter type
  //                          value: ''                   ->  column name which input parameters should be read from
  //                          targetEncoding: '1252'      ->  target Encoding
  //                        },
  //                      },
  //                    }
  //                    restService: {},
  //                    systemObject: {
  //                      fakeAuthProvider: {
  //                      }
  //                    }
  //                  },
  //                  isPrimaryKey: false, //  Default Value  ->  Only Root Route in Content Map should have privary key.
  //                                                              Entity field attribute
  //                                                              non-Root Routes inherit parent's primary key
  //                                                              should have just 1 in column list
  //                  isPreAllocatingPrimaryKey: false, //  Default Value  ->  Only non-Root Route in Content Map may have privary key.
  //                  usage is in gridLayoutFields
  // 
  //                  isForeignKey: false,  //   Default value
  //                                                      ->  indicates that it is a Child Entity
  //                                                      ->  used in getJpaByJpaName() to generate virtual column of parent primary key
  //                                                      ->

  //                  isVirtualPK : false                 -> Default value, instead of primary key, used to create a link between parent and child columns in DomainConfig
  //                                                      ->  should exist only one instance
  //                  isGridLayout: true,                 -> show in UI grid page
  //                  largeBreakpointWidth: 1,            -> length of column in UI grid page
  //                  isVisible: true                     ->  for UI elements to show on screen
  //
  //                  isNotNull: true, //  Default Value - Bean Validation constrain
  //                  isNotEmpty: true, //  Default Value - Bean Validation constrain
  //                  isNotBlank: true, //  Default Value - Bean Validation constrain - Not implemented yet

  //                  isEmail: true, //  Default Value
  //                  isTelphoneNumber: true, //  Default Value
  //                  isUnique: false, // Default Value       ->  should not include in PrimaryKey column
  //                  isIndex: false, // Defauilt value

  //                  //  util.js
  //                  isValidInModelBuilder: true, //  Default Value
  //                  isValidInEntityBuilder: true, //  Default Value

  //                  inline: false                       ->  for radio, check boxes & switch?
  //                  checked: false                      ->  for radio, check boxes & switch?
  //                  disabled: false                     ->  for radio, check boxes & switch, Text, ?

  //                  lines: xxx                          ->  TextArea Componnet/ Select component
  //                                                      ->  lines * 40 + 'px'
  //                  step: 0                             ->  indeicated step location in mulitStep from
  //                                                          refered to index of elements in multiStepForm array
  //                  
  //                  fontSize: 6,                        ->  font size of element. apears in 'clazz' object to be used in class={clazz} of element
  //                  colSize: 8,                         ->  colSize of element. apears in 'clazz' object to be used in class={clazz} of element
  //                  rowMargin: 5,                         ->  colSize of element. apears in 'clazz' object to be used in class={clazz} of element
  //                },
  //              },
  //            },
  //          ],
  //        },
  //      },
  //      storedProcedures: {},
  //      restServices: {},
  //    },
  //                                    Example Empty Cell
  //    {
  //      lable: '',
  //      title: '',
  //      step: 2,
  //      value: {
  //        type: 'emptyCell',
  //        schema: {
  //          type: 'emptyRow',
  //          rowMargin:5,
  //          isVisible: {
  //            rule:{
  //              'and':[
  //                {'!=':[{'var':'parseInt(state.resourceAllocationMethod)'},0]},
  //                {'==':[{'var':'parseInt(state.calculateAVGMethod)'},1]}
  //              ],
  //            }
  //          },
  //        },
  //      },
  //    },

  mutualUnderstanding: {
    restServices: {
      // messageService: {
      //   //  url (scheme + authority + path) + query + fragment
      //   uri: 'http://172.26.38.156/SMSService/SendMessage',
      //   method: 'POST',
      //   authorization: {
      //     basicAuth: {
      //       username: 'tafahomname',
      //       password: 'test',
      //     },
      //   },
      //   queryParameters: {},
      //   request: {
      //     requestBody: {
      //       mobileNo: {
      //         direction: 'IN',
      //         type: 'Integer',
      //       },
      //       messageText: {
      //         direction: 'IN',
      //         type: 'String',
      //       },
      //     },
      //   },
      //   response: {
      //     responseBody: {
      //       error: {
      //         direction: 'OUT',
      //         type: 'Integer',
      //       },
      //     },
      //   },
      // },
    },
    storedProcedures: {
      //  first-level (abstract) list
      listAbstractDashboard: {
        name: 'TGFDASH3',
        description: 'خلاصه داشبورد',
        // datasourceName: 'localds',
        datasourceName_Development: 'localds',
        datasourceName_Alpha: 'localds',
        datasourceName_Beta: 'localds',
        datasourceName_Production: 'localds',
        schema: 'TAFSCHM',
        // schema: 'TAFSHMA',
        parameters: {
          error: {
            direction: 'OUT',
            type: 'Integer',
          },
        },
        resultSet: {
          lstTypeCode: {
            direction: 'OUT',
            type: 'Integer',
          },
          lstType: {
            direction: 'OUT',
            type: 'String',
          },
          cnt: {
            direction: 'OUT',
            type: 'Integer',
          },
          spclApprvlAvgAmnt: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          spclApprvlFxdAmnt: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          cptlDbtAmnt: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          sumPropslTypCount: {
            direction: 'OUT',
            type: 'Integer',
          },
          sumCntrctAmntSum: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          sumJari: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          sumGharz: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          sumShort: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          sumLong: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          sumJariCnt: {
            direction: 'OUT',
            type: 'Integer',
          },
          sumGharzCnt: {
            direction: 'OUT',
            type: 'Integer',
          },
          sumShortCnt: {
            direction: 'OUT',
            type: 'Integer',
          },
          sumLongCnt: {
            direction: 'OUT',
            type: 'Integer',
          },
          sumAvgJari: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          sumAvgGharz: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          sumAvgShort: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          sumAvgLong: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
        },
      },
      //  expert list &  time intervals to calculate Agerage amount
      /* listExpertAvgAmnt: {
        name: 'TGCODLI1',
        description: ' لیست کارشناسان وزمان متوسط محاسبه معدل حساب',
        datasourceName: 'localds',
        schema: 'TAFSCHM',
        parameters: {
          error: {
            direction: 'OUT',
            type: 'Integer',
          },
          tblName: {
            direction: 'IN',
            type: 'String',
          },
          fldName: {
            direction: 'IN',
            type: 'String',
          },
        },
        resultSet: {
          code: {
            direction: 'OUT',
            type: 'Integer',
          },
          title: {
            direction: 'OUT',
            type: 'String',
          },
        },
      }, */
      //  check wether Customer new account number is recieved -> select count(*) from TAF_INFO_FND_ACC
      /* findNewAccount: {
        name: 'TGFNDCNTAC1',
        description: 'بازیابی شماره حساب جدید',
        datasourceName: 'localds',
        schema: 'TAFSCHM',
        parameters: {
          error: {
            direction: 'OUT',
            type: 'Integer',
          },
          userId: {
            direction: 'IN',
            type: 'long',
          },
        },
        resultSet: {
          cnd: {
            direction: 'OUT',
            type: 'Integer',
          },
        },
      }, */
      //  =================
      //  second-level (detailed) list
      listDetail: {
        name: 'TGFINFO3',
        description: 'لیست تفاهم نامه ها',
        // datasourceName: 'localds',
        datasourceName_Development: 'localds',
        datasourceName_Alpha: 'localds',
        datasourceName_Beta: 'localds',
        datasourceName_Production: 'localds',
        schema: 'TAFSCHM',
        parameters: {
          error: {
            direction: 'OUT',
            type: 'Integer',
          },
          tafCode: {
            direction: 'IN',
            type: 'BigDecimal',
          },
          tafTitle: {
            direction: 'IN',
            type: 'String',
          },
          customerName: {
            direction: 'IN',
            type: 'String',
          },
          extCustId: {
            direction: 'IN',
            type: 'BigDecimal',
          },
          startDateAz: {
            direction: 'IN',
            type: 'Integer',
          },
          expireDateTa: {
            direction: 'IN',
            type: 'Integer',
          },
          seri: {
            direction: 'IN',
            type: 'String',
          },
          branchManagement: {
            direction: 'IN',
            type: 'String',
          },
          branch: {
            direction: 'IN',
            type: 'String',
          },
          expertId: {
            direction: 'IN',
            type: 'Integer',
          },
          lstTypeCode: {
            direction: 'IN',
            type: 'Integer',
          },
          filterCode: {
            direction: 'IN',
            type: 'Integer',
          },
        },
        resultSet: {
          archiveNumber: {
            direction: 'OUT',
            type: 'long',
          },
          // radif: {
          //   direction: 'OUT',
          //   type: 'Integer',
          // },
          tafCode: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          title: {
            direction: 'OUT',
            type: 'String',
          },
          intCustId: {
            direction: 'OUT',
            type: 'Integer',
          },
          // extCustId: {
          //   direction: 'OUT',
          //   type: 'long',
          // },
          // ownerName: {
          customerName: {
            direction: 'OUT',
            type: 'String',
          },
          // createDate: {
          startDate: {
            direction: 'OUT',
            type: 'String',
          },
          expireDate: {
            direction: 'OUT',
            type: 'String',
          },
          // regionType: {
          region: {
            direction: 'OUT',
            type: 'Short',
          },
          // agentBranch: {
          branch: {
            direction: 'OUT',
            type: 'Integer',
          },
          // magentBranch: {
          branchManagement: {
            direction: 'OUT',
            type: 'Integer',
          },
          service: {
            direction: 'OUT',
            type: 'String',
          },
          seri: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          // getFacType: {
          resourceAllocationMethod: {
            direction: 'OUT',
            type: 'Short',
          },
          includBalance: {
            direction: 'OUT',
            type: 'Short',
          },
          // amountPay: {
          fixAmount: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          percentJari: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          percentGharz: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          percentShort: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          percentLong: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          // amntPerJari: {
          amountJari: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          // amntPerGharz: {
            amountGharz: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          // amntPerShort: {
            amountShort: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          // amntPerLong: {
            amountLong: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          // numPerson: {
          numOfPerson: {
            direction: 'OUT',
            type: 'Integer',
          },
          amntGharz: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          amntJari: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          amntShort: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          amntLong: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          sumAmount: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          extCustId: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          userId: {
            direction: 'OUT',
            type: 'String',
          },
          status: {
            direction: 'OUT',
            type: 'Short',
          },
          statusDate: {
            direction: 'OUT',
            type: 'Integer',
          },
          actSts: {
            direction: 'OUT',
            type: 'Short',
          },
          avgDay: {
            direction: 'OUT',
            type: 'Integer',
          },
          perDate: {
            direction: 'OUT',
            type: 'Integer',
          },
          spclApprvlAvgAmnt: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          spclApprvlFxdAmnt: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          cntrctCnt: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          cptlDbtAmnt: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          sumPrpslTypeCount: {
            direction: 'OUT',
            type: 'Integer',
          },
          sumCntrctAmntSum: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          sumJari: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          sumGharz: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          sumShort: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          sumLong: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          sumJariCnt: {
            direction: 'OUT',
            type: 'Integer',
          },
          sumGharzCnt: {
            direction: 'OUT',
            type: 'Integer',
          },
          sumShortCnt: {
            direction: 'OUT',
            type: 'Integer',
          },
          sumLongCnt: {
            direction: 'OUT',
            type: 'Integer',
          },
          sumAvgJari: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          sumAvgGharz: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          sumAvgShort: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          sumAvgLong: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          accCnt: {
            direction: 'OUT',
            type: 'Integer',
          },
          custCnt: {
            direction: 'OUT',
            type: 'Integer',
          },
          expertId: {
            direction: 'OUT',
            type: 'Integer',
          },
          expertIdTitle: {
            direction: 'OUT',
            type: 'String',
          },
        },
      },
      //  =================
      //  retrieve Customer new account              -> TAF_INFO_FND_ACC & TAF_INFO_ACC
      /* listCustomerNewAccount: {
        name: 'TGFNDAC1',
        description: 'بازیابی لیست شماره حساب های جدید مشتری',
        datasourceName: 'localds',
        schema: 'TAFSCHM',
        parameters: {
          error: {
            direction: 'OUT',
            type: 'Integer',
          },
          statusX: {
            direction: 'IN',
            type: 'long',
          },
          userId: {
            direction: 'IN',
            type: 'long',
          },
        },
        resultSet: {
          ownerName: {
            direction: 'OUT',
            type: 'String',
          },
          accType: {
            direction: 'OUT',
            type: 'Integer',
          },
          statusX: {
            direction: 'OUT',
            type: 'Integer',
          },
          intCustId: {
            direction: 'OUT',
            type: 'Integer',
          },
          extCustId: {
            direction: 'OUT',
            type: 'long',
          },
          branch: {
            direction: 'OUT',
            type: 'Integer',
          },
          createDate: {
            direction: 'OUT',
            type: 'Integer',
          },
          statusDate: {
            direction: 'OUT',
            type: 'Integer',
          },
          tafCode: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          accNo: {
            direction: 'OUT',
            type: 'long',
          },
          extAccNo: {
            direction: 'OUT',
            type: 'long',
          },
          nationalCode: {
            direction: 'OUT',
            type: 'long',
          },
          balance: {
            direction: 'OUT',
            type: 'long',
          },
          ownerName: {
            direction: 'OUT',
            type: 'String',
          },
          accDesc: {
            direction: 'OUT',
            type: 'String',
          },
          titleX: {
            direction: 'OUT',
            type: 'String',
          },
          statusDesc: {
            direction: 'OUT',
            type: 'String',
          },
          timeX: {
            direction: 'OUT',
            type: 'Date',
          },
          vaziat: {
            direction: 'OUT',
            type: 'String',
          },
          avg1: {
            direction: 'OUT',
            type: 'long',
          },
          furm: {
            direction: 'OUT',
            type: 'long',
          },
          typ: {
            direction: 'OUT',
            type: 'String',
          },
          balanceSum: {
            direction: 'OUT',
            type: 'long',
          },
          avg1Sum: {
            direction: 'OUT',
            type: 'long',
          },
          furmSum: {
            direction: 'OUT',
            type: 'long',
          },
          rowNum: {
            direction: 'OUT',
            type: 'Integer',
          },
        },
      }, */
      //  retrieve Customer new account info from CORE
      //  update Customer new account                -> TAF_INFO_FND_ACC
      /* updateCustomerNewAccount: {
        name: 'TUFNDPERAC1',
        description: 'بروزرسانی حساب های جدید مشتری',
        datasourceName: 'localds',
        schema: 'TAFSCHM',
        parameters: {
          error: {
            direction: 'OUT',
            type: 'Integer',
          },
          accNo: {
            direction: 'IN',
            type: 'long',
          },
          ownerName: {
            direction: 'IN',
            type: 'String',
          },
          accDesc: {
            direction: 'IN',
            type: 'String',
          },
          titleX: {
            direction: 'IN',
            type: 'String',
          },
        },
        resultSet: {
          zoneCode: {
            direction: 'OUT',
            type: 'Integer',
          },
          zoneDesc: {
            direction: 'OUT',
            type: 'String',
          },
        },
      }, */
      //  send Customer new account                   -> TAF_INFO_FND_ACC -> TAF_INFO_ACC
      /* sendCustomerNewAccount: {
        name: 'TUFNDSNDAC1',
        description: 'بروزرسانی لیست شماره حساب های مشتری',
        datasourceName: 'localds',
        schema: 'TAFSCHM',
        parameters: {
          error: {
            direction: 'OUT',
            type: 'Integer',
          },
          accNo: {
            direction: 'IN',
            type: 'long',
          },
          tafCode: {
            direction: 'IN',
            type: 'BigDecimal',
          },
          userId: {
            direction: 'IN',
            type: 'Integer',
          },
        },
        resultSet: {},
      }, */
      //  delete Customer new account
      /* deleteCustomerNewAccount: {
        name: 'TDACCFI1',
        description: 'حذف شماره حساب جدید',
        datasourceName: 'localds',
        schema: 'TAFSCHM',
        parameters: {
          error: {
            direction: 'OUT',
            type: 'Integer',
          },
          extAccNo: {
            direction: 'OUT',
            //  TODO
            //  must be long
            type: 'Double',
          },
        },
        resultSet: {},
      }, */
      //  =================
      //  list of Borrower
      /* listBorrower: {
        name: 'TGFINCU1',
        description: ' لیست گیرندگان تسهیلات',
        datasourceName: 'localds',
        schema: 'TAFSCHM',
        parameters: {
          error: {
            direction: 'OUT',
            type: 'Integer',
          },
          tafCode: {
            direction: 'IN',
            type: 'BigDecimal',
          },
        },
        resultSet: {
          // rowNumber: {
          //   direction: 'OUT',
          //   type: 'Integer',
          // },
          tafCode: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          nationalCode: {
            direction: 'OUT',
            type: 'long',
          },
          custType: {
            direction: 'OUT',
            type: 'Integer',
          },
          payPlace: {
            direction: 'OUT',
            type: 'Integer',
          },
          intCustId: {
            direction: 'OUT',
            type: 'Integer',
          },
          extCustId: {
            direction: 'OUT',
            type: 'long',
          },
          ownerName: {
            direction: 'OUT',
            type: 'String',
          },
          statusX: {
            direction: 'OUT',
            type: 'Integer',
          },
          statusDesc: {
            direction: 'OUT',
            type: 'String',
          },
          createDate: {
            direction: 'OUT',
            type: 'Integer',
          },
          timeX: {
            direction: 'OUT',
            type: 'Integer',
          },
        },
      }, */
      //  add borrower
      /* addBorrower: {
        name: 'TIFINCU1',
        description: 'افزودن گیرنده تسهیلات',
        datasourceName: 'localds',
        schema: 'TAFSCHM',
        parameters: {
          error: {
            direction: 'OUT',
            type: 'Integer',
          },
          custType: {
            direction: 'IN',
            type: 'Integer',
          },
          payPlace: {
            direction: 'IN',
            type: 'Integer',
          },
          //  1
          fixNumber1: {
            direction: 'IN',
            type: 'Integer',
          },
          intCustId: {
            direction: 'IN',
            type: 'long',
          },
          extCustId: {
            direction: 'IN',
            type: 'long',
          },
          //  0
          fixNumber2: {
            direction: 'IN',
            type: 'Integer',
          },
          //  0
          fixNumber3: {
            direction: 'OUT',
            type: 'Integer',
          },
          tafCode: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          nationalCode: {
            direction: 'OUT',
            type: 'Double',
          },
          ownerName: {
            direction: 'OUT',
            type: 'String',
          },
          fixString: {
            direction: 'OUT',
            type: 'String',
          },
        },
        resultSet: {},
      }, */
      //  update borrower
      /* updateBorrower: {
        name: 'TUFINCU1',
        description: 'بروزرسانی گیرنده تسهیلات',
        datasourceName: 'localds',
        schema: 'TAFSCHM',
        parameters: {
          error: {
            direction: 'OUT',
            type: 'Integer',
          },
          custType: {
            direction: 'IN',
            type: 'Integer',
          },
          payPlace: {
            direction: 'IN',
            type: 'Integer',
          },
          //  1
          fixNumber1: {
            direction: 'IN',
            type: 'Integer',
          },
          intCustId: {
            direction: 'IN',
            type: 'long',
          },
          extCustId: {
            direction: 'IN',
            type: 'long',
          },
          //  0
          fixNumber2: {
            direction: 'IN',
            type: 'Integer',
          },
          //  0
          fixNumber3: {
            direction: 'IN',
            type: 'Integer',
          },
          tafCode: {
            direction: 'IN',
            type: 'BigDecimal',
          },
          nationalCode: {
            direction: 'IN',
            type: 'Double',
          },
          ownerName: {
            direction: 'IN',
            type: 'String',
          },
          fixString: {
            direction: 'IN',
            type: 'String',
          },
        },
        resultSet: {},
      }, */
      //  delete borrower
      /* deleteBorrower: {
        name: 'TDFINCU1',
        description: 'حذف گیرنده تسهیلات',
        datasourceName: 'localds',
        schema: 'TAFSCHM',
        parameters: {
          error: {
            direction: 'OUT',
            type: 'Integer',
          },
          nationalCode: {
            direction: 'IN',
            type: 'long',
          },
          tafCode: {
            direction: 'IN',
            type: 'BigDecimal',
          },
        },
        resultSet: {},
      }, */
      //  =================
      //  list of Customer Account                             -> TAF_INFO_ACC
      /* listTafahomAccount: {
        name: 'TGFINAC1',
        description: 'بازیابی لیست حساب',
        datasourceName: 'localds',
        schema: 'TAFSCHM',
        parameters: {
          error: {
            direction: 'OUT',
            type: 'Integer',
          },
          tafCode: {
            direction: 'IN',
            type: 'BigDecimal',
          },
        },
        resultSet: {
          ownerName: {
            direction: 'OUT',
            type: 'Integer',
          },
          accType: {
            direction: 'OUT',
            type: 'Integer',
          },
          statusX: {
            direction: 'OUT',
            type: 'Integer',
          },
          intCustId: {
            direction: 'OUT',
            type: 'Integer',
          },
          extCustId: {
            direction: 'OUT',
            type: 'long',
          },
          branch: {
            direction: 'OUT',
            type: 'Integer',
          },
          createDate: {
            direction: 'OUT',
            type: 'Integer',
          },
          statusDate: {
            direction: 'OUT',
            type: 'Integer',
          },
          tafCode: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          accNo: {
            direction: 'OUT',
            type: 'long',
          },
          extAccNo: {
            direction: 'OUT',
            type: 'long',
          },
          nationalCode: {
            direction: 'OUT',
            type: 'long',
          },
          balance: {
            direction: 'OUT',
            type: 'long',
          },
          ownerName: {
            direction: 'OUT',
            type: 'String',
          },
          accDesc: {
            direction: 'OUT',
            type: 'String',
          },
          titleX: {
            direction: 'OUT',
            type: 'String',
          },
          statusDesc: {
            direction: 'OUT',
            type: 'String',
          },
          timeX: {
            direction: 'OUT',
            //  TODO
            type: 'Date', //  Timestamp
          },
          vaziat: {
            direction: 'OUT',
            type: 'String',
          },
          avg1: {
            direction: 'OUT',
            type: 'long',
          },
          furm: {
            direction: 'OUT',
            type: 'long',
          },
          typ: {
            direction: 'OUT',
            type: 'String',
          },
          balanceSum: {
            direction: 'OUT',
            type: 'long',
          },
          avg1Sum: {
            direction: 'OUT',
            type: 'long',
          },
          furmSum: {
            direction: 'OUT',
            type: 'long',
          },
          rowNumber: {
            direction: 'OUT',
            type: 'Integer',
          },
        },
      }, */
      //  Add Customer Account from fileUpload & menu       -> TAF_INFO_ACC
      /* addAccount: {
        name: 'TIFINAC1',
        description: 'افزودن شماره حساب',
        datasourceName: 'localds',
        schema: 'TAFSCHM',
        parameters: {
          error: {
            direction: 'OUT',
            type: 'Integer',
          },
          accType: {
            direction: 'IN',
            type: 'Integer',
          },
          statusX: {
            direction: 'IN',
            type: 'Integer',
          },
          intCustId: {
            direction: 'IN',
            type: 'Integer',
          },
          extCustId: {
            direction: 'IN',
            type: 'long',
          },
          branch: {
            direction: 'IN',
            type: 'Integer',
          },
          createDAte: {
            direction: 'IN',
            type: 'Integer',
          },
          statusDate: {
            direction: 'IN',
            type: 'Integer',
          },
          tafCode: {
            direction: 'IN',
            type: 'BigDecimal',
          },
          accNo: {
            direction: 'IN',
            type: 'long',
          },
          extAccNo: {
            direction: 'IN',
            type: 'long',
          },
          nationalCode: {
            direction: 'IN',
            type: 'long',
          },
          balance: {
            direction: 'IN',
            type: 'long',
          },
          ownerName: {
            direction: 'IN',
            type: 'String',
          },
          accDesc: {
            direction: 'IN',
            type: 'String',
          },
          titleX: {
            direction: 'IN',
            type: 'String',
          },
          statusDesc: {
            direction: 'IN',
            type: 'String',
          },
          vaziat: {
            direction: 'IN',
            type: 'String',
          },
        },
        resultSet: {},
      }, */
      //  delete Customer Account                           -> TAF_INFO_ACC
      /* deleteAccount: {
        name: 'TDFINAC1',
        description: 'حذف شماره حساب ',
        datasourceName: 'localds',
        schema: 'TAFSCHM',
        parameters: {
          error: {
            direction: 'OUT',
            type: 'Integer',
          },
          extAccNo: {
            direction: 'IN',
            type: 'Double',
          },
          tafCode: {
            direction: 'IN',
            type: 'BigDecimal',
          },
        },
        resultSet: {},
      }, */
      //  =================
      //  list of Customer Agents - SignatureOwner
      /* listAgents: {
        name: 'TGFINSG1',
        description: 'لیست صاحبان امضاء',
        datasourceName: 'localds',
        schema: 'TAFSCHM',
        parameters: {
          error: {
            direction: 'OUT',
            type: 'Integer',
          },
          tafCode: {
            direction: 'IN',
            type: 'BigDecimal',
          },
        },
        resultSet: {
          rowNo: {
            direction: 'OUT',
            type: 'long',
          },
          tafCode: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          name: {
            direction: 'OUT',
            type: 'String',
          },
          family: {
            direction: 'OUT',
            type: 'String',
          },
          personType: {
            direction: 'OUT',
            type: 'String',
          },
          phone: {
            direction: 'OUT',
            type: 'long',
          },
          mobileNo: {
            direction: 'OUT',
            type: 'long',
          },
          sendSms: {
            direction: 'OUT',
            type: 'Integer',
          },
          email: {
            direction: 'OUT',
            type: 'String',
          },
          description: {
            direction: 'OUT',
            type: 'String',
          },
        },
      }, */
      //  Add Customer Agent
      /* addAgent: {
        name: 'TIFINSG2',
        description: 'افزودن نماینده سازمان جدید',
        datasourceName: 'localds',
        schema: 'TAFSCHM',
        parameters: {
          error: {
            direction: 'OUT',
            type: 'Integer',
          },
          tafCode: {
            direction: 'IN',
            type: 'BigDecimal',
          },
          name: {
            direction: 'IN',
            type: 'String',
          },
          family: {
            direction: 'IN',
            type: 'String',
          },
          personType: {
            direction: 'IN',
            type: 'String',
          },
          phone: {
            direction: 'IN',
            type: 'long',
          },
          mobileNo: {
            direction: 'IN',
            type: 'long',
          },
          sendSms: {
            direction: 'IN',
            type: 'Integer',
          },
          email: {
            direction: 'IN',
            type: 'String',
          },
          description: {
            direction: 'IN',
            type: 'String',
          },
        },
        resultSet: {},
      }, */
      //  Update Customer Agent
      /* updateAgent: {
        name: 'TUFINSG2',
        description: 'بروزرسانی نماینده سازمان جدید',
        datasourceName: 'localds',
        schema: 'TAFSCHM',
        parameters: {
          error: {
            direction: 'OUT',
            type: 'Integer',
          },
          rowNo: {
            direction: 'IN',
            type: 'long',
          },
          tafCode: {
            direction: 'IN',
            type: 'BigDecimal',
          },
          name: {
            direction: 'IN',
            type: 'String',
          },
          family: {
            direction: 'IN',
            type: 'String',
          },
          personType: {
            direction: 'IN',
            type: 'String',
          },
          phone: {
            direction: 'IN',
            type: 'long',
          },
          mobileNo: {
            direction: 'IN',
            type: 'long',
          },
          sendSms: {
            direction: 'IN',
            type: 'Integer',
          },
          email: {
            direction: 'IN',
            type: 'String',
          },
          description: {
            direction: 'IN',
            type: 'String',
          },
        },
        resultSet: {},
      }, */
      //  Delete Customer Agent
      //  used in 'customerRialResourceRpt'
      deleteAgent: {
        name: 'TDFINSG1',
        description: 'حذف نماینده سازمان',
        datasourceName: 'localds',
        schema: 'TAFSCHM',
        parameters: {
          error: {
            direction: 'OUT',
            type: 'Integer',
          },
          rowNo: {
            direction: 'IN',
            type: 'long',
          },
        },
        resultSet: {},
      },
      //  =================
      //  Get Seri Number from Tashilat
      getSeriFromTashilat: {
        name: 'AIRQST5',
        description: 'اخذ شماره مصوبه از تسهیلات',
        // datasourceName: 'devds',
        // datasourceName: 'coreds',
        datasourceName_Development: 'devds',
        datasourceName_Alpha: 'devds',
        datasourceName_Beta: 'devds',
        datasourceName_Production: 'coreds',
        schema: 'TASSHMA',
        parameters: {
          userId: {
            direction: 'IN',
            type: 'String',
          },
          loanState: {
            direction: 'IN',
            type: 'Short',
          },
          zoneType: {
            direction: 'IN',
            type: 'Short',
          },
          numPerson: {
            direction: 'IN',
            type: 'Short',
          },
          includBalance: {
            direction: 'IN',
            type: 'Short',
          },
          createDate: {
            direction: 'IN',
            type: 'Integer',
          },
          expireDate: {
            direction: 'IN',
            type: 'Integer',
          },
          agentBranchManagement: {
            direction: 'IN',
            type: 'Integer',
          },
          agentBranch: {
            direction: 'IN',
            type: 'Integer',
          },
          extCustId: {
            direction: 'IN',
            // type: 'Double',
            type: 'BigDecimal',
          },
          fixAmount: {
            direction: 'IN',
            // type: 'Double',
            type: 'BigDecimal',
          },
          avg: {
            direction: 'IN',
            // type: 'Double',
            type: 'BigDecimal',
          },
          tafCode: {
            direction: 'IN',
            type: 'String',
          },
          title: {
            direction: 'IN',
            type: 'String',
            targetEncoding: '1252'
          },
          desciption: {
            direction: 'IN',
            type: 'String',
            targetEncoding: '1252'
          },
          error: {
            direction: 'OUT',
            type: 'Integer',
          },
          seri: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
        },
        resultSet: {},
      },
      //  Update (Active/DeActive) Tashilat
      activeDeActiveTashilat: {
        name: 'AURQST6',
        description: 'فعال/ غیرفعال کردن اعطای تسهیلات',
        // datasourceName: 'devds',
        // datasourceName: 'coreds',
        datasourceName_Development: 'devds',
        datasourceName_Alpha: 'devds',
        datasourceName_Beta: 'devds',
        datasourceName_Production: 'coreds',
        schema: 'TASSHMA',
        parameters: {
          userId: {
            direction: 'IN',
            type: 'String',
          },
          loanState: {
            direction: 'IN',
            type: 'Short',
          },
          zoneType: {
            direction: 'IN',
            type: 'Short',
          },
          numPerson: {
            direction: 'IN',
            type: 'Short',
          },
          includBalance: {
            direction: 'IN',
            type: 'Short',
          },
          expireDate: {
            direction: 'IN',
            type: 'Integer',
          },
          branchManagement: {
            direction: 'IN',
            type: 'Integer',
          },
          agentBranch: {
            direction: 'IN',
            type: 'Integer',
          },
          extCustId: {
            direction: 'IN',
            // type: 'Double',
            type: 'BigDecimal',
          },
          fixAmount: {
            direction: 'IN',
            // type: 'Double',
            type: 'BigDecimal',
          },
          seri: {
            direction: 'IN',
            type: 'BigDecimal',
          },
          description: {
            direction: 'IN',
            type: 'String',
            targetEncoding: '1252'
          },
          comment: {
            direction: 'IN',
            type: 'String',
            targetEncoding: '1252'
          },
          error: {
            direction: 'OUT',
            type: 'Integer',
          },
          // userId: {
          //   direction: 'IN',
          //   type: 'String',
          // },
          // actSts: {
          //   direction: 'IN',
          //   type: 'Integer',
          // },
          // regionType: {
          //   direction: 'IN',
          //   type: 'Integer',
          // },
          // numPerson: {
          //   direction: 'IN',
          //   type: 'Integer',
          // },
          // includBalance: {
          //   direction: 'IN',
          //   type: 'Integer',
          // },
          // expireDate: {
          //   direction: 'IN',
          //   type: 'Integer',
          // },
          // magentBranch: {
          //   direction: 'IN',
          //   type: 'Integer',
          // },
          // agentBranch: {
          //   direction: 'IN',
          //   type: 'Integer',
          // },
          // extCustId: {
          //   direction: 'IN',
          //   //  TODO
          //   //  long
          //   type: 'Double',
          // },
          // amountPay: {
          //   direction: 'IN',
          //   //  TODO
          //   //  long
          //   type: 'Double',
          // },
          // seri: {
          //   direction: 'IN',
          //   //  TODO
          //   type: 'Double',
          // },
          // title: {
          //   direction: 'IN',
          //   type: 'String',
          // },
          // //  TODO
          // fixString: {
          //   direction: 'IN',
          //   type: 'String',
          // },
          // error: {
          //   direction: 'OUT',
          //   type: 'Integer',
          // },
        },
        resultSet: {},
      },
      //  Revoke Seri Number in Tashilat
      revokeSeriTashilat: {
        name: 'ADRQST1',
        description: 'ابطال مصوبه',
        // datasourceName: 'devds',
        // datasourceName: 'coreds',
        datasourceName_Development: 'devds',
        datasourceName_Alpha: 'devds',
        datasourceName_Beta: 'devds',
        datasourceName_Production: 'coreds',
        schema: 'TASSHMA',
        parameters: {
          seri: {
            direction: 'IN',
            type: 'Double',
          },
          error: {
            direction: 'OUT',
            type: 'Integer',
          },
        },
        resultSet: {},
      },
      //  add Tafahom Final form
      /* addTafahomFinalForm_SP: {
        name: 'TIFINFO1',
        description: 'ثبت اطلاعات نهایی',
        datasourceName: 'localds',
        schema: 'TAFSCHM',
        parameters: {
          error: {
            direction: 'OUT',
            type: 'Integer',
          },
          getFacType: {
            direction: 'IN',
            type: 'Integer',
          },
          includBalance: {
            direction: 'IN',
            type: 'Integer',
          },
          percentJari: {
            direction: 'IN',
            type: 'Double',
          },
          percentGharz: {
            direction: 'IN',
            type: 'Double',
          },
          percentShort: {
            direction: 'IN',
            type: 'Double',
          },
          percentLong: {
            direction: 'IN',
            type: 'Double',
          },
          numPerson: {
            direction: 'IN',
            type: 'Integer',
          },
          regionType: {
            direction: 'IN',
            type: 'Integer',
          },
          intCustId: {
            direction: 'IN',
            type: 'long',
          },
          createDate: {
            direction: 'IN',
            type: 'Integer',
          },
          expireDate: {
            direction: 'IN',
            type: 'Integer',
          },
          agentBranch: {
            direction: 'IN',
            type: 'Integer',
          },
          mAgentBranch: {
            direction: 'IN',
            type: 'Integer',
          },
          tafCode: {
            direction: 'IN',
            type: 'Integer',
          },
          seri: {
            direction: 'IN',
            type: 'Double',
          },
          amountPay: {
            direction: 'IN',
            type: 'Double',
          },
          amountPerJari: {
            direction: 'IN',
            type: 'Double',
          },
          amountPerGharz: {
            direction: 'IN',
            type: 'Double',
          },
          amountPerShort: {
            direction: 'IN',
            type: 'Double',
          },
          amountPerLong: {
            direction: 'IN',
            type: 'Double',
          },
          amountGharz: {
            direction: 'IN',
            type: 'Double',
          },
          amountJari: {
            direction: 'IN',
            type: 'Double',
          },
          amountShort: {
            direction: 'IN',
            type: 'Double',
          },
          amountLong: {
            direction: 'IN',
            type: 'Double',
          },
          sumAmount: {
            direction: 'IN',
            type: 'Double',
          },
          extCustId: {
            direction: 'IN',
            type: 'Double',
          },
          title: {
            direction: 'IN',
            type: 'String',
          },
          ownerName: {
            direction: 'IN',
            type: 'String',
          },
          services: {
            direction: 'IN',
            type: 'String',
          },
          avgDay: {
            direction: 'IN',
            type: 'Integer',
          },
          userId: {
            direction: 'IN',
            type: 'String',
          },
          expertId: {
            direction: 'IN',
            type: 'Integer',
          },
        },
        resultSet: {},
      }, */
      //  update Tafahom Final form
      /* updateTafahomFinalForm_SP: {
        name: 'TUFINFO1',
        description: 'ویرایش اطلاعات نهایی',
        datasourceName: 'localds',
        schema: 'TAFSCHM',
        parameters: {
          error: {
            direction: 'OUT',
            type: 'Integer',
          },
          getFacType: {
            direction: 'IN',
            type: 'Integer',
          },
          includBalance: {
            direction: 'IN',
            type: 'Integer',
          },
          percentJari: {
            direction: 'IN',
            type: 'Double',
          },
          percentGharz: {
            direction: 'IN',
            type: 'Double',
          },
          percentShort: {
            direction: 'IN',
            type: 'Double',
          },
          percentLong: {
            direction: 'IN',
            type: 'Double',
          },
          numPerson: {
            direction: 'IN',
            type: 'Integer',
          },
          regionType: {
            direction: 'IN',
            type: 'Integer',
          },
          intCustId: {
            direction: 'IN',
            type: 'long',
          },
          createDate: {
            direction: 'IN',
            type: 'Integer',
          },
          expireDate: {
            direction: 'IN',
            type: 'Integer',
          },
          agentBranch: {
            direction: 'IN',
            type: 'Integer',
          },
          mAgentBranch: {
            direction: 'IN',
            type: 'Integer',
          },
          tafCode: {
            direction: 'IN',
            type: 'Integer',
          },
          seri: {
            direction: 'IN',
            type: 'Double',
          },
          amountPay: {
            direction: 'IN',
            type: 'Double',
          },
          amountPerJari: {
            direction: 'IN',
            type: 'Double',
          },
          amountPerGharz: {
            direction: 'IN',
            type: 'Double',
          },
          amountPerShort: {
            direction: 'IN',
            type: 'Double',
          },
          amountPerLong: {
            direction: 'IN',
            type: 'Double',
          },
          amountGharz: {
            direction: 'IN',
            type: 'Double',
          },
          amountJari: {
            direction: 'IN',
            type: 'Double',
          },
          amountShort: {
            direction: 'IN',
            type: 'Double',
          },
          amountLong: {
            direction: 'IN',
            type: 'Double',
          },
          sumAmount: {
            direction: 'IN',
            type: 'Double',
          },
          extCustId: {
            direction: 'IN',
            type: 'Double',
          },
          title: {
            direction: 'IN',
            type: 'String',
          },
          ownerName: {
            direction: 'IN',
            type: 'String',
          },
          services: {
            direction: 'IN',
            type: 'String',
          },
          actSts: {
            direction: 'IN',
            type: 'Integer',
          },
          avgDay: {
            direction: 'IN',
            type: 'Integer',
          },
          userId: {
            direction: 'IN',
            type: 'String',
          },
          expertId: {
            direction: 'IN',
            type: 'Integer',
          },
        },
        resultSet: {},
      }, */
      //  delete tafahom final form
      /* deleteTafahomFinalForm_Sp: {
        name: 'TDFINFO1',
        description: 'حذف اطلاعات نهایی تفاهم نامه',
        datasourceName: 'localds',
        schema: 'TAFSCHM',
        parameters: {
          error: {
            direction: 'OUT',
            type: 'Integer',
          },
          tafCode: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
        },
        resultSet: {},
      }, */
      //  set Seri to tafahom final form
      /* setSeriTafahomFinalForm: {
        name: 'TUFSERI1',
        description: 'بروزرسانی تفاهم نامه با شماره مصوبه اخذ شده',
        datasourceName: 'localds',
        schema: 'TAFSCHM',
        parameters: {
          error: {
            direction: 'OUT',
            type: 'Integer',
          },
          seri: {
            direction: 'IN',
            type: 'Double',
          },
          tafCode: {
            direction: 'IN',
            type: 'BigDecimal',
          },
        },
        resultSet: {},
      }, */
      /* fillAccount: {
        name: 'SPG_FULLACCOUNTINFO03', //  actual name that will using EntityManager to call sp
        description: '',
        //  datasourceName should be in canonical form i.e. all in lowercase letters
        datasourceName: 'coreds',
        schema: 'TAFSCHM', //  actual schema that will using EntityManager to call sp
        parameters: {
          error: {
            direction: 'OUT',
            type: 'Integer',
          },
          extAccNo: {
            direction: 'IN',
            type: 'BigDecimal',
          },
          typeX: {
            direction: 'OUT',
            type: 'Short',
          },
          accType: {
            direction: 'OUT',
            type: 'Short',
          },
          statusX: {
            direction: 'OUT',
            type: 'Short',
          },
          accLockStatus: {
            direction: 'OUT',
            type: 'Short',
          },
          controlPayerId: {
            direction: 'OUT',
            type: 'Short',
          },
          etrnsStatus: {
            direction: 'OUT',
            type: 'Short',
          },
          permitDrawDoc: {
            direction: 'OUT',
            type: 'Short',
          },
          serviceStatus: {
            direction: 'OUT',
            type: 'Short',
          },
          arzCode: {
            direction: 'OUT',
            type: 'Short',
          },
          categoryCode: {
            direction: 'OUT',
            type: 'Short',
          },
          profitStatus: {
            direction: 'OUT',
            type: 'Short',
          },
          respiteDelay: {
            direction: 'OUT',
            type: 'Short',
          },
          accCustType: {
            direction: 'OUT',
            type: 'Short',
          },
          isInactive: {
            direction: 'OUT',
            type: 'Short',
          },
          isActive: {
            direction: 'OUT',
            type: 'Short',
          },
          isSuspend: {
            direction: 'OUT',
            type: 'Short',
          },
          isClosed: {
            direction: 'OUT',
            type: 'Short',
          },
          isAccLock: {
            direction: 'OUT',
            type: 'Short',
          },
          isIndividual: {
            direction: 'OUT',
            type: 'Short',
          },
          isCommunal: {
            direction: 'OUT',
            type: 'Short',
          },
          accDuration: {
            direction: 'OUT',
            type: 'Short',
          },
          permitAbsentDraw: {
            direction: 'OUT',
            type: 'Short',
          },
          billReporterBranch: {
            direction: 'OUT',
            type: 'Integer',
          },
          branch: {
            direction: 'OUT',
            type: 'Integer',
          },
          createDate: {
            direction: 'OUT',
            type: 'Integer',
          },
          intCustId: {
            direction: 'OUT',
            type: 'Integer',
          },
          stampDate: {
            direction: 'OUT',
            type: 'Integer',
          },
          minDuration: {
            direction: 'OUT',
            type: 'Integer',
          },
          stampAmnt: {
            direction: 'OUT',
            type: 'Integer',
          },
          accNo: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          extAccNo: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          sajeshAccNo: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          extCustId: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          minBalance: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          minProfitBalance: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          ownerName: {
            direction: 'OUT',
            type: 'String',
          },
          step: {
            direction: 'OUT',
            type: 'Integer',
          },
        },
        resultSet: {},
      }, */
      // fillDashboard: {
      //   name: 'TFGDASH3', //  actual name that will using EntityManager to call sp
      //   description: '',
      //   //  datasourceName should be in canonical form i.e. all in lowercase letters
      //   datasourceName: 'localds',
      //   // schema: 'TAFSCHM', //  actual schema that will using EntityManager to call sp
      //   schema: 'TAFSHMA', //  actual schema that will using EntityManager to call sp
      //   parameters: {},
      //   resultSet: {
      //     lsttype: {
      //       title:'وضعیت تفاهم نامه',
      //       direction: 'OUT',
      //       type: 'String',
      //       percent: 10,
      //       content: null
      //     },
      //     cnt: {
      //       title:'تعداد',
      //       direction: 'OUT',
      //       type: 'Short',
      //       percent: 5,
      //       content: null
      //     },
      //     sumcntrctamntsum: {
      //       title:'مبلغ پرداخت شده',
      //       direction: 'OUT',
      //       type: 'decimal',
      //       percent: 12,
      //       content: null
      //     },
      //     sumprpsltypcount: {
      //       title:'تعداد تخصیصی',
      //       direction: 'OUT',
      //       type: 'Short',
      //       percent: 10,
      //       content: null
      //     },
      //     sumavgjari: {
      //       title:'منابع جاری',
      //       direction: 'OUT',
      //       type: 'Short',
      //       percent: 12,
      //       content: null
      //     },
      //     sumavggharz: {
      //       title:'منابع قرض الحسنه',
      //       direction: 'OUT',
      //       type: 'Short',
      //       percent: 12,
      //       content: null
      //     },
      //     sumavgshort: {
      //       title:'منابع کوتاه مدت',
      //       direction: 'OUT',
      //       type: 'Short',
      //       percent: 12,
      //       content: null
      //     },
      //     sumavglong: {
      //       title:'منابع بلند مدت',
      //       direction: 'OUT',
      //       type: 'Short',
      //       percent: 12,
      //       content: null
      //     },
      //     sumavgtotal: {
      //       title:'جمع منابع',
      //       direction: 'OUT',
      //       type: 'Short',
      //       percent: 15,
      //       content: null
      //     },
      //   },
      // },
      // customerResourceSP:{}
    },
    jpas: {
      tafahomInformation: {
        lable: 'اطلاعات تفاهم نامه',
        datasourceName: 'localds',
        schema: 'TAFSCHM',
        menuTitle:'profile',
        multiStepForm: ['اطلاعات اولیه', 'اطلاعات نهایی','نحوه محاسبه معدل'],
        content: [
          [
            {
              lable: 'شماره آرشیو ',
              title: 'archiveNumber',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'long',
                  // type: 'BigDecimal',
                  // precision: 31,
                  // scale: 0,
                  // minValue:1,
                  // maxValue: 9999,
                  isPrimaryKey: true,
                  primaryKeyStrategy: '',
                  isGridLayout: true,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'تاریخ درخواست',
              title: 'requestDate',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'Date',
                  // size: {maxValue: 10 },
                  // isUnique: true,
                  position: 'bottom',
                  maximumDate: 'todayDate',
                  shouldHighlightToday: true,
                  isIndex: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 2,
                },
              },
            },
          ],
          [
            {
              lable: 'عنوان تفاهم نامه',
              title: 'title',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  // TASSHMA.
                  size: { minValue: 0, maxValue: 50 },
                  // isUnique: true,
                  isGridLayout: true,
                  largeBreakpointWidth: 3,
                },
              },
            },
            {
              lable: 'دامنه تفاهم نامه',
              title: 'tafScope',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'Short',
                  // size: { minValue: 0, maxValue: 1 },
                  // enum: ['کشوری', 'استانی', 'تخصصی'],
                  enum:[
                    {
                      key:0,
                      value: ['کشوری'],
                      // enabled:{
                      //   rule:{
                      //     'includes':[{'var':'state.sendMethod'},{'num':'"0"'}]
                      //   }
                      // }
                    },
                    {
                      key:1,
                      value: ['استانی'],
                      // enabled:{
                      //   rule:{
                      //     'includes':[{'var':'state.sendMethod'},{'num':'"0"'}]
                      //   }
                      // }
                    },
                    {
                      key:2,
                      value: ['تخصصی'],
                      // enabled:{
                      //   rule:{
                      //     'includes':[{'var':'state.sendMethod'},{'num':'"0"'}]
                      //   }
                      // }
                    },
                  ],
                  stateKey: ['tafScope'],
                  option: 'selectWithAO',
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              //  MagentBranch
              lable: 'مدیریت شعب',
              title: 'branchManagement',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'Integer',
                  option: 'textWithResultSetDataSourceAndOnBlurEvent',
                  // dataSourceProvider: {
                  //   storedProcedure: {
                  //     name: 'bMOU',
                  //     // select element - option key
                  //     key: 'orgunitid',
                  //     // select element - option value
                  //     value: 'orgunitdesc',
                  //     callPlace: 'onFormLoader',
                  //     parameters: {
                  //       pi_branch: {
                  //         direction: 'IN',
                  //         type: 'Integer',
                  //         valueProvider: {
                  //           rule: {'num':0}
                  //         },
                  //       },
                  //       pi_flag: {
                  //         direction: 'IN',
                  //         type: 'Integer',
                  //         valueProvider: {
                  //           rule: {'num':0}
                  //         },
                  //       },
                  //     },
                  //   },
                  //   restService: {},
                  // },
                  // onBlurDataSourceProvider: {
                  //   storedProcedure: {
                  //     name: 'bMOU',
                  //     key: 'orgunitid',
                  //     value: 'orgunitdesc',
                  //     callPlace: 'onBlur',
                  //     parameters: {
                  //       pi_branch: {
                  //         direction: 'IN',
                  //         type: 'Integer',
                  //         valueProvider: {
                  //           rule:{
                  //           'var':'branchManagement.orgunitid'
                  //           }
                  //         },
                  //       },
                  //       pi_flag: {
                  //         direction: 'IN',
                  //         type: 'Integer',
                  //         valueProvider: {
                  //           rule: {'num':1}
                  //         },
                  //       },
                  //     },
                  //   },
                  //   restService: {}
                  // },
                  dataSourceProvider: {
                    storedProcedure: {
                      name:'orgUnitChart',
                      key: 'branch',
                      value:'title',
                      callPlace: 'onFormLoader',
                      parameters: {
                        branch: {
                          direction: 'IN',
                          type: 'Integer',
                          valueProvider: {
                            rule: {'num':0}
                          }
                        },
                        flag: {
                          direction: 'IN',
                          type: 'Integer',
                          valueProvider: {
                            rule: {'num':0}
                          }
                        }
                      }
                      // name: 'regionList',
                      // key: 'rgncode',
                      // value: 'rgndesc',
                      // callPlace: 'onFormLoader',
                      // parameters: {
                      //   zonecode: {
                      //     direction: 'IN',
                      //     type: 'String',
                      //     valueProvider: {
                      //       rule: {'num':0}
                      //     }
                      //     // rule:{
                      //     //   'var':'extCustIdDSProviderOutput.ownerName'
                      //     // }
                      //   },
                      // },
                    },
                    restService: {},
                  },
                  onBlurDataSourceProvider: {
                    storedProcedure: {
                      name:'orgUnitChart',
                      key: 'branch',
                      value:'title',
                      callPlace: 'onFormLoader',
                      parameters: {
                        branch: {
                          direction: 'IN',
                          type: 'Integer',
                          valueProvider: {
                            rule: {
                              'var':'branchManagement.branch'
                            }
                          }
                        },
                        flag: {
                          direction: 'IN',
                          type: 'Integer',
                          valueProvider: {
                            rule: {'num':1}
                          }
                        }
                      }
                      // name: 'branchList',
                      // key: 'branch',
                      // value: 'titlex',
                      // callPlace: 'onBlur',
                      // parameters: {
                      //   rgncode: {
                      //     direction: 'IN',
                      //     type: 'Integer',
                      //     valueProvider: {
                      //       rule:{
                      //       'var':'branchManagement.rgncode'
                      //       }
                      //     }
                      //   },
                      // },
                    },
                    restService: {}
                    // storedProcedure: {
                    //   name: 'extCustNo2NameNew',
                    //   // key: 'intCustId',
                    //   value: 'ownerName',
                    //   callPlace: 'onBlur',
                    //   parameters: {
                    //     extCustId: {
                    //       direction: 'IN',
                    //       type: 'BigDecimal',
                    //       //  read from one of state variables
                    //       valueProvider: 'extCustId',
                    //     },
                    //   },
                    // },
                    // restService: {}
                  },
                  isVisible: {
                    rule:{
                      'or':[
                        {'==':[{'var':'state.tafScope'},0]},
                        {'==':[{'var':'state.tafScope'},1]}
                      ],
                    // '!=':[{'var':'state.tafScope'},3]
                    }
                  },
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              //  AgentBranch
              lable: 'شعبه عامل',
              title: 'branch',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'Integer',
                  // size: { minValue: 0, maxValue: 10 },
                  option: 'textWithResultSetDataSource',
                  dataSourceProvider: {
                    storedProcedure: {
                      name: 'branchList',
                      key: 'branch',
                      value: 'title',
                      callPlace: 'form',
                      parameters: {
                        rgncode: {
                          direction: 'IN',
                          type: 'Integer',
                          value: 'branchManagement'
                        },
                      },
                    },
                  //   restService: {}
                    // systemObject: {
                    //   //  jsonLogic standard format
                    //   objectName:{
                    //     rule:{
                    //       'var':'branchManagementOnBlurOutput'
                    //     }
                    //   },
                    //   // select element - option key
                    //   key: 'orgunitid',
                    //   // select element - option key
                    //   value: 'orgunitdesc',
                    // }
                  },
                  isVisible: {
                    rule:{
                      'or':[
                        {'==':[{'var':'state.tafScope'},0]},
                        {'==':[{'var':'state.tafScope'},1]}
                      ],
                    // '!=':[{'var':'state.tafScope'},3]
                    }
                  },
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              lable: 'مدیریت شعب',
              title: 'branchManagementTitle',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  option: 'textWithObjectDataSource',
                  dataSourceProvider: {
                    // storedProcedure: {},
                    // restService: {}
                    systemObject: {
                      //  jsonLogic standard format
                      objectName:{
                        rule:{
                          'var':'branchManagement.title'
                        }
                      },
                    }
                  },
                  isVisible: false,
                  disabled: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'شعبه',
              title: 'branchTitle',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  option: 'textWithObjectDataSource',
                  dataSourceProvider: {
                    // storedProcedure: {},
                    // restService: {}
                    systemObject: {
                      //  jsonLogic standard format
                      objectName:{
                        rule:{
                          'var':'branch.title'
                        }
                      },
                    }
                  },
                  isVisible: false,
                  disabled: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              lable: 'ناحیه',
              title: 'region',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'Short',
                  // enum: ['ناحیه یک', 'ناحیه دو ', 'ناحیه سه', 'ناحیه چهار', 'ناحیه پنج', 'ناحیه شش', 'مدیریت', 'واحداعتبارات بانکداری شرکتی', 'ادارات کل'],
                  // option: 'select',
                  // type: 'Integer',
                  option: 'textWithObjectDataSource',
                  dataSourceProvider: {
                    // storedProcedure: {},
                    // restService: {}
                    systemObject: {
                      //  jsonLogic standard format
                      objectName:{
                        rule:{
                          'var':'branchManagement.zoneCode'
                        }
                      },
                      // key: 'branch',
                      // value: 'titlex',
                    }
                  },
                  isVisible: {
                    rule:{
                      'or':[
                        {'==':[{'var':'state.tafScope'},0]},
                        {'==':[{'var':'state.tafScope'},1]}
                      ],
                    // '!=':[{'var':'state.tafScope'},3]
                  }
                  },
                  disabled: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: '',
              title: '',
              value: {
                type: 'emptyCell',
                schema: {
                  type: 'emptyCell',
                },
              },
            },
          ],
          [
            {
              lable: 'اداره کل',
              title: 'administration',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'Integer',
                  // size: { minValue: 0, maxValue: 10 },
                  option: 'textWithResultSetDataSource',
                  dataSourceProvider: {
                    storedProcedure: {
                      name: 'regionList',
                      key: 'rgncode',
                      value: 'rgndesc',
                      callPlace: 'onFormLoader',
                      parameters: {
                        zonecode: {
                          direction: 'IN',
                          type: 'String',
                          valueProvider: {
                            rule: {'num':20}
                          }
                        },
                      },
                    },
                    restService: {}
                  },
                  isVisible: {
                    rule:{
                    '==':[{'var':'state.tafScope'},2]
                  }
                  },
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'اداره کل',
              title: 'administrationTitle',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  option: 'textWithObjectDataSource',
                  dataSourceProvider: {
                    // storedProcedure: {},
                    // restService: {}
                    systemObject: {
                      //  jsonLogic standard format
                      objectName:{
                        rule:{
                          'var':'administration.rgndesc'
                        }
                      },
                    }
                  },
                  isVisible: false,
                  disabled: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            // {
            //   lable: '',
            //   title: '',
            //   value: {
            //     type: 'emptyCell',
            //     schema: {
            //       type: 'emptyCell',
            //     },
            //   },
            // },
          ],
          [
            {
              lable: 'کارشناس تفاهم نامه',
              title: 'expertId',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  // size: { minValue: 1, maxValue: 3 },
                  // enum: ['انتخاب کنید', '', '', ''],

                  // TODO: should be converted to 'textWithStateDataSource'
                  option: 'textWithObjectDataSource',
                  dataSourceProvider: {
                    // storedProcedure: {}
                    //   restService: {},
                    systemObject:{
                      objectName:{
                        rule:{
                          'concat':[
                            {'var':'fakeAuthProvider.firstName'},
                            {'var':'fakeAuthProvider.lastName'}
                          ]
                        }
                      },
                    },
                  },
                  disabled: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: '',
              title: '',
              value: {
                type: 'emptyCell',
                schema: {
                  type: 'emptyCell',
                },
              },
            },
          ],
          [
            {
              lable: 'کدتفاهم نامه',
              title: 'tafCode',
              step: 1,
              value: {
                type: 'primitive',
                schema: {
                  // type: 'String',
                  type: 'BigDecimal',
                  precision: 18,
                  scale: 0,
                  isIndex: true,
                  isVirtualPK: true,
                  isGridLayout: true,
                  largeBreakpointWidth: 2,
                },
              },
            },
            {
              lable: '',
              title: '',
              value: {
                type: 'emptyCell',
                schema: {
                  type: 'emptyCell',
                },
              },
            },
          ],
          [
            {
              lable: 'شماره مشتری/ سازمان',
              title: 'extCustId',
              step: 1,
              value: {
                type: 'primitive',
                schema: {
                  type: 'BigDecimal',
                  precision: 12,
                  scale: 0,
                  // option: 'textWithDataSource',
                  // precision: 18,
                  scale: 0,
                  // type: 'long',
                  option: 'textWithObjectDataSourceAndOnBlurEvent',
                  onBlurDataSourceProvider: {
                    storedProcedure: {
                      name: 'extCustNo2NameNew',
                      // key: 'intCustId',
                      // value: 'ownerName',
                      callPlace: 'onBlur',
                      parameters: {
                        extCustId: {
                          direction: 'IN',
                          type: 'BigDecimal',
                          //  read from one of state variables
                          valueProvider: 'extCustId',
                        },
                      },
                    },
                    restService: {}
                  },
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'نام مشتری/ سازمان',
              title: 'customerName',
              step: 1,
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  option: 'textWithObjectDataSource',
                  dataSourceProvider: {
                    systemObject: {
                      objectName:{
                        //  jsonLogic standard format
                        rule:{
                          'var':'extCustIdOnBlurOutput.ownerName'
                        }
                      }
                    }
                  },
                  // ***  worked  ***
                  // dataSourceProvider: {
                  //     storedProcedure: {
                  //       name: 'extCustNo2Name',
                  //       key: 'intCustId',
                  //       value: 'po_custName',
                  //       callPlace: 'onBlur',
                  //       parameters: {
                  //         pi_extCustId: {
                  //           direction: 'IN',
                  //           type: 'BigDecimal',
                  //           value: 'extCustId',
                  //         },
                  //       },
                  //     },
                  //     restService: {}
                  //   },
                  disabled: true,
                  isVisible: true,
                  isGridLayout: true,
                  largeBreakpointWidth: 3,
                },
              },
            },
          ],
          [
            {
              lable: 'شماره داخلی مشتری/ سازمان',
              title: 'intCustId',
              step: 1,
              value: {
                type: 'primitive',
                schema: {
                  type: 'Integer',
                  option: 'textWithObjectDataSource',
                  dataSourceProvider: {
                    systemObject: {
                      objectName:{
                        rule:{
                          'var':'extCustIdOnBlurOutput.intCustId'
                        }
                      }
                    }
                  },
                  isVisible: false,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: '',
              title: '',
              step: 1,
              value: {
                type: 'emptyCell',
                schema: {
                  type: 'emptyCell',
                },
              },
            },
          ],
          [
            {
              //  Integer
              lable: 'تاریخ انعقاد',
              title: 'startDate',
              step: 1,
              value: {
                type: 'primitive',
                schema: {
                  type: 'Date',
                  position: 'bottom',
                  // size: { minValue: 1, maxValue: 10 },
                  isGridLayout: true,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              //  type: Integer
              lable: 'تاریخ انقضاء',
              title: 'expireDate',
              step: 1,
              value: {
                type: 'primitive',
                schema: {
                  type: 'Date',
                  position: 'bottom',
                  // size: { minValue: 1, maxValue: 10 },
                  isGridLayout: true,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              //  type: smallInt
              lable: 'نوع منطقه',
              title: 'zoneType',
              step: 1,
              value: {
                type: 'primitive',
                schema: {
                  type: 'Short',
                  // size: { minValue: 0, maxValue: 1 },
                  // enum: ['منطقه عادی', 'منطقه آزاد تجاری - اقتصادی'],
                  enum:[
                    {
                      key:3,
                      value:'منطقه عادی',
                      // enabled:true
                    },
                    {
                      key:5,
                      value:'منطقه آزاد تجاری - اقتصادی',
                      // enabled:true
                    },
                  ],
                  // option: 'select',
                  option: 'selectWithAO',
                  // stateKey: ['key','value'],
                  stateKey: ['zoneType','zoneTypeDescription'],
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              //  1-Base
              lable: 'خدمات موضوع تفاهم نامه',
              title: 'services',
              step: 1,
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  // size: { minValue: 3, maxValue: 9 },
                  enum: ["تسهیلات اعتباری", "بیمه", "کارتخوان", "خودپرداز"],
                  option: 'check',
                  inline: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              //  GetFacType
              //  0-Base
              //  type: smallInt
              lable: 'نحوه تخصیص منابع',
              title: 'resourceAllocationMethod',
              step: 1,
              value: {
                type: 'primitive',
                schema: {
                  type: 'Short',
                  // size: { minValue: 0, maxValue: 1 },
                  // enum: ['مبلغ ثابت', 'معدل منابع', 'هردو'],
                  enum:[
                    {
                      key:0,
                      value: ['مبلغ ثابت'],
                    },
                    {
                      key:1,
                      value: ['معدل منابع'],
                    },
                    {
                      key:2,
                      value: ['هردو'],
                    },
                  ],
                  option: 'radioWithAO',
                  inline: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              //  type: smallInt
              lable: 'تجدید پذیری منابع',
              title: 'includeBalance',
              step: 1,
              value: {
                type: 'primitive',
                schema: {
                  // type: 'Boolean',
                  type: 'Short',
                  option: 'radioWithAO',
                  // size: { minValue: 0, maxValue: 1 },
                  // enum: ['خیر', 'بلی'],
                  enum: [
                    {
                      key:0,
                      value: ['بلی'],
                    },
                    {
                      key:1,
                      value: ['خیر'],
                    },
                  ],
                  // option: 'radio',
                  inline: true,
                  // option: 'switch',
                  // type: 'String',
                  // enum: ["تجدید پذیر"],
                  // option: 'check',
                  inline: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              //  NumPerson
              lable: 'تعداد افراد قابل اعطا',
              title: 'numOfPerson',
              step: 1,
              value: {
                type: 'primitive',
                schema: {
                  type: 'Integer',
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              //  AmountPay
              //  type: Decimal
              lable: 'مبلغ ثابت قابل اعطا',
              title: 'fixAmount',
              step: 1,
              value: {
                type: 'non-primitive',
                schema: {
                  type: 'BigDecimal',
                  precision: 18,
                  scale: 0,
                  isAmount: true,
                  isVisible: {
                    rule:{
                      '!=':[{'var':'state.resourceAllocationMethod'},1]
                    }
                  },
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              lable: 'روش محاسبه معدل حساب',
              title: 'calculateAVGMethod',
              step: 2,
              value: {
                type: 'primitive',
                schema: {
                  type: 'Short',
                  // size: { minValue: 0, maxValue: 1 },
                  // enum: [
                  //   'محاسبه معدل حساب باشیوه استاندارد (روال فعلی)',
                  //   'محاسبه مابه التفاوت معدل حساب براساس بازه تاریخی بامبداء مشخصی',
                  // ],
                  // option: 'radio',
                  enum:[
                    {
                      key:0,
                      value: ['محاسبه معدل حساب باشیوه استاندارد (روال فعلی)'],
                    },
                    {
                      key:1,
                      value: ['محاسبه مابه التفاوت معدل حساب براساس بازه تاریخی بامبداء مشخصی'],
                    },
                  ],
                  option: 'radioWithAO',
                  inline: false,
                  isVisible: {
                    rule:{
                      '!=':[{'var':'state.resourceAllocationMethod'},0]
                    }
                  },
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: '',
              title: '',
              step: 2,
              value: {
                type: 'emptyCell',
                schema: {
                  type: 'emptyCell',
                },
              },
            },
          ],
          [
            {
              //  AvgOnDate
              lable: 'تاریخ محاسبه معدل حساب',
              title: 'calculateAvgFromDate',
              step: 2,
              value: {
                type: 'primitive',
                schema: {
                  type: 'Date',
                  position: 'bottom',
                  // size: { minValue: 1, maxValue: 10 },
                  isVisible: {
                    rule:{
                      'and':[
                        {'!=':[{'var':'state.resourceAllocationMethod'},0]},
                        {'==':[{'var':'state.calculateAVGMethod'},1]}
                      ],
                    }
                  },
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: '',
              title: '',
              step: 2,
              value: {
                type: 'emptyCell',
                schema: {
                  type: 'emptyCell',
                },
              },
            },
          ],
          [
            {
              //  AvgDay
              lable: 'دوره معدل گیری',
              title: 'avgDay',
              step: 2,
              value: {
                type: 'primitive',
                schema: {
                  type: 'Short',
                  // size: { minValue: 0, maxValue: 1 },
                  // enum: ['30روزه', '90روزه', '180روزه', '270روزه', '360روزه'],
                  enum:[
                    {
                      key:30,
                      value:'30روزه',
                      enabled:true
                    },
                    {
                      key:90,
                      value:'90روزه',
                      enabled:true
                    },
                    {
                      key:180,
                      value:'180روزه',
                      enabled:true
                    },
                    {
                      key:270,
                      value:'270روزه',
                      enabled:true
                    },
                    {
                      key:360,
                      value:'360روزه',
                      enabled:true
                    },
                  ],
                  // option: 'select',
                  option: 'selectWithAO',
                  isVisible: {
                    rule:{
                      'and':[
                        {'!=':[{'var':'parseInt(state.resourceAllocationMethod)'},0]},
                        {'==':[{'var':'parseInt(state.calculateAVGMethod)'},0]}
                      ],
                    }
                  },
                  stateKey: ['avgDay','avgDayDescription'],
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: '',
              title: '',
              step: 2,
              value: {
                type: 'emptyCell',
                schema: {
                  type: 'emptyCell',
                },
              },
            },
          ],
          [
            {
              lable: 'درصد قابل تخصیص از جاری',
              title: 'percentJari',
              step: 2,
              value: {
                type: 'non-primitive',
                schema: {
                  type: 'BigDecimal',
                  precision: 18,
                  scale: 2,
                  isPercent: true,
                  isVisible: {
                    rule:{
                      '!=':[{'var':'parseInt(state.resourceAllocationMethod)'},0],
                      // 'and':[
                      //   {'!=':[{'var':'parseInt(state.resourceAllocationMethod)'},0]},
                      //   {'==':[{'var':'parseInt(state.calculateAVGMethod)'},0]}
                      // ],
                    }
                  },
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              //  AmntJari
              lable: 'حداکثر مبلغ قابل تخصیص از جاری',
              title: 'amountJari',
              step: 2,
              value: {
                type: 'non-primitive',
                schema: {
                  type: 'BigDecimal',
                  precision: 18,
                  scale: 0,
                  isAmount: true,
                  isVisible: {
                    rule:{
                      '!=':[{'var':'parseInt(state.resourceAllocationMethod)'},0],
                      // 'and':[
                      //   {'!=':[{'var':'parseInt(state.resourceAllocationMethod)'},0]},
                      //   {'==':[{'var':'parseInt(state.calculateAVGMethod)'},0]}
                      // ],
                    }
                  },
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              lable: 'درصد قابل تخصیص از قرض الحسنه',
              title: 'percentGharz',
              step: 2,
              value: {
                type: 'non-primitive',
                schema: {
                  type: 'BigDecimal',
                  precision: 18,
                  scale: 0,
                  isPercent: true,
                  isVisible: {
                    rule:{
                      '!=':[{'var':'parseInt(state.resourceAllocationMethod)'},0],
                      // 'and':[
                      //   {'!=':[{'var':'parseInt(state.resourceAllocationMethod)'},0]},
                      //   {'==':[{'var':'parseInt(state.calculateAVGMethod)'},0]}
                      // ],
                    }
                  },
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              //  AmntGharz
              lable: 'حداکثر مبلغ قابل تخصیص از قرض الحسنه',
              title: 'amountGharz',
              step: 2,
              value: {
                type: 'non-primitive',
                schema: {
                  type: 'BigDecimal',
                  precision: 18,
                  scale: 0,
                  isAmount: true,
                  isVisible: {
                    rule:{
                      '!=':[{'var':'parseInt(state.resourceAllocationMethod)'},0],
                      // 'and':[
                      //   {'!=':[{'var':'parseInt(state.resourceAllocationMethod)'},0]},
                      //   {'==':[{'var':'parseInt(state.calculateAVGMethod)'},0]}
                      // ],
                    }
                  },
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              lable: 'درصد قابل تخصیص از کوتاه مدت',
              title: 'percentShort',
              step: 2,
              value: {
                type: 'non-primitive',
                schema: {
                  type: 'BigDecimal',
                  precision: 18,
                  scale: 0,
                  isPercent: true,
                  isVisible: {
                    rule:{
                      '!=':[{'var':'parseInt(state.resourceAllocationMethod)'},0],
                      // 'and':[
                      //   {'!=':[{'var':'parseInt(state.resourceAllocationMethod)'},0]},
                      //   {'==':[{'var':'parseInt(state.calculateAVGMethod)'},0]}
                      // ],
                    }
                  },
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              //  AmntShort
              lable: 'حداکثر مبلغ قابل تخصیص از کوتاه مدت',
              title: 'amountShort',
              step: 2,
              value: {
                type: 'non-primitive',
                schema: {
                  type: 'BigDecimal',
                  precision: 18,
                  scale: 0,
                  isAmount: true,
                  isVisible: {
                    rule:{
                      '!=':[{'var':'parseInt(state.resourceAllocationMethod)'},0],
                      // 'and':[
                      //   {'!=':[{'var':'parseInt(state.resourceAllocationMethod)'},0]},
                      //   {'==':[{'var':'parseInt(state.calculateAVGMethod)'},0]}
                      // ],
                    }
                  },
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              lable: 'درصد قابل تخصیص از بلند مدت',
              title: 'percentLong',
              step: 2,
              value: {
                type: 'non-primitive',
                schema: {
                  type: 'BigDecimal',
                  precision: 18,
                  scale: 0,
                  isPercent: true,
                  isVisible: {
                    rule:{
                      '!=':[{'var':'parseInt(state.resourceAllocationMethod)'},0],
                      // 'and':[
                      //   {'!=':[{'var':'parseInt(state.resourceAllocationMethod)'},0]},
                      //   {'==':[{'var':'parseInt(state.calculateAVGMethod)'},0]}
                      // ],
                    }
                  },
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              //  AmntLong
              lable: 'حداکثر مبلغ قابل تخصیص از بلند مدت',
              title: 'amountLong',
              step: 2,
              value: {
                type: 'non-primitive',
                schema: {
                  type: 'BigDecimal',
                  precision: 18,
                  scale: 0,
                  isAmount: true,
                  isVisible: {
                    rule:{
                      '!=':[{'var':'parseInt(state.resourceAllocationMethod)'},0],
                      // 'and':[
                      //   {'!=':[{'var':'parseInt(state.resourceAllocationMethod)'},0]},
                      //   {'==':[{'var':'parseInt(state.calculateAVGMethod)'},0]}
                      // ],
                    }
                  },
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              // CHAR(8)
              // 111 IS NOT NULL, 41 IN NULL
              lable: 'کاربر جاری ',
              title: 'userId',
              step: 2,
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  // size: { minValue: 0, maxValue: 1 },
                  isVisible: false,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              // "TIMEX" TIMESTAMP DEFAULT CURRENT TIMESTAMP
              // All has value
              lable: 'مهرزمانی ',
              title: 'time',
              step: 2,
              value: {
                type: 'primitive',
                schema: {
                  type: 'Date',
                  position: 'bottom',
                  // size: { minValue: 0, maxValue: 1 },
                  isVisible: false,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            // {
            //   lable: '',
            //   title: '',
            //   value: {
            //     type: 'emptyCell',
            //     schema: {
            //       type: 'emptyCell',
            //     },
            //   },
            // },
          ],
          [
            {
              lable: 'شماره مصوبه',
              title: 'seri',
              step: 2,
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  disabled: true,
                  isVisible: false,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'کد اعطای تسهیلات',
              title: 'loanStateCode',
              step: 2,
              value: {
                type: 'primitive',
                schema: {
                  type: 'Short',
                  disabled: true,
                  isVisible: false,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'وضعیت اعطای تسهیلات',
              title: 'loanStateDescription',
              step: 2,
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  disabled: true,
                  isVisible: false,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              lable: 'کد وضعیت تفاهم نامه',
              title: 'tafStateCode',
              step: 2,
              value: {
                type: 'primitive',
                schema: {
                  type: 'Short',
                  disabled: true,
                  isVisible: false,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'وضعیت تفاهم نامه',
              title: 'tafStateDescription',
              step: 2,
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  disabled: true,
                  isVisible: false,
                  isGridLayout: false,
                  largeBreakpointWidth: 2,
                },
              },
            },
          ],
          [
            {
              lable: 'شماره ثبت',
              title: 'registerNo',
              step: 2,
              value: {
                type: 'primitive',
                schema: {
                  type: 'BigDecimal',
                  precision: 20,
                  scale: 0,
                  // type: 'String',
                  option: 'textWithObjectDataSource',
                  dataSourceProvider: {
                    systemObject: {
                      objectName:{
                        //  jsonLogic standard format
                        rule:{
                          'var':'extCustIdOnBlurOutput.registerNo'
                        }
                      }
                    }
                  },
                  disabled: true,
                  isVisible: false,
                  isGridLayout: false,
                  largeBreakpointWidth: 3,
                },
              },
            },
            {
              lable: 'شناسه ملی',
              title: 'nationalId',
              step: 2,
              value: {
                type: 'primitive',
                schema: {
                  // type: 'String',
                  type: 'BigDecimal',
                  precision: 20,
                  scale: 0,
                  option: 'textWithObjectDataSource',
                  dataSourceProvider: {
                    systemObject: {
                      objectName:{
                        //  jsonLogic standard format
                        rule:{
                          'var':'extCustIdOnBlurOutput.nationalId'
                        }
                      }
                    }
                  },
                  disabled: true,
                  isVisible: false,
                  isGridLayout: false,
                  largeBreakpointWidth: 3,
                },
              },
            },
          ],
          [
            {
              lable: '',
              title: '',
              step: 2,
              value: {
                type: 'emptyCell',
                schema: {
                  type: 'emptyRow',
                  rowMargin:5,
                  isVisible: {
                    rule:{
                      'and':[
                        {'!=':[{'var':'parseInt(state.resourceAllocationMethod)'},0]},
                        {'==':[{'var':'parseInt(state.calculateAVGMethod)'},1]}
                      ],
                    }
                  },
                },
              },
            },
            {
              lable: '',
              title: '',
              step: 2,
              value: {
                type: 'emptyCell',
                schema: {
                  type: 'emptyRow',
                  rowMargin:5,
                  isVisible: {
                    rule:{
                      'and':[
                        {'!=':[{'var':'parseInt(state.resourceAllocationMethod)'},0]},
                        {'==':[{'var':'parseInt(state.calculateAVGMethod)'},1]}
                      ],
                    }
                  },
                },
              },
            },
            {
              lable: '',
              title: '',
              step: 2,
              value: {
                type: 'emptyCell',
                schema: {
                  type: 'emptyRow',
                  rowMargin:5,
                  isVisible: {
                    rule:{
                      'and':[
                        {'!=':[{'var':'parseInt(state.resourceAllocationMethod)'},0]},
                        {'==':[{'var':'parseInt(state.calculateAVGMethod)'},1]}
                      ],
                    }
                  },
                },
              },
            },
          ]
        ],
      },
      eghdamat: {
        lable: 'اقدامات',
        datasourceName: 'localds',
        schema: 'TAFSCHM',
        menuTitle:'profile',
        multiStepForm: [],
        content: [
          [
            {
              lable: 'عنوان',
              title: 'title',
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  isGridLayout: true,
                  largeBreakpointWidth: 2,
                },
              },
            },
            {
              lable: '',
              title: '',
              value: {
                type: 'emptyCell',
                schema: {
                  type: 'emptyCell',
                },
              },
            },
            {
              lable: 'تاریخ',
              title: 'date',
              value: {
                type: 'primitive',
                schema: {
                  type: 'Date',
                  position: 'bottom',
                  maximumDate: 'todayDate',
                  shouldHighlightToday: true,
                  isGridLayout: true,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              lable: 'شرح اقدام',
              title: 'description',
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  lines: 5,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
        ],
      },
      agent: {
        //  tafSignature
        lable: 'نماینده سازمان',
        datasourceName: 'localds',
        schema: 'TAFSCHM',
        menuTitle:'profile',
        multiStepForm: [],
        content: [
          [
            {
              //  name
              lable: 'نام',
              title: 'firstName',
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  isNotNull: true,
                  //                  isEmail: true, //  Default Value
                  //                  isUnique: false, // Default Value       ->  should not include in PrimaryKey column
                  //                  size: { minValue: 5, maxValue: 50 }, //  Default Value
                  //                  columnLength: 50, //  Default Value

                  isGridLayout: true,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              //  family
              lable: 'نام خانوادگی',
              title: 'lastName',
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  isGridLayout: true,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              lable: 'ایمیل',
              title: 'email',
              value: {
                type: 'non-primitive',
                schema: {
                  type: 'String',
                  isEmail: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              //  personType
              //  type: smallInt
              lable: 'سمت',
              title: 'jobTitle',
              value: {
                type: 'primitive',
                schema: {
                  type: 'Short',
                  // enum: [
                  //   'نماینده سازمان طرف تفاهم نامه',
                  //   'مدیرعامل سازمان طرف تفاهم نامه',
                  //   'عضوهیات مدیره',
                  //   'مدیرمالی',
                  //   'مدیراداری',
                  // ],
                  enum:[
                    {
                      key:0,
                      value:'نماینده سازمان طرف تفاهم نامه',
                      enabled:true
                    },
                    {
                      key:1,
                      value:'مدیرعامل سازمان طرف تفاهم نامه',
                      enabled:true
                    },
                    {
                      key:2,
                      value:'عضوهیات مدیره',
                      enabled:true
                    },
                    {
                      key:3,
                      value:'مدیرمالی',
                      enabled:true
                    },
                    {
                      key:4,
                      value:'مدیراداری',
                      enabled:true
                    },
                  ],
                  // option: 'select',
                  option: 'selectWithAO',
                  stateKey: ['jobTitle','jobTitleDescription'],
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              //  phone
              //  type: Decimal
              lable: 'شماره تلفن ثابت',
              title: 'fixPhoneNumber',
              value: {
                type: 'non-primitive',
                schema: {
                  type: 'String',
                  isTelNo: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              //  mobileNO
              //  type: Decimal
              lable: 'شماره تلفن همراه',
              title: 'mobilePhoneNumber',
              value: {
                type: 'non-primitive',
                schema: {
                  type: 'String',
                  isTelNo: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              lable: '',
              title: '',
              value: {
                type: 'emptyCell',
                schema: {
                  type: 'emptyCell',
                },
              },
            },
            {
              //  sendSMS
              lable: 'ارسال پیامک',
              title: 'shouldMessageSend',
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  enum: ['بلی', 'خیر'],
                  option: 'check',
                  inline: true,
                  isVisible: false,
                  disabled: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'عنوان سمت',
              title: 'jobTitleDescription',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  option: 'textWithObjectDataSource',
                  dataSourceProvider: {
                    // storedProcedure: {},
                    // restService: {}
                    systemObject: {
                      //  jsonLogic standard format
                      objectName:{
                        rule:{
                          'var':'state.jobTitleDescription'
                        }
                      },
                    }
                  },
                  isVisible: false,
                  disabled: true,
                  isGridLayout: true,
                  largeBreakpointWidth: 3,
                },
              },
            },
          ],
          [
            {
              //  discription
              lable: 'توضیحات',
              title: 'description',
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                  lines: 5
                },
              },
            },
          ],
        ],
      },
      account: {
        lable: 'مشخصات حساب',
        datasourceName: 'localds',
        schema: 'TAFSCHM',
        menuTitle:'profile',
        multiStepForm: [],
        content: [
          [
            {
              lable: 'شماره حساب',
              title: 'extAccNo',
              value: {
                type: 'primitive',
                schema: {
                  type: 'BigDecimal',
                  precision: 10,
                  scale: 0,
                  option: 'textWithObjectDataSourceAndOnBlurEvent',
                  onBlurDataSourceProvider: {
                    storedProcedure: {
                      name: 'accountDetail',
                      // key: 'intCustId',
                      // value: 'po_accNo',
                      callPlace: 'onBlur',
                      parameters: {
                        extAccNoVar: {
                          direction: 'IN',
                          type: 'BigDecimal',
                          //  read from one of state variables
                          valueProvider: 'extAccNo',
                        },
                      },
                    },
                    restService: {}
                  },
                  isGridLayout: true,
                  largeBreakpointWidth: 2,
                },
              },
            },
            {
              lable: 'شماره داخلی حساب',
              title: 'accNo',
              value: {
                type: 'primitive',
                schema: {
                  type: 'BigDecimal',
                  precision: 10,
                  scale: 0,
                  option: 'textWithObjectDataSource',
                  dataSourceProvider: {
                    systemObject: {
                      objectName:{
                        //  jsonLogic standard format
                        rule:{
                          'var':'extAccNoOnBlurOutput.accNo'
                        }
                      }
                    }
                  },
                  isVisible: false,
                  disabled: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              //  accDesc
              lable: 'نوع حساب',
              title: 'accTypeTitle',
              value: {
                type: 'primitive',
                schema: {
                  type: `String`,
                  option: 'textWithObjectDataSource',
                  dataSourceProvider: {
                    systemObject: {
                      objectName:{
                        //  jsonLogic standard format
                        rule:{
                          'var':'extAccNoOnBlurOutput.accDesc'
                        }
                      }
                    }
                  },
                  disabled:true,
                  isGridLayout: true,
                  largeBreakpointWidth: 3,
                },
              },
            },
            {
              //  vaziat
              lable: 'وضعیت حساب',
              title: 'status',
              value: {
                type: 'primitive',
                schema: {
                  type: `String`,
                  enum: ['غیرفعال', 'باز', 'راکد','بسته'],
                  // option: 'select',
                  option: 'selectWithObjectDataSource',
                  dataSourceProvider: {
                    systemObject: {
                      objectName:{
                        //  jsonLogic standard format
                        rule:{
                          'var':'extAccNoOnBlurOutput.statusx'
                        }
                      }
                    }
                  },
                  disabled:true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              lable: 'تاریخ افتتاح',
              title: 'createDate',
              value: {
                type: 'primitive',
                schema: {
                  type: `Integer`,
                  option: 'textWithObjectDataSource',
                  dataSourceProvider: {
                    systemObject: {
                      objectName:{
                        //  jsonLogic standard format
                        rule:{
                          'var':'extAccNoOnBlurOutput.createDate'
                        }
                      }
                    }
                  },
                  disabled:true,
                  isVisible: false,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'موجودی حساب',
              title: 'balance',
              value: {
                type: 'primitive',
                schema: {
                  type: `BigDecimal`,
                  precision: 15,
                  scale: 0,
                  option: 'textWithObjectDataSource',
                  dataSourceProvider: {
                    systemObject: {
                      objectName:{
                        //  jsonLogic standard format
                        rule:{
                          'var':'extAccNoOnBlurOutput.balance'
                        }
                      }
                    }
                  },
                  disabled:true,
                  isVisible:false,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              //  AVG1
              lable: 'معدل حساب',
              title: 'average',
              value: {
                type: 'primitive',
                schema: {
                  type: `BigDecimal`,
                  precision: 18,
                  scale: 0,
                  // option: 'textWithObjectDataSource',
                  // dataSourceProvider: {
                  //   systemObject: {
                  //     objectName:{
                  //       //  jsonLogic standard format
                  //       rule:{
                  //         'var':'extAccNoOnBlurOutput.accNo'
                  //       }
                  //     }
                  //   }
                  // },
                  disabled:true,
                  isVisible:false,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: '',
              title: 'furm',
              value: {
                type: 'primitive',
                schema: {
                  type: `BigDecimal`,
                  precision: 18,
                  scale: 0,
                  isVisible:false,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              // titleX
              lable: 'نام شعبه',
              title: 'branchName',
              value: {
                type: `primitive`,
                schema: {
                  type: `String`,
                  option: 'textWithObjectDataSource',
                  dataSourceProvider: {
                    systemObject: {
                      objectName:{
                        //  jsonLogic standard format
                        rule:{
                          'var':'extAccNoOnBlurOutput.titlex'
                        }
                      }
                    }
                  },
                  disabled: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              //  branch
              lable: 'کد شعبه',
              title: 'branchCode',
              value: {
                type: `primitive`,
                schema: {
                  type: `Integer`,
                  option: 'textWithObjectDataSource',
                  dataSourceProvider: {
                    systemObject: {
                      objectName:{
                        //  jsonLogic standard format
                        rule:{
                          'var':'extAccNoOnBlurOutput.branch'
                        }
                      }
                    }
                  },
                  disabled: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              lable: 'نام صاحب حساب',
              title: 'ownerName',
              value: {
                type: 'primitive',
                schema: {
                  type: `String`,
                  // option: 'textWithOwnDataSource',
                  option: 'textWithObjectDataSource',
                  dataSourceProvider: {
                    systemObject: {
                      objectName:{
                        //  jsonLogic standard format
                        rule:{
                          'var':'extAccNoOnBlurOutput.ownerName'
                        }
                      }
                    }
                  },
                  disabled: true,
                  isGridLayout: true,
                  largeBreakpointWidth: 2,
                },
              },
            },
            {
              lable: 'شماره مشتری',
              title: 'extCustId',
              value: {
                type: 'primitive',
                schema: {
                  type: `BigDecimal`,
                  precision: 12,
                  scale: 0,
                  option: 'textWithObjectDataSource',
                  dataSourceProvider: {
                    systemObject: {
                      objectName:{
                        //  jsonLogic standard format
                        rule:{
                          'var':'extAccNoOnBlurOutput.extCustId'
                        }
                      }
                    }
                  },
                  disabled:true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              lable: 'کدملی',
              title: 'nationalCode',
              value: {
                type: 'primitive',
                schema: {
                  type: `BigDecimal`,
                  precision: 12,
                  scale: 0,
                  option: 'textWithObjectDataSource',
                  dataSourceProvider: {
                    systemObject: {
                      objectName:{
                        //  jsonLogic standard format
                        rule:{
                          'var':'extAccNoOnBlurOutput.nationalCode'
                        }
                      }
                    }
                  },
                  numberFormat:{
                    locale:'Fa-IR',
                    // options:{
                      // style:'decimal',
                      // signDisplay:'always'
                    // }
                  },
                  disabled: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: '',
              title: '',
              value: {
                type: 'emptyCell',
                schema: {
                  type: 'emptyCell',
                },
              },
            },
          ],
          [
            {
              lable: 'کد نوع حساب',
              title: 'accTypeCode',
              value: {
                type: 'primitive',
                schema: {
                  type: `Short`,
                  option: 'textWithObjectDataSource',
                  dataSourceProvider: {
                    systemObject: {
                      objectName:{
                        //  jsonLogic standard format
                        rule:{
                          'var':'extAccNoOnBlurOutput.accType'
                        }
                      }
                    }
                  },
                  isVisible:false,
                  disabled:true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              // statusX
              //  Integer value of Vaziat
              lable: 'کد وضعیت حساب',
              title: 'statusCode',
              value: {
                type: 'primitive',
                schema: {
                  type: `Short`,
                  option: 'textWithObjectDataSource',
                  dataSourceProvider: {
                    systemObject: {
                      objectName:{
                        //  jsonLogic standard format
                        rule:{
                          'var':'extAccNoOnBlurOutput.statusx'
                        }
                      }
                    }
                  },
                  isVisible: false,
                  disabled:true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              lable: 'شماره داخلی مشتری',
              title: 'intCustId',
              value: {
                type: 'primitive',
                schema: {
                  type: `BigDecimal`,
                  precision: 12,
                  scale: 0,
                  option: 'textWithObjectDataSource',
                  dataSourceProvider: {
                    systemObject: {
                      objectName:{
                        //  jsonLogic standard format
                        rule:{
                          'var':'extAccNoOnBlurOutput.intCustId'
                        }
                      }
                    }
                  },
                  isVisible: false,
                  disabled:true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'تاریخ تغییر وضعیت',
              title: 'statusDate',
              value: {
                type: 'primitive',
                schema: {
                  type: 'Integer',
                  option: 'textWithObjectDataSource',
                  dataSourceProvider: {
                    systemObject: {
                      objectName:{
                        //  jsonLogic standard format
                        rule:{
                          'var':'extAccNoOnBlurOutput.statusDate'
                        }
                      }
                    }
                  },
                  isVisible:false,
                  disabled:true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              lable: 'کدگروه',
              title: 'categoryCode',
              value: {
                type: 'primitive',
                schema: {
                  type: `BigDecimal`,
                  precision: 12,
                  scale: 0,
                  option: 'textWithObjectDataSource',
                  dataSourceProvider: {
                    systemObject: {
                      objectName:{
                        //  jsonLogic standard format
                        rule:{
                          'var':'extAccNoOnBlurOutput.categoryCode'
                        }
                      }
                    }
                  },
                  isVisible: false,
                  disabled:true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'نوع مشتری',
              title: 'custType',
              value: {
                type: 'primitive',
                schema: {
                  type: `BigDecimal`,
                  precision: 12,
                  scale: 0,
                  option: 'textWithObjectDataSource',
                  dataSourceProvider: {
                    systemObject: {
                      objectName:{
                        //  jsonLogic standard format
                        rule:{
                          'var':'extAccNoOnBlurOutput.custType'
                        }
                      }
                    }
                  },
                  isVisible: false,
                  disabled:true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'نرخ سود ترجیحی',
              title: 'tarjihiRate',
              value: {
                type: 'primitive',
                schema: {
                  type: `BigDecimal`,
                  precision: 7,
                  scale: 0,
                  option: 'textWithObjectDataSource',
                  dataSourceProvider: {
                    systemObject: {
                      objectName:{
                        //  jsonLogic standard format
                        rule:{
                          'var':'extAccNoOnBlurOutput.tarjihiRate'
                        }
                      }
                    }
                  },
                  isVisible: false,
                  disabled:true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            }
          //   {
          //     //  timeStamp
          //     lable: 'مهرزمانی',
          //     title: 'timeX',
          //     value: {
          //       type: 'primitive',
          //       schema: {
          //         type: `Date`,
          //         isGridLayout: false,
          //         largeBreakpointWidth: 1,
          //       },
          //     },
          //   },
          ],
        ],
      },
      customerWithHadSaghf: {
        lable: 'مشتریان مشمول در مصارف تفاهم نامه',
        datasourceName: 'localds',
        schema: 'TAFSCHM',
        menuTitle:'profile',
        multiStepForm: [],
        content: [
          [
            {
              lable: 'مشتریان مشمول',
              title: 'includedCustomer',
              value: {
                type: 'primitive',
                schema: {
                  type: `String`,
                  option:'includedCustomer',
                  disabled: false,
                  isVisible: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 2,
                },
              },
            },
            {
              lable: 'شماره داخلی مشتری',
              title: 'includedCustomerIntCustId',
              value: {
                type: 'primitive',
                schema: {
                  type: `String`,
                  disabled: true,
                  isVisible: false,
                  isGridLayout: false,
                  largeBreakpointWidth: 2,
                },
              },
            },
            // {
            //   lable: 'شماره داخلی مشتری',
            //   title: 'intCustId',
            //   value: {
            //     type: 'primitive',
            //     schema: {
            //       type: `BigDecimal`,
            //       precision: 12,
            //       scale: 0,
            //       isVisible: false,
            //       disabled:true,
            //       isGridLayout: false,
            //       largeBreakpointWidth: 1,
            //     },
            //   },
            // },
          ],
          [
            {
              lable: '',
              title: '',
              value: {
                type: 'emptyCell',
                schema: {
                  type: 'emptyCell',
                },
              },
            },
            {
              lable: 'تاریخ',
              title: 'date',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'Date',
                  position: 'bottom',
                  disabled: false,
                  isVisible: true,
                  isGridLayout: true,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: '',
              title: '',
              value: {
                type: 'emptyCell',
                schema: {
                  type: 'emptyCell',
                },
              },
            },
          ],
          [
            // {
            //   lable: 'شماره مشتری',
            //   title: 'extCustId',
            //   value: {
            //     type: 'primitive',
            //     schema: {
            //       type: `BigDecimal`,
            //       precision: 12,
            //       scale: 0,
            //       disabled:true,
            //       isVisible: false,
            //       isGridLayout: true,
            //       largeBreakpointWidth: 2,
            //     },
            //   },
            // },
            // {
            //   lable: 'نام صاحب حساب',
            //   title: 'ownerName',
            //   value: {
            //     type: 'primitive',
            //     schema: {
            //       type: `String`,
            //       disabled: true,
            //       isVisible: false,
            //       isGridLayout: true,
            //       largeBreakpointWidth: 2,
            //     },
            //   },
            // },
          ],
          [
            // {
            //   lable: 'کدملی',
            //   title: 'nationalCode',
            //   value: {
            //     type: 'primitive',
            //     schema: {
            //       type: `BigDecimal`,
            //       precision: 12,
            //       scale: 0,
            //       numberFormat:{
            //         locale:'Fa-IR',
            //       },
            //       disabled: true,
            //       isVisible: false,
            //       isGridLayout: true,
            //       largeBreakpointWidth: 1,
            //     },
            //   },
            // },
            // {
            //   // lable: 'تسهیلات از محل حدوسقف این حساب در مصارف تفاهم نامه لحاظ  گردد',
            //   lable: 'لحاظ در مصارف تفاهم نامه',
            //   title: 'selected',
            //   value: {
            //     type: 'primitive',
            //     schema: {
            //       type: 'String',
            //       option: 'switch',
            //       disabled: true,
            //       isVisible: false,
            //       isGridLayout: true,
            //       largeBreakpointWidth: 2,
            //     },
            //   },
            // },
          ],
        ],
      },
      // account: {
      //   lable: 'مشخصات حساب',
      //   datasourceName: 'localds',
      //   schema: 'TAFSCHM',
      //   multiStepForm: [],
      //   content: [
      //     [
      //       {
      //         lable: 'شماره حساب',
      //         title: 'extAccNo',
      //         value: {
      //           type: 'primitive',
      //           schema: {
      //             type: 'BigDecimal',
      //             precision: 18,
      //             scale: 0,
      //             dataSourceProvider: {
      //               storedProcedure: {
      //                 name: 'fullAccountInfo',
      //                 // key: 'intCustId',
      //                 value: 'po_accNo',
      //                 callPlace: 'onBlur',
      //                 parameters: {
      //                   pi_extAccNo: {
      //                     direction: 'IN',
      //                     type: 'BigDecimal',
      //                     value: 'extAccNo',
      //                     //  value of keyValueComponent
      //                     //  componentStateValue
      //                     //  textwithDataSource
      //                     // valueProvider: 'componentValue'
      //                   },
      //                 },
      //               },
      //               restService: {}
      //             },
      //             isGridLayout: true,
      //             largeBreakpointWidth: 1,
      //           },
      //         },
      //       },
      //       {
      //         lable: 'شماره داخلی حساب',
      //         title: 'accNo',
      //         value: {
      //           type: 'primitive',
      //           schema: {
      //             type: 'BigDecimal',
      //             precision: 18,
      //             scale: 0,
      //             // option: 'textWithDataSource',
      //             dataSourceProvider: {
      //               storedProcedure: {
      //                 name: 'fullAccountInfo',
      //                 // key: 'intCustId',
      //                 value: 'po_accNo',
      //                 callPlace: 'onBlur',
      //                 parameters: {
      //                   pi_extAccNo: {
      //                     direction: 'IN',
      //                     type: 'BigDecimal',
      //                     value: 'extAccNo',
      //                     //  value of keyValueComponent
      //                     //  componentStateValue
      //                     //  textwithDataSource
      //                     // valueProvider: 'componentValue'
      //                   },
      //                 },
      //               },
      //               restService: {}
      //             },
      //             isGridLayout: false,
      //             largeBreakpointWidth: 1,
      //           },
      //         },
      //       },
      //     ],
      //     [
      //       {
      //         //  accDesc
      //         lable: 'نوع حساب',
      //         title: 'accTypeTitle',
      //         value: {
      //           type: 'primitive',
      //           schema: {
      //             type: `String`,
      //             // enum:[],
      //             // option:'check',
      //             dataSourceProvider: {
      //               storedProcedure: {
      //                 name: 'fullAccountInfo',
      //                 // key: 'accType',
      //                 value: 'po_accType',
      //                 callPlace: 'onBlur',
      //                 parameters: {
      //                   pi_extAccNo: {
      //                     direction: 'IN',
      //                     type: 'BigDecimal',
      //                     value: 'extAccNo',
      //                   },
      //                 },
      //               },
      //               restService: {}
      //             },
      //             isGridLayout: true,
      //             largeBreakpointWidth: 1,
      //           },
      //         },
      //       },
      //       {
      //         //  vaziat
      //         lable: 'وضعیت حساب',
      //         title: 'status',
      //         value: {
      //           type: 'primitive',
      //           schema: {
      //             type: `String`,
      //             isGridLayout: false,
      //             largeBreakpointWidth: 1,
      //           },
      //         },
      //       },
      //     ],
      //     [
      //       {
      //         lable: 'موجودی حساب',
      //         title: 'balance',
      //         value: {
      //           type: 'primitive',
      //           schema: {
      //             type: `BigDecimal`,
      //             precision: 18,
      //             scale: 0,
      //             isGridLayout: false,
      //             largeBreakpointWidth: 1,
      //           },
      //         },
      //       },
      //       {
      //         //  AVG1
      //         lable: 'معدل حساب',
      //         title: 'average',
      //         value: {
      //           type: 'primitive',
      //           schema: {
      //             type: `BigDecimal`,
      //             precision: 18,
      //             scale: 0,
      //             isGridLayout: false,
      //             largeBreakpointWidth: 1,
      //           },
      //         },
      //       },
      //     ],
      //     [
      //       {
      //         lable: 'نام صاحب حساب',
      //         title: 'ownerName',
      //         value: {
      //           type: 'primitive',
      //           schema: {
      //             type: `String`,
      //             // option: 'textWithOwnDataSource',
      //             dataSourceProvider: {
      //               storedProcedure: {
      //                 name: 'fullAccountInfo',
      //                 key: 'po_ownerName',
      //                 value: 'po_ownerName',
      //                 callPlace: 'onBlur',
      //                 parameters: {
      //                   pi_extAccNo: {
      //                     direction: 'IN',
      //                     type: 'BigDecimal',
      //                     value: 'extAccNo',
      //                   },
      //                 },
      //               },
      //               restService: {}
      //             },
      //             isGridLayout: false,
      //             largeBreakpointWidth: 1,
      //           },
      //         },
      //       },
      //       {
      //         lable: 'کدملی',
      //         title: 'nationalCode',
      //         value: {
      //           type: 'primitive',
      //           schema: {
      //             type: `BigDecimal`,
      //             precision: 18,
      //             scale: 0,
      //             isGridLayout: false,
      //             largeBreakpointWidth: 1,
      //           },
      //         },
      //       },
      //     ],
      //     [
      //       {
      //         //  branch
      //         lable: 'کد شعبه',
      //         title: 'branch',
      //         value: {
      //           type: `primitive`,
      //           schema: {
      //             type: `Integer`,
      //             dataSourceProvider: {
      //               storedProcedure: {
      //                 name: 'fullAccountInfo',
      //                 // key: 'branch',
      //                 value: 'po_branch',
      //                 callPlace: 'onBlur',
      //                 parameters: {
      //                   pi_extAccNo: {
      //                     direction: 'IN',
      //                     type: 'BigDecimal',
      //                     value: 'extAccNo',
      //                     //  value of keyValueComponent
      //                     //  componentStateValue
      //                     //  textwithDataSource
      //                     // valueProvider: 'componentValue'
      //                   },
      //                 },
      //               },
      //               restService: {}
      //             },
      //             isGridLayout: false,
      //             largeBreakpointWidth: 1,
      //           },
      //         },
      //       },
      //       {
      //         // titleX
      //         lable: 'نام شعبه',
      //         title: 'branchName',
      //         value: {
      //           type: `primitive`,
      //           schema: {
      //             type: `String`,
      //             isGridLayout: false,
      //             largeBreakpointWidth: 1,
      //           },
      //         },
      //       },
      //     ],
      //     [
      //       {
      //         lable: 'کد نوع حساب',
      //         title: 'accType',
      //         value: {
      //           type: 'primitive',
      //           schema: {
      //             type: `Short`,
      //             isGridLayout: false,
      //             largeBreakpointWidth: 1,
      //           },
      //         },
      //       },
      //       {
      //         //  Integer value of Vaziat
      //         lable: 'کد وضعیت حساب',
      //         title: 'statusX',
      //         value: {
      //           type: 'primitive',
      //           schema: {
      //             type: `Short`,
      //             isGridLayout: false,
      //             largeBreakpointWidth: 1,
      //           },
      //         },
      //       },
      //     ],
      //     [
      //       {
      //         lable: 'شماره مشتری',
      //         title: 'extCustId',
      //         value: {
      //           type: 'primitive',
      //           schema: {
      //             type: `BigDecimal`,
      //             precision: 18,
      //             scale: 0,
      //             isGridLayout: false,
      //             largeBreakpointWidth: 1,
      //           },
      //         },
      //       },
      //       {
      //         lable: 'شماره داخلی مشتری',
      //         title: 'intCustId',
      //         value: {
      //           type: 'primitive',
      //           schema: {
      //             type: `BigDecimal`,
      //             precision: 18,
      //             scale: 0,
      //             dataSourceProvider: {
      //               storedProcedure: {
      //                 name: 'fullAccountInfo',
      //                 // key: 'intCustId',
      //                 value: 'po_intCustId',
      //                 callPlace: 'onBlur',
      //                 parameters: {
      //                   pi_extAccNo: {
      //                     direction: 'IN',
      //                     type: 'BigDecimal',
      //                     value: 'extAccNo',
      //                     //  value of keyValueComponent
      //                     //  componentStateValue
      //                     //  textwithDataSource
      //                     // valueProvider: 'componentValue'
      //                   },
      //                 },
      //               },
      //               restService: {}
      //             },
      //             isGridLayout: false,
      //             largeBreakpointWidth: 1,
      //           },
      //         },
      //       },
      //     ],
      //     [
      //       {
      //         lable: 'تاریخ ایجاد',
      //         title: 'createDate',
      //         value: {
      //           type: 'primitive',
      //           schema: {
      //             type: `Integer`,
      //             dataSourceProvider: {
      //               storedProcedure: {
      //                 name: 'fullAccountInfo',
      //                 // key: 'po_createDate',
      //                 value: 'po_createDate',
      //                 callPlace: 'onBlur',
      //                 parameters: {
      //                   pi_extAccNo: {
      //                     direction: 'IN',
      //                     type: 'BigDecimal',
      //                     value: 'extAccNo',
      //                     //  value of keyValueComponent
      //                     //  componentStateValue
      //                     //  textwithDataSource
      //                     // valueProvider: 'componentValue'
      //                   },
      //                 },
      //               },
      //               restService: {}
      //             },
      //             isGridLayout: false,
      //             largeBreakpointWidth: 1,
      //           },
      //         },
      //       },
      //       {
      //         lable: 'تاریخ تغییر وضعیت',
      //         title: 'statusDate',
      //         value: {
      //           type: 'primitive',
      //           schema: {
      //             type: 'Integer',
      //             isGridLayout: false,
      //             largeBreakpointWidth: 1,
      //           },
      //         },
      //       },
      //     ],
      //     [
      //       {
      //         //  timeStamp
      //         lable: 'مهرزمانی',
      //         title: 'timeX',
      //         value: {
      //           type: 'primitive',
      //           schema: {
      //             type: `Date`,
      //             isGridLayout: false,
      //             largeBreakpointWidth: 1,
      //           },
      //         },
      //       },
      //       {
      //         lable: '',
      //         title: 'furm',
      //         value: {
      //           type: 'primitive',
      //           schema: {
      //             type: `BigDecimal`,
      //             precision: 18,
      //             scale: 0,
      //             isGridLayout: false,
      //             largeBreakpointWidth: 1,
      //           },
      //         },
      //       },
      //     ],
      //   ],
      // },
      edms: {
        lable: 'اسناد مرتبط',
        datasourceName: 'localds',
        schema: 'TAFSCHM',
        menuTitle:'profile',
        multiStepForm: [],
        content: [
          [
            // {
            //   lable: 'عنوان سند',
            //   title: 'title',
            //   value: {
            //     type: 'primitive',
            //     schema: {
            //       type: 'String',
            //       isGridLayout: true,
            //       largeBreakpointWidth: 1,
            //     },
            //   },
            // },
            {
              lable: 'فایل سند',
              title: 'file',
              value: {
                type: 'non-primitive',
                schema: {
                  type: 'file',
                  //  TODO : should be changed
                  docTypeNo: "23004",
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              lable: 'شرح',
              title: 'description',
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                  lines: 5
                },
              },
            },
          ],
        ],
      },
      finantialStatementAbstract: {
        lable: 'خلاصه وضعیت صورت های مالی',
        datasourceName: 'localds',
        schema: 'TAFSCHM',
        menuTitle:'profile',
        multiStepForm: ['بخش یکم','بخش دوم','نسبت ها'],
        content: [
          [
            {
              lable: 'تاریخ',
              title: 'date',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'Date',
                  position: 'bottom',
                  disabled: false,
                  isVisible: true,
                  isGridLayout: true,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: '',
              title: '',
              step: 0,
              value: {
                type: 'emptyCell',
                schema: {
                  type: 'emptyCell',
                },
              },
            },
            {
              lable: '',
              title: '',
              step: 0,
              value: {
                type: 'emptyCell',
                schema: {
                  type: 'emptyCell',
                },
              },
            },
          ],
          [
            {
              lable: 'سرمایه ثبتی شرکت',
              title: 'sarmayeSabti',
              step: 0,
              value: {
                type: 'non-primitive',
                schema: {
                  type: 'BigDecimal',
                  precision: 31,
                  scale: 0,
                  isAmount: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'بهای تمام شده کالای فروش رفته',
              title: 'bahayeTamamShode',
              step: 0,
              value: {
                type: 'non-primitive',
                schema: {
                  type: 'BigDecimal',
                  precision: 31,
                  scale: 0,
                  isAmount: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              lable: 'فروش شرکت/ گروه',
              title: 'foroush',
              step: 0,
              value: {
                type: 'non-primitive',
                schema: {
                  type: 'BigDecimal',
                  precision: 31,
                  scale: 0,
                  isAmount: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'جمع کل دارایی های غیرجاری شرکت/ گروه',
              title: 'jameKolJari',
              step: 0,
              value: {
                type: 'non-primitive',
                schema: {
                  type: 'BigDecimal',
                  precision: 31,
                  scale: 0,
                  isAmount: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              lable: 'جمع کل دارایی های ثابت',
              title: 'jameKolSabet',
              step: 0,
              value: {
                type: 'non-primitive',
                schema: {
                  type: 'BigDecimal',
                  precision: 31,
                  scale: 0,
                  isAmount: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'موجودی کالای شرکت',
              title: 'mojoudiSherkat',
              step: 0,
              value: {
                type: 'non-primitive',
                schema: {
                  type: 'BigDecimal',
                  precision: 31,
                  scale: 0,
                  isAmount: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              lable: 'موجودی نقدی',
              title: 'mojoudiNaghdi',
              step: 0,
              value: {
                type: 'non-primitive',
                schema: {
                  type: 'BigDecimal',
                  precision: 31,
                  scale: 0,
                  isAmount: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'سرمایه گذاری کوتاه مدت',
              title: 'samayegozariKotah',
              step: 0,
              value: {
                type: 'non-primitive',
                schema: {
                  type: 'BigDecimal',
                  precision: 31,
                  scale: 0,
                  isAmount: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              lable: 'سرمایه گذاری بلندمدت',
              title: 'samayegozariBoland',
              step: 0,
              value: {
                type: 'non-primitive',
                schema: {
                  type: 'BigDecimal',
                  precision: 31,
                  scale: 0,
                  isAmount: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'پیش پرداخت ها',
              title: 'pishPardakht',
              step: 0,
              value: {
                type: 'non-primitive',
                schema: {
                  type: 'BigDecimal',
                  precision: 31,
                  scale: 0,
                  isAmount: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              lable: 'اسناد دریافتنی',
              title: 'asnadeDaryaftani',
              step: 1,
              value: {
                type: 'non-primitive',
                schema: {
                  type: 'BigDecimal',
                  precision: 31,
                  scale: 0,
                  isAmount: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'اسناد پرداختنی',
              title: 'asnadePardakhtani',
              step: 1,
              value: {
                type: 'non-primitive',
                schema: {
                  type: 'BigDecimal',
                  precision: 31,
                  scale: 0,
                  isAmount: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              lable: 'جمع حقوق صاحبان سهام شرکت/ گروه',
              title: 'jameHoghough',
              step: 1,
              value: {
                type: 'non-primitive',
                schema: {
                  type: 'BigDecimal',
                  precision: 31,
                  scale: 0,
                  isAmount: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'بدهی جاری',
              title: 'bedehiJari',
              step: 1,
              value: {
                type: 'non-primitive',
                schema: {
                  type: 'BigDecimal',
                  precision: 31,
                  scale: 0,
                  isAmount: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              lable: 'میزان کل بدهی های جاری شرکت',
              title: 'mizanBedehi',
              step: 1,
              value: {
                type: 'non-primitive',
                schema: {
                  type: 'BigDecimal',
                  precision: 31,
                  scale: 0,
                  isAmount: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'سرمایه در گردش خالص',
              title: 'sarmayeDarGardesh',
              step: 1,
              value: {
                type: 'non-primitive',
                schema: {
                  type: 'BigDecimal',
                  precision: 31,
                  scale: 0,
                  isAmount: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              lable: 'تسهیلات کوتاه مدت',
              title: 'tashilatKotahModat',
              step: 1,
              value: {
                type: 'non-primitive',
                schema: {
                  type: 'BigDecimal',
                  precision: 31,
                  scale: 0,
                  isAmount: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'تسهیلات بلند مدت',
              title: 'tashilatBolandModat',
              step: 1,
              value: {
                type: 'non-primitive',
                schema: {
                  type: 'BigDecimal',
                  precision: 31,
                  scale: 0,
                  isAmount: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              lable: 'سود ناخالص شرکت',
              title: 'soudeNakhales',
              step: 1,
              value: {
                type: 'non-primitive',
                schema: {
                  type: 'BigDecimal',
                  precision: 31,
                  scale: 0,
                  isAmount: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'سود خالص شرکت',
              title: 'soudeKhales',
              step: 1,
              value: {
                type: 'non-primitive',
                schema: {
                  type: 'BigDecimal',
                  precision: 31,
                  scale: 0,
                  isAmount: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              lable: 'نسبت جاری',
              title: 'nesbateJari',
              step: 2,
              value: {
                type: 'non-primitive',
                schema: {
                  type: 'BigDecimal',
                  precision: 31,
                  scale: 0,
                  isAmount: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'نسبت آنی',
              title: 'nesbateAni',
              step: 2,
              value: {
                type: 'non-primitive',
                schema: {
                  type: 'BigDecimal',
                  precision: 31,
                  scale: 0,
                  isAmount: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              lable: 'نسبت مالکانه',
              title: 'nesbateMalekane',
              step: 2,
              value: {
                type: 'non-primitive',
                schema: {
                  type: 'BigDecimal',
                  precision: 31,
                  scale: 0,
                  isAmount: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: '',
              title: '',
              step: 2,
              value: {
                type: 'emptyCell',
                schema: {
                  type: 'emptyCell',
                },
              },
            },
          ],
        ],
      },
      // {
      //   lable: 'مقطع زمانی',
      //   title: 'timeInterval',
      //   value: {
      //     type: 'primitive',
      //     schema: {
      //       type: 'String',
      //       enum: [
      //         '۱۴۰۳-شش ماه اول',
      //         '۱۴۰۳-شش ماه دوم',
      //         '۱۴۰۴-شش ماه اول',
      //         '۱۴۰۴-شش ماه دوم',
      //         '۱۴۰۵-شش ماه اول',
      //         '۱۴۰۵-شش ماه دوم',
      //         '۱۴۰۶-شش ماه اول',
      //         '۱۴۰۶-شش ماه دوم',
      //         '۱۴۰۷-شش ماه اول',
      //         '۱۴۰۷-شش ماه دوم',
      //         '۱۴۰۸-شش ماه اول',
      //         '۱۴۰۸-شش ماه دوم',
      //         '۱۴۰۹-شش ماه اول',
      //         '۱۴۰۹-شش ماه دوم',
      //         '۱۴۱۰-شش ماه اول',
      //         '۱۴۱۰-شش ماه دوم',
      //       ],
      //       option: 'select',
      //       isGridLayout: true,
      //       largeBreakpointWidth: 1,
      //     },
      //   },
      // },
      finantialInformation: {
        lable: 'اطلاعات مالی عملکرد مشتری',
        datasourceName: 'localds',
        schema: 'TAFSCHM',
        menuTitle:'profile',
        multiStepForm: [],
        content: [
          [
            // {
            //   lable: 'مقطع زمانی',
            //   title: 'timeInterval',
            //   value: {
            //     type: 'primitive',
            //     schema: {
            //       type: 'String',
            //       enum: ['۱۴۰۳', '۱۴۰۳', '۱۴۰۵', '۱۴۰۶', '۱۴۰۷', '۱۴۰۸', '۱۴۰۹', '۱۴۲۰'],
            //       option: 'select',
            //       isGridLayout: true,
            //       largeBreakpointWidth: 1,
            //     },
            //   },
            // },
            {
              lable: 'تاریخ',
              title: 'date',
              value: {
                type: 'primitive',
                schema: {
                  type: 'Date',
                  position: 'bottom',
                  isGridLayout: true,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: '',
              title: '',
              value: {
                type: 'emptyCell',
                schema: {
                  type: 'emptyCell',
                },
              },
            },
          ],
          [
            {
              lable: 'فروش خالص',
              title: 'foroushKhales',
              value: {
                type: 'non-primitive',
                schema: {
                  type: 'BigDecimal',
                  precision: 31,
                  scale: 0,
                  isAmount: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'سرمایه درگردش',
              title: 'sarmayeDarGardesh',
              value: {
                type: 'non-primitive',
                schema: {
                  type: 'BigDecimal',
                  precision: 31,
                  scale: 0,
                  isAmount: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              lable: 'دارایی جاری',
              title: 'daraeiJari',
              value: {
                type: 'non-primitive',
                schema: {
                  type: 'BigDecimal',
                  precision: 31,
                  scale: 0,
                  isAmount: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'دارایی غیرجاری',
              title: 'daraeiGheireJari',
              value: {
                type: 'non-primitive',
                schema: {
                  type: 'BigDecimal',
                  precision: 31,
                  scale: 0,
                  isAmount: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              lable: 'میزان دارایی ثابت',
              title: 'daraeiSabet',
              value: {
                type: 'non-primitive',
                schema: {
                  type: 'BigDecimal',
                  precision: 31,
                  scale: 0,
                  isAmount: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'موجودی نقد',
              title: 'mojoudiNaghd',
              value: {
                type: 'non-primitive',
                schema: {
                  type: 'BigDecimal',
                  precision: 31,
                  scale: 0,
                  isAmount: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              lable: 'بدهی جاری',
              title: 'bedehiJari',
              value: {
                type: 'non-primitive',
                schema: {
                  type: 'BigDecimal',
                  precision: 31,
                  scale: 0,
                  isAmount: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'بدهی بلند مدت',
              title: 'bedehiBolandModat',
              value: {
                type: 'non-primitive',
                schema: {
                  type: 'BigDecimal',
                  precision: 31,
                  scale: 0,
                  isAmount: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              lable: 'حقوق صاحبان سهام',
              title: 'hoghoughSaheban',
              value: {
                type: 'non-primitive',
                schema: {
                  type: 'BigDecimal',
                  precision: 31,
                  scale: 0,
                  isAmount: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'موجودی کالای شرکت',
              title: 'mojoudiKala',
              value: {
                type: 'non-primitive',
                schema: {
                  type: 'BigDecimal',
                  precision: 31,
                  scale: 0,
                  isAmount: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              lable: 'اسناد دریافتنی',
              title: 'asnadeDaryaftani',
              value: {
                type: 'non-primitive',
                schema: {
                  type: 'BigDecimal',
                  precision: 31,
                  scale: 0,
                  isAmount: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'اسناد پرداختنی',
              title: 'asnadePardakhtani',
              value: {
                type: 'non-primitive',
                schema: {
                  type: 'BigDecimal',
                  precision: 31,
                  scale: 0,
                  isAmount: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              lable: 'حساب های دریافتنی',
              title: 'hesabhayeDaryaftani',
              value: {
                type: 'non-primitive',
                schema: {
                  type: 'BigDecimal',
                  precision: 31,
                  scale: 0,
                  isAmount: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'حساب های پرداختنی',
              title: 'hesabhayePardakhtani',
              value: {
                type: 'non-primitive',
                schema: {
                  type: 'BigDecimal',
                  precision: 31,
                  scale: 0,
                  isAmount: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              lable: 'بهای تمام شده کالای فروش رفته',
              title: 'bahayeTamamshode',
              value: {
                type: 'non-primitive',
                schema: {
                  type: 'BigDecimal',
                  precision: 31,
                  scale: 0,
                  isAmount: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'سرمایه گذاری کوتاه مدت',
              title: 'sarmayeGozariKotahModat',
              value: {
                type: 'non-primitive',
                schema: {
                  type: 'BigDecimal',
                  precision: 31,
                  scale: 0,
                  isAmount: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ]
        ],
      },
      resourcesAndExpenses: {
        lable: 'منابع و مصارف',
        datasourceName: 'localds',
        schema: 'TAFSCHM',
        menuTitle:'profile',
        multiStepForm: [],
        content: [
          [
            // {
            //   lable: 'مقطع زمانی',
            //   title: 'timeInterval',
            //   value: {
            //     type: 'primitive',
            //     schema: {
            //       type: 'String',
            //       enum: ['سال اول', 'سال دوم', 'سال سوم'],
            //       option: 'select',
            //       isGridLayout: true,
            //       largeBreakpointWidth: 1,
            //     },
            //   },
            // },
            {
              lable: 'تاریخ',
              title: 'date',
              value: {
                type: 'primitive',
                schema: {
                  type: 'Date',
                  position: 'bottom',
                  isGridLayout: true,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'پیش بینی منابع',
              title: 'manabePishbini',
              value: {
                type: 'non-primitive',
                schema: {
                  type: 'BigDecimal',
                  precision: 31,
                  scale: 0,
                  isAmount: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              lable: '',
              title: '',
              value: {
                type: 'emptyCell',
                schema: {
                  type: 'emptyCell',
                },
              },
            },
            {
              lable: 'پیش بینی مصارف',
              title: 'pishbiniMasaref',
              value: {
                type: 'non-primitive',
                schema: {
                  type: 'BigDecimal',
                  precision: 31,
                  scale: 0,
                  isAmount: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              lable: '',
              title: '',
              value: {
                type: 'emptyCell',
                schema: {
                  type: 'emptyCell',
                  // type: 'String',
                  // option: 'select',
                },
              },
            },
            {
              lable: 'پیش بینی تعهدات',
              title: 'pishbiniTahodat',
              value: {
                type: 'non-primitive',
                schema: {
                  type: 'BigDecimal',
                  precision: 31,
                  scale: 0,
                  isAmount: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
        ],
      },
      uploadFileRM: {
        lable: 'اسناد مرتبط - مدیریت شعب',
        datasourceName: 'localds',
        schema: 'TAFSCHM',
        menuTitle:'profile',
        multiStepForm: [],
        content: [
          [
            {
              lable: 'تاریخ',
              title: 'date',
              value: {
                type: 'primitive',
                schema: {
                  type: 'Date',
                  position: 'bottom',
                  isGridLayout: true,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: '',
              title: '',
              value: {
                type: 'emptyCell',
                schema: {
                  type: 'emptyCell',
                },
              },
            },
          ],
          [
            {
              lable: 'اساسنامه',
              title: 'asasname',
              value: {
                type: 'non-primitive',
                schema: {
                  type: 'file',
                  docTypeNo: '23004',
                  // type: 'String',
                  // option: 'textWithDataSource',
                  dataSourceConsumer: {
                    storedProcedure: {},
                    restService: {
                      name: 'regionListsss',
                      key: 'rgncode',
                      value: 'rgndesc',
                      callPlace: 'loader',
                      parameters: {
                        zonecode: {
                          direction: 'IN',
                          type: 'String',
                          value: 0
                        },
                      },
                      uri: 'http://172.20.238.27:9080/dmnDma/fnrDma/srvDocumentUpload',
                      method: 'POST',
                      queryParameters: [],
                      authorization: {
                        noAuth: {},
                      },
                      header: [],
                      body: {
                        'JSON': {
                          "pi_ACTIVITYNO": 0,
                          "pi_CASENO": 159753,
                          "pi_CASENOGEN": 1,
                          "pi_CASETYPE": 3,
                          "pi_DOCDESC": "",
                          "pi_DOCNO": 0,
                          "pi_DOCPAGENUMBER": 1,
                          "pi_DOCTYPENO": 23004,
                          "pi_ENVCODE": 5,
                          "pi_EXECODE": 0,
                          "pi_EXPIREDATE": 0,
                          "pi_FACODE": 3,
                          "pi_FileName": "14021104.pdf",
                          "pi_GROUPCODE": 0,
                          "pi_IBRANCH": 2402,
                          "pi_IDATE": 14021109,
                          "pi_IUSERID": "RAMEZAN",
                          "pi_OLDDOCNO": 0,
                          "pi_OWNERCODE": 428493982,
                          "pi_OWNERTYPE": 1,
                          "pi_PAGENO": 1,
                          "pi_PARNTID": "",
                          "pi_PRODUCTCODE": 254,
                          "pi_ROLECODE": 2,
                          "pi_STATUS": 2,
                          "pi_SUBGROUPCODE": 0,
                          "pi_VERSIONNO": 0,
                          "pi_DataFile": ""
                        }
                      }
                      //   request: {
                      //     requestBody: {
                      //       mobileNo: {
                      //         direction: 'IN',
                      //         type: 'Integer',
                      //       },
                      //       messageText: {
                      //         direction: 'IN',
                      //         type: 'String',
                      //       },
                      //     },
                      //   },
                      //   response: {
                      //     responseBody: {
                      //       error: {
                      //         direction: 'OUT',
                      //         type: 'Integer',
                      //       },
                      //     },
                      //   },
                    },
                  },

                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              lable: 'آخرین روزنامه رسمی شرکت (امضاء داران مجاز اسناد تعهدآور)',
              title: 'rouznameSherkat',
              value: {
                type: 'non-primitive',
                schema: {
                  type: 'file',
                  //  TODO : should be changed
                  docTypeNo: '23004',
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              lable:
                'استعلام مانده بدهی نزد سیستم بانکی (استخراج شده توسط مدیریت شعب)',
              title: 'estelamMandeBedehi',
              value: {
                type: 'non-primitive',
                schema: {
                  type: 'file',
                  //  TODO : should be changed
                  docTypeNo: '23004',
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              lable:
                'اسکن نامه مشتری مبنی براعلام کتبی بدهی تسهیلاتی به سیستم بانکی',
              title: 'scanNameMoshtari',
              value: {
                type: 'non-primitive',
                schema: {
                  type: 'file',
                  //  TODO : should be changed
                  docTypeNo: '23004',
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              lable: 'اسکن آخرین صورت های مالی حسابرسی شده',
              title: 'scanAkharinSourateMali',
              value: {
                type: 'non-primitive',
                schema: {
                  type: 'file',
                  //  TODO : should be changed
                  docTypeNo: '23004',
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              lable:
                'تایید عایدی ناشی از هزینه فایده منابع مشتری (براساس محاسبات انجام شده قبلی درهنگام مذاکره ویا فعلی دربخش هزینه فایده)',
              title: 'taeidAyedi',
              value: {
                type: 'non-primitive',
                schema: {
                  type: 'file',
                  //  TODO : should be changed
                  docTypeNo: '23004',
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              lable:
                'فایل word پیش نویس تفاهم نامه (تنظیم شده براساس مذاکرات ونیاز سنجی های انجام شده از مشتری)',
              title: 'pishnevisTafahomname',
              value: {
                type: 'non-primitive',
                schema: {
                  type: 'file',
                  //  TODO : should be changed
                  docTypeNo: '23004',
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              lable:
                'اسکن فرم های تکمیل شده ۷ گانه انعقاد تفاهم نامه (فرم اول شامل پیش بینی پیش بینی و نظر کمیته اعتباری مدیریت شعب می باشد)',
              title: 'sacanFormHaftgane',
              value: {
                type: 'non-primitive',
                schema: {
                  type: 'file',
                  //  TODO : should be changed
                  docTypeNo: '23004',
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              lable: 'آپلود فایل اسکن شماره حساب های مشتری (ارزی وریالی)',
              title: 'uploadFileScanShomareHesab',
              value: {
                type: 'non-primitive',
                schema: {
                  type: 'file',
                  //  TODO : should be changed
                  docTypeNo: '23004',
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              lable:
                'مشخصات امضاء داران مجاز شرکت و نقطه تماس به همراه شماره تلفن',
              title: 'moshakhasatEmzadaranMojaz',
              value: {
                type: 'non-primitive',
                schema: {
                  type: 'file',
                  //  TODO : should be changed
                  docTypeNo: '23004',
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
        ],
      },
      tafahomState: {
        lable: 'وضعیت تفاهم نامه',
        datasourceName: 'localds',
        schema: 'TAFSCHM',
        menuTitle:'operation',
        multiStepForm: [],
        content: [
          [
            {
              lable: 'وضعیت تفاهم نامه',
              title: 'tafStateCode',
              value: {
                type: 'primitive',
                schema: {
                  type: `Short`,
                  option:'tafState',
                  // enum: ['دردست اقدام', 'بلااقدام', 'نافذ', 'منقضی'],
                  enum:[
                    {
                      key:1,
                      value:'دردست اقدام',
                      enabled:{
                        rule:{
                          // '!=':[{'var':'state.resourceAllocationMethod'},0]
                          '!=':[{'var':'state.tafStateCode'},4]
                        }
                      }
                    },
                    {
                      key:2,
                      value:'بلااقدام',
                      enabled:{
                        rule:{
                          '!=':[{'var':'state.tafStateCode'},4],
                        }
                      }
                    },
                    {
                      key:3,
                      value:'نافذ',
                      enabled:{
                        rule:{
                          '!=':[{'var':'state.tafStateCode'},2],
                        }
                      }
                    },
                    {
                      key:4,
                      value:'منقضی',
                      enabled:{
                        rule:{
                          '!=':[{'var':'state.tafStateCode'},1],
                        }
                      }
                    }
                  ],
                  stateKey: ['tafStateCode','tafStateDescription'],
                  disabled: false,
                  isVisible: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 2,
                },
              },
            },
            {
              lable: 'وضعیت تفاهم نامه',
              title: 'tafStateDescription',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  disabled: true,
                  isVisible: false,
                  isGridLayout: true,
                  largeBreakpointWidth: 2,
                },
              },
            },
            {
              lable: 'تاریخ تغییر وضعیت',
              title: 'date',
              value: {
                type: 'primitive',
                schema: {
                  type: 'Date',
                  disabled: true,
                  isVisible: false,
                  isGridLayout: true,
                  largeBreakpointWidth: 2,
                },
              },
            },
          ],
        ],
      },
      sendToHQ: {
        lable: 'ارسال به اداره کل برنامه ریزی ونظارت اعتباری',
        datasourceName: 'localds',
        schema: 'TAFSCHM',
        menuTitle:'operation',
        multiStepForm: [],
        content: [
          [
            {
              lable: 'شماره مصوبه',
              title: 'seri',
              value: {
                type: 'primitive',
                schema: {
                  type: `String`,
                  option:'sendToHQ',
                  // option:'tafState',
                  // enum: ['دردست اقدام', 'بلااقدام', 'نافذ', 'منقضی'],
                  enum:[
                    {
                      key:1,
                      value:'دردست اقدام',
                      enabled:{
                        rule:{
                          // '!=':[{'var':'state.resourceAllocationMethod'},0]
                          '!=':[{'var':'state.stateCode'},4]
                        }
                      }
                    },
                    {
                      key:2,
                      value:'بلااقدام',
                      enabled:{
                        rule:{
                          '!=':[{'var':'state.stateCode'},4],
                        }
                      }
                    },
                    {
                      key:3,
                      value:'نافذ',
                      enabled:{
                        rule:{
                          '!=':[{'var':'state.stateCode'},2],
                        }
                      }
                    },
                    {
                      key:4,
                      value:'منقضی',
                      enabled:{
                        rule:{
                          '!=':[{'var':'state.stateCode'},1],
                        }
                      }
                    }
                  ],
                  stateKey: ['stateCode','stateDescription'],
                  dataSourceProvider: {
                    storedProcedure: {
                      name: 'getSeriFromTashilat',
                      key: 'rgncode',
                      value: 'rgndesc',
                      callPlace: 'onFormAction',
                      logProcedureCall:true,
                      parameters: {
                        userId: {
                          direction: 'IN',
                          type: 'String',
                        },
                        loanState: {
                          direction: 'IN',
                          type: 'Short',
                        },
                        zoneType: {
                          direction: 'IN',
                          type: 'Short',
                        },
                        numPerson: {
                          direction: 'IN',
                          type: 'Short',
                        },
                        includBalance: {
                          direction: 'IN',
                          type: 'Short',
                        },
                        createDate: {
                          direction: 'IN',
                          type: 'Integer',
                        },
                        expireDate: {
                          direction: 'IN',
                          type: 'Integer',
                        },
                        agentBranchManagement: {
                          direction: 'IN',
                          type: 'Integer',
                        },
                        agentBranch: {
                          direction: 'IN',
                          type: 'Integer',
                        },
                        extCustId: {
                          direction: 'IN',
                          // type: 'Double',
                          type: 'BigDecimal',
                        },
                        fixAmount: {
                          direction: 'IN',
                          // type: 'Double',
                          type: 'BigDecimal',
                        },
                        avg: {
                          direction: 'IN',
                          // type: 'Double',
                          type: 'BigDecimal',
                        },
                        tafCode: {
                          direction: 'IN',
                          type: 'String',
                        },
                        title: {
                          direction: 'IN',
                          type: 'String',
                        },
                        desciption: {
                          direction: 'IN',
                          type: 'String',
                        },
                        error: {
                          direction: 'OUT',
                          type: 'Integer',
                        },
                        seri: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                        },
                      },
                    },
                    restService: {},
                  },
                  disabled: false,
                  isVisible: true,
                  isGridLayout: true,
                  largeBreakpointWidth: 2,
                },
              },
            },
          ],
          [
            {
              lable: 'تاریخ اخذ مصوبه',
              title: 'date',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  isVisible: false,
                  disabled: true,
                  isGridLayout: true,
                  largeBreakpointWidth: 2,
                },
              },
            },
          ],
        ],
      },
      loanState: {
        lable: 'وضعیت اعطای تسهیلات',
        datasourceName: 'localds',
        schema: 'TAFSCHM',
        menuTitle:'operation',
        multiStepForm: [],
        content: [
          [
            //   //  ACTSTS
            //   //  147 is 1 (Enable), 5 is 0 (Disable)
            {
              lable: 'وضعیت اعطای تسهیلات',
              title: 'loanStateCode',
              value: {
                type: 'primitive',
                schema: {
                  type: `Short`,
                  option:'loanState',
                  enum:[
                    {
                      key:0,
                      value:'غیرفعال',
                      // enabled:{
                      //   rule:{
                      //     // '!=':[{'var':'state.resourceAllocationMethod'},0]
                      //     '!=':[{'var':'state.stateCode'},4]
                      //   }
                      // }
                    },
                    {
                      key:1,
                      value:'فعال',
                      // enabled:{
                      //   rule:{
                      //     '!=':[{'var':'state.stateCode'},4],
                      //   }
                      // }
                    },
                  ],
                  dataSourceProvider: {
                    storedProcedure: {
                      name: 'activeDeActiveTashilat',
                      key: 'rgncode',
                      value: 'rgndesc',
                      callPlace: 'onFormAction',
                      logProcedureCall:true,
                      parameters: {
                        userId: {
                          direction: 'IN',
                          type: 'String',
                        },
                        loanState: {
                          direction: 'IN',
                          type: 'Short',
                        },
                        zoneType: {
                          direction: 'IN',
                          type: 'Short',
                        },
                        numPerson: {
                          direction: 'IN',
                          type: 'Short',
                        },
                        includBalance: {
                          direction: 'IN',
                          type: 'Short',
                        },
                        expireDate: {
                          direction: 'IN',
                          type: 'Integer',
                        },
                        branchManagement: {
                          direction: 'IN',
                          type: 'Integer',
                        },
                        agentBranch: {
                          direction: 'IN',
                          type: 'Integer',
                        },
                        extCustId: {
                          direction: 'IN',
                          // type: 'Double',
                          type: 'BigDecimal',
                        },
                        fixAmount: {
                          direction: 'IN',
                          // type: 'Double',
                          type: 'BigDecimal',
                        },
                        seri: {
                          direction: 'IN',
                          type: 'BigDecimal',
                        },
                        description: {
                          direction: 'IN',
                          type: 'String',
                        },
                        comment: {
                          direction: 'IN',
                          type: 'String',
                        },
                        error: {
                          direction: 'OUT',
                          type: 'Integer',
                        },
                      },
                    },
                    restService: {},
                  },
                  stateKey: ['loanStateCode','loanStateDescription'],
                  disabled: false,
                  isVisible: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 2,
                },
              },
            },
            {
              lable: 'وضعیت اعطای تسهیلات',
              title: 'loanStateDescription',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  disabled: true,
                  isVisible: false,
                  isGridLayout: true,
                  largeBreakpointWidth: 2,
                },
              },
            },
            {
              lable: 'تاریخ تغییر وضعیت',
              title: 'date',
              value: {
                type: 'primitive',
                schema: {
                  type: 'Date',
                  disabled: true,
                  isVisible: false,
                  isGridLayout: true,
                  largeBreakpointWidth: 2,
                },
              },
            },
          ],
        ],
      },
      userActivity: {
        lable: 'لاگ فعالیت های کاربر',
        datasourceName: 'localds',
        schema: 'TAFSCHM',
        menuTitle:'report',
        multiStepForm: [],
        content: [
          [
            {
              lable: 'نام کاربر',
              title: 'user',
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  isGridLayout: true,
                  largeBreakpointWidth: 2,
                },
              },
            },
            {
              lable: 'تاریخ',
              title: 'date',
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  isGridLayout: true,
                  largeBreakpointWidth: 2,
                },
              },
            },
          ],
          [
            {
              lable: 'موضوع',
              title: 'subject',
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  isGridLayout: true,
                  largeBreakpointWidth: 2,
                },
              },
            },
            {
              lable: 'عملیات',
              title: 'operation',
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  isGridLayout: true,
                  largeBreakpointWidth: 2,
                },
              },
            },
          ],
          [
            {
              lable: 'مقادیر',
              title: 'value',
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  size: { maxValue: 1000 },
                  lines: 5,
                  isGridLayout: true,
                  largeBreakpointWidth: 2,
                },
              },
            },
          ]
        ],
      },
      retrievedAccount: {
        lable: 'حساب های بازیابی شده',
        datasourceName: 'localds',
        schema: 'TAFSCHM',
        menuTitle:'profile',
        multiStepForm: [],
        content: [
          [
            {
              lable: 'شماره حساب',
              title: 'extAccNo',
              value: {
                type: 'primitive',
                schema: {
                  type: 'BigDecimal',
                  precision: 10,
                  scale: 0,
                  option: 'textWithObjectDataSourceAndOnBlurEvent',
                  onBlurDataSourceProvider: {
                    storedProcedure: {
                      name: 'accountDetail',
                      // key: 'intCustId',
                      // value: 'po_accNo',
                      callPlace: 'onBlur',
                      parameters: {
                        extAccNoVar: {
                          direction: 'IN',
                          type: 'BigDecimal',
                          //  read from one of state variables
                          valueProvider: 'extAccNo',
                        },
                      },
                    },
                    restService: {}
                  },
                  isGridLayout: true,
                  largeBreakpointWidth: 2,
                },
              },
            },
            {
              lable: 'شماره داخلی حساب',
              title: 'accNo',
              value: {
                type: 'primitive',
                schema: {
                  type: 'BigDecimal',
                  precision: 10,
                  scale: 0,
                  option: 'textWithObjectDataSource',
                  dataSourceProvider: {
                    systemObject: {
                      objectName:{
                        //  jsonLogic standard format
                        rule:{
                          'var':'extAccNoOnBlurOutput.accNo'
                        }
                      }
                    }
                  },
                  isVisible: false,
                  disabled:true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              //  accDesc
              lable: 'نوع حساب',
              title: 'accTypeTitle',
              value: {
                type: 'primitive',
                schema: {
                  type: `String`,
                  option: 'textWithObjectDataSource',
                  dataSourceProvider: {
                    systemObject: {
                      objectName:{
                        //  jsonLogic standard format
                        rule:{
                          'var':'extAccNoOnBlurOutput.accDesc'
                        }
                      }
                    }
                  },
                  disabled:true,
                  isGridLayout: true,
                  largeBreakpointWidth: 3,
                },
              },
            },
            {
              //  vaziat
              lable: 'وضعیت حساب',
              title: 'status',
              value: {
                type: 'primitive',
                schema: {
                  type: `String`,
                  enum: ['غیرفعال', 'باز', 'راکد','بسته'],
                  // option: 'select',
                  option: 'selectWithObjectDataSource',
                  dataSourceProvider: {
                    systemObject: {
                      objectName:{
                        //  jsonLogic standard format
                        rule:{
                          'var':'extAccNoOnBlurOutput.statusx'
                        }
                      }
                    }
                  },
                  disabled:true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              lable: 'تاریخ افتتاح',
              title: 'createDate',
              value: {
                type: 'primitive',
                schema: {
                  type: `Integer`,
                  option: 'textWithObjectDataSource',
                  dataSourceProvider: {
                    systemObject: {
                      objectName:{
                        //  jsonLogic standard format
                        rule:{
                          'var':'extAccNoOnBlurOutput.createDate'
                        }
                      }
                    }
                  },
                  disabled:true,
                  isVisible: false,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'موجودی حساب',
              title: 'balance',
              value: {
                type: 'primitive',
                schema: {
                  type: `BigDecimal`,
                  precision: 15,
                  scale: 0,
                  option: 'textWithObjectDataSource',
                  dataSourceProvider: {
                    systemObject: {
                      objectName:{
                        //  jsonLogic standard format
                        rule:{
                          'var':'extAccNoOnBlurOutput.balance'
                        }
                      }
                    }
                  },
                  disabled:true,
                  isVisible:false,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              //  AVG1
              lable: 'معدل حساب',
              title: 'average',
              value: {
                type: 'primitive',
                schema: {
                  type: `BigDecimal`,
                  precision: 18,
                  scale: 0,
                  // option: 'textWithObjectDataSource',
                  // dataSourceProvider: {
                  //   systemObject: {
                  //     objectName:{
                  //       //  jsonLogic standard format
                  //       rule:{
                  //         'var':'extAccNoOnBlurOutput.accNo'
                  //       }
                  //     }
                  //   }
                  // },
                  disabled:true,
                  isVisible:false,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: '',
              title: 'furm',
              value: {
                type: 'primitive',
                schema: {
                  type: `BigDecimal`,
                  precision: 18,
                  scale: 0,
                  isVisible:false,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              // titleX
              lable: 'نام شعبه',
              title: 'branchName',
              value: {
                type: `primitive`,
                schema: {
                  type: `String`,
                  option: 'textWithObjectDataSource',
                  dataSourceProvider: {
                    systemObject: {
                      objectName:{
                        //  jsonLogic standard format
                        rule:{
                          'var':'extAccNoOnBlurOutput.titlex'
                        }
                      }
                    }
                  },
                  disabled: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              //  branch
              lable: 'کد شعبه',
              title: 'branchCode',
              value: {
                type: `primitive`,
                schema: {
                  type: `Integer`,
                  option: 'textWithObjectDataSource',
                  dataSourceProvider: {
                    systemObject: {
                      objectName:{
                        //  jsonLogic standard format
                        rule:{
                          'var':'extAccNoOnBlurOutput.branch'
                        }
                      }
                    }
                  },
                  disabled: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              lable: 'نام صاحب حساب',
              title: 'ownerName',
              value: {
                type: 'primitive',
                schema: {
                  type: `String`,
                  // option: 'textWithOwnDataSource',
                  option: 'textWithObjectDataSource',
                  dataSourceProvider: {
                    systemObject: {
                      objectName:{
                        //  jsonLogic standard format
                        rule:{
                          'var':'extAccNoOnBlurOutput.ownerName'
                        }
                      }
                    }
                  },
                  disabled: true,
                  isGridLayout: true,
                  largeBreakpointWidth: 2,
                },
              },
            },
            {
              lable: 'شماره مشتری',
              title: 'extCustId',
              value: {
                type: 'primitive',
                schema: {
                  type: `BigDecimal`,
                  precision: 12,
                  scale: 0,
                  option: 'textWithObjectDataSource',
                  dataSourceProvider: {
                    systemObject: {
                      objectName:{
                        //  jsonLogic standard format
                        rule:{
                          'var':'extAccNoOnBlurOutput.extCustId'
                        }
                      }
                    }
                  },
                  disabled:true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              lable: 'کدملی',
              title: 'nationalCode',
              value: {
                type: 'primitive',
                schema: {
                  type: `BigDecimal`,
                  precision: 12,
                  scale: 0,
                  option: 'textWithObjectDataSource',
                  dataSourceProvider: {
                    systemObject: {
                      objectName:{
                        //  jsonLogic standard format
                        rule:{
                          'var':'extAccNoOnBlurOutput.nationalCode'
                        }
                      }
                    }
                  },
                  numberFormat:{
                    locale:'Fa-IR',
                    // options:{
                      // style:'decimal',
                      // signDisplay:'always'
                    // }
                  },
                  disabled: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: '',
              title: '',
              value: {
                type: 'emptyCell',
                schema: {
                  type: 'emptyCell',
                },
              },
            },
          ],
          [
            {
              lable: 'کد نوع حساب',
              title: 'accTypeCode',
              value: {
                type: 'primitive',
                schema: {
                  type: `Short`,
                  option: 'textWithObjectDataSource',
                  dataSourceProvider: {
                    systemObject: {
                      objectName:{
                        //  jsonLogic standard format
                        rule:{
                          'var':'extAccNoOnBlurOutput.accType'
                        }
                      }
                    }
                  },
                  isVisible:false,
                  disabled:true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              // statusX
              //  Integer value of Vaziat
              lable: 'کد وضعیت حساب',
              title: 'statusCode',
              value: {
                type: 'primitive',
                schema: {
                  type: `Short`,
                  option: 'textWithObjectDataSource',
                  dataSourceProvider: {
                    systemObject: {
                      objectName:{
                        //  jsonLogic standard format
                        rule:{
                          'var':'extAccNoOnBlurOutput.statusx'
                        }
                      }
                    }
                  },
                  isVisible: false,
                  disabled:true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              lable: 'شماره داخلی مشتری',
              title: 'intCustId',
              value: {
                type: 'primitive',
                schema: {
                  type: `BigDecimal`,
                  precision: 12,
                  scale: 0,
                  option: 'textWithObjectDataSource',
                  dataSourceProvider: {
                    systemObject: {
                      objectName:{
                        //  jsonLogic standard format
                        rule:{
                          'var':'extAccNoOnBlurOutput.intCustId'
                        }
                      }
                    }
                  },
                  isVisible: false,
                  disabled:true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'تاریخ تغییر وضعیت',
              title: 'statusDate',
              value: {
                type: 'primitive',
                schema: {
                  type: 'Integer',
                  option: 'textWithObjectDataSource',
                  dataSourceProvider: {
                    systemObject: {
                      objectName:{
                        //  jsonLogic standard format
                        rule:{
                          'var':'extAccNoOnBlurOutput.statusDate'
                        }
                      }
                    }
                  },
                  isVisible:false,
                  disabled:true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
              {
              //  timeStamp
              lable: 'انتقال به لیست حساب های تفاهم نامه',
              title: 'transferToAccount',
              value: {
                type: 'primitive',
                schema: {
                  type: `Short`,
                  isVisible: false,
                  disabled: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          //   {
          //     //  timeStamp
          //     lable: 'مهرزمانی',
          //     title: 'timeX',
          //     value: {
          //       type: 'primitive',
          //       schema: {
          //         type: `Date`,
          //         isGridLayout: false,
          //         largeBreakpointWidth: 1,
          //       },
          //     },
          //   },
          ],
        ],
      },
      dashboardMasterRpt: {
        lable: 'داشبورد',
        datasourceName: 'localds',
        // schema: 'TAFSCHM',
        schema: 'TAFSCHM',
        menuTitle:'home',
        multiStepForm: [],
        content: [
          [
            {
              lable: 'ردیف ',
              title: 'dashboardMasterRpt',
              // step: 0,
              value: {
                type: 'non-primitive',
                schema: {
                  type: 'String',
                  // type: 'BigDecimal',
                  // precision: 31,
                  // scale: 0,
                  // isIndex: true,
                  // isPrimaryKey: true,
                  // primaryKeyStrategy: 'IDENTITY',
                  // type: 'Integer',
                  // size: { minValue: 0, maxValue: 10 },
                  option: 'report',
                  onRowClickRoutePath: 'tafahomInformations/report/dashboardDetailRpts',
                  dataSourceProvider: {
                    storedProcedure: {
                      // name: 'fillDashboard',
                      name: 'listAbstractDashboard',
                      key: 'rgncode',
                      value: 'rgndesc',
                      callPlace: 'onFormLoader',
                      parameters: {
                        error: {
                          direction: 'OUT',
                          type: 'Integer',
                        },
                      },
                      resultSet: {
                        // lstTypeCode: {
                        //   direction: 'OUT',
                        //   type: 'Integer',
                        // },
                        lstType: {
                          direction: 'OUT',
                          type: 'String',
                          title: "وضعیت",
                          percent: 10,
                          content: null,
                        },
                        cnt: {
                          direction: 'OUT',
                          type: 'Integer',
                          title: "تعداد",
                          percent: 5,
                          content: null,
                        },
                        // spclApprvlAvgAmnt: {
                        //   direction: 'OUT',
                        //   type: 'BigDecimal',
                        // },
                        // spclApprvlFxdAmnt: {
                        //   direction: 'OUT',
                        //   type: 'BigDecimal',
                        // },
                        // cptlDbtAmnt: {
                        //   direction: 'OUT',
                        //   type: 'BigDecimal',
                        // },
                        sumPropslTypCount: {
                          direction: 'OUT',
                          type: 'Integer',
                          title: "تعداد تخصیصی",
                          percent: 10,
                          content: null,
                        },
                        sumCntrctAmntSum: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "مبلغ پرداخت شده",
                          percent: 12,
                          content: null,
                        },
                        // sumJari: {
                        //   direction: 'OUT',
                        //   type: 'BigDecimal',
                        // },
                        // sumGharz: {
                        //   direction: 'OUT',
                        //   type: 'BigDecimal',
                        // },
                        // sumShort: {
                        //   direction: 'OUT',
                        //   type: 'BigDecimal',
                        // },
                        // sumLong: {
                        //   direction: 'OUT',
                        //   type: 'BigDecimal',
                        // },
                        // sumJariCnt: {
                        //   direction: 'OUT',
                        //   type: 'Integer',
                        // },
                        // sumGharzCnt: {
                        //   direction: 'OUT',
                        //   type: 'Integer',
                        // },
                        // sumShortCnt: {
                        //   direction: 'OUT',
                        //   type: 'Integer',
                        // },
                        // sumLongCnt: {
                        //   direction: 'OUT',
                        //   type: 'Integer',
                        // },
                        sumAvgJari: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "منابع جاری",
                          percent: 12,
                          content: null,
                        },
                        sumAvgGharz: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "منابع قرض الحسنه",
                          percent: 12,
                          content: null,
                        },
                        sumAvgShort: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "منابع کوتاه مدت",
                          percent: 12,
                          content: null,
                        },
                        sumAvgLong: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "منابع بلند مدت",
                          percent: 15,
                          content: null,
                        },
                      },
                    },
                    restService: {}
                  },
                  showBackIcon:false,
                  // pageSize:20,
                  isVisible: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
        ],
      },
      search: {
        lable: 'جستجو',
        datasourceName: 'localds',
        schema: 'TAFSCHM',
        menuTitle:'home',
        multiStepForm: [],
        content:[
          [
            {
              lable: 'عنوان تفاهم نامه',
              title: 'title',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  // TASSHMA.
                  size: { minValue: 0, maxValue: 50 },
                  // isUnique: true,
                  isGridLayout: true,
                  largeBreakpointWidth: 3,
                },
              },
            },
            {
              lable: 'وضعیت تفاهم نامه',
              title: 'tafState',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'Short',
                  enum:[
                    {
                      key:1,
                      value: ['دردست اقدام'],
                    },
                    {
                      key:2,
                      value: ['بلااقدام'],
                    },
                    {
                      key:3,
                      value: ['نافذ'],
                    },
                    {
                      key:4,
                      value: ['منقضی'],
                    },
                  ],
                  stateKey: ['tafState'],
                  option: 'selectWithAO',
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              lable: 'کدتفاهم نامه',
              title: 'tafCodee',
              step: 1,
              value: {
                type: 'primitive',
                schema: {
                  // type: 'String',
                  type: 'BigDecimal',
                  precision: 18,
                  scale: 0,
                  // isIndex: true,
                  // isVirtualPK: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 2,
                },
              },
            },
            {
              lable: 'شماره مصوبه',
              title: 'seri',
              step: 1,
              value: {
                type: 'primitive',
                schema: {
                  type: 'BigDecimal',
                  precision: 18,
                  scale: 0,
                  isIndex: false,
                  isVirtualPK: false,
                  isGridLayout: false,
                  largeBreakpointWidth: 2,
                },
              },
            },
          ],
          [
            {
              //  MagentBranch
              lable: 'مدیریت شعب',
              title: 'branchManagement',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'Integer',
                  option: 'textWithResultSetDataSourceAndOnBlurEvent',
                  // dataSourceProvider: {
                  //   storedProcedure: {
                  //     name: 'bMOU',
                  //     // select element - option key
                  //     key: 'orgunitid',
                  //     // select element - option value
                  //     value: 'orgunitdesc',
                  //     callPlace: 'onFormLoader',
                  //     parameters: {
                  //       pi_branch: {
                  //         direction: 'IN',
                  //         type: 'Integer',
                  //         valueProvider: {
                  //           rule: {'num':0}
                  //         },
                  //       },
                  //       pi_flag: {
                  //         direction: 'IN',
                  //         type: 'Integer',
                  //         valueProvider: {
                  //           rule: {'num':0}
                  //         },
                  //       },
                  //     },
                  //   },
                  //   restService: {},
                  // },
                  // onBlurDataSourceProvider: {
                  //   storedProcedure: {
                  //     name: 'bMOU',
                  //     key: 'orgunitid',
                  //     value: 'orgunitdesc',
                  //     callPlace: 'onBlur',
                  //     parameters: {
                  //       pi_branch: {
                  //         direction: 'IN',
                  //         type: 'Integer',
                  //         valueProvider: {
                  //           rule:{
                  //           'var':'branchManagement.orgunitid'
                  //           }
                  //         },
                  //       },
                  //       pi_flag: {
                  //         direction: 'IN',
                  //         type: 'Integer',
                  //         valueProvider: {
                  //           rule: {'num':1}
                  //         },
                  //       },
                  //     },
                  //   },
                  //   restService: {}
                  // },
                  dataSourceProvider: {
                    storedProcedure: {
                      name:'orgUnitChart',
                      key: 'branch',
                      value:'title',
                      callPlace: 'onFormLoader',
                      parameters: {
                        branch: {
                          direction: 'IN',
                          type: 'Integer',
                          valueProvider: {
                            rule: {'num':0}
                          }
                        },
                        flag: {
                          direction: 'IN',
                          type: 'Integer',
                          valueProvider: {
                            rule: {'num':0}
                          }
                        }
                      }
                      // name: 'regionList',
                      // key: 'rgncode',
                      // value: 'rgndesc',
                      // callPlace: 'onFormLoader',
                      // parameters: {
                      //   zonecode: {
                      //     direction: 'IN',
                      //     type: 'String',
                      //     valueProvider: {
                      //       rule: {'num':0}
                      //     }
                      //     // rule:{
                      //     //   'var':'extCustIdDSProviderOutput.ownerName'
                      //     // }
                      //   },
                      // },
                    },
                    restService: {},
                  },
                  onBlurDataSourceProvider: {
                    storedProcedure: {
                      name:'orgUnitChart',
                      key: 'branch',
                      value:'title',
                      callPlace: 'onFormLoader',
                      parameters: {
                        branch: {
                          direction: 'IN',
                          type: 'Integer',
                          valueProvider: {
                            rule: {
                              'var':'branchManagement.branch'
                            }
                          }
                        },
                        flag: {
                          direction: 'IN',
                          type: 'Integer',
                          valueProvider: {
                            rule: {'num':1}
                          }
                        }
                      }
                      // name: 'branchList',
                      // key: 'branch',
                      // value: 'titlex',
                      // callPlace: 'onBlur',
                      // parameters: {
                      //   rgncode: {
                      //     direction: 'IN',
                      //     type: 'Integer',
                      //     valueProvider: {
                      //       rule:{
                      //       'var':'branchManagement.rgncode'
                      //       }
                      //     }
                      //   },
                      // },
                    },
                    restService: {}
                    // storedProcedure: {
                    //   name: 'extCustNo2NameNew',
                    //   // key: 'intCustId',
                    //   value: 'ownerName',
                    //   callPlace: 'onBlur',
                    //   parameters: {
                    //     extCustId: {
                    //       direction: 'IN',
                    //       type: 'BigDecimal',
                    //       //  read from one of state variables
                    //       valueProvider: 'extCustId',
                    //     },
                    //   },
                    // },
                    // restService: {}
                  },
                  // isVisible: {
                  //   rule:{
                  //     'or':[
                  //       {'==':[{'var':'state.tafScope'},0]},
                  //       {'==':[{'var':'state.tafScope'},1]}
                  //     ],
                  //   }
                  // },
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              //  AgentBranch
              lable: 'شعبه عامل',
              title: 'branch',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'Integer',
                  // size: { minValue: 0, maxValue: 10 },
                  option: 'textWithResultSetDataSource',
                  dataSourceProvider: {
                    storedProcedure: {
                      name: 'branchList',
                      key: 'branch',
                      value: 'title',
                      callPlace: 'form',
                      parameters: {
                        rgncode: {
                          direction: 'IN',
                          type: 'Integer',
                          value: 'branchManagement'
                        },
                      },
                    },
                  //   restService: {}
                    // systemObject: {
                    //   //  jsonLogic standard format
                    //   objectName:{
                    //     rule:{
                    //       'var':'branchManagementOnBlurOutput'
                    //     }
                    //   },
                    //   // select element - option key
                    //   key: 'orgunitid',
                    //   // select element - option key
                    //   value: 'orgunitdesc',
                    // }
                  },
                  // isVisible: {
                  //   rule:{
                  //     'or':[
                  //       {'==':[{'var':'state.tafScope'},0]},
                  //       {'==':[{'var':'state.tafScope'},1]}
                  //     ],
                  //   // '!=':[{'var':'state.tafScope'},3]
                  //   }
                  // },
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              //  Integer
              lable: 'تاریخ انعقاد',
              title: 'startDate',
              step: 1,
              value: {
                type: 'primitive',
                schema: {
                  type: 'Date',
                  position: 'bottom',
                  // size: { minValue: 1, maxValue: 10 },
                  isGridLayout: true,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              //  type: Integer
              lable: 'تاریخ انقضاء',
              title: 'expireDate',
              step: 1,
              value: {
                type: 'primitive',
                schema: {
                  type: 'Date',
                  position: 'bottom',
                  // size: { minValue: 1, maxValue: 10 },
                  isGridLayout: true,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            /* {
              lable: 'ردیف ',
              title: 'uniqueCode',
              step: 0,
              value: {
                type: 'non-primitive',
                schema: {
                  type: 'String',
                  option: 'report',
                  onRowClickRoutePath: 'tafahomInformations/report/dashboardDetailRpts',
                  dataSourceProvider: {
                    storedProcedure: {
                      // name: 'fillDashboard',
                      name: 'listDetail',
                      key: 'rgncode',
                      value: 'rgndesc',
                      callPlace: 'onFormLoader',
                      parameters: {
                        error: {
                          direction: 'OUT',
                          type: 'Integer',
                        },
                        tafCode: {
                          direction: 'IN',
                          type: 'BigDecimal',
                          valueProvider: {
                            rule: {'num':0}
                          }
                        },
                        tafTitle: {
                          direction: 'IN',
                          type: 'String',
                          valueProvider: {
                            rule: {'num':0}
                          }
                        },
                        customerName: {
                          direction: 'IN',
                          type: 'String',
                          valueProvider: {
                            rule: {'num':0}
                          }
                        },
                        extCustId: {
                          direction: 'IN',
                          type: 'BigDecimal',
                          valueProvider: {
                            rule: {'num':0}
                          }
                        },
                        startDateAz: {
                          direction: 'IN',
                          type: 'Integer',
                          valueProvider: {
                            rule: {'num':0}
                          }
                        },
                        expireDateTa: {
                          direction: 'IN',
                          type: 'Integer',
                          valueProvider: {
                            rule: {'num':0}
                          }
                        },
                        seri: {
                          direction: 'IN',
                          type: 'String',
                          valueProvider: {
                            rule: {'num':0}
                          }
                        },
                        branchManagement: {
                          direction: 'IN',
                          type: 'String',
                          valueProvider: {
                            rule: {'num':0}
                          }
                        },
                        branch: {
                          direction: 'IN',
                          type: 'String',
                          valueProvider: {
                            rule: {'num':0}
                          }
                        },
                        expertId: {
                          direction: 'IN',
                          type: 'Integer',
                          valueProvider: {
                            rule: {'num':0}
                          }
                        },
                        lstTypeCode: {
                          direction: 'IN',
                          type: 'Integer',
                          valueProvider: {
                            // rule: {'num':1}
                            rule: {
                              'var':'params.lstTypeCode'
                            }
                          }
                        },
                        filterCode: {
                          direction: 'IN',
                          type: 'Integer',
                          valueProvider: {
                            rule: {'num':0}
                          }
                        },
                      },
                      resultSet: {
                        // lstTypeCode: {
                        //   direction: 'OUT',
                        //   type: 'Integer',
                        // },
                        expertIdTitle: {
                          direction: 'OUT',
                          type: 'String',
                          title: "کارشناس",
                          percent: 8,
                          content: null,
                        },
                        tafCode: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "شماره تفاهم نامه",
                          percent: 10,
                          content: null,
                        },
                        title: {
                          direction: 'OUT',
                          type: 'String',
                          title: "عنوان تفاهم نامه",
                          percent: 12,
                          content: null,
                        },
                        expireDate: {
                          direction: 'OUT',
                          type: 'Integer',
                          title: "تاریخ انتقضاء",
                          percent: 8,
                          content: null,
                        },
                        sumCntrctAmntSum: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "مبلغ پرداخت شده",
                          percent: 12,
                          content: null,
                        },
                        sumPrpslTypeCount: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "تعداد پرداختی",
                          percent: 12,
                          content: null,
                        },
                        sumAvgAmnt: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "جمع منابع",
                          percent: 12,
                          content: null,
                        },
                        spclApprvlAvgAmnt: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "معدل حساب شده",
                          percent: 12,
                          content: null,
                        },
                        seri: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "شماره مصوبه",
                          percent: 12,
                          content: null,
                        },
                      },
                    },
                    restService: {}
                  },
                  isVisible: false,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            }, */

            // {
            //   lable: 'ردیف ',
            //   title: 'uniqueCode',
            //   step: 0,
            //   value: {
            //     type: 'non-primitive',
            //     schema: {
            //       type: 'String',
            //       // type: 'BigDecimal',
            //       // precision: 31,
            //       // scale: 0,
            //       // isIndex: true,
            //       // isPrimaryKey: true,
            //       // primaryKeyStrategy: 'IDENTITY',
            //       // type: 'Integer',
            //       // size: { minValue: 0, maxValue: 10 },
            //       option: 'searchReport',
            //       // onRowClickRoutePath: 'tafahomInformations/report/dashboardDetailRpts',
            //       onRowClickRoutePath: 'tafahomInformations/report/searchRpts',
            //       dataSourceProvider: {
            //         storedProcedure: {
            //           // name: 'fillDashboard',
            //           name: 'listDetail',
            //           key: 'rgncode',
            //           value: 'rgndesc',
            //           callPlace: 'onFormLoader',
            //           parameters: {
            //             error: {
            //               direction: 'OUT',
            //               type: 'Integer',
            //             },
            //             tafCode: {
            //               direction: 'IN',
            //               type: 'BigDecimal',
            //               valueProvider: {
            //                 rule: {'num':0}
            //               }
            //             },
            //             tafTitle: {
            //               direction: 'IN',
            //               type: 'String',
            //               valueProvider: {
            //                 rule: {'num':0}
            //               }
            //             },
            //             customerName: {
            //               direction: 'IN',
            //               type: 'String',
            //               valueProvider: {
            //                 rule: {'num':0}
            //               }
            //             },
            //             extCustId: {
            //               direction: 'IN',
            //               type: 'BigDecimal',
            //               valueProvider: {
            //                 rule: {'num':0}
            //               }
            //             },
            //             startDateAz: {
            //               direction: 'IN',
            //               type: 'Integer',
            //               valueProvider: {
            //                 rule: {'num':0}
            //               }
            //             },
            //             expireDateTa: {
            //               direction: 'IN',
            //               type: 'Integer',
            //               valueProvider: {
            //                 rule: {'num':0}
            //               }
            //             },
            //             seri: {
            //               direction: 'IN',
            //               type: 'String',
            //               valueProvider: {
            //                 rule: {'num':0}
            //               }
            //             },
            //             branchManagement: {
            //               direction: 'IN',
            //               type: 'String',
            //               valueProvider: {
            //                 rule: {'num':0}
            //               }
            //             },
            //             branch: {
            //               direction: 'IN',
            //               type: 'String',
            //               valueProvider: {
            //                 rule: {'num':0}
            //               }
            //             },
            //             expertId: {
            //               direction: 'IN',
            //               type: 'Integer',
            //               valueProvider: {
            //                 rule: {'num':0}
            //               }
            //             },
            //             lstTypeCode: {
            //               direction: 'IN',
            //               type: 'Integer',
            //               valueProvider: {
            //                 // rule: {'num':1}
            //                 rule: {
            //                   'var':'0'
            //                 }
            //               }
            //             },
            //             filterCode: {
            //               direction: 'IN',
            //               type: 'Integer',
            //               valueProvider: {
            //                 rule: {'num':0}
            //               }
            //             },
            //           },
            //           resultSet: {
            //             // lstTypeCode: {
            //             //   direction: 'OUT',
            //             //   type: 'Integer',
            //             // },
            //             expertIdTitle: {
            //               direction: 'OUT',
            //               type: 'String',
            //               title: "کارشناس",
            //               percent: 8,
            //               content: null,
            //             },
            //             tafCode: {
            //               direction: 'OUT',
            //               type: 'BigDecimal',
            //               title: "شماره تفاهم نامه",
            //               percent: 10,
            //               content: null,
            //             },
            //             title: {
            //               direction: 'OUT',
            //               type: 'String',
            //               title: "عنوان تفاهم نامه",
            //               percent: 12,
            //               content: null,
            //             },
            //             expireDate: {
            //               direction: 'OUT',
            //               type: 'Integer',
            //               title: "تاریخ انتقضاء",
            //               percent: 8,
            //               content: null,
            //             },
            //             sumCntrctAmntSum: {
            //               direction: 'OUT',
            //               type: 'BigDecimal',
            //               title: "مبلغ پرداخت شده",
            //               percent: 12,
            //               content: null,
            //             },
            //             sumPrpslTypeCount: {
            //               direction: 'OUT',
            //               type: 'BigDecimal',
            //               title: "تعداد پرداختی",
            //               percent: 12,
            //               content: null,
            //             },
            //             sumAvgAmnt: {
            //               direction: 'OUT',
            //               type: 'BigDecimal',
            //               title: "جمع منابع",
            //               percent: 12,
            //               content: null,
            //             },
            //             spclApprvlAvgAmnt: {
            //               direction: 'OUT',
            //               type: 'BigDecimal',
            //               title: "معدل حساب شده",
            //               percent: 12,
            //               content: null,
            //             },
            //             seri: {
            //               direction: 'OUT',
            //               type: 'BigDecimal',
            //               title: "معدل حساب شده",
            //               percent: 12,
            //               content: null,
            //             },
            //           },
            //         },
            //         restService: {}
            //       },
            //       isVisible: true,
            //       isGridLayout: false,
            //       largeBreakpointWidth: 1,
            //     },
            //   },
            // },
          ]
        ]
      },
      dashboardDetailRpt: {
        lable: 'داشبورد',
        datasourceName: 'localds',
        // schema: 'TAFSCHM',
        schema: 'TAFSCHM',
        menuTitle:'report',
        multiStepForm: [],
        content: [
          [
            {
              lable: 'ردیف ',
              title: 'uniqueCode',
              step: 0,
              value: {
                type: 'non-primitive',
                schema: {
                  type: 'String',
                  // type: 'BigDecimal',
                  // precision: 31,
                  // scale: 0,
                  // isIndex: true,
                  // isPrimaryKey: true,
                  // primaryKeyStrategy: 'IDENTITY',
                  // type: 'Integer',
                  // size: { minValue: 0, maxValue: 10 },
                  option: 'report',
                  showBackIcon:true,
                  onRowClickRoutePath: 'tafahomInformations/report/dashboardDetailRpts',
                  dataSourceProvider: {
                    storedProcedure: {
                      // name: 'fillDashboard',
                      name: 'listDetail',
                      key: 'rgncode',
                      value: 'rgndesc',
                      callPlace: 'onFormLoader',
                      parameters: {
                        error: {
                          direction: 'OUT',
                          type: 'Integer',
                        },
                        tafCode: {
                          direction: 'IN',
                          type: 'BigDecimal',
                          valueProvider: {
                            rule: {'num':0}
                          }
                        },
                        tafTitle: {
                          direction: 'IN',
                          type: 'String',
                          valueProvider: {
                            rule: {'num':0}
                          }
                        },
                        customerName: {
                          direction: 'IN',
                          type: 'String',
                          valueProvider: {
                            rule: {'num':0}
                          }
                        },
                        extCustId: {
                          direction: 'IN',
                          type: 'BigDecimal',
                          valueProvider: {
                            rule: {'num':0}
                          }
                        },
                        startDateAz: {
                          direction: 'IN',
                          type: 'Integer',
                          valueProvider: {
                            rule: {'num':0}
                          }
                        },
                        expireDateTa: {
                          direction: 'IN',
                          type: 'Integer',
                          valueProvider: {
                            rule: {'num':0}
                          }
                        },
                        seri: {
                          direction: 'IN',
                          type: 'String',
                          valueProvider: {
                            rule: {'num':0}
                          }
                        },
                        branchManagement: {
                          direction: 'IN',
                          type: 'String',
                          valueProvider: {
                            rule: {'num':0}
                          }
                        },
                        branch: {
                          direction: 'IN',
                          type: 'String',
                          valueProvider: {
                            rule: {'num':0}
                          }
                        },
                        expertId: {
                          direction: 'IN',
                          type: 'Integer',
                          valueProvider: {
                            rule: {'num':0}
                          }
                        },
                        lstTypeCode: {
                          direction: 'IN',
                          type: 'Integer',
                          valueProvider: {
                            // rule: {'num':1}
                            rule: {
                              'var':'params.lstTypeCode'
                            }
                          }
                        },
                        filterCode: {
                          direction: 'IN',
                          type: 'Integer',
                          valueProvider: {
                            rule: {'num':0}
                          }
                        },
                      },
                      resultSet: {
                        // lstTypeCode: {
                        //   direction: 'OUT',
                        //   type: 'Integer',
                        // },
                        expertIdTitle: {
                          direction: 'OUT',
                          type: 'String',
                          title: "کارشناس",
                          percent: 8,
                          content: null,
                        },
                        tafCode: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "شماره تفاهم نامه",
                          percent: 10,
                          content: null,
                        },
                        title: {
                          direction: 'OUT',
                          type: 'String',
                          title: "عنوان تفاهم نامه",
                          percent: 12,
                          content: null,
                        },
                        expireDate: {
                          direction: 'OUT',
                          type: 'Integer',
                          title: "تاریخ انتقضاء",
                          percent: 8,
                          content: null,
                        },
                        sumCntrctAmntSum: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "مبلغ پرداخت شده",
                          percent: 12,
                          content: null,
                        },
                        sumPrpslTypeCount: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "تعداد پرداختی",
                          percent: 12,
                          content: null,
                        },
                        sumAvgAmnt: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "جمع منابع",
                          percent: 12,
                          content: null,
                        },
                        spclApprvlAvgAmnt: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "معدل حساب شده",
                          percent: 12,
                          content: null,
                        },
                        seri: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "شماره مصوبه",
                          percent: 12,
                          content: null,
                        },
                      },
                    },
                    restService: {}
                  },
                  isVisible: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
        ],
      },
      commitmentsRpt: {
        lable: 'گزارش تعهدات مشتری',
        datasourceName: 'localds',
        schema: 'TAFSCHM',
        menuTitle:'report',
        multiStepForm: [],
        content: [
          [
            {
              lable: 'کاربر گزارش تعهدات',
              title: 'commitmentsReportUser',
              step: 0,
              value: {
                type: 'non-primitive',
                schema: {
                  // type: 'Report',
                  type: 'String',
                  // type: 'BigDecimal',
                  // precision: 31,
                  // scale: 0,
                  // isIndex: true,
                  // isPrimaryKey: true,
                  // primaryKeyStrategy: 'IDENTITY',
                  // type: 'Integer',
                  // size: { minValue: 0, maxValue: 10 },
                  option: 'commitmentsReport',
                  onRowClickRoutePath: 'tafahomInformations/report/commitmentsRpts',
                  dataSourceProvider: {
                    storedProcedure: {
                      name: 'rialLetterOfGuarantie',
                      // name: 'rialLetterOfCredit',
                      // name: 'arzLetterOfGuarantie',
                      // name: 'arzLetterOfCredit',
                      key: 'rgncode',
                      value: 'rgndesc',
                      callPlace: 'onBlur',
                      parameters: {
                        error: {
                          direction: 'OUT',
                          type: 'Integer',
                        },
                        tafCode: {
                          direction: 'IN',
                          type: 'BigDecimal',
                          valueProvider: {
                            rule: {'num':0}
                          }
                        },
                      },
                      resultSet: {
                        cntrctId: {
                          direction: 'OUT',
                          type: 'String',
                          title: "شماره قرارداد",
                          percent: 3,
                          content: null,
                        },
                        cstmrId: {
                          direction: 'OUT',
                          type: 'String',
                          title: "شماره مشتری",
                          percent: 10,
                          content: null,
                        },
                        cstmrName: {
                          direction: 'OUT',
                          type: 'String',
                          title: "نام گیرنده",
                          percent: 10,
                          content: null,
                        },
                        prpslTypDsc: {
                          direction: 'OUT',
                          type: 'String',
                          title: "نوع اعتباراسنادی",
                          percent: 10,
                          content: null,
                        },
                        fcltySts: {
                          direction: 'OUT',
                          type: 'String',
                          title: "وضعیت اعتباراسنادی",
                          percent: 10,
                          content: null,
                        },
                        cntrctAmnt: {
                          direction: 'OUT',
                          type: 'String',
                          title: "مبلغ اعتباراسنادی",
                          percent: 10,
                          content: null,
                        },
                        lgPrpslTypDsc: {
                          direction: 'OUT',
                          type: 'String',
                          title: "نوع ضمانتنامه",
                          percent: 10,
                          content: null,
                        },
                        lgFcltySts: {
                          direction: 'OUT',
                          type: 'String',
                          title: "وضعیت ضمانتنامه",
                          percent: 10,
                          content: null,
                        },
                        lgCntrctAmnt: {
                          direction: 'OUT',
                          type: 'String',
                          title: "مبلغ ضمانتنامه",
                          percent: 10,
                          content: null,
                        },
                      },
                    },
                    restService: {}
                  },
                  // pageSize:20,
                  isVisible: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              lable: 'تاریخ آخرین گزارش گیری',
              title: 'lastReportDate',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'long',
                  // isPrimaryKey: true,
                  // primaryKeyStrategy: '',
                  disabled: true,
                  isVisible: false,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'تعداد قراردادهای ضمانتنامه ریالی',
              title: 'rialLgTotalCntrcts',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  disabled: true,
                  isVisible: false,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'جمع مبالغ ضمانتنامه ریالی',
              title: 'rialLgTotalAmnt',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  disabled: true,
                  isVisible: false,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'جمع مبالغ مانده بدهی ضمنانتنامه ریالی',
              title: 'rialLgTotalMandeBedehiAmnt',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  disabled: true,
                  isVisible: false,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'تعداد قراردادهای ضمانتنامه ارزی',
              title: 'arzLgTotalCntrcts',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  disabled: true,
                  isVisible: false,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'جمع مبالغ ضمانتنامه ارزی',
              title: 'arzLgTotalAmnt',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  disabled: true,
                  isVisible: false,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'جمع مبالغ مانده بدهی ضمنانتنامه ارزی',
              title: 'arzLgTotalMandeBedehiAmnt',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  disabled: true,
                  isVisible: false,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'تعداد قراردادهای اعتباراسنادی ریالی',
              title: 'rialLcTotalCntrcts',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  disabled: true,
                  isVisible: false,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'جمع مبالغ اعتباراسنادی ریالی',
              title: 'rialLcTotalAmnt',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  disabled: true,
                  isVisible: false,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'جمع مبالغ مانده بدهی اعتباراسنادی ریالی',
              title: 'rialLcTotalMandeBedehiAmnt',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  disabled: true,
                  isVisible: false,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'تعداد قراردادهای اعتباراسنادی ارزی',
              title: 'arzLcTotalCntrcts',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  disabled: true,
                  isVisible: false,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'جمع مبالغ اعتباراسنادی ارزی',
              title: 'arzLcTotalAmnt',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  disabled: true,
                  isVisible: false,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'جمع مبالغ مانده بدهی ضمنانتنامه ارزی',
              title: 'arzLcTotalMandeBedehiAmnt',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  disabled: true,
                  isVisible: false,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ]
        ],
      },
      customerRialResourceRpt: {
        lable: 'گزارش منابع ریالی ',
        datasourceName: 'localds',
        schema: 'TAFSCHM',
        menuTitle:'report',
        multiStepForm: [],
        content: [
          [
            {
              lable: 'کاربر گزارش مانده منابع ریالی مشتریان',
              title: 'customerRialResourceReportUser',
              value: {
                type: 'non-primitive',
                schema: {
                  type: `String`,
                  option:'customerRialResourceReport',
                  onRowClickRoutePath: 'tafahomInformations/report/commitmentsRpts',
                  dataSourceProvider: {
                    storedProcedure: {
                      // name: 'fillDashboard',
                      name: 'deleteAgent',
                      // key: 'rgncode',
                      // value: 'rgndesc',
                      callPlace: 'onBlur',
                      parameters: {
                        error: {
                          direction: 'OUT',
                          type: 'Integer',
                        },
                        tafCode: {
                          direction: 'IN',
                          type: 'BigDecimal',
                          valueProvider: {
                            rule: {'num':0}
                          }
                        },
                      },
                      resultSet: {
                        title: {
                          direction: 'OUT',
                          type: 'String',
                          title: "عنوان تفاهم نامه",
                          percent: 10,
                          content: null,
                        },
                        jariBalance: {
                          direction: 'OUT',
                          type: 'String',
                          title: "مانده حساب های جاری",
                          percent: 10,
                          content: null,
                        },
                        gharzBalance: {
                          direction: 'OUT',
                          type: 'String',
                          title: "مانده حساب های قرض الحسنه",
                          percent: 10,
                          content: null,
                        },
                        shortBalance: {
                          direction: 'OUT',
                          type: 'String',
                          title: "مانده حساب های کوتاه مدت",
                          percent: 10,
                          content: null,
                        },
                        longBalance: {
                          direction: 'OUT',
                          type: 'String',
                          title: "مانده حساب های بلندمدت",
                          percent: 10,
                          content: null,
                        },
                        govahiBalance: {
                          direction: 'OUT',
                          type: 'String',
                          title: "مانده گواهی سپرده",
                          percent: 10,
                          content: null,
                        },
                        sum: {
                          direction: 'OUT',
                          type: 'String',
                          title: "مجموع مانده حساب ها",
                          percent: 10,
                          content: null,
                        },
                      },
                    },
                    restService: {}
                  },
                  disabled: false,
                  isVisible: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 2,
                },
              },
            }
          ],
          [
            {
              lable: 'تاریخ آخرین گزارش گیری',
              title: 'lastReportDate',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'long',
                  // isPrimaryKey: true,
                  // primaryKeyStrategy: '',
                  disabled: true,
                  isVisible: false,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'عنوان تفاهم نامه',
              title: 'title',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  disabled: true,
                  isVisible: false,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'مانده حساب های جاری',
              title: 'jariBalance',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  disabled: true,
                  isVisible: false,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'مانده حساب های قرض الحسنه',
              title: 'gharzBalance',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  disabled: true,
                  isVisible: false,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'مانده حساب های کوتاه مدت',
              title: 'shortBalance',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  disabled: true,
                  isVisible: false,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'مانده حساب های بلندمدت',
              title: 'longBalance',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  disabled: true,
                  isVisible: false,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'مانده گواهی سپرده',
              title: 'govahiBalance',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  disabled: true,
                  isVisible: false,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'مجموع مانده حساب ها',
              title: 'sum',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  disabled: true,
                  isVisible: false,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            }
          ]
        ],
      },
      customerArzResourceRpt: {
        lable: 'گزارش منابع ارزی ',
        datasourceName: 'localds',
        schema: 'TAFSCHM',
        menuTitle:'report',
        multiStepForm: [],
        content: [
          [
            {
              lable: 'کاربر گزارش مانده منابع ارزی مشتریان',
              title: 'customerArzResourceReportUser',
              value: {
                type: 'non-primitive',
                schema: {
                  type: `String`,
                  option:'customerArzResourceReport',
                  onRowClickRoutePath: 'tafahomInformations/report/commitmentsRpts',
                  dataSourceProvider: {
                    storedProcedure: {
                      // name: 'fillDashboard',
                      name: 'getGovahiEmza',
                      // key: 'rgncode',
                      // value: 'rgndesc',
                      callPlace: 'onBlur',
                      parameters: {
                        error: {
                          direction: 'OUT',
                          type: 'Integer',
                        },
                        tafCode: {
                          direction: 'IN',
                          type: 'BigDecimal',
                          valueProvider: {
                            rule: {'num':0}
                          }
                        },
                      },
                      resultSet: {
                        title: {
                          direction: 'OUT',
                          type: 'String',
                          title: "عنوان تفاهم نامه",
                          percent: 10,
                          content: null,
                        },
                        jariBalance: {
                          direction: 'OUT',
                          type: 'String',
                          title: "مانده حساب های جاری",
                          percent: 10,
                          content: null,
                        },
                        gharzBalance: {
                          direction: 'OUT',
                          type: 'String',
                          title: "مانده حساب های قرض الحسنه",
                          percent: 10,
                          content: null,
                        },
                        shortBalance: {
                          direction: 'OUT',
                          type: 'String',
                          title: "مانده حساب های کوتاه مدت",
                          percent: 10,
                          content: null,
                        },
                        longBalance: {
                          direction: 'OUT',
                          type: 'String',
                          title: "مانده حساب های بلندمدت",
                          percent: 10,
                          content: null,
                        },
                        // govahiBalance: {
                        //   direction: 'OUT',
                        //   type: 'String',
                        //   title: "مانده گواهی سپرده",
                        //   percent: 10,
                        //   content: null,
                        // },
                        sum: {
                          direction: 'OUT',
                          type: 'String',
                          title: "مجموع مانده حساب ها",
                          percent: 10,
                          content: null,
                        },
                      },
                    },
                    restService: {}
                  },
                  disabled: false,
                  isVisible: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 2,
                },
              },
            }
          ],
          [
            {
              lable: 'تاریخ آخرین گزارش گیری',
              title: 'lastReportDate',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'long',
                  // isPrimaryKey: true,
                  // primaryKeyStrategy: '',
                  disabled: true,
                  isVisible: false,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'عنوان تفاهم نامه',
              title: 'title',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  disabled: true,
                  isVisible: false,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'مانده حساب های جاری',
              title: 'jariBalance',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  disabled: true,
                  isVisible: false,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'مانده حساب های قرض الحسنه',
              title: 'gharzBalance',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  disabled: true,
                  isVisible: false,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'مانده حساب های کوتاه مدت',
              title: 'shortBalance',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  disabled: true,
                  isVisible: false,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'مانده حساب های بلندمدت',
              title: 'longBalance',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  disabled: true,
                  isVisible: false,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'مجموع مانده حساب ها',
              title: 'sum',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  disabled: true,
                  isVisible: false,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            }
          ]
        ],
      },
      customerRialResourceAvgRpt: {
        lable: 'گزارش منابع ریالی ',
        datasourceName: 'localds',
        schema: 'TAFSCHM',
        menuTitle:'report',
        multiStepForm: [],
        content: [
          [
            {
              lable: 'کاربر گزارش معدل منابع ریالی مشتریان',
              title: 'customerRialResourceAvgReportUser',
              value: {
                type: 'non-primitive',
                schema: {
                  type: `String`,
                  option:'customerRialResourceAvgReport',
                  onRowClickRoutePath: 'tafahomInformations/report/commitmentsRpts',
                  dataSourceProvider: {
                    storedProcedure: {
                      // name: 'fillDashboard',
                      name: 'accountAverage',
                      // key: 'rgncode',
                      // value: 'rgndesc',
                      callPlace: 'onBlur',
                      parameters: {
                      },
                      resultSet: {
                        title: {
                          direction: 'OUT',
                          type: 'String',
                          title: "عنوان تفاهم نامه",
                          percent: 10,
                          content: null,
                        },
                        jariAverage: {
                          direction: 'OUT',
                          type: 'String',
                          title: "معدل حساب های جاری (ریالی)",
                          percent: 10,
                          content: null,
                        },
                        gharzAverage: {
                          direction: 'OUT',
                          type: 'String',
                          title: "معدل حساب های قرض الحسنه(ریالی)",
                          percent: 10,
                          content: null,
                        },
                        shortAverage: {
                          direction: 'OUT',
                          type: 'String',
                          title: "معدل حساب های کوتاه مدت(ریالی)",
                          percent: 10,
                          content: null,
                        },
                        longAverage: {
                          direction: 'OUT',
                          type: 'String',
                          title: "معدل حساب های بلندمدت(ریالی)",
                          percent: 10,
                          content: null,
                        },
                        sum: {
                          direction: 'OUT',
                          type: 'String',
                          title: "مجموع معدل حساب ها",
                          percent: 10,
                          content: null,
                        },
                      },
                    },
                    restService: {}
                  },
                  disabled: false,
                  isVisible: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 2,
                },
              },
            }
          ],
          [
            {
              lable: 'تاریخ آخرین گزارش گیری',
              title: 'lastReportDate',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'long',
                  // isPrimaryKey: true,
                  // primaryKeyStrategy: '',
                  disabled: true,
                  isVisible: false,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'عنوان تفاهم نامه',
              title: 'title',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  disabled: true,
                  isVisible: false,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'معدل حساب های جاری',
              title: 'jariAverage',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  disabled: true,
                  isVisible: false,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'معدل حساب های قرض الحسنه',
              title: 'gharzAverage',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  disabled: true,
                  isVisible: false,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'معدل حساب های کوتاه مدت',
              title: 'shortAverage',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  disabled: true,
                  isVisible: false,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'معدل حساب های بلندمدت',
              title: 'longAverage',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  disabled: true,
                  isVisible: false,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'مجموع معدل حساب ها',
              title: 'sum',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  disabled: true,
                  isVisible: false,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            }
          ]
        ],
      },
      customerArzResourceAvgRpt: {
        lable: 'گزارش منابع ارزی ',
        datasourceName: 'localds',
        schema: 'TAFSCHM',
        menuTitle:'report',
        multiStepForm: [],
        content: [
          [
            {
              lable: 'کاربر گزارش معدل منابع ارزی مشتریان',
              title: 'customerResourceAvgReportUser',
              value: {
                type: 'non-primitive',
                schema: {
                  type: `String`,
                  option:'customerArzResourceAvgReport',
                  onRowClickRoutePath: 'tafahomInformations/report/commitmentsRpts',
                  dataSourceProvider: {
                    storedProcedure: {
                      name: 'accountAverage',
                      callPlace: 'onBlur',
                      parameters: {},
                      resultSet: {
                        title: {
                          direction: 'OUT',
                          type: 'String',
                          title: "عنوان تفاهم نامه",
                          percent: 10,
                          content: null,
                        },
                        jariAverage: {
                          direction: 'OUT',
                          type: 'String',
                          title: "معدل حساب های جاری(ارزی)",
                          percent: 10,
                          content: null,
                        },
                        gharzAverage: {
                          direction: 'OUT',
                          type: 'String',
                          title: "معدل حساب های قرض الحسنه(ارزی)",
                          percent: 10,
                          content: null,
                        },
                        shortAverage: {
                          direction: 'OUT',
                          type: 'String',
                          title: "معدل حساب های کوتاه مدت(ارزی)",
                          percent: 10,
                          content: null,
                        },
                        longAverage: {
                          direction: 'OUT',
                          type: 'String',
                          title: "معدل حساب های بلندمدت(ارزی)",
                          percent: 10,
                          content: null,
                        },
                        sum: {
                          direction: 'OUT',
                          type: 'String',
                          title: "مجموع معدل حساب ها",
                          percent: 10,
                          content: null,
                        },
                      },
                    },
                    restService: {}
                  },
                  disabled: false,
                  isVisible: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 2,
                },
              },
            },
          ],
          [
            {
              lable: 'تاریخ آخرین گزارش گیری',
              title: 'lastReportDate',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'long',
                  // isPrimaryKey: true,
                  // primaryKeyStrategy: '',
                  disabled: true,
                  isVisible: false,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'عنوان تفاهم نامه',
              title: 'title',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  disabled: true,
                  isVisible: false,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'معدل حساب های جاری',
              title: 'jariAverage',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  disabled: true,
                  isVisible: false,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'معدل حساب های قرض الحسنه',
              title: 'gharzAverage',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  disabled: true,
                  isVisible: false,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'معدل حساب های کوتاه مدت',
              title: 'shortAverage',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  disabled: true,
                  isVisible: false,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'معدل حساب های بلندمدت',
              title: 'longAverage',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  disabled: true,
                  isVisible: false,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'مجموع معدل حساب ها',
              title: 'sum',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  disabled: true,
                  isVisible: false,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            }
          ]
        ],
      },
      lendingRpt: {
        lable: 'گزارش تسهیلات پرداخت شده ',
        datasourceName: 'localds',
        schema: 'TAFSCHM',
        menuTitle:'report',
        multiStepForm: [],
        content: [
          [
            {
              lable: 'کاربر گزارش تسهیلات پرداخت شده',
              title: 'lendingReportReportUser',
              value: {
                type: 'non-primitive',
                schema: {
                  type: `String`,
                  option:'lendingReport',
                  onRowClickRoutePath: 'tafahomInformations/report/commitmentsRpts',
                  dataSourceProvider: {
                    storedProcedure: {
                      name: 'lending',
                      callPlace: 'onBlur',
                      parameters: {},
                      resultSet:{
                        prpslid: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "شماره قرارداد",
                          percent: 10,
                          content: null,
                        },
                        cstmrid: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "شماره مشتری",
                          percent: 10,
                          content: null,
                        },
                        cstmrnaid: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "شماره ملی مشتری",
                          percent: 10,
                          content: null,
                        },
                        cstmrname: {
                          direction: 'OUT',
                          type: 'String',
                          title: "نام گیرنده تسهیلات",
                          percent: 10,
                          content: null,
                        },
                        lstrvworgunitcd: {
                          direction: 'OUT',
                          type: 'Integer',
                          title: "کدمرجع تصویب کننده",
                          percent: 10,
                          content: null,
                        },
                        otitlex: {
                          direction: 'OUT',
                          type: 'String',
                          title: "شرح مرجع تصویب کننده",
                          percent: 10,
                          content: null,
                        },
                        rgndesc: {
                          direction: 'OUT',
                          type: 'String',
                          title: "مدیریت شعب اعطاکننده",
                          percent: 10,
                          content: null,
                        },
                        orgtitlex: {
                          direction: 'OUT',
                          type: 'String',
                          title: "شعبه اعطاکننده",
                          percent: 10,
                          content: null,
                        },
                        prpslsts: {
                          direction: 'OUT',
                          type: 'Short',
                          title: "وضعیت تسهیلات",
                          percent: 10,
                          content: null,
                        },
                        prpsltypcd: {
                          direction: 'OUT',
                          type: 'Integer',
                          title: "کدنوع تسهیلات",
                          percent: 10,
                          content: null,
                        },
                        prpsltypdsc: {
                          direction: 'OUT',
                          type: 'String',
                          title: "شرح نوع تسهیلات",
                          percent: 10,
                          content: null,
                        },
                        fcltytypcd: {
                          direction: 'OUT',
                          type: 'Short',
                          title: "کد نوع عقد تسهیلات",
                          percent: 10,
                          content: null,
                        },
                        fcltytypdsc: {
                          direction: 'OUT',
                          type: 'String',
                          title: "نوع عقد تسهیلات",
                          percent: 10,
                          content: null,
                        },
                        cstmrintrstrt: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "نرخ تسهیلات",
                          percent: 10,
                          content: null,
                        },
                        fcltyamnt: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "مبلغ تسهیلات",
                          percent: 10,
                          content: null,
                        },
                        asmahal: {
                          direction: 'OUT',
                          type: 'Integer',
                          title: "پرداخت ازمحل",
                          percent: 10,
                          content: null,
                        },
                        amnt: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "اصل+سود تسهیلات",
                          percent: 10,
                          content: null,
                        },
                        dbt: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "مانده+سود تسهیلات",
                          percent: 10,
                          content: null,
                        },
                        sts: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "مانده مطالبات",
                          percent: 10,
                          content: null,
                        },
                        cdfarsidsc: {
                          direction: 'OUT',
                          type: 'Integer',
                          title: "سرفصل مطالباتی",
                          percent: 10,
                          content: null,
                        },
                      }
                    },
                    restService: {}
                  },
                  disabled: false,
                  isVisible: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 2,
                },
              },
            },
          ],
          [
            {
              lable: 'تاریخ آخرین گزارش گیری',
              title: 'lastReportDate',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'long',
                  // isPrimaryKey: true,
                  // primaryKeyStrategy: '',
                  disabled: true,
                  isVisible: false,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'تعداد قراردادها',
              title: 'totalPrpslId',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  disabled: true,
                  isVisible: false,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'جمع مبالغ تسهیلات اعطا شده',
              title: 'totalFcltyAmnt',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  disabled: true,
                  isVisible: false,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'جمع مانده مطالبات ریالی',
              title: 'totalStat',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  disabled: true,
                  isVisible: false,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            // {
            //   lable: 'شماره قرارداد',
            //   title: 'prpslid',
            //   step: 0,
            //   value: {
            //     type: 'primitive',
            //     schema: {
            //       type: 'String',
            //       disabled: true,
            //       isVisible: false,
            //       isGridLayout: false,
            //       largeBreakpointWidth: 1,
            //     },
            //   },
            // },
            // {
            //   lable: 'شماره مشتری',
            //   title: 'cstmrid',
            //   step: 0,
            //   value: {
            //     type: 'primitive',
            //     schema: {
            //       type: 'String',
            //       disabled: true,
            //       isVisible: false,
            //       isGridLayout: false,
            //       largeBreakpointWidth: 1,
            //     },
            //   },
            // },
            // {
            //   lable: 'شماره ملی مشتری',
            //   title: 'cstmrnaid',
            //   step: 0,
            //   value: {
            //     type: 'primitive',
            //     schema: {
            //       type: 'String',
            //       disabled: true,
            //       isVisible: false,
            //       isGridLayout: false,
            //       largeBreakpointWidth: 1,
            //     },
            //   },
            // },
            // {
            //   lable: 'نام گیرنده تسهیلات',
            //   title: 'cstmrname',
            //   step: 0,
            //   value: {
            //     type: 'primitive',
            //     schema: {
            //       type: 'String',
            //       disabled: true,
            //       isVisible: false,
            //       isGridLayout: false,
            //       largeBreakpointWidth: 1,
            //     },
            //   },
            // },
            // {
            //   lable: 'کدمرجع تصویب کننده',
            //   title: 'lstrvworgunitcd',
            //   step: 0,
            //   value: {
            //     type: 'primitive',
            //     schema: {
            //       type: 'String',
            //       disabled: true,
            //       isVisible: false,
            //       isGridLayout: false,
            //       largeBreakpointWidth: 1,
            //     },
            //   },
            // },
            // {
            //   lable: 'شرح مرجع تصویب کننده',
            //   title: 'otitlex',
            //   step: 0,
            //   value: {
            //     type: 'primitive',
            //     schema: {
            //       type: 'String',
            //       disabled: true,
            //       isVisible: false,
            //       isGridLayout: false,
            //       largeBreakpointWidth: 1,
            //     },
            //   },
            // },
            // {
            //   lable: 'مدیریت شعب اعطاکننده',
            //   title: 'rgndesc',
            //   step: 0,
            //   value: {
            //     type: 'primitive',
            //     schema: {
            //       type: 'String',
            //       disabled: true,
            //       isVisible: false,
            //       isGridLayout: false,
            //       largeBreakpointWidth: 1,
            //     },
            //   },
            // },
            // {
            //   lable: 'شعبه اعطاکننده',
            //   title: 'orgtitlex',
            //   step: 0,
            //   value: {
            //     type: 'primitive',
            //     schema: {
            //       type: 'String',
            //       disabled: true,
            //       isVisible: false,
            //       isGridLayout: false,
            //       largeBreakpointWidth: 1,
            //     },
            //   },
            // },
            // {
            //   lable: 'وضعیت تسهیلات',
            //   title: 'prpslsts',
            //   step: 0,
            //   value: {
            //     type: 'primitive',
            //     schema: {
            //       type: 'String',
            //       disabled: true,
            //       isVisible: false,
            //       isGridLayout: false,
            //       largeBreakpointWidth: 1,
            //     },
            //   },
            // },
            // {
            //   lable: 'کدنوع تسهیلات',
            //   title: 'prpsltypcd',
            //   step: 0,
            //   value: {
            //     type: 'primitive',
            //     schema: {
            //       type: 'String',
            //       disabled: true,
            //       isVisible: false,
            //       isGridLayout: false,
            //       largeBreakpointWidth: 1,
            //     },
            //   },
            // },
            // {
            //   lable: 'شرح نوع تسهیلات',
            //   title: 'prpsltypdsc',
            //   step: 0,
            //   value: {
            //     type: 'primitive',
            //     schema: {
            //       type: 'String',
            //       disabled: true,
            //       isVisible: false,
            //       isGridLayout: false,
            //       largeBreakpointWidth: 1,
            //     },
            //   },
            // },
            // {
            //   lable: 'کد نوع عقد تسهیلات',
            //   title: 'fcltytypcd',
            //   step: 0,
            //   value: {
            //     type: 'primitive',
            //     schema: {
            //       type: 'String',
            //       disabled: true,
            //       isVisible: false,
            //       isGridLayout: false,
            //       largeBreakpointWidth: 1,
            //     },
            //   },
            // },
            // {
            //   lable: 'نوع عقد تسهیلات',
            //   title: 'fcltytypdsc',
            //   step: 0,
            //   value: {
            //     type: 'primitive',
            //     schema: {
            //       type: 'String',
            //       disabled: true,
            //       isVisible: false,
            //       isGridLayout: false,
            //       largeBreakpointWidth: 1,
            //     },
            //   },
            // },
            // {
            //   lable: 'نرخ تسهیلات',
            //   title: 'cstmrintrstrt',
            //   step: 0,
            //   value: {
            //     type: 'primitive',
            //     schema: {
            //       type: 'String',
            //       disabled: true,
            //       isVisible: false,
            //       isGridLayout: false,
            //       largeBreakpointWidth: 1,
            //     },
            //   },
            // },
            // {
            //   lable: 'مبلغ تسهیلات',
            //   title: 'fcltyamnt',
            //   step: 0,
            //   value: {
            //     type: 'primitive',
            //     schema: {
            //       type: 'String',
            //       disabled: true,
            //       isVisible: false,
            //       isGridLayout: false,
            //       largeBreakpointWidth: 1,
            //     },
            //   },
            // },
            // {
            //   lable: 'پرداخت ازمحل',
            //   title: 'asmahal',
            //   step: 0,
            //   value: {
            //     type: 'primitive',
            //     schema: {
            //       type: 'String',
            //       disabled: true,
            //       isVisible: false,
            //       isGridLayout: false,
            //       largeBreakpointWidth: 1,
            //     },
            //   },
            // },
            // {
            //   lable: 'اصل+سود تسهیلات',
            //   title: 'amnt',
            //   step: 0,
            //   value: {
            //     type: 'primitive',
            //     schema: {
            //       type: 'String',
            //       disabled: true,
            //       isVisible: false,
            //       isGridLayout: false,
            //       largeBreakpointWidth: 1,
            //     },
            //   },
            // },
            // {
            //   lable: 'مانده+سود تسهیلات',
            //   title: 'dbt',
            //   step: 0,
            //   value: {
            //     type: 'primitive',
            //     schema: {
            //       type: 'String',
            //       disabled: true,
            //       isVisible: false,
            //       isGridLayout: false,
            //       largeBreakpointWidth: 1,
            //     },
            //   },
            // },
            // {
            //   lable: 'مانده مطالبات',
            //   title: 'sts',
            //   step: 0,
            //   value: {
            //     type: 'primitive',
            //     schema: {
            //       type: 'String',
            //       disabled: true,
            //       isVisible: false,
            //       isGridLayout: false,
            //       largeBreakpointWidth: 1,
            //     },
            //   },
            // },
            // {
            //   lable: 'سرفصل مطالباتی',
            //   title: 'cdfarsidsc',
            //   step: 0,
            //   value: {
            //     type: 'primitive',
            //     schema: {
            //       type: 'String',
            //       disabled: true,
            //       isVisible: false,
            //       isGridLayout: false,
            //       largeBreakpointWidth: 1,
            //     },
            //   },
            // },
          ]
        ],
      },
      collateralRpt: {
        lable: 'گزارش وثایق ',
        datasourceName: 'localds',
        schema: 'TAFSCHM',
        menuTitle:'report',
        multiStepForm: [],
        content: [
          [
            {
              lable: 'کابر گزارش وثیقه',
              title: 'collateralReportUser',
              value: {
                type: 'non-primitive',
                schema: {
                  type: `String`,
                  option:'collateralReport',
                  onRowClickRoutePath: 'tafahomInformations/report/commitmentsRpts',
                  dataSourceProvider: {
                    storedProcedure: {
                      name: 'collateral',
                      callPlace: 'onBlur',
                      parameters: {},
                      resultSet: {
                        // tafCode: {
                        //   direction: 'IN',
                        //   type: 'BigDecimal',
                        // },
                        // error: {
                        //   direction: 'OUT',
                        //   type: 'Integer',
                        // },
                        prpslId: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "شماره قرارداد",
                          percent: 10,
                          content: null,
                        },
                        customerId: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "شماره مشتری",
                          percent: 10,
                          content: null,
                        },
                        customerName: {
                          direction: 'OUT',
                          type: 'String',
                          title: "نام مشتری",
                          percent: 10,
                          content: null,
                        },
                        // prpslTypCd: {
                        //   direction: 'OUT',
                        //   type: 'Integer',
                        //   title: "نوع تسهیلات",
                        //   percent: 10,
                        //   content: null,
                        // },
                        prpslTypDsc: {
                          direction: 'OUT',
                          type: 'String',
                          title: "نوع تسهیلات/ تعهدات",
                          percent: 10,
                          content: null,
                        },
                        // collatreralTypCd: {
                        //   direction: 'OUT',
                        //   type: 'Integer',
                        //   title: "کدنوع وثیقه",
                        //   percent: 10,
                        //   content: null,
                        // },
                        collateralTypDsc: {
                          direction: 'OUT',
                          type: 'String',
                          title: "شرح نوع وثیقه",
                          percent: 10,
                          content: null,
                        },
                        facilityAllocationAmount: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "مبلغ تخصیص در تسهیلات بابت نوع وثیقه ",
                          percent: 10,
                          content: null,
                        },
                        commitmentAllocationAmount: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "مبلغ تخصیص  در تعهدات بابت نوع وثیقه",
                          percent: 10,
                          content: null,
                        },
                      },
                    },
                    restService: {}
                  },
                  disabled: false,
                  isVisible: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 2,
                },
              },
            },
          ],
          [
            {
              lable: 'تاریخ آخرین گزارش گیری',
              title: 'lastReportDate',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'long',
                  // isPrimaryKey: true,
                  // primaryKeyStrategy: '',
                  disabled: true,
                  isVisible: false,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'تعداد قراردادها',
              title: 'collatreralTotalCntrcts',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  disabled: true,
                  isVisible: false,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'جمع مبلغ تخصیص در تسهیلات',
              title: 'facilityAllocationTotalAmount',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  disabled: true,
                  isVisible: false,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'جمع مبلغ تخصیص در تعهدات',
              title: 'commitmentAllocationTotalAmount',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  disabled: true,
                  isVisible: false,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'جمع مبلغ تخصیص از وثایق گروه نقد',
              title: 'naghdGrpTotalAmnt',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  disabled: true,
                  isVisible: false,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'جمع مبلغ تخصیص از وثایق گروه غیرمنقول',
              title: 'gheireManghoolGrpTotalAmnt',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  disabled: true,
                  isVisible: false,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'جمع مبلغ تخصیص از وثایق گروه سایر',
              title: 'sayerGrpTotalAmnt',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  disabled: true,
                  isVisible: false,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'جمع مبلغ تخصیص از وثایق گروه قرارداد بدون وثیقه',
              title: 'bedouneVasigheGrpTotalAmnt',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  disabled: true,
                  isVisible: false,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ]
        ],
      },
      costBenefitRpt: {
        lable: 'گزارش هزینه فایده ',
        datasourceName: 'localds',
        schema: 'TAFSCHM',
        menuTitle:'report',
        multiStepForm: [],
        content: [
          [
            {
              lable: 'کاربر گزارش هزینه فایده مشتری',
              title: 'costBenefitReportUser',
              value: {
                type: 'non-primitive',
                schema: {
                  type: `String`,
                  option:'costBenefitReport',
                  onRowClickRoutePath: 'tafahomInformations/report/costBenefitRpts',
                  dataSourceProvider: {
                    storedProcedure: {
                      name: 'collateral',
                      callPlace: 'onBlur',
                      parameters: {},
                      resultSet: {
                        // tafCode: {
                        //   direction: 'IN',
                        //   type: 'BigDecimal',
                        // },
                        // error: {
                        //   direction: 'OUT',
                        //   type: 'Integer',
                        // },
                        accountType: {
                          direction: 'OUT',
                          type: 'String',
                          title: "نوع حساب",
                          percent: 10,
                          content: null,
                        },
                        resourceAvg: {
                          direction: 'OUT',
                          type: 'String',
                          title: "معدل منابع مشتری(ریال)",
                          percent: 10,
                          content: null,
                        },
                        soodJayezeRate: {
                          direction: 'OUT',
                          type: 'String',
                          title: "نرخ سود/جایزه %",
                          percent: 10,
                          content: null,
                        },
                        soodPardakhti: {
                          direction: 'OUT',
                          type: 'String',
                          title: "سود پرداختی",
                          percent: 10,
                          content: null,
                        },
                        sepordeGhanooniRate: {
                          direction: 'OUT',
                          type: 'String',
                          title: "نرخ سپرده قانونی %",
                          percent: 10,
                          content: null,
                        },
                        jayezeSepordeGhanooni: {
                          direction: 'OUT',
                          type: 'String',
                          title: "جایزه سپرده قانونی %",
                          percent: 10,
                          content: null,
                        },
                        hadNaghdinegiRate: {
                          direction: 'OUT',
                          type: 'String',
                          title: "حدنقدینگی %",
                          percent: 10,
                          content: null,
                        },
                        sepordeGhanooniAmnt: {
                          direction: 'OUT',
                          type: 'String',
                          title: "مبلغ سپرده قانونی",
                          percent: 10,
                          content: null,
                        },
                        jayezeSepordeGhanooniAmnt: {
                          direction: 'OUT',
                          type: 'String',
                          title: "مبلغ جایزه سپرده قانونی",
                          percent: 10,
                          content: null,
                        },
                        hadNaghdinegiAmnt: {
                          direction: 'OUT',
                          type: 'String',
                          title: "مبلغ حدنقدینگی",
                          percent: 10,
                          content: null,
                        },
                        freeResource: {
                          direction: 'OUT',
                          type: 'String',
                          title: "خالص منابع آزاد مشتری جهت اعطای تسهیلات",
                          percent: 10,
                          content: null,
                        },
                        Jari: {
                          direction: 'OUT',
                          type: 'String',
                          title: "جاری",
                          percent: 10,
                          content: null,
                        },
                        shortNormal: {
                          direction: 'OUT',
                          type: 'String',
                          title: "کوتاه مدت عادی",
                          percent: 10,
                          content: null,
                        },
                        shortSpecial: {
                          direction: 'OUT',
                          type: 'String',
                          title: "کوتاه مدت ویژه",
                          percent: 10,
                          content: null,
                        },
                        shortCustomRate: {
                          direction: 'OUT',
                          type: 'String',
                          title: "کوتاه مدت بانرخ ترجیحی",
                          percent: 10,
                          content: null,
                        },
                        gharz: {
                          direction: 'OUT',
                          type: 'String',
                          title: "پس انداز",
                          percent: 10,
                          content: null,
                        },
                        longOneYear: {
                          direction: 'OUT',
                          type: 'String',
                          title: "بلندمدت ۱ساله",
                          percent: 10,
                          content: null,
                        },
                        jariDolati: {
                          direction: 'OUT',
                          type: 'String',
                          title: "جاری دولتی",
                          percent: 10,
                          content: null,
                        },
                        sum: {
                          direction: 'OUT',
                          type: 'String',
                          title: "جمع کل",
                          percent: 10,
                          content: null,
                        },
                        oghoudMosharekatiTadriji: {
                          direction: 'OUT',
                          type: 'String',
                          title: "عقود مشاركتی تدريجي (20% از کل تسهیلات)",
                          percent: 10,
                          content: null,
                        },
                        tadrijiIRate: {
                          direction: 'OUT',
                          type: 'String',
                          title: "نرخ تسهیلات %",
                          percent: 10,
                          content: null,
                        },
                        tadrijiISoud: {
                          direction: 'OUT',
                          type: 'String',
                          title: "سود عقود مشاركتی تدريجي",
                          percent: 10,
                          content: null,
                        },
                        oghoudMosharekatiSarmayeDarGardesh: {
                          direction: 'OUT',
                          type: 'String',
                          title: "عقود مشاركتي سرمايه درگردش(80% از کل تسهیلات)",
                          percent: 10,
                          content: null,
                        },
                        gardeshIRate: {
                          direction: 'OUT',
                          type: 'String',
                          title: "نرخ تسهیلات",
                          percent: 10,
                          content: null,
                        },
                        gardeshISoud: {
                          direction: 'OUT',
                          type: 'String',
                          title: "سود عقود مشاركتي سرمايه درگردش",
                          percent: 10,
                          content: null,
                        },
                        oghoudGharzolhasane: {
                          direction: 'OUT',
                          type: 'String',
                          title: "تسهیلات قرض الحسنه",
                          percent: 10,
                          content: null,
                        },
                        gharzWageRate: {
                          direction: 'OUT',
                          type: 'String',
                          title: "نرخ کارمزد",
                          percent: 10,
                          content: null,
                        },
                        gharzWage: {
                          direction: 'OUT',
                          type: 'String',
                          title: "کارمزد قرض الحسنه",
                          percent: 10,
                          content: null,
                        },
                        totalResources: {
                          direction: 'OUT',
                          type: 'String',
                          title: "خالص منابع  جهت اعطاي تسهيلات پس از كسر حجم استفاده نشده",
                          percent: 10,
                          content: null,
                        },
                        mashkoukCostCoefficient: {
                          direction: 'OUT',
                          type: 'String',
                          title: "ضريب هزينه اقلام مطالباتي",
                          percent: 10,
                          content: null,
                        },
                        mashkoukCost: {
                          direction: 'OUT',
                          type: 'String',
                          title: "هزینه م.م (مطالبات مشکوک الوصول)",
                          percent: 10,
                          content: null,
                        },
                        soudPardakhtiBeSepordeha: {
                          direction: 'OUT',
                          type: 'String',
                          title: "سود پرداختي به سپرده‌ها",
                          percent: 10,
                          content: null,
                        },
                        totalBenefit: {
                          direction: 'OUT',
                          type: 'String',
                          title: "کل سود حاصله",
                          percent: 10,
                          content: null,
                        },
                        totalCost: {
                          direction: 'OUT',
                          type: 'String',
                          title: "کل هزینه ها",
                          percent: 10,
                          content: null,
                        },
                        totalAyedi: {
                          direction: 'OUT',
                          type: 'String',
                          title: "عایدی کل (کل سود حاصله - کل هزینه ها)",
                          percent: 10,
                          content: null,
                        },
                        // : {
                        //   direction: 'OUT',
                        //   type: 'String',
                        //   title: "",
                        //   percent: 10,
                        //   content: null,
                        // },
                        // : {
                        //   direction: 'IN',
                        //   type: 'BigDecimal',
                        //   title: "",
                        //   percent: 10,
                        //   content: null,
                        // },
                      },
                    },
                    restService: {}
                  },
                  disabled: false,
                  isVisible: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 2,
                },
              },
            },
          ],
          [
            {
              lable: 'تاریخ آخرین گزارش گیری',
              title: 'lastReportDate',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'long',
                  // isPrimaryKey: true,
                  // primaryKeyStrategy: '',
                  disabled: true,
                  isVisible: false,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ]
        ],
      },
      customerProfileAbstractRpt: {
        lable: 'شناسنامه مشتری ',
        datasourceName: 'localds',
        schema: 'TAFSCHM',
        menuTitle:'report',
        multiStepForm: [],
        content: [
          [
            {
              lable: 'کاربر گزارش منابع مشتریان',
              title: 'customerResourceReportUser',
              value: {
                type: 'non-primitive',
                schema: {
                  type: `String`,
                  option:'customerProfileReport',
                  onRowClickRoutePath: 'tafahomInformations/report/commitmentsRpts',
                  dataSourceProvider: {
                    storedProcedure: {
                      name: 'accountAverage',
                      callPlace: 'onBlur',
                      parameters: {},
                      resultSet: {
                        
                        //  section-2 row-1
                        sarmayeSherkatGroup: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "سرمایه شرکت/ گروه",
                          percent: 10,
                          content: null,
                        },
                        sarmayeSabti: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "سرمایه ثبتی شرکت",
                          percent: 10,
                          content: null,
                        },
                        foroush: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "فروش شرکت/ گروه",
                          percent: 10,
                          content: null,
                        },
                        bahayeTamamShode: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "بهای تمام شده کالای فروش رفته",
                          percent: 10,
                          content: null,
                        },
                        jameKolJari: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "جمع کل دارایی های غیرجاری شرکت/ گروه",
                          percent: 10,
                          content: null,
                        },
                        jameKolSabet: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "جمع کل دارایی های شرکت",
                          percent: 10,
                          content: null,
                        },
                        mojoudiSherkat: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "موجودی کالای شرکت",
                          percent: 10,
                          content: null,
                        },
                        mojoudiNaghdi: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "موجودی نقدی",
                          percent: 10,
                          content: null,
                        },
                        samayegozariKotah: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "سرمایه گذاری کوتاه مدت",
                          percent: 10,
                          content: null,
                        },
                        samayegozariBoland: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "سرمایه گذاری بلندمدت",
                          percent: 10,
                          content: null,
                        },
                        pishPardakht: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "پیش پرداخت ها",
                          percent: 10,
                          content: null,
                        },
                        //  section-2 row-2
                        asnadeDaryaftani: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "اسناد دریافتنی",
                          percent: 10,
                          content: null,
                        },
                        asnadePardakhtani: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "اسناد پرداختنی",
                          percent: 10,
                          content: null,
                        },
                        jameHoghough: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "جمع حقوق صاحبان سهام شرکت/ گروه",
                          percent: 10,
                          content: null,
                        },
                        mizanBedehi: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "میزان کل بدهی های جاری شرکت",
                          percent: 10,
                          content: null,
                        },
                        sarmayeDarGardesh: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "سرمایه در گردش خالص",
                          percent: 10,
                          content: null,
                        },
                        tashilatKotahModat: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "تسهیلات کوتاه مدت",
                          percent: 10,
                          content: null,
                        },
                        tashilatBolandModat: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "تسهیلات بلند مدت",
                          percent: 10,
                          content: null,
                        },
                        soudeNakhales: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "سود ناخالص شرکت",
                          percent: 10,
                          content: null,
                        },
                        soudeKhales: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "سود خالص شرکت",
                          percent: 10,
                          content: null,
                        },
                        //  section-3 row-1
                        rialResourceAvg: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "معدل منابع ریالی",
                          percent: 10,
                          content: null,
                        },
                        arzResourceAvg: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "معدل منابع ارزی",
                          percent: 10,
                          content: null,
                        },
                        rialFacilityContractCount: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "تعدادقراردادهای تسهیلاتی ریالی مشتری/ گروه",
                          percent: 10,
                          content: null,
                        },
                        totalRialFacility: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "جمع کل تسهیلات دریافتی مشتری/گروه",
                          percent: 10,
                          content: null,
                        },
                        rialMotalebatMande: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "مانده مطالبات ریالی",
                          percent: 10,
                          content: null,
                        },
                        arzFacilityContractCount: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "تعداد قراردادهای تسهیلات ارزی مشتری/گروه ",
                          percent: 10,
                          content: null,
                        },
                        totalArzFacility: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "جمع کل تسهیلات ارزی",
                          percent: 10,
                          content: null,
                        },
                        arzMotalebatMande: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "مانده مطالبات ارزی ",
                          percent: 10,
                          content: null,
                        },
                        collateralNaghdGrpTotalAmnt: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "وثیقه گروه نقد",
                          percent: 10,
                          content: null,
                        },
                        collateralGheireManghoolGrpTotalAmnt: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "وثیقه گروه غیر منقول",
                          percent: 10,
                          content: null,
                        },
                        collateralSayerGrpTotalAmnt: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "وثیقه گروه سایر",
                          percent: 10,
                          content: null,
                        },
                        collateralBedouneVasigheGrpTotalAmnt: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "وثیقه گروه قرارداد بدون وثیقه",
                          percent: 10,
                          content: null,
                        },
                        // collateralSum: {
                        //   direction: 'OUT',
                        //   type: 'BigDecimal',
                        //   title: "جمع وثیقه",
                        //   percent: 10,
                        //   content: null,
                        // },
                        resourceCostBenefit: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "هزینه فایده منابع",
                          percent: 10,
                          content: null,
                        },

                        // colateralType: {
                        //   direction: 'OUT',
                        //   type: 'BigDecimal',
                        //   title: "نوع وثایق",
                        //   percent: 10,
                        //   content: null,
                        // },
                        // colateralSum: {
                        //   direction: 'OUT',
                        //   type: 'BigDecimal',
                        //   title: "جمع وثیقه",
                        //   percent: 10,
                        //   content: null,
                        // },
                        //  section-3 row-2
                        
                        rialCommitmentContractCount: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "تعداد قراردادهای تعهدات ریالی مشتری /گروه",
                          percent: 10,
                          content: null,
                        },
                        rialCommitmentSum: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "جمع تعهدات ریالی مشتری /گروه",
                          percent: 10,
                          content: null,
                        },
                        rialCommitmentBedehi: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "وضعیت و بدهی تعهداتی ریالی",
                          percent: 10,
                          content: null,
                        },
                        arziCommitmentContractCount: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "تعداد قراردادهای تعهدات ارزی مشتری /گروه",
                          percent: 10,
                          content: null,
                        },
                        arziCommitmentSum: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "جمع تعهدات ارزی مشتری /گروه",
                          percent: 10,
                          content: null,
                        },
                        arziCommitmentBedehi: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "وضعیت و بدهی تعهداتی ارزی",
                          percent: 10,
                          content: null,
                        },
                        resourceForecast: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "پیش بینی منابع",
                          percent: 10,
                          content: null,
                        },
                        expenseForecast: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "پیش بینی مصارف",
                          percent: 10,
                          content: null,
                        },
                        commitmentForecast: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "پیش بینی تعهدات",
                          percent: 10,
                          content: null,
                        },
                        nlpRatio: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "نسبت NLP",
                          percent: 10,
                          content: null,
                        },
                        malekaneRatio: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "نسبت مالکانه",
                          percent: 10,
                          content: null,
                        },
                        jariRatio: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "نسبت جاری",
                          percent: 10,
                          content: null,
                        },
                        aniRatio: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "نسبت آنی",
                          percent: 10,
                          content: null,
                        },
                        //  section-1 row-1
                        customerName: {
                          direction: 'OUT',
                          type: 'String',
                          title: "نام مشتری",
                          percent: 10,
                          content: null,
                        },
                        customerGeneralTypeTitle: {
                          direction: 'OUT',
                          type: 'String',
                          title: "نوع مشتری",
                          percent: 10,
                          content: null,
                        },
                        customerCode: {
                          direction: 'OUT',
                          type: 'String',
                          title: "شماره مشتری",
                          percent: 10,
                          content: null,
                        },
                        customerRegisterCode: {
                          direction: 'OUT',
                          type: 'String',
                          title: "شماره ثبت مشتری",
                          percent: 10,
                          content: null,
                        },
                        groupBenefitTitle: {
                          direction: 'OUT',
                          type: 'String',
                          title: "گروه مشتری در سامانه CLV",
                          percent: 10,
                          content: null,
                        },
                        yearlyGroupBenefitTitle: {
                          direction: 'OUT',
                          type: 'String',
                          title: "رتبه مشتری از ابتدای سال جاری",
                          percent: 10,
                          content: null,
                        },
                        oldYearlyGroupBenefitTitle: {
                          direction: 'OUT',
                          type: 'String',
                          title: "رتبه مشتری در سال گذشته",
                          percent: 10,
                          content: null,
                        },
                        valueFromBeginningYear: {
                          direction: 'OUT',
                          type: 'String',
                          title: "ارزش مشتری از ابتدای سال ۱۳۸۹",
                          percent: 10,
                          content: null,
                        },
                        // : {
                        //   direction: 'OUT',
                        //   type: 'String',
                        //   title: "",
                        //   percent: 10,
                        //   content: null,
                        // },
                      },
                    },
                    restService: {}
                  },
                  disabled: false,
                  isVisible: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 2,
                },
              },
            }
          ]
        ],
      },
      performanceRpt: {
        lable: 'کارآیی تفاهم نامه ',
        datasourceName: 'localds',
        schema: 'TAFSCHM',
        menuTitle:'report',
        multiStepForm: [],
        content: [
          [
            {
              lable: 'گزارش کارآیی تفاهم نامه ها',
              title: 'performance',
              value: {
                type: 'non-primitive',
                schema: {
                  type: `String`,
                  option:'performanceReport',
                  onRowClickRoutePath: 'tafahomInformations/report/commitmentsRpts',
                  dataSourceProvider: {
                    storedProcedure: {
                      name: 'zoneList',
                      callPlace: 'onBlur',
                      parameters: {},
                      resultSet: {
                        title: {
                          direction: 'OUT',
                          type: 'String',
                          title: "عنوان",
                          percent: 10,
                          content: null,
                        },
                        manabe: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "منابع",
                          percent: 10,
                          content: null,
                        },
                        masaref: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "مصارف",
                          percent: 10,
                          content: null,
                        },
                        tahodat: {
                          direction: 'OUT',
                          type: 'BigDecimal',
                          title: "تعهدات",
                          percent: 10,
                          content: null,
                        },
                      },
                    },
                    restService: {}
                  },
                  disabled: false,
                  isVisible: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 2,
                },
              },
            }
          ]
        ],
      },
    },
  },

  account: {
    restServices: {},
    storedProcedures: {
      //  getBalance
      //  mohasebeye mande hesab
      /* getBalance: {
        name: 'AGBALNC5',
        description: 'بازیابی مانده حساب',
        datasourceName: 'coreds',
        schema: 'CORSHMA',
        parameters: {
          error: {
            direction: 'OUT',
            type: 'Integer',
          },
          subsystem: {
            direction: 'IN',
            type: 'Short',
          },
          branch: {
            direction: 'IN',
            type: 'Integer',
          },
          intCustId: {
            direction: 'IN',
            type: 'Integer',
          },
          accNo: {
            direction: 'IN',
            type: 'BigDecimal',
          },
          statusx: {
            direction: 'OUT',
            type: 'Short',
          },
          etrnsStatus: {
            direction: 'OUT',
            type: 'Short',
          },

          lockToTalAmnt: {
            direction: 'OUT',
            type: 'Short',
          },
          accLockStatus: {
            direction: 'OUT',
            // type: 'char',
            type: 'String',
          },
          balance: {
            direction: 'OUT',
            type: 'String',
          },
          remainBalance: {
            direction: 'OUT',
            type: 'String',
          },
          step: {
            direction: 'OUT',
            type: 'Integer',
          },
        },
        resultSet: {
          zoneCode: {
            direction: 'OUT',
            type: 'Integer',
          },
          zoneDesc: {
            direction: 'OUT',
            type: 'String',
          },
        },
      }, */
      getGovahiEmza: {
        name: 'OGBNDRM1',
        description: 'بازیابی مانده گواهی حساب',
        // datasourceName: 'devds',
        // datasourceName: 'misds',
        datasourceName_Development: 'devds',
        datasourceName_Alpha: 'devds',
        datasourceName_Beta: 'misds',
        datasourceName_Production: 'coreds',
        schema: 'TSTSHMA',
        parameters: {
          error: {
            direction: 'OUT',
            type: 'Integer',
          },
          intCustId: {
            direction: 'IN',
            type: 'Integer',
          },
          today: {
            direction: 'OUT',
            type: 'Integer',
          },
          step: {
            direction: 'OUT',
            type: 'Integer',
          },
          bndrem: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
        },
        resultSet: {}
      },
      accountAverage: {
        name: 'ARAVRA13',
        description: 'بازیابی معدل حساب',
        // datasourceName: 'misds',
        datasourceName_Development: 'misds',
        datasourceName_Alpha: 'misds',
        datasourceName_Beta: 'misds',
        datasourceName_Production: 'misds',
        schema: 'ACCSHMA',
        parameters: {
          fromDate: {
            direction: 'IN',
            type: 'Integer',
          },
          toDate: {
            direction: 'IN',
            type: 'Integer',
          },
          accNo: {
            direction: 'IN',
            type: 'BigDecimal',
          },
          envCode: {
            direction: 'IN',
            type: 'Integer',
          },
          userId: {
            direction: 'IN',
            type: 'String',
          },
          step: {
            direction: 'OUT',
            type: 'String',
          },
          error: {
            direction: 'OUT',
            type: 'String',
          },
        },
        resultSet: {
          openBranch: {
            direction: 'OUT',
            type: 'String',
          },
          createBranch: {
            direction: 'OUT',
            type: 'String',
          },
          ownerName: {
            direction: 'OUT',
            type: 'String',
          },
          isCommercial: {
            direction: 'OUT',
            type: 'String',
          },
          tpeX: {
            direction: 'OUT',
            type: 'Integer',
          },
          gradeDesc: {
            direction: 'OUT',
            type: 'String',
          },
          createDate: {
            direction: 'OUT',
            type: 'Integer',
          },
          arzCode: {
            direction: 'OUT',
            type: 'Integer',
          },
          arzName: {
            direction: 'OUT',
            type: 'String',
          },
          finalLastBalance: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          sumDbAmnt: {
            direction: 'OUT',
            type: 'String',
          },
          sumCrAmnt: {
            direction: 'OUT',
            type: 'String',
          },
          countrTchq: {
            direction: 'OUT',
            type: 'String',
          },
          accDesc: {
            direction: 'OUT',
            type: 'String',
          },
          avgBalance: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          diffDate: {
            direction: 'OUT',
            type: 'String',
          },
          avgB: {
            direction: 'OUT',
            type: 'String',
          },
          mDate: {
            direction: 'OUT',
            type: 'String',
          },
          diff: {
            direction: 'OUT',
            type: 'String',
          },
          up: {
            direction: 'OUT',
            type: 'String',
          },
          co: {
            direction: 'OUT',
            type: 'String',
          },
          balanCo: {
            direction: 'OUT',
            type: 'String',
          },
          balanceA: {
            direction: 'OUT',
            type: 'String',
          },
          balanceB: {
            direction: 'OUT',
            type: 'String',
          },
          upToCurrent: {
            direction: 'OUT',
            type: 'String',
          },
          todayBalance: {
            direction: 'OUT',
            type: 'String',
          },
          counterTran: {
            direction: 'OUT',
            type: 'String',
          },
          
        }
      },
      //  ExtAcc to IntAcc
      // fullAccountInfo: {
      //   name: 'SPG_FULLACCOUNTINFO03',
      //   description: '',
      //   datasourceName: 'coreds',
      //   schema: 'CORSHMA',
      //   parameters: {
      //     po_error: {
      //       direction: 'OUT',
      //       type: 'Integer',
      //     },
      //     pi_extAccNo: {
      //       direction: 'IN',
      //       type: 'BigDecimal',
      //     },
      //     po_typeX: {
      //       direction: 'OUT',
      //       type: 'Short',
      //     },
      //     po_accType: {
      //       direction: 'OUT',
      //       type: 'Short',
      //     },
      //     po_statusX: {
      //       direction: 'OUT',
      //       type: 'Short',
      //     },
      //     po_accLockStatus: {
      //       direction: 'OUT',
      //       type: 'Short',
      //     },
      //     po_controlPayerId: {
      //       direction: 'OUT',
      //       type: 'Short',
      //     },
      //     po_etrnsStatus: {
      //       direction: 'OUT',
      //       type: 'Short',
      //     },
      //     po_permitDrawDoc: {
      //       direction: 'OUT',
      //       type: 'Short',
      //     },
      //     po_serviceStatus: {
      //       direction: 'OUT',
      //       type: 'Short',
      //     },
      //     po_arzCode: {
      //       direction: 'OUT',
      //       type: 'Short',
      //     },
      //     po_categoryCode: {
      //       direction: 'OUT',
      //       type: 'Short',
      //     },
      //     po_profitStatus: {
      //       direction: 'OUT',
      //       type: 'Short',
      //     },
      //     po_respiteDelay: {
      //       direction: 'OUT',
      //       type: 'Short',
      //     },
      //     po_accCustType: {
      //       direction: 'OUT',
      //       type: 'Short',
      //     },
      //     po_isInactive: {
      //       direction: 'OUT',
      //       type: 'Short',
      //     },
      //     po_isActive: {
      //       direction: 'OUT',
      //       type: 'Short',
      //     },
      //     po_isSuspend: {
      //       direction: 'OUT',
      //       type: 'Short',
      //     },
      //     po_isClosed: {
      //       direction: 'OUT',
      //       type: 'Short',
      //     },
      //     po_isAccLock: {
      //       direction: 'OUT',
      //       type: 'Short',
      //     },
      //     po_isIndividual: {
      //       direction: 'OUT',
      //       type: 'Short',
      //     },
      //     po_isCommunal: {
      //       direction: 'OUT',
      //       type: 'Short',
      //     },
      //     po_accDuration: {
      //       direction: 'OUT',
      //       type: 'Short',
      //     },
      //     po_permitAbsentDraw: {
      //       direction: 'OUT',
      //       type: 'Short',
      //     },
      //     po_billReporterBranch: {
      //       direction: 'OUT',
      //       type: 'Integer',
      //     },
      //     po_branch: {
      //       direction: 'OUT',
      //       type: 'Integer',
      //     },
      //     po_createDate: {
      //       direction: 'OUT',
      //       type: 'Integer',
      //     },
      //     po_intCustId: {
      //       direction: 'OUT',
      //       type: 'Integer',
      //     },
      //     po_stampDate: {
      //       direction: 'OUT',
      //       type: 'Integer',
      //     },
      //     po_minDuration: {
      //       direction: 'OUT',
      //       type: 'Integer',
      //     },
      //     po_stampAmnt: {
      //       direction: 'OUT',
      //       type: 'Integer',
      //     },
      //     po_accNo: {
      //       direction: 'OUT',
      //       type: 'BigDecimal',
      //     },
      //     po_extAccNo: {
      //       direction: 'OUT',
      //       type: 'BigDecimal',
      //     },
      //     po_sajeshAccNo: {
      //       direction: 'OUT',
      //       type: 'BigDecimal',
      //     },
      //     po_extCustId: {
      //       direction: 'OUT',
      //       type: 'BigDecimal',
      //     },
      //     po_minBalance: {
      //       direction: 'OUT',
      //       type: 'BigDecimal',
      //     },
      //     po_minProfitBalance: {
      //       direction: 'OUT',
      //       type: 'BigDecimal',
      //     },
      //     po_ownerName: {
      //       direction: 'OUT',
      //       type: 'String',
      //     },
      //     po_step: {
      //       direction: 'OUT',
      //       type: 'Integer',
      //     },
      //   },
      //   resultSet: {},
      // },
    },
    jpas: {},
  },

  // customer: {
  //   // datasourceName: 'cusDB',
  //   restServices: {},
  //   storedProcedures: {},
  //   jpas: {},
  // },
  rialFacility: {
    jpas: {},
    restServices: {},
    storedProcedures: {
      lending:{
        name:'FRPYFCLTY1',
        description:'گزارش تسهیلات',
        datasourceName: 'devds',
        // datasourceName: 'misds',
        schema:'TASSHMA',
        parameters:{
          startDate: {
            direction: 'IN',
            type: 'Integer',
          },
          expireDate: {
            direction: 'IN',
            type: 'Integer',
          },
          seri: {
            direction: 'IN',
            type: 'BigDecimal',
          },
          intCustIds: {
            direction: 'IN',
            type: 'String',
          },
          error: {
            direction: 'OUT',
            type: 'Integer',
          },
          step: {
            direction: 'OUT',
            type: 'Integer',
          },
        },
        resultSet:{
          prpslid: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          cstmrid: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          cstmrnaid: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          cstmrname: {
            direction: 'OUT',
            type: 'String',
          },
          lstrvworgunitcd: {
            direction: 'OUT',
            type: 'Integer',
          },
          otitlex: {
            direction: 'OUT',
            type: 'String',
          },
          rgndesc: {
            direction: 'OUT',
            type: 'String',
          },
          orgtitlex: {
            direction: 'OUT',
            type: 'String',
          },
          prpslsts: {
            direction: 'OUT',
            type: 'Short',
          },
          prpsltypcd: {
            direction: 'OUT',
            type: 'Integer',
          },
          prpsltypdsc: {
            direction: 'OUT',
            type: 'String',
          },
          fcltytypcd: {
            direction: 'OUT',
            type: 'Short',
          },
          fcltytypdsc: {
            direction: 'OUT',
            type: 'String',
          },
          cstmrintrstrt: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          fcltyamnt: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          asmahal: {
            direction: 'OUT',
            type: 'Integer',
          },
          amnt: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          dbt: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          sts: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          cdfarsidsc: {
            direction: 'OUT',
            type: 'String',
          },
        }
      },
      //  sendToTashilat - revoke past items
      /* sendTashilat1: {
        name: 'FDSPCU4',
        description: 'ارسال به تسهیلات - ابطال مصوبه',
        datasourceName: 'coreds',
        schema: 'TASSHMA',
        parameters: {
          //  شماره مصوبه
          spclApprvlId: {
            direction: 'IN',
            type: 'Double',
          },
          //  کد شعبه
          branch: {
            direction: 'IN',
            type: 'Integer',
          },
          systemDate: {
            direction: 'IN',
            type: 'Integer',
          },
          error: {
            direction: 'OUT',
            type: 'Integer',
          },
        },
        resultSet: {},
      },
      //  sendToTashilat - insert new items
      sendTashilat2: {
        //  FISPCU6 - Now this version is available.
        name: 'FISPCU5',
        description: 'ارسال به تسهیلات - تصویب',
        datasourceName: 'coreds',
        schema: 'TASSHMA',
        parameters: {
          //  کد کاربر
          usrcd: {
            direction: 'IN',
            type: 'String',
          },
          //  شماره مصوبه
          spclApprvlId: {
            direction: 'IN',
            type: 'Double',
          },
          //  تجمیع کدملی دریافت کنندگان تسهیلات - وام گیرندگان
          cstmrNatcd_collec: {
            direction: 'IN',
            type: 'String',
          },
          //  abc970509
          dscrp: {
            direction: 'IN',
            type: 'String',
          },
          //  2402
          branch: {
            direction: 'IN',
            type: 'Integer',
          },
          systemDate: {
            direction: 'IN',
            type: 'Integer',
          },
          error: {
            direction: 'OUT',
            type: 'Integer',
          },
        },
        resultSet: {},
      },
      //  sendToTashilat - update past items
      sendTashilat3: {
        name: 'FUSPCU4',
        description: 'ارسال به تسهیلات - بروزرسانی موارد قبل',
        datasourceName: 'coreds',
        schema: 'TASSHMA',
        parameters: {
          seri: {
            direction: 'IN',
            type: 'Double',
          },
          currentDate: {
            direction: 'IN',
            type: 'Integer',
          },
          fixNumber: {
            direction: 'IN',
            type: 'Integer',
          },
          currentDate: {
            direction: 'IN',
            type: 'Integer',
          },
          error: {
            direction: 'OUT',
            type: 'Integer',
          },
        },
        resultSet: {},
      }, */
    },
  },

  commitment:{
    jpas: {},
    restServices: {},
    storedProcedures: {
      rialLetterOfGuarantie: {
        name: 'SPR_ZNCNTRCTCSTM1',
        description: 'ضمانتنامه ریالی',
        // datasourceName: 'devds',
        // datasourceName: 'misds',
        datasourceName_Development: 'devds',
        datasourceName_Alpha: 'devds',
        datasourceName_Beta: 'misds',
        datasourceName_Production: 'coreds',
        schema: 'TASSHMA',
        parameters: {
          usercd: {
            direction: 'IN',
            type: 'String',
          },
          systemDT: {
            direction: 'IN',
            type: 'Integer',
          },
          intcstmrcd: {
            direction: 'IN',
            type: 'Integer',
          },
          fromdt: {
            direction: 'IN',
            type: 'Integer',
          },
          todt: {
            direction: 'IN',
            type: 'Integer',
          },
          error: {
            direction: 'OUT',
            type: 'Integer',
          },
          errorStep: {
            direction: 'OUT',
            type: 'Integer',
          },
        },
        resultSet: {
          cntrctId: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          cstmrId: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          cstmrName: {
            direction: 'OUT',
            type: 'String',
          },
          lgCntrctAmnt: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          lgFcltySts: {
            direction: 'OUT',
            type: 'Short',
          },
          grntngdt: {
            direction: 'OUT',
            type: 'Integer',
          },
          lgPrpslTypDsc: {
            direction: 'OUT',
            type: 'String',
          },
          lgMandeBedehi: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
        },
      },
      rialLetterOfCredit: {
        name: 'FRBLRBT1',
        description: 'اعتباراسنادی ریالی',
        datasourceName: 'devds',
        // datasourceName: 'misds',
        schema: 'TASSHMA',
        parameters: {
          intcstmrcd: {
            direction: 'IN',
            type: 'Integer',
          },
          fromdt: {
            direction: 'IN',
            type: 'Integer',
          },
          todt: {
            direction: 'IN',
            type: 'Integer',
          },
          error: {
            direction: 'OUT',
            type: 'Integer',
          },
        },
        resultSet: {
          cstmrId: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          cstmrName: {
            direction: 'OUT',
            type: 'String',
          },
          code_Foroshandeh: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          foroshande: {
            direction: 'OUT',
            type: 'String',
          },
          prpslTypDsc: {
            direction: 'OUT',
            type: 'String',
          },
          cntrctAmnt: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          cntrctId: {
            direction: 'OUT',
            type: 'String',
          },
          tarikhe_tasvib: {
            direction: 'OUT',
            type: 'String',
          },
          noe_aghd: {
            direction: 'OUT',
            type: 'String',
          },
          tarikhe_eta: {
            direction: 'OUT',
            type: 'Integer',
          },
          tarikhe_sarresid: {
            direction: 'OUT',
            type: 'Integer',
          },
          code_sarfasl: {
            direction: 'OUT',
            type: 'Integer',
          },
          // sarfasl_motalebati_kouni: {
          fcltySts: {
            direction: 'OUT',
            type: 'String',
          },
          lcMandeBedehi: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
        },
      },
      arzLetterOfGuarantie:{
        name: 'SPR_FNRGR_ZACNTRCTCS1',
        description: 'ضمانتنامه ارزی',
        datasourceName: 'devds',
        // datasourceName: 'misds',
        schema: 'TASSHMA',
        parameters: {
          intcstmrcd: {
            direction: 'IN',
            type: 'Integer',
          },
          fromdt: {
            direction: 'IN',
            type: 'Integer',
          },
          todt: {
            direction: 'IN',
            type: 'Integer',
          },
          error: {
            direction: 'OUT',
            type: 'Integer',
          },
        },
        resultSet: {
          cntrctId: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          cstmrId: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          cstmrName: {
            direction: 'OUT',
            type: 'String',
          },
          name_zinaf: {
            direction: 'OUT',
            type: 'String',
          },
          lgCntrctAmnt: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          name_arz: {
            direction: 'OUT',
            type: 'String',
          },
          lgFcltySts: {
            direction: 'OUT',
            type: 'Short',
          },
          grntngdt: {
            direction: 'OUT',
            type: 'Integer',
          },
          lgPrpslTypDsc: {
            direction: 'OUT',
            type: 'String',
          },
          lgMandeBedehi: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
        },
      },
      arzLetterOfCredit:{
        name: 'SPR_FNRMP_LCCNTRCTS1',
        description: 'اعتباراسنادی ارزی',
        datasourceName: 'devds',
        // datasourceName: 'misds',
        schema: 'TASSHMA',
        parameters: {
          repTyp: {
            direction: 'IN',
            type: 'Short',
          },
          intcstmrcd: {
            direction: 'IN',
            type: 'Integer',
          },
          fromdt: {
            direction: 'IN',
            type: 'Integer',
          },
          todt: {
            direction: 'IN',
            type: 'Integer',
          },
          error: {
            direction: 'OUT',
            type: 'Integer',
          },
          stepNo: {
            direction: 'OUT',
            type: 'Integer',
          },
        },
        resultSet: {
          cntrctId: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          cstmrId: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          cstmrName: {
            direction: 'OUT',
            type: 'String',
          },
          cntrctAmnt: {
            direction: 'OUT',
            type: 'BigDecimal',
            precision: 80,
            scale: 2
          },
          mablaghe_Khales: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          name_arz: {
            direction: 'OUT',
            type: 'String',
          },
          fcltySts: {
            direction: 'OUT',
            type: 'Short',
          },
          grntngdt: {
            direction: 'OUT',
            type: 'Integer',
          },
          prpslTypDsc: {
            direction: 'OUT',
            type: 'String',
          },
          mandehTashilat: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          mandehTahodat: {
            direction: 'OUT',
            type: 'BigDecimal',
          }
          // mandeBedehiTashilat: {
          //   direction: 'OUT',
          //   type: 'BigDecimal',
          // },
          // mandeBedehiTahodat: {
          //   direction: 'OUT',
          //   type: 'BigDecimal',
          // },
        },
      }
    }
  },
  collateral:{
    jpas: {},
    restServices: {},
    storedProcedures: {
      collateral:{
        name: 'SPG_CLTRL_SPCCLTRLINFO1',
        description: 'لیست وثایق',
        datasourceName: 'devds',
        // datasourceName: 'misds',
        schema: 'TASSHMA',
        parameters: {
          // return_parm: {
          //   direction: 'OUT',
          //   type: 'Integer',
          // },
          seri: {
            direction: 'IN',
            type: 'BigDecimal',
          },
          error: {
            direction: 'OUT',
            type: 'Integer',
          },
        },
        resultSet: {
          prpslId: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          customerId: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          customerName: {
            direction: 'OUT',
            type: 'String',
          },
          prpslTypCd: {
            direction: 'OUT',
            type: 'Integer',
          },
          prpslTypDsc: {
            direction: 'OUT',
            type: 'String',
          },
          collatreralTypCd: {
            direction: 'OUT',
            type: 'Integer',
          },
          collateralTypDsc: {
            direction: 'OUT',
            type: 'String',
          },
          collatreralGrpTypId: {
            direction: 'OUT',
            type: 'Integer',
          },
          collateralGrpTypDsc: {
            direction: 'OUT',
            type: 'String',
          },
          facilityAllocationAmount: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          commitmentAllocationAmount: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
        },
      }
    }
  },
  //  all jpas will go to 'Setting' menu
  baseInformation: {
    restServices: {},
    storedProcedures: {
      // .
      orgUnitChart: {
        name: 'FGORSPC1',
        description: 'بازیابی مدیریت شعب',
        datasourceName: 'misds',
        schema: 'JAMSHMA',
        parameters: {
          branch: {
            direction: 'IN',
            type: 'Integer',
          },
          flag: {
            direction: 'IN',
            type: 'Integer',
          },
          zonecode: {
            direction: 'OUT',
            type: 'Integer',
          },
        },
        resultSet: {
          branch: {
            direction: 'OUT',
            type: 'Integer',
          },
          title: {
            direction: 'OUT',
            type: 'String',
          },
          zoneCode: {
            direction: 'OUT',
            type: 'String',
          },
        }
      },
      // list of branchManagement - OLD storedProcedure
      // bMOU: {
      //   name: 'FGORSPC1',
      //   description: 'بازیابی لیست مدیریت شعب',
      //   datasourceName: 'misds',
      //   schema: 'JAMSHMA',
      //   parameters: {
      //     pi_branch: {
      //       direction: 'IN',
      //       type: 'Integer',
      //     },
      //     pi_flag: {
      //       direction: 'IN',
      //       type: 'Integer',
      //     },
      //     error: {
      //       direction: 'OUT',
      //       type: 'Integer',
      //     },
      //   },
      //   resultSet: {
      //     orgunitid: {
      //       direction: 'OUT',
      //       type: 'Integer',
      //     },
      //     orgunitdesc: {
      //       direction: 'OUT',
      //       type: 'String',
      //     },
      //     zonecode: {
      //       direction: 'OUT',
      //       type: 'Integer',
      //     },
      //     zonecode: {
      //       direction: 'OUT',
      //       type: 'Integer',
      //     },
      //   },
      // },
      //  list of ZONEs
      zoneList: {
        name: 'jBGBKZO3',
        description: 'بازیابی لیست مناطق',
        datasourceName: 'misds',
        schema: 'JAMSHMA',
        parameters: {
          error: {
            direction: 'OUT',
            type: 'Integer',
          },
        },
        resultSet: {
          zonecode: {
            direction: 'OUT',
            type: 'Integer',
          },
          zonedesc: {
            direction: 'OUT',
            type: 'String',
          },
        },
      },
      //  list of REGIONs (branchManagement) - NEW storedProcedure
      regionList: {
        name: 'JBGBKRG3',
        description: 'بازیابی لیست نواحی',
        datasourceName: 'misds',
        schema: 'JAMSHMA',
        parameters: {
          error: {
            direction: 'OUT',
            type: 'Integer',
          },
          zonecode: {
            direction: 'IN',
            type: 'String',
          },
        },
        resultSet: {
          rgncode: {
            direction: 'OUT',
            type: 'Integer',
          },
          rgndesc: {
            direction: 'OUT',
            type: 'String',
          },
          zonecode: {
            direction: 'OUT',
            type: 'Integer',
          },
          zonedesc: {
            direction: 'OUT',
            type: 'String',
          },
        },
      },
      //  list of Banchs - NEW storedProcedure
      branchList: {
        name: 'JBGORGN3',
        description: 'بازیابی اطلاعات شعب',
        datasourceName: 'misds',
        schema: 'JAMSHMA',
        parameters: {
          error: {
            direction: 'OUT',
            type: 'Integer',
          },
          rgncode: {
            direction: 'IN',
            type: 'Integer',
          },
        },
        resultSet: {
          branch: {
            direction: 'OUT',
            type: 'Integer',
          },
          titlex: {
            direction: 'OUT',
            type: 'String',
          },
          orgtype: {
            direction: 'OUT',
            type: 'Integer',
          },
          rgncode: {
            direction: 'OUT',
            type: 'Integer',
          },
          rgndesc: {
            direction: 'OUT',
            type: 'String',
          },
          zonecode: {
            direction: 'OUT',
            type: 'Integer',
          },
          zonedesc: {
            direction: 'OUT',
            type: 'String',
          },
        },
      },
      //  list of Branch & BranchManagement
      //  existing sourceCode
      /* listBranchBranchMangement: {
        name: 'FGORSPC1',
        description: 'بازیابی لیست مدیریت شعب وشعب',
        datasourceName: 'localds',
        schema: 'TAFSCHM',
        parameters: {
          //  0 -> list of Regions (BranchManagement)
          //  BranchManagement -> list of Branchs
          fixNumber1: {
            direction: 'IN',
            type: 'Integer',
          },
          //  0
          fixNumber2: {
            direction: 'IN',
            type: 'Integer',
          },
          error: {
            direction: 'OUT',
            type: 'Integer',
          },
        },
        resultSet: {
          orgUnitId: {
            direction: 'OUT',
            type: 'Integer',
          },
          orgUnitDesc: {
            direction: 'OUT',
            type: 'String',
          },
        },
      }, */
      extCustNo2NameNew: {

        name: 'EXTCUSTNAME2NO',
        description: 'تبدیل شماره خارجی مشتری به نام مشتری',
        datasourceName: 'misds',
        schema: 'JAMSHMA',
        parameters: {
          extCustId: {
            direction: 'IN',
            type: 'BigDecimal',
          },
          intCustId: {
            direction: 'OUT',
            type: 'Integer',
          },
          ownerName: {
            direction: 'OUT',
            type: 'String',
          },
          registerNo: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          nationalId: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
        },
        resultSet: {}
      },
      // extCustNo2Name: {
      //   name: 'SPG_CUSTOMERINFO01',
      //   description: 'تبدیل شماره خارجی مشتری به نام مشتری',
      //   datasourceName: 'devds',
      //   schema: 'TSTSHMA',
      //   parameters: {
      //     error: {
      //       direction: 'OUT',
      //       type: 'Integer',
      //     },
      //     pi_extCustId: {
      //       direction: 'IN',
      //       type: 'BigDecimal',
      //     },
      //     po_idNo: {
      //       direction: 'OUT',
      //       type: 'Integer',
      //     },
      //     po_postCode: {
      //       direction: 'OUT',
      //       type: 'String',
      //     },
      //     po_passportNo: {
      //       direction: 'OUT',
      //       type: 'String',
      //     },
      //     po_tel: {
      //       direction: 'OUT',
      //       type: 'String',
      //     },
      //     po_address: {
      //       direction: 'OUT',
      //       type: 'String',
      //     },
      //     po_custName: {
      //       direction: 'OUT',
      //       type: 'String',
      //     },
      //     po_custNationalCode: {
      //       direction: 'OUT',
      //       type: 'String',
      //     },
      //     po_custType: {
      //       direction: 'OUT',
      //       type: 'BigDecimal',
      //     },
      //     po_stabJustInYNo: {
      //       direction: 'OUT',
      //       type: 'String',
      //     },
      //     po_step: {
      //       direction: 'OUT',
      //       type: 'Integer',
      //     },
      //   },
      //   resultSet: {}
      // },
      accountDetail: {
        name: 'ACCNTDTLS1',
        description: 'بازیابی جزئیات حساب براساس شماره حساب خارجی',
        datasourceName: 'misds',
        schema: 'JAMSHMA',
        parameters: {
          extAccNoVar: {
            direction: 'IN',
            type: 'BigDecimal',
          },
          accNo: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          extAccNo: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          intCustId: {
            direction: 'OUT',
            type: 'Integer',
          },
          extCustId: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          ownerName: {
            direction: 'OUT',
            type: 'String',
          },
          accType: {
            direction: 'OUT',
            type: 'Short',
          },
          categoryCode: {
            direction: 'OUT',
            type: 'Short',
          },
          custType: {
            direction: 'OUT',
            type: 'Short',
          },
          accDesc: {
            direction: 'OUT',
            type: 'String',
          },
          arzCode: {
            direction: 'OUT',
            type: 'Short',
          },
          arzType: {
            direction: 'OUT',
            type: 'String',
          },
          nationalCode: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          balance: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
          branch: {
            direction: 'OUT',
            type: 'Integer',
          },
          titlex: {
            direction: 'OUT',
            type: 'String',
          },
          statusx: {
            direction: 'OUT',
            type: 'Short',
          },
          // vaziat: {
          //   direction: 'OUT',
          //   type: 'Short',
          // },
          createDate: {
            direction: 'OUT',
            type: 'Integer',
          },
          statusDate: {
            direction: 'OUT',
            type: 'Integer',
          },
          tarjihiRate: {
            direction: 'OUT',
            type: 'BigDecimal',
          },
        },
        resultSet: {}
      }
    },
    jpas: {
      tasParameter: {
        lable: 'پارامترهای تسهیلات',
        datasourceName: 'localds',
        schema: 'TAFSCHM',
        menuTitle:'setting',
        multiStepForm: ['پارامترهای کلی', 'نرخ سود/جایزه', 'حدنقدینگی', 'نرخ سپرده قانونی', 'جایزه سپرده قانونی'],
        content: [
          [
            {
              lable: 'ردیف ',
              title: 'uniqueCode',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'long',
                  // type: 'BigDecimal',
                  // precision: 31,
                  // scale: 0,
                  // isIndex: true,
                  isPrimaryKey: true,
                  primaryKeyStrategy: 'IDENTITY',
                  isVisible: false,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'تاریخ',
              title: 'configDate',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'Date',
                  position: 'bottom',
                  // size: { minValue: 0, maxValue: 1 },
                  isGridLayout: true,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          //  tasParameter
          [
            {
              //
              lable: 'سود تسهیلات عقود مشارکتی تدریجی',
              title: 'tadrijiIRate',
              step: 0,
              value: {
                type: 'non-primitive',
                schema: {
                  //  Entity Schema
                  //  EntityGenerator.js
                  // type: 'Short',
                  type: 'BigDecimal',
                  precision: 18,
                  scale: 2,
                  // isNotNull: true, //  Default Value
                  // isNotBlank: true, //  Default Value
                  // isEmail: true, //  Default Value
                  // isUnique: false, // Default Value
                  // size: { minValue: 5, maxValue: 50 }, //  Default Value
                  // columnLength: 50, //  Default Value
                  //  util.js
                  // isValidInModelBuilder: true, //  Default Value
                  // isValidInEntityBuilder: true, //  Default Value
                  //  ui schema
                  isPercent: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'سود تسهیلات عقود سرمایه درگردش',
              title: 'gardeshIRate',
              step: 0,
              value: {
                type: 'non-primitive',
                schema: {
                  // type: 'Short',
                  type: 'BigDecimal',
                  precision: 18,
                  scale: 2,
                  isPercent:true,
                  isGridLayout: false,
                  largeBreakpointWidth: 2,
                },
              },
            },
          ],
          [
            {
              lable: 'ضريب هزينه اقلام مطالباتي',
              title: 'mashkoukCostCoefficient',
              step: 0,
              value: {
                type: 'non-primitive',
                schema: {
                  // type: 'Short',
                  type: 'BigDecimal',
                  precision: 18,
                  scale: 2,
                  isPercent: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'نرخ کارمزد تسهیلات قرض الحسنه',
              title: 'gharzWageRate',
              step: 0,
              value: {
                type: 'non-primitive',
                schema: {
                  // type: 'Short',
                  type: 'BigDecimal',
                  precision: 18,
                  scale: 2,
                  isPercent: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              lable: '',
              title: '',
              step: 0,
              value: {
                type: 'emptyCell',
                schema: {
                  type: 'emptyRow',
                  rowMargin:5,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              lable: '',
              title: '',
              step: 0,
              value: {
                type: 'emptyCell',
                schema: {
                  type: 'emptyRow',
                  rowMargin:5,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          //  tasParameterNerkheSoudJayeze
          [
            {
              lable: 'حساب جاری',
              title: 'jariAccSudJayeze',
              step: 1,
              value: {
                type: 'non-primitive',
                schema: {
                  // type: 'Short',
                  type: 'BigDecimal',
                  precision: 18,
                  scale: 2,
                  isPercent: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'حساب کوتاه مدت عادی',
              title: 'shortAccAdiSudJayeze',
              step: 1,
              value: {
                type: 'non-primitive',
                schema: {
                  // type: 'Short',
                  type: 'BigDecimal',
                  precision: 18,
                  scale: 2,
                  isPercent: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              lable: 'حساب کوتاه مدت ویژه',
              title: 'vizheKhadamatSudJayeze',
              step: 1,
              value: {
                type: 'non-primitive',
                schema: {
                  // type: 'Short',
                  type: 'BigDecimal',
                  precision: 18,
                  scale: 2,
                  isPercent: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'حساب کوتاه مدت با نرخ ترجیحی',
              title: 'shortAccTarjihiSudJayeze',
              step: 1,
              value: {
                type: 'non-primitive',
                schema: {
                  // type: 'Short',
                  type: 'BigDecimal',
                  precision: 18,
                  scale: 2,
                  isPercent: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              lable: 'حساب پس انداز',
              title: 'gharzAccSudJayeze',
              step: 1,
              value: {
                type: 'non-primitive',
                schema: {
                  // type: 'Short',
                  type: 'BigDecimal',
                  precision: 18,
                  scale: 2,
                  isPercent: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'حساب بلندمدت یکساله',
              title: 'longAccSudJayeze',
              step: 1,
              value: {
                type: 'non-primitive',
                schema: {
                  // type: 'Short',
                  type: 'BigDecimal',
                  precision: 18,
                  scale: 2,
                  isPercent: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              lable: 'حساب جاری دولتی',
              title: 'jariDolatiAccSudJayeze',
              step: 1,
              value: {
                type: 'non-primitive',
                schema: {
                  // type: 'Short',
                  type: 'BigDecimal',
                  precision: 18,
                  scale: 2,
                  isPercent: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: '',
              title: '',
              value: {
                type: 'emptyCell',
                schema: {
                  type: 'emptyCell',
                },
              },
            },
          ],
          //  tasParameterHadeNaghdinegi
          [
            {
              lable: 'حساب جاری',
              title: 'jariAccHadNaghdinegi',
              step: 2,
              value: {
                type: 'non-primitive',
                schema: {
                  // type: 'Short',
                  type: 'BigDecimal',
                  precision: 18,
                  scale: 2,
                  isPercent: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'حساب کوتاه مدت عادی',
              title: 'shortAccHadNaghdinegi',
              step: 2,
              value: {
                type: 'non-primitive',
                schema: {
                  // type: 'Short',
                  type: 'BigDecimal',
                  precision: 18,
                  scale: 2,
                  isPercent: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              lable: 'حساب کوتاه مدت ویژه',
              title: 'shortAccVijeHadNaghdinegi',
              step: 2,
              value: {
                type: 'non-primitive',
                schema: {
                  // type: 'Short',
                  type: 'BigDecimal',
                  precision: 18,
                  scale: 2,
                  isPercent: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'حساب کوتاه مدت با نرخ ترجیحی',
              title: 'shortAccTarjihiHadNaghdinegi',
              step: 2,
              value: {
                type: 'non-primitive',
                schema: {
                  // type: 'Short',
                  type: 'BigDecimal',
                  precision: 18,
                  scale: 2,
                  isPercent: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              lable: 'حساب پس انداز',
              title: 'gharzAccHadNaghdinegi',
              step: 2,
              value: {
                type: 'non-primitive',
                schema: {
                  // type: 'Short',
                  type: 'BigDecimal',
                  precision: 18,
                  scale: 2,
                  isPercent: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'حساب بلندمدت یکساله',
              title: 'longAccHadNaghdinegi',
              step: 2,
              value: {
                type: 'non-primitive',
                schema: {
                  // type: 'Short',
                  type: 'BigDecimal',
                  precision: 18,
                  scale: 2,
                  isPercent: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              lable: 'حساب جاری دولتی',
              title: 'jariDolatiHadNaghdinegi',
              step: 2,
              value: {
                type: 'non-primitive',
                schema: {
                  // type: 'Short',
                  type: 'BigDecimal',
                  precision: 18,
                  scale: 2,
                  isPercent: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: '',
              title: '',
              value: {
                type: 'emptyCell',
                schema: {
                  type: 'emptyCell',
                },
              },
            },
          ],
          //  tasParameterNerkheSepordeGhanouni
          [
            {
              lable: 'حساب جاری',
              title: 'jariAccNerkheGhanooni',
              step: 3,
              value: {
                type: 'non-primitive',
                schema: {
                  // type: 'Short',
                  type: 'BigDecimal',
                  precision: 18,
                  scale: 2,
                  isPercent: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'حساب کوتاه مدت عادی',
              title: 'shortAccNerkheGhanooni',
              step: 3,
              value: {
                type: 'non-primitive',
                schema: {
                  // type: 'Short',
                  type: 'BigDecimal',
                  precision: 18,
                  scale: 2,
                  isPercent: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              lable: 'حساب کوتاه مدت ویژه',
              title: 'shortAccVizheNerkheGhanooni',
              step: 3,
              value: {
                type: 'non-primitive',
                schema: {
                  // type: 'Short',
                  type: 'BigDecimal',
                  precision: 18,
                  scale: 2,
                  isPercent: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'حساب کوتاه مدت با نرخ ترجیحی',
              title: 'shortAccTarjihiNerkheGhanooni',
              step: 3,
              value: {
                type: 'non-primitive',
                schema: {
                  // type: 'Short',
                  type: 'BigDecimal',
                  precision: 18,
                  scale: 2,
                  isPercent: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              lable: 'حساب پس انداز',
              title: 'gharzAccNerkheGhanooni',
              step: 3,
              value: {
                type: 'non-primitive',
                schema: {
                  // type: 'Short',
                  type: 'BigDecimal',
                  precision: 18,
                  scale: 2,
                  isPercent: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'حساب بلندمدت یکساله',
              title: 'longAccNerkheGhanooni',
              step: 3,
              value: {
                type: 'non-primitive',
                schema: {
                  // type: 'Short',
                  type: 'BigDecimal',
                  precision: 18,
                  scale: 2,
                  isPercent: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              lable: 'حساب جاری دولتی',
              title: 'jariAccDolatiNerkheGhanooni',
              step: 3,
              value: {
                type: 'non-primitive',
                schema: {
                  // type: 'Short',
                  type: 'BigDecimal',
                  precision: 18,
                  scale: 2,
                  isPercent: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: '',
              title: '',
              value: {
                type: 'emptyCell',
                schema: {
                  type: 'emptyCell',
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          //  tasParameterJayezeSepordeGhanouni
          [
            {
              lable: 'حساب جاری',
              title: 'jariAccJayezeSeporde',
              step: 4,
              value: {
                type: 'non-primitive',
                schema: {
                  // type: 'Short',
                  type: 'BigDecimal',
                  precision: 18,
                  scale: 2,
                  isPercent: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'حساب کوتاه مدت عادی',
              title: 'shortAccJayezeSeporde',
              step: 4,
              value: {
                type: 'non-primitive',
                schema: {
                  // type: 'Short',
                  type: 'BigDecimal',
                  precision: 18,
                  scale: 2,
                  isPercent: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              lable: 'حساب کوتاه مدت ویژه',
              title: 'shortAccVizheJayezeSeporde',
              step: 4,
              value: {
                type: 'non-primitive',
                schema: {
                  // type: 'Short',
                  type: 'BigDecimal',
                  precision: 18,
                  scale: 2,
                  isPercent: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'حساب پس انداز',
              title: 'gharzAccJayezeSeporde',
              step: 4,
              value: {
                type: 'non-primitive',
                schema: {
                  // type: 'Short',
                  type: 'BigDecimal',
                  precision: 18,
                  scale: 2,
                  isPercent: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              lable: 'حساب بلندمدت یکساله',
              title: 'longAccJayezeSeporde',
              step: 4,
              value: {
                type: 'non-primitive',
                schema: {
                  // type: 'Short',
                  type: 'BigDecimal',
                  precision: 18,
                  scale: 2,
                  isPercent: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: '',
              title: '',
              value: {
                type: 'emptyCell',
                schema: {
                  type: 'emptyCell',
                },
              },
            },
          ],
        ],
      },
      smsParameter: {
        lable: 'پارامتر پیامک',
        datasourceName: 'localds',
        schema: 'TAFSCHM',
        menuTitle:'setting',
        // appObjectId: 'smsParameter',
        multiStepForm: ['تنظیم پارامترها', 'مخاطبین'],
        content: [
          // [
          //   {
          //     lable: 'عنوان پیامک',
          //     title: 'title',
          //     value: {
          //       type: 'primitive',
          //       schema: {
          //         type: 'String',
          //         isGridLayout: true,
          //         largeBreakpointWidth: 1,
          //       },
          //     },
          //   },
          //   {
          //     lable: 'تاریخ بروزرسانی',
          //     title: 'updateData',
          //     value: {
          //       type: 'primitive',
          //       schema: {
          //         type: 'Date',
          //         isGridLayout: true,
          //         largeBreakpointWidth: 1,
          //       },
          //     },
          //   },
          //   {
          //     lable: 'متن پیامک',
          //     title: 'content',
          //     value: {
          //       type: 'primitive',
          //       schema: {
          //         type: 'String',
          //         isGridLayout: false,
          //         largeBreakpointWidth: 1,
          //       },
          //     },
          //   },
          // ],
          [
            {
              lable: 'کد ردیف ',
              title: 'uniqueCode',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'long',
                  // type: 'BigDecimal',
                  // precision: 31,
                  // scale: 0,
                  isPrimaryKey: true,
                  primaryKeyStrategy: 'IDENTITY',
                  isVisible: false,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: '',
              title: '',
              value: {
                type: 'emptyCell',
                schema: {
                  type: 'emptyCell',
                },
              },
            },
            {
              lable: 'تاریخ',
              title: 'configDate',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'Date',
                  position: 'bottom',
                  // size: { minValue: 0, maxValue: 10 },
                  isGridLayout: true,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              lable: 'روش ارسال',
              title: 'sendMethod',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  // size: { minValue: 0, maxValue: 1 },
                  enum: ['ارسال موردی', 'ارسال دوره ای'],
                  // option: 'radio',
                  option: 'check',
                  colSize: 4,
                  inline: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'توضیحات',
              title: 'description',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  enum: [
                    {
                      key:0,
                      value: ['در ارسال موردی، متن پیامک مرتبط با موضوع (تغییروضعیت/ اعلام سررسید) به طور اتوماتیک تنظیم و در "',`<strong key={0}><u>زمان تحقق موضوع</u></strong>`, '" به مخاطبین ارسال خواهد شد.'],
                      enabled:{
                        // rule:{
                        //   // '!=':[{'var':'state.resourceAllocationMethod'},0]
                        //   '==':[{'var':'state.sendMethod'},0]
                        // },
                        // rule:{
                        //   'and':[
                        //     {'!=':[{'var':'state.resourceAllocationMethod'},0]},
                        //     {'==':[{'var':'state.calculateAVGMethod'},1]}
                        //   ],
                        // }
                        rule:{
                          'includes':[{'var':'state.sendMethod'},{'num':'"0"'}]
                        }
                      }
                    },
                    {
                      key:1,
                      value:['در ارسال دوره ای، متن پیامک مرتبط با موضوع (میزان منابع/ مصارف) به طور اتوماتیک تنظیم و در "',`<strong key={1}><u>مقطع زمانی مشخص</u></strong>`, '" به مخاطبین ارسال خواهد شد.'],
                      enabled:{
                        // rule:{
                        //   // '!=':[{'var':'state.resourceAllocationMethod'},0]
                        //   '==':[{'var':'state.sendMethod'},1]
                        // }
                        rule:{
                          'includes':[{'var':'state.sendMethod'},{'num':'"1"'}]
                        }
                      }
                    },
                  ],
                  option: 'span',
                  fontSize: 6,
                  colSize: 8,
                  inline: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            // {
            //   lable: '',
            //   title: '',
            //   value: {
            //     type: 'emptyCell',
            //     schema: {
            //       type: 'emptyCell',
            //     },
            //   },
            // },
          ],
          [
            //  ارسال موردی
            {
              lable: 'موضوع در ارسال موردی',
              title: 'eventMthdSubject',  
              //  time-trigger approach or event-trigger approach
              // fixTime/time-to-event/eventTrigger/trigger
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',                                   //  job-1   job-2   job-3
                  enum: ['تغییر وضعیت تفاهم نامه از دردست اقدام به بلااقدام', 'تغییر وضعیت تفاهم نامه از دردست اقدام به نافذ', 'تغییر وضعیت از نافذ به منقضی شده', 'اعلام سررسید انقضای زمان تفاهم نامه در بازه ۳۰ روزه', 'اعلام سررسید انقضای زمان تفاهم نامه در بازه ۶۰ روزه'],
                  // size: { minValue: 0, maxValue: 1 },
                  option: 'check',                                  //  schedule-1
                  // colSize: 4,
                  isVisible: {
                    // rule:{
                    // '==':[{'var':'state.sendMethod'},'"0"']
                    // }
                    rule:{
                      'includes':[{'var':'state.sendMethod'},{'num':'"0"'}]
                    }
                  },
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            //  ارسال دوره ای
            {
              lable: 'موضوع در ارسال دوره ای',
              title: 'cyclicMthdSubject',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',                                   //  job-4   job-5   job-6
                  enum: ['میزان منابع (مانده ومعدل)', 'میزان مصارف تفاهم نامه'],
                  // , 'میزان منابع (مانده و معدل) و مصارف تفاهم نامه'
                  option: 'check',
                  isVisible: {
                    // rule:{
                    // '==':[{'var':'state.sendMethod'},'"1"']
                    // }
                    rule:{
                      'includes':[{'var':'state.sendMethod'},{'num':'"1"'}]
                    }
                  },
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'مقطع زمانی',
              title: 'timeInterval',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'Short',
                  // enum: ['روزانه', 'هفتگی', 'ماهانه', '۳ماهه'],     //  schedule-2
                  // option: 'radio',
                  enum:[
                    {
                      key:0,
                      value: ['روزانه'],
                    },
                    {
                      key:1,
                      value: ['هفتگی'],
                    },
                    {
                      key:2,
                      value: ['ماهانه'],
                    },
                    {
                      key:3,
                      value: ['۳ماهه'],
                    },
                  ],
                  option: 'radioWithAO',
                  isVisible: {
                    // rule:{
                    // '==':[{'var':'state.sendMethod'},'"1"']
                    // }
                    rule:{
                      'includes':[{'var':'state.sendMethod'},{'num':'"1"'}]
                    }
                  },
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            // {
            //   lable: '',
            //   title: '',
            //   value: {
            //     type: 'emptyCell',
            //     schema: {
            //       type: 'emptyCell',
            //     },
            //   },
            // },
            // {
            //   lable: '',
            //   title: '',
            //   value: {
            //     type: 'emptyCell',
            //     schema: {
            //       type: 'emptyCell',
            //     },
            //   },
            // },
          ],
          [
            {
              lable: 'پیش نمایش متن پیامک',
              title: 'smsPreview',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  enum: [
                    // {
                    //   key:0,
                    //   value: ['باسلام، وضعیت تفاهم نامه ....از دردست اقدام به بلااقدام تغییر یافت. واحد تفاهم نامه'],
                    //   enabled:{
                    //     rule:{
                    //       'and':[
                    //         {'includes':[{'var':'state.sendMethod'},{'num':'"0"'}]},
                    //         {'includes':[{'var':'state.eventMthdSubject'},{'num':'"0"'}]}
                    //       ],
                    //     }
                    //   }
                    // },
                    {
                      key:1,
                      value:['باسلام، وضعیت تفاهم نامه ....از دردست اقدام به نافذ تغییر یافت. واحد تفاهم نامه ها'],
                      enabled:{
                        'and':[
                          {'includes':[{'var':'state.sendMethod'},{'num':'"0"'}]},
                          {'includes':[{'var':'state.eventMthdSubject'},{'num':'"1"'}]}
                        ],
                        // rule:{
                        //   'includes':[{'var':'state.sendMethod'},{'num':'"0"'}]
                        // }
                      }
                    },
                    // {
                    //   key:1,
                    //   value:['باسلام، وضعیت تفاهم نامه ....از نافذ به منقضی شده تغییر یافت. واحد تفاهم نامه ها'],
                    //   enabled:{
                    //     'and':[
                    //       {'includes':[{'var':'state.sendMethod'},{'num':'"0"'}]},
                    //       {'includes':[{'var':'state.eventMthdSubject'},{'num':'"1"'}]}
                    //     ],
                    //     // rule:{
                    //     //   'includes':[{'var':'state.sendMethod'},{'num':'"0"'}]
                    //     // }
                    //   }
                    // },
                    // {
                    //   key:1,
                    //   value:['باسلام، تفاهم نامه ....تا ۳۰ روز دیگر منقضی خواهد شد. واحد تفاهم نامه ها'],
                    //   enabled:{
                    //     rule:{
                    //       'includes':[{'var':'state.sendMethod'},{'num':'"0"'}]
                    //     }
                    //   }
                    // },
                    // {
                    //   key:1,
                    //   value:['باسلام، تفاهم نامه ....تا ۶۰ روز دیگر منقضی خواهد شد. واحد تفاهم نامه ها'],
                    //   enabled:{
                    //     rule:{
                    //       'includes':[{'var':'state.sendMethod'},{'num':'"0"'}]
                    //     }
                    //   }
                    // },
                    // {
                    //   key:1,
                    //   value:['باسلام، منابع تفاهم نامه ..... به مبلغ .... می باشد. واحد تفاهم نامه ها'],
                    //   enabled:{
                    //     rule:{
                    //       'includes':[{'var':'state.sendMethod'},{'num':'"1"'}]
                    //     }
                    //   }
                    // },
                    // {
                    //   key:1,
                    //   value:['باسلام، مصارف تفاهم نامه ..... به مبلغ .... می باشد. واحد تفاهم نامه ها'],
                    //   enabled:{
                    //     rule:{
                    //       'includes':[{'var':'state.sendMethod'},{'num':'"1"'}]
                    //     }
                    //   }
                    // },
                  ],
                  option: 'multiSpan',
                  fontSize: 6,
                  colSize: 12,
                  inline: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            // {
            //   lable: 'پیش نمایش متن پیامک',
            //   title: 'smsPreview',
            //   step: 0,
            //   value: {
            //     type: 'primitive',
            //     schema: {
            //       type: 'String',
            //       enum: [
            //         {
            //           key:1,
            //           value:['باسلام، وضعیت تفاهم نامه ....از دردست اقدام به نافذ تغییر یافت. واحد تفاهم نامه ها'],
            //           enabled:{
            //             'and':[
            //               {'includes':[{'var':'state.sendMethod'},{'num':'"0"'}]},
            //               {'includes':[{'var':'state.eventMthdSubject'},{'num':'"0"'}]}
            //             ],
            //             // rule:{
            //             //   'includes':[{'var':'state.sendMethod'},{'num':'"0"'}]
            //             // }
            //           }
            //         },
            //       ],
            //       option: 'span',
            //       fontSize: 6,
            //       colSize: 8,
            //       inline: true,
            //       isGridLayout: false,
            //       largeBreakpointWidth: 1,
            //     },
            //   },
            // },
          ],
          [
            {
              lable: 'مخاطبین',
              title: 'audience',
              step: 1,
              value: {
                type: 'non-primitive',
                schema: {
                  type: 'String',
                  option: 'smsUserSelection',
                  // stateKey: ['stateCode','stateDescription'],
                  disabled: false,
                  isVisible: true,
                  isGridLayout: false,
                  largeBreakpointWidth: 2,
                },
              },
            },
          ]
        ],
      },
      notificationParameter: {
        lable: 'پارامتر هشدار',
        datasourceName: 'localds',
        schema: 'TAFSCHM',
        menuTitle:'setting',
        // appObjectId: 'notificationParameter',
        multiStepForm: [],
        content: [
          [
            {
              lable: '',
              title: '',
              value: {
                type: 'emptyCell',
                schema: {
                  type: 'emptyCell',
                },
              },
            },
            {
              lable: 'ردیف ',
              title: 'uniqueCode',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'long',
                  // type: 'BigDecimal',
                  // precision: 31,
                  // scale: 0,
                  isPrimaryKey: true,
                  isVisible: false,
                  isGridLayout: false,
                  primaryKeyStrategy: 'IDENTITY',
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'تاریخ',
              title: 'configDate',
              step: 0,
              value: {
                type: 'primitive',
                schema: {
                  type: 'Date',
                  position: 'bottom',
                  // size: { minValue: 0, maxValue: 10 },
                  isGridLayout: true,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              lable: '',
              title: '',
              value: {
                type: 'emptyCell',
                schema: {
                  type: 'emptyCell',
                },
              },
            },
            {
              lable: 'عنوان هشدار',
              title: 'type',
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  enum: ['استفاده از ۸۵ درصد تسهیلات قابل اعطا براساس معدل منابع', 'استفاده از ۸۵ درصد تسهیلات قابل اعطا براساس مبلغ ثابت', 'مدت زمان ۳۰ روز مانده به انقضای هریک از تفاهم نامه ها', 'مدت زمان ۶۰ روز مانده به انقضای هریک از تفاهم نامه ها', 'کاهش/ افزایش بیش از ۲۰درصد مانده منابع (ریالی-ارزی) تفاهم نامه', 'کاهش/ افزایش بیش از ۲۰درصد معدل منابع (ریالی-ارزی) تفاهم نامه'],
                  option: 'check',
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: '',
              title: '',
              value: {
                type: 'emptyCell',
                schema: {
                  type: 'emptyCell',
                },
              },
            },
            // {
            //   lable: 'درصد منابع به مصارف',
            //   title: 'resourceToExpencePercentage',
            //   value: {
            //     type: 'primitive',
            //     schema: {
            //       type: 'String',
            //       inline: true,
            //       isGridLayout: true,
            //       largeBreakpointWidth: 1,
            //     },
            //   },
            // },
          ],
          [
            // {
            //   lable: 'محتوی پیام',
            //   title: 'content',
            //   value: {
            //     type: 'primitive',
            //     schema: {
            //       type: 'String',
            //       isGridLayout: false,
            //       largeBreakpointWidth: 1,
            //     },
            //   },
            // },
          ],
        ],
      },
    },
  },
  // report: {
  //   restServices: {},
  //   storedProcedures:{},
  //   jpas:{
  //   },
  // }

  // dashboardRpt: {
  //   jpas: {
  //   },
  //   restServices: {},
  //   storedProcedures: {
  //     rialLetterOfGuarantie: {
  //       name: 'SPR_ZNCNTRCTCSTM1',
  //       description: 'بازیابی اعتباراسنادی ریالی',
  //       datasourceName: 'misds',
  //       schema: 'TASSHMA',
  //       parameters: {
  //         usercd: {
  //           direction: 'IN',
  //           type: 'String',
  //         },
  //         systemDT: {
  //           direction: 'IN',
  //           type: 'Integer',
  //         },
  //         intcstmrcd: {
  //           direction: 'IN',
  //           type: 'Integer',
  //         },
  //         fromdt: {
  //           direction: 'IN',
  //           type: 'Integer',
  //         },
  //         todt: {
  //           direction: 'IN',
  //           type: 'Integer',
  //         },
  //         error: {
  //           direction: 'OUT',
  //           type: 'Integer',
  //         },
  //         errorStep: {
  //           direction: 'OUT',
  //           type: 'Integer',
  //         },
  //       },
  //       resultSet: {
  //         cntrctId: {
  //           direction: 'OUT',
  //           type: 'BigDecimal',
  //         },
  //         cstmrId: {
  //           direction: 'OUT',
  //           type: 'BigDecimal',
  //         },
  //         cstmrName: {
  //           direction: 'OUT',
  //           type: 'String',
  //         },
  //         cntrctAmnt: {
  //           direction: 'OUT',
  //           type: 'String',
  //         },
  //         fcltySts: {
  //           direction: 'OUT',
  //           type: 'Short',
  //         },
  //         grntngdt: {
  //           direction: 'OUT',
  //           type: 'Integer',
  //         },
  //         prpslTypDsc: {
  //           direction: 'OUT',
  //           type: 'String',
  //         },
  //       },
  //     },
  //   },
  // },

  /*   serviceDomain: {
      restServices: {},
      storedProcedures: {},
      jpas: {
        serviceDomain: {
          lable: 'اقدامات',
          datasourceName: 'localds',
          schema: 'TAFSCHM',
          content: [
            [
              {
                lable: 'ردیف',
                title: 'rowNumber',
                value: {
                  type: 'primitive',
                  schema: {
                    type: 'long',
                    isPrimaryKey: true,
                    isGridLayout: true,
                    largeBreakpointWidth: 1,
                  },
                },
              },
              {
                lable: 'لیبل',
                title: 'lable',
                value: {
                  type: 'primitive',
                  schema: {
                    type: 'String',
                    isGridLayout: true,
                    largeBreakpointWidth: 1,
                  },
                },
              },
              {
                lable: '',
                title: '',
                value: {
                  type: 'emptyCell',
                  schema: {
                    type: 'emptyCell',
                  },
                },
              },
              {
                lable: 'عنوان',
                title: 'title',
                value: {
                  type: 'primitive',
                  schema: {
                    type: 'String',
                    isGridLayout: true,
                    largeBreakpointWidth: 1,
                  },
                },
              },
            ],
            [
              {
                lable: 'نوع داده',
                title: 'type',
                value: {
                  type: 'primitive',
                  schema: {
                    type: 'String',
                    option: 'select',
                    enum: [
                      'رادیو باکس',
                      'چک باکس',
                      'کلمه',
                      'متن',
                      'کمبو',
                      'سويیچ',
                      'تاریخ',
                      // 'Integer',
                      // 'String',
                      // 'BigDecimal',
                      // 'long',
                      // 'Boolean',
                      // 'Date',
                      // 'emptyCell',
                      // 'file',
                    ],
                    isGridLayout: false,
                    largeBreakpointWidth: 1,
                  },
                },
              },
              {
                lable: 'نمایش در گرید',
                title: 'isGridLayout',
                value: {
                  type: 'primitive',
                  schema: {
                    type: 'Boolean',
                    option: 'switch',
                    enum: ['نمایش در گرید'],
                    isGridLayout: false,
                    largeBreakpointWidth: 1,
                  },
                },
              },
              {
                lable: 'اندازه ستون',
                title: 'largeBreakinWidth',
                value: {
                  type: 'primitive',
                  schema: {
                    type: 'Integer',
                    isGridLayout: false,
                    largeBreakpointWidth: 1,
                  },
                },
              },
            ],
          ],
        },
      },
    },
   */
};




/*       tafahomFinalForm: {
        lable: 'اطلاعات نهایی',
        datasourceName: 'localds',
        schema: 'TAFSCHM',
        content: [
          [
            {
              lable: 'شماره آرشیو',
              title: 'archiveNumber',
              value: {
                type: 'primitive',
                schema: {
                  type: 'long',
                  isPrimaryKey: true,
                  isGridLayout: true,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'عنوان تفاهم نامه',
              title: 'title',
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              lable: 'مدیریت شعب عامل',
              title: 'managementBranch',
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'شعبه عامل',
              title: 'branchNO',
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              lable: 'کدتفاهم نامه',
              title: 'code',
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'کارشناس تفاهم نامه',
              title: 'userName',
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              lable: 'شماره مشتری/ سازمان',
              title: 'customerId',
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'نام مشتری/ سازمان',
              title: 'customerName',
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              lable: 'تاریخ انعقاد',
              title: 'startDta',
              value: {
                type: 'primitive',
                schema: {
                  type: 'Date',
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'تاریخ انتقضاء',
              title: 'endDate',
              value: {
                type: 'primitive',
                schema: {
                  type: 'Date',
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              lable: 'نوع منطقه',
              title: 'regionType',
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  enum: ['منطقه عادی', 'منطقه آزاد تجاری - اقتصادی'],
                  option: 'select',
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'تجدید پذیر',
              title: 'isRecursive',
              value: {
                type: 'primitive',
                schema: {
                  type: 'Boolean',
                  option: 'switch',
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              lable: 'نحوه تخصیص منابع',
              title: 'amountAllocationType',
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  enum: ['مبلغ عددی', 'درصد منابع', 'هردو'],
                  option: 'check',
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'موضوع تفاهم نامه',
              title: 'items',
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  enum: ['تسهیلات اعتباری', 'بیمه', 'کارتخوان', 'خودپرداز'],
                  option: 'check',
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              lable: 'تعداد افراد قابل اعطا',
              title: 'numOfGrantedPerson',
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'مبلغ ثابت قابل اعطا',
              title: 'fixAmount',
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              lable: 'درصد و حداکثرجاری قابل تخصیص',
              title: 'jariGrantedAmount',
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'درصد و حداکثر قرض الحسنه قابل تخصیص',
              title: 'gharzGrantedAmount',
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              lable: 'درصد وحداکثر کوتاه مدت قابل تخصیص',
              title: 'shortGrantedAmount',
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'درصد و حداکثر بلندمدت قابل تخصیص',
              title: 'longGrantedAmount',
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              lable: 'روش محاسبه معدل حساب',
              title: 'calculateAVGType',
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  enum: [
                    'محاسبه معدل حساب باشیوه استاندارد (روال فعلی)',
                    'محاسبه مابه التفاوت معدل حساب براساس بازه تاریخی بامبداء مشخصی',
                  ],
                  option: 'radio',
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
            {
              lable: 'درصد و حداکثر بلندمدت قابل تخصیص',
              title: 'longGrantedAmount2',
              value: {
                type: 'primitive',
                schema: {
                  type: 'String',
                  isGridLayout: false,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
          [
            {
              lable: '',
              title: '',
              value: {
                type: 'emptyCell',
                schema: {
                  type: 'emptyCell',
                },
              },
            },
            // {
            //
            //   lable: '',
            //   title: '',
            //   value: {
            //     type: 'emptyCell',
            //     schema: {
            //       type: 'emptyCell',
            //     },
            //   },
            // },
            {
              lable: 'تاریخ',
              title: 'date',
              value: {
                type: 'primitive',
                schema: {
                  type: 'Date',
                  isGridLayout: true,
                  largeBreakpointWidth: 1,
                },
              },
            },
          ],
        ],
      },
 */



            // pos: {
      //   lable: 'دستگاه کارتخوان',
      //   datasourceName: 'localds',
      //   schema: 'TAFSCHM',
      //   content: [
      //     [
      //       {
      //         lable: 'نوع کارتخوان',
      //         title: '',
      //         value: {
      //           type: 'primitive',
      //           schema: {
      //             type: 'String',
      //             isGridLayout: true,
      //             largeBreakpointWidth: 1,
      //           },
      //         },
      //       },
      //       {
      //         lable: 'تعداد کارتخوان',
      //         title: '',
      //         value: {
      //           type: 'primitive',
      //           schema: {
      //             type: 'String',
      //             isGridLayout: false,
      //             largeBreakpointWidth: 1,
      //           },
      //         },
      //       },
      //     ],
      //     [
      //       {
      //         lable: 'توضیحات',
      //         title: '',
      //         value: {
      //           type: 'primitive',
      //           schema: {
      //             type: 'String',
      //             isGridLayout: false,
      //             largeBreakpointWidth: 1,
      //           },
      //         },
      //       },
      //     ],
      //   ],
      // },

      //  This is for Insert into Account
      // tafAccount: {
      //   datasourceName: 'localds',
      //   schema: 'TAFSCHM',
      //   content: [
      //     [
      //       {

      //         lable: 'شماره حساب',
      //         title: 'accountNumber',
      //         value: {
      //           type: 'primitive',
      //           schema: {
      //             type: 'String',
      //           },
      //         },
      //       },
      //       {

      //         lable: 'نام مشتری/ سازمان',
      //         title: 'customerName',
      //         value: {
      //           type: 'primitive',
      //           schema: {
      //             type: 'String',
      //           },
      //         },
      //       },
      //     ],
      //   ],
      // },

      
      // jpaName: {
      //   lable: 'تستی',
      //   datasourceName: 'localds',
      //   schema: 'TAFSCHM',
      //   content: [
      //     [
      //       {
      //         lable: 'شماره آرشیو',
      //         title: 'archiveNumber',
      //         value: {
      //           type: 'primitive',
      //           schema: {
      //             type: 'String',
      //             // isUnique: true,
      //           },
      //         },
      //       },
      //       {
      //         lable: 'تاریخ درخواست',
      //         title: 'requestDate',
      //         value: {
      //           type: 'primitive',
      //           schema: {
      //             type: 'Date',
      //           },
      //         },
      //       },
      //     ],
      //     [
      //       {
      //         lable: 'عنوان تفاهم نامه',
      //         title: 'title',
      //         value: {
      //           type: 'primitive',
      //           schema: {
      //             type: 'String',
      //           },
      //         },
      //       },
      //       {
      //         lable: 'نوع تفاهم نامه',
      //         title: 'type',
      //         value: {
      //           type: 'primitive',
      //           schema: {
      //             type: 'String',
      //             enum: ['انتخاب کنید', 'کشوری', 'استانی', 'تخصیصی'],
      //             option: 'select',
      //           },
      //         },
      //       },
      //     ],
      //     [
      //       {
      //         lable: 'مدیریت شعب',
      //         title: 'branchManagement',
      //         value: {
      //           type: 'primitive',
      //           schema: {
      //             type: 'String',
      //           },
      //         },
      //       },
      //       {
      //         lable: 'شعبه عامل',
      //         title: 'branch',
      //         value: {
      //           type: 'primitive',
      //           schema: {
      //             type: 'String',
      //           },
      //         },
      //       },
      //     ],
      //     [
      //       {
      //         lable: 'ناحیه',
      //         title: 'region',
      //         value: {
      //           type: 'primitive',
      //           schema: {
      //             type: 'String',
      //           },
      //         },
      //       },
      //       {
      //         lable: 'ادارات کل',
      //         title: 'administration',
      //         value: {
      //           type: 'primitive',
      //           schema: {
      //             type: 'String',
      //           },
      //         },
      //       },
      //     ],
      //     [
      //       {
      //         lable: 'کارشناس تفاهم نامه',
      //         title: 'expertId',
      //         value: {
      //           type: 'primitive',
      //           schema: {
      //             type: 'String',
      //             enum: ['انتخاب کنید', 'کشوری', 'استانی', 'تخصیصی'],
      //             option: 'select',
      //           },
      //         },
      //       },
      //       {
      //         lable: 'وضعیت تفاهم نامه',
      //         title: 'state',
      //         value: {
      //           type: 'primitive',
      //           schema: {
      //             type: 'String',
      //             enum: ['انتخاب کنید', 'دردست اقدام', 'بلااقدام', 'نافذ'],
      //             option: 'select',
      //             size: { minValue: 4, maxValue: 50 }, //  Default Value
      //           },
      //         },
      //       },
      //     ],
      //   ],
      // },

      //  tafahomFirstFormJpa
