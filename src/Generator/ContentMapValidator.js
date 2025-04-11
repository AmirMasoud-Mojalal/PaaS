const process = require('process');
const ContentMap = require('./Data/ContentMap');
// const { getAppObjectIdByJpaName } = require('./FeedContent');

// const { isEntryNameValid } = require('./FeedContent');

//  TODO
//  check wether each route in contentMap has an equivalent appObjectId in content or not
//  TODO
//  seprate validatior functions from accessiblity functions

exports.routes = ContentMap.routes;

// exports.tst = () => {
//   let newRoutes = {}
//   Object.keys(this.routes).map((routeL1) => {
//     if (typeof this.routes[routeL1] === 'object') {
//       // console.log(routeL1);
//         newRoutes = {...this.routes};
//         this.routes[routeL1].a = 'archiveNumber';
//         // this.routes[routeL1].parthVariable = 'archiveNumber';
//         // newRoutes.a='b';
//         // isValid = true;
//     }
//   });
//   // console.log(this.routes);
//   console.log(newRoutes);
// };
// this.tst();

//  called form Generator.js
// exports.validateRoutes = () => {
//   let isValid = true;
//   if (Object.keys(this.routes).length < 1) {
//     console.log('Route must has atleast 1 child.');
//     process.exit(1);
//   }
//   //  L1
//   Object.keys(this.routes).map((routeL1) => {
//     if (typeof this.routes[routeL1] == 'object') {
//       if (isEntryNameValid(routeL1)) {
//         //  L2
//         Object.keys(this.routes[routeL1]).map((routeL2) => {
//           if (typeof this.routes[routeL1][routeL2] == 'object') {
//             if (isEntryNameValid(routeL2)) {
//               //  L3
//               Object.keys(this.routes[routeL1][routeL2]).map((routeL3) => {
//                 if (typeof this.routes[routeL1][routeL2][routeL3] == 'object') {
//                   if (isEntryNameValid(routeL3)) {
//                     console.log(routeL3);
//                     //  L4
//                     Object.keys(this.routes[routeL1][routeL2][routeL3]).map(
//                       (routeL4) => {
//                         if (typeof this.routes[routeL3] == 'object') {
//                           if (isEntryNameValid(routeL4)) {
//                           } else {
//                             console.log(
//                               `${routeL4} in ContentMap should be synched with Content.`
//                             );
//                             process.exit(1);
//                           }
//                         } else {
//                         }
//                       }
//                     );
//                   } else {
//                     console.log(
//                       `${routeL3} in ContentMap should be synched with Content.`
//                     );
//                     // process.exit(1);
//                   }
//                 } else {
//                 }
//               });
//             } else {
//               console.log(
//                 `${routeL2} in ContentMap should be synched with Content.`
//               );
//               process.exit(1);
//             }
//           } else {
//           }
//         });
//       } else {
//         console.log(
//           `${routeL1} in ContentMap should be synched with Content object.`
//         );
//         // process.exit(1);
//       }
//     } else {
//       // console.log(this.routes);
//       // console.log(this.routes);
//     }
//   });
//   return isValid;
// };

//  called internally by isRouteNameValid
//  called internally by getOwnIndexByRouteName
exports.getRouteByRouteName = (routeName) => {
  let findRoute = ``;
  // let isValid = false;
  if (Object.keys(this.routes).length > 0) {
    if (typeof this.routes === 'object') {
      //  L1
      Object.keys(this.routes).map((routeL1) => {
        if (typeof this.routes[routeL1] === 'object') {
          if (routeL1 == routeName) {
            findRoute = this.routes[routeL1];
            // isValid = true;
          }
          //  L2
          Object.keys(this.routes[routeL1]).map((routeL2) => {
            if (typeof this.routes[routeL1][routeL2] === 'object') {
              if (routeL2 == routeName) {
                findRoute = this.routes[routeL1][routeL2];
                // isValid = true;
              }
            }
            //  L3
            Object.keys(this.routes[routeL1][routeL2]).map((routeL3) => {
              if (typeof this.routes[routeL1][routeL2][routeL3] === 'object') {
                if (routeL3 == routeName) {
                  findRoute = this.routes[routeL1][routeL2][routeL3];
                  // isValid = true;
                }
                //  L4
                Object.keys(this.routes[routeL1][routeL2][routeL3]).map(
                  (routeL4) => {
                    if (
                      typeof this.routes[routeL1][routeL2][routeL3] === 'object'
                    ) {
                      if (routeL4 == routeName) {
                        findRoute =
                          this.routes[routeL1][routeL2][routeL3][routeL4];
                        // isValid = true;
                      }
                    }
                  }
                );
                //  End of L4
              }
            });
            //  End of L3
          });
          //  End of L2
        } else {
        }
      });
      //  End of L1
    } else {
    }
  } else {
  }
  return findRoute;
};
// console.log(this.getRouteByRouteName('tafahomFirstForm'));
// console.log(this.getRouteByRouteName('tafahomInformation'));
// console.log(this.getRouteByRouteName('eghdamat'));
// console.log(this.getRouteByRouteName('eghdamats'));

