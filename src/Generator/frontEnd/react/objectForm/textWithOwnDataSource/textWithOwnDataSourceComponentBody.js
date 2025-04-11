const { firstLetterCaptalize } = require('../../../../util');

const componentBody = (col, mode) => {
  let name = ``
  let key = ``
  let value = ``

  let paramName = ``
  // console.log(col['value']['schema']['dataSourceProvider']);
  let dataListOptions = ``
  Object.keys(col['value']['schema']['dataSourceProvider']).map((key) => {

    // console.log(col['value']['schema']['dataSourceProvider']['storedProcedure']['name']);

    key == 'storedProcedure' && Object.keys(col['value']['schema']['dataSourceProvider']['storedProcedure']).length > 0
      ?
      (
        name = col['value']['schema']['dataSourceProvider']['storedProcedure']['name'],
        key = col['value']['schema']['dataSourceProvider']['storedProcedure']['key'],
        value = col['value']['schema']['dataSourceProvider']['storedProcedure']['value'],
        // paramName = 
        dataListOptions += (
          `
            <TexWithOwnDataSource
              dataSourceType="storedProcedure"
              // dataSource={filtered\${firstLetterCaptalize(col['title'])}DataSource}
              // dataSource={}
              id="${col['title']}"
              name="${col['title']}"
              // value={\${col['title']}['\${value}']}
              dsKey={'${key}'}
              dsValue={'${value}'}
              onChangeStatus={onChangeStatus} 
              placeholder="${col['title']}"
              lable={lables.${col['title']}}
              disabled={${mode == 'view' ? true : false}}
              autocomplete="off"
              isVisible={${Object.keys(col['value']['schema']).includes('isVisible') ? col['value']['schema']['isVisible'] : true}}
            />`
        ))
      :
      ''
  })
  // Object.keys(col['value']['schema']['dataSourceProvider']).map((key) => {
  //   // console.log(col['value']['schema']['dataSourceProvider']['storedProcedure']['name']);

  //   key == 'storedProcedure' && Object.keys(col['value']['schema']['dataSourceProvider']['storedProcedure']).length > 0
  //     ?
  //     (
  //       name = col['value']['schema']['dataSourceProvider']['storedProcedure']['name'],
  //       key = col['value']['schema']['dataSourceProvider']['storedProcedure']['key'],
  //       value = col['value']['schema']['dataSourceProvider']['storedProcedure']['value'],
  //       dataListOptions += (
  //         `
  //           <TexWithDataSource
  //             dataSourceType="storedProcedure"
  //             dataSource={filtered${firstLetterCaptalize(col['title'])}DataSource}
  //             id="${col['title']}"
  //             name="${col['title']}"
  //             value={${col['title']}['${value}']}
  //             dsKey={'${key}'}
  //             dsValue={'${value}'}
  //             onChangeStatus={onChangeStatus} 
  //             placeholder="${col['title']}"
  //             lable={lables.${col['title']}}
  //             disabled={${mode == 'view' ? true : false}}
  //             autocomplete="off"
  //             isVisible={${Object.keys(col['value']['schema']).includes('isVisible') ? col['value']['schema']['isVisible'] : true}}
  //           />`
  //       ))
  //     : key == 'restService' && Object.keys(col['value']['schema']['dataSourceProvider']['restService']).length > 0
  //       ?
  //       (
  //         name = col['value']['schema']['dataSourceProvider']['restService']['name'],
  //         key = col['value']['schema']['dataSourceProvider']['restService']['key'],
  //         value = col['value']['schema']['dataSourceProvider']['restService']['value'],
  //         dataListOptions += (
  //           `
  //           <TexWithDataSource
  //             dataSourceType="storedProcedure"
  //             dataSource={filtered${firstLetterCaptalize(col['title'])}DataSource}
  //             id="${col['title']}"
  //             name="${col['title']}"
  //             value={${col['title']}['${value}']}
  //             dsKey={'${key}'}
  //             dsValue={'${value}'}
  //             onChangeStatus={onChangeStatus} 
  //             placeholder="${col['title']}"
  //             lable={lables.${col['title']}}
  //             disabled={${mode == 'view' ? true : false}}
  //             autocomplete="off"
  //             isVisible={${Object.keys(col['value']['schema']).includes('isVisible') ? col['value']['schema']['isVisible'] : true}}
  //           />`
  //         ))
  //       :
  //       key == 'systemObject' && Object.keys(col['value']['schema']['dataSourceProvider']['systemObject']).length > 0
  //         ?
  //         (
  //           Object.keys(col['value']['schema']['dataSourceProvider']['systemObject']).includes('fakeAuthProvider') && Object.keys(col['value']['schema']['dataSourceProvider']['systemObject']['fakeAuthProvider']).length > 0 ? (
  //             Object.keys(col['value']['schema']['dataSourceProvider']['systemObject']['fakeAuthProvider']).map((variable, index) => {
  //               value += `fakeAuthProvider.${variable}${index + 1 < Object.keys(col['value']['schema']['dataSourceProvider']['systemObject']['fakeAuthProvider']).length ? ' + ' : ''}`
  //             })
  //           ) : '',
  //           dataListOptions += (`
  //           <Text 
  //             id="${col['title']}" 
  //             name="${col['title']}" 
  //             value={\`\${state.${col['title']} ? state.${col['title']} : ''}\`} 
  //             onChangeData={onChangeData}
  //             placeholder="${col['title']}" 
  //             lable={lables.${col['title']}} 
  //             disabled={${mode == 'view' ? true : false}} 
  //             autocomplete="off"
  //             isVisible={${Object.keys(col['value']['schema']).includes('isVisible') ? col['value']['schema']['isVisible'] : true}} 
  //           />`
  //           ))
  //         :
  //         ''

  // })
  return {
    import: {
      react: { default: { React: '' }, nonDefault: { useState: '' } },
      '../../UIComponent/text/TexWithOwnDataSource': { default: {}, nonDefault: { TexWithOwnDataSource: '' } },
      '../../UIComponent/text/Text': { default: {}, nonDefault: { Text: '' } },
    },
    state: { type: String, default: `` },
    method: {},
    body: `${dataListOptions}`
  };
};
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
