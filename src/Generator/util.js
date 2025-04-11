let fs = require('fs');
const { url } = require('inspector');
const { type } = require('os');

const allCaptalize = (word) => {
  return word.toUpperCase();
};

const allMinimize = (word) => word.toLowerCase();

exports.firstLetterCaptalize = (word) =>
  word.charAt(0).toUpperCase() + word.slice(1);

exports.firstLetterLowerCase = (word) =>
  word.charAt(0).toLowerCase() + word.slice(1);
//  TODO
//  Candidate to be removed
const lastLetterCaptalize = (word) =>
  word.substring(0, word.length - 1) +
  word.substring(word.length - 1).toUpperCase();

exports.isPathExists = (path) => {
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path, { recursive: true });
    return true;
  }
};

exports.copyFontFiles = (fileNames, srcPath, dstPath, ext) => {
  const eofFileNames = [
    'IRANSansWeb(FaNum).ttf',
    'IRANSansWeb(FaNum)_Black.ttf',
    'IRANSansWeb(FaNum)_Bold.ttf',
    'IRANSansWeb(FaNum)_Light.ttf',
    'IRANSansWeb(FaNum)_Medium.ttf',
    'IRANSansWeb(FaNum)_UltraLight.ttf',
  ];

  const ttfFileNames = [
    'IRANSansWeb(FaNum).ttf',
    'IRANSansWeb(FaNum)_Black.ttf',
    'IRANSansWeb(FaNum)_Bold.ttf',
    'IRANSansWeb(FaNum)_Light.ttf',
    'IRANSansWeb(FaNum)_Medium.ttf',
    'IRANSansWeb(FaNum)_UltraLight.ttf',
  ];
  const woffFileNames = [
    'IRANSansWeb(FaNum).ttf',
    'IRANSansWeb(FaNum)_Black.ttf',
    'IRANSansWeb(FaNum)_Bold.ttf',
    'IRANSansWeb(FaNum)_Light.ttf',
    'IRANSansWeb(FaNum)_Medium.ttf',
    'IRANSansWeb(FaNum)_UltraLight.ttf',
  ];
  const woff2FileNames = [
    'IRANSansWeb(FaNum).ttf',
    'IRANSansWeb(FaNum)_Black.ttf',
    'IRANSansWeb(FaNum)_Bold.ttf',
    'IRANSansWeb(FaNum)_Light.ttf',
    'IRANSansWeb(FaNum)_Medium.ttf',
    'IRANSansWeb(FaNum)_UltraLight.ttf',
  ];

  if (fs.existsSync(srcPath) && fs.existsSync(dstPath)) {
    fileNames.map((file) => {
      fs.copyFile(
        `${srcPath}\\` + `${file}`,
        `${dstPath}\\` + `${file}`,
        (e) => {
          if (e) {
            console.log('Error creating files!');
            console.log(e);
          }
        }
      );
    });
  }
};

exports.copyIconFiles = (fileName, srcPath, dstPath) => {
  // const fileNames = ['logo.690fe601.png'];
  if (fs.existsSync(srcPath) && fs.existsSync(dstPath)) {
    fs.copyFile(
      `${srcPath}\\` + `${fileName}`,
      `${dstPath}\\` + `${fileName}`,
      (e) => {
        if (e) {
          console.log('Error copying files!');
          console.log(e);
        }
      }
    );
    // fileNames.map((file) => {
    //   fs.copyFile(
    //     `${srcPath}\\` + `${file}`,
    //     `${dstPath}\\` + `${file}`,
    //     (e) => {
    //       if (e) {
    //         console.log('Error creating files!');
    //         console.log(e);
    //       }
    //     }
    //   );
    // });
  }
};

exports.createFile = (path, fileName, injectedContent) => {
  // fs.unlink(`${path}` + `\\` + `${fileName}`, () => { console.log('file deleted'); })
  // // fs.stat(`${path}` + `\\` + `${fileName}`, (err, stat) => { })
  // fs.access(
  //   `${path}` + `\\` + `${fileName}`, fs.constants.F_OK, () => {
  //     fs.unlink(`${path}` + `\\` + `${fileName}`, () => { console.log(fileName+' deleted'); })
  //   }
  // )
  // if (fileName == 'OrgUnitChartController.java') {
  //   // console.log(fileName);
  //   // console.log(injectedContent);
  //   fs.unlink(`${path}` + `\\` + `${fileName}`, () => { console.log('file deleted'); })
  // }
  fs.writeFile(
    `${path}` + `\\` + `${fileName}`,
    injectedContent,
    function (err) {
      if (err) {
        console.log(err);
        throw err;
      }
      // console.log(`${fileName} is created successfully.`);
    }
  );
};
//  call from EntityGenerator.js
exports.generateEntityFields = (fields) => {
  let typeList = {};
  let dataSourceProvider = {}
  const rowNum = fields['content'].length;
  let entityfields = ``;

  if (Array.isArray(fields['content']) && rowNum > 0) {
    fields['content'].map((row, rowIndex) => {
      if (Array.isArray(row)) {
        row.map((cols, colIndex) => {
          if (Array.isArray(cols)) {
            console.log(
              appObject['appObjectId'] +
              ` : operation Impossible for row: ` +
              rowIndex +
              ` and column: ` +
              colIndex
            );
          } else {
            if (cols['value']['type'] !== 'emptyCell') {
              if (Object.keys(cols['value']['schema']).includes('dataSourceProvider')) {

                Object.keys(cols['value']['schema']['dataSourceProvider']).includes('storedProcedure')
                  ?
                  dataSourceProvider['storedProcedure'] = {
                    ...dataSourceProvider['storedProcedure'],
                    [cols['value']['schema']['dataSourceProvider']['storedProcedure']['name']]: ''
                  }
                  : Object.keys(cols['value']['schema']['dataSourceProvider']).includes('restService')
                    ? dataSourceProvider['restService'] = {
                      ...dataSourceProvider['restService'],
                      [cols['value']['schema']['dataSourceProvider']['restService']['name']]: ''
                    }
                    : ''
                // console.log(cols['title']);
                // console.log(cols['value']['schema']['dataSource']);
                // ['dataSource']
                // ['option']
              }
              const end = rowIndex + 1 <= rowNum ? `;` : ``;
              //  NOT used 
              const isId =
                cols['title'] == 'Id'
                  ? `\r    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)`
                  : ``;
              const primaryKeyStrategy = cols['value']['schema']['primaryKeyStrategy']
              const isPrimaryKey =
                cols['value']['schema']['isPrimaryKey'] == true
                  ? `\r    @Id${primaryKeyStrategy.length > 0 ? `
    @GeneratedValue(strategy = GenerationType.${primaryKeyStrategy})` : ``}`
                  : ``;
              //  NOT used 
              const isPreAllocatingPrimaryKey =
                cols['value']['schema']['isPreAllocatingPrimaryKey'] == true
                  ? `\r    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)`
                  : ``;
              const isNotNull =
                cols['value']['schema']['isNotNull'] == true
                  ? `\r\n  @NotNull`
                  : ``;
              const isNotBlank =
                cols['value']['schema']['isNotBlank'] == true
                  ? `\r\n  @NotBlank(message = "${cols['title']} is mandatory and should not be blank.")`
                  : ``;
              const isUnique =
                cols['value']['schema']['isUnique'] == true
                  ? `, unique = true`
                  : ``;
              const isIndex =
                cols['value']['schema']['isIndex'] == true
                  ? `, unique = true`
                  : ``;

              const minSize =
                typeof cols['value']['schema']['size'] == 'object' &&
                  typeof cols?.value?.schema?.size?.minValue == 'number'
                  ? cols?.value?.schema?.size?.minValue
                  : undefined;
              const maxSize =
                typeof cols['value']['schema']['size'] == 'object' &&
                  typeof cols?.value?.schema?.size?.maxValue == 'number'
                  ? cols?.value?.schema?.size?.maxValue
                  : undefined;

              const size = ''
              //  Entity size commented, the 'size' property just affects UI
              // const size = 
              //   cols['value']['schema']['type'] != 'String' && cols['value']['schema']['type'] != 'Date'
              //     ? ``
              //     : typeof minSize == 'undefined' || typeof maxSize == 'undefined'
              //       ? ``
              //       : `\n    @Size(min = ${minSize} ,max = ${maxSize})`



              // const size =
              //   // (isPrimaryKey.length > 0  || cols['value']['schema']['type'] == 'Integer' || cols['value']['schema']['type'] == 'Boolean')
              //   (isPrimaryKey.length > 0 || cols['value']['schema']['type'] != 'String')
              //     ? ``
              //       ? (cols['value']['schema']['type'] == 'String' && typeof (minSize) != 'undefined' && typeof (maxSize) != 'undefined')
              //       : (
              //         `\n  @Size(min = ${minSize} ,max = ${maxSize})`)
              //     : '';

              const isEmail =
                cols['value']['schema']['isEmail'] == true ? `\r  @Email` : ``;
              // convert 'Date' dataType to 'String'
              let precisionScale =
                isPrimaryKey.length > 0 &&
                  cols['value']['schema']['type'] == 'BigDecimal'
                  ? `, precision = ${cols['value']['schema']['precision']}, scale = ${cols['value']['schema']['scale']}`
                  : ``;
              const dateType =
                cols['value']['schema']['type'] == `Date` ||
                  cols['value']['schema']['type'] == `file` ||
                  cols['value']['schema']['type'] == `Boolean`
                  ? `String`
                  : cols['value']['schema']['type'];
              //  set type in type list
              cols['value']['schema']['type'] == `BigDecimal`
                ? (typeList[`java.math.BigDecimal`] = {},
                  precisionScale += `, precision = ${cols['value']['schema']['precision']}, scale = ${cols['value']['schema']['scale']}`
                )
                : ``;
              const column =
                `\r\n    @Column(name = "${cols['title']}"` +
                `${isUnique}${precisionScale})`;

              entityfields += `
${isId}${isPreAllocatingPrimaryKey}${isPrimaryKey}${isNotNull}${isNotBlank}${size}${column}
    private ${dateType} ${cols['title']}${end}`;
            }
          }
        });
      }
    });
  }
  // Object.keys(dataSourceProvider).map((k) => {
  //   console.log(k);
  //   console.log(dataSourceProvider[k]);
  // })
  return { entityfields: entityfields, typeList: typeList, dataSourceProvider: dataSourceProvider };
};

//  call from RepositoryGenerator.js
exports.generateJpaRepositoryOperation = (jpaName, fields, pathVariables) => {
  let typeList = {};
  let dataSourceProvider = {}
  const rowNum = fields['content'].length;
  let repositoryfields = ``
  repositoryfields += `@Repository
public interface ${this.firstLetterCaptalize(jpaName)}Repository extends
        JpaRepository<${this.firstLetterCaptalize(jpaName)}, Long>,
        PagingAndSortingRepository<${this.firstLetterCaptalize(
    jpaName
  )}, Long> {`;
  const end = `;`;

  if (Array.isArray(fields['content']) && rowNum > 0) {
    fields['content'].map((row, rowIndex) => {
      if (Array.isArray(row)) {
        row.map((cols, colIndex) => {
          if (Array.isArray(cols)) {
            console.log(
              appObject['appObjectId'] +
              ` : operation Impossible for row: ` +
              rowIndex +
              ` and column: ` +
              colIndex
            );
          } else {
            if (cols['value']['type'] !== 'emptyCell') {
              if (Object.keys(cols['value']['schema']).includes('dataSourceProvider')) {

                Object.keys(cols['value']['schema']['dataSourceProvider']).includes('storedProcedure')
                  ?
                  dataSourceProvider['storedProcedure'] = {
                    ...dataSourceProvider['storedProcedure'],
                    [cols['value']['schema']['dataSourceProvider']['storedProcedure']['name']]: ''
                  }
                  : Object.keys(cols['value']['schema']['dataSourceProvider']).includes('restService')
                    ? dataSourceProvider['restService'] = {
                      ...dataSourceProvider['restService'],
                      [cols['value']['schema']['dataSourceProvider']['restService']['name']]: ''
                    }
                    : ''
              }
              // convert 'Date' dataType to 'String'
              const dateType =
                cols['value']['schema']['type'] == `Date` ||
                  cols['value']['schema']['type'] == `file`
                  ? `String`
                  : cols['value']['schema']['type'];
              cols['value']['schema']['type'] === `BigDecimal`
                ? (typeList[`java.math.BigDecimal`] = {})
                : ``;

              pathVariables.includes(cols['title'])
                ?
                repositoryfields += `
    List<${this.firstLetterCaptalize(jpaName)}> findBy${this.firstLetterCaptalize(
                  cols['title']
                )}(${dateType} ${cols['title']})${end}`
                :
                ``
              typeList['java.util.List'] = {}
            }
          }
        });
      }
    });
  }
  repositoryfields += `
}`;
  return { repositoryfields: repositoryfields, typeList: typeList, dataSourceProvider: dataSourceProvider };
};
//  call from ModelGenerator.js
exports.generatePostmanRequestModelFields = (fields) => {
  let modelfields = ``;
  modelfields += `{`;
  const rowNum = fields.length;
  if (Array.isArray(fields) && rowNum > 0) {
    fields.map((row, rowIndex) => {
      if (Array.isArray(row)) {
        let colsNum = row.length;
        row.map((cols, colIndex) => {
          if (Array.isArray(cols)) {
            console.log(
              appObject['appObjectId'] +
              ` : operation Impossible for row: ` +
              rowIndex +
              ` and column: ` +
              colIndex
            );
          } else {
            if (cols['value']['type'] !== 'emptyCell') {
              const end =
                rowIndex + 1 == rowNum && colIndex + 1 == colsNum ? `` : `,`;

              modelfields += `
"${cols['title']}":""${end}`;
            }
          }
        });
      }
    });
  }
  modelfields += `
}`;
  return modelfields;
};

