exports.isEmptyCell = (col) => {
  if (col['value']['type'] == 'emptyCell' && col['value']['schema']['type'] == 'emptyCell') {
    return true
  } else {
    return false
  }
}

exports.isEmptyRow = (col) => {
  if (col['value']['type'] == 'emptyCell' && col['value']['schema']['type'] == 'emptyRow') {
    return true
  } else {
    return false
  }
}

exports.isSpanComponent = (col) => {
  if (
    col['value']['type'] === 'primitive' &&
    col['value']['schema']['type'] === 'String' &&
    col['value']['schema']['option'] === 'span'
  ) {
    return true;
  } else {
    return false;
  }
};

exports.isMultiSpanComponent = (col) => {
  if (
    col['value']['type'] === 'primitive' &&
    col['value']['schema']['type'] === 'String' &&
    col['value']['schema']['option'] === 'multiSpan'
  ) {
    return true;
  } else {
    return false;
  }
};

exports.isRadioComponent = (col) => {
  if (
    col['value']['type'] === 'primitive' &&
    //   col['value']['schema']['type'] === 'boolean' &&
    //   col['value']['schema']['option'] === 'radio') ||
    // (
    // col['value']['schema']['type'] === 'String' &&
    col['value']['schema']['type'] === 'Short' &&
    col['value']['schema']['option'] === 'radio'
  ) {
    return true;
  } else {
    return false;
  }
};

exports.isRadioWithAOComponent = (col) => {
  if (
    col['value']['type'] === 'primitive' &&
    col['value']['schema']['type'] === 'Short' &&
    col['value']['schema']['option'] === 'radioWithAO'
  ) {
    return true;
  } else {
    return false;
  }
};

exports.isCheckComponent = (col) => {
  if (
    col['value']['type'] === 'primitive' &&
    //   col['value']['schema']['type'] === 'boolean' &&
    //   col['value']['schema']['option'] === 'checkbox') ||
    // (col['value']['schema']['type'] === 'boolean' &&
    //   col['value']['schema']['option'] === undefined) ||
    // (
    col['value']['schema']['type'] === 'String' &&
    col['value']['schema']['option'] === 'check'
  ) {
    return true;
  } else {
    return false;
  }
};

exports.isTextComponent = (col) => {
  if (
    col['value']['type'] === 'primitive' &&
    (col['value']['schema']['type'] === 'String' ||
      col['value']['schema']['type'] === 'long' ||
      col['value']['schema']['type'] === 'Integer' ||
      col['value']['schema']['type'] === 'BigDecimal' ||
      col['value']['schema']['type'] === 'Short') &&
    col['value']['schema']['lines'] == undefined &&
    col['value']['schema']['option'] === undefined
  ) {
    return true;
  } else {
    return false;
  }
};

exports.isTextAreaComponent = (col) => {
  if (
    col['value']['type'] === 'primitive' &&
    col['value']['schema']['type'] === 'String' &&
    col['value']['schema']['lines'] !== undefined &&
    typeof col['value']['schema']['lines'] == 'number'
  ) {
    return true;
  } else {
    return false;
  }
};

exports.isTextWithResultSetDataSourceComponent = (col) => {
  if (
    col['value']['type'] === 'primitive' &&
    col['value']['schema']['type'] === 'Integer' &&
    col['value']['schema']['option'] === 'textWithResultSetDataSource'
  ) {
    return true;
  } else {
    return false;
  }
};

exports.isTextWithResultSetDataSourceAndOnBlurEventComponent = (col) => {
  if (
    col['value']['type'] === 'primitive' &&
    col['value']['schema']['type'] === 'Integer' &&
    col['value']['schema']['option'] === 'textWithResultSetDataSourceAndOnBlurEvent'
  ) {
    return true;
  } else {
    return false;
  }
};

exports.isIncludedCustomerComponent = (col) => {
  if (
    col['value']['type'] === 'primitive' &&
    col['value']['schema']['type'] === 'String' &&
    col['value']['schema']['option'] === 'includedCustomer'
  ) {
    return true;
  } else {
    return false;
  }
}

exports.isTafStateComponent = (col) => {
  if (
    col['value']['type'] === 'primitive' &&
    col['value']['schema']['type'] === 'Short' &&
    col['value']['schema']['option'] === 'tafState'
  ) {
    return true;
  } else {
    return false;
  }
}

