const { checkVisibility, checkDisability, checkGridSize, checkFontSize, checkEnablity } = require("../objectFormCommons");

const componentBody = (col, mode, space) => {

  const visible = checkVisibility(col)
  const disable = checkDisability(col, mode)

  const gridSize = checkGridSize(col['value']['schema']['colSize'])
  const fontSize = checkFontSize(col['value']['schema']['fontSize'])

  let datasource = col['value']['schema']['enum'].map(enumObject => {
    return {
      key: enumObject['key'],
      value: enumObject['value'],
      enabled: checkEnablity(enumObject)
    }
  })

  let dataSourceText = datasource.map((item, index) => {
    const startSpace = index == 0 ? `` : ` `;
    return (`${startSpace}${item['enabled']} && { key: ${item['key']}, value: '${item['value']}' }`)
  })

  let onChangeDataText = ``
  if (Object.keys(col['value']['schema']).includes('stateKey')) {
    if (typeof col['value']['schema']['stateKey'][0] != 'undefined' && col['value']['schema']['stateKey'][0] != '') onChangeDataText += `${col['value']['schema']['stateKey'][0]}: e.target.key,`
    if (typeof col['value']['schema']['stateKey'][1] != 'undefined' && col['value']['schema']['stateKey'][1] != '') onChangeDataText += `
    ${col['value']['schema']['stateKey'][1]} : e.target.value,`
  }

  return {
    import: {
      react: {
        default: { React: '' },
        nonDefault: { useState: '' },
      },
      '../../UIComponent/radio/RadioWithAO': { default: {}, nonDefault: { RadioWithAO: '' } },
    },
    state: { type: 'Integer', default: 0 },
    method: ``,
    body: `
${space}<RadioWithAO
${space}  id="${col['title']}"
${space}  name="${col['title']}"
${space}  lable={lables.${col['title']}}
${space}  previousValue={state['${col['title']}']}
${space}  // onChangeStatus={onChangeStatus}
${space}  clazz={"${gridSize + " " + fontSize}"}
${space}  onCheck={onChangeData}
${space}  datasoruce={[${dataSourceText}]}
${space}  inline={${col['value']['schema']['inline']}}
${space}  isVisible={${visible}}
${space}  disabled={${disable}}
${space}/>`,
  };
};
module.exports = componentBody;