//  call from ModelGenerator.js
exports.generateModelFields = (fields) => {
  const rowNum = fields['content'].length;
  let modelfields = ``;
  let dataSourceProvider = {};
  let importPart = {};
  let typeList = {};

  if (Array.isArray(fields['content']) && rowNum > 0) {
    fields['content'].map((row, rowIndex) => {
      if (Array.isArray(row)) {
        row.map((cols, colIndex) => {
          if (Array.isArray(cols)) {
            console.log(
              appObject['appObjectId'] +
              ` : operation Impossible for row: ` +
              rowIndex +
              ` and column: ` +
              colIndex
            );
          } else {
            if (cols['value']['type'] !== 'emptyCell') {
              if (
                Object.keys(cols['value']['schema']).includes('dataSourceProvider') &&
                Object.keys(cols['value']['schema']['dataSourceProvider']).length > 0
              ) {

                Object.keys(cols['value']['schema']['dataSourceProvider']).includes('storedProcedure') && Object.keys(cols['value']['schema']['dataSourceProvider']['storedProcedure']).length > 0
                  ?
                  dataSourceProvider['storedProcedure'] = {
                    ...dataSourceProvider['storedProcedure'],
                    [cols['value']['schema']['dataSourceProvider']['storedProcedure']['name']]: ''
                  }
                  : Object.keys(cols['value']['schema']['dataSourceProvider']).includes('restService') && Object.keys(cols['value']['schema']['dataSourceProvider']['restService']).length > 0
                    ? dataSourceProvider['restService'] = {
                      ...dataSourceProvider['restService'],
                      [cols['value']['schema']['dataSourceProvider']['restService']['name']]: ''
                    }
                    : ''
              }
              if (
                Object.keys(cols['value']['schema']).includes('onBlurDataSourceProvider') &&
                Object.keys(cols['value']['schema']['onBlurDataSourceProvider']).length > 0
              ) {

                Object.keys(cols['value']['schema']['onBlurDataSourceProvider']).includes('storedProcedure')
                  &&
                  Object.keys(cols['value']['schema']['onBlurDataSourceProvider']['storedProcedure']).length > 0
                  ?
                  dataSourceProvider['storedProcedure'] = {
                    ...dataSourceProvider['storedProcedure'],
                    [cols['value']['schema']['onBlurDataSourceProvider']['storedProcedure']['name']]: ''
                  }
                  : Object.keys(cols['value']['schema']['onBlurDataSourceProvider']).includes('restService')
                    &&
                    Object.keys(cols['value']['schema']['onBlurDataSourceProvider']['restService']).length > 0
                    ? dataSourceProvider['restService'] = {
                      ...dataSourceProvider['restService'],
                      [cols['value']['schema']['onBlurDataSourceProvider']['restService']['name']]: ''
                    }
                    : ''
              }
              const end = rowIndex + 1 <= rowNum ? `;` : ``;
              const isPrimaryKey =
                cols['value']['schema']['isPrimaryKey'] == true
                  ? `\r  @Id`
                  : ``;
              const isNotNull =
                cols['value']['schema']['isNotNull'] == true ? `@NotNull` : ``;
              const isNotBlank =
                cols['value']['schema']['isNotBlank'] == true
                  ? `@NotBlank(message = "${cols['title']} is mandatory")`
                  : ``;
              const minSize =
                typeof cols['value']['schema']['size'] == 'object' &&
                  typeof cols?.value?.schema?.size?.minValue == 'number'
                  ? cols?.value?.schema?.size?.minValue
                  // : 0;
                  : undefined;
              const maxSize =
                typeof cols['value']['schema']['size'] == 'object' &&
                  typeof cols?.value?.schema?.size?.maxValue == 'number'
                  ? cols?.value?.schema?.size?.maxValue
                  // : 50;
                  : undefined;

              //  Entity size commented, the 'size' property just affects UI
              const size = ''
              // const size =
              //   cols['value']['schema']['type'] != 'String'
              //     ? ``
              //     : typeof minSize == 'undefined' || typeof maxSize == 'undefined'
              //       ? ``
              //       : `\n  @Size(min = ${minSize} ,max = ${maxSize})`

              // const size =
              //   // (isPrimaryKey.length > 0 || cols['value']['schema']['type'] == 'Integer' || cols['value']['schema']['type'] == 'Boolean')
              //   (isPrimaryKey.length > 0 || cols['value']['schema']['type'] != 'String')
              //     ? ``
              //     : `@Size(min = ${minSize} ,max = ${maxSize})`;
              const isEmail =
                cols['value']['schema']['isEmail'] == true ? `@Email` : ``;
              const dateType =
                cols['value']['schema']['type'] == `Date` ||
                  cols['value']['schema']['type'] == `file`
                  ? `String`
                  : cols['value']['schema']['type'];
              cols['value']['schema']['type'] == `BigDecimal`
                ? (typeList[`java.math.BigDecimal`] = {})
                : ``;

              //import java.util.ArrayList;
              // import java.util.Collection;
              // import java.util.Set;`;
              modelfields += `${isNotNull}
${isNotBlank}
${size}
private ${dateType} ${cols['title']}${end}`;

              //  import string base on data type
              if (cols['value']['schema']['type'] == 'ArrayList' > 0) {
                importPart['ArrayList'] = `import java.util.ArrayList;
`;
              }
              if (cols['value']['schema']['type'] == 'Collection' > 0) {
                importPart['Collection'] = `import java.util.Collection;
`;
              }
              if (cols['value']['schema']['type'] == 'Set' > 0) {
                importPart['Set'] = `import java.util.Set;
`;
              }
              //  import string base on annotation
              if (isNotNull.length > 0) {
                importPart[
                  'isNotNull'
                ] = `import jakarta.validation.constraints.NotNull;
`;
              }
              if (isNotBlank.length > 0) {
                importPart[
                  'isNotBlank'
                ] = `import jakarta.validation.constraints.NotBlank;
`;
              }
              if (size.length > 0) {
                importPart[
                  'size'
                ] = `import jakarta.validation.constraints.Size;
`;
              }
              if (isEmail.length > 0) {
                importPart[
                  'email'
                ] = `import jakarta.validation.constraints.Email;
`;
              }
            }
          }
        });
      }
    });
  }
  let importString = ``;
  // console.log(importPart);
  Object.keys(typeList).map((x) => {
    importString += `
import ${x};`;
  });
  Object.values(importPart).map((v) => {
    importString += `
${v}`;
  });
  return {
    importString: importString,
    modelfields: modelfields + ``,
    dataSourceProvider: dataSourceProvider
  };
};
//  call from serviceLogicGenerator.js
exports.modelBuilder = (appObject, jpaName) => {
  fields = appObject['content'];
  // console.log(jpaName);
  // console.log(fields);
  const rowNum = fields.length;
  let modelfields = `
        ${this.firstLetterCaptalize(
    jpaName
  )}DTO ${jpaName}DTO = ${this.firstLetterCaptalize(
    jpaName
  )}DTO.builder()`;

  if (Array.isArray(fields) && rowNum > 0) {
    fields.map((row, rowIndex) => {
      if (Array.isArray(row)) {
        row.map((cols, colIndex) => {
          if (Array.isArray(cols)) {
            console.log(
              appObject['appObjectId'] +
              ` : operation Impossible for row: ` +
              rowIndex +
              ` and column: ` +
              colIndex
            );
          } else {
            if (
              cols['value']['type'] !== 'emptyCell' &&
              cols['value']['schema']['isValidInModelBuilder'] != false
            ) {
              // if (cols['value']['schema']['type'] == 'Boolean') {
              //   modelfields +=
              //     `
              //   .` +
              //     cols['title'] +
              //     `(` +
              //     // appObject['appObjectId'] +
              //     jpaName +
              //     `.is` +
              //     this.firstLetterCaptalize(cols['title']) +
              //     `())`;
              //   // const end = rowIndex + 1 <= rowNum ? `;` : ``;
              // } else {
              modelfields +=
                `
                .` +
                cols['title'] +
                `(` +
                // appObject['appObjectId'] +
                jpaName +
                `.get` +
                this.firstLetterCaptalize(cols['title']) +
                `())`;
              // }
              const end = rowIndex + 1 <= rowNum ? `;` : ``;
            }
          }
        });
      }
    });
  }
  modelfields += `
                .build();
        return ${jpaName}DTO;`;
  return modelfields;
};

//  call from serviceLogicGenerator.js
exports.entityBuilder = (appObject, jpaName) => {
  fields = appObject['content'];
  const rowNum = fields.length;
  let modelfields = `
        Locale locale = new Locale("ir","IR");
        DateFormat dateFormat = DateFormat.getDateInstance(DateFormat.DEFAULT, locale);
        DateFormat timeFormat = DateFormat.getTimeInstance(DateFormat.DEFAULT, locale);
        String date = dateFormat.format(new Date());
        String time = timeFormat.format(new Date());

        ${this.firstLetterCaptalize(
    jpaName
  )} ${jpaName} = ${this.firstLetterCaptalize(jpaName)}.builder()`;

  if (Array.isArray(fields) && rowNum > 0) {
    fields.map((row, rowIndex) => {
      if (Array.isArray(row)) {
        row.map((cols, colIndex) => {
          if (Array.isArray(cols)) {
            console.log(
              appObject['appObjectId'] +
              ` : operation Impossible for row: ` +
              rowIndex +
              ` and column: ` +
              colIndex
            );
          } else {
            if (
              cols['value']['type'] !== 'emptyCell' &&
              cols['value']['schema']['isValidInEntityBuilder'] != false
            ) {
              // if (cols['value']['schema']['type'] == 'Boolean') {
              //   modelfields +=
              //     `
              //   .` +
              //     cols['title'] +
              //     `(` +
              //     // appObject['appObjectId'] +
              //     jpaName +
              //     `DTO.is` +
              //     this.firstLetterCaptalize(cols['title']) +
              //     `())`;
              //   // const end = rowIndex + 1 <= rowNum ? `;` : ``;
              // } else {
              modelfields +=
                `
                .` +
                cols['title'] +
                `(` +
                // appObject['appObjectId'] +
                jpaName +
                `DTO.get` +
                this.firstLetterCaptalize(cols['title']) +
                `())`;
              // const end = rowIndex + 1 <= rowNum ? `;` : ``;
              // }
            }
          }
        });
      }
    });
  }
  modelfields += `
                .build();
        return ${jpaName};`;
  return modelfields;
};

//  call from serviceLogicGenerator.js
exports.responseBuilder = (appObject, jpaName) => {
  // console.log(appObject);
  // console.log(appObject['appObjectId']);
  let modelfields = `public Map<String, Object> generateResponse(Page<${this.firstLetterCaptalize(
    jpaName
  )}> ${jpaName}s) {
        List<${this.firstLetterCaptalize(
    jpaName
  )}DTO> ${jpaName}DTOS = ${jpaName}s.stream()
                .map(${appObject['appObjectId']} -> convertToDto(${appObject['appObjectId']
    }))
                .collect(Collectors.toList());
        response.put("content", ${jpaName}DTOS);
        response.put("currentPage", ${jpaName}s.getNumber());
        response.put("totalItems", ${jpaName}s.getTotalElements());
        response.put("totalPages", ${jpaName}s.getTotalPages());

        return response;
    }`;
  return modelfields;
};
//  called from ProjectBaseFilesGenerator.js
exports.datasourceBuilder = (datasources) => {
  let generateDataSourceString = ``;
  Object.keys(datasources).map((datasource) => {
    generateDataSourceString += `# ===============================
# = ${datasource} DATA SOURCE
# ===============================
spring.datasource.${datasource}.url=${datasources[datasource]['url']}
spring.datasource.${datasource}.username=${datasources[datasource]['username']}
spring.datasource.${datasource}.password=${datasources[datasource]['password']}
spring.datasource.${datasource}.driver-class-name=${datasources[datasource]['driverClassName']}
`;
  });
  return generateDataSourceString;
};
//  TODO
//  Candidate to be removed
exports.isEmptyObject = (obj) => {
  return !Object.keys(obj).length;
};
//  Called from
//    ControllerGenerator.js
//    ServiceImplGenerator.js
//    ServiceGenerator.js
//    ServiceLogicGenerator.js
//    ModelGenerator.js
//    RespositoryGenerator.js
//    EntityGeneratorjs
//    testGenerator.js
exports.isNotEmptyObject = (obj) => {
  return !!Object.keys(obj).length;
};

