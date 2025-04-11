const { checkVisibility } = require("../objectFormCommons");

const componentBody = (col, mode) => {
  let selectBody = ``;
  col['value']['schema']['enum'].map((item, index) => {
    selectBody += `<option value="${index}">${item}</option>
                `;
  })

  const visible = checkVisibility(col)

  return {
    import: {
      react: { default: { React: '' }, nonDefault: { useState: '' } },
      '../../UIComponent/select/Select': { default: {}, nonDefault: { Select: '' } },
      uuid: {
        default: {},
        nonDefault: { 'v4 as uuid': '' },
      },
    },
    state: { type: 'Integer', default: 0 },
    method: ``,
    body: `
            <Select 
              id="${col['title']}" 
              name="${col['title']}" 
              value={\`\${state.${col['title']} ? state.${col['title']} : ''}\`} 
              onChangeStatus={onChangeStatus}
              placeholder="${col['title']}" 
              lable={lables.${col['title']}} 
              disabled={${mode == 'view' ? true : false}} 
              autocomplete="off"
              dataSource={${JSON.stringify(col['value']['schema']['enum'])}}
              isVisible={${visible}}
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