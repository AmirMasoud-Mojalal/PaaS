const { checkVisibility, checkEnablity } = require("../objectFormCommons");

const componentBody = (col, mode, space) => {

  const values = ``

  const visible = checkVisibility(col)

  return {
    import: {
      react: { default: { React: '' }, nonDefault: { useState: '' } },
      '../../UIComponent/reports/customerRialResourceAvgRpt': { default: {}, nonDefault: { CustomerRialResourceAvgRpt: '' } },
      // '../../UIComponent/DatePicker/shared/localeUtils': { default: { utils: '' }, nonDefault: {} },
      uuid: {
        default: {},
        nonDefault: { 'v4 as uuid': '' },
      },
    },
    state: { type: 'Integer', default: 0 },
    method: ``,
    body: `
${space}<CustomerRialResourceAvgRpt
${space}  id="${col['title']}" 
${space}  name="${col['title']}" 
${space}  value={\`\${state.${col['title']} ? state.${col['title']} : ''}\`}
${space}  tafCode={(typeof fakeAuthProvider.activeProfile.tafCode != 'undefined' && fakeAuthProvider.activeProfile.tafCode != '') ? fakeAuthProvider.activeProfile.tafCode : ''}
${space}  onSelectItem={(e) => {
${space}    setState({
${space}      ...state,
${space}      seri: e.target.seri,
${space}      date: e.target.date,
${space}      // date: utils('fa').getToday().year + '/' + utils('fa').getToday().month + '/' + utils('fa').getToday().day
${space}    })
${space}  }}
${space}  data={data}
${space}  placeholder="${col['title']}" 
${space}  lable={lables.${col['title']}} 
${space}  disabled={${mode == 'view' ? true : false}} 
${space}  autocomplete="off"
${space}  isVisible={${visible}}
${space}  mode={"${mode}"}
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