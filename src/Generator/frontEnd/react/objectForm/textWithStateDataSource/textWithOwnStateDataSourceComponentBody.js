const { extractRule } = require('../../../../RuleEngine/ruleManager');
const { firstLetterCaptalize } = require('../../../../util');
const { checkVisibility } = require('../objectFormCommons');

const componentBody = (col, mode) => {
  let name = ``
  let key = ``
  let value = ``
  let isVisible = ``
  // console.log(col['value']['schema']['dataSourceProvider']);
  let dataListOptions = ``
  Object.keys(col['value']['schema']['dataSourceProvider']).map((dsProvider) => {
    // console.log(col['value']['schema']['dataSourceProvider']['storedProcedure']['name']);

    if (dsProvider == 'storedProcedure' && Object.keys(col['value']['schema']['dataSourceProvider']['storedProcedure']).length > 0) {
      name = col['value']['schema']['dataSourceProvider']['storedProcedure']['name'],
        key = col['value']['schema']['dataSourceProvider']['storedProcedure']['key'],
        value = col['value']['schema']['dataSourceProvider']['storedProcedure']['value'],
        dataListOptions +=
        `
            <TexWithStateDataSource
              dataSourceType="storedProcedure"
              dataSource={filtered${firstLetterCaptalize(col['title'])}DataSource}
              id="${col['title']}"
              name="${col['title']}"
              value={${col['title']}['${value}']}
              dsKey={'${key}'}
              dsValue={'${value}'}
              onChangeStatus={onChangeStatus} 
              placeholder="${col['title']}"
              lable={lables.${col['title']}}
              disabled={${mode == 'view' ? true : false}}
              autocomplete="off"
              isVisible={${Object.keys(col['value']['schema']).includes('isVisible') ? col['value']['schema']['isVisible'] : true}}
            />`

    } else if (dsProvider == 'restService' && Object.keys(col['value']['schema']['dataSourceProvider']['restService']).length > 0) {
      name = col['value']['schema']['dataSourceProvider']['restService']['name'],
        key = col['value']['schema']['dataSourceProvider']['restService']['key'],
        value = col['value']['schema']['dataSourceProvider']['restService']['value'],
        dataListOptions +=
        `
            <TexWithDataSource
              dataSourceType="storedProcedure"
              dataSource={filtered${firstLetterCaptalize(col['title'])}DataSource}
              id="${col['title']}"
              name="${col['title']}"
              value={${col['title']}['${value}']}
              dsKey={'${key}'}
              dsValue={'${value}'}
              onChangeStatus={onChangeStatus} 
              placeholder="${col['title']}"
              lable={lables.${col['title']}}
              disabled={${mode == 'view' ? true : false}}
              autocomplete="off"
              isVisible={${Object.keys(col['value']['schema']).includes('isVisible') ? col['value']['schema']['isVisible'] : true}}
            />`
    } else
      if (dsProvider == 'systemObject' && Object.keys(col['value']['schema']['dataSourceProvider']['systemObject']).length > 0) {
        isVisible = checkVisibility(col)

        // console.log(col['title']);
        // console.log(checkVisibility(col));

        if (
          Object.keys(col['value']['schema']['dataSourceProvider']['systemObject']).includes('rule')
          &&
          Object.keys(col['value']['schema']['dataSourceProvider']['systemObject']['rule']).length > 0
        ) {
          // col['value']['schema']['dataSourceProvider']['systemObject']['var'].map((variable, index) => {
          // value += `dataSourceProviderOutput['${variable}'] && dataSourceProviderOutput['${variable}']['${col['value']['schema']['dataSourceProvider']['systemObject']['equal']['form'][variable]}'] ? dataSourceProviderOutput['${variable}']['${col['value']['schema']['dataSourceProvider']['systemObject']['equal']['form'][variable]}'] : ''`
          // value += (index < Object.keys(col['value']['schema']['dataSourceProvider']['systemObject']['form']).length - 1) ? ' + ' : ''
          // extractRule(col['value']['schema']['dataSourceProvider']['systemObject']['rule'])
          value += extractRule(col['value']['schema']['dataSourceProvider']['systemObject']['rule']);
          // value += col['value']['schema']['dataSourceProvider']['systemObject']['rule'][0]
          dataListOptions += `
              <Text 
                id="${col['title']}" 
                name="${col['title']}" 
                // value={\`\${\${value} ? \${value} : ''}\`} 
                value={${value} ? ${value} : ''}
                onChangeData={onChangeData}
                placeholder="${col['title']}" 
                lable={lables.${col['title']}} 
                disabled={${mode == 'view' ? true : false}} 
                autocomplete="off"
                // isVisible={\${Object.keys(col['value']['schema']).includes('isVisible') ? col['value']['schema']['isVisible'] : true}} 
                isVisible={${isVisible}}
              />`
          // })
        } else if (
          Object.keys(col['value']['schema']['dataSourceProvider']['systemObject']).includes('equal')
          &&
          Object.keys(col['value']['schema']['dataSourceProvider']['systemObject']['equal']).length > 0
        ) {
          Object.keys(col['value']['schema']['dataSourceProvider']['systemObject']['equal']['form']).map((variable, index) => {
            value += `dataSourceProviderOutput['${variable}'] && dataSourceProviderOutput['${variable}']['${col['value']['schema']['dataSourceProvider']['systemObject']['equal']['form'][variable]}'] ? dataSourceProviderOutput['${variable}']['${col['value']['schema']['dataSourceProvider']['systemObject']['equal']['form'][variable]}'] : ''`
            // value += (index < Object.keys(col['value']['schema']['dataSourceProvider']['systemObject']['form']).length - 1) ? ' + ' : ''

            dataListOptions += `
              <Text 
                id="${col['title']}" 
                name="${col['title']}" 
                // value={\`\${\${value} ? \${value} : ''}\`} 
                value={${value}}
                onChangeData={onChangeData}
                placeholder="${col['title']}" 
                lable={lables.${col['title']}} 
                disabled={${mode == 'view' ? true : false}} 
                autocomplete="off"
                isVisible={${Object.keys(col['value']['schema']).includes('isVisible') ? col['value']['schema']['isVisible'] : true}} 
              />`
          })
        } else if (
          Object.keys(col['value']['schema']['dataSourceProvider']['systemObject']).includes('fakeAuthProvider')
          &&
          Object.keys(col['value']['schema']['dataSourceProvider']['systemObject']['fakeAuthProvider']).length > 0
        ) {
          Object.keys(col['value']['schema']['dataSourceProvider']['systemObject']['fakeAuthProvider']).map((variable, index) => {
            value += `fakeAuthProvider.${variable}${index + 1 < Object.keys(col['value']['schema']['dataSourceProvider']['systemObject']['fakeAuthProvider']).length ? ' + ' : ''}`
          })
          dataListOptions += (`
            <Text 
              id="${col['title']}" 
              name="${col['title']}" 
              value={\`\${state.${col['title']} ? state.${col['title']} : ''}\`} 
              onChangeData={onChangeData}
              placeholder="${col['title']}" 
              lable={lables.${col['title']}} 
              disabled={${mode == 'view' ? true : false}} 
              autocomplete="off"
              isVisible={${Object.keys(col['value']['schema']).includes('isVisible') ? col['value']['schema']['isVisible'] : true}} 
            />`
          )
        } else if (
          Object.keys(col['value']['schema']['dataSourceProvider']['systemObject']).includes('form')
          &&
          Object.keys(col['value']['schema']['dataSourceProvider']['systemObject']['form']).length > 0
        ) {
          Object.keys(col['value']['schema']['dataSourceProvider']['systemObject']['form']).map((variable, index) => {
            value += `dataSourceProviderOutput['${variable}'] && dataSourceProviderOutput['${variable}']['${col['value']['schema']['dataSourceProvider']['systemObject']['form'][variable]}'] ? dataSourceProviderOutput['${variable}']['${col['value']['schema']['dataSourceProvider']['systemObject']['form'][variable]}'] : ''`
            // value += (index < Object.keys(col['value']['schema']['dataSourceProvider']['systemObject']['form']).length - 1) ? ' + ' : ''

            dataListOptions += `
              <Text 
                id="${col['title']}" 
                name="${col['title']}" 
                // value={\`\${\${value} ? \${value} : ''}\`} 
                value={${value}}
                onChangeData={onChangeData}
                placeholder="${col['title']}" 
                lable={lables.${col['title']}} 
                disabled={${mode == 'view' ? true : false}} 
                autocomplete="off"
                isVisible={${Object.keys(col['value']['schema']).includes('isVisible') ? col['value']['schema']['isVisible'] : true}} 
              />`
          })
        }
      }
  })

  return {
    import: {
      react: { default: { React: '' }, nonDefault: { useState: '' } },
      '../../UIComponent/TexWithDataSource': { default: {}, nonDefault: { TexWithDataSource: '' } },
      '../../UIComponent/Text': { default: {}, nonDefault: { Text: '' } },
    },
    state: { type: String, default: `` },
    method: {},
    body: `${dataListOptions}`
  };
}
module.exports = componentBody;

// console.log(
//   componentBody({
//     id: 'albc',
//     isDisabled: true,
//     message: 'salam',
//   })
// );




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
  {Object.keys(filtered${firstLetterCaptalize(col['title'])}DataSource).map((dsProvider) => {
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
