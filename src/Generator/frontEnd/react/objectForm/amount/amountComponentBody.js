const { checkVisibility, checkEnablity, checkDisability, checkFormattedNumberType } = require("../objectFormCommons");

const componentBody = (col, mode, space) => {

    const values = ``

    const visible = checkVisibility(col)
    const disable = checkDisability(col, mode)
    const ttype = checkFormattedNumberType(col, mode)
    
    return {
        import: {
            react: { default: { React: '' }, nonDefault: { useState: '' } },
            '../../UIComponent/amount/Amount': { default: {}, nonDefault: { Amount: '' } },
            uuid: {
                default: {},
                nonDefault: { 'v4 as uuid': '' },
            },
        },
        state: { type: 'Integer', default: 0 },
        method: ``,
        body: `
${space}<Amount
${space}  id="${col['title']}" 
${space}  name="${col['title']}" 
${space}  type="${ttype}" 
${space}  value={\`\${state.${col['title']} ? state.${col['title']} : ''}\`}
${space}  onChangeData={onChangeData}
${space}  onBlur={onChangeData}
${space}  placeholder="${col['title']}" 
${space}  lable={lables.${col['title']}} 
${space}  disabled={${disable}} 
${space}  autocomplete="off"
${space}  isVisible={${visible}}
${space}  mode={"${mode}"}
${space}  isAmount={true}
${space}/>`,
    };
};
module.exports = componentBody;