const { checkDisability, checkVisibility } = require("../objectFormCommons");

const componentBody = (col, mode, space) => {

  let disable = ``
  let visible = ``

  visible = checkVisibility(col)
  disable = checkDisability(col, mode)

  return {
    import: {
      react: {
        default: { React: '' },
        nonDefault: { useState: '' },
      },
      '../../UIComponent/textarea/TextArea': { default: {}, nonDefault: { TextArea: '' } },
    },
    state: { type: 'Integer', default: 0 },
    method: ``,
    body: `
${space}<TextArea
${space}  id="${col['title']}" 
${space}  name="${col['title']}" 
${space}  value={\`\${state.${col['title']} ? state.${col['title']} : ''}\`} 
${space}  onChangeData={onChangeData}
${space}  placeholder="${col['title']}" 
${space}  lable={lables.${col['title']}} 
${space}  disabled={${disable}}
${space}  autocomplete="off"
${space}  numOfLines="${col['value']['schema']['lines']}"
${space}  isVisible={${visible}}
${space}/>`,
  };
};
module.exports = componentBody;

{/* <div className="form-floating">
<textarea className="form-control" 
id="${col['title']}"
name="${col['title']}"
value="state.${col['title']}"
onChange={onChangeData}
disabled={false}
autoComplete="off"
placeholder="Leave a comment here" id="floatingTextarea2" style="height: \`${
  col['value']['schema']['lines'] * 40 + 'px'
}\`"></textarea>
<label htmlFor="${col['title']}">{lables.${col['title']}}</label>
</div> */}