//  called from FeedContent.js
exports.isRouteNameValid = (routeName) => {
  let isValid = false;
  const findRoute = this.getRouteByRouteName(routeName);
  if (typeof findRoute == 'object') {
    isValid = true;
  }
  // if (Object.keys(this.routes).length > 0) {
  //   if (typeof this.routes === 'object') {
  //     //  L1
  //     Object.keys(this.routes).map((routeL1) => {
  //       if (typeof this.routes[routeL1] === 'object') {
  //         if (routeName == routeL1) {
  //           isValid = true;
  //         }
  //         //  L2
  //         Object.keys(this.routes[routeL1]).map((routeL2) => {
  //           if (typeof this.routes[routeL1][routeL2] === 'object') {
  //             if (routeName == routeL2) {
  //               isValid = true;
  //             }
  //           }
  //           //  L3
  //           Object.keys(this.routes[routeL1][routeL2]).map((routeL3) => {
  //             if (typeof this.routes[routeL1][routeL2][routeL3] === 'object') {
  //               if (routeName == routeL3) {
  //                 isValid = true;
  //               }
  //               //  L4
  //               Object.keys(this.routes[routeL1][routeL2][routeL3]).map(
  //                 (routeL4) => {
  //                   if (
  //                     typeof this.routes[routeL1][routeL2][routeL3] === 'object'
  //                   ) {
  //                     if (routeName == routeL4) {
  //                       isValid = true;
  //                     }
  //                   }
  //                 }
  //               );
  //               //  End of L4
  //             }
  //           });
  //           //  End of L3
  //         });
  //         //  End of L2
  //       } else {
  //       }
  //     });
  //     //  End of L1
  //   } else {
  //   }
  // } else {
  // }
  return isValid;
};
// console.log(this.isRouteNameValid('tafahomFirstFormJpa'));
// console.log(this.isRouteNameValid('eghdamat'));
// console.log(this.isRouteNameValid('tasParameter'));
// console.log(this.isRouteNameValid(''));

exports.getRoutePathVariable = (routeName) => {
  let pathVariable = ''

  if (this.isRouteNameValid(routeName) == true) {
    if (Object.keys(this.getRouteByRouteName(routeName)).includes('pathVariable') == true) {
      pathVariable = this.getRouteByRouteName(routeName)['pathVariable']
    } else {
      pathVariable = ''
    }
  }
  return pathVariable
}
// console.log(this.getRoutePathVariable('tafahomFirstFormJpa').length);
// console.log(this.getRoutePathVariable('tafahomInformation').length);
// console.log(this.getRoutePathVariable('eghdamat'));


