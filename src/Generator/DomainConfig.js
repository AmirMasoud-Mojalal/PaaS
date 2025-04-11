const { domainData } = require('./Data/Domain');
const {
  firstLetterCaptalize,
  firstLetterLowerCase,
  extractColObjByColName,
  getColObjByColName,
  // createFile,
} = require('./util');
const process = require('process');

const {
  getParentRoute,
  getParentIndexByRouteName,
  getParentRouteByRouteName,
  getOwnIndexByRouteName,
  getRoutePathString,
  isRootRoute,
  getRootRoutes,
  getRoutePathVariable,
  getParentRouteName,
  getAllChildsPathVariablesByRouteName
} = require('./ContentMapValidator');

const parameterValidTypes = {
  Integer: '', //  int
  String: '', //  varchar
  BigDecimal: '', //  Decimal
  Short: '', //  smallInt
  // Long: '', //  Long
  long: '', //  Long
  Date: '', //  Timestamp
  Double: '',
};

const contentValidTypes = {
  Integer: '',
  String: '',
  BigDecimal: '',
  // Long: '',
  long: '',
  Short: '',
  Boolean: '',
  Date: '',
  emptyCell: '',
  emptyRow: '',
  file: '',
  array: '',
  button: '',
  Report: ''
};

const contentValidKeys = {
  // type: '',
  lable: '',
  title: '',
  step: '',
  value: '',
};

const contentValidValueKeys = {
  type: '',
  schema: '',
};

const contentValidValueTypes = {
  primitive: '',
  'non-primitive': '',
  emptyCell: '',
  emptyRow: '',
  'ui-component': ''
};

const contentValidValueSchemaKeys = {
  type: 'String', //  Default Value
  isNotNull: true, //  Default Value
  isNotBlank: true, //  Default Value
  isEmail: false, //  Default Value
  // isUnique: false, // Default Value
  size: { minValue: 5, maxValue: 50 }, //  Default Value
  columnLength: 50, //  Default Value
  //  util.js
  isValidInModelBuilder: true, //  Default Value
  isValidInEntityBuilder: true, //  Default Value
  //  ui schema
  isGridLayout: true, //  show in Grid page e.g. xxxxlist
  largeBreakpointWidth: 1, //  width of Grid coluumn
};

exports.domains = domainData;

