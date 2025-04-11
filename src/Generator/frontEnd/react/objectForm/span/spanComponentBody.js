const { all } = require("axios");
const { checkVisibility, checkDisability, checkGridSize, checkFontSize, checkEnablity, getClazz } = require("../objectFormCommons");

const componentBody = (col, mode, space) => {

  let visible = ``;
  let disable = ``

  visible = checkVisibility(col)
  disable = checkDisability(col, mode)
  // const gridSize = checkGridSize(col['value']['schema']['colSize'])
  // const fontSize = checkFontSize(col['value']['schema']['fontSize'])
  // const clazz = gridSize + " " + fontSize
  const clazz = getClazz(col)
  
  let enablity = `typeof state.sendMethod != \'undefined\' && state.sendMethod != \'\' && `
  let enumItems = ``
  let allDataArray = ``
  let dataArray = ``

  col['value']['schema']['enum'].map((enumItem, index) => {
    const end = index < col['value']['schema']['enum'].length - 1 ? ':' : ' : \'\' '
    const endBr = index < col['value']['schema']['enum'].length - 1 ? `", <br key={${100 + index}}/>, "` : ''
    const endEnablity = index < col['value']['schema']['enum'].length - 1 ? ' && ' : ''
    // console.log(enumItem);
    // console.log(checkEnablity(enumItem) + " && " + enumItem['value'] );
    // console.log("[" + enumItem['value'] + "]");
    enablity += checkEnablity(enumItem) + endEnablity
    enumItems += enumItem['value'] + endBr

    dataArray += 'typeof state.sendMethod != \'undefined\' && state.sendMethod != \'\' &&  ' + checkEnablity(enumItem) + " ? [\"" + enumItem['value'] + "\"] " + end
    // console.log(checkEnablity(enumItem['enabled']));
    // da += enumItem['value']
  })
  // console.log(enablity);
  allDataArray = enablity + " ? [\"" + enumItems + "\"] : " + dataArray;

  // console.log(dataArray);
  // console.log(col['title']);
  // if (col['title'] == 'description') {
  // console.log(visible);
  // }

  return {
    import: {
      react: {
        default: { React: '' },
        nonDefault: { useState: '' },
      },
      '../../UIComponent/span/Span': { default: {}, nonDefault: { Span: '' } },
    },
    state: { type: 'Integer', default: 0 },
    method: ``,
    body: `
${space}<Span
${space}  lable={lables.${col['title']}}
${space}  stateRef={state.sendMethod}
${space}  // dataArray={\${JSON.stringify(col['value']['schema']['enum'])}}
${space}  dataArray={${allDataArray}}
${space}  name="${col['title']}"
${space}  value={state['${col['title']}'] ? state['${col['title']}'] : ''}
${space}  clazz={"${clazz}"}
${space}  // onChangeStatus={onChangeStatus}
${space}  // onChangeStatus={onChangeData}
${space}  disabled={${disable}}
${space}  isVisible={${visible}}
${space}  inline={${col['value']['schema']['inline']}}
${space}/>`,
  };
};
module.exports = componentBody;