//  TODO
//  it must use DomainConfig['content'] instead of applicationObject['content']
//  Called from TestGeneratorjs
exports.objectBuilderFactory = (appObject, appConfig, jpaName, content) => {
  // let testControllerBody = `
  //       ${this.firstLetterCaptalize(
  //         jpaName
  //       )}DTO ${jpaName}DTO = ${this.firstLetterCaptalize(
  //   jpaName
  // )}DTO.builder()`;
  let testControllerBody = `
        ${this.firstLetterCaptalize(
    jpaName
  )} ${jpaName} = ${this.firstLetterCaptalize(jpaName)}.builder()`;

  fields = appObject['content'];
  // const rowNum = fields.length;
  const rowNum = content.length;

  if (Array.isArray(fields) && rowNum > 0) {
    fields.map((row, rowIndex) => {
      if (Array.isArray(row)) {
        row.map((cols, colIndex) => {
          if (Array.isArray(cols)) {
            console.log(
              appObject['appObjectId'] +
              ` : operation Impossible for row: ` +
              rowIndex +
              ` and column: ` +
              colIndex
            );
          } else {
            if (cols['name'] !== 'emptyCell') {
              // console.log(cols);

              testControllerBody += `
                .${cols['title']}("${this.firstLetterCaptalize(
                cols['title']
              )}")`;
            }
          }
        });

        // console.log(testControllerBody);
      }
    });
  }
  testControllerBody += `
                .build();
`;
  // console.log('testControllerBody***************');
  // console.log(testControllerBody);
  return testControllerBody;

  `              .archiveNumber("123456")
                .requestDate("14020524")
                .title("tafahomABC")
                .type("type")
                .branchManagement("branchManagement")
                .branch("branch")
                .region("region")
                .administration("administration")
                .expertId("expertId")
                .state("state")
                .build();`;
};
//  TODO
//  Candidate to be removed
exports.objectBuilderFactory2 = (
  appObject,
  appConfig,
  storedProcedureName,

  serviceInputObj,
  serviceResultSetObj,

  applicationObject,
  ConfigObject
) => {
  const serviceOutput =
    Object.keys(serviceResultSetObj).length == 0
      ? `${this.firstLetterCaptalize(storedProcedureName)}OutputDTO`
      : `List<${this.firstLetterCaptalize(storedProcedureName)}ResultListDTO>`;
  const serviceInput =
    Object.keys(serviceInputObj).length == 0
      ? ``
      : `${this.firstLetterCaptalize(storedProcedureName)}InputDTO`;

  let testControllerBody = `
        ${serviceInput} ${storedProcedureName} = ${serviceInput}.builder()`;
  fields = appObject['content'];
  const rowNum = fields.length;

  if (Array.isArray(fields) && rowNum > 0) {
    fields.map((row, rowIndex) => {
      if (Array.isArray(row)) {
        row.map((cols, colIndex) => {
          if (Array.isArray(cols)) {
            console.log(
              appObject['appObjectId'] +
              ` : operation Impossible for row: ` +
              rowIndex +
              ` and column: ` +
              colIndex
            );
          } else {
            if (cols['name'] !== 'emptyCell') {
              // console.log(cols);

              testControllerBody += `
                .${cols['title']}("${this.firstLetterCaptalize(
                cols['title']
              )}")`;
            }
          }
        });

        // console.log(testControllerBody);
      }
    });
  }
  testControllerBody += `
                .build();
        //TODO
        HttpEntity<${serviceInput}> postRequest = new HttpEntity<${serviceInput}>(${storedProcedureName}, headers);
        ResponseEntity<String> postRequestResponse = restTemplate.exchange("${ConfigObject['webAccessPath']}${applicationObject['appObjectId']}s",HttpMethod.POST,postRequest,String.class);

        assertThat(postRequestResponse.getStatusCode()).isEqualTo(HttpStatus.CREATED);
        URI new${applicationObject['appObjectId']}Location = postRequestResponse.getHeaders().getLocation();
        HttpEntity<${serviceInput}> getRequest = new HttpEntity<${serviceInput}>(null , headers);
        ResponseEntity<String> getRequestResponse = restTemplate.exchange(new${applicationObject['appObjectId']}Location, HttpMethod.GET, getRequest, String.class);
        assertThat(getRequestResponse.getStatusCode()).isEqualTo(HttpStatus.OK);
  	}
;
  `;
  // console.log('testControllerBody***************');
  // console.log(testControllerBody);
  return testControllerBody;

  `              .archiveNumber("123456")
                .requestDate("14020524")
                .title("tafahomABC")
                .type("type")
                .branchManagement("branchManagement")
                .branch("branch")
                .region("region")
                .administration("administration")
                .expertId("expertId")
                .state("state")
                .build();`;
};

