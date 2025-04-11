exports.contentData = {
  // template of valid format
  //    pageName: {                                  1) Table name
  //                                                    'pageName' must be matched with 'appObjectName'
  //      appObjectId: 'pageName',            -->    1) name the Controller file
  //                                                 2) match with ContentMap field to generate @RequestMappring("String")
  //                                                 2) check availabitliy of a route in ContentMap
  //                                                 3) to retrieve all ValidationRule name of given appObject in Content file
  //                                                 4) to generate SecurityRoles ... requestMatchers().hasAnyRole()
  //                                                 4) to generate client side react-route 'path'
  //      pluralLable                         -->    sidebar title
  //      singularLable                       -->     
  //      dataAccessLayer: {
  //        jpas: {
  //          jpaName: {                       -->   1) name the Entity, Repository, Model object/ file.
  //                                                 2) retrieve full body of jpa from domain file.
  //            findAll: {},
  //            findById: {},
  //            saveAll: {
  //               preConditions: {
  //                 validations: {
  //                    validationRuleName:{}   -->  1)  match with validationRule name to get actual body of validationRule
  //                                            -->  2)  name of custom annotation
  //               },
  //                 notifications: {},
  //               },
  //               postConditions: {
  //                 validations: {},
  //                 notifications: {},
  //               },
  //            },
  //          },
  //        },
  //        storedProcedures: {
  //          storedProcedureName: {},         -->   Model Name
  //        },
  //        restServices: {},                  -->   Model Name
  //      },
  //    },
  //dataAccessLayer cannot be empty
  tafahomInformation: {
    appObjectId: 'tafahomInformation',
    pluralLable: 'اطلاعات تفاهم نامه',
    singularLable: 'اطلاعات تفاهم نامه',
    dataAccessLayer: {
      jpas: {
        tafahomInformation: {
          findAll: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          findById: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          findByIndex: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          saveAll: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {
                // notifyByMessage: {},
              },
            },
          },
          updateByIndex: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          updateById: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          deleteById: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
        },
      },
      storedProcedures: {
        //  list of ZONEs
        // zoneList: {},
        // regionList: {},
      },
      restServices: {},
    },
  },
  /**   step: 1 */
  eghdamat: {
    appObjectId: 'eghdamat',
    pluralLable: 'اقدامات',
    singularLable: 'اقدام',
    dataAccessLayer: {
      jpas: {
        eghdamat: {
          findAll: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          findById: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          findByIndex: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          saveAll: {
            preConditions: {
              validations: {
                // tafahomStateMustBeOnGoing: {},
              },
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          updateById: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          deleteById: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
        },
      },
      storedProcedures: {},
      restServices: {},
    },
  },
  /**   step: 2 */
  agent: {
    appObjectId: 'agent',
    pluralLable: 'نمایندگان',
    singularLable: 'نماینده',
    dataAccessLayer: {
      jpas: {
        agent: {
          findAll: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          findById: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          findByIndex: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          saveAll: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          updateById: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          deleteById: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
        },
      },
      storedProcedures: {},
      restServices: {},
    },
  },
  account: {
    appObjectId: 'account',
    pluralLable: 'حساب ها',
    singularLable: 'حساب',
    dataAccessLayer: {
      jpas: {
        account: {
          findAll: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          findById: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          findByIndex: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          saveAll: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          updateById: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          deleteById: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
        },
      },
      // jpas: {},
      storedProcedures: {
        // listTafahomAccount: {},
      },
      restServices: {},
    },
  },
  // concurrent with 'uploadFileRM'
  // edms: {
  //   appObjectId: 'edms',
  //   pluralLable: 'مدیریت اسناد',
  //   singularLable: 'مدیریت اسناد',
  //   dataAccessLayer: {
  //     jpas: {
  //       edms: {
  //         findAll: {
  //           preConditions: {
  //             validations: {},
  //             notifications: {},
  //           },
  //           postConditions: {
  //             validations: {},
  //             notifications: {},
  //           },
  //         },
  //         findById: {
  //           preConditions: {
  //             validations: {},
  //             notifications: {},
  //           },
  //           postConditions: {
  //             validations: {},
  //             notifications: {},
  //           },
  //         },
  //         findByIndex: {
  //           preConditions: {
  //             validations: {},
  //             notifications: {},
  //           },
  //           postConditions: {
  //             validations: {},
  //             notifications: {},
  //           },
  //         },
  //         saveAll: {
  //           preConditions: {
  //             validations: {},
  //             notifications: {},
  //           },
  //           postConditions: {
  //             validations: {},
  //             notifications: {},
  //           },
  //         },
  //         updateById: {
  //           preConditions: {
  //             validations: {},
  //             notifications: {},
  //           },
  //           postConditions: {
  //             validations: {},
  //             notifications: {},
  //           },
  //         },
  //         deleteById: {
  //           preConditions: {
  //             validations: {},
  //             notifications: {},
  //           },
  //           postConditions: {
  //             validations: {},
  //             notifications: {},
  //           },
  //         },
  //       },
  //     },
  //     // jpas: {},
  //     storedProcedures: {
  //       // listTafahomAccount: {},
  //     },
  //     restServices: {},
  //   },
  // },
  customerWithHadSaghf: {
    appObjectId: 'customerWithHadSaghf',
    pluralLable: 'مشتریان مشمول درمصارف تفاهم نامه',
    singularLable: 'مشتری مشمول درمصارف تفاهم نامه',
    dataAccessLayer: {
      jpas: {
        customerWithHadSaghf: {
          findAll: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          findById: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          findByIndex: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          saveAll: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          updateById: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          deleteById: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
        },
      },
      // jpas: {},
      storedProcedures: {
        // listTafahomAccount: {},
      },
      restServices: {},
    },
  },
  finantialStatementAbstract: {
    appObjectId: 'finantialStatementAbstract',
    pluralLable: 'وضعیت صورت مالی مشتریان',
    singularLable: 'وضعیت صورت مالی مشتریان',
    dataAccessLayer: {
      jpas: {
        finantialStatementAbstract: {
          findAll: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          findById: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          findByIndex: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          saveAll: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          updateById: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          deleteById: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
        },
      },
      // jpas: {},
      storedProcedures: {
        // listTafahomAccount: {},
      },
      restServices: {},
    },
  },
  finantialInformation: {
    appObjectId: 'finantialInformation',
    pluralLable: 'اطلاعات مالی عملکرد مشتری ',
    singularLable: 'اطلاعات مالی عملکرد مشتری',
    dataAccessLayer: {
      jpas: {
        finantialInformation: {
          findAll: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          findById: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          findByIndex: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          saveAll: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          updateById: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          deleteById: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
        },
      },
      // jpas: {},
      storedProcedures: {
        // listTafahomAccount: {},
      },
      restServices: {},
    },
  },
  resourcesAndExpenses: {
    appObjectId: 'resourcesAndExpenses',
    pluralLable: 'پیش بینی منابع، مصارف و تعهدات',
    singularLable: 'پیش بینی منابع، مصارف و تعهدات',
    dataAccessLayer: {
      jpas: {
        resourcesAndExpenses: {
          findAll: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          findById: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          findByIndex: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          saveAll: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          updateById: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          deleteById: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
        },
      },
      // jpas: {},
      storedProcedures: {
        // listTafahomAccount: {},
      },
      restServices: {},
    },
  },
  uploadFileRM: {
    //  مدیریت تفاهم نامه ها
    appObjectId: 'uploadFileRM',
    pluralLable: 'بارگزاری اسناد و مدارک',
    singularLable: 'بارگزاری اسناد و مدارک',
    dataAccessLayer: {
      jpas: {
        uploadFileRM: {
          findAll: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          findById: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          findByIndex: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          saveAll: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          updateById: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          deleteById: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
        },
      },
      // jpas: {},
      storedProcedures: {
        // listTafahomAccount: {},
      },
      restServices: {},
    },
  },
  /**   step: 3 */
  tasParameter: {
    appObjectId: 'tasParameter',
    pluralLable: 'پارامتر تسهیلات',
    singularLable: 'پارامترتسهیلات',
    dataAccessLayer: {
      jpas: {
        tasParameter: {
          findAll: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          findById: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          findByIndex: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          saveAll: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          updateByIndex: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          updateById: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          deleteById: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
        },
      },
      storedProcedures: {},
      restServices: {},
    },
  },
  smsParameter: {
    appObjectId: 'smsParameter',
    pluralLable: 'پارامتر پیامک',
    singularLable: 'پارامتر پیامک',
    dataAccessLayer: {
      jpas: {
        smsParameter: {
          findAll: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          findById: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          findByIndex: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          saveAll: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          updateByIndex: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          updateById: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          deleteById: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
        },
      },
      storedProcedures: {},
      restServices: {},
    },
  },
  notificationParameter: {
    appObjectId: 'notificationParameter',
    pluralLable: 'پارامتر هشدار',
    singularLable: 'پارامتر هشدار',
    dataAccessLayer: {
      jpas: {
        notificationParameter: {
          findAll: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          findById: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          findByIndex: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          saveAll: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          updateByIndex: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          updateById: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          deleteById: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
        },
      },
      storedProcedures: {},
      restServices: {},
    },
  },
  tafahomState: {
    appObjectId: 'tafahomState',
    pluralLable: 'وضعیت تفاهم نامه',
    singularLable: 'وضعیت تفاهم نامه',
    dataAccessLayer: {
      jpas: {
        tafahomState: {
          findAll: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          findById: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          findByIndex: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          saveAll: {
            preConditions: {
              validations: {
                // tafahomStateMustBeOnGoing: {},
              },
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          // updateById: {
          //   preConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          //   postConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          // },
          // deleteById: {
          //   preConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          //   postConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          // },
        },
      },
      storedProcedures: {},
      restServices: {},
    },
  },
  sendToHQ: {
    appObjectId: 'sendToHQ',
    pluralLable: 'ارسال به اداره کل برنامه ریزی ونظارت اعتباری',
    singularLable: 'ارسال به اداره کل برنامه ریزی ونظارت اعتباری',
    dataAccessLayer: {
      jpas: {
        sendToHQ: {
          findAll: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          findById: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          findByIndex: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          saveAll: {
            preConditions: {
              validations: {
                // tafahomStateMustBeOnGoing: {},
              },
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          // updateById: {
          //   preConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          //   postConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          // },
          // deleteById: {
          //   preConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          //   postConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          // },
        },
      },
      storedProcedures: {},
      restServices: {},
    },
  },
  loanState: {
    appObjectId: 'loanState',
    pluralLable: 'وضعیت اعطای تسهیلات',
    singularLable: 'وضعیت اعطای تسهیلات',
    dataAccessLayer: {
      jpas: {
        loanState: {
          findAll: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          findById: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          findByIndex: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          saveAll: {
            preConditions: {
              validations: {
                // tafahomStateMustBeOnGoing: {},
              },
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          // updateById: {
          //   preConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          //   postConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          // },
          // deleteById: {
          //   preConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          //   postConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          // },
        },
      },
      storedProcedures: {},
      restServices: {},
    },
  },
  retrievedAccount: {
    appObjectId: 'retrievedAccount',
    pluralLable: 'حساب های بازیابی شده',
    singularLable: 'حساب های بازیابی شده',
    dataAccessLayer: {
      jpas: {
        retrievedAccount: {
          findAll: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          findById: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          findByIndex: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          saveAll: {
            preConditions: {
              validations: {
                // tafahomStateMustBeOnGoing: {},
              },
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          updateById: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          deleteById: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
        },
      },
      storedProcedures: {},
      restServices: {},
    },
  },
  dashboardMasterRpt: {
    appObjectId: 'dashboardMasterRpt',
    pluralLable: 'داشبورد-سطح یک',
    singularLable: 'داشبورد-سطح یک',
    dataAccessLayer: {
      jpas: {
        dashboardMasterRpt: {
          // findAll: {
          //   preConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          //   postConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          // },
          // findById: {
          //   preConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          //   postConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          // }
          // findByIndex: {
          //   preConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          //   postConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          // },
        },
      },
      storedProcedures: {},
      restServices: {},
    },
  },
  search: {
    appObjectId: 'search',
    pluralLable: 'جستجو',
    singularLable: 'جستجو',
    dataAccessLayer: {
      jpas: {
        search: {
          saveAll: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {
                // notifyByMessage: {},
              },
            },
          },
          // findAll: {
          //   preConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          //   postConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          // },
          // findById: {
          //   preConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          //   postConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          // }
          // findByIndex: {
          //   preConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          //   postConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          // },
        },
      },
      storedProcedures: {},
      restServices: {},
    },
  },
  dashboardDetailRpt: {
    appObjectId: 'dashboardDetailRpt',
    pluralLable: 'داشبورد-سطح دو',
    singularLable: 'داشبورد-سطح دو',
    dataAccessLayer: {
      jpas: {
        dashboardDetailRpt: {
          // findAll: {
          //   preConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          //   postConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          // },
          // findById: {
          //   preConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          //   postConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          // }
          // findByIndex: {
          //   preConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          //   postConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          // },
        },
      },
      storedProcedures: {},
      restServices: {},
    },
  },
  commitmentsRpt: {
    appObjectId: 'commitmentsRpt',
    pluralLable: 'گزارش تعهدات مشتری',
    singularLable: 'گزارش تعهدات مشتری',
    dataAccessLayer: {
      jpas: {
        commitmentsRpt: {
          saveAll: {
            preConditions: {
              validations: {
                // tafahomStateMustBeOnGoing: {},
              },
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          // findAll: {
          //   preConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          //   postConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          // },
          // findById: {
          //   preConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          //   postConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          // }
          findByIndex: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
        },
      },
      storedProcedures: {},
      restServices: {},
    },
  },
  customerRialResourceRpt: {
    appObjectId: 'customerRialResourceRpt',
    pluralLable: 'گزارش مانده منابع ریالی مشتری',
    singularLable: 'گزارش مانده منابع ریالی مشتری',
    dataAccessLayer: {
      jpas: {
        customerRialResourceRpt: {
          saveAll: {
            preConditions: {
              validations: {
                // tafahomStateMustBeOnGoing: {},
              },
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          // findAll: {
          //   preConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          //   postConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          // },
          // findById: {
          //   preConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          //   postConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          // }
          findByIndex: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
        },
      },
      storedProcedures: {},
      restServices: {},
    },
  },
  customerArzResourceRpt: {
    appObjectId: 'customerArzResourceRpt',
    pluralLable: 'گزارش مانده منابع ارزی مشتری',
    singularLable: 'گزارش مانده منابع ارزی مشتری',
    dataAccessLayer: {
      jpas: {
        customerArzResourceRpt: {
          saveAll: {
            preConditions: {
              validations: {
                // tafahomStateMustBeOnGoing: {},
              },
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          // findAll: {
          //   preConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          //   postConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          // },
          // findById: {
          //   preConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          //   postConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          // }
          findByIndex: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
        },
      },
      storedProcedures: {},
      restServices: {},
    },
  },
  customerRialResourceAvgRpt: {
    appObjectId: 'customerRialResourceAvgRpt',
    pluralLable: 'گزارش معدل منابع ریالی مشتری',
    singularLable: 'گزارش معدل منابع ریالی مشتری',
    dataAccessLayer: {
      jpas: {
        customerRialResourceAvgRpt: {
          saveAll: {
            preConditions: {
              validations: {
                // tafahomStateMustBeOnGoing: {},
              },
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          // findAll: {
          //   preConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          //   postConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          // },
          // findById: {
          //   preConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          //   postConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          // }
          findByIndex: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
        },
      },
      storedProcedures: {},
      restServices: {},
    },
  },
  customerArzResourceAvgRpt: {
    appObjectId: 'customerArzResourceAvgRpt',
    pluralLable: 'گزارش معدل منابع ارزی مشتری',
    singularLable: 'گزارش معدل منابع ارزی مشتری',
    dataAccessLayer: {
      jpas: {
        customerArzResourceAvgRpt: {
          saveAll: {
            preConditions: {
              validations: {
                // tafahomStateMustBeOnGoing: {},
              },
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          // findAll: {
          //   preConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          //   postConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          // },
          // findById: {
          //   preConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          //   postConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          // }
          findByIndex: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
        },
      },
      storedProcedures: {},
      restServices: {},
    },
  },
  lendingRpt: {
    appObjectId: 'lendingRpt',
    pluralLable: 'گزارش تسهیلات پرداخت شده',
    singularLable: 'گزارش تسهیلات پرداخت شده',
    dataAccessLayer: {
      jpas: {
        lendingRpt: {
          saveAll: {
            preConditions: {
              validations: {
                // tafahomStateMustBeOnGoing: {},
              },
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          // findAll: {
          //   preConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          //   postConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          // },
          // findById: {
          //   preConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          //   postConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          // }
          findByIndex: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
        },
      },
      storedProcedures: {},
      restServices: {},
    },
  },
  collateralRpt: {
    appObjectId: 'collateralRpt',
    pluralLable: 'گزارش وثایق',
    singularLable: 'گزارش وثایق',
    dataAccessLayer: {
      jpas: {
        collateralRpt: {
          saveAll: {
            preConditions: {
              validations: {
                // tafahomStateMustBeOnGoing: {},
              },
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          // findAll: {
          //   preConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          //   postConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          // },
          // findById: {
          //   preConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          //   postConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          // }
          findByIndex: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
        },
      },
      storedProcedures: {},
      restServices: {},
    },
  },
  costBenefitRpt: {
    appObjectId: 'costBenefitRpt',
    pluralLable: 'گزارش هزینه فایده',
    singularLable: 'گزارش هزینه فایده',
    dataAccessLayer: {
      jpas: {
        costBenefitRpt: {
          saveAll: {
            preConditions: {
              validations: {
                // tafahomStateMustBeOnGoing: {},
              },
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          // findAll: {
          //   preConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          //   postConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          // },
          // findById: {
          //   preConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          //   postConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          // }
          findByIndex: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
        },
      },
      storedProcedures: {},
      restServices: {},
    },
  },
  customerProfileAbstractRpt: {
    appObjectId: 'customerProfileAbstractRpt',
    pluralLable: 'گزارش شناسنامه مشتری',
    singularLable: 'گزارش شناسنامه مشتری',
    dataAccessLayer: {
      jpas: {
        customerProfileAbstractRpt: {
          // findAll: {
          //   preConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          //   postConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          // },
          // findById: {
          //   preConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          //   postConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          // }
          // findByIndex: {
          //   preConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          //   postConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          // },
        },
      },
      storedProcedures: {},
      restServices: {},
    },
  },
  performanceRpt: {
    appObjectId: 'performanceRpt',
    pluralLable: 'گزارش کارآیی تفاهم نامه',
    singularLable: 'گزارش کارآیی تفاهم نامه',
    dataAccessLayer: {
      jpas: {
        performanceRpt: {
          // findAll: {
          //   preConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          //   postConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          // },
          // findById: {
          //   preConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          //   postConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          // }
          // findByIndex: {
          //   preConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          //   postConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          // },
        },
      },
      storedProcedures: {},
      restServices: {},
    },
  },
  userActivity: {
    appObjectId: 'userActivity',
    pluralLable: 'فعالیت های کاربر',
    singularLable: 'فعالیت های کاربر',
    dataAccessLayer: {
      jpas: {
        userActivity: {
          findAll: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          findById: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          findByIndex: {
            preConditions: {
              validations: {},
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          saveAll: {
            preConditions: {
              validations: {
                // tafahomStateMustBeOnGoing: {},
              },
              notifications: {},
            },
            postConditions: {
              validations: {},
              notifications: {},
            },
          },
          // updateById: {
          //   preConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          //   postConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          // },
          // deleteById: {
          //   preConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          //   postConditions: {
          //     validations: {},
          //     notifications: {},
          //   },
          // },
        },
      },
      storedProcedures: {},
      restServices: {},
    },
  },
};
