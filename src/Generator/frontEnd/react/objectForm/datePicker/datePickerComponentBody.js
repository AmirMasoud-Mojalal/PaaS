const { evaluate } = require("../../../../RuleEngine/ruleManager");
const { checkVisibility } = require("../objectFormCommons");

const componentBody = (col, mode, space) => {
  // isVisible =

  //     Object.keys(col['value']['schema']).includes('isVisible')
  //       ?
  //       Object.keys(col['value']['schema']['isVisible']).includes('rule')
  //         ?
  //         evaluate(col['value']['schema']['isVisible']['rule'])
  //         :
  //         col['value']['schema']['isVisible']
  //       :
  //       true
  const hasMaximumDate = Object.keys(col['value']['schema']).includes('maximumDate') ? true : false;
  const visible = checkVisibility(col, mode, space)
  // const maximumDate = col['value']['schema']['maximumDate'] == 'todayDate' ? `utils('fa').getToday()` : `{}`;
  let maximumDate;
  if (Object.keys(col['value']['schema']).includes('maximumDate')) {
    if (col['value']['schema']['maximumDate'] == 'todayDate') {
      maximumDate = `utils('fa').getToday()`
    } else {
      maximumDate = col['value']['schema']['maximumDate']
    }
  } else {
    maximumDate = "''"
  }

  let shouldHighlightToday = false
  if (Object.keys(col['value']['schema']).includes('shouldHighlightToday')) {
    if (col['value']['schema']['shouldHighlightToday'] == true) {
      shouldHighlightToday = true
    } else if (col['value']['schema']['shouldHighlightToday'] == false) {
      shouldHighlightToday = false
    }
  }
  // if(col['title'] == 'date'){
  // console.log(Object.keys(col['value']['schema']).includes('maximumDate'));
  // console.log(maximumDate)
  // }

  return {
    import: {
      react: { default: { React: '' }, nonDefault: { useState: '' } },
      // 'react-bootstrap': {
      //   default: {},
      //   nonDefault: { Form: '', Col: '' },
      // },
      // uuid: {
      //   default: {},
      //   nonDefault: { 'v4 as uuid': '' },
      // },
      // '../fieldset': {
      //   default: { Fieldset: '' },
      //   nonDefault: {},
      // },
      // '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css': {
      //   default: {},
      //   nonDefault: {},
      // },
      // '@hassanmojab/react-modern-calendar-datepicker': {
      //   default: { DatePicker: {} },
      //   nonDefault: {},
      // },
      '../../UIComponent/DatePicker/DatePicker': { default: {}, nonDefault: { DatePicker: '' } },
      // '../../util/Date': { default: {}, nonDefault: { getTodayDate: '' } },
      '../../UIComponent/DatePicker/shared/localeUtils': { default: { utils: '' }, nonDefault: {} },
    },
    state: { type: 'Integer', default: 0 },
    method: ``,
    body: `
${space}<DatePicker
${space}  id="${col['title']}"
${space}  name="${col['title']}"
${space}  locale="fa"
${space}  value={\`\${state.${col['title']} ? state.${col['title']} : ''}\`}
${space}  onChangeData={onChangeData}
${space}  lable={lables.${col['title']}}
${space}  calendarPopperPosition="${col['value']['schema']['position']}"
${space}  disabled={${mode == 'view' ? true : false}}
${space}  isVisible={${visible}}
${space}  maximumDate={${maximumDate}}
${space}  shouldHighlightToday={${shouldHighlightToday}}
${space}/>`,
  };
};
module.exports = componentBody;



{/* <DatePicker
id="${col['title']}"
locale="fa"
// value={\`\${state.${col['title']} ? state.${col['title']} : ''}\`}
// onChange={onChangeData}
value={{ day: 4, month: 10, year: 1402 }}
onChange={(e) => {
  console.log(e);
}}
inputPlaceholder={lables.selectDate}
shouldHighlightWeekends
calendarPopperPosition="left"
/> */}