//  Called from TestGenerator.js
exports.objectBuilderFactoryWithData = (appObject, data) => {
  let testControllerBody = `  	  	${appObject['appObjectIdClass']} ${appObject['appObjectId']} = ${appObject['appObjectIdClass']}.builder()`;
  fields = appObject['content'];
  const rowNum = fields.length;

  // console.log(appObject);
  // console.log(data);
  // console.log(jpaName);
  if (Array.isArray(fields) && rowNum > 0) {
    fields.map((row, rowIndex) => {
      if (Array.isArray(row)) {
        row.map((cols, colIndex) => {
          if (Array.isArray(cols)) {
            console.log(
              appObject['appObjectId'] +
              ` : operation Impossible for row: ` +
              rowIndex +
              ` and column: ` +
              colIndex
            );
          } else {
            if (cols['name'] !== 'emptyCell') {
              // console.log(cols['title']);
              // console.log('** 1 **');
              // console.log(cols['title']);
              // console.log(obj);
              // console.log(propertyName);
              // let x = this.findDataByPropertyName(data, cols['title']);
              // console.log(x);
              testControllerBody += `
  	  	  	  	.${cols['title']}("${this.firstLetterCaptalize(
                this.findDataByPropertyName(data, cols['title'])
              )}")`;
            }
          }
        });
        // console.log(testControllerBody);
      }
    });
  }
  testControllerBody += `
  	  	  	  	.build();`;
  // console.log('testControllerBody***************');
  // console.log(testControllerBody);
  return testControllerBody;
};
//  called internally by other functions
exports.findDataByPropertyName = (obj, propertyName) => {
  let propertyValue = null;
  Object.keys(obj).map((key) => {
    if (key == propertyName) {
      propertyValue = obj[key];
    }
  });
  return propertyValue;
};
//  Called from ServiceGenerator.js
exports.serviceJpaRepositoryMethodCaller = (
  className,
  methodName,
  jpaName,
  targetJpa,
  indexColumn
) => {

  let resultString = ``;
  let typeList = {};
  let dataSourceProvider = {}
  if (methodName == 'saveAll') {
    resultString += `
    URI save(${this.firstLetterCaptalize(
      jpaName
    )} ${className}, Principal principal);`;
  } else if (methodName == 'findAll') {
    resultString = `
    Map<String, Object> findAll(Pageable pageable, Principal principal);`;
  } else if (methodName == 'findById') {
    let primaryKeyType = ``;
    let idKeyType = ``;
    const rowNum = targetJpa['content'].length;
    let repositoryfields = ``;
    const end = `;`;
    if (Array.isArray(targetJpa['content']) && rowNum > 0) {
      targetJpa['content'].map((row, rowIndex) => {
        if (Array.isArray(row)) {
          row.map((cols, colIndex) => {
            if (Array.isArray(cols)) {
              console.log(
                appObject['appObjectId'] +
                ` : operation Impossible for row: ` +
                rowIndex +
                ` and column: ` +
                colIndex
              );
            } else {
              if (cols['value']['type'] !== 'emptyCell') {
                if (cols['value']['schema']['isPrimaryKey'] === true || cols['value']['schema']['isPreAllocatingPrimaryKey'] === true) {
                  primaryKeyType = cols['value']['schema']['type'];
                }
              }
            }
          });
        }
      });

      resultString += `
    ${this.firstLetterCaptalize(
        jpaName
      )}DTO findById(${primaryKeyType ? primaryKeyType : idKeyType} ${className}Id, Principal principal);`;
      primaryKeyType === 'BigDecimal'
        ? (typeList[`java.math.BigDecimal`] = {})
        : ``;
    }
  } else if (methodName == 'findByIndex') {
    const rowNum = targetJpa['content'].length;
    let repositoryfields = ``;
    const end = `;`;
    if (Array.isArray(targetJpa['content']) && rowNum > 0) {
      targetJpa['content'].map((row, rowIndex) => {
        if (Array.isArray(row)) {
          row.map((cols, colIndex) => {
            if (Array.isArray(cols)) {
              console.log(
                appObject['appObjectId'] +
                ` : operation Impossible for row: ` +
                rowIndex +
                ` and column: ` +
                colIndex
              );
            } else {
              if (cols['value']['type'] !== 'emptyCell') {
                const isNotNull =
                  cols['value']['schema']['isNotNull'] == true
                    ? `@NotNull`
                    : ``;
                const isNotBlank =
                  cols['value']['schema']['isNotBlank'] == true
                    ? `\r  @NotBlank(message = "${cols['title']} is mandatory")`
                    : ``;
                const isUnique =
                  cols['value']['schema']['isUnique'] == true
                    ? `\r  @Column(unique = true)`
                    : ``;
                // convert 'Date' dataType to 'String'
                const dateType =
                  cols['value']['schema']['type'] == `Date` ||
                    cols['value']['schema']['type'] == `file`
                    ? `String`
                    : cols['value']['schema']['type'];

                cols['value']['schema']['type'] === 'BigDecimal'
                  ? (typeList[`java.math.BigDecimal`] = {})
                  : '';

                repositoryfields += indexColumn.includes(cols['title'])
                  ?
                  `
    List<${this.firstLetterCaptalize(jpaName)}> findBy${this.firstLetterCaptalize(
                    cols['title']
                  )}(${dateType} ${cols['title']}, Principal principal)${end}`
                  :
                  ``;
                typeList['java.util.List'] = {}
              }
            }
          });
        }
      });
    }
    resultString += repositoryfields;
  } else if (methodName == 'updateByIndex') {
    const rowNum = targetJpa['content'].length;
    let repositoryfields = ``;
    const end = `;`;
    if (Array.isArray(targetJpa['content']) && rowNum > 0) {
      targetJpa['content'].map((row, rowIndex) => {
        if (Array.isArray(row)) {
          row.map((cols, colIndex) => {
            if (Array.isArray(cols)) {
              console.log(
                appObject['appObjectId'] +
                ` : operation Impossible for row: ` +
                rowIndex +
                ` and column: ` +
                colIndex
              );
            } else {
              if (cols['value']['type'] !== 'emptyCell') {
                const isNotNull =
                  cols['value']['schema']['isNotNull'] == true
                    ? `@NotNull`
                    : ``;
                const isNotBlank =
                  cols['value']['schema']['isNotBlank'] == true
                    ? `\r  @NotBlank(message = "${cols['title']} is mandatory")`
                    : ``;
                const isUnique =
                  cols['value']['schema']['isUnique'] == true
                    ? `\r  @Column(unique = true)`
                    : ``;
                // convert 'Date' dataType to 'String'
                const dateType =
                  cols['value']['schema']['type'] == `Date` ||
                    cols['value']['schema']['type'] == `file`
                    ? `String`
                    : cols['value']['schema']['type'];

                cols['value']['schema']['type'] === 'BigDecimal'
                  ? (typeList[`java.math.BigDecimal`] = {})
                  : '';

                repositoryfields += indexColumn.includes(
                  cols['title']
                )
                  ? `
    ${this.firstLetterCaptalize(jpaName)} updateBy${this.firstLetterCaptalize(
                    cols['title']
                  )}(${dateType} ${cols['title']
                  }, ${this.firstLetterCaptalize(
                    jpaName
                  )} ${jpaName}, Principal principal)${end}`
                  : ``;
              }
            }
          });
        }
      });
    }
    resultString += repositoryfields;
  } else if (methodName == 'updateById') {
    const rowNum = targetJpa['content'].length;
    let primaryKeyName = ``;
    let primaryKeyType = ``;

    if (Array.isArray(targetJpa['content']) && rowNum > 0) {
      targetJpa['content'].map((row, rowIndex) => {
        if (Array.isArray(row)) {
          row.map((cols, colIndex) => {
            if (Array.isArray(cols)) {
              console.log(
                appObject['appObjectId'] +
                ` : operation Impossible for row: ` +
                rowIndex +
                ` and column: ` +
                colIndex
              );
            } else {
              if (cols['value']['type'] !== 'emptyCell') {
                if (cols['value']['schema']['isPrimaryKey'] === true || cols['value']['schema']['isPreAllocatingPrimaryKey'] === true) {
                  primaryKeyName = cols['title'];
                  primaryKeyType = cols['value']['schema']['type'];
                  resultString += `
    ${this.firstLetterCaptalize(
                    jpaName
                  )}DTO updateBy${this.firstLetterCaptalize(
                    primaryKeyName
                  )}(${primaryKeyType} ${primaryKeyName}, ${this.firstLetterCaptalize(
                    jpaName
                  )} ${jpaName}, Principal principal);`;
                  primaryKeyType === 'BigDecimal'
                    ? (typeList[`java.math.BigDecimal`] = {})
                    : ``;
                }
              }
            }
          });
        }
      });
    }
  } else if (methodName == 'deleteById') {
    let primaryKeyType = ``;
    const rowNum = targetJpa['content'].length;
    let repositoryfields = ``;
    const end = `;`;
    if (Array.isArray(targetJpa['content']) && rowNum > 0) {
      targetJpa['content'].map((row, rowIndex) => {
        if (Array.isArray(row)) {
          row.map((cols, colIndex) => {
            if (Array.isArray(cols)) {
              console.log(
                appObject['appObjectId'] +
                ` : operation Impossible for row: ` +
                rowIndex +
                ` and column: ` +
                colIndex
              );
            } else {
              if (cols['value']['type'] !== 'emptyCell') {
                if (cols['value']['schema']['isPrimaryKey'] === true || cols['value']['schema']['isPreAllocatingPrimaryKey'] === true) {
                  primaryKeyType = cols['value']['schema']['type'];
                }
              }
            }
          });
        }
      });

      resultString += `
    void deleteById(${primaryKeyType} ${className}Id, Principal principal);`;
      primaryKeyType === 'BigDecimal'
        ? (typeList[`java.math.BigDecimal`] = {})
        : ``;
    }
  } else if (methodName == 'dataSourceProvider') {

    targetJpa['content'].map((row, rowIndex) => {
      if (Array.isArray(row)) {
        row.map((cols, colIndex) => {
          if (Array.isArray(cols)) {
            console.log(
              appObject['appObjectId'] +
              ` : operation Impossible for row: ` +
              rowIndex +
              ` and column: ` +
              colIndex
            );
          } else {
            if (cols['value']['type'] !== 'emptyCell') {
              if (Object.keys(cols['value']['schema']).includes('dataSourceProvider')) {
                //  in case we have 'storedProcedure' dataSoruceProvider
                Object.keys(cols['value']['schema']['dataSourceProvider']).includes('storedProcedure')
                  // ?
                  &&
                  Object.keys(cols['value']['schema']['dataSourceProvider']['storedProcedure']).length > 0
                  &&
                  (dataSourceProvider['storedProcedure'] = {
                    ...dataSourceProvider['storedProcedure'],
                    [cols['value']['schema']['dataSourceProvider']['storedProcedure']['name']]: ''
                  })
                // :
                //  in case we have 'restService' dataSoruceProvider
                Object.keys(cols['value']['schema']['dataSourceProvider']).includes('restService')
                  // ?
                  &&
                  Object.keys(cols['value']['schema']['dataSourceProvider']['restService']).length > 0
                  &&
                  (console.log(cols['value']['schema']['dataSourceProvider']),
                    dataSourceProvider['restService'] = {
                      ...dataSourceProvider['restService'],
                      [cols['value']['schema']['dataSourceProvider']['restService']['name']]: ''
                    })
                // :
                // ''

              }
              if (Object.keys(cols['value']['schema']).includes('onBlurDataSourceProvider')) {
                //  in case we have 'storedProcedure' dataSoruceProvider
                Object.keys(cols['value']['schema']['onBlurDataSourceProvider']).includes('storedProcedure')
                  // ?
                  &&
                  Object.keys(cols['value']['schema']['onBlurDataSourceProvider']['storedProcedure']).length > 0
                  &&
                  (dataSourceProvider['storedProcedure'] = {
                    ...dataSourceProvider['storedProcedure'],
                    [cols['value']['schema']['onBlurDataSourceProvider']['storedProcedure']['name']]: ''
                  })
                // :
                //  in case we have 'restService' dataSoruceProvider
                Object.keys(cols['value']['schema']['onBlurDataSourceProvider']).includes('restService')
                  // ?
                  &&
                  Object.keys(cols['value']['schema']['onBlurDataSourceProvider']['restService']).length > 0
                  &&
                  (
                    // console.log(cols['value']['schema']['onBlurDataSourceProvider']),
                    dataSourceProvider['restService'] = {
                      ...dataSourceProvider['restService'],
                      [cols['value']['schema']['onBlurDataSourceProvider']['restService']['name']]: ''
                    }
                  )
                // :
                // ''

              }
            }
          }
        });
      }
    });
  }

  // console.log(resultString);
  return { resultString: resultString, typeList: typeList, dataSourceProvider: dataSourceProvider };
};
//  Called from ServiceGenerator.js
exports.serviceCallStoredProcedureWithParameters = (
  storedProcedureName,

  serviceInputObj,
  serviceOutputObj,
  serviceResultSetObj,

  uniqueInput,
  uniqueOutput,
  uniqueResultSet
) => {
  // console.log(storedProcedureName);
  const serviceOutput =
    Object.keys(uniqueResultSet).length == 0
      ? Object.keys(uniqueOutput).length == 0
        ? `void`
        : `${this.firstLetterCaptalize(storedProcedureName)}OutputDTO`
      : `List<${this.firstLetterCaptalize(storedProcedureName)}ResultListDTO>`;

  const serviceInput =
    Object.keys(uniqueInput).length == 0
      ? `Principal principal`
      // : Object.keys(uniqueInput).length == 1
      //   ? `${Object.keys(uniqueInput)[0]} ${uniqueInput[Object.keys(uniqueInput)[0]]
      //   }, Principal principal`
      : `${this.firstLetterCaptalize(
        storedProcedureName
      )}InputDTO ${storedProcedureName}InputDTO, Principal principal`;

  return `
    public ${serviceOutput} callSp${this.firstLetterCaptalize(
    storedProcedureName
  )}(${serviceInput});`;
};
//  Called from ServiceGenerator.js
exports.serviceRestServiceCaller = (
  restServiceName,
  targetRestService,
  uniqueInput,
  restServiceInputObj,
  restServiceOutputObj,
  restServiceResponseObj
) => {
  let resultString = ``;

  if (targetRestService['method'] == 'POST') {
    const restServiceOutput =
      Object.keys(restServiceResponseObj).length == 0
        ? Object.keys(restServiceOutputObj).length == 0
          ? `void`
          : `${this.firstLetterCaptalize(restServiceName)}OutputDTO`
        : `${this.firstLetterCaptalize(restServiceName)}OutputDTO`;

    const restServiceInput =
      Object.keys(restServiceInputObj).length == 0
        ? ``
        : Object.keys(uniqueInput).length == 1
          ? `${Object.keys(uniqueInput)[0]} ${uniqueInput[Object.keys(uniqueInput)[0]]
          }`
          : `${this.firstLetterCaptalize(
            restServiceName
          )}InputDTO ${restServiceName}InputDTO`;

    const callRestServiceInput =
      Object.keys(restServiceInputObj).length == 0
        ? ``
        : Object.keys(uniqueInput).length == 1
          ? `${uniqueInput[Object.keys(uniqueInput)[0]]}`
          : `${restServiceName}InputDTO`;

    resultString = `
    ResponseEntity<${restServiceOutput}> callRestService${this.firstLetterCaptalize(
      restServiceName
    )}(${restServiceInput});`;
  } else if (targetRestService['method'] == 'GET') {
    resultString = ``;
  } else if (targetRestService['method'] == 'PUT') {
    resultString = ``;
  }
  return resultString;
};
//  TODO
//  Candidate to be removed
exports.serviceCallStoredProcedureWithResultSet = (
  storedProcedureName,
  serviceInputObj,
  serviceOutputObj
) => {
  serviceInputObj;
  return `
    public ${this.firstLetterCaptalize(
    storedProcedureName
  )}ResultSetDTO callSp${this.firstLetterCaptalize(
    storedProcedureName
  )}(${this.firstLetterCaptalize(
    serviceInputObj
  )}InputDTO ${serviceInputObj}InputDTO);`;
};

