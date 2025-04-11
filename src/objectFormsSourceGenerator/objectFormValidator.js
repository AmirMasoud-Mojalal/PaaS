export const isRadioComponent = (col) => {
  if (
    (col['value']['type'] === 'primitive' &&
      col['value']['schema']['type'] === 'boolean' &&
      col['value']['schema']['option'] === 'radio') ||
    (col['value']['schema']['type'] === 'String' &&
      col['value']['schema']['option'] === 'radio')
  ) {
    return true;
  } else {
    return false;
  }
};

export const isCheckComponent = (col) => {
  if (
    (col['value']['type'] === 'primitive' &&
      col['value']['schema']['type'] === 'boolean' &&
      col['value']['schema']['option'] === 'checkbox') ||
    (col['value']['schema']['type'] === 'boolean' &&
      col['value']['schema']['option'] === undefined) ||
    (col['value']['schema']['type'] === 'String' &&
      col['value']['schema']['option'] === 'check')
  ) {
    return true;
  } else {
    return false;
  }
};

export const isTextComponent = (col) => {
  if (
    col['value']['type'] === 'primitive' &&
    col['value']['schema']['type'] === 'String' &&
    col['value']['schema']['option'] === undefined
  ) {
    return true;
  } else {
    return false;
  }
};

export const isTextAreaComponent = (col) => {
  if (
    col['value']['type'] === 'primitive' &&
    col['value']['schema']['type'] === 'mlString' &&
    col['value']['schema']['lines'] !== undefined &&
    typeof col['value']['schema']['lines'] == 'number'
  ) {
    return true;
  } else {
    return false;
  }
};

export const isSelectComponent = (col) => {
  if (
    col['value']['type'] === 'primitive' &&
    col['value']['schema']['type'] === 'String' &&
    col['value']['schema']['option'] === 'select'
  ) {
    return true;
  } else {
    return false;
  }
};

export const isSwitchComponent = (col) => {
  if (
    col['value']['type'] === 'primitive' &&
    col['value']['schema']['type'] === 'boolean' &&
    col['value']['schema']['option'] === 'switch'
  ) {
    return true;
  } else {
    return false;
  }
};
