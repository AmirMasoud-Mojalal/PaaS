const { checkVisibility, checkDisability, checkGridSize, checkFontSize } = require("../objectFormCommons");

const componentBody = (col, mode, space) => {

  let visible = ``
  let disable = ``
  let gridSize = ``
  let fontSize = ``


  visible = checkVisibility(col)
  disable = checkDisability(col, mode)
  // const clazz = getClazz(col)

  gridSize = checkGridSize(col['value']['schema']['colSize'])
  fontSize = checkFontSize(col['value']['schema']['fontSize'])

  return {
    import: {
      react: { default: { React: '' }, nonDefault: { useState: '' } },
      '../../UIComponent/check/Check': { default: {}, nonDefault: { Check: '' } },
    },
    state: { type: 'Integer', default: 0 },
    tit: col['value']['schema']['enum'],
    method: ``,
    body: `
${space}<Check
${space}  id="${col['title']}"
${space}  name="${col['title']}"
${space}  lable={lables.${col['title']}}
${space}  dataSource={${JSON.stringify(col['value']['schema']['enum'])}}
${space}  value = {state['${col['title']}'] ? state['${col['title']}'] : ''}
${space}  onChangeData ={onChangeData}
${space}  inline={${col['value']['schema']['inline']}}
${space}  disabled={${disable}}
${space}  isVisible={${visible}}
${space}  gridSize={"${gridSize}"}
${space}  fontSize={"${fontSize}"}
${space}/>`
  };
};

module.exports = componentBody;