//  Call from ServiceImplGenerator.js
//  Call from ControllerGenerator.js
exports.serviceImplJpaMethodCaller = (
  className,
  methodName,
  jpaName,
  targetJpa,
  // webAccessPath,
  indexColumn
) => {
  let resultString = ``;
  let typeList = {};
  let dataSourceProvider = {}

  if (methodName == 'saveAll') {
    const rowNum = targetJpa['content'].length;
    let repositoryfields = ``;
    let primaryKeyName = ``;
    let primaryKeyType = ``;
    const end = ``;
    if (Array.isArray(targetJpa['content']) && rowNum > 0) {
      targetJpa['content'].map((row, rowIndex) => {
        if (Array.isArray(row)) {
          row.map((cols, colIndex) => {
            if (Array.isArray(cols)) {
              console.log(
                appObject['appObjectId'] +
                ` : operation Impossible for row: ` +
                rowIndex +
                ` and column: ` +
                colIndex
              );
            } else {
              if (cols['value']['type'] !== 'emptyCell') {
                if (
                  cols['value']['schema']['isPrimaryKey'] === true ||
                  cols['value']['schema']['isForeignKey'] === true || cols['value']['schema']['isPreAllocatingPrimaryKey'] === true
                ) {
                  primaryKeyName = cols['title'];
                  primaryKeyType = cols['value']['schema']['type'];
                  primaryKeyType === 'BigDecimal'
                    ? (typeList[`java.math.BigDecimal`] = {})
                    : ``;
                }
              }
            }
          });
        }
      });
      typeList['jakarta.persistence.EntityExistsException'] = {}
      // .path("${webAccessPath}${className}s/{id}")
      resultString = `
    @Override
    public URI save(${this.firstLetterCaptalize(
        jpaName
      )} ${jpaName}, Principal principal) {
        if (!${jpaName}Repository.existsById(${jpaName}.get${this.firstLetterCaptalize(primaryKeyName)}())) {
            ${this.firstLetterCaptalize(jpaName)} saved${this.firstLetterCaptalize(
        jpaName
      )} = ${jpaName}Repository.save(${jpaName});
            //      ${jpaName}Repository.flush();
            //      let jwt = jwtService.generateToken(${className});
            //      return JwtAuthenticationResponse.builder().token(jwt).build();
            URI locationOfNew${this.firstLetterCaptalize(
        className
      )} = UriComponentsBuilder.newInstance()
                    .path("${className}s/{id}")
                    .buildAndExpand(saved${this.firstLetterCaptalize(
        jpaName
      )}.get${this.firstLetterCaptalize(primaryKeyName)}())
                    .toUri();
            return locationOfNew${this.firstLetterCaptalize(className)};
        } else {
            throw new EntityExistsException();
        }
    }`;
    }
  } else if (methodName == 'findAll') {
    resultString = `
    @Override
    public Map<String, Object> findAll(Pageable pageable, Principal principal){
        Page<${this.firstLetterCaptalize(
      jpaName
    )}> ${jpaName}s = ${jpaName}Repository.findAll(pageable);
        Map<String, Object> response = ${jpaName}Logic.generateResponse(${jpaName}s);
        return response;
    }`;
  } else if (methodName == 'findById') {
    const rowNum = targetJpa['content'].length;
    let repositoryfields = ``;
    let primaryKeyType = ``;
    const end = ``;

    if (Array.isArray(targetJpa['content']) && rowNum > 0) {
      targetJpa['content'].map((row, rowIndex) => {
        if (Array.isArray(row)) {
          row.map((cols, colIndex) => {
            if (Array.isArray(cols)) {
              console.log(
                appObject['appObjectId'] +
                ` : operation Impossible for row: ` +
                rowIndex +
                ` and column: ` +
                colIndex
              );
            } else {
              if (cols['value']['type'] !== 'emptyCell') {
                if (cols['value']['schema']['isPrimaryKey'] === true || cols['value']['schema']['isPreAllocatingPrimaryKey'] === true) {
                  primaryKeyType = cols['value']['schema']['type'];
                  primaryKeyType === 'BigDecimal'
                    ? (typeList[`java.math.BigDecimal`] = {})
                    : ``;
                }
              }
            }
          });
        }
      });
      resultString = `
    @Override
    public ${this.firstLetterCaptalize(
        jpaName
      )}DTO findById(${primaryKeyType} id, Principal principal) {
        ${this.firstLetterCaptalize(
        jpaName
      )} ${jpaName} = ${jpaName}Repository.findById(id).orElseThrow(()->new EntityNotFoundException(${this.firstLetterCaptalize(
        jpaName
      )}.class,"Id",String.valueOf(id)));
        return ${jpaName}Logic.convertToDto(${jpaName});
    }`;
    }
  } else if (methodName == 'findByIndex') {
    const rowNum = targetJpa['content'].length;
    let repositoryfields = ``;
    const end = ``;

    if (Array.isArray(targetJpa['content']) && rowNum > 0) {
      targetJpa['content'].map((row, rowIndex) => {
        if (Array.isArray(row)) {
          row.map((cols, colIndex) => {
            if (Array.isArray(cols)) {
              console.log(
                appObject['appObjectId'] +
                ` : operation Impossible for row: ` +
                rowIndex +
                ` and column: ` +
                colIndex
              );
            } else {
              if (cols['value']['type'] !== 'emptyCell') {
                const isNotNull =
                  cols['value']['schema']['isNotNull'] == true
                    ? `@NotNull`
                    : ``;
                const isNotBlank =
                  cols['value']['schema']['isNotBlank'] == true
                    ? `\r  @NotBlank(message = "${cols['title']} is mandatory")`
                    : ``;
                const isUnique =
                  cols['value']['schema']['isUnique'] == true
                    ? `\r  @Column(unique = true)`
                    : ``;
                // convert 'Date' dataType to 'String'
                const dateType =
                  cols['value']['schema']['type'] == `Date` ||
                    cols['value']['schema']['type'] == `file`
                    ? `String`
                    : cols['value']['schema']['type'];

                cols['value']['schema']['type'] == 'BigDecimal'
                  ?
                  typeList[`java.math.BigDecimal`] = {}
                  :
                  ''
                // repositoryfields +=
                // cols['title'] == indexColumn
                repositoryfields += indexColumn.includes(
                  cols['title']
                )
                  ? `
    @Override
    public List<${this.firstLetterCaptalize(
                    jpaName
                  )}> findBy${this.firstLetterCaptalize(cols['title'])}(${dateType} ${cols['title']
                  }, Principal principal){
        List<${this.firstLetterCaptalize(
                    jpaName
                  )}> ${jpaName}s = ${jpaName}Repository.findBy${this.firstLetterCaptalize(
                    cols['title']
                  )}(${cols['title']});
        return ${jpaName}s;
//        return ${jpaName}Logic.convertToDto(${jpaName}s);
    }`
                  : ``;
                typeList['java.util.List'] = {}
              }
            }
          });
        }
      });
    }
    resultString += repositoryfields;
  } else if (methodName == 'updateByIndex') {
    const rowNum = targetJpa['content'].length;
    let repositoryfields = ``;
    let bodyFields = ``;
    let end = ``;

    if (Array.isArray(targetJpa['content']) && rowNum > 0) {
      targetJpa['content'].map((row, rowIndex) => {
        end =
          rowIndex < rowNum
            ? ``
            : `
                    `;
        if (Array.isArray(row)) {
          row.map((cols, colIndex) => {
            if (Array.isArray(cols)) {
              console.log(
                appObject['appObjectId'] +
                ` : operation Impossible for row: ` +
                rowIndex +
                ` and column: ` +
                colIndex
              );
            } else {
              if (cols['value']['type'] !== 'emptyCell') {
                if (cols['value']['schema']['type'] == 'boolean') {
                  bodyFields += `
                    .${cols['title']}(${jpaName}NewValues.is${this.firstLetterCaptalize(cols['title'])}())`;
                  // const end = rowIndex + 1 <= rowNum ? `;` : ``;
                } else {
                  bodyFields += `
                    .${cols['title']
                    }(${jpaName}NewValues.get${this.firstLetterCaptalize(
                      cols['title']
                    )}())${end}`;
                }
              }
            }
          });
        }
      });
      targetJpa['content'].map((row, rowIndex) => {
        if (Array.isArray(row)) {
          row.map((cols, colIndex) => {
            if (Array.isArray(cols)) {
              console.log(
                appObject['appObjectId'] +
                ` : operation Impossible for row: ` +
                rowIndex +
                ` and column: ` +
                colIndex
              );
            } else {
              if (cols['type'] !== 'emptyCell') {
                const isNotNull =
                  cols['value']['schema']['isNotNull'] == true
                    ? `@NotNull`
                    : ``;
                const isNotBlank =
                  cols['value']['schema']['isNotBlank'] == true
                    ? `\r  @NotBlank(message = "${cols['title']} is mandatory")`
                    : ``;
                const isUnique =
                  cols['value']['schema']['isUnique'] == true
                    ? `\r  @Column(unique = true)`
                    : ``;
                // convert 'Date' dataType to 'String'
                const dateType =
                  cols['value']['schema']['type'] == `Date` ||
                    cols['value']['schema']['type'] == `file`
                    ? `String`
                    : cols['value']['schema']['type'];

                repositoryfields += indexColumn.includes(
                  cols['title']
                )
                  ? `
    @Override
    public ${this.firstLetterCaptalize(
                    jpaName
                  )} updateBy${this.firstLetterCaptalize(cols['title'])}(${dateType} ${cols['title']
                  }, ${this.firstLetterCaptalize(
                    jpaName
                  )} ${jpaName}NewValues,Principal principal){
        List<${this.firstLetterCaptalize(
                    jpaName
                  )}> ${jpaName} = ${jpaName}Repository.findBy${this.firstLetterCaptalize(
                    cols['title']
                  )}(${cols['title']});
        if (${jpaName} != null){
            ${this.firstLetterCaptalize(
                    jpaName
                  )} ${jpaName}UpdatedValue = ${this.firstLetterCaptalize(
                    jpaName
                  )}.builder()${bodyFields}
                    .build();
            ${this.firstLetterCaptalize(
                    jpaName
                  )} ${jpaName}Saved = ${jpaName}Repository.save(${jpaName}UpdatedValue);
            return ${jpaName}UpdatedValue;
        }
        return null;
    }`
                  : ``;
              }
            }
          });
        }
      });
    }
    resultString += repositoryfields;
  } else if (methodName == 'updateById') {
    const rowNum = targetJpa['content'].length;
    let repositoryfields = ``;
    let primaryKeyName = ``;
    let primaryKeyType = ``;
    let end = ``;
    let bodyFields = ``;

    if (Array.isArray(targetJpa['content']) && rowNum > 0) {
      targetJpa['content'].map((row, rowIndex) => {
        end =
          rowIndex < rowNum
            ? `;`
            : `
                    `;
        if (Array.isArray(row)) {
          row.map((cols, colIndex) => {
            if (Array.isArray(cols)) {
              console.log(
                appObject['appObjectId'] +
                ` : operation Impossible for row: ` +
                rowIndex +
                ` and column: ` +
                colIndex
              );
            } else {
              if (cols['value']['type'] !== 'emptyCell') {
                if (cols['value']['schema']['type'] == 'boolean') {
                  bodyFields += `
                    .${cols['title']}(${jpaName}NewValues.is${this.firstLetterCaptalize(cols['title'])}())`;
                  // const end = rowIndex + 1 <= rowNum ? `;` : ``;
                } else {
                  bodyFields += `
        ${jpaName}.set${this.firstLetterCaptalize(cols['title'])}(${jpaName}NewValues.get${this.firstLetterCaptalize(
                    cols['title']
                  )}())${end}`
                  // bodyFields += `
                  //   .${cols['title']
                  //   }(${jpaName}NewValues.get${this.firstLetterCaptalize(
                  //     cols['title']
                  //   )}())${end}`;
                }
              }
            }
          });
        }
      });

      targetJpa['content'].map((row, rowIndex) => {
        if (Array.isArray(row)) {
          row.map((cols, colIndex) => {
            if (Array.isArray(cols)) {
              console.log(
                appObject['appObjectId'] +
                ` : operation Impossible for row: ` +
                rowIndex +
                ` and column: ` +
                colIndex
              );
            } else {
              if (cols['value']['type'] !== 'emptyCell') {
                if (cols['value']['schema']['isPrimaryKey'] === true || cols['value']['schema']['isPreAllocatingPrimaryKey'] === true) {
                  primaryKeyName = cols['title'];
                  primaryKeyType = cols['value']['schema']['type'];
                  primaryKeyType === 'BigDecimal'
                    ? (typeList[`java.math.BigDecimal`] = {})
                    : ``;
                }
              }
            }
          });
        }
      });
      resultString = `
    @Override
    public ${this.firstLetterCaptalize(
        jpaName
      )}DTO updateBy${this.firstLetterCaptalize(
        primaryKeyName
      )}(${primaryKeyType} ${primaryKeyName}, ${this.firstLetterCaptalize(
        jpaName
      )} ${jpaName}NewValues,Principal principal){
        ${this.firstLetterCaptalize(
        jpaName
      )} ${jpaName} = ${jpaName}Repository.findById(${primaryKeyName}).orElseThrow(()-> new EntityNotFoundException(${this.firstLetterCaptalize(
        jpaName
      )}.class,"${primaryKeyName}",String.valueOf(${primaryKeyName})));
        // if (\${jpaName} != null){
      ${bodyFields}
        //       \${this.firstLetterCaptalize(
        //   jpaName
        // )} \${jpaName}UpdatedValue = \${this.firstLetterCaptalize(
        //   jpaName
        // )}.builder()\${bodyFields}
        //               .build();
        ${this.firstLetterCaptalize(
        jpaName
      )} ${jpaName}Saved = ${jpaName}Repository.save(${jpaName});
        return ${jpaName}Logic.convertToDto(${jpaName}Saved);
        // }
        // return null;
    }`;
    }
  } else if (methodName == 'deleteById') {
    const rowNum = targetJpa['content'].length;
    let repositoryfields = ``;
    let primaryKeyType = ``;
    const end = ``;

    if (Array.isArray(targetJpa['content']) && rowNum > 0) {
      targetJpa['content'].map((row, rowIndex) => {
        if (Array.isArray(row)) {
          row.map((cols, colIndex) => {
            if (Array.isArray(cols)) {
              console.log(
                appObject['appObjectId'] +
                ` : operation Impossible for row: ` +
                rowIndex +
                ` and column: ` +
                colIndex
              );
            } else {
              if (cols['value']['type'] !== 'emptyCell') {
                if (cols['value']['schema']['isPrimaryKey'] === true || cols['value']['schema']['isPreAllocatingPrimaryKey'] === true) {
                  primaryKeyType = cols['value']['schema']['type'];
                  primaryKeyType === 'BigDecimal'
                    ? (typeList[`java.math.BigDecimal`] = {})
                    : ``;
                }
              }
            }
          });
        }
      });
      resultString += `@Override
    public void deleteById(${primaryKeyType} id, Principal principal){
        ${jpaName}Repository.deleteById(id);
        // Map<String, Object> response = ${jpaName}Logic.generateResponse(${jpaName}s);
        // return response;
    }
`;
    }
  } else if (methodName == 'dataSourceProvider') {
    targetJpa['content'].map((row, rowIndex) => {
      if (Array.isArray(row)) {
        row.map((cols, colIndex) => {
          if (Array.isArray(cols)) {
            console.log(
              appObject['appObjectId'] +
              ` : operation Impossible for row: ` +
              rowIndex +
              ` and column: ` +
              colIndex
            );
          } else {
            if (cols['value']['type'] !== 'emptyCell') {
              if (Object.keys(cols['value']['schema']).includes('dataSourceProvider')) {

                if (Object.keys(cols['value']['schema']['dataSourceProvider']).includes('storedProcedure')) {
                  dataSourceProvider['storedProcedure'] = {
                    ...dataSourceProvider['storedProcedure'],
                    [cols['value']['schema']['dataSourceProvider']['storedProcedure']['name']]:
                      Object.keys(cols['value']['schema']['dataSourceProvider']['storedProcedure']).includes('logProcedureCall')
                        ? cols['value']['schema']['dataSourceProvider']['storedProcedure']['logProcedureCall']
                        : false,
                  }
                } else if (Object.keys(cols['value']['schema']['dataSourceProvider']).includes('restService')) {
                  dataSourceProvider['restService'] = {
                    ...dataSourceProvider['restService'],
                    [cols['value']['schema']['dataSourceProvider']['restService']['name']]: ''
                  }
                }
                // Object.keys(cols['value']['schema']['dataSourceProvider']).includes('storedProcedure')
                //   ?
                //   dataSourceProvider['storedProcedure'] = {
                //     ...dataSourceProvider['storedProcedure'],
                //     [cols['value']['schema']['dataSourceProvider']['storedProcedure']['name']]: ''
                //   }
                //   : Object.keys(cols['value']['schema']['dataSourceProvider']).includes('restService')
                //     ? dataSourceProvider['restService'] = {
                //       ...dataSourceProvider['restService'],
                //       [cols['value']['schema']['dataSourceProvider']['restService']['name']]: ''
                //     }
                //     : ''
              }
              if (Object.keys(cols['value']['schema']).includes('onBlurDataSourceProvider')) {

                Object.keys(cols['value']['schema']['onBlurDataSourceProvider']).includes('storedProcedure')
                  ?
                  (
                    dataSourceProvider['storedProcedure'] = {
                      ...dataSourceProvider['storedProcedure'],
                      [cols['value']['schema']['onBlurDataSourceProvider']['storedProcedure']['name']]: ''
                    }
                  )
                  : Object.keys(cols['value']['schema']['onBlurDataSourceProvider']).includes('restService')
                    ? dataSourceProvider['restService'] = {
                      ...dataSourceProvider['restService'],
                      [cols['value']['schema']['onBlurDataSourceProvider']['restService']['name']]: ''
                    }
                    : ''
              }
            }
          }
        });
      }
    });
  }
  // if(jpaName = 'tafahomInformation' && methodName == 'findById'){
  //   console.log(typeList);
  // }
  return { resultString: resultString, typeList: typeList, dataSourceProvider: dataSourceProvider };
};

