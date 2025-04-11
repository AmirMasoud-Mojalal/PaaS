const {
  isPathExists,
  createFile,
  firstLetterCaptalize,
  generateEntityFields,
  extractColObjByColName,
} = require('./util');

const {
  getJpaByJpaName,
  getStoredProcedureByStoredProcedureName,
} = require('./DomainConfig');

const {
  getOwnIndexByRouteName,
  getOwnOrParentPathVariableByRouteName,
} = require('./ContentMapValidator');

// const ObjectForm = require('../objectForms/objectForm');

const clientViewGenerator = (applicationObject, ConfigObject) => {
  let shouldCreateFile = false;
  let injectedContent = ``;
  let entityPath = null;
  /********************************************************************************
   *                        Jakarta Persistence API
   ********************************************************************************/
  Object.keys(applicationObject['dataAccessLayer']['jpas']).map((jpaName) => {
    const targetJpa = getJpaByJpaName(
      jpaName,
      applicationObject['appObjectId']
    );
    let shouldCreateFile = true;

    const pathVariables = getOwnOrParentPathVariableByRouteName(
      applicationObject['appObjectId']
    );

    let indexList = ``;
    const pathVariablesCount = Object.keys(pathVariables).length;
    if (pathVariablesCount > 0) {
      indexList += `indexes = {`;
      Object.keys(pathVariables).map((pathVariable, rowIndex) => {
        const end = rowIndex + 1 < pathVariablesCount ? `,` : ``;
        indexList += `
                @Index(columnList = "${pathVariables[pathVariable]}", unique = false)${end}`;
      });
      indexList += `
        }`;
    }

    shouldCreateFile = true;
    const datasourceName = targetJpa['datasourceName'];
    entityPath = ConfigObject.getEntityPath(datasourceName);
    clientPath = ConfigObject.getClientViewPath();
    console.log(clientPath);

    let reactImports = {};
    const rowNum = targetJpa['content'].length;
    let entityfields = ``;

    // console.log('targetJpa');
    console.log(targetJpa);
    // console.log(targetJpa.content.length);

    if (Array.isArray(targetJpa['content']) && rowNum > 0) {
      targetJpa['content'].map((row, rowIndex) => {
        /*********************************************/
        /******************** Row ********************/
        /*********************************************/
        if (Array.isArray(row)) {
          reactImports[`${rowIndex}-open`] = `
      <div className="row border-bottom border-warning mx-1 my-1 hover-effect align-items-center justify-content-center">`;
          /*********************************************/
          /******************** Column *****************/
          /*********************************************/
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
                console.log(cols['title']);
                console.log(cols);
                /*********************************************/
                /******************** radio *****************/
                /*********************************************/
                (cols['value']['type'] === 'primitive' &&
                  cols['value']['schema']['type'] === 'boolean' &&
                  cols['value']['schema']['option'] === 'radio') ||
                (cols['value']['schema']['type'] === 'String' &&
                  cols['value']['schema']['option'] === 'radio')
                  ? (reactImports[`${rowIndex}-${colIndex}`] = ``)
                  : // ? console.log('radio')
                    null;
                /*********************************************/
                /******************** select *****************/
                /*********************************************/
                cols['value']['type'] === 'primitive' &&
                cols['value']['schema']['type'] === 'String' &&
                cols['value']['schema']['option'] === 'select'
                  ? console.log('select')
                  : null;
                /*********************************************/
                /******************** check *****************/
                /*********************************************/
                (cols['value']['type'] === 'primitive' &&
                  cols['value']['schema']['type'] === 'boolean' &&
                  cols['value']['schema']['option'] === 'checkbox') ||
                (cols['value']['schema']['type'] === 'boolean' &&
                  cols['value']['schema']['option'] === undefined) ||
                (cols['value']['schema']['type'] === 'String' &&
                  cols['value']['schema']['option'] === 'check')
                  ? console.log('check')
                  : null;
                /*********************************************/
                /******************** switch *****************/
                /*********************************************/
                cols['value']['type'] === 'primitive' &&
                cols['value']['schema']['type'] === 'boolean' &&
                cols['value']['schema']['option'] === 'switch'
                  ? console.log('switch')
                  : null;
                /*********************************************/
                /***************** datePicker ****************/
                /*********************************************/
                cols['value']['type'] === 'primitive' &&
                cols['value']['schema']['type'] === 'date'
                  ? console.log('datePicker')
                  : null;
                /*********************************************/
                /******************** text *****************/
                /*********************************************/
                //       cols['value']['type'] == 'primitive' &&
                //       cols['value']['schema']['type'] == 'string'
                //         ? (reactImports[`${rowIndex}-${colIndex}`] = `
                // <div className={"col-md-4 text-body-secondary"}>${cols['lable']}</div>`)
                //         : null;
                /*********************************************/
                /******************** text *****************/
                /*********************************************/
                cols['value']['type'] === 'primitive' &&
                cols['value']['schema']['type'] === 'String' &&
                cols['value']['schema']['option'] === undefined
                  ? console.log('text')
                  : null;
                /*********************************************/
                /******************** textArea *****************/
                /*********************************************/
                cols['value']['type'] === 'primitive' &&
                cols['value']['schema']['type'] === 'mlString' &&
                cols['value']['schema']['lines'] != undefined &&
                typeof cols['value']['schema']['lines'] == 'number'
                  ? console.log('textArea')
                  : null;
              }
            }
          });
          reactImports[`${rowIndex}-close`] = `
      </div>`;
        }
      });
    }
    //  Row
    // targetJpa.content.map((row, rowIndex) => {
    //   reactImports[`${rowIndex}-open`] = `
    //   <div className="row border-bottom border-warning mx-1 my-1 hover-effect align-items-center">`;
    //   // Column
    //   row.map((cols, colIndex) => {
    //     // console.log(Object.keys(cols).length);
    //     if (cols['value']['type'] !== 'emptyCell') {
    //       // console.log(`${rowIndex}-${colIndex}`);
    //       // console.log(cols);
    //       reactImports[`${rowIndex}-${colIndex}`] = `
    //       <div className={col-md-4 text-body-secondary}>${cols['lable']}</div>`;
    //     }
    //   });
    //   reactImports[`${rowIndex}-close`] = `
    //   </div>`;
    // });
    // console.log(reactImports);
    let injectedContent = '';
    Object.keys(reactImports).map((entiy) => {
      injectedContent += reactImports[entiy];
    });
    // console.log(injectedContent);
    if (shouldCreateFile == true) {
      /**
       * Create File
       */
      isPathExists(clientPath);
      createFile(
        clientPath,
        firstLetterCaptalize(jpaName) + `.js`,
        injectedContent
      );
    }
    // console.log(Object.keys(reactImports).length);
  });
};

module.exports = clientViewGenerator;
