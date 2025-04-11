const { checkDisability, checkVisibility } = require("../objectFormCommons");

const componentBody = (col, mode) => {

  const disabled = checkDisability(col, mode)
  const visibled = checkVisibility(col)

  return {
    import: {
      react: { default: { React: '' }, nonDefault: { useState: '' } },
      '../../UIComponent/switch/Switch': { default: {}, nonDefault: { Switch: '' } },
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
    },
    state: { type: 'Integer', default: 0 },
    method: ``,
    body: `
          <Switch
            id="${col['title']}"
            name="${col['title']}"
            value = {state['${col['title']}'] ? state['${col['title']}'] : ''}
            onChangeStatus={onChangeData}
            lable={lables.${col['title']}}
            disabled={${disabled}}
            isVisible={${visibled}}
          />`,
  };
};
module.exports = componentBody;


{/* <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="${col['title']}" name="${col['title']}"  onChange={onChangeStatus}
              disabled={false}
              />
              <label className="form-check-label" htmlFor="${col['title']}">{lables.${col['title']}}</label>
            </div> */}