//  Call from ServiceImplGenerator.js
exports.serviceImplRestServiceCaller = (
  restServiceName,
  targetRestService,
  uniqueInput,
  restServiceInputObj,
  restServiceOutputObj,
  restServiceResponseObj
) => {
  let resultString = ``;

  if (targetRestService['method'] == 'POST') {
    const restServiceOutput =
      Object.keys(restServiceResponseObj).length == 0
        ? Object.keys(restServiceOutputObj).length == 0
          ? `void`
          : `${this.firstLetterCaptalize(restServiceName)}OutputDTO`
        : `${this.firstLetterCaptalize(restServiceName)}OutputDTO`;

    const restServiceInput =
      Object.keys(restServiceInputObj).length == 0
        ? ``
        : Object.keys(uniqueInput).length == 1
          ? `${Object.keys(uniqueInput)[0]} ${uniqueInput[Object.keys(uniqueInput)[0]]
          }`
          : `${this.firstLetterCaptalize(
            restServiceName
          )}InputDTO ${restServiceName}InputDTO`;

    const callRestServiceInput =
      Object.keys(restServiceInputObj).length == 0
        ? ``
        : Object.keys(uniqueInput).length == 1
          ? `${uniqueInput[Object.keys(uniqueInput)[0]]}`
          : `${restServiceName}InputDTO`;

    resultString = `
    public ResponseEntity<${restServiceOutput}> callRestService${this.firstLetterCaptalize(
      restServiceName
    )}(${restServiceInput}){
        HttpEntity actualRequest = new HttpEntity(${callRestServiceInput});
        return restTemplate.exchange("${targetRestService['uri']
      }/${restServiceName}", HttpMethod.${targetRestService['method']
      }, actualRequest, ${restServiceOutput}.class);
    }
      `;
  } else if (targetRestService['method'] == 'GET') {
    resultString = ``;
  } else if (targetRestService['method'] == 'PUT') {
    resultString = ``;
  }
  return resultString;
};

