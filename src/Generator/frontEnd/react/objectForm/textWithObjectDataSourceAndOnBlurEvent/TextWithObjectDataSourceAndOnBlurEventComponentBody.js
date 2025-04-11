const { firstLetterCaptalize } = require('../../../../util');
const { getStoredProcedureByStoredProcedureName } = require('../../../../DomainConfig');
const { ExpandedConfig } = require('../../../../FeedGlobalConfigWithSuger');
const { checkVisibility, checkDisability, extractNumberFormat } = require('../objectFormCommons');

const componentBody = (col, mode, space) => {
  let name = ``
  let key = ``
  let value = ``

  let paramName = ``
  let isVisible = ``
  let disabled = ``

  let maxValue = []
  if (col['value']['schema']['type'] == 'BigDecimal') {
    for (let i = 0; i < col['value']['schema']['precision']; i++) {
      maxValue.push(9)
    }
  }
  maxValue = maxValue.toString().replaceAll(',', '');

  const backendUrl = ExpandedConfig.getBackendURI()
  // console.log(col['value']['schema']['onBlurDataSourceProvider']);
  let dataListOptions = ``
  Object.keys(col['value']['schema']['onBlurDataSourceProvider']).map((item) => {

    // console.log(col['value']['schema']['onBlurDataSourceProvider']['storedProcedure']['name']);
    let inParametersObject = {}
    let outParametersObject = {}
    let inParameterString = ``
    let outParameterStringArray = []
    let end = ``
    let method = ''

    let numFormat = ``
    let locale = ``
    let options = ``

    disabled = checkDisability(col, mode)

    numFormat = extractNumberFormat(col)
    if (numFormat != undefined) {
      locale = `${JSON.parse(numFormat)['locale']}`
      options = JSON.stringify({ ...JSON.parse(numFormat)['options'] })
    } else {
      console.log(col['title'] + 'has no NumberFormat!');
    }

    if (item == 'storedProcedure' && Object.keys(col['value']['schema']['onBlurDataSourceProvider']['storedProcedure']).length > 0) {
      name = col['value']['schema']['onBlurDataSourceProvider']['storedProcedure']['name'];
      key = col['value']['schema']['onBlurDataSourceProvider']['storedProcedure']['key'];
      // value = col['value']['schema']['onBlurDataSourceProvider']['storedProcedure']['value']
      isVisible = checkVisibility(col)

      //  ******************* IN parameters *******************
      Object.keys(col['value']['schema']['onBlurDataSourceProvider']['storedProcedure']['parameters']).length > 0 &&
        Object.keys(col['value']['schema']['onBlurDataSourceProvider']['storedProcedure']['parameters']).map(parameter => {
          if (col['value']['schema']['onBlurDataSourceProvider']['storedProcedure']['parameters'][parameter]['direction'] == 'IN') {
            inParametersObject[parameter] = col['value']['schema']['onBlurDataSourceProvider']['storedProcedure']['parameters'][parameter]['valueProvider']
          }
        })

      Object.keys(inParametersObject).length > 0
        ?
        method = 'POST'
        :
        method = 'GET'

      Object.keys(inParametersObject).length > 0 && Object.keys(inParametersObject).map((inParameter, length) => {
        end = length < Object.keys(inParametersObject).length - 1 ? ',' : ''
        inParameterString = `\"${inParameter}\": state['${inParametersObject[inParameter]}']${end}`
      })

      //  ******************* OUT parameters  ******************* 
      const targetStoredProcedure = getStoredProcedureByStoredProcedureName(name)
      Object.keys(targetStoredProcedure['parameters']).map(parameter => {
        if (targetStoredProcedure['parameters'][parameter]['direction'] == 'OUT') {
          outParametersObject[parameter] = targetStoredProcedure['parameters'][parameter]
        }
      })
      Object.keys(outParametersObject).length > 0 && Object.keys(outParametersObject).map((outParameter, length) => {
        end = length < Object.keys(outParametersObject).length - 1 ? ',' : ''
        outParameterStringArray.push(`'${outParameter}'`)
      })
      // console.log(JSON.stringify(outParametersObject));
      // console.log(outParameterStringArray);

      // console.log(inParameterString);

      let func = `
${space}    async () => {
${space}      const response = await sendRequest(
${space}        "${backendUrl}/${name}s?page=0&size=2",
${space}        "${method}",
${space}        { ${inParameterString} }
${space}      );
${space}      return response.data
${space}    }
${space}  `

      dataListOptions += (
        `
${space}<TextWithObjectDataSourceAndOnBlurEvent
${space}  dataSourceType="storedProcedure"
${space}  id="${col['title']}"
${space}  name="${col['title']}"
${space}  value={state.${col['title']} != undefined ? state.${col['title']}.toLocaleString('${locale}',${options}) : ''}
${space}  maxValue={${maxValue}}

${space}  placeholder="${col['title']}"
${space}  lable={lables.${col['title']}}
${space}  disabled={${disabled}}
${space}  autocomplete="off"
${space}  isVisible={${isVisible}}

${space}  dataSourceProvider={${func}}
${space}  onChangeDataSourceProviderOutput={(e) => {
${space}    set${firstLetterCaptalize(col['title'])}OnBlurOutput(e)
${space}  }}
${space}  onChangeData={onChangeData} 
${space}/>
`
      )
    }
    else { '' }
  })

  // const [dataSourceProviderOutput, setDataSourceProviderOutput] = useState({});
  // const onChangeDataSourceProviderOutput = (name, response) => {
  //   setDataSourceProviderOutput({
  //     ...dataSourceProviderOutput,
  //   [`${name}`]: {
  //     ...response
  //   },
  //   })
  // }

  return {
    import: {
      react: { default: { React: '' }, nonDefault: { useState: '' } },
      '../../UIComponent/text/TextWithObjectDataSourceAndOnBlurEvent': { default: {}, nonDefault: { TextWithObjectDataSourceAndOnBlurEvent: '' } },
      // '../../UIComponent/Text': { default: {}, nonDefault: { Text: '' } },
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