//  called from ControllerGenerator.js
//  called internally in getOwnAndParentIndexByRouteName
exports.getOwnIndexByRouteName = (routeName) => {
  // console.log('&');
  // appObjectId;
  let idx = ``;
  // console.log(routeName);
  const findRoute = this.getRouteByRouteName(routeName);
  // console.log(findRoute);
  idx = findRoute['parthVariable'];
  // console.log(idx);
  // Object.keys(this.routes).map((routeL1) => {
  //   if (routeL1 == appObjectId) {
  //     idx = this.routes[routeL1]['parthVariable'];
  //     return;
  //   }
  //   if (Object.keys(this.routes[routeL1]).length > 0) {
  //     Object.keys(this.routes[routeL1]).map((routeL2) => {
  //       if (routeL2 == appObjectId) {
  //         idx = this.routes[routeL1][routeL2]['parthVariable'];
  //         return;
  //       }

  //       if (Object.keys(this.routes[routeL1][routeL2]).length > 0) {
  //         Object.keys(this.routes[routeL1][routeL2]).map((routeL3) => {
  //           if (routeL3 == appObjectId) {
  //             idx = this.routes[routeL1][routeL2][routeL3]['parthVariable'];
  //             return;
  //           }

  //           if (
  //             Object.keys(this.routes[routeL1][routeL2][routeL3]).length > 0
  //           ) {
  //             Object.keys(this.routes[routeL1][routeL2][routeL3]).map(
  //               (routeL4) => {
  //                 if (routeL4 == appObjectId) {
  //                   idx =
  //                     this.routes[routeL1][routeL2][routeL3][routeL4][
  //                       'parthVariable'
  //                     ];
  //                   return;
  //                 }
  //               }
  //             );
  //           }
  //         });
  //       }
  //     });
  //   }
  // });
  return idx;
};
// console.log(this.getOwnIndexByRouteName('tafahomFirstForm'));
// console.log(this.getOwnIndexByRouteName('eghdamat'));
// console.log(this.getOwnIndexByRouteName(''));

//  called from ClientProjectBaseFilesGenerator
exports.getRootRoutes = () => {
  let rootRoutes = []
  Object.keys(this.routes).map((route) => {
    if (typeof this.routes[route] == 'object'
      // && Object.keys(this.routes[route]).length > 0
    )
      rootRoutes.push(route)
  });
  return rootRoutes
};
// console.log(this.getRootRoutes());

//  TODO
//  call internally in getRequestMappingString
exports.isRootRoute = (routeName) => {
  // let b = [[{ aa: 'bb' }]];
  // let a = [[{ a: 'b' }]];
  // console.log(b.push(a));
  // console.log(b.concat(a));

  return Object.keys(this.routes).includes(routeName);
};
// console.log(this.isRootRoute('tafahomFirstForm'));
// console.log(this.isRootRoute('eghdamatt'));
// console.log(this.isRootRoute('appName'));
// console.log(this.isRootRoute('baseUrl'));

exports.getParentRouteByRouteName2 = (appObjectId) => {
  parentRoute = ``;
  Object.keys(this.routes).map((routeL1) => {
    if (routeL1 == appObjectId) {
      parentRoute = ``;
      return;
    }
    if (Object.keys(this.routes[routeL1]).length > 0) {
      Object.keys(this.routes[routeL1]).map((routeL2) => {
        if (routeL2 == appObjectId) {
          parentRoute = `${routeL1}`;
          return;
        }

        if (Object.keys(this.routes[routeL1][routeL2]).length > 0) {
          Object.keys(this.routes[routeL1][routeL2]).map((routeL3) => {
            if (routeL3 == appObjectId) {
              parentRoute = `${routeL2}`;
              return;
            }

            if (
              Object.keys(this.routes[routeL1][routeL2][routeL3]).length > 0
            ) {
              Object.keys(this.routes[routeL1][routeL2][routeL3]).map(
                (routeL4) => {
                  if (routeL4 == appObjectId) {
                    parentRoute += `${routeL3}`;
                    return;
                  }
                }
              );
            }
          });
        }
      });
    }
  });
  return parentRoute;
};
// console.log(this.getParentRouteByRouteName2('tafahomFirstForm'));
// console.log(this.getParentRouteByRouteName2('eghdamat'));
// console.log(this.getParentRouteName('first'));
// console.log(this.getParentRouteName(''));