let isValid = true;
exports.validate = () => {
  // domains must be an Object
  if (typeof this.domains != 'object') {
    isValid = false;
    console.log(`domains expect to be an Object`);
  }

  Object.keys(this.domains).map((domain) => {
    // domains[domain] must be an Object
    if (typeof this.domains[domain] != 'object') {
      isValid = false;
      console.log(`domains[${domain}] expect to be an Object`);
      process.exit(1);
    }

    // length of each domains[domain] must be exactly 3
    if (Object.keys(this.domains[domain]).length != 3) {
      isValid = false;
      console.log(
        `Domain ${domain} do not obey the Domains structure rule to have exact length of 3.`
      );
      process.exit(1);
    }

    //  each domains[domain] must have 'jpas', 'storedProcedure', 'restServices' keys
    if (!('jpas' in this.domains[domain])) isValid = false;
    if (!('storedProcedures' in this.domains[domain])) isValid = false;
    if (!('restServices' in this.domains[domain])) isValid = false;

    if (
      Object.keys(this.domains[domain]['jpas']).length == 0 &&
      Object.keys(this.domains[domain]['storedProcedures']).length == 0 &&
      Object.keys(this.domains[domain]['restServices']).length == 0
    ) {
      isValid = false;
      console.log(
        `Domain ${domain} jpas/storedProcedures/restServices can not be empty at same time.`
      );
      process.exit(1);
    }

    //  -----------------------------------------
    //  |                  JPAs                 |
    //  -----------------------------------------
    let hasPrimaryKey = false;
    Object.keys(this.domains[domain]['jpas']).map((jpaName) => {
      // jpaName must be a valid object
      if (jpaName == null) {
        isValid = false;
        console.log(`domains[${domain}][jpas][${jpaName}] must not be null.`);
        process.exit(1);
      }
      // jpaName must be a valid string
      if (jpaName.length < 1) {
        isValid = false;
        console.log(
          `domains[${domain}][jpas][${jpaName}] must be a valid string.`
        );
        process.exit(1);
      }
      // The jpa name must start with lowerCase letter.
      if (jpaName != firstLetterLowerCase(jpaName)) {
        isValid = false;
        console.log(
          `domains[${domain}][jpas][${jpaName}] the jpa name must start with lowerCase letter.`
        );
        process.exit(1);
      }
      // length of each jpa must be exactly 6
      if (!(Object.keys(this.domains[domain]['jpas'][jpaName]).length == 6)) {
        isValid = false;
        console.log(
          `domains[${domain}][jpas][${jpaName}] length of jpa object must be be exactly 6.`
        );
        console.log(Object.keys(this.domains[domain]['jpas'][jpaName]));
        process.exit(1);
      }
      // The jpa object must have 'lable' key.
      if (!('lable' in this.domains[domain]['jpas'][jpaName])) {
        isValid = false;
        console.log(
          `domains[${domain}][jpas][${jpaName}] jpa object must have 'lable' key.`
        );
        process.exit(1);
      }
      // The jpa object must have 'datasourceName' key.
      if (!('datasourceName' in this.domains[domain]['jpas'][jpaName])) {
        isValid = false;
        console.log(
          `domains[${domain}][jpas][${jpaName}] jpa object must have 'datasourceName' key.`
        );
        process.exit(1);
      }
      //  The 'datasourceName' value in jpa object must be in lowerCase .
      if (
        this.domains[domain]['jpas'][jpaName]['datasourceName'] !=
        this.domains[domain]['jpas'][jpaName]['datasourceName'].toLowerCase()
      ) {
        isValid = false;
        console.log(
          `domains[${domain}][jpas][${jpaName}] The 'datasourceName' value must be in lowerCase.`
        );
        process.exit(1);
      }

      // The jpa object must have 'schema' key.
      if (!('schema' in this.domains[domain]['jpas'][jpaName])) {
        isValid = false;
        console.log(
          `domains[${domain}][jpas][${jpaName}] The jpa object must have 'schema' key.`
        );
        process.exit(1);
      }

      // The jpa object must have 'schema' key.
      if (!('menuTitle' in this.domains[domain]['jpas'][jpaName])) {
        isValid = false;
        console.log(
          `domains[${domain}][jpas][${jpaName}] The jpa object must have 'menuTitle' key.`
        );
        process.exit(1);
      }

      // The jpa object must have 'schema' key.
      if (!('multiStepForm' in this.domains[domain]['jpas'][jpaName])) {
        isValid = false;
        console.log(
          `domains[${domain}][jpas][${jpaName}] The jpa object must have 'multiStepForm' key.`
        );
        process.exit(1);
      }

      //  each schema value in jpa object must be in lowerCase .
      // if (
      //   this.domains[domain]['jpas'][jpa]['schema'] !=
      //   this.domains[domain]['jpas'][jpa]['schema'].toLowerCase()
      // ) {
      //   isValid = false;
      //   console.log(
      //     `'schema' value in domains[${domain}][jpas][${jpa}] must be in lowerCase.`
      //   );
      // }

      // The jpa object must have 'content' key.
      if (!('content' in this.domains[domain]['jpas'][jpaName])) {
        isValid = false;
        console.log(
          `domains[${domain}][jpas][${jpaName}] The jpa object must have 'content' key.`
        );
        process.exit(1);
      }

      // The jpa object must have 'content' key with an Array type
      if (
        Array.isArray(this.domains[domain]['jpas'][jpaName]['content']) == false
      ) {
        isValid = false;
        console.log(
          `domains[${domain}][jpas][${jpaName}] The jpa object must have a 'content' key with 'Array' type.`
        );
        process.exit(1);
      }

      // The jpa object must have 'content' key with atleast 1 element.
      if (this.domains[domain]['jpas'][jpaName]['content'].length < 1) {
        {
          isValid = false;
          console.log(
            `domains[${domain}][jpas][${jpaName}] The jpa object must have 'content' array with atleast 1 element.`
          );
        }
        process.exit(1);
      }

      let numberOfPrimaryKey = 0;
      //  The jpa 'content' specific rules
      this.domains[domain]['jpas'][jpaName]['content'].map((row, index) => {
        const rowIndex = index;
        //  Iterate over each individual column
        row.map((cols, index) => {
          const colsIndex = index;

          //  The attribute of each Column object, must be one of contentValidKeys.
          Object.keys(cols).map((col) => {
            if (!(col in contentValidKeys)) {
              console.log(
                `domains[${domain}][jpas][${jpaName}] The attribute of each Column object, must be one of ContentValidKeys`
              );
              console.log(col);
              console.log(cols);
              console.log(contentValidKeys);
              process.exit(1);
            }
          });

          //  The 'Value' attribute of each Column object, must be one of contentValidValueKeys
          Object.keys(cols['value']).map((col) => {
            if (!(col in contentValidValueKeys)) {
              console.log(
                `domains[${domain}][jpas][${jpaName}] The 'Value' attribute of each Column object, must be one of ContentvalidValueKeys`
              );
              console.log(cols);
              process.exit(1);
            }
          });

          //  The 'content' array must have 'type' key.
          // if (!('type' in cols)) {
          //   isValid = false;
          //   console.log(
          //     `domains[${domain}][jpas][${jpaName}] row:${rowIndex}/col:${colsIndex} The 'content' array must have 'type' key.`
          //   );
          // }
          // if (cols['type'] != 'emptyCell') {
          //  The 'content' array must have 'lable' key.
          if (!('lable' in cols)) {
            isValid = false;
            console.log(
              `domains[${domain}][jpas][${jpaName}] row:${rowIndex}/col:${colsIndex} The 'content' array must have 'lable' key.`
            );
          }
          //  The 'content' array must have 'title' key.
          if (!('title' in cols)) {
            isValid = false;
            console.log(
              `domains[${domain}][jpas][${jpaName}] row:${rowIndex}/col:${colsIndex} The 'content' array must have 'title' key.`
            );
          }
          //  The 'content' array must have 'title' key and its value must starts with lowerCase letter.
          if (cols['title'] != firstLetterLowerCase(cols['title'])) {
            isValid = false;
            console.log(
              `domains[${domain}][jpas][${jpaName}] row:${rowIndex}/col:${colsIndex} The 'content' array must have 'title' key and its value must starts with lowerCase letter.`
            );
          }

          //  The 'content' array must have 'value' key.
          if (!('value' in cols)) {
            isValid = false;
            console.log(
              `domains[${domain}][jpas][${jpaName}] row:${rowIndex}/col:${colsIndex} The 'content' array must have 'value' key.`
            );
          }

          //  The 'content' array must have [value][type] key.
          if (!('type' in cols['value'])) {
            isValid = false;
            console.log(
              `domains[${domain}][jpas][${jpaName}] row:${rowIndex}/col:${colsIndex} The 'content' array must have [value][type] key.`
            );
          }
          //  The 'content' array must have [value][type] key and its value must be one of 'primitive' or 'emptyCell'.
          if (
            !(cols['value']['type'] in contentValidValueTypes)
            // cols['value']['type'] != 'primitive' &&
            // cols['value']['type'] != 'blob' &&
            // cols['value']['type'] != 'emptyCell'
          ) {
            isValid = false;
            console.log(
              `domains[${domain}][jpas][${jpaName}] row:${rowIndex}/col:${colsIndex} The 'content' array must have [value][type] key and its value must be one of contentValidValueTypes i.e. 'primitive','non-primitive', 'emptyRow' or 'emptyCell.`
            );
          }

          //  The 'content' array must have [value][schema] key.
          if (!('schema' in cols['value'])) {
            isValid = false;
            console.log(
              `domains[${domain}][jpas][${jpaName}] row:${rowIndex}/col:${colsIndex} The 'content' array must have [value][schema] key.`
            );
            process.exit(1);
          }

          // Object.keys(cols['value']['schema']).map((colSchema) => {
          //   if (!(colSchema in contentValidValueSchemaKeys)) {
          //     console.log(jpaName + ' ' + cols['title'] + ' Errror!');
          //   }
          // });

          //  The 'content' array must have [value][schema][type] key.
          if (!('type' in cols['value']['schema'])) {
            isValid = false;
            console.log(
              `domains[${domain}][jpas][${jpaName}] row:${rowIndex}/col:${colsIndex} The 'content' array must have [value][schema][type] key.`
            );
            process.exit(1);
          }
          //  The 'content' array must have [value][schema][type] key and its value must be 'String'.
          if (
            !(cols['value']['schema']['type'] in contentValidTypes)
            // cols['value']['schema']['type'] != 'emptyCell' &&
            // cols['value']['schema']['type'] != 'String' &&
            // cols['value']['schema']['type'] != 'boolean' &&
            // cols['value']['schema']['type'] != 'Date'
          ) {
            isValid = false;
            console.log(`Column: ` + cols['value']['schema']['type']);
            console.log(
              `domains[${domain}][jpas][${jpaName}] row:${rowIndex}/col:${colsIndex} The 'content' array must have [value][schema][type] key and its value must be one of 'contentValidTypes'.`
            );
            // console.log(cols['value']['schema']['type']);
          }

          //  The 'content' array must have [value][schema][isGridLayout] key.
          if (
            !('emptyCell' === cols['value']['type']) &&
            !('isGridLayout' in cols['value']['schema'])
          ) {
            isValid = false;
            console.log(
              `domains[${domain}][jpas][${jpaName}][${cols['title']}] row:${rowIndex}/col:${colsIndex} The 'content' array must have [value][schema][isGridLayout] key.`
            );
            process.exit(1);
          }

          //  The 'content' array must have [value][schema][largeBreakpointWidth] key.
          if (
            !('emptyCell' === cols['value']['type']) &&
            !('largeBreakpointWidth' in cols['value']['schema'])
          ) {
            isValid = false;
            console.log(
              `domains[${domain}][jpas][${jpaName}] row:${rowIndex}/col:${colsIndex} The 'content' array must have [value][schema][largeBreakpointWidth] key.`
            );
            process.exit(1);
          }

          if (
            !('emptyCell' === cols['value']['type']) &&
            Object.keys(cols['value']['schema']).includes(`isPrimaryKey`)
          ) {
            if (
              cols['value']['schema']['isPrimaryKey'] == true &&
              // cols['value']['schema']['type'] != `BigDecimal`
              cols['value']['schema']['type'] != `long`
            ) {
              isValid = false;
              console.log(
                // `domains[${domain}][jpas][${jpaName}] row:${rowIndex}/col:${colsIndex} The 'content' array with 'PrimaryKey' attribute, must have [value][schema][type] key with 'BigDecimal' value.`
                `domains[${domain}][jpas][${jpaName}] row:${rowIndex}/col:${colsIndex} The 'content' array with 'PrimaryKey' attribute, must have [value][schema][type] key with 'long' value.`
              );
              process.exit(1);
            }
          }
          //          }
          if (
            isRootRoute(jpaName) &&
            !('emptyCell' === cols['value']['type']) &&
            'isPrimaryKey' in cols['value']['schema']
            // Object.keys(cols['value']['schema']).includes(`isPrimaryKey`)
          ) {
            if (
              cols['value']['schema']['isPrimaryKey'] == true
              // &&
              // cols['value']['schema']['type'] === `BigDecimal`
            ) {
              numberOfPrimaryKey += 1;
            }
          }
          //  Component specific checks
          //  Text-Component
          if (!(cols['value']['type'] === 'emptyCell')) {
            if (cols['value']['type'] === 'primitive') {
              if (
                !(
                  cols['value']['schema']['type'] === 'String' ||
                  cols['value']['schema']['type'] === 'Integer' ||
                  cols['value']['schema']['type'] === 'BigDecimal' ||
                  cols['value']['schema']['type'] === 'mlString' ||
                  // cols['value']['schema']['type'] === 'Long' ||
                  cols['value']['schema']['type'] === 'long' ||
                  cols['value']['schema']['type'] === 'Short' ||
                  cols['value']['schema']['type'] === 'Date' ||
                  cols['value']['schema']['type'] === 'Boolean'
                )
              ) {
                isValid = false;
                console.log(
                  `domains[${domain}][jpas][${jpaName}] row:${rowIndex}/col:${colsIndex} ${cols['value']['type']} primitive Component.`
                  //  The 'content' array must have [value][type] key and its value must be one of
                );
              }
            } else if (cols['value']['type'] === 'ui-component') {
              if (
                !(
                  cols['value']['schema']['type'] === 'button'
                  //  ||
                  // cols['value']['schema']['type'] === 'Integer' ||
                  // cols['value']['schema']['type'] === 'BigDecimal' ||
                  // cols['value']['schema']['type'] === 'mlString' ||
                  // // cols['value']['schema']['type'] === 'Long' ||
                  // cols['value']['schema']['type'] === 'long' ||
                  // cols['value']['schema']['type'] === 'Short' ||
                  // cols['value']['schema']['type'] === 'Date' ||
                  // cols['value']['schema']['type'] === 'Boolean'
                )
              ) {
                isValid = false;
                console.log(
                  `domains[${domain}][jpas][${jpaName}] row:${rowIndex}/col:${colsIndex} ${cols['value']['type']} ui-component.`
                  //  The 'content' array must have [value][type] key and its value must be one of
                );
              }
            } else if (
              !(
                cols['value']['type'] === 'non-primitive' &&
                (cols['value']['schema']['type'] === 'file' || cols['value']['schema']['type'] === 'String' || cols['value']['schema']['type'] === 'BigDecimal' || cols['value']['schema']['type'] === 'Report')
              )
            ) {
              //  fileUpload-Component
              isValid = false;
              console.log(
                `domains[${domain}][jpas][${jpaName}] row:${rowIndex}/col:${colsIndex} ${cols['value']['type']} fileUploadComponent.`
              );
            } else if ('option' in cols['value']['schema']) {
              if (
                cols['value']['schema']['option'] === 'switch' &&
                cols['value']['schema']['type'] === 'boolean'
              ) {
              } else if (
                cols['value']['schema']['option'] === 'radio' &&
                cols['value']['schema']['type'] === 'String'
              ) {
              } else if (
                cols['value']['schema']['option'] === 'check' &&
                cols['value']['schema']['type'] === 'String'
              ) {
              } else if (
                cols['value']['schema']['option'] === 'select' &&
                cols['value']['schema']['type'] === 'String'
              ) {
              }
            }
          }
        });
      });
      if (isRootRoute(jpaName) && numberOfPrimaryKey < 1) {
        isValid = false;
        console.log(
          `domains[${domain}][jpas][${jpaName}] has ${numberOfPrimaryKey} primaryKey(s) - The 'content' array MUST has exactly ONE(1) 'PrimaryKey' attribute.`
        );
        process.exit(1);
      }

      //  each content value in jpa object must be in lowerCase .
      // if (
      //   this.domains[domain]['jpas'][jpa]['content'] !=
      //   this.domains[domain]['jpas'][jpa]['content'].toLowerCase()
      // ) {
      //   isValid = false;
      //   console.log(
      //     `'content' value in domains[${domain}][jpas][${jpa}] must be in lowerCase.`
      //   );
      // }
    });
    // if (hasPrimaryKey === false) {
    //   {
    //     isValid = false;
    //     console.log(
    //       `domains[${domain}][jpas][${jpaName}] The jpa object must have atleast 1 element with 'PrimaryKey' attribute.`
    //     );
    //   }
    //   process.exit(1);
    // }

    //  -----------------------------------------
    //  |             storedProcedures           |
    //  -----------------------------------------
    Object.keys(this.domains[domain]['storedProcedures']).map(
      (storedProcedureName) => {
        // storedProcedureName must be a valid object
        if (storedProcedureName == null) {
          isValid = false;
          console.log(
            `domains[${domain}][storedProcedures][${storedProcedureName}] must not be null.`
          );
          process.exit(1);
        }
        // storedProcedureName must be a valid string
        if (storedProcedureName.length < 1) {
          isValid = false;
          console.log(
            `domains[${domain}][storedProcedures][${storedProcedureName}] must be a valid string.`
          );
          process.exit(1);
        }
        // The storedProcedureName must start with lowerCaseLetter letter.
        if (storedProcedureName != firstLetterLowerCase(storedProcedureName)) {
          isValid = false;
          console.log(
            `domains[${domain}][storedProcedures][${storedProcedureName}] the storedProcedureName must start with lowerCase letter.`
          );
          process.exit(1);
        }

        // length of the storedProcedure must be exactly 6
        if (
          !(
            Object.keys(
              this.domains[domain]['storedProcedures'][storedProcedureName]
            // ).length == 6
            ).length == 9
          )
        ) {
          isValid = false;
          console.log(
            `domains[${domain}][storedProcedures][${storedProcedureName}] length of storedProcedure object must be be exactly 9.`
          );
          process.exit(1);
        }

        //  The storedProcedure object must have 'name' key.
        if (
          !(
            'name' in
            this.domains[domain]['storedProcedures'][storedProcedureName]
          )
        ) {
          isValid = false;
          console.log(
            `domains[${domain}][storedProcedures][${storedProcedureName}] storedProcedure must have 'name' key.`
          );
          process.exit(1);
        }
        //  The storedProcedure object must have 'description' key.
        if (
          !(
            'description' in
            this.domains[domain]['storedProcedures'][storedProcedureName]
          )
        ) {
          isValid = false;
          console.log(
            `domains[${domain}][storedProcedures][${storedProcedureName}] storedProcedure must have 'description' key.`
          );
          process.exit(1);
        }

        //  The storedProcedure object must have 'datasourceName' key.
        if (
          !(
            'datasourceName' in
            this.domains[domain]['storedProcedures'][storedProcedureName]
          )
        ) {
          isValid = false;
          console.log(
            `domains[${domain}][storedProcedures][${storedProcedureName}] storedProcedure must have 'datasourceName' key.`
          );
          process.exit(1);
        }

        //  The 'datasourceName' value in storedProcedure object must be in lowerCase .
        if (
          this.domains[domain]['storedProcedures'][storedProcedureName][
          'datasourceName'
          ] !=
          this.domains[domain]['storedProcedures'][storedProcedureName][
            'datasourceName'
          ].toLowerCase()
        ) {
          isValid = false;
          console.log(
            `domains[${domain}][jpas][${storedProcedure}] The 'datasourceName' value of storedProcedure must be in lowerCase.`
          );
          process.exit(1);
        }

        //  The storedProcedure object must have 'schema' key.
        if (
          !(
            'schema' in
            this.domains[domain]['storedProcedures'][storedProcedureName]
          )
        ) {
          isValid = false;
          console.log(
            `domains[${domain}][storedProcedures][${storedProcedureName}] storedProcedure must have 'schema' key.`
          );
          process.exit(1);
        }
        //  The storedProcedure object must have 'parameters' key.
        if (
          !(
            'parameters' in
            this.domains[domain]['storedProcedures'][storedProcedureName]
          )
        ) {
          isValid = false;
          console.log(
            `domains[${domain}][storedProcedures][${storedProcedureName}] storedProcedure must have 'parameters' key.`
          );
          process.exit(1);
        }
        //  The storedProcedure object must have 'parameters' key with an 'Object' type.
        if (
          typeof this.domains[domain]['storedProcedures'][storedProcedureName][
          'parameters'
          ] != 'object'
        ) {
          isValid = false;
          console.log(
            `domains[${domain}][storedProcedures][${storedProcedureName}] storedProcedure must have 'parameters' key with Object type.`
          );
          process.exit(1);
        }

        // The storedProcedure object 'parameters' key must have atleast One 'parameter' element.Empty 'parameter' is not acceptable.
        // if (
        //   Object.keys(
        //     this.domains[domain]['storedProcedures'][storedProcedure][
        //       'parameters'
        //     ]
        //   ).length < 1
        // ) {
        //   isValid = false;
        //   console.log(
        //     `domains[${domain}][storedProcedures][${storedProcedure}] row:${rowIndex}/col:${colsIndex} The storedProcedure object 'parameters' key must have atleast One 'parameter' element. Empty 'parameter' is not acceptable.`
        //   );
        // }

        //  The storedProcedure object must have 'resultSet' key.
        if (
          !(
            'resultSet' in
            this.domains[domain]['storedProcedures'][storedProcedureName]
          )
        ) {
          isValid = false;
          console.log(
            `domains[${domain}][storedProcedures][${storedProcedureName}] storedProcedure must have 'resultSet' key.`
          );
          process.exit(1);
        }
        //  The storedProcedure object must have 'resultSet' key with an 'Object' type.
        if (
          typeof this.domains[domain]['storedProcedures'][storedProcedureName][
          'resultSet'
          ] != 'object'
        ) {
          isValid = false;
          console.log(
            `domains[${domain}][storedProcedures][${storedProcedureName}] storedProcedure must have 'resultSet' key with Object type.`
          );
          process.exit(1);
        }
        //  -----------------------------------------
        //  |    storedProcedures/ parameters       |
        //  -----------------------------------------
        //  The 'parameters' specific rules
        Object.keys(
          this.domains[domain]['storedProcedures'][storedProcedureName][
          'parameters'
          ]
        ).map((parameter, index) => {
          const rowIndex = index;
          //  The 'parameter' key must start with lowerCase letter
          if (parameter != firstLetterLowerCase(parameter)) {
            isValid = false;
            console.log(
              `domains[${domain}][storedProcedures][${storedProcedureName}][parameters][${parameter}] The 'parameter' key must start with lowerCase letter.`
            );
            process.exit(1);
          }

          //  The 'parameter' key must have only two keys
          if (
            Object.keys(
              this.domains[domain]['storedProcedures'][storedProcedureName][
              'parameters'
              ][parameter]
            ).length > 5
          ) {
            isValid = false;
            console.log(
              `domains[${domain}][storedProcedures][${storedProcedureName}][parameters][${parameter}] The 'parameter' key must have only two keys`
            );
            process.exit(1);
          }
          //  The parameters key must have 'direction' key
          if (
            !(
              'direction' in
              this.domains[domain]['storedProcedures'][storedProcedureName][
              'parameters'
              ][parameter]
            )
          ) {
            isValid = false;
            console.log(
              `domains[${domain}][storedProcedures][${storedProcedureName}][parameters][${parameter}] The parameters key must have 'direction' key.`
            );
            process.exit(1);
          }
          //  The parameter 'direction' key must be one of 'IN' or 'OUT'
          if (
            !(
              this.domains[domain]['storedProcedures'][storedProcedureName][
              'parameters'
              ][parameter]['direction'] in { IN: '', OUT: '' }
            )
          ) {
            isValid = false;
            console.log(
              // this.domains[domain]['storedProcedures'][storedProcedure][
              //   'parameters'
              // ][parameter]['direction']
              `domains[${domain}][storedProcedures][${storedProcedure}][parameters][${parameter}] The parameter 'direction' key must be one of 'IN' or 'OUT'.`
            );
            process.exit(1);
          }
          //  The parameters key must have 'type' key
          if (
            !(
              'type' in
              this.domains[domain]['storedProcedures'][storedProcedureName][
              'parameters'
              ][parameter]
            )
          ) {
            isValid = false;
            console.log(
              `domains[${domain}][storedProcedures][${storedProcedureName}][parameters][${parameter}] The parameters key must have 'type' key.`
            );
            process.exit(1);
          }

          //  The parameter 'type' key must be one of valid types i.e. 'Integer', 'String', 'BigDecimal'
          if (
            !(
              this.domains[domain]['storedProcedures'][storedProcedureName][
              'parameters'
              ][parameter]['type'] in parameterValidTypes
            )
          ) {
            isValid = false;
            console.log(
              // this.domains[domain]['storedProcedures'][storedProcedure][
              //   'parameters'
              // ][parameter]['direction']
              // this.domains[domain]['storedProcedures'][storedProcedure][
              //   'parameters'
              // ][parameter]['type']
              //  in parameterValidTypes
              `domains[${domain}][storedProcedures][${storedProcedureName}][parameters][${parameter}] The parameter 'type' key must be one of valid types.`
            );
            process.exit(1);
          }

          // console.log(parameter);
        });

        //  -----------------------------------------
        //  |    storedProcedures/ resultSet        |
        //  -----------------------------------------
        //  The 'resultSet' specific rules
        Object.keys(
          this.domains[domain]['storedProcedures'][storedProcedureName][
          'resultSet'
          ]
        ).map((result, index) => {
          const rowIndex = index;

          //  The 'resultSet' key must start with lowerCase letter
          if (result != firstLetterLowerCase(result)) {
            isValid = false;
            console.log(
              `domains[${domain}][storedProcedures][${storedProcedureName}][resultSet][${result}] The 'resultSet' key must start with lowerCase letter.`
            );
            // process.exit(1);
          }

          //  The 'result' key must have only two keys
          if (
            Object.keys(
              this.domains[domain]['storedProcedures'][storedProcedureName][
              'resultSet'
              ][result]
            ).length > 5
          ) {
            isValid = false;
            console.log(
              `domains[${domain}][storedProcedures][${storedProcedureName}][resultSet][${result}] The 'resultSet' key must have only two keys`
            );
          }
          //  The resultSet key must have 'direction' key
          if (
            !(
              'direction' in
              this.domains[domain]['storedProcedures'][storedProcedureName][
              'resultSet'
              ][result]
            )
          ) {
            isValid = false;
            console.log(
              `domains[${domain}][storedProcedures][${storedProcedureName}][resultSet][${result}] The resultSet key must have 'direction' key.`
            );
          }
          //  The resultSet 'direction' key must be one of 'IN' or 'OUT'
          if (
            !(
              this.domains[domain]['storedProcedures'][storedProcedureName][
              'resultSet'
              ][result]['direction'] in { IN: '', OUT: '' }
            )
          ) {
            isValid = false;
            console.log(
              // this.domains[domain]['storedProcedures'][storedProcedure][
              //   'parameters'
              // ][resultSet]['direction']
              `domains[${domain}][storedProcedures][${storedProcedureName}][resultSet][${result}] The resultSet 'direction' key must be one of 'IN' or 'OUT'.`
            );
          }
          //  The parameters key must have 'type' key
          if (
            !(
              'type' in
              this.domains[domain]['storedProcedures'][storedProcedureName][
              'resultSet'
              ][result]
            )
          ) {
            isValid = false;
            console.log(
              `domains[${domain}][storedProcedures][${storedProcedureName}][resultSet][${result}] The parameters key must have 'type' key.`
            );
          }

          //  The resultSet 'type' key must be one of valid types i.e. 'Integer', 'String', 'BigDecimal'
          if (
            !(
              this.domains[domain]['storedProcedures'][storedProcedureName][
              'resultSet'
              ][result]['type'] in parameterValidTypes
            )
          ) {
            isValid = false;
            console.log(
              // this.domains[domain]['storedProcedures'][storedProcedure][
              //   'parameters'
              // ][resultSet]['direction']
              // this.domains[domain]['storedProcedures'][storedProcedure][
              //   'parameters'
              // ][resultSet]['type']
              //  in parameterValidTypes
              `domains[${domain}][storedProcedures][${storedProcedureName}][resultSet][${result}] The resultSet 'type' key must be one of valid types.`
            );
          }

          // console.log(parameter);
        });
      }
    );

    //  -----------------------------------------
    //  |              restServices             |
    //  -----------------------------------------
    Object.keys(this.domains[domain]['restServices']).map((restService) => {
      // restService must be a valid object
      if (restService == null) {
        isValid = false;
        console.log(
          `domains[${domain}][restServices][${restService}] must not be null.`
        );
        process.exit(1);
      }
      // restService must be a valid string
      if (restService.length < 1) {
        isValid = false;
        console.log(
          `domains[${domain}][restServices][${restService}] must be a valid string.`
        );
        process.exit(1);
      }
      // length of each restService must be exactly 6
      if (
        !(
          Object.keys(this.domains[domain]['restServices'][restService])
            .length == 6
        )
      ) {
        isValid = false;
        console.log(
          `domains[${domain}][restServices][${restService}] length of restService object must be be exactly 6.`
        );
        process.exit(1);
      }

      //  The restService object must have 'uri' key.
      if (!('uri' in this.domains[domain]['restServices'][restService])) {
        isValid = false;
        console.log(
          `domains[${domain}][restServices][${restService}] restService must have 'uri' key.`
        );
        process.exit(1);
      }

      //  The restService object must have 'method' key.
      if (!('method' in this.domains[domain]['restServices'][restService])) {
        isValid = false;
        console.log(
          `domains[${domain}][restServices][${restService}] restService must have 'method' key.`
        );
        process.exit(1);
      }
      //  The restService object must have 'authorization' key.
      if (
        !('authorization' in this.domains[domain]['restServices'][restService])
      ) {
        isValid = false;
        console.log(
          `domains[${domain}][restServices][${restService}] restService must have 'authorization' key.`
        );
        process.exit(1);
      }
      //  The restService object must have 'queryParameters' key.
      if (
        !(
          'queryParameters' in this.domains[domain]['restServices'][restService]
        )
      ) {
        isValid = false;
        console.log(
          `domains[${domain}][restServices][${restService}] restService must have 'queryParameters' key.`
        );
        process.exit(1);
      }

      //  The restService object must have 'queryParameters' key with an 'Object' type.
      if (
        typeof this.domains[domain]['restServices'][restService][
        'queryParameters'
        ] != 'object'
      ) {
        isValid = false;
        console.log(
          `domains[${domain}][restServices][${restService}] restService must have 'queryParameters' key with Object type.`
        );
        process.exit(1);
      }
      //  The restService object must have 'request' key.
      if (!('request' in this.domains[domain]['restServices'][restService])) {
        isValid = false;
        console.log(
          `domains[${domain}][restServices][${restService}] restService must have 'request' key.`
        );
        process.exit(1);
      }

      //  The restService object must have 'request' key with an 'Object' type.
      if (
        typeof this.domains[domain]['restServices'][restService]['request'] !=
        'object'
      ) {
        isValid = false;
        console.log(
          `domains[${domain}][restServices][${restService}] restService must have 'request' key with Object type.`
        );
        process.exit(1);
      }
      //  The restService object must have 'requestBody' key.
      if (
        !(
          'requestBody' in
          this.domains[domain]['restServices'][restService]['request']
        )
      ) {
        isValid = false;
        console.log(
          `domains[${domain}][restServices][${restService}][request] restService must have 'requestBody' key.`
        );
        process.exit(1);
      }

      //  The restService object must have 'requestBody' key with an 'Object' type.
      if (
        typeof this.domains[domain]['restServices'][restService]['request'][
        'requestBody'
        ] != 'object'
      ) {
        isValid = false;
        console.log(
          `domains[${domain}][restServices][${restService}][request] restService must have 'requestBody' key with Object type.`
        );
        process.exit(1);
      }
      //  The restService object must have 'response' key.
      if (!('response' in this.domains[domain]['restServices'][restService])) {
        isValid = false;
        console.log(
          `domains[${domain}][restServices][${restService}] restService must have 'response' key.`
        );
        process.exit(1);
      }

      //  The restService object must have 'response' key with an 'Object' type.
      if (
        typeof this.domains[domain]['restServices'][restService]['response'] !=
        'object'
      ) {
        isValid = false;
        console.log(
          `domains[${domain}][restServices][${restService}] restService must have 'response' key with Object type.`
        );
        process.exit(1);
      }
      //  The restService object must have 'responseBody' key.
      if (
        !(
          'responseBody' in
          this.domains[domain]['restServices'][restService]['response']
        )
      ) {
        isValid = false;
        console.log(
          `domains[${domain}][restServices][${restService}][request] restService must have 'requestBody' key.`
        );
        process.exit(1);
      }

      //  The restService object must have 'responseBody' key with an 'Object' type.
      if (
        typeof this.domains[domain]['restServices'][restService]['response'][
        'responseBody'
        ] != 'object'
      ) {
        isValid = false;
        console.log(
          `domains[${domain}][restServices][${restService}][response] restService must have 'responseBody' key with Object type.`
        );
        process.exit(1);
      }

      // The restService name must start with lowerCase letter.
      if (restService != firstLetterLowerCase(restService)) {
        isValid = false;
        console.log(
          `domains[${domain}][restServices][${restService}] the restService name must start with lowerCase letter.`
        );
        process.exit(1);
      }

      // Object.keys(this.domains[domain]['restServices'][restService]).map(
      //   (restService) => {
      //     console.log(restService);
      //   }
      // );

      //  -----------------------------------------
      //  |       restService/ requestBody        |
      //  -----------------------------------------
      //  The 'requestBody' specific rules
      Object.keys(
        this.domains[domain]['restServices'][restService]['request'][
        'requestBody'
        ]
      ).map((parameter, index) => {
        const rowIndex = index;
        //  The 'requestBody' key must start with lowerCase letter
        if (parameter != firstLetterLowerCase(parameter)) {
          isValid = false;
          console.log(
            `domains[${domain}][restServices][${restService}][request][requestBody][${parameter}] The 'requestBody' key must start with lowerCase letter.`
          );
          process.exit(1);
        }
        //  The 'requestBody' key must have only two keys
        if (
          Object.keys(
            this.domains[domain]['restServices'][restService]['request'][
            'requestBody'
            ][parameter]
          ).length != 2
        ) {
          isValid = false;
          console.log(
            `domains[${domain}][restServices][${restService}][request][requestBody][${parameter}] The 'requestBody' key must have only two keys`
          );
          process.exit(1);
        }
        //  The 'requestBody' key must have 'direction' key
        if (
          !(
            'direction' in
            this.domains[domain]['restServices'][restService]['request'][
            'requestBody'
            ][parameter]
          )
        ) {
          isValid = false;
          console.log(
            `domains[${domain}][restServices][${restService}][request][requestBody][${parameter}] The requestBody key must have 'direction' key.`
          );
          process.exit(1);
        }
        //  The requestBody 'direction' key must be one of 'IN' or 'OUT'
        if (
          !(
            this.domains[domain]['restServices'][restService]['request'][
            'requestBody'
            ][parameter]['direction'] in { IN: '', OUT: '' }
          )
        ) {
          isValid = false;
          console.log(
            // this.domains[domain]['restServices'][storedProcedure][
            //   'requestBody'
            // ][parameter]['direction']
            `domains[${domain}][restServices][${restService}][request][requestBody][${parameter}] The requestBody 'direction' key must be one of 'IN' or 'OUT'.`
          );
          process.exit(1);
        }
        //  The requestBody key must have 'type' key
        if (
          !(
            'type' in
            this.domains[domain]['restServices'][restService]['request'][
            'requestBody'
            ][parameter]
          )
        ) {
          isValid = false;
          console.log(
            `domains[${domain}][restServices][${restService}]['request']['requestBody'][parameters][${parameter}] The parameters key must have 'type' key.`
          );
          process.exit(1);
        }

        //  The requestBody 'type' key must be one of valid types i.e. 'Integer', 'String', 'BigDecimal'
        if (
          !(
            this.domains[domain]['restServices'][restService]['request'][
            'requestBody'
            ][parameter]['type'] in parameterValidTypes
          )
        ) {
          isValid = false;
          console.log(
            // this.domains[domain]['restServices'][storedProcedure][
            //   'parameters'
            // ][parameter]['direction']
            // this.domains[domain]['storedProcedures'][storedProcedure][
            //   'parameters'
            // ][parameter]['type']
            //  in parameterValidTypes
            `domains[${domain}][restServices][${restService}][request][requestBody][${parameter}] The requestBody 'type' key must be one of valid types.`
          );
          process.exit(1);
        }
      });
    });
  });
  // isValid = false;
  return isValid;
};

