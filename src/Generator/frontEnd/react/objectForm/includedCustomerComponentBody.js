const { checkDisability, checkVisibility } = require("./objectFormCommons");
const { ExpandedConfig } = require('../../../FeedGlobalConfigWithSuger');

const componentBody = (col, mode, spcae) => {

  const disabled = checkDisability(col, mode)
  const visibled = checkVisibility(col)

  const backendUrl = ExpandedConfig.getBackendURI()

  return {
    import: {
      react: { default: { React: '' }, nonDefault: { useState: '' } },
      '../../UIComponent/includedCustomer/IncludedCustomer': { default: {}, nonDefault: { IncludedCustomer: '' } },
      '../../../auth': { default: {}, nonDefault: { fakeAuthProvider: '' } },
      // '../../../util/makeRequest': { default: {}, nonDefault: { sendRequest: '' } },
      // 'react-router-dom': { default: {}, nonDefault: { useParams: '' } },
    },
    state: { type: 'Integer', default: 0 },
    method: ``,
    body: `
${spcae}<IncludedCustomer
${spcae}  id="${col['title']}"
${spcae}  name="${col['title']}"
${spcae}  value = {state['${col['title']}'] ? state['${col['title']}'] : ''}
${spcae}  lable={lables.${col['title']}}
${spcae}  tafCode={(typeof fakeAuthProvider.activeProfile.tafCode != 'undefined' && fakeAuthProvider.activeProfile.tafCode != '') ? fakeAuthProvider.activeProfile.tafCode : ''}
${spcae}  // onChangeData={onChangeData}
${spcae}  onChangeData={newState => {
${spcae}    setState(prevState => ({
${spcae}      ...prevState,
${spcae}      ...newState.target
${spcae}    }));
${spcae}  }}
${spcae}  disabled={${disabled}}
${spcae}  isVisible={${visibled}}
${spcae}  mode={'${mode}'}
${spcae}/>`,
  };
};
module.exports = componentBody;
