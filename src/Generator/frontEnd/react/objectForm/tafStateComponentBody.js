const { checkVisibility, checkEnablity } = require("./objectFormCommons");

const componentBody = (col, mode, space) => {

  const values = ``
  let datasource = col['value']['schema']['enum'].map(enumObject => {
    // return  JSON.stringify(checkEnablity(enumObject))
    // console.log(enumObject)
    // console.log(checkEnablity(enumObject));
    // return JSON.stringify(checkEnablity(enumObject))
    // return JSON.stringify({
    return {
      key: enumObject['key'],
      value: enumObject['value'],
      enabled: checkEnablity(enumObject)
    }
  })

  const visible = checkVisibility(col)

  return {
    import: {
      react: { default: { React: '' }, nonDefault: { useState: '' } },
      '../../UIComponent/EntityField/TafState': { default: {}, nonDefault: { TafState: '' } },
      '../../UIComponent/DatePicker/shared/localeUtils': { default: { utils: '' }, nonDefault: {} },
      uuid: {
        default: {},
        nonDefault: { 'v4 as uuid': '' },
      },
    },
    state: { type: 'Integer', default: 0 },
    method: ``,
    body: `
${space}<TafState
${space}    id="${col['title']}" 
${space}    name="${col['title']}" 
${space}    value={state.${col['title']}} 
${space}    onSelect={(e) => {
${space}      setState({
${space}        ...state,
${space}        ${col['value']['schema']['stateKey'][0]}: e.target.key,
${space}        ${col['value']['schema']['stateKey'][1]}: e.target.value,
${space}        date: e.target.date
${space}      })
${space}    }}
${space}    placeholder="${col['title']}" 
${space}    lable={lables.${col['title']}} 
${space}    disabled={${mode == 'view' ? true : false}} 
${space}    autocomplete="off"
${space}    dataSource={[${datasource.map(item => {
      return (`${item['enabled']} && { key: ${item['key']}, value: '${item['value']}' }`)
      // item['enabled']
    })}]}
${space}    isVisible={${visible}}
${space}    mode={"${mode}"}
${space}/>`,
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