//  caLL from controllerGenerator.js
exports.controllerJpaMethodCaller = (
  className,
  jpaName,
  targetJpa, //  from Domain
  jpaMethods, //  from Content
  actualValidationRuleSet, //  from Validation
  // parentRouteId //  from ContetnMap
  targetCol,
  pathVariables,
  primaryKeyColumnName,
  colName
) => {
  // console.log(primaryKeyColumnName);
  let resultString = ``;
  let customValidation = ``;
  let typeList = {};
  let primaryKeyName = ``;
  let primaryKeyType = ``;
  let dataSourceProvider = {}



  Object.keys(jpaMethods).map((methodName) => {
    if (methodName == 'saveAll') {
      //  check is there any validation rules in 'content' file
      if (
        Object.keys(jpaMethods[methodName]['preConditions']['validations'])
          .length > 0
      ) {
        Object.keys(jpaMethods[methodName]['preConditions']['validations']).map(
          (ruleName) => {
            //  check rule in 'Content' is in rule in 'Validation'
            customValidation =
              ruleName in actualValidationRuleSet
                ? `@PathVariable("${targetCol['title']}") @${actualValidationRuleSet[ruleName]['sourceObjectName']
                }${this.firstLetterCaptalize(
                  actualValidationRuleSet[ruleName]['sourceKey']
                )}Validation ${targetCol['value']['schema']['type']} ${targetCol['title']
                }, `
                : ``;
          }
        );
      }
      resultString += `
    
    @PostMapping("")
    public ResponseEntity<Void> save(${customValidation}@Validated @RequestBody ${this.firstLetterCaptalize(
        jpaName
      )}DTO ${jpaName}DTO, Principal principal){
        ${this.firstLetterCaptalize(
        jpaName
      )} ${jpaName} = ${jpaName}Logic.convertToEntity(${jpaName}DTO);
        ${jpaName == 'userActivity' ? 'userActivity = UserActivity' : 'UserActivity userActivity = UserActivity'}
                .builder()
                .user(principal.getName())
                .date(LocalDateTime.now().toString())
                .subject("${jpaName.toUpperCase()}")
                .operation("SAVE")
                .value(${jpaName}DTO.toString())
                .idColumn(0L)
                .build();
        userActivityService.save(userActivity, principal);
        return ResponseEntity.created(${className}Service.save(${jpaName}, principal)).build();
    }`;
    } else if (methodName == 'findAll') {
      resultString += `
    
    @GetMapping("")
    public ResponseEntity<Map<String, Object>> findAll(Pageable pageable, Principal principal){
        return ResponseEntity.ok().body(${className}Service.findAll(pageable, principal));
    }`;
    } else if (methodName == 'findById') {
      const rowNum = targetJpa['content'].length;
      const end = ``;

      if (Array.isArray(targetJpa['content']) && rowNum > 0) {
        targetJpa['content'].map((row, rowIndex) => {
          if (Array.isArray(row)) {
            row.map((cols, colIndex) => {
              if (Array.isArray(cols)) {
                console.log(
                  appObject['appObjectId'] +
                  ` : operation Impossible for row: ` +
                  rowIndex +
                  ` and column: ` +
                  colIndex
                );
              } else {
                if (cols['value']['type'] !== 'emptyCell') {
                  if (cols['value']['schema']['isPrimaryKey'] === true || cols['value']['schema']['isPreAllocatingPrimaryKey'] === true) {
                    primaryKeyName = cols['title'];
                    primaryKeyType = cols['value']['schema']['type'];
                    primaryKeyType === 'BigDecimal'
                      ? (typeList[`java.math.BigDecimal`] = {})
                      : ``;
                  } if (cols['value']['schema']['type'] == 'file') {
                    typeList['com.behsazan.projects.mutualUnderstanding.service.StorageService'] = {}
                    typeList['com.behsazan.projects.mutualUnderstanding.model.request.FileProperty'] = {}
                    typeList['org.springframework.web.multipart.MultipartFile'] = {}
                    typeList['org.springframework.web.servlet.mvc.support.RedirectAttributes'] = {}
                    typeList['com.fasterxml.jackson.databind.ObjectMapper'] = {}
                    typeList['com.fasterxml.jackson.core.JsonProcessingException'] = {}
                    typeList['org.springframework.http.HttpEntity'] = {}
                    typeList['jakarta.validation.constraints.NotEmpty'] = {}
                    typeList['org.springframework.http.HttpHeaders'] = {}
                    typeList['org.springframework.http.MediaType'] = {}


                    typeList['java.net.URI'] = {}

                  }
                }
              }
            });
          }
        });
        resultString += `
    
    @GetMapping("/{${primaryKeyName}}")
    public ResponseEntity<Map<String, Object>> findById(@PathVariable @NotNull @NotBlank ${primaryKeyType} ${primaryKeyName}, Principal principal) {
      Map<String, Object> map = new HashMap<>();
      List<${this.firstLetterCaptalize(jpaName)}DTO> b = new ArrayList<>();
      b.add(${className}Service.findById(${primaryKeyName}, principal));
      map.put("content", b);
      map.put("totalItems", 1);
      map.put("totalPages", 1);
      map.put("currentPage", 0);

      return ResponseEntity.ok(map);
    }`;
        typeList['java.util.Map'] = {}
        typeList['java.util.HashMap'] = {}
        typeList['java.util.List'] = {}
      }
    } else if (methodName == 'findByIndex') {
      const rowNum = targetJpa['content'].length;
      const end = `;`;

      if (Array.isArray(targetJpa['content']) && rowNum > 0) {
        targetJpa['content'].map((row, rowIndex) => {
          if (Array.isArray(row)) {
            row.map((cols, colIndex) => {
              if (Array.isArray(cols)) {
                console.log(
                  appObject['appObjectId'] +
                  ` : operation Impossible for row: ` +
                  rowIndex +
                  ` and column: ` +
                  colIndex
                );
              } else {
                if (cols['name'] !== 'emptyCell') {


                  // if (jpaName == 'eghdamat') {
                  //   console.log(pathVariables.includes(cols['title']))
                  // }


                  const isNotNull =
                    cols['value']['schema']['isNotNull'] == true
                      ? `@NotNull`
                      : ``;
                  const isNotBlank =
                    cols['value']['schema']['isNotBlank'] == true
                      ? `\r  @NotBlank(message = "${cols['name']} is mandatory")`
                      : ``;
                  const isUnique =
                    cols['value']['schema']['isUnique'] == true
                      ? `\r  @Column(unique = true)`
                      : ``;
                  // convert 'Date' dataType to 'String'
                  const dateType =
                    cols['value']['schema']['type'] == `Date` ||
                      cols['value']['schema']['type'] == `file`
                      ? `String`
                      : cols['value']['schema']['type'];

                  cols['value']['schema']['type'] == `BigDecimal`
                    ? typeList['java.math.BigDecimal'] = {}
                    : ''
                  // console.log(cols['title']);
                  // console.log(targetCol);
                  // resultString += isUnique;
                  // cols['title'] === targetCol
                  resultString += pathVariables.includes(
                    cols['title']
                  )
                    ? // resultString +=
                    `
    
    @GetMapping(path="", params ="${cols['title']}")
    public ResponseEntity<Map<String, Object>> findBy${this.firstLetterCaptalize(
                      cols['title']
                    )}(@RequestParam @NotNull @NotBlank ${dateType} ${cols['title']
                    }, Principal principal) {
      Map<String, Object> map = new HashMap<>();
      List<${this.firstLetterCaptalize(
                      jpaName
                    )}> ${jpaName}s = ${className}Service.findBy${this.firstLetterCaptalize(
                      cols['title']
                    )}(${cols['title']}, principal);
      List<${this.firstLetterCaptalize(jpaName)}DTO> ${jpaName}DTOs = new ArrayList<>();
      if(${jpaName}s != null){
        Iterator<${this.firstLetterCaptalize(jpaName)}> ${jpaName}Iterator = ${jpaName}s.iterator();
        while(${jpaName}Iterator.hasNext()){
          ${jpaName}DTOs.add(${jpaName}Logic.convertToDto(${jpaName}Iterator.next()));
          }
        map.put("content", ${jpaName}DTOs);
        map.put("totalItems", 1);
        map.put("totalPages", 1);
        map.put("currentPage", 0);
          
        return ResponseEntity.ok(map);
      } else {
        return ResponseEntity.notFound().build();
      }
    }`
                    : ``;
                  typeList['java.util.ArrayList'] = {}
                  typeList['java.util.Iterator'] = {}
                  typeList['java.util.List'] = {}
                  typeList['java.util.Map'] = {}
                  typeList['java.util.HashMap'] = {}
                }
              }
            });
          }
        });
      }
    } else if (methodName == 'updateByIndex') {
      //  check is there any validation rules in 'content' file
      if (
        Object.keys(jpaMethods[methodName]['preConditions']['validations'])
          .length > 0
      ) {
        Object.keys(jpaMethods[methodName]['preConditions']['validations']).map(
          (ruleName) => {
            //  check rule in 'Content' is in rule in 'Validation'
            customValidation =
              ruleName in actualValidationRuleSet
                ? `@PathVariable("${targetCol['title']}") @${actualValidationRuleSet[ruleName]['sourceObjectName']
                }${this.firstLetterCaptalize(
                  actualValidationRuleSet[ruleName]['sourceKey']
                )}Validation ${targetCol['value']['schema']['type']} ${targetCol['title']
                }, `
                : ``;
          }
        );
      }

      const rowNum = targetJpa['content'].length;
      const end = `;`;

      if (Array.isArray(targetJpa['content']) && rowNum > 0) {
        targetJpa['content'].map((row, rowIndex) => {
          if (Array.isArray(row)) {
            row.map((cols, colIndex) => {
              if (Array.isArray(cols)) {
                console.log(
                  appObject['appObjectId'] +
                  ` : operation Impossible for row: ` +
                  rowIndex +
                  ` and column: ` +
                  colIndex
                );
              } else {
                if (cols['name'] !== 'emptyCell') {
                  const isNotNull =
                    cols['value']['schema']['isNotNull'] == true
                      ? `@NotNull`
                      : ``;
                  const isNotBlank =
                    cols['value']['schema']['isNotBlank'] == true
                      ? `\r  @NotBlank(message = "${cols['name']} is mandatory")`
                      : ``;
                  const isUnique =
                    cols['value']['schema']['isUnique'] == true
                      ? `\r  @Column(unique = true)`
                      : ``;
                  // convert 'Date' dataType to 'String'
                  const dateType =
                    cols['value']['schema']['type'] == `Date` ||
                      cols['value']['schema']['type'] == `file`
                      ? `String`
                      : cols['value']['schema']['type'];

                  // console.log(cols['title']);
                  // console.log(targetCol);
                  // resultString += isUnique;
                  // cols['title'] === targetCol
                  resultString += pathVariables.includes(
                    cols['title']
                  )
                    ? // resultString +=
                    `
    
    @PutMapping(path = "", params ="${cols['title']}")
    public ResponseEntity<${this.firstLetterCaptalize(
                      jpaName
                    )}DTO> updateBy${this.firstLetterCaptalize(
                      cols['title']
                    )}(@RequestParam @NotNull @NotBlank ${dateType} ${cols['title']
                    }, @Validated @RequestBody ${this.firstLetterCaptalize(
                      jpaName
                    )}DTO ${jpaName}DTO , Principal principal) {
        ${this.firstLetterCaptalize(
                      jpaName
                    )} ${jpaName} = ${jpaName}Logic.convertToEntity(${jpaName}DTO);
        ${jpaName == 'userActivity' ? 'userActivity = UserActivity' : 'UserActivity userActivity = UserActivity'}
                .builder()
                .user(principal.getName())
                .date(LocalDateTime.now().toString())
                .subject("${jpaName.toUpperCase()}")
                .operation("UPDATE")
                .value(${jpaName}DTO.toString())
                .idColumn(0L)
                .build();
        userActivityService.save(userActivity, principal);
        ${this.firstLetterCaptalize(
                      jpaName
                    )} updated${this.firstLetterCaptalize(
                      jpaName
                    )} = ${className}Service.updateBy${this.firstLetterCaptalize(
                      cols['title']
                    )}(${cols['title']}, ${jpaName}, principal);
                      
        return ResponseEntity.noContent().build();

    }`
                    : ``;
                  // 22222
                  // ${this.firstLetterCaptalize(
                  //   jpaName
                  // )}DTO updateValues = ${this.firstLetterCaptalize(
                  //   jpaName
                  // )}DTO.Builder.

                  // return ResponseEntity.ok(${className}Service.updateBy${this.firstLetterCaptalize(
                  //                 cols['title']
                  //               )}(${cols['title']}, principal));
                }
              }
            });
          }
        });
      }
    } else if (methodName == 'updateById') {
      let primaryKeyName = ``;
      let primaryKeyType = ``;
      //  check is there any validation rules in 'content' file
      // if (
      //   Object.keys(jpaMethods[methodName]['preConditions']['validations'])
      //     .length > 0
      // ) {
      //   Object.keys(jpaMethods[methodName]['preConditions']['validations']).map(
      //     (ruleName) => {
      //       //  check rule in 'Content' is in rule in 'Validation'
      //       customValidation =
      //         ruleName in actualValidationRuleSet
      //           ? `@PathVariable("${targetCol['title']}") @${actualValidationRuleSet[ruleName]['sourceObjectName']
      //           }${this.firstLetterCaptalize(
      //             actualValidationRuleSet[ruleName]['sourceKey']
      //           )}Validation ${targetCol['value']['schema']['type']} ${targetCol['title']
      //           }, `
      //           : ``;
      //     }
      //   );
      // }

      const rowNum = targetJpa['content'].length;
      const end = `;`;

      if (Array.isArray(targetJpa['content']) && rowNum > 0) {
        targetJpa['content'].map((row, rowIndex) => {
          if (Array.isArray(row)) {
            row.map((cols, colIndex) => {
              if (Array.isArray(cols)) {
                console.log(
                  appObject['appObjectId'] +
                  ` : operation Impossible for row: ` +
                  rowIndex +
                  ` and column: ` +
                  colIndex
                );
              } else {
                if (cols['name'] !== 'emptyCell') {
                  if (cols['value']['schema']['isPrimaryKey'] === true || cols['value']['schema']['isPreAllocatingPrimaryKey'] === true) {
                    primaryKeyName = cols['title'];
                    primaryKeyType = cols['value']['schema']['type'];
                    primaryKeyType === 'BigDecimal'
                      ? (typeList[`java.math.BigDecimal`] = {})
                      : ``;
                  }
                  const isNotNull =
                    cols['value']['schema']['isNotNull'] == true
                      ? `@NotNull`
                      : ``;
                  const isNotBlank =
                    cols['value']['schema']['isNotBlank'] == true
                      ? `\r  @NotBlank(message = "${cols['name']} is mandatory")`
                      : ``;
                  const isUnique =
                    cols['value']['schema']['isUnique'] == true
                      ? `\r  @Column(unique = true)`
                      : ``;
                  // convert 'Date' dataType to 'String'
                  const dateType =
                    cols['value']['schema']['type'] == `Date` ||
                      cols['value']['schema']['type'] == `file`
                      ? `String`
                      : cols['value']['schema']['type'];

                  if (primaryKeyColumnName == cols['title']) {
                    resultString +=
                      `
    
    @PutMapping("/{${primaryKeyName}}")
    public ResponseEntity<${this.firstLetterCaptalize(
                        jpaName
                      )}DTO> updateBy${this.firstLetterCaptalize(
                        cols['title']
                      )}(@PathVariable @NotNull @NotBlank ${primaryKeyType} ${primaryKeyName}, @Validated @RequestBody ${this.firstLetterCaptalize(
                        jpaName
                      )}DTO ${jpaName}DTO , Principal principal) {
        ${this.firstLetterCaptalize(
                        jpaName
                      )} ${jpaName} = ${jpaName}Logic.convertToEntity(${jpaName}DTO);
        ${jpaName == 'userActivity' ? 'userActivity = UserActivity' : 'UserActivity userActivity = UserActivity'}
                .builder()
                .user(principal.getName())
                .date(LocalDateTime.now().toString())
                .subject("${jpaName.toUpperCase()}")
                .operation("UPDATE")
                .value(${jpaName}DTO.toString())
                .idColumn(0L)
                .build();
        userActivityService.save(userActivity, principal);
        ${this.firstLetterCaptalize(
                        jpaName
                      )}DTO updated${this.firstLetterCaptalize(
                        jpaName
                      )} = ${className}Service.updateBy${this.firstLetterCaptalize(
                        primaryKeyName
                      )}(${primaryKeyName}, ${jpaName}, principal);
                      
        return ResponseEntity.noContent().build();

    }`
                  }

                  // return ResponseEntity.ok(${className}Service.updateBy${this.firstLetterCaptalize(
                  //                 cols['title']
                  //               )}(${cols['title']}, principal));
                }
              }
            });
          }
        });
      }
    } else if (methodName == 'deleteById') {
      targetJpa['content'].map((row, rowIndex) => {
        if (Array.isArray(row)) {
          row.map((cols, colIndex) => {
            if (Array.isArray(cols)) {
              console.log(
                appObject['appObjectId'] +
                ` : operation Impossible for row: ` +
                rowIndex +
                ` and column: ` +
                colIndex
              );
            } else {
              if (cols['value']['type'] !== 'emptyCell') {
                if (cols['value']['schema']['isPrimaryKey'] === true || cols['value']['schema']['isPreAllocatingPrimaryKey'] === true) {
                  primaryKeyName = cols['title'];
                  primaryKeyType = cols['value']['schema']['type'];
                  primaryKeyType === 'BigDecimal'
                    ? (typeList[`java.math.BigDecimal`] = {})
                    : ``;
                }
              }
            }
          });
        }
      });
      // public void deleteById(BigDecimal id, Principal principal)
      resultString += `
    
    @DeleteMapping("/{${primaryKeyName}}")
    public ResponseEntity delete(@PathVariable @NotNull @NotBlank ${primaryKeyType} ${primaryKeyName}, Principal principal) {
        ${jpaName == 'userActivity' ? 'userActivity = UserActivity' : 'UserActivity userActivity = UserActivity'}
                .builder()
                .user(principal.getName())
                .date(LocalDateTime.now().toString())
                .subject("${jpaName.toUpperCase()}")
                .operation("DELETE")
                .value(String.valueOf(${primaryKeyName}))
                .idColumn(0L)
                .build();
        userActivityService.save(userActivity, principal);
        ${className}Service.deleteById(${primaryKeyName}, principal);
        return ResponseEntity.noContent().build();
    }`;
    } else if (methodName == 'dataSourceProvider') {
      targetJpa['content'].map((row, rowIndex) => {
        if (Array.isArray(row)) {
          row.map((cols, colIndex) => {
            if (Array.isArray(cols)) {
              console.log(
                appObject['appObjectId'] +
                ` : operation Impossible for row: ` +
                rowIndex +
                ` and column: ` +
                colIndex
              );
            } else {
              if (cols['value']['type'] !== 'emptyCell') {
                if (Object.keys(cols['value']['schema']).includes('dataSourceProvider')) {

                  Object.keys(cols['value']['schema']['dataSourceProvider']).includes('storedProcedure')
                    ?
                    dataSourceProvider['storedProcedure'] = {
                      ...dataSourceProvider['storedProcedure'],
                      [cols['value']['schema']['dataSourceProvider']['storedProcedure']['name']]: ''
                    }
                    : Object.keys(cols['value']['schema']['dataSourceProvider']).includes('restService')
                      ? dataSourceProvider['restService'] = {
                        ...dataSourceProvider['restService'],
                        [cols['value']['schema']['dataSourceProvider']['restService']['name']]: ''
                      }
                      : ''
                }
                if (Object.keys(cols['value']['schema']).includes('onBlurDataSourceProvider')) {

                  Object.keys(cols['value']['schema']['onBlurDataSourceProvider']).includes('storedProcedure')
                    ?
                    dataSourceProvider['storedProcedure'] = {
                      ...dataSourceProvider['storedProcedure'],
                      [cols['value']['schema']['onBlurDataSourceProvider']['storedProcedure']['name']]: ''
                    }
                    : Object.keys(cols['value']['schema']['onBlurDataSourceProvider']).includes('restService')
                      ? dataSourceProvider['restService'] = {
                        ...dataSourceProvider['restService'],
                        [cols['value']['schema']['onBlurDataSourceProvider']['restService']['name']]: ''
                      }
                      : ''
                }
              }
            }
          });
        }
      });
    }
  });
  return {
    resultString: resultString,
    typeList: typeList,
    primaryKeyName: primaryKeyName,
    primaryKeyType: primaryKeyType,
    dataSourceProvider: dataSourceProvider
  };
};
// Called from
//  ClientViewForm.js
//  ControllerGenerator.js
//  DomainCofig.js
//  EntityGenerator.js
exports.extractColObjByColName = (targetJpa, colName) => {
  let resultString = ``;
  // console.log('targetJpa');
  // console.log(targetJpa);
  const rowNum = targetJpa['content'].length;
  if (Array.isArray(targetJpa['content']) && rowNum > 0) {
    // console.log(targetJpa);
    targetJpa['content'].map((row, rowIndex) => {
      if (Array.isArray(row)) {
        row.map((cols, colIndex) => {
          if (Array.isArray(cols)) {
            console.log(
              appObject['appObjectId'] +
              ` : operation Impossible for row: ` +
              rowIndex +
              ` and column: ` +
              colIndex
            );
          } else {
            if (cols['value']['type'] !== 'emptyCell') {
              if (cols['title'] == colName) {
                resultString = targetJpa['content'][rowIndex][colIndex];
              }
            }
          }
        });
      }
    });
  }
  return resultString;
};

