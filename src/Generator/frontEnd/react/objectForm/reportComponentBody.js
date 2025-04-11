const { checkVisibility, checkEnablity } = require("./objectFormCommons");

const componentBody = (col, mode, space) => {

  let name = ``
  let key = ``
  let value = ``
  let isVisible = ``
  let dataListOptions = ``
  let disabled = ``
  let resultSet = ``
  let pageSize = 0
  // const backendUrl = ExpandedConfig.getBackendURI()
  // const onRowClickPath = col['value']['schema']['onRowClickRoutePath']
  // == 'dashboardMasterRpt'
  const showBackIcon = col['value']['schema']['showBackIcon'] == true
  // disabled = checkDisability(col, mode)
  // isVisible = checkVisibility(col)

  if (Object.keys(col['value']['schema']).includes('dataSourceProvider')) {
    Object.keys(col['value']['schema']['dataSourceProvider']).map((dsProvider) => {

      if (dsProvider == 'storedProcedure' && Object.keys(col['value']['schema']['dataSourceProvider']['storedProcedure']).length > 0) {
        name = col['value']['schema']['dataSourceProvider']['storedProcedure']['name']
        key = col['value']['schema']['dataSourceProvider']['storedProcedure']['key']
        value = col['value']['schema']['dataSourceProvider']['storedProcedure']['value']
        // isVisible = `${Object.keys(col['value']['schema']).includes('isVisible') ? col['value']['schema']['isVisible'] : true}`,
        isVisible = checkVisibility(col)
      }
    })
  }

  if (Object.keys(col['value']['schema']).includes('pageSize')) {
    pageSize = col['value']['schema']['pageSize']
  } else {
    pageSize = 10
  }
  const values = ``
  // let datasource = col['value']['schema']['enum'].map(enumObject => {
  //   // return  JSON.stringify(checkEnablity(enumObject))
  //   // console.log(enumObject)
  //   // console.log(checkEnablity(enumObject));
  //   // return JSON.stringify(checkEnablity(enumObject))
  //   // return JSON.stringify({
  //   return {
  //     key: enumObject['key'],
  //     value: enumObject['value'],
  //     enabled: checkEnablity(enumObject)
  //   }
  // })

  const visible = checkVisibility(col)

  return {
    import: {
      react: { default: { React: '' }, nonDefault: { useState: '' } },
      '../../UIComponent/report/Report': { default: {}, nonDefault: { Report: '' } },
      '../../UIComponent/DatePicker/shared/localeUtils': { default: { utils: '' }, nonDefault: {} },
      uuid: {
        default: {},
        nonDefault: { 'v4 as uuid': '' },
      },
    },
    state: { type: 'Integer', default: 0 },
    method: ``,
    body: `
${space}<Report
${space}  id="${col['title']}"
${space}  name="${col['title']}"
${space}  data={data}
${space}  filterData={filterData}
${space}  onRowClick={handleRowClick}
${space}  disabled={${mode == 'view' ? true : false}}
${space}  isVisible={${visible}}
${space}  mode={"${mode}"}
${space}  // pageSize={${pageSize}}
${space}  showBackIcon={${showBackIcon}}
${space}/>`,
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




// ${space}  value={\`\${state.${col['title']} ? state.${col['title']} : ''}\`}
// ${space}  onSelectItem={(e) => {
// ${space}    setState({
// ${space}      ...state,
// ${space}      seri: e.target.seri,
// ${space}      date: e.target.date,
// ${space}      // ${col['value']['schema']['stateKey'][0]}: e.target.index,
// ${space}      // ${col['value']['schema']['stateKey'][1]}: e.target.value,
// ${space}      // date: utils('fa').getToday().year + '/' + utils('fa').getToday().month + '/' + utils('fa').getToday().day
// ${space}    })
// ${space}  }}
// ${space}  placeholder="${col['title']}"
// ${space}  lable={lables.${col['title']}}
// ${space}  autocomplete="off"
// ${space}  //dataSource={\${JSON.stringify(col['value']['schema']['enum'])}}
// ${space}  // \${space}    dataSource={[\${JSON.stringify(datasource)}].map(item => (state.tafState == "" || state.tafState != 0) && item)}
// ${space}    dataSource={[${datasource.map(item => {
//       return (`${item['enabled']} && { key: ${item['key']}, value: '${item['value']}' }`)
//       // item['enabled']
//     })}]}