/********************************************************************************
 *                        REST API
 ********************************************************************************/

//  Called from FeedGlobalConfigWithSuger.js
exports.isThereAnyRestService = () => {
  let targetRest = false;
  Object.keys(this.domains).map((domain) => {
    if (Object.keys(this.domains[domain]['restServices']).length > 0) {
      targetRest = true;
    }
  });
  return targetRest;
};

//  Called from FeedContent.js
exports.isRestServiceNameExist = (inputRestName) => {
  let targetRest = false;
  Object.keys(this.domains).map((domain) => {
    Object.keys(this.domains[domain]['restServices']).map((restName) => {
      if (restName == inputRestName) {
        targetRest = true;
      }
    });
  });
  return targetRest;
};

exports.getRestServiceByRestServiceName = (targetRestServiceName) => {
  let findRestService = ``;
  Object.keys(this.domains).map((domain) => {
    Object.keys(this.domains[domain]['restServices']).map(
      (actualRestServices) => {
        if (actualRestServices == targetRestServiceName) {
          findRestService =
            this.domains[domain]['restServices'][actualRestServices];
        }
      }
    );
  });
  return findRestService;
};

//  Call internally from this file: generateModelBodyFromRestService
exports.getRestServiceRequestBodyByRestServiceName = (
  targetRestServiceName
) => {
  let findRestServiceParameters = ``;
  Object.keys(this.domains).map((domain) => {
    Object.keys(this.domains[domain]['restServices']).map(
      (actualRestService) => {
        if (actualRestService == targetRestServiceName) {
          findRestServiceParameters =
            this.domains[domain]['restServices'][actualRestService]['request'][
            'requestBody'
            ];
        }
      }
    );
  });
  return findRestServiceParameters;
};

