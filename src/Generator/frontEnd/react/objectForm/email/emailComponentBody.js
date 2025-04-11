const { checkVisibility, checkEnablity, checkDisability } = require("../objectFormCommons");

const componentBody = (col, mode, space) => {

    const values = ``

    const visible = checkVisibility(col)
    const disable = checkDisability(col, mode)

    return {
        import: {
            react: { default: { React: '' }, nonDefault: { useState: '' } },
            '../../UIComponent/email/Email': { default: {}, nonDefault: { Email: '' } },
            // '../../UIComponent/DatePicker/shared/localeUtils': { default: { utils: '' }, nonDefault: {} },
            uuid: {
                default: {},
                nonDefault: { 'v4 as uuid': '' },
            },
        },
        state: { type: 'Integer', default: 0 },
        method: ``,
        body: `
${space}<Email
${space}  id="${col['title']}" 
${space}  name="${col['title']}" 
${space}  type="Email" 
${space}  value={\`\${state.${col['title']} ? state.${col['title']} : ''}\`}
${space}  onChangeData={onChangeData}
${space}  onBlur={onChangeData}
${space}  placeholder="${col['title']}" 
${space}  lable={lables.${col['title']}} 
${space}  disabled={${disable}} 
${space}  autocomplete="off"
${space}  isVisible={${visible}}
${space}  mode={"${mode}"}
${space}  isEmail={true}
${space}/>`,
    };
};
module.exports = componentBody;