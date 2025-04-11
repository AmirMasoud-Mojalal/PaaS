const componentBody = (col, mode) => {
    return {
        import: {
            react: {
                default: { React: '' },
                nonDefault: { useState: '' },
            },
            '../../UIComponent/fileUpload/FileUpload': { default: {}, nonDefault: { FileUpload: '' } },
        },
        state: { type: 'String', default: 0 },
        method: ``,
        body: `
              <FileUpload
                id="${col['title']}" 
                name="${col['title']}" 
                value={\`\${state.${col['title']} ? state.${col['title']} : ''}\`} 
                onChangeData={onChangeData}
                placeholder="${col['title']}" 
                lable={lables.${col['title']}} 
                disabled={${mode == 'view' ? true : false}} 
                autocomplete="off"
                isVisible={${Object.keys(col['value']['schema']).includes('isVisible') ? col['value']['schema']['isVisible'] : true}}
                rowId={state['idColumn']}
                docTypeNo="${col['value']['schema']['docTypeNo']}"
              />`,
    };
};
module.exports = componentBody;