//  Call internally from this file: generateModelBodyFromStoredProcedure
exports.getRestServiceResponseBodyByRestServiceName = (
  targetRestServiceName
) => {
  let findRestServiceResponse = ``;
  Object.keys(this.domains).map((domain) => {
    Object.keys(this.domains[domain]['restServices']).map(
      (actualRestService) => {
        if (actualRestService == targetRestServiceName) {
          findRestServiceResponse =
            this.domains[domain]['restServices'][actualRestService]['response'][
            'responseBody'
            ];
        }
      }
    );
  });
  return findRestServiceResponse;
};

//  Call from ModelGenerator.js
exports.generateModelBodyFromRestService = (restServiceName, direction) => {
  let parameterList =
    this.getRestServiceRequestBodyByRestServiceName(restServiceName);
  let responseBody =
    this.getRestServiceResponseBodyByRestServiceName(restServiceName);

  let inputModel = ``;
  let outputModel = ``;
  Object.keys(parameterList).map((parameters) => {
    if (parameterList[parameters]['direction'] != 'IN') {
      outputModel += `private ${parameterList[parameters]['type']
        } ${parameters.toLowerCase()};
    `;
    }
    if (parameterList[parameters]['direction'] != 'OUT') {
      inputModel += `private ${parameterList[parameters]['type']
        } ${parameters.toLowerCase()};
    `;
    }
  });

  let responseBodyModel = ``;
  Object.keys(responseBody).map((result) => {
    if (responseBody[result]['direction'] == 'OUT') {
      responseBodyModel += `private ${responseBody[result]['type']
        } ${result.toLowerCase()};
    `;
    }
  });

  if (direction == 'IN') {
    return inputModel;
  } else if (direction == 'OUT') {
    return outputModel;
  } else if (direction == 'responseBody') {
    return responseBodyModel;
  }
};