//  caLL from controllerGenerator.js
exports.controllerStoredProcedureMethodCaller = (
  className,
  storedProcedureName,

  targetStoredProcedure,
  serviceInputObj,
  serviceOutputObj,
  serviceResultSetObj,

  uniqueInput,
  uniqueOutput,
  uniqueResultSet,
  logProcedureCall = false
) => {

  // console.log(className);
  // console.log(storedProcedureName)
  // console.log(targetStoredProcedure);
  // console.log(serviceInputObj);
  // console.log(serviceOutputObj);
  // console.log(serviceResultSetObj)
  // console.log(uniqueInput);
  // console.log(uniqueOutput);
  // console.log(uniqueResultSet);

  const serviceOutput =
    Object.keys(serviceResultSetObj).length == 0
      ? Object.keys(serviceOutputObj).length == 0
        ? `void`
        : `${this.firstLetterCaptalize(storedProcedureName)}OutputDTO`
      : `List<${this.firstLetterCaptalize(storedProcedureName)}ResultListDTO>`;
  //   `${this.firstLetterCaptalize(storedProcedureName)}OutputDTO`
  // : `List<${this.firstLetterCaptalize(storedProcedureName)}ResultListDTO>`;

  //  possible states : NO INPUT , One INPUT, More than One INPUT
  // console.log(Object.keys(uniqueInput).length);
  const serviceInput =
    Object.keys(uniqueInput).length == 0
      ? ``
      // : Object.keys(uniqueInput).length == 1
      //   ? `@PathVariable @NotNull @NotBlank ${Object.keys(uniqueInput)[0]} ${uniqueInput[Object.keys(uniqueInput)[0]]
      //   },`
      : `@Validated @RequestBody ${this.firstLetterCaptalize(
        storedProcedureName
      )}InputDTO ${storedProcedureName}InputDTO,`;

  const callServiceParameter =
    Object.keys(uniqueInput).length == 0
      ? ``
      // : Object.keys(uniqueInput).length == 1
      //   ? `${uniqueInput[Object.keys(uniqueInput)[0]]}`
      : `${storedProcedureName}InputDTO`;

  const callServiceBody =
    Object.keys(serviceResultSetObj).length == 0
      ? Object.keys(serviceOutputObj).length == 0
        ? `${className}Service.callSp${this.firstLetterCaptalize(
          storedProcedureName
        )}(${callServiceParameter}${callServiceParameter.length > 0 ? `, ` : ``}principal);
          return;`
        : `return ${className}Service.callSp${this.firstLetterCaptalize(
          storedProcedureName
        )}(${callServiceParameter}${callServiceParameter.length > 0 ? `, ` : ``}principal);`
      : `return ${className}Service.callSp${this.firstLetterCaptalize(
        storedProcedureName
      )}(${callServiceParameter}${callServiceParameter.length > 0 ? `, ` : ``}principal);`;

  // const mappingString =
  //   Object.keys(uniqueInput).length == 0
  //     ? `@GetMapping("/${storedProcedureName}")`
  //     : Object.keys(uniqueInput).length == 1
  //       ? `@GetMapping("/{${uniqueInput[Object.keys(uniqueInput)[0]]}}")`
  //       : Object.keys(uniqueInput).length > 1
  //         ? `@PostMapping("/${storedProcedureName}")`
  //         : ``

  const mappingString =
    Object.keys(uniqueInput).length == 0
      ? `@GetMapping("")`
      : Object.keys(uniqueInput).length >= 1
        ? `@PostMapping("")`
        : ``

  const logProcedureCallBody = logProcedureCall == true ? `UserActivity userActivity = UserActivity
                .builder()
                .user(principal.getName())
                .date(LocalDateTime.now().toString())
                .subject("${storedProcedureName}")
                .operation("CALL_PROCEDURE")
                .value(${storedProcedureName}InputDTO.toString())
                .idColumn(0L)
                .build();
          userActivityService.save(userActivity, principal);`: ''

  // const mappingString = `@GetMapping("")`
  let resultString = `
    ${mappingString}
      public ${serviceOutput} ${storedProcedureName}(${serviceInput} Pageable pageable,Principal principal){
          ${logProcedureCallBody}
          ${callServiceBody}
      }`;
  //     ${getStoredProcedureInputParameters(
  //   storedProcedureName
  // )}
  return resultString;
  // if (methodName == 'findAll') {
};
//  Called from
//    ControllerGenerator.js
//    ServiceImplGenerator.js
//    ServieGenerator.js
//    ModelGenerator.js
//    testGenerator.js
exports.extractUniqueDataTypefromParametersObject = (parameters, direction) => {
  let uniqueInput = {};
  let uniqueOutput = {};
  let uniqueImportString = ``;

  Object.keys(parameters).map((parameter) => {
    if (parameters[parameter]['direction'] == 'IN') {
      uniqueInput[parameters[parameter]['type']] = parameter;
    } else if (parameters[parameter]['direction'] == 'OUT') {
      uniqueOutput[parameters[parameter]['type']] = parameter;
    }
  });
  // if ('mobileNo' in parameters) {
  //   console.log('uniqueInput');
  //   console.log(uniqueInput);
  //   console.log('uniqueOutput');
  //   console.log(uniqueOutput);
  //   console.log('');
  // }
  if (direction == 'IN') {
    return uniqueInput;
  } else if (direction == 'OUT') {
    return uniqueOutput;
  } else if (direction == 'BOTH') {
    return { uniqueInput: uniqueInput, uniqueOutput: uniqueOutput };
  }

  // Object.keys(inputModel).map((dataType) => {
  //   if (dataType == 'BigDecimal') {
  //     uniqueImportString += `import java.math.BigDecimal;
  //     `;
  //   } else if (dataType == 'Map') {
  //     uniqueImportString += `import java.util.Map;
  //     `;
  //   } else if (dataType == 'ArrayList') {
  //     uniqueImportString += `import java.util.ArrayList;
  //     `;
  //   } else if (dataType == 'Collection') {
  //     uniqueImportString += `import java.util.Collection;
  //     `;
  //   } else if (dataType == 'Set') {
  //     uniqueImportString += `import java.util.Set;
  //     `;
  //   }
  // });

  // return { uniqueInput: uniqueInput, outputModel: outputModel };
};
//  called from ModelGenerator.js
exports.generateImportStatementFromUniqueDataTypes = (inputDataTypes) => {
  let importString = `\r`;
  let uniqueDataType = {};

  // Object.values(inputDataTypes).map((dataType) => {
  //   if (dataType == 'BigDecimal') {
  //     uniqueDataType[dataType] = {
  //       javaType: 'BIGDECIMAL',
  //       importPath: `import java.math.BigDecimal;
  //     `,
  //     };
  //   } else if (dataType == 'Map') {
  //     uniqueDataType[dataType] = {
  //       javaType: 'MAP',
  //       importPath: `import java.util.Map;
  //     `,
  //     };
  //   } else if (dataType == 'ArrayList') {
  //     uniqueDataType[dataType] = {
  //       javaType: 'ArrayList',
  //       importPath: `import java.util.ArrayList;
  //     `,
  //     };
  //   } else if (dataType == 'Collection') {
  //     uniqueDataType[dataType] = {
  //       javaType: 'Collection',
  //       importPath: `import java.util.Collection;
  //     `,
  //     };
  //   } else if (dataType == 'Set') {
  //     uniqueDataType[dataType] = {
  //       javaType: 'Set',
  //       importPath: `import java.util.Set;
  //     `,
  //     };
  //   }
  // });

  Object.keys(inputDataTypes).map((inputDataType) => {
    if (inputDataType == 'BigDecimal') {
      importString += `import java.math.BigDecimal;
`;
      //     } else if (inputDataType == 'Map') {
      //       importString += `import java.util.Map;
      // `;
      //     } else if (inputDataType == 'ArrayList') {
      //       importString += `import java.util.ArrayList;
      // `;
      //     } else if (inputDataType == 'Collection') {
      //       importString += `import java.util.Collection;
      // `;
      //     } else if (inputDataType == 'Set') {
      //       importString += `import java.util.Set;
      // `;
    } else if (inputDataType == 'BigDecimal') {
      importString += `import java.math.BigDecimal;`;
    } else if (inputDataType == 'Date') {
      importString += `import java.time.LocalDateTime;`;
    } else if (
      inputDataType == 'Integer' ||
      inputDataType == 'String' ||
      inputDataType == 'Short' ||
      inputDataType == 'long'
    ) {
      importString += ``;
    } else {
      console.log(
        '------------------------------------------------------------'
      );
      console.log(
        `---util: generateImportStatementFromUniqueDataTypes -> no such a datatype defined : ${inputDataType}`
      );
      console.log(
        '------------------------------------------------------------'
      );
    }
  });
  return importString;
};

// exports.generateModelFromStoredProcedureOutput = (storedProcedureName) => {
//   let parameterList = getStoredProcedureParameterByStoredProcedureName(storedProcedureName);
//   let parameterModel = ``;
//   Object.keys(parameterList).map(
//     (parameter) => {
//         if (
//           parameterList[parameter]['direction'] != 'IN'
//         ) {
//           parameterModel += `private ${parameterList[parameter]['type']} ${parameter};
//     `;
//         }
//     }
//   );
//   return parameterModel;
// };

exports.getGridLayoutFields = (jpaName, targetJpa, ownOrParentPrimaryKey) => {
  const rowNum = targetJpa['content'].length;
  let touchEntity = [];
  let providers = {}

  if (Array.isArray(targetJpa['content']) && rowNum > 0) {
    targetJpa['content'].map((row, rowIndex) => {
      if (Array.isArray(row)) {
        row.map((cols, colIndex) => {
          if (Array.isArray(cols)) {
            console.log(
              appObject['appObjectId'] +
              ` : operation Impossible for row: ` +
              rowIndex +
              ` and column: ` +
              colIndex
            );
          } else {
            if (cols['value']['type'] !== 'emptyCell') {

              const isPrimaryKey =
                (
                  (cols['value']['schema']['isPrimaryKey'] == true)
                  ||
                  (cols['value']['schema']['isPreAllocatingPrimaryKey'] == true)
                )
                  ? true
                  : false;

              const option = Object.keys(cols['value']['schema']).includes('option')
                ? cols['value']['schema']['option']
                : ''

              // const option = cols['value']['schema']['type'] == 'String' ?

              // select any column that 'isGridLayout' is set 'true' from any column in 'Domain' file
              const isGridLayout =
                cols['value']['schema']['isGridLayout'] == true
                  ? (
                    touchEntity = [
                      ...touchEntity,
                      {
                        name: cols['title'],
                        label: cols['lable'],
                        type: cols['value']['schema']['type'],
                        columnDefinition: cols,
                        largeBreakpointWidth:
                          cols['value']['schema']['largeBreakpointWidth'],
                        isPrimaryKey: isPrimaryKey,
                      },
                    ]
                  )
                  : false;



              // select any column that its 'title' is equal to wether 'Primary Key' (from Domain) or 'Virtual Primary Key' (from DoaminConfig)
              // save this column in touchEntity if there is not any similar befor
              if (cols['title'] == ownOrParentPrimaryKey) {
                !(touchEntity.some(e => e['name'] == ownOrParentPrimaryKey)) &&
                  (
                    touchEntity = [
                      ...touchEntity,
                      {
                        name: cols['title'],
                        label: cols['lable'],
                        type: cols['value']['schema']['type'],
                        columnDefinition: cols,
                        largeBreakpointWidth:
                          cols['value']['schema']['largeBreakpointWidth'],
                        isPrimaryKey: true,
                      },
                    ]
                  )
              }
            }
          }
        });
      }
    });
    providers = this.serviceImplJpaMethodCaller(
      '',
      'dataSourceProvider',
      '',
      targetJpa,
      ''
    )
  }
  return { touchEntity, providers };
};

exports.getColumnDataSourceProvider = (col) => {
  let dataSourceProvider = {}
  let onBlurDataSourceProvider = {}

  if (Object.keys(col['value']['schema']).includes('dataSourceProvider')) {
    // console.log('1');
    // console.log(col['value']['schema']['dataSourceProvider']);
    if (Object.keys(col['value']['schema']['dataSourceProvider']).includes('storedProcedure')) {
      dataSourceProvider['storedProcedure'] = {
        ...dataSourceProvider['storedProcedure'],
        // 'name': col['value']['schema']['dataSourceProvider']['storedProcedure']['name'],
        // 'key': col['value']['schema']['dataSourceProvider']['storedProcedure']['key'],
        // 'value' : col['value']['schema']['dataSourceProvider']['storedProcedure']['value'],
        ...col['value']['schema']['dataSourceProvider']['storedProcedure']
      }
    } else if (Object.keys(col['value']['schema']['dataSourceProvider']).includes('restService')) {
      dataSourceProvider['restService'] = {
        ...dataSourceProvider['restService'],
        ...col['value']['schema']['dataSourceProvider']['restService']
      }
    } else if (Object.keys(col['value']['schema']['dataSourceProvider']).includes('systemObject')) {
      dataSourceProvider['systemObject'] = {
        ...dataSourceProvider['systemObject'],
        ...col['value']['schema']['dataSourceProvider']['systemObject']
      }
    }
    // console.log(cols['title']);
    // console.log(cols['value']['schema']['dataSource']);
    // ['dataSource']
    // ['option']
  }
  if (Object.keys(col['value']['schema']).includes('onBlurDataSourceProvider')) {
    // console.log('2');
    if (Object.keys(col['value']['schema']['onBlurDataSourceProvider']).includes('storedProcedure')) {
      onBlurDataSourceProvider['storedProcedure'] = {
        ...onBlurDataSourceProvider['storedProcedure'],
        ...col['value']['schema']['onBlurDataSourceProvider']['storedProcedure']
      }
    }
  }
  return { dataSourceProvider, onBlurDataSourceProvider }
}