//  call internally in getRequestMappingString
//  called from ControllerGenerator.js
//  called from DomainConfig
exports.getParentRoute = (appObjectId) => {
  parentRoute = ``;
  Object.keys(this.routes).map((routeL1) => {
    if (routeL1 == appObjectId) {
      parentRoute = ``;
      return;
    }
    if (Object.keys(this.routes[routeL1]).length > 0) {
      Object.keys(this.routes[routeL1]).map((routeL2) => {
        if (routeL2 == appObjectId) {
          // parentRoute = `/${routeL1}/{${this.routes[routeL1]['parthVariable']}}`;
          parentRoute = `/${routeL1}`;
          return;
        }

        if (Object.keys(this.routes[routeL1][routeL2]).length > 0) {
          Object.keys(this.routes[routeL1][routeL2]).map((routeL3) => {
            if (routeL3 == appObjectId) {
              parentRoute = `/${routeL1}/${routeL2}`;
              return;
            }

            if (
              Object.keys(this.routes[routeL1][routeL2][routeL3]).length > 0
            ) {
              Object.keys(this.routes[routeL1][routeL2][routeL3]).map(
                (routeL4) => {
                  if (routeL4 == appObjectId) {
                    parentRoute += `/${routeL1}/${routeL2}/${routeL3}`;
                    return;
                  }
                }
              );
            }
          });
        }
      });
    }
  });
  return parentRoute;
};
// console.log(this.getParentRoute('tafahomFirstForm'));
// console.log(this.getParentRoute('eghdamat'));
// console.log(this.getParentRoute('first'));
// console.log(this.getParentRoute('agent2'));
// console.log(this.getParentRoute(''));

exports.getParentRouteByRouteName = (routeName) => {
  let findRoute = ``;
  // let isValid = false;
  if (Object.keys(this.routes).length > 0) {
    if (typeof this.routes === 'object') {
      //  L1
      Object.keys(this.routes).map((routeL1) => {
        if (typeof this.routes[routeL1] === 'object') {
          if (routeL1 == routeName) {
            findRoute = this.routes;
          }
          //  L2
          Object.keys(this.routes[routeL1]).map((routeL2) => {
            if (typeof this.routes[routeL1][routeL2] === 'object') {
              if (routeL2 == routeName) {
                findRoute = this.routes[routeL1];
              }
            }
            //  L3
            Object.keys(this.routes[routeL1][routeL2]).map((routeL3) => {
              if (typeof this.routes[routeL1][routeL2][routeL3] === 'object') {
                if (routeL3 == routeName) {
                  findRoute = this.routes[routeL1][routeL2];
                  // isValid = true;
                }
                //  L4
                Object.keys(this.routes[routeL1][routeL2][routeL3]).map(
                  (routeL4) => {
                    if (
                      typeof this.routes[routeL1][routeL2][routeL3] === 'object'
                    ) {
                      if (routeL4 == routeName) {
                        findRoute = this.routes[routeL1][routeL2][routeL3];
                        // isValid = true;
                      }
                    }
                  }
                );
                //  End of L4
              }
            });
            //  End of L3
          });
          //  End of L2
        } else {
        }
      });
      //  End of L1
    } else {
    }
  } else {
  }
  return findRoute;
};
// console.log(this.getParentRouteByRouteName('tafahomFirstForm'));
// console.log(this.getParentRouteByRouteName('eghdamat'));
// console.log(this.getParentRouteByRouteName(''));

//  called in DomainConfig.js
//  called internally in getOwnAndParentIndexByRouteName
exports.getParentIndexByRouteName = (appObjectId) => {
  const findRoute = this.getParentRouteByRouteName(appObjectId);
  const parentRouteIndex = findRoute['parthVariable'];

  // Object.keys(this.routes).map((routeL1) => {
  //   if (routeL1 == appObjectId) {
  //     parentRoute = ``;
  //     return;
  //   }
  //   if (Object.keys(this.routes[routeL1]).length > 0) {
  //     Object.keys(this.routes[routeL1]).map((routeL2) => {
  //       if (routeL2 == appObjectId) {
  //         parentRoute = `${this.routes[routeL1]['parthVariable']}`;
  //         return;
  //       }

  //       if (Object.keys(this.routes[routeL1][routeL2]).length > 0) {
  //         Object.keys(this.routes[routeL1][routeL2]).map((routeL3) => {
  //           if (routeL3 == appObjectId) {
  //             // console.log(routeL3);
  //             parentRoute = `${this.routes[routeL2]['parthVariable']}`;
  //             return;
  //           }

  //           if (
  //             Object.keys(this.routes[routeL1][routeL2][routeL3]).length > 0
  //           ) {
  //             Object.keys(this.routes[routeL1][routeL2][routeL3]).map(
  //               (routeL4) => {
  //                 if (routeL4 == appObjectId) {
  //                   parentRoute += `${this.routes[routeL2]['parthVariable']}`;
  //                   return;
  //                 }
  //               }
  //             );
  //           }
  //         });
  //       }
  //     });
  //   }
  // });
  return parentRouteIndex;
};
// console.log(this.getParentIndexByRouteName('tafahomFirstForm'));
// console.log(this.getParentIndexByRouteName('eghdamat'));
// console.log(this.getParentIndexByRouteName('agent'));
// console.log(this.getParentIndexByRouteName('first'));

