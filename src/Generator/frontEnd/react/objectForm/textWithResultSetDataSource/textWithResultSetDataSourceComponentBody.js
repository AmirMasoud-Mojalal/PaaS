const { evaluate, evaluateExpression } = require('../../../../RuleEngine/ruleManager');
const { firstLetterCaptalize } = require('../../../../util');
const { checkVisibility, checkOnBlur, checkDisability } = require('../objectFormCommons');
const { ExpandedConfig } = require('../../../../FeedGlobalConfigWithSuger');

const componentBody = (col, mode, space) => {
  let name = ``
  let key = ``
  let value = ``
  let isVisible = ``
  let dataListOptions = ``
  let disabled = ``
  let resultSet = ``
  const backendUrl = ExpandedConfig.getBackendURI()

  disabled = checkDisability(col, mode)
  isVisible = checkVisibility(col)

  if (Object.keys(col['value']['schema']).includes('dataSourceProvider')) {
    Object.keys(col['value']['schema']['dataSourceProvider']).map((dsProvider) => {

      if (dsProvider == 'storedProcedure' && Object.keys(col['value']['schema']['dataSourceProvider']['storedProcedure']).length > 0) {
        name = col['value']['schema']['dataSourceProvider']['storedProcedure']['name']
        key = col['value']['schema']['dataSourceProvider']['storedProcedure']['key']
        value = col['value']['schema']['dataSourceProvider']['storedProcedure']['value']
        // isVisible = `${Object.keys(col['value']['schema']).includes('isVisible') ? col['value']['schema']['isVisible'] : true}`,
        isVisible = checkVisibility(col)
        // evaluate(
        //   Object.keys(col['value']['schema']).includes('isVisible')
        //     &&
        //     Object.keys(col['value']['schema']['isVisible']).includes('rule')
        //     ?
        //     col['value']['schema']['isVisible']['rule']
        //     :
        //     ''
        // ),


        // let func = `async () => {
        //     const response = await sendRequest(
        //       "${backendUrl}/${name}s?page=0&size=2",
        //       "${method}",
        //       { ${inParameterString} }
        //     );
        //     return response.data
        //   }`
        let func = checkOnBlur(col, '              ')
        dataListOptions += (
          `
${space}<TextWithResultSetDataSource
${space}  id="${col['title']}"
${space}  name="${col['title']}"
${space}  value={state['${col['title']}'] ? state['${col['title']}'] : ''}
${space}  onChangeStatus={onChangeData} 

${space}  mode="${mode}"
${space}  placeholder="${col['title']}"
${space}  lable={lables.${col['title']}}
${space}  disabled={${mode == 'view' ? true : disabled}}
${space}  autocomplete="off"
${space}  isVisible={${isVisible}}

${space}  resultSet={${col['title']}DataSource}
${space}  // resultSet={${col['title']}ManagementOnBlurOutput}
${space}  dsKey={'${key}'}
${space}  dsValue={'${value}'}
${space}  onResultSetSelected={set${firstLetterCaptalize(col['title'])}}

${space}  // dataSourceProvider={\${func}}
${space}  // onChangeDataSourceProviderOutput={onChangeDataSourceProviderOutput}
${space}  // onChangeDataSourceProviderOutput={(e) => {
${space}    // set\${firstLetterCaptalize(col['title'])}OnBlurOutput(e)
${space}  // }}
${space}  // dataSource={filtered\${firstLetterCaptalize(col['title'])}DataSource}
${space}/>`
        )
      }
      // else if (dsProvider == 'restService' && Object.keys(col['value']['schema']['dataSourceProvider']['restService']).length > 0) {
      //   name = col['value']['schema']['dataSourceProvider']['restService']['name'],
      //     key = col['value']['schema']['dataSourceProvider']['restService']['key'],
      //     value = col['value']['schema']['dataSourceProvider']['restService']['value'],
      //     dataListOptions += (
      //       `
      //       <TexWithDataSource
      //         dataSourceType="storedProcedure"
      //         dataSource={filtered${firstLetterCaptalize(col['title'])}DataSource}
      //         id="${col['title']}"
      //         name="${col['title']}"
      //         value={${col['title']}['${value}']}
      //         dsKey={'${key}'}
      //         dsValue={'${value}'}
      //         onChangeStatus={onChangeStatus} 
      //         placeholder="${col['title']}"
      //         lable={lables.${col['title']}}
      //         disabled={${mode == 'view' ? true : disabled}}
      //         autocomplete="off"
      //         isVisible={${Object.keys(col['value']['schema']).includes('isVisible') ? col['value']['schema']['isVisible'] : true}}
      //       />`
      //     )
      // } else 
      if (dsProvider == 'systemObject' && Object.keys(col['value']['schema']['dataSourceProvider']['systemObject']).length > 0) {
        // name = col['value']['schema']['dataSourceProvider']['systemObject']['name']
        key = col['value']['schema']['dataSourceProvider']['systemObject']['key']
        value = col['value']['schema']['dataSourceProvider']['systemObject']['value']
        resultSet = evaluateExpression(col['value']['schema']['dataSourceProvider']['systemObject']['objectName']['rule']);

        dataListOptions += (
          `
${space}<TextWithResultSetDataSource
${space}  id="${col['title']}"
${space}  name="${col['title']}"
${space}  value={state['${col['title']}'] ? state['${col['title']}'] : ''}
${space}  onChangeStatus={onChangeData} 

${space}  mode="${mode}"
${space}  placeholder="${col['title']}"
${space}  lable={lables.${col['title']}}
${space}  disabled={${disabled}}
${space}  autocomplete="off"
${space}  isVisible={${isVisible}}

${space}  resultSet={${resultSet}}
${space}  dsKey={'${key}'}
${space}  dsValue={'${value}'}
${space}  onResultSetSelected={set${firstLetterCaptalize(col['title'])}}
${space}/>
`)
        // Object.keys(col['value']['schema']['dataSourceProvider']['systemObject']).includes('fakeAuthProvider')
        //   &&
        //   Object.keys(col['value']['schema']['dataSourceProvider']['systemObject']['fakeAuthProvider']).length > 0
        //   ?
        //   (
        //     Object.keys(col['value']['schema']['dataSourceProvider']['systemObject']['fakeAuthProvider']).map((variable, index) => {
        //       value += `fakeAuthProvider.${variable}${index + 1 < Object.keys(col['value']['schema']['dataSourceProvider']['systemObject']['fakeAuthProvider']).length ? ' + ' : ''}`
        //     })
        //   )
        //   :
        //   '',
        //   dataListOptions += (`
        // <Text 
        //   id="${col['title']}" 
        //   name="${col['title']}" 
        //   value={\`\${state.${col['title']} ? state.${col['title']} : ''}\`} 
        //   onChangeData={onChangeData}
        //   placeholder="${col['title']}" 
        //   lable={lables.${col['title']}} 
        //   disabled={${mode == 'view' ? true : disabled}} 
        //   autocomplete="off"
        //   isVisible={${Object.keys(col['value']['schema']).includes('isVisible') ? col['value']['schema']['isVisible'] : true}} 
        // />`
        //   )
      }
    })
  }



  return {
    import: {
      react: { default: { React: '' }, nonDefault: { useState: '' } },
      '../../UIComponent/text/TextWithResultSetDataSource': { default: {}, nonDefault: { TextWithResultSetDataSource: '' } },
      '../../UIComponent/text/Text': { default: {}, nonDefault: { Text: '' } },
    },
    state: { type: String, default: `` },
    method: {},
    body: `${dataListOptions}`
  };
};
module.exports = componentBody;