/********************************************************************************
 *                        StoredProcedure API
 ********************************************************************************/
//  Called from FeedContent.js
exports.isStoredProcedureNameExist = (inputStoredProcedureName) => {
  let targetStoredProcedure = false;
  Object.keys(this.domains).map((domain) => {
    Object.keys(this.domains[domain]['storedProcedures']).map(
      (storedProcedureName) => {
        if (storedProcedureName == inputStoredProcedureName) {
          targetStoredProcedure = true;
        }
      }
    );
  });
  return targetStoredProcedure;
};
//  called from
//    ControllerGenerator
//    ServiceImplGenerator
//    serviceGenerator
//    ModelGenerator
//    RepositoryGenerator
//    EntityGenerator
//    testGenerator
exports.getStoredProcedureByStoredProcedureName = (
  targetStoredProcedureName,
  mode
) => {
  let findStoredProcedure = ``;
  Object.keys(this.domains).map((domain) => {
    Object.keys(this.domains[domain]['storedProcedures']).map(
      (actualStoredProcedure) => {

        // if (targetStoredProcedureName == 'fullAccountInfo') {
        //   console.log(domain);
        //   console.log(actualStoredProcedure);
        //   console.log(findStoredProcedure);
        // }

        if (actualStoredProcedure == targetStoredProcedureName) {
          // if(targetStoredProcedureName == 'fullAccountInfo'){console.log('***')}
          findStoredProcedure =
            this.domains[domain]['storedProcedures'][actualStoredProcedure];
        }
      }
    );
  });

  if (targetStoredProcedureName == 'rialLetterOfGuarantie') {
    if (mode == 'development_SpringBoot' || mode == 'development_Tomcat') {
      console.log(findStoredProcedure);
    }
  }

  return findStoredProcedure;
};
//  Called from FeedGlobalConfigWithSuger.js
exports.getDataSourceNameByStoredProcedureName = (
  targetStoredProcedureName
) => {
  let findStoredProcedureDataSource = ``;
  Object.keys(this.domains).map((domain) => {
    Object.keys(this.domains[domain]['storedProcedures']).map(
      (actualStoredProcedure) => {
        if (actualStoredProcedure == targetStoredProcedureName) {
          findStoredProcedureDataSource =
            this.domains[domain]['storedProcedures'][actualStoredProcedure][
            'datasourceName'
            ];
        }
      }
    );
  });
  return findStoredProcedureDataSource;
};
//  TODO
//  Candidate to be removed
exports.getStoredProcedureDomain = (targetStoredProcedureName) => {
  let findDomain = ``;
  Object.keys(this.domains).map((domain) => {
    Object.keys(this.domains[domain]['storedProcedures']).map(
      (actualStoredProcedure) => {
        if (actualStoredProcedure == targetStoredProcedureName) {
          findDomain = domain;
        }
      }
    );
  });
  return findDomain;
};

//  Call internally from this file: generateModelBodyFromStoredProcedure
exports.getStoredProcedureParameterByStoredProcedureName = (
  targetStoredProcedureName
) => {
  let findStoredProcedureParameters = ``;
  Object.keys(this.domains).map((domain) => {
    Object.keys(this.domains[domain]['storedProcedures']).map(
      (actualStoredProcedure) => {
        if (actualStoredProcedure == targetStoredProcedureName) {
          findStoredProcedureParameters =
            this.domains[domain]['storedProcedures'][actualStoredProcedure][
            'parameters'
            ];
        }
      }
    );
  });
  return findStoredProcedureParameters;
};

//  Call internally from this file: generateModelBodyFromStoredProcedure
exports.getStoredProcedureResultSetByStoredProcedureName = (
  targetStoredProcedureName
) => {
  let findStoredProcedureResultSet = ``;
  Object.keys(this.domains).map((domain) => {
    Object.keys(this.domains[domain]['storedProcedures']).map(
      (actualStoredProcedure) => {
        if (actualStoredProcedure == targetStoredProcedureName) {
          findStoredProcedureResultSet =
            this.domains[domain]['storedProcedures'][actualStoredProcedure][
            'resultSet'
            ];
        }
      }
    );
  });
  return findStoredProcedureResultSet;
};
//  Call internally from this file: generateModelBodyFromStoredProcedure
exports.getStoredProcedureInputParameters = (targetStoredProcedureName) => {
  const findStoredProcedure =
    typeof targetStoredProcedureName != 'string'
      ? targetStoredProcedureName
      : this.getStoredProcedureByStoredProcedureName(targetStoredProcedureName);
  let inputParameters = ``;
  let prefix = ``;
  Object.keys(findStoredProcedure['parameters']).map((parameters, index) => {
    if (findStoredProcedure['parameters'][parameters]['direction'] == 'IN') {
      inputParameters +=
        prefix +
        findStoredProcedure['parameters'][parameters]['type'] +
        ` ` +
        parameters;
      prefix = ` ,`;
    }
  });
  return inputParameters;
};
//  TODO
//  Candidate to be removed
exports.getStoredProcedureOutputParameters = (targetStoredProcedureName) => {
  const findStoredProcedure =
    typeof targetStoredProcedureName != 'string'
      ? targetStoredProcedureName
      : this.getStoredProcedureByStoredProcedureName(targetStoredProcedureName);
  let ouputParameters = ``;
  let prefix = ``;
  Object.keys(findStoredProcedure['parameters']).map((parameters, index) => {
    if (findStoredProcedure['parameters'][parameters]['direction'] == 'OUT') {
      ouputParameters +=
        prefix +
        findStoredProcedure['parameters'][parameters]['type'] +
        ` ` +
        parameters;
      prefix = ` ,`;
    }
  });
  return ouputParameters;
};
//  TODO
//  Candidate to be removed
exports.getStoredProcedureJSONInputParameters = (targetStoredProcedureName) => {
  const findStoredProcedure =
    typeof targetStoredProcedureName != 'string'
      ? targetStoredProcedureName
      : this.getStoredProcedureByStoredProcedureName(targetStoredProcedureName);
  let inputParameterTypes = {};
  let prefix = ``;
  Object.keys(findStoredProcedure['parameters']).map((parameters, index) => {
    if (findStoredProcedure['parameters'][parameters]['direction'] == 'IN') {
      inputParameterTypes[parameters] =
        findStoredProcedure['parameters'][parameters]['type'];
    }
  });
  return inputParameterTypes;
};
//  Call from ModelGenerator.js
exports.generateModelBodyFromStoredProcedure = (
  storedProcedureName,
  direction
) => {
  let parameterList =
    this.getStoredProcedureParameterByStoredProcedureName(storedProcedureName);
  let resultSet =
    this.getStoredProcedureResultSetByStoredProcedureName(storedProcedureName);

  let inputModel = ``;
  let outputModel = ``;
  Object.keys(parameterList).map((parameter) => {
    if (parameterList[parameter]['direction'] != 'IN') {
      outputModel += `
      private ${parameterList[parameter]['type']} ${parameter};`;
    }
    if (parameterList[parameter]['direction'] != 'OUT') {
      inputModel += `
      private ${parameterList[parameter]['type']} ${parameter};`;
    }
  });
  let resultSetModel = ``;
  Object.keys(resultSet).map((result) => {
    if (resultSet[result]['direction'] == 'OUT') {
      resultSetModel += `
      private ${resultSet[result]['type']} ${result};`;
    }
  });
  if (direction == 'IN') {
    return inputModel;
  } else if (direction == 'OUT') {
    return outputModel;
  } else if (direction == 'ResultSet') {
    return resultSetModel;
  }
};