//  called in ControllerGenerator.js
exports.getRequestMappingString = (appObjectId) => {
  let targetRoute = ``;
  // const baseId = this.isRootRoute(appObjectId) ? `` : `{${appObjectId}Id}`;

  Object.keys(this.routes).map((routeL1) => {
    if (routeL1 == appObjectId) {
      // targetRoute = `/${routeL1}`;
      targetRoute = `${this.getParentRoute(routeL1)}/${routeL1}`;
      return;
    }
    if (Object.keys(this.routes[routeL1]).length > 0) {
      Object.keys(this.routes[routeL1]).map((routeL2) => {
        if (routeL2 == appObjectId) {
          targetRoute = `/${routeL1}/${routeL2}`;
          // targetRoute = `${this.getParentRoute(routeL2)}/${routeL2}`;
          // targetRoute = `/${routeL2}`;
          return;
        }

        if (Object.keys(this.routes[routeL1][routeL2]).length > 0) {
          Object.keys(this.routes[routeL1][routeL2]).map((routeL3) => {
            if (routeL3 == appObjectId) {
              targetRoute = `/${routeL1}/${routeL2}/${routeL3}`;
              // targetRoute = `${this.getParentRoute(routeL3)}/${routeL3}`;
              // targetRoute = `/${routeL3}`;
              return;
            }
            if (
              Object.keys(this.routes[routeL1][routeL2][routeL3]).length > 0
            ) {
              Object.keys(this.routes[routeL1][routeL2][routeL3]).map(
                (routeL4) => {
                  if (routeL4 == appObjectId) {
                    targetRoute = `/${routeL1}/${routeL2}/${routeL3}/${routeL4}`;
                    // targetRoute = `${this.getParentRoute(routeL4)}/${routeL4}`;
                    // targetRoute = `/${routeL4}`;
                    return;
                  }
                }
              );
            }
          });
        }
      });
    }
  });

  targetRoute =
    targetRoute.length > 0
      ? `${this.routes.baseUrl}/${this.routes.appName}${targetRoute}`
      : ``;
  return targetRoute;
};

// console.log(this.getRequestMappingString('tafahomFirstForm'));
// console.log(this.getRequestMappingString('eghdamat'));
// console.log(this.getRequestMappingString('tasParamEntity'));
// console.log(this.getRequestMappingString('first'));
// console.log(this.getRequestMappingString('agent2'));
// console.log(this.getRequestMappingString('second'));

