const { extractRule, evaluate } = require("../../../../RuleEngine/ruleManager");
const { checkDisability, checkVisibility } = require("../objectFormCommons");

const componentBody = (col, mode, space) => {
  let name = ``
  let key = ``
  let value = ``
  let dataListOptions = ``

  let disable = ``
  let visible = ``

  visible = checkVisibility(col)
  disable = checkDisability(col, mode)

  if (Object.keys(col['value']['schema']).includes('dataSourceProvider')) {
    Object.keys(col['value']['schema']['dataSourceProvider']).map((key) => {
      //  onLoader & onForm callPlace storedProcedures
      if (
        key == 'storedProcedure'
        && Object.keys(col['value']['schema']['dataSourceProvider']['storedProcedure']).length > 0
        && col['value']['schema']['dataSourceProvider']['storedProcedure']['callPlace'] !== 'onBlur'
      ) {
        name = col['value']['schema']['dataSourceProvider']['storedProcedure']['name'],
          key = col['value']['schema']['dataSourceProvider']['storedProcedure']['key'],
          value = col['value']['schema']['dataSourceProvider']['storedProcedure']['value'],

          // isVisible = `${Object.keys(col['value']['schema']).includes('isVisible') ? col['value']['schema']['isVisible'] : true}`,
          isVisible =
          evaluate(
            Object.keys(col['value']['schema']).includes('isVisible')
              &&
              Object.keys(col['value']['schema']['isVisible']).includes('rule')
              ?
              col['value']['schema']['isVisible']['rule']
              :
              ''
          ),

          dataListOptions += (
            `
            <Text 
              // Text-1 with StoredProcedure DataSourceProvider & onBlur callPlace
              id="${col['title']}" 
              name="${col['title']}" 
              value={${col['title']}['${value}']} 
              onChangeData={onChangeData}
              placeholder="${col['title']}" 
              lable={lables.${col['title']}} 
              disabled={${disable}} 
              autocomplete="off" 
              // isVisible={\${Object.keys(col['value']['schema']).includes('isVisible') ? col['value']['schema']['isVisible'] : true}}
              isVisible={${visible}}
            />`
            // `
            // <div className="form-floating mb-3 p-0 border-0 border-bottom border-warning">
            //   <input
            //     type="text"
            //     className="form-control border-0"
            //     id="${col['title']}"
            //     name="${col['title']}"
            //     // value={\`\${state.\${col['title']} ? state.\${col['title']}.\${value} : ''}\`}
            //     value={${col['title']}['${value}']}
            //     onChange={onChangeData}
            //     placeholder="${col['title']}"
            //     disable={false}
            //     autoComplete="off"
            //   />
            //   <label htmlFor="${col['title']}">{lables.${col['title']}}</label>
            // </div>`
          )
      } else if (
        //  onBlur callPlace
        key == 'storedProcedure'
        && Object.keys(col['value']['schema']['dataSourceProvider']['storedProcedure']).length > 0
        && col['value']['schema']['dataSourceProvider']['storedProcedure']['callPlace'] == 'onBlur'
      ) {
        name = col['value']['schema']['dataSourceProvider']['storedProcedure']['name'],
          key = col['value']['schema']['dataSourceProvider']['storedProcedure']['key'],
          value = col['value']['schema']['dataSourceProvider']['storedProcedure']['value'],

          dataListOptions += (
            `
              <Text 
                // Text-2 with StoredProcedure DataSourceProvider & onBlur callPlace
                id="${col['title']}" 
                name="${col['title']}" 
                value={state['${col['title']}']} 
                onChangeData={onChangeData}
                onBlur={onBlur}
                placeholder="${col['title']}" 
                lable={lables.${col['title']}} 
                disabled={${disable}} 
                autocomplete="off" 
                // isVisible={\${Object.keys(col['value']['schema']).includes('isVisible') ? col['value']['schema']['isVisible'] : true}}
                isVisible={${visible}}
              />`
          )
      }
      //  restService callPlace storedProcedures
      // key == 'restService' && Object.keys(col['value']['schema']['dataSourceProvider']['restService']).length > 0
      //   ?
      //   (
      //     name = col['value']['schema']['dataSourceProvider']['restService']['name'],
      //     key = col['value']['schema']['dataSourceProvider']['restService']['key'],
      //     value = col['value']['schema']['dataSourceProvider']['restService']['value'],
      //     dataListOptions += (
      //       `
      //     <Text 
      //       // Text with restService DataSourceProvider
      //       id="${col['title']}" 
      //       name="${col['title']}" 
      //       value={${col['title']}['${value}']} 
      //       onChangeData={onChangeData}
      //       placeholder="${col['title']}" 
      //       lable={lables.${col['title']}} 
      //       // disabled={\${isDisabled}} 
      //       disabled={${mode == 'view' ? true : false}} 
      //       autocomplete="off" 
      //       isVisible={${Object.keys(col['value']['schema']).includes('isVisible') ? col['value']['schema']['isVisible'] : true}}
      //     />`
      //       //   `
      //       // <div className="form-floating mb-3 p-0 border-0 border-bottom border-warning">
      //       //   <input
      //       //     type="text"
      //       //     className="form-control border-0"
      //       //     id="${col['title']}"
      //       //     name="${col['title']}"
      //       //     value={\`\${state.${col['title']} ? state.${col['title']}.${value} : ''}\`}
      //       //     onChange={onChangeData}
      //       //     placeholder="${col['title']}"
      //       //     disabled={false}
      //       //     autoComplete="off"
      //       //   />
      //       //   <label htmlFor="${col['title']}">{lables.${col['title']}}</label>`
      //     ))
      //   :
      ''
    })
  }

  let minValue = 0
  let maxValue = 0
  if (['String'].includes(col['value']['schema']['type'])) {
    if (Object.keys(col['value']['schema']).includes('size')) {
      minValue = col['value']['schema']['size']['minValue']
      maxValue = col['value']['schema']['size']['maxValue']
    } else {
      minValue = 0
      maxValue = 254
    }
  } else if (['Integer', 'BigDecimal', 'long', 'Short'].includes(col['value']['schema']['type'])) {
    if (Object.keys(col['value']['schema']).includes('size')) {
      minValue = col['value']['schema']['size']['minValue']
      maxValue = col['value']['schema']['size']['maxValue']
    } else {
      minValue = Number.MIN_SAFE_INTEGER
      maxValue = Number.MAX_SAFE_INTEGER
    }
  }
  // if (col['title'] == 'title') {
  //   console.log(col['title'] + ' minValue: ' + minValue + ' maxValue: ' + maxValue);
  //   console.log();
  // }

  dataListOptions +=
    `
${space}<Text 
${space}  // Text-1 with StoredProcedure DataSourceProvider & onBlur callPlace
${space}  id="${col['title']}" 
${space}  name="${col['title']}" 
${space}  type="${col['value']['schema']['type']}" 
${space}  value={state.${col['title']} ? state.${col['title']} : ''} 
${space}  onChangeData={onChangeData}
${space}  onBlur={onChangeData}
${space}  placeholder="${col['title']}" 
${space}  lable={lables.${col['title']}} 
${space}  disabled={${disable}} 
${space}  autocomplete="off" 
${space}  isVisible={${visible}}
${space}  minValue={${minValue}}
${space}  maxValue={${maxValue}}
${space}/>`

  // else { }

  // Object.keys(col['value']['schema']).includes('dataSourceProvider')
  //   ?
  //   (
  //     // col['title'] == 'fixAmount' && console.log(col['value']['schema']['isVisible']),
  //     // isVisible =

  //     // Object.keys(col['value']['schema']).includes('isVisible')
  //     //   ?
  //     //   Object.keys(col['value']['schema']['isVisible']).includes('rule')
  //     //     ?
  //     //     evaluate(col['value']['schema']['isVisible']['rule'])
  //     //     :
  //     //     col['value']['schema']['isVisible']
  //     //   :
  //     //   true
  //     // ,

  //     dataListOptions += (
  //       `
  //           <Text 
  //             // Text without DataSourceProvider 
  //             id="${col['title']}" 
  //             name="${col['title']}" 
  //             value={\`\${state.${col['title']} ? state.${col['title']} : ''}\`} 
  //             onChangeData={onChangeData}
  //             placeholder="${col['title']}" 
  //             lable={lables.${col['title']}} 
  //             // disabled={\${mode == 'view' ? true : false}} 
  //             disabled={${disable}}
  //             autocomplete="off" 
  //             // isVisible={\${Object.keys(col['value']['schema']).includes('isVisible') ? col['value']['schema']['isVisible'] : true}}
  //             isVisible={${visible}}
  //           />`
  //       // `
  //       //     <div className="form-floating mb-3 p-0 border-0 border-bottom border-warning">
  //       //       <input
  //       //         type="text"
  //       //         className="form-control border-0"
  //       //         id="${col['title']}"
  //       //         name="${col['title']}"
  //       //         value={\`\${state.${col['title']} ? state.${col['title']} : ''}\`}
  //       //         onChange={onChangeData}
  //       //         placeholder="${col['title']}"
  //       //         disabled={false}
  //       //         autoComplete="off"
  //       //       />
  //       //       <label htmlFor="${col['title']}">{lables.${col['title']}}</label>
  //       //     </div>`
  //     ))
  //   :
  //   ''
  return {
    import: {
      react: { default: { React: '' }, nonDefault: { useState: '' } },
      '../../UIComponent/text/Text': { default: {}, nonDefault: { Text: '' } },
    },
    state: { type: String, default: `` },
    method: {},
    body: `${dataListOptions}`,
  };
};
module.exports = componentBody;