const { checkGridSize, checkFontSize, getClazz, checkVisibility, checkDisability, checkRowMarginSize } = require("./objectFormCommons");

const componentBody = (col, mode, space) => {

  let visible = ``
  let disable = ``
  let gridSize = ``
  let fontSize = ``
  let rowMarginSize = ``

  visible = checkVisibility(col)
  disable = checkDisability(col, mode)
  // const clazz = getClazz(col)

  // console.log(visible);
  // console.log(disable);

  rowMarginSize = checkRowMarginSize(col['value']['schema']['rowMargin'])
  // fontSize = checkFontSize(col['value']['schema']['fontSize'])
  // console.log(rowMarginSize);
  // const clazz = getClazz(col)

  dataListOptions = `
${space}{${visible}
${space}  ? <div className="row mx-1 ${rowMarginSize} align-items-center justify-content-center">
${space}  </div>
${space}  : ''
${space}}`
  return {
    import: {},
    state: { type: String, default: `` },
    method: {},
    body: `${dataListOptions}`,
  };
};
module.exports = componentBody;