//  called in ClientProjectListGenerator.js
exports.getRoutePathString = (appObjectId) => {
  let targetRoute = ``;
  // const baseId = this.isRootRoute(appObjectId) ? `` : `{${appObjectId}Id}`;

  Object.keys(this.routes).map((routeL1) => {
    if (routeL1 == appObjectId) {
      // targetRoute = `/${routeL1}`;
      targetRoute = `${this.getParentRoute(routeL1)}/${routeL1}`;
      return;
    }
    if (Object.keys(this.routes[routeL1]).length > 0) {
      Object.keys(this.routes[routeL1]).map((routeL2) => {
        if (routeL2 == appObjectId) {
          targetRoute = `/${routeL1}/${routeL2}`;
          // targetRoute = `${this.getParentRoute(routeL2)}/${routeL2}`;
          // targetRoute = `/${routeL2}`;
          return;
        }

        if (Object.keys(this.routes[routeL1][routeL2]).length > 0) {
          Object.keys(this.routes[routeL1][routeL2]).map((routeL3) => {
            if (routeL3 == appObjectId) {
              targetRoute = `/${routeL1}/${routeL2}/${routeL3}`;
              // targetRoute = `${this.getParentRoute(routeL3)}/${routeL3}`;
              // targetRoute = `/${routeL3}`;
              return;
            }
            if (
              Object.keys(this.routes[routeL1][routeL2][routeL3]).length > 0
            ) {
              Object.keys(this.routes[routeL1][routeL2][routeL3]).map(
                (routeL4) => {
                  if (routeL4 == appObjectId) {
                    targetRoute = `/${routeL1}/${routeL2}/${routeL3}/${routeL4}`;
                    // targetRoute = `${this.getParentRoute(routeL4)}/${routeL4}`;
                    // targetRoute = `/${routeL4}`;
                    return;
                  }
                }
              );
            }
          });
        }
      });
    }
  });

  targetRoute =
    targetRoute.length > 0
      ? // ? `${this.routes.baseUrl}/${this.routes.appName}${targetRoute}`
      `${targetRoute}`
      : ``;
  return targetRoute;
};
// console.log(this.getRoutePathString('tafahomFirstForm'));
// console.log(this.getRoutePathString('tafahomInformation'));
// console.log(this.getRoutePathString('eghdamat'));
// console.log(this.getRoutePathString('tasParameter'));
// console.log(this.getRoutePathString('first'));
// console.log(this.getRoutePathString('agent2'));
// console.log(this.getRoutePathString('second'));

// called form EntityGenerator.js
exports.getOwnOrParentPathVariableByRouteName = (appObjectId) => {
  const ownIndex = this.getOwnIndexByRouteName(appObjectId);
  const parentIndex = this.getParentIndexByRouteName(appObjectId);
  let pathVariables = {
    ...(typeof ownIndex == 'string' && ownIndex.length > 0
      ? { ownIndex: ownIndex }
      : {}),
    ...(typeof parentIndex == 'string' && parentIndex.length > 0
      ? { parentIndex: parentIndex }
      : {}),
  };

  return pathVariables;
};
// this.validateRoutes();
exports.getAllChildsPathVariablesByRouteName = (appObjectId) => {
  let pathVariableObject = {}
  const routes = this.getRouteByRouteName(appObjectId)
  // console.log(routes);
  
  // console.log(this.getRoutePathVariable(appObjectId));

  Object.keys(routes).map(route => {
    const pathVariableString = this.getRoutePathVariable(route);
    if(pathVariableString.length > 0){
      pathVariableObject[pathVariableString] = ''
    }
    //  else {
    //   pathVariableObject[pathVariableString] = ''
    // }
  })
  // }
  return pathVariableObject
}
// console.log(this.getAllChildsPathVariablesByRouteName('tafahomInformation'));
// console.log(this.getAllChildsPathVariablesByRouteName('tasParameter'));
// console.log(this.getAllChildsPathVariablesByRouteName('eghdamats'));
// console.log(this.getAllChildsPathVariablesByRouteName('eghdamat'));
// console.log(this.getAllChildsPathVariablesByRouteName('agent'));
// console.log(this.isRootRoute('tafahomFirstForm'));
// console.log(this.isRootRoute('eghdamat'));
// exports.getPathVariablesByRouteName = (appObjectId) => {
//   let pathVariableObject = {}
//   const routes = this.getRouteByRouteName(appObjectId)
//   Object.keys(routes).map(route => {
//     const pathVariableString = this.getRoutePathVariable(route);
//     if(pathVariableString.length > 0){
//       pathVariableObject[pathVariableString] = ''
//       // pathVariableObject[routes[route]] = ''
//     } else {
//       pathVariableObject[pathVariableString] = ''
//     }
//   })
//   // }
//   return pathVariableObject
// }
// if (this.isRootRoute('eghdamat') == false) {
//   console.log(this.getParentRoute('eghdamat'));
// }
exports.getParentRouteName = (routeName) => {
  let findRoute = ``;
  if (!this.isRootRoute(routeName)) {
    findRoute = this.getParentRouteByRouteName2(routeName);
  }
  return findRoute;
};
// console.log(this.getParentRouteName('tafahomFirstForm'));
// console.log(this.getParentRouteName('eghdamat'));