// //  Call from ModelGenerator.js
// exports.generateModelBodyFromStoredProcedureReultSet = (
//   storedProcedureName,
//   direction
// ) => {
//   let parameterList =
//     this.getStoredProcedureResultSetByStoredProcedureName(storedProcedureName);
//   let inputModel = ``;
//   let outputModel = ``;
//   Object.keys(parameterList).map((parameters) => {
//     if (parameterList[parameters]['direction'] != 'IN') {
//       outputModel += `private ${
//         parameterList[parameters]['type']
//       } ${parameters.toLowerCase()};
//     `;
//     }
//     if (parameterList[parameters]['direction'] != 'OUT') {
//       inputModel += `private ${
//         parameterList[parameters]['type']
//       } ${parameters.toLowerCase()};
//     `;
//     }
//   });
//   if (direction == 'IN') {
//     return inputModel;
//   } else if (direction == 'OUT') {
//     return outputModel;
//   }
// };
//  TODO
//  Candidate to be removed
exports.generateJakartaStoredProcedureQueryInterface = (
  storedProcedureName,
  targetStoredProcedure
) => {
  const inputParameters = `${this.getStoredProcedureInputParameters(
    targetStoredProcedure
  )}`;

  return `\rpublic ${firstLetterCaptalize(
    storedProcedureName
  )}DTO ${storedProcedureName}(${inputParameters});`;
};
//  Called from ServiceImplGenerator.js
exports.generateJakartaStoredProcedureQuery = (
  storedProcedureName,
  targetStoredProcedure,

  serviceInputObj,
  serviceOutputObj,
  serviceResultSetObj,

  uniqueInputDataType,
  uniqueOutputDataType,
  uniqueResultSetDataType
) => {
  const serviceOutput =
    Object.keys(uniqueResultSetDataType).length == 0
      ? Object.keys(uniqueOutputDataType).length == 0
        ? `void`
        : `${firstLetterCaptalize(storedProcedureName)}OutputDTO`
      : `List<${firstLetterCaptalize(storedProcedureName)}ResultListDTO>`;


  // const serviceOutput =
  //   Object.keys(serviceResultSetObj).length == 0
  //     ? Object.keys(serviceOutputObj).length == 0
  //       ? `void`
  //       : `${firstLetterCaptalize(storedProcedureName)}OutputDTO`
  //     : `List<${firstLetterCaptalize(storedProcedureName)}ResultListDTO>`;

  // const serviceInput =
  //   Object.keys(uniqueInputDataType).length == 0
  //     ? ``
  //     : Object.keys(uniqueInputDataType).length == 1
  //     ? `${Object.keys(uniqueInputDataType)[0]} ${
  //         uniqueInputDataType[Object.keys(uniqueInputDataType)[0]]
  //       }`
  //     : `${this.firstLetterCaptalize(
  //         storedProcedureName
  //       )}InputDTO ${storedProcedureName}InputDTO`;

  const serviceInput =
    Object.keys(serviceInputObj).length == 0
      ? ``
      // : Object.keys(uniqueInputDataType).length == 1
      //   ? `${Object.keys(uniqueInputDataType)[0]} ${uniqueInputDataType[Object.keys(uniqueInputDataType)[0]]
      //   }`
      : `${firstLetterCaptalize(
        storedProcedureName
      )}InputDTO ${storedProcedureName}InputDTO`;
  // console.log('');
  // console.log(storedProcedureName);
  // console.log(serviceOutput);
  // console.log(Object.keys(serviceResultSetObj));
  // console.log(Object.keys(serviceResultSetObj).length == 0);
  // console.log('');

  let executionPart = ``;
  // const inputParameters = `${this.getStoredProcedureInputParameters(
  //   targetStoredProcedure
  // )}`;
  // const inputParameters = `${firstLetterCaptalize(
  //   storedProcedureName
  // )}InputDTO ${storedProcedureName}InputDTO`;

  let setInputParameters = ``;
  let setOutputParameters = ``;
  if (
    Object.keys(serviceResultSetObj).length == 0 &&
    Object.keys(serviceOutputObj).length > 0
  ) {
    //  with No resultSet
    setOutputParameters = `

        ${firstLetterCaptalize(
      storedProcedureName
    )}OutputDTO ${storedProcedureName}OutputDTO = ${firstLetterCaptalize(
      storedProcedureName
    )}OutputDTO.builder()`;
  }

  // const annotation = `\r@PersistenceContext(unitName = "${targetStoredProcedure['datasourceName']}")
  // private EntityManager ${targetStoredProcedure['datasourceName']}entityManager;
  // `;

  const querySignature = `
    @Override
    public ${serviceOutput} callSp${firstLetterCaptalize(
    storedProcedureName
  )}(${serviceInput
    ?
    serviceInput + ','
    :
    ''} Principal principal) {
        ${Object.keys(serviceResultSetObj).length > 0
      ?
      `List<${firstLetterCaptalize(storedProcedureName)}ResultListDTO> ${storedProcedureName}ResultSetLists = new ArrayList<${firstLetterCaptalize(storedProcedureName)}ResultListDTO>();
        Encoding encoding = new Encoding();`
      :
      'Encoding encoding = new Encoding();'
    }
       try {
        StoredProcedureQuery ${storedProcedureName}Instance = ${targetStoredProcedure['datasourceName']
    }EntityManager.createStoredProcedureQuery("${targetStoredProcedure['schema']
    }.${targetStoredProcedure['name']}")`;

  let queryBody = ``;
  let querySetParams = ``;

  if (
    // Object.keys(serviceInputObj).length > 0 &&
    Object.keys(targetStoredProcedure['parameters']).length > 0
  ) {
    Object.keys(targetStoredProcedure['parameters']).map(
      (parameters, index) => {
        queryBody += `
                .registerStoredProcedureParameter(${index}, ${targetStoredProcedure['parameters'][parameters]['type']}.class, ${targetStoredProcedure['parameters'][parameters]['direction']})`;
        // if (
        //   targetStoredProcedure['parameters'][parameters]['direction'] ==
        //   'IN' &&
        //   Object.keys(uniqueInputDataType).length == 1
        // ) {
        //   setInputParameters += `
        //         .setParameter(${index}, ${uniqueInputDataType[Object.keys(uniqueInputDataType)[0]]
        //     })`;
        // }

        // if(storedProcedureName == 'getSeriFromTashilat'){
        //   console.log(targetStoredProcedure);
        // }

        if (
          targetStoredProcedure['parameters'][parameters]['direction'] ==
          'IN' &&
          Object.keys(uniqueInputDataType).length >= 1
        ) {
          setInputParameters +=
            (
              targetStoredProcedure['parameters'][parameters]['type'] == 'String' &&
              Object.keys(targetStoredProcedure['parameters'][parameters]).includes('targetEncoding') &&
              targetStoredProcedure['parameters'][parameters]['targetEncoding'] == '1252'
            )
              ? `
            .setParameter(${index}, encoding.convert1256To1252(${storedProcedureName}InputDTO.get${firstLetterCaptalize(
                parameters
              )}()))`
              : `
            .setParameter(${index}, ${storedProcedureName}InputDTO.get${firstLetterCaptalize(
                parameters
              )}())`;

          // setInputParameters += `
          //       .setParameter(${index}, ${storedProcedureName}InputDTO.get${firstLetterCaptalize(
          //   parameters
          // )}())`;
        }
        if (
          targetStoredProcedure['parameters'][parameters]['direction'] ==
          'OUT' &&
          Object.keys(serviceResultSetObj).length == 0 &&
          Object.keys(serviceOutputObj).length > 0
        ) {
          const openEncoding = `encoding.getDB2UnicodeString(`
          const closeEncoding = `)`
          setOutputParameters += targetStoredProcedure['parameters'][parameters]['type'] == 'String'
            ? `
            .${parameters}(${openEncoding}(${targetStoredProcedure['parameters'][parameters]['type']
            }) ${storedProcedureName}Instance.getOutputParameterValue(${index})${closeEncoding})`
            : `
            .${parameters}((${targetStoredProcedure['parameters'][parameters]['type']
            }) ${storedProcedureName}Instance.getOutputParameterValue(${index}))`
        }
      }
    );
  }
  setInputParameters += `;`;

  // if (!hasResultSet) {
  // } else {
  // }
  let builderString = ``;
  Object.keys(targetStoredProcedure['resultSet']).map((k, index) => {
    if (targetStoredProcedure['resultSet'][k]['type'] == `Integer`) {
      builderString += `
                            .${k}(Integer.valueOf(obj[${index}].toString()))`
    } else if (targetStoredProcedure['resultSet'][k]['type'] == `String`) {
      builderString += `
                            .${k}(encoding.getDB2UnicodeString(Objects.toString(obj[${index}], "")))`
    } else if (targetStoredProcedure['resultSet'][k]['type'] == `BigDecimal`) {
      builderString += `
                            //.${k}(new BigDecimal(obj[${index}].toString()))
                            .${k}(new BigDecimal(Objects.toString(obj[${index}], "0")))`
    } else if (targetStoredProcedure['resultSet'][k]['type'] == `Short`) {
      builderString += `
                            .${k}(Short.valueOf(obj[${index}].toString()))`
    } else if (targetStoredProcedure['resultSet'][k]['type'] == `long`) {
      builderString += `
                            .${k}(Long.parseLong(obj[${index}].toString()))`
    }
  })
  // console.log(builderString);

  if (
    Object.keys(serviceResultSetObj).length == 0 &&
    Object.keys(serviceOutputObj).length == 0
  ) {
    setOutputParameters += `
  }`;
  } else if (
    Object.keys(serviceResultSetObj).length == 0 &&
    Object.keys(serviceOutputObj).length > 0
  ) {
    //  with No resultSet
    setOutputParameters += `
                .build();
        return ${storedProcedureName}OutputDTO;
      } catch (Exception ex) {
        //            System.out.println((SQLException)ex);
                    throw new SQLGrammerException(SQLGrammerException.class);
      }
  }`;
    executionPart = `
        ${storedProcedureName}Instance.execute();`;
  } else {


    //  with resultSet
    setOutputParameters += `
        return ${storedProcedureName}ResultSetLists;
        
    } catch (Exception ex) {
      //            System.out.println((SQLException)ex);
                  throw new SQLGrammerException(SQLGrammerException.class);
    }
  }`;
    executionPart = `
        // List<\${firstLetterCaptalize(
        //   storedProcedureName
        // )}ResultListDTO> ${storedProcedureName}ResultLists = ${storedProcedureName}Instance.getResultList();
        
        
        List<Object[]> ${storedProcedureName}ResultLists = (List<Object[]>) ${storedProcedureName}Instance.getResultList();
        ListIterator<Object[]> listIterator = ${storedProcedureName}ResultLists.listIterator();
        while (listIterator.hasNext()) {
            Object[] obj = listIterator.next();

            ${storedProcedureName}ResultSetLists.add(
                    ${firstLetterCaptalize(storedProcedureName)}ResultListDTO.builder()
                    ${builderString}
                            // .zonecode(Integer.valueOf(o[0].toString()))
                            // .zonedesc(encoding.getDB2UnicodeString(o[1].toString()))
                            .build()
            );
         }
        `;
  }


  // console.log(bodyBlock);
  // let output = `
  //       ${firstLetterCaptalize(
  //         storedProcedureName
  //       )}OutputDTO ${storedProcedureName}OutputDTO = ${firstLetterCaptalize(
  //   storedProcedureName
  // )}OutputDTO.builder()

  // ${storedProcedureName}Instance`;

  //     FullAccountInfoModel fullAccountInfoModel = FullAccountInfoModel.builder()
  //             .PO_ERROR((Integer) extacc2intacc1.getOutputParameterValue(1))

  // //        FullAccountInfoModel.builder().PI_EXTACCNO((BigDecimal) extacc2intacc1.getOutputParameterValue(2));
  //             .PO_TYPEX((Short) extacc2intacc1.getOutputParameterValue(3))
  //             .PO_ACCTYPE((Short) extacc2intacc1.getOutputParameterValue(4))
  //             .PO_STATUSX((Short) extacc2intacc1.getOutputParameterValue(5))
  //             .PO_ACCLOCKSTATUS((Short) extacc2intacc1.getOutputParameterValue(6))
  //             .PO_CONTROLPAYERID((Short) extacc2intacc1.getOutputParameterValue(7))
  //             .PO_ETRNSSTATUS((Short) extacc2intacc1.getOutputParameterValue(8))
  //             .PO_PERMITDRAWDOC((Short) extacc2intacc1.getOutputParameterValue(9))
  //             .PO_SERVICESTATUS((Short) extacc2intacc1.getOutputParameterValue(10))
  //             .PO_ARZCODE((Short) extacc2intacc1.getOutputParameterValue(11))
  //             .PO_CATEGORYCODE((Short) extacc2intacc1.getOutputParameterValue(12))
  //             .PO_PROFITSTATUS((Short) extacc2intacc1.getOutputParameterValue(13))
  //             .PO_RESPITEDELAY((Short) extacc2intacc1.getOutputParameterValue(14))
  //             .PO_ACCCUSTTYPE((Short) extacc2intacc1.getOutputParameterValue(15))
  //             .PO_ISINACTIVE((Short) extacc2intacc1.getOutputParameterValue(16))
  //             .PO_ISACTIVE((Short) extacc2intacc1.getOutputParameterValue(17))
  //             .PO_ISSUSPEND((Short) extacc2intacc1.getOutputParameterValue(18))
  //             .PO_ISCLOSED((Short) extacc2intacc1.getOutputParameterValue(19))
  //             .PO_ISACCLOCK((Short) extacc2intacc1.getOutputParameterValue(20))
  //             .PO_ISINDIVIDUAL((Short) extacc2intacc1.getOutputParameterValue(21))
  //             .PO_ISCOMMUNAL((Short) extacc2intacc1.getOutputParameterValue(22))
  //             .PO_ACCDURATION((Short) extacc2intacc1.getOutputParameterValue(23))
  //             .PO_PERMITABSENTDRAW((Short) extacc2intacc1.getOutputParameterValue(24))
  //             .PO_BILLREPORTERBRANCH((Integer) extacc2intacc1.getOutputParameterValue(25))
  //             .PO_BRANCH((Integer) extacc2intacc1.getOutputParameterValue(26))
  //             .PO_CREATEDATE((Integer) extacc2intacc1.getOutputParameterValue(27))
  //             .PO_INTCUSTID((Integer) extacc2intacc1.getOutputParameterValue(28))
  //             .PO_STAMPDATE((Integer) extacc2intacc1.getOutputParameterValue(29))
  //             .PO_MINDURATION((Integer) extacc2intacc1.getOutputParameterValue(30))
  //             .PO_STAMPAMNT((Integer) extacc2intacc1.getOutputParameterValue(31))
  //             .PO_ACCNO((BigDecimal) extacc2intacc1.getOutputParameterValue(32))
  //             .PO_EXTACCNO((BigDecimal) extacc2intacc1.getOutputParameterValue(33))
  //             .PO_SANJESHACCNO((BigDecimal) extacc2intacc1.getOutputParameterValue(34))
  //             .PO_EXTCUSTID((BigDecimal) extacc2intacc1.getOutputParameterValue(35))
  //             .PO_MINBALANCE((BigDecimal) extacc2intacc1.getOutputParameterValue(36))
  //             .PO_MINPROFITBALANCE((BigDecimal) extacc2intacc1.getOutputParameterValue(37))
  //             .PO_OWNERNAME((String) extacc2intacc1.getOutputParameterValue(38))
  //             .PO_STEP((Integer) extacc2intacc1.getOutputParameterValue(39))
  //             .build();
  // `;

  // Object.keys(this.getStoredProcedureJSONInputParameters(targetStoredProcedure)).map()
  // console.log(querySignature);
  // console.log(queryBody);

  // console.log(inputParameters);
  // console.log(setInputParameters);
  // console.log(setInputParameters);
  return (
    querySignature +
    queryBody +
    setInputParameters +
    executionPart +
    setOutputParameters //  +
    // `}`
  );
};

