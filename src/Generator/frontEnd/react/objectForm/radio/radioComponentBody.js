const { checkVisibility, checkDisability, checkGridSize, checkFontSize } = require("../objectFormCommons");

const componentBody = (col, mode, space) => {

  let visible = ``;
  let disable = ``

  visible = checkVisibility(col)
  disable = checkDisability(col, mode)
  const gridSize = checkGridSize(col['value']['schema']['colSize'])
  const fontSize = checkFontSize(col['value']['schema']['fontSize'])

  return {
    import: {
      react: {
        default: { React: '' },
        nonDefault: { useState: '' },
      },
      '../../UIComponent/radio/Radio': { default: {}, nonDefault: { Radio: '' } },
    },
    state: { type: 'Integer', default: 0 },
    method: ``,
    body: `
${space}<Radio
${space}  lable={lables.${col['title']}}
${space}  dataArray={${JSON.stringify(col['value']['schema']['enum'])}}
${space}  name="${col['title']}"
${space}  //value={state['${col['title']}'] ? state['${col['title']}'] : ''}
${space}  value={state['${col['title']}']}
${space}  // onChangeStatus={onChangeStatus}
${space}  clazz={"${gridSize + " " + fontSize}"}
${space}  onChangeStatus={onChangeData}
${space}  disabled={${disable}}
${space}  isVisible={${visible}}
${space}  inline={${col['value']['schema']['inline']}}
${space}/>`,
  };
};
module.exports = componentBody;