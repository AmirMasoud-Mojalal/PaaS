const { checkVisibility, checkDisability, extractSystemObject, uniqueObjectlist } = require("../objectFormCommons");

const componentBody = (col, mode, space) => {
  let selectBody = ``;
  col['value']['schema']['enum'].map((item, index) => {
    selectBody += `<option value="${index}">${item}</option>
                `;
  })

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

  let disabled = ``
  let visible = ``
  let dataListOptions = ``

  disabled = checkDisability(col, mode)
  visible = checkVisibility(col)

  Object.keys(col['value']['schema']['dataSourceProvider']).map((item) => {
    if (item == 'storedProcedure' && Object.keys(col['value']['schema']['dataSourceProvider']['storedProcedure']).length > 0) {
    } else if (item == 'restService' && Object.keys(col['value']['schema']['dataSourceProvider']['restService']).length > 0) {
    } else if (item == 'systemObject' && Object.keys(col['value']['schema']['dataSourceProvider']['systemObject']).length > 0) {
      const systemObject = extractSystemObject(col)

      let end = ``
      let objectString = ``
      const uniqueObjLst = uniqueObjectlist(systemObject)
      Object.keys(uniqueObjLst).map((item, index) => {
        end =
          index < Object.keys(uniqueObjLst).length - 1
            ? ` && `
            : ``;
        objectString += `${item} != undefined && Object.keys(${item}).length > 0 ${end}`
      })

      dataListOptions = `
${space}<SelectWithObjectDataSource
${space}  id="${col['title']}" 
${space}  name="${col['title']}" 
// \${space}  value={\`\${state.\${col['title']} ? state.\${col['title']} : ''}\`} 
${space}  value={state.${col['title']} != undefined ? state.${col['title']} : ''}
${space}  onSelect={onChangeData}
${space}
${space}  placeholder="${col['title']}" 
${space}  lable={lables.${col['title']}} 
${space}  autocomplete="off"
${space}  disabled={${disabled}} 
${space}  isVisible={${visible}}
${space}
${space}  enumDataSource={${JSON.stringify(col['value']['schema']['enum'])}}
${space}  objectDataSource={${objectString} ? ${systemObject} : ''}
${space}/>`
    }

  })

  return {
    import: {
      react: { default: { React: '' }, nonDefault: { useState: '' } },
      '../../UIComponent/select/SelectWithObjectDataSource': { default: {}, nonDefault: { SelectWithObjectDataSource: '' } },
      uuid: {
        default: {},
        nonDefault: { 'v4 as uuid': '' },
      },
    },
    state: { type: 'Integer', default: 0 },
    method: ``,
    body: `${dataListOptions}`,
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