// console.log(this.getInputParameters('fullAccountInfo003'));
// console.log(this.getOutputParameter('fullAccountInfo003'));
// this.getStoredProcedureByStoredProcedureName('SPG_FULLACCOUNTINFO03');
// this.getStoredProcedureDomain('SPG_FULLACCOUNTINFO03');

/********************************************************************************
 *                        Jakarta Persistence API
 ********************************************************************************/

//  called from
//    ControllerGenerator.js
//    ServiceImplGenerator.js
//    ServiceLogicGenerator.js
//    ServiceGenerator.js
//    ModelGenerator.js
//    RepositoryGenerator.js
//    EntityGenerator.js
//    TestGenerator.js
// exports.getJpaByJpaName = (inputJpaName, appObjectId) => {
exports.getJpaByJpaName = (inputJpaName, jpaNameParent) => {
  let targetJpa = ``;
  let targetJpaPK = ``;
  let targetMultiStepForm = []

  let targetJpaParent = ``;
  let targetJpaParentPK = ``;
  let targetJpaParentPKColumn = ``;
  let virtualPKColumn = {}
  let childPathVariableObject = {}

  let uniqueIndexes = [];

  let parentPKField = ``;
  let injectIdField = [];

  let newcontent = [];
  let finalJpa = {};

  // if it is parent route then it has PrimaryKey by itself
  // if it is non-parent route, then we provide PrimaryKey of its prarent, as its index key
  //  1) extract jpaNameParent


  // 2) extract JPA (i.e. targetJpa) & parent JPA (i.e targetJpaParent)
  Object.keys(this.domains).map((domain) => {
    Object.keys(this.domains[domain]['jpas']).map((jpaName) => {

      if (jpaName == inputJpaName) {
        // console.log(jpaName);
        targetJpa = this.domains[domain]['jpas'][jpaName];
        targetJpaPK = this.getPrimaryKeyByJpaName(inputJpaName);
        targetMultiStepForm = targetJpa['multiStepForm']

        uniqueIndexes.push(...this.getUniqueKeyByJpaName(inputJpaName));
        // if (jpaName == 'tafahomInformation') {
        //   if (jpaName == 'eghdamat') {
        //   // console.log(uniqueIndexes);
        //   console.log(targetJpaPK);
        // }
        // parent route own virtualPKColumn
        virtualPKColumn = this.getVirtualPKColumn(jpaName)
        childPathVariableObject = getAllChildsPathVariablesByRouteName(jpaName)
      }
      if (jpaNameParent?.length > 0 && jpaName == jpaNameParent) {
        targetJpaParent = this.domains[domain]['jpas'][jpaName];
        // 3) extract parimary key column of target jpa parent i.e. targetJpaParent
        targetJpaParentPK = this.getPrimaryKeyByJpaName(jpaNameParent);
        targetJpaParentPKColumn = extractColObjByColName(
          targetJpaParent,
          targetJpaParentPK
        );
        // uniqueIndexes = this.getUniqueKeyByJpaName(jpaNameParent);
      }

    });
  });

  //  select pathVAriable or VirtualPK of parent JPA
  if (getRootRoutes().includes(jpaNameParent)) {
    virtualPKColumn =
      (getRoutePathVariable(inputJpaName).length > 0 && typeof targetJpaParent == 'object')
        ?
        //  parent column corresponding to child 'pathVariable'
        extractColObjByColName(targetJpaParent, getRoutePathVariable(inputJpaName))
        :
        //  parent virtualPKColumn
        this.getVirtualPKColumn(jpaNameParent)
  }
  // else if (getRootRoutes().includes(jpaName)) {
  //   virtualPKColumn = this.getVirtualPKColumn(jpaNameParent)
  // }


  // if (getRoutePathVariable(inputJpaName).length > 0 && typeof targetJpaParent == 'object') {
  //   // console.log(inputJpaName);
  //   // console.log(targetJpaParent == '');
  //   // console.log(inputJpaName);
  //   // console.log(targetJpaParentPK);
  //   const routePath = getRoutePathVariable(inputJpaName);
  //   const routePathColumn = extractColObjByColName({ ...targetJpaParent }, routePath);
  //   console.log(routePathColumn);
  // console.log(virtualPKColumn);
  // }

  // if (inputJpaName == 'eghdamat') {
  //   console.log(virtualPKColumn);
  // }


  // console.log(virtualPKColumn);
  //  in case there is a valid parent JPA
  if (targetJpaParentPK.length) {
    // in case that we want to have a seperate Id column in addition to business Id column
    // in our situation this id column is deleted
    // console.log(inputJpaName);
    // if (inputJpaName == 'agent') {
    //   console.log(virtualPKColumn);
    // }
    parentPKField = [
      [
        // {
        //   lable: targetJpaParentPKColumn['lable'],
        //   title: targetJpaParentPKColumn['title'],
        //   value: {
        //     type: targetJpaParentPKColumn['value']['type'],
        //     schema: {
        //       type: targetJpaParentPKColumn['value']['schema']['type'],
        //       // isForeignKey: true,
        //       // isPrimaryKey: true,
        //       isVisible: true,
        //       isGridLayout: false,
        //       largeBreakpointWidth: 1,
        //     },
        //   },
        // },
        {
          lable: virtualPKColumn['lable'],
          title: virtualPKColumn['title'],
          step: 0,
          value: {
            type: virtualPKColumn['value']['type'],
            schema: {
              type: virtualPKColumn['value']['schema']['type'],
              ...virtualPKColumn['value']['schema']['type'] == 'BigDecimal' && { precision: virtualPKColumn['value']['schema']['precision'] },
              ...virtualPKColumn['value']['schema']['type'] == 'BigDecimal' && { scale: virtualPKColumn['value']['schema']['scale'] },
              // isForeignKey: true,
              // isPrimaryKey: true,
              // isVirtualPK: true,
              option: 'textWithObjectDataSource',
              dataSourceProvider: {
                systemObject: {
                  objectName: {
                    //  jsonLogic standard format
                    rule: {
                      'var': 'loaderData.activeProfile.' + virtualPKColumn['title']
                    }
                  }
                }
              },
              isVisible: false,
              isIndex: true,
              isGridLayout: false,
              largeBreakpointWidth: 1,
            },
          },
        },
        {
          lable: 'کلید اصلی',
          title: 'idColumn',
          step: 0,
          value: {
            type: 'primitive',
            schema: {
              type: 'long',
              // isForeignKey: true,
              isPreAllocatingPrimaryKey: true,
              isGridLayout: false,
              largeBreakpointWidth: 1,
            },
          },
        },
      ],
    ];
    newcontent = [
      ...parentPKField,
      ...targetJpa.content,
    ];

    uniqueIndexes.push(`${virtualPKColumn['title']}`)
  } else {
    newcontent = [
      ...targetJpa.content,
    ];
  }
  finalJpa = { ...targetJpa, content: newcontent };

  return {
    finalJpa: finalJpa,
    //  intentionally we pass 'Virtual Primary Key' column instead of 'primary key' as primary key of non-root columns
    // primaryKey: targetJpaPK ? targetJpaPK : targetJpaParentPK,
    // primaryKey: targetJpaPK ? targetJpaPK : virtualPKColumn['title'],
    primaryKey: targetJpaPK ? targetJpaPK : 'idColumn',
    foreignKey: targetJpaPK ? `` : parentPKField,
    uniqueIndexes: uniqueIndexes,
    parentJpa: [],
    targetJpaParentPK: targetJpaParentPK,
    virtualPKColumn: virtualPKColumn,
    steps: targetMultiStepForm,
    pathVariableObject: childPathVariableObject
  };
};