{/* <div className="form-floating mb-3 p-0 border-0 border-bottom border-warning">
<input
  type="text"
  className="form-control border-0"
  id="${col['title']}"
  name="${col['title']}"
  value={${col['title']}['${value}']}
  onChange={onChangeStatus}
  placeholder="${col['title']}"
  disabled={false}
  autoComplete="off"
  list="${col['title']}DatalistOptions"
/>
<label htmlFor="${col['title']}">{lables.${col['title']}}</label>
<datalist id="${col['title']}DatalistOptions">
  {Object.keys(filtered${firstLetterCaptalize(col['title'])}DataSource).map((key) => {
    //  3
    return <option 
      key={filtered${firstLetterCaptalize(col['title'])}DataSource[key]['${key}']}
      value={filtered${firstLetterCaptalize(col['title'])}DataSource[key]['${value}']} >
    </option>
  })}
</datalist>
</div> */}










{/* <div className="form-floating mb-3 p-0 border-0 border-bottom border-warning">
              <input
                type="text"
                className="form-control border-0"
                id="${col['title']}"
                name="${col['title']}"
                value={\`\${state.${col['title']} ? state.${col['title']} : ''}\`}
                onChange={() => {
                  setState({
                    ...state, '${col['title']}': ${value}
                  }) 
                }}
                placeholder="${col['title']}"
                disabled={false}
                autoComplete="off"
              />
              <label htmlFor="${col['title']}">{lables.${col['title']}}</label>
            </div> */}
