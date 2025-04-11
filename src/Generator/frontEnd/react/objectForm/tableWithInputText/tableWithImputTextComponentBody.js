const componentBody = (col, mode) => {
    return {
        import: {
            react: {
                default: { React: '' },
                nonDefault: { useState: '' },
            },
            '../../UIComponent/table/TableWithInput': { default: {}, nonDefault: { TableWithInput: '' } },
        },
        state: { type: 'String', default: 0 },
        method: ``,
        body: `
              <TableWithInput
                id="${col['title']}" 
                name="${col['title']}" 
                value={state.audience == undefined ? [] : state.audience.substring(1, state.audience.length - 1).split(',').map(element => parseInt(element, 10))}
                onChangeData={onChangeData}
                placeholder="${col['title']}" 
                lable={lables.${col['title']}} 
                disabled={${mode == 'view' ? true : false}} 
                autocomplete="off"
                isVisible={${Object.keys(col['value']['schema']).includes('isVisible') ? col['value']['schema']['isVisible'] : true}}
              />`,
    };
};
module.exports = componentBody;