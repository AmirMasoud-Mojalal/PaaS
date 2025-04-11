const { firstLetterCaptalize } = require('../../../../util');
const { getStoredProcedureByStoredProcedureName } = require('../../../../DomainConfig');
const { ExpandedConfig } = require('../../../../FeedGlobalConfigWithSuger');
const { checkVisibility, checkDisability, extractSystemObject, hasFakeAuthProvider, objectlist, uniqueObjectlist, extractNumberFormat } = require('../objectFormCommons');
const { evaluateRule, evaluateExpression } = require('../../../../RuleEngine/ruleManager');


const componentBody = (col, mode, space) => {
  let name = ``
  let key = ``
  let value = ``

  let paramName = ``
  let isVisible = ``
  let disabled = ``

  const backendUrl = ExpandedConfig.getBackendURI()
  let dataListOptions = ``
  let importObject = {}

  importObject['react'] = { default: { React: '' }, nonDefault: { useState: '', useEffect: '' } },
    importObject['../../UIComponent/text/TextWithObjectDataSource'] = { default: {}, nonDefault: { TextWithObjectDataSource: '' } },

    Object.keys(col['value']['schema']['dataSourceProvider']).map((item) => {

      let inParametersObject = {}
      let outParametersObject = {}
      let inParameterString = ``
      let outParameterStringArray = []
      let end = ``
      let method = ''
      let dsProvider = ``

      let numFormat = ``
      let locale = ``
      let options = ``

      disabled = checkDisability(col, mode)
      isVisible = checkVisibility(col)

      // if (col.title == 'accNo') {
      //   console.log(col.title + ' ' + mode);
      //   console.log(Object.keys(col['value']['schema']).includes('disabled'));
      //   console.log(typeof col['value']['schema']['disabled'] == "boolean");
      //   console.log(col['value']['schema']['disabled']);
      // }
      numFormat = extractNumberFormat(col)
      // console.log(numFormat);
      if (numFormat != undefined) {
        // console.log((`'${JSON.parse(numFormat)['locale']}'`));
        // console.log( {...JSON.parse(numFormat)['options']} );
        locale = `${JSON.parse(numFormat)['locale']}`
        options = JSON.stringify({ ...JSON.parse(numFormat)['options'] })
      } else {
        console.log(col['title'] + 'has no NumberFormat!');
      }


      // if (Object.keys(col['value']['schema']).includes('dataSourceProvider')) {

      if (item == 'storedProcedure' && Object.keys(col['value']['schema']['dataSourceProvider']['storedProcedure']).length > 0) {

        dataListOptions += `
${space}<TextWithObjectDataSource
${space}  id="${col['title']}"
${space}  name="${col['title']}"
${space}  value={state.${col['title']} != undefined ? state.${col['title']}.toLocaleString('${locale}',${options}) : ''}
${space}  onChange={onChangeData} 

${space}  placeholder="${col['title']}"
${space}  lable={lables.${col['title']}}
${space}  disabled={${disabled}}
${space}  autocomplete="off"
${space}  isVisible={${isVisible}}

${space}  dataSourceProvider={Object.keys(${col['title']}).length > 0 ? ${col['title']}['zonedesc'] : ''}
${space}/>`

        // name = col['value']['schema']['dataSourceProvider']['storedProcedure']['name'];
        // key = col['value']['schema']['dataSourceProvider']['storedProcedure']['key'];
        // value = col['value']['schema']['dataSourceProvider']['storedProcedure']['value']

        // //  ******************* IN parameters *******************
        // Object.keys(col['value']['schema']['dataSourceProvider']['storedProcedure']['parameters']).length > 0 &&
        //   Object.keys(col['value']['schema']['dataSourceProvider']['storedProcedure']['parameters']).map(parameter => {
        //     if (col['value']['schema']['dataSourceProvider']['storedProcedure']['parameters'][parameter]['direction'] == 'IN') {
        //       inParametersObject[parameter] = col['value']['schema']['dataSourceProvider']['storedProcedure']['parameters'][parameter]['valueProvider']
        //     }
        //   })

        // Object.keys(inParametersObject).length > 0
        //   ?
        //   method = 'POST'
        //   :
        //   method = 'GET'

        // Object.keys(inParametersObject).length > 0 && Object.keys(inParametersObject).map((inParameter, length) => {
        //   end = length < Object.keys(inParametersObject).length - 1 ? ',' : ''
        //   inParameterString = `\"${inParameter}\": state['${inParametersObject[inParameter]}']${end}`
        // })

        // //  ******************* OUT parameters  ******************* 
        // const targetStoredProcedure = getStoredProcedureByStoredProcedureName(name)
        // Object.keys(targetStoredProcedure['parameters']).map(parameter => {
        //   if (targetStoredProcedure['parameters'][parameter]['direction'] == 'OUT') {
        //     outParametersObject[parameter] = targetStoredProcedure['parameters'][parameter]
        //   }
        // })
        // Object.keys(outParametersObject).length > 0 && Object.keys(outParametersObject).map((outParameter, length) => {
        //   end = length < Object.keys(outParametersObject).length - 1 ? ',' : ''
        //   outParameterStringArray.push(`'${outParameter}'`)
        // })
        // // console.log(JSON.stringify(outParametersObject));
        // // console.log(outParameterStringArray);

        // // console.log(inParameterString);

        // let func = `async () => {
        //             const response = await sendRequest(
        //               "${backendUrl}/${name}s?page=0&size=2",
        //               "${method}",
        //               { ${inParameterString} }
        //             );
        //             return response.data
        //           }`

        // dataListOptions += (
        //   `
        //       <TextWithObjectDataSource
        //         dataSourceType="storedProcedure"
        //         id="${col['title']}"
        //         name="${col['title']}"
        //         dataSourceProvider={${func}}
        //         // onChangeDataSourceProviderOutput={onChangeDataSourceProviderOutput}
        //         onChangeDataSourceProviderOutput={(e) => {
        //           set${firstLetterCaptalize(col['title'])}OnBlurOutput(e)
        //         }}
        //         // outParameterStringArray={[\${outParameterStringArray.toString()}]}
        //         onChangeStatus={onChangeData} 
        //         placeholder="${col['title']}"
        //         lable={lables.${col['title']}}
        //         disabled={${mode == 'view' ? true : false}}
        //         autocomplete="off"
        //         isVisible={${Object.keys(col['value']['schema']).includes('isVisible') ? col['value']['schema']['isVisible'] : true}}
        //       />`
        // )
      } else if (item == 'restService' && Object.keys(col['value']['schema']['dataSourceProvider']['restService']).length > 0) {
        ''
      } else if (item == 'systemObject' && Object.keys(col['value']['schema']['dataSourceProvider']['systemObject']).length > 0) {

        const systemObject = extractSystemObject(col)

        if (hasFakeAuthProvider(systemObject)) {
          // importObject[systemObject.split('+')[0].split('.')[0]] = ''
          importObject['../../../auth'] = { default: {}, nonDefault: { fakeAuthProvider: '' } }

          dsProvider = `fakeAuthProvider && Object.keys(fakeAuthProvider).length > 0 ? ${systemObject} : ''`
        } else {
          dsProvider = `systemObject && Object.keys(${systemObject}).length > 0 ? ${systemObject} : ''`
        }


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
        // console.log(uniqueObjLst);
        // console.log(objectString);

        // if (col['value']['schema']['type'] == 'String' || col['value']['schema']['type'] == 'Integer' || col['value']['schema']['type'] == 'Short') {
        //   abc = `state.${col['title']} != undefined ? state.${col['title']} : ''`
        // } else if (col['value']['schema']['type'] == 'BigDecimal') {
        //   abc = `state.${col['title']} != undefined ? state.${col['title']}.toLocaleString() : ''`
        // }

        //  worked
        // if (systemObject.split('+')[0].split('.')[0] == 'fakeAuthProvider') {
        //   importObject['../../../auth'] = { default: 'fakeAuthProvider', nonDefualt: '' }
        // }
        // if (systemObject.substring(systemObject.split('+')[0].length + 2).split('.')[0] == 'fakeAuthProvider') {
        //   importObject['../../../auth'] = { default: 'fakeAuthProvider', nonDefualt: '' }
        // }

        dataListOptions +=
          `
${space}<TextWithObjectDataSource
${space}  id="${col['title']}"
${space}  name="${col['title']}"
// \${space}  value={state.\${col['title']} != undefined ? state.\${col['title']}.toLocaleString() : ''}
// \${space}  value={state.\${col['title']} != undefined ? state.\${col['title']}.toLocaleString('\${locale}',\${options}) : ''}
${space} value={typeof state['${col['title']}'] != 'undefined' && state['${col['title']}'] != '' ? state['${col['title']}'] : ''}
${space}  onChange={onChangeData} 
${space}
${space}  placeholder="${col['title']}"
${space}  lable={lables.${col['title']}}
${space}  disabled={${disabled}}
${space}  autocomplete="off"
${space}  isVisible={${isVisible}}
${space}
${space}  dataSourceProvider={${objectString} ? ${systemObject} : ''}
${space}/>
`
      }
      // console.log(importObject);
      // console.log(...importObject);
      // }
    });
  return {
    import: {
      // react: { default: { React: '' }, nonDefault: { useState: '', useEffect: '' } },
      // '../../UIComponent/textWithObjectDataSource': { default: {}, nonDefault: { TextWithObjectDataSource: '' } },

      ...importObject
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