exports.isLoanStateComponent = (col) => {
  if (
    col['value']['type'] === 'primitive' &&
    col['value']['schema']['type'] === 'Short' &&
    col['value']['schema']['option'] === 'loanState'
  ) {
    return true;
  } else {
    return false;
  }
}

exports.isSendToHQComponent = (col) => {
  if (
    col['value']['type'] === 'primitive' &&
    col['value']['schema']['type'] === 'String' &&
    col['value']['schema']['option'] === 'sendToHQ'
  ) {
    return true;
  } else {
    return false;
  }
}

exports.isSmsUserSelectionComponent = (col) => {
  if (
    col['value']['type'] === 'non-primitive' &&
    col['value']['schema']['type'] === 'String' &&
    col['value']['schema']['option'] === 'smsUserSelection'
  ) {
    return true;
  } else {
    return false;
  }
}

exports.isReportComponent = (col) => {
  if (
    col['value']['type'] === 'non-primitive' &&
    col['value']['schema']['type'] === 'String' &&
    col['value']['schema']['option'] === 'report'
  ) {
    return true;
  } else {
    return false;
  }
}
// exports.isTextWithOwnDataSourceComponent = (col) => {
//   if (
//     col['value']['type'] === 'primitive' &&
//     col['value']['schema']['type'] === 'String' &&
//     col['value']['schema']['option'] === 'textWithOwnDataSource'
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// };

exports.isTextWithObjectDataSource = (col) => {
  if (
    col['value']['type'] === 'primitive' &&
    // col['value']['schema']['type'] === 'String' &&
    col['value']['schema']['option'] === 'textWithObjectDataSource'
  ) {
    return true;
  } else {
    return false;
  }
};

exports.isTextWithObjectDataSourceAndOnBlurEvent = (col) => {
  if (
    col['value']['type'] === 'primitive' &&
    // col['value']['schema']['type'] === 'String' &&
    col['value']['schema']['option'] === 'textWithObjectDataSourceAndOnBlurEvent'
  ) {
    return true;
  } else {
    return false;
  }
};

exports.isTextWithStateDataSourceComponent = (col) => {
  if (
    col['value']['type'] === 'primitive' &&
    col['value']['schema']['type'] === 'String' &&
    col['value']['schema']['option'] === 'textWithStateDataSource'
  ) {
    return true;
  } else {
    return false;
  }
};

