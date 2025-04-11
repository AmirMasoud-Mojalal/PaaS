const { checkVisibility, checkEnablity } = require("./objectFormCommons");

const componentBody = (col, mode, space) => {

  const values = ``
  // let datasource = col['value']['schema']['enum'].map(enumObject => {
  //   // return  JSON.stringify(checkEnablity(enumObject))
  //   // console.log(enumObject)
  //   // console.log(checkEnablity(enumObject));
  //   // return JSON.stringify(checkEnablity(enumObject))
  //   // return JSON.stringify({
  //   return {
  //     key: enumObject['key'],
  //     value: enumObject['value'],
  //     enabled: checkEnablity(enumObject)
  //   }
  // })

  const visible = checkVisibility(col)

  return {
    import: {
      react: { default: { React: '' }, nonDefault: { useState: '' } },
      '../../UIComponent/EntityField/SmsUserSelection': { default: {}, nonDefault: { SmsUserSelection: '' } },
      '../../UIComponent/DatePicker/shared/localeUtils': { default: { utils: '' }, nonDefault: {} },
    },
    state: { type: 'Integer', default: 0 },
    method: ``,
    body: `
${space}<SmsUserSelection
${space}    id="${col['title']}" 
${space}    name="${col['title']}" 
${space}    value={\`\${state.${col['title']} ? state.${col['title']} : ''}\`} 
${space}    onChangeData={onChangeData}
${space}    onSelectItem={(e) => {
${space}      console.log(e);
${space}      if (Object.keys(e).length > 0) {
${space}        setState({
${space}        ...state,
${space}        ...e
${space}      })
${space}      console.log('Yes');
${space}    
${space}     } else {
${space}      console.log('NOO');
${space}     }
${space}     //  setState({
${space}     //    ...state,
${space}     //   configDate: utils('fa').getToday().year + '/' + utils('fa').getToday().month + '/' + utils('fa').getToday().day
${space}     //   \${col['value']['schema']['stateKey'][0]}: e.target.index,
${space}     //   \${col['value']['schema']['stateKey'][1]}: e.target.value,
${space}     //   date: utils('fa').getToday().year + '/' + utils('fa').getToday().month + '/' + utils('fa').getToday().day
${space}     // })
${space}    }}
${space}    placeholder="${col['title']}" 
${space}    lable={lables.${col['title']}} 
${space}    disabled={${mode == 'view' ? true : false}} 
${space}    autocomplete="off"
${space}    // dataSource={\${JSON.stringify(col['value']['schema']['enum'])}}
${space}    // dataSource={[\${JSON.stringify(datasource)}].map(item => (state.tafState == "" || state.tafState != 0) && item)}
${space}    // dataSource={[\${datasource.map(item => {
      //  return (\`\${item['enabled']} && { key: \${item['key']}, value: '\${item['value']}' }\`)
      // item['enabled']
    // })}]}
${space}    isVisible={${visible}}
${space}    mode={'${mode}'}
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