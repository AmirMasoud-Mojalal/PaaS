const { evaluateRule } = require('../../../../RuleEngine/ruleManager');
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
  const backendUrl = ExpandedConfig.getBackendURI()

  disabled = checkDisability(col, mode)

  if (Object.keys(col['value']['schema']).includes('dataSourceProvider')) {
    Object.keys(col['value']['schema']['dataSourceProvider']).map((dsProvider) => {
      if (dsProvider == 'storedProcedure' && Object.keys(col['value']['schema']['dataSourceProvider']['storedProcedure']).length > 0) {
        name = col['value']['schema']['dataSourceProvider']['storedProcedure']['name']
        key = col['value']['schema']['dataSourceProvider']['storedProcedure']['key']
        value = col['value']['schema']['dataSourceProvider']['storedProcedure']['value']

        isVisible = checkVisibility(col)

        let func = checkOnBlur(col, '              ')
        dataListOptions += (
          `
${space}<TextWithResultSetDataSourceAndOnBlurEvent
${space}  id="${col['title']}"
${space}  name="${col['title']}"
${space}  value={state['${col['title']}']}
${space}  //  set state
${space}  onChangeStatus={onChangeData} 

${space}  placeholder="${col['title']}"
${space}  lable={lables.${col['title']}}
${space}  disabled={${disabled}}
${space}  autocomplete="off"
${space}  isVisible={${isVisible}}
${space}  //  input result set filled on form load
${space}  resultSet={${col['title']}DataSource}
${space}  dsKey={'${key}'}
${space}  dsValue={'${value}'}
${space}  //  set selected row of the result set
${space}  onResultSetSelected={set${firstLetterCaptalize(col['title'])}}
${space}  //  define function to be called on Blur event
${space}  dataSourceProvider={${func}}
${space}  //  result of onBlur event function call
${space}  onChangeDataSourceProviderOutput={(e) => {
${space}    // set${firstLetterCaptalize(col['title'])}OnBlurOutput(e)
${space}    setBranchDataSource(e)
${space}  }}
${space}/>
`
        )
      }
      //  else if (dsProvider == 'restService' && Object.keys(col['value']['schema']['dataSourceProvider']['restService']).length > 0) {
      //   isVisible = checkVisibility(col)

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
      //         // isVisible={\${Object.keys(col['value']['schema']).includes('isVisible') ? col['value']['schema']['isVisible'] : true}}
      //         isVisible={${isVisible}}
      //       />`
      //     )
      // } else if (dsProvider == 'systemObject' && Object.keys(col['value']['schema']['dataSourceProvider']['systemObject']).length > 0) {
      //   isVisible = checkVisibility(col)

      //   Object.keys(col['value']['schema']['dataSourceProvider']['systemObject']).includes('fakeAuthProvider')
      //     &&
      //     Object.keys(col['value']['schema']['dataSourceProvider']['systemObject']['fakeAuthProvider']).length > 0
      //     ?
      //     (
      //       Object.keys(col['value']['schema']['dataSourceProvider']['systemObject']['fakeAuthProvider']).map((variable, index) => {
      //         value += `fakeAuthProvider.${variable}${index + 1 < Object.keys(col['value']['schema']['dataSourceProvider']['systemObject']['fakeAuthProvider']).length ? ' + ' : ''}`
      //       })
      //     )
      //     :
      //     '',
      //     dataListOptions += (`
      //   <Text 
      //     id="${col['title']}" 
      //     name="${col['title']}" 
      //     value={\`\${state.${col['title']} ? state.${col['title']} : ''}\`} 
      //     onChangeData={onChangeData}
      //     placeholder="${col['title']}" 
      //     lable={lables.${col['title']}} 
      //     disabled={${mode == 'view' ? true : disabled}} 
      //     autocomplete="off"
      //     // isVisible={\${Object.keys(col['value']['schema']).includes('isVisible') ? col['value']['schema']['isVisible'] : true}} 
      //     isVisible={${isVisible}}
      //   />`
      //     )
      // } else if (dsProvider == 'systemObject' && Object.keys(col['value']['schema']['dataSourceProvider']['systemObject']).length > 0)
      //  {}
    })
  }


  return {
    import: {
      react: { default: { React: '' }, nonDefault: { useState: '' } },
      '../../UIComponent/text/TextWithResultSetDataSourceAndOnBlurEvent': { default: {}, nonDefault: { TextWithResultSetDataSourceAndOnBlurEvent: '' } },
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