exports.isSelectComponent = (col) => {
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

exports.isSelectWithAOComponent = (col) => {
  if (
    col['value']['type'] === 'primitive' &&
    col['value']['schema']['type'] === 'Short' &&
    col['value']['schema']['option'] === 'selectWithAO'
  ) {
    return true;
  } else {
    return false;
  }
};

exports.isSelectWithStaticArrayDSComponent = (col) => {
  if (
    col['value']['type'] === 'primitive' &&
    col['value']['schema']['type'] === 'String' &&
    col['value']['schema']['option'] === 'selectWithStaticArrayDS'
  ) {
    return true;
  } else {
    return false;
  }
};

exports.isSelectWithObjectDataSourceComponent = (col) => {
  if (
    col['value']['type'] === 'primitive' &&
    col['value']['schema']['type'] === 'String' &&
    col['value']['schema']['option'] === 'selectWithObjectDataSource'
  ) {
    return true;
  } else {
    return false;
  }
};

exports.isSwitchComponent = (col) => {
  if (
    col['value']['type'] === 'primitive' &&
    col['value']['schema']['type'] === 'String' &&
    col['value']['schema']['option'] === 'switch'
  ) {
    return true;
  } else {
    return false;
  }
};

exports.isDatePickerComponent = (col) => {
  if (
    col['value']['type'] === 'primitive' &&
    col['value']['schema']['type'] === 'Date'
  ) {
    return true;
  } else {
    return false;
  }
};

exports.isPreAllocatingPrimaryKey = (col) => {
  if (
    'isPreAllocatingPrimaryKey' in col['value']['schema']
  ) {
    return true
  } else {
    return false
  }
}

exports.isFileUploadComponent = (col) => {
  if (
    col['value']['type'] === 'non-primitive' &&
    col['value']['schema']['type'] === 'file'
  ) {
    return true;
  } else {
    return false;
  }
}

exports.isTableWithInputComponent = (col) => {
  if (
    col['value']['type'] === 'non-primitive' &&
    col['value']['schema']['type'] === 'string'
  ) {
    return true;
  } else {
    return false;
  }
}

exports.isSearchReportComponent = (col) => {
  if (
    col['value']['type'] === 'non-primitive' &&
    col['value']['schema']['type'] === 'String' &&
    col['value']['schema']['option'] === 'searchReport'
  ) {
    return true;
  } else {
    return false;
  }
}

exports.isCommitmentsReportComponent = (col) => {
  if (
    col['value']['type'] === 'non-primitive' &&
    col['value']['schema']['type'] === 'String' &&
    col['value']['schema']['option'] === 'commitmentsReport'
  ) {
    return true;
  } else {
    return false;
  }
}

exports.iscustomerRialResourceReportComponent = (col) => {
  if (
    col['value']['type'] === 'non-primitive' &&
    col['value']['schema']['type'] === 'String' &&
    col['value']['schema']['option'] === 'customerRialResourceReport'
  ) {
    return true;
  } else {
    return false;
  }
}

exports.iscustomerArzResourceReportComponent = (col) => {
  if (
    col['value']['type'] === 'non-primitive' &&
    col['value']['schema']['type'] === 'String' &&
    col['value']['schema']['option'] === 'customerArzResourceReport'
  ) {
    return true;
  } else {
    return false;
  }
}


exports.iscustomerRialResourceAvgReportComponent = (col) => {
  if (
    col['value']['type'] === 'non-primitive' &&
    col['value']['schema']['type'] === 'String' &&
    col['value']['schema']['option'] === 'customerRialResourceAvgReport'
  ) {
    return true;
  } else {
    return false;
  }
}


exports.iscustomerArzResourceAvgReportComponent = (col) => {
  if (
    col['value']['type'] === 'non-primitive' &&
    col['value']['schema']['type'] === 'String' &&
    col['value']['schema']['option'] === 'customerArzResourceAvgReport'
  ) {
    return true;
  } else {
    return false;
  }
}

exports.isLendingReportComponent = (col) => {
  if (
    col['value']['type'] === 'non-primitive' &&
    col['value']['schema']['type'] === 'String' &&
    col['value']['schema']['option'] === 'lendingReport'
  ) {
    return true;
  } else {
    return false;
  }
}

exports.isCollateralReportComponent = (col) => {
  if (
    col['value']['type'] === 'non-primitive' &&
    col['value']['schema']['type'] === 'String' &&
    col['value']['schema']['option'] === 'collateralReport'
  ) {
    return true;
  } else {
    return false;
  }
}

exports.isCostBenefitComponent = (col) => {
  if (
    col['value']['type'] === 'non-primitive' &&
    col['value']['schema']['type'] === 'String' &&
    col['value']['schema']['option'] === 'costBenefitReport'
  ) {
    return true;
  } else {
    return false;
  }
}

exports.isCustomerProfileReportComponent = (col) => {
  if (
    col['value']['type'] === 'non-primitive' &&
    col['value']['schema']['type'] === 'String' &&
    col['value']['schema']['option'] === 'customerProfileReport'
  ) {
    return true;
  } else {
    return false;
  }
}

exports.isPerformanceReportComponent = (col) => {
  if (
    col['value']['type'] === 'non-primitive' &&
    col['value']['schema']['type'] === 'String' &&
    col['value']['schema']['option'] === 'performanceReport'
  ) {
    return true;
  } else {
    return false;
  }
}

exports.isEmailComponent = (col) => {
  if (
    col['value']['type'] === 'non-primitive' &&
    col['value']['schema']['type'] === 'String' &&
    col['value']['schema']['isEmail'] === true
  ) {
    return true;
  } else {
    return false;
  }
}

exports.isTelphoneNumberComponent = (col) => {
  if (
    col['value']['type'] === 'non-primitive' &&
    col['value']['schema']['type'] === 'String' &&
    col['value']['schema']['isTelNo'] === true
  ) {
    return true;
  } else {
    return false;
  }
}

exports.isAmountComponent = (col) => {
  if ((
    col['value']['type'] === 'non-primitive' &&
    col['value']['schema']['type'] === 'BigDecimal' &&
    col['value']['schema']['isAmount'] === true
  ) || (
      col['value']['type'] === 'non-primitive' &&
      col['value']['schema']['type'] === 'BigDecimal' &&
      col['value']['schema']['isPercent'] === true
    )) {
    return true;
  } else {
    return false;
  }
}