//  Called from FeedContent.js
exports.isJpaNameExist = (inputJpaName) => {
  let targetJpa = false;
  const findJpa = this.getJpaByJpaName(inputJpaName, '');
  targetJpa = typeof findJpa == 'object' ? true : false;
  // Object.keys(this.domains).map((domain) => {
  //   Object.keys(this.domains[domain]['jpas']).map((jpaName) => {
  //     if (jpaName == inputJpaName) {
  //       targetJpa = true;
  //     }
  //   });
  // });
  return targetJpa;
};
// console.log(this.isJpaNameExist('tafahomFirstFormJpa'));
// console.log(this.isJpaNameExist('eghdamats'));

// TODO
//  Candidate to be removed.
exports.getDataSourceName = (jpaName) => {
  let findDataSource = ``;
  Object.keys(this.jpas).map((jpa) => {
    Object.keys(this.jpas[jpa]['storedProcedures']).map(
      (actualStoredProcedure) => {
        if (actualStoredProcedure == targetStoredProcedureName) {
          findStoredProcedureParameters =
            this.jpas[jpa]['storedProcedures'][actualStoredProcedure][
            'parameters'
            ];
        }
      }
    );
  });
  return findStoredProcedureParameters;
};
//  called from feedGlobalConfigWithSuger
exports.getDataSourceNameByJpaName = (targetJpaName) => {
  let findJpaDataSource = ``;
  Object.keys(this.domains).map((domain) => {
    Object.keys(this.domains[domain]['jpas']).map((jpa) => {
      if (jpa == targetJpaName) {
        // if (targetJpaName == 'account') {
        //   console.log(domain);
        //   console.log(jpa);
        //   console.log(this.domains[domain]['jpas'][jpa]);
        //   console.log(findJpaDataSource);
        // }
        findJpaDataSource = this.domains[domain]['jpas'][jpa]['datasourceName'];
      }
    });
  });

  return findJpaDataSource;
};
//  called from getJpaByJpaName
//  called from ClientProjectBaseFilesGenerator
exports.getPrimaryKeyByJpaName = (jpaName) => {
  let findJpaPrimaryKey = ``;
  Object.keys(this.domains).map((domain) => {
    Object.keys(this.domains[domain]['jpas']).map((jpa) => {
      if (jpa == jpaName) {
        this.domains[domain]['jpas'][jpa]['content'].map(
          (rows) => {
            rows.map(
              (cols) => {
                (
                  (
                    `isPrimaryKey` in
                    cols['value']['schema']
                    &&
                    cols['value']['schema']['isPrimaryKey'] == true
                  )
                  ||
                  (
                    `isPreAllocatingPrimaryKey` in
                    cols['value']['schema']
                    &&
                    cols['value']['schema']['isPreAllocatingPrimaryKey'] == true
                  )
                )
                  ? (
                    findJpaPrimaryKey = cols['title']
                  )
                  : '';
              }
            );
          }
        );
      }
    });
  });
  return findJpaPrimaryKey;
};
exports.getUniqueKeyByJpaName = (jpaName) => {
  let findJpaUniqueKey = [];

  Object.keys(this.domains).map((domain) => {
    Object.keys(this.domains[domain]['jpas']).map((jpa) => {
      // only search in intended jpa
      if (jpa == jpaName) {
        //  iterate over rows of content
        this.domains[domain]['jpas'][jpa]['content'].map(
          (rows) => {
            // iterate over cols of each row
            rows.map(
              (cols) => {

                // console.log(cols['value']['schema']);

                (`isIndex`) in
                  cols[
                  'value'
                  ]['schema']
                  && findJpaUniqueKey.push(cols['title'])
                // : '',

                // Object.keys(cols).map((col) => {

                //   Object.keys(col).map((col) => {
                //     // (`isUnique`) in
                //     (`isIndex`) in
                //       cols[
                //       'value'
                //       ]['schema']
                //       ? (findJpaUniqueKey.push(cols['title'],
                //         // console.log(jpa)
                //         // console.log(this.domains[domain]['jpas'][jpa]['content'])
                //         // console.log(this.domains[domain]['jpas'][jpa]['content'][rows][cols])
                //         // console.log(this.domains[domain]['jpas'][jpa]['content'][rows][cols]['value']['schema'])
                //       ))
                //       : '';
                //   });
                // });
              }
            );
          }
        );
        // findJpaPrimaryKey =
        // this.domains[domain]['jpas'][jpa]['datasourceName'];
      }
    });
  });
  // console.log("findJpaPrimaryKey");
  // console.log(findJpaUniqueKey);
  return findJpaUniqueKey;
};
exports.getVirtualPKColumn = (jpaName) => {
  let findJpaPrimaryKey = {};
  Object.keys(this.domains).map((domain) => {
    Object.keys(this.domains[domain]['jpas']).map((jpa) => {
      if (jpa == jpaName) {
        this.domains[domain]['jpas'][jpa]['content'].map(
          (rows) => {
            rows.map(
              (cols) => {
                (
                  (
                    `isVirtualPK` in
                    cols['value']['schema']
                    &&
                    cols['value']['schema']['isVirtualPK'] == true
                  )
                  // ||
                  // (
                  //   `isPreAllocatingPrimaryKey` in
                  //   cols['value']['schema']
                  //   &&
                  //   cols['value']['schema']['isPreAllocatingPrimaryKey'] == true
                  // )
                )
                  ? (
                    findJpaPrimaryKey = cols
                  )
                  : '';
              }
            );
          }
        );
      }
    });
  });
  return findJpaPrimaryKey;
};

exports.getJpaDomain = (targetJpaName) => {
  let findDomain = ``;
  Object.keys(this.domains).map((domain) => {
    Object.keys(this.domains[domain]['jpas']).map(
      (actualJpa) => {
        if (actualJpa == targetJpaName) {
          findDomain = domain;
        }
      }
    );
  });
  return findDomain;
}
// console.log(this.getPrimaryKeyByJpaName('tafahomFirstFormJpa'));
//  TODO
//  candidate to be removed
//  called from ControllerGenerator.js
// exports.getColObjByColName = (jpaName, appObjectId, indexName) => {
//   let targetCol = ``;
//   console.log(`DomainConfig : ` + jpaName);
//   console.log(`DomainConfig : ` + appObjectId);
//   console.log(`DomainConfig : ` + indexName);
//   // console.log(
//   // getOwnIndexByRouteName();
//   targetCol = extractColObjByColName(
//     this.getJpaByJpaName(jpaName, appObjectId),
//     indexName
//   );
//   // );
//   // if (jpaName == indexName) {
//   // targetJpa = true;
//   // console.log('1');
//   // }
//   // if (!targetJpa) {
//   //   Object.keys(this.domains[domain]['storedProcedures']).map(
//   //     (storedProcedure) => {
//   //       if (storedProcedure == indexName) {
//   //         targetJpa = true;
//   //         console.log('2');
//   //       }
//   //     }
//   //   );
//   // }
//   // if (!targetJpa) {
//   //   Object.keys(this.domains[domain]['restServices']).map((restService) => {
//   //     if (restService == indexName) {
//   //       targetJpa = true;
//   //       console.log('3');
//   //     }
//   //   });
//   // }
//   // });
//   return targetCol;
// };

// console.log(this.getColObjByColName('eghdamat'));
// console.log(this.getColObjByColName('date'));

// console.log(this.getJpa('jpaName'));
// console.log(this.getDataSourceNameByJpaName('jpaName'));
// console.log(this.getDataSourceName('JpaName'));
// console.log(ds.datasources);
// console.log(this.getStoredProcedureDataSource('fillAccountInfo003'));
// console.log(this.getJpaDataSource('ghodghod'));
// console.log(this.getStoredProcedureByStoredProcedureName('fillAccountInfo003'));
// console.log(this.getDataSourceNameByStoredProcedureName('fillAccountInfo003'));
// console.log(this.getStoredProcedureDomain('fillAccountInfo003'));
// console.log(this.getStoredProcedureParameterByStoredProcedureName('fillAccountInfo003'));
// console.log(this.getStoredProcedureInputParameters('fillAccountInfo003'));
// console.log(this.getStoredProcedureOutputParameters('fillAccountInfo003'));
// console.log(this.getStoredProcedureJSONInputParameters('fillAccountInfo003'));
// console.log(this.generateModelFromStoredProcedureOutput('fillAccountInfo003'));
