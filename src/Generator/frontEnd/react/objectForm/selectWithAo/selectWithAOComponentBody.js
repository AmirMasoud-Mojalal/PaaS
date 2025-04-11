const { checkVisibility, checkEnablity, checkDisability } = require("../objectFormCommons");

const componentBody = (col, mode) => {

  const visible = checkVisibility(col)
  const disable = checkDisability(col, mode)

  let selectBody = ``;
  col['value']['schema']['enum'].map((item, index) => {
    selectBody += `<option value="${index}">${item}</option>
                `;
  })

  let datasource = col['value']['schema']['enum'].map(enumObject => {
    return {
      key: enumObject['key'],
      value: enumObject['value'],
      enabled: checkEnablity(enumObject)
    }
  })

  // console.log(datasource)

  let dataSourceText = datasource.map((item, index) => {
  const startSpace = index == 0 ? `` : ` `;
  return (`${startSpace}${item['enabled']} && { key: ${item['key']}, value: '${item['value']}' }`)
  })

  let onChangeDataText = ``
  // col['value']['schema']['stateKey'].map((item, index) => {
  // const end = index + 1 < col['value']['schema']['stateKey'].length ? `,` : ``;

  // if (item != '') onChangeDataText += `${item} : e.target.value ${end}`
  // })
  if (Object.keys(col['value']['schema']).includes('stateKey')) {
    if (typeof col['value']['schema']['stateKey'][0] != 'undefined' && col['value']['schema']['stateKey'][0] != '') onChangeDataText += `${col['value']['schema']['stateKey'][0]}: e.target.value,`
    if (typeof col['value']['schema']['stateKey'][1] != 'undefined' && col['value']['schema']['stateKey'][1] != '') onChangeDataText += `
    ${col['value']['schema']['stateKey'][1]} : e.target.value,`
  }
  // console.log(col['value']['schema']['stateKey'])
  // console.log(col['value']['schema']['stateKey'].length)
  // console.log(onChangeDataText)


  return {
    import: {
      react: { default: { React: '' }, nonDefault: { useState: '' } },
      '../../UIComponent/select/SelectWithAO': { default: {}, nonDefault: { SelectWithAO: '' } },
      uuid: {
        default: {},
        nonDefault: { 'v4 as uuid': '' },
      },
    },
    state: { type: 'Integer', default: 0 },
    method: ``,
    body: `
            <SelectWithAO 
              id="${col['title']}" 
              name="${col['title']}" 
              previousValue={state.${col['title']}}
              onSelect={onChangeData}
              placeholder="${col['title']}" 
              lable={lables.${col['title']}} 
              autocomplete="off"
              dataSource={[${dataSourceText}]}
              isVisible={${visible}}
              disabled={${disable}} 
            />`,
  };
};
module.exports = componentBody;

{/* <div className="form-floating">
<select className="form-select" id="${col['title']}" name="${col['title']}" aria-label="Floating label select example" onChange={onChangeStatus}>
  <option defaultValue>انتخاب کنید</option>
  ${selectBody}
</select>
<label htmlFor="${col['title']}">{lables.${col['title']}}</label>
</div> */}