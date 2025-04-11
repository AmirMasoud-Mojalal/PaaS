const { getStoredProcedureByStoredProcedureName } = require("../../../DomainConfig")
const { evaluateExpression, evaluateRule, isExpression, isRule } = require("../../../RuleEngine/ruleManager")
const { ExpandedConfig } = require('../../../FeedGlobalConfigWithSuger');

exports.checkVisibility = (col) => {
    // console.log(Object.keys(col['value']['schema']).includes('isVisible'));
    if (Object.keys(col['value']['schema']).includes('isVisible')) {
        if (typeof col['value']['schema']['isVisible'] == "boolean") {
            return col['value']['schema']['isVisible']
        } else if (typeof col['value']['schema']['isVisible'] == "object") {
            return evaluateRule(col['value']['schema']['isVisible']['rule'])
        }
    } else {
        return true
    }

    // return evaluateRule(
    //     Object.keys(col['value']['schema']).includes('isVisible') == true
    //         ?
    //         Object.keys(col['value']['schema']['isVisible']).includes('rule')
    //             ?
    //             col['value']['schema']['isVisible']['rule']
    //             :
    //             ''
    //         : true
    // )
}

exports.checkDisability = (col, mode) => {
    if (mode == 'view') {
        return true
    } else if (mode == 'edit') {
        if (Object.keys(col['value']['schema']).includes('disabled')) {
            if (typeof col['value']['schema']['disabled'] == "boolean") {
                return col['value']['schema']['disabled']
            } else if (typeof col['value']['schema']['disabled'] == "object") {
                return evaluateRule(col['value']['schema']['disabled']['rule'])
            }
        } else {
            return false
        }
        if (Object.keys(col['value']['schema']).includes('isPrimaryKey') && (col['value']['schema']['isPrimaryKey'] == true)) {
            return true
        }
    } else {
        if (Object.keys(col['value']['schema']).includes('disabled')) {
            if (typeof col['value']['schema']['disabled'] == "boolean") {
                return col['value']['schema']['disabled']
            } else if (typeof col['value']['schema']['disabled'] == "object") {
                return evaluateRule(col['value']['schema']['disabled']['rule'])
            }
        } else {
            return false
        }
    }
}

exports.checkFormattedNumberType = (col, mode) => {
    if (Object.keys(col['value']['schema']).includes('isAmount')) {
        if (typeof col['value']['schema']['isAmount'] == "boolean") {
            return 'Amount'
        }
    } else if (Object.keys(col['value']['schema']).includes('isPercent')) {
        if (typeof col['value']['schema']['isPercent'] == "boolean") {
            return 'Percent'
        }
    }
}

exports.checkGridSize = (num) =>
    num == 1
        ? 'col-1'
        : num == 2
            ? 'col-2'
            : num == 3
                ? 'col-3'
                : num == 4
                    ? 'col-4'
                    : num == 5
                        ? 'col-5'
                        : num == 6
                            ? 'col-6'
                            : num == 7
                                ? 'col-7'
                                : num == 8
                                    ? 'col-8'
                                    : num == 9
                                        ? 'col-9'
                                        : num == 10
                                            ? 'col-10'
                                            : num == 11
                                                ? 'col-11'
                                                : num == 12
                                                    ? 'col-12'
                                                    : 'col'

exports.checkRowMarginSize = (num) =>
    num == 1
        ? 'my-1'
        : num == 2
            ? 'my-2'
            : num == 3
                ? 'my-3'
                : num == 4
                    ? 'my-4'
                    : num == 5
                        ? 'my-5'
                        : num == 6
                            ? 'my-6'
                            : num == 7
                                ? 'my-7'
                                : num == 8
                                    ? 'my-8'
                                    : num == 9
                                        ? 'my-9'
                                        : num == 10
                                            ? 'my-10'
                                            : num == 11
                                                ? 'my-11'
                                                : num == 12
                                                    ? 'my-12'
                                                    : 'my'

exports.checkFontSize = (num) =>
    num == 1
        ? 'fs-1'
        : num == 2
            ? 'fs-2'
            : num == 3
                ? 'fs-3'
                : num == 4
                    ? 'fs-4'
                    : num == 5
                        ? 'fs-5'
                        : num == 6
                            ? 'fs-6'
                            : num == 7
                                ? 'fs-7'
                                : num == 8
                                    ? 'fs-8'
                                    : num == 9
                                        ? 'fs-9'
                                        : num == 10
                                            ? 'fs-10'
                                            : num == 11
                                                ? 'fs-11'
                                                : num == 12
                                                    ? 'fs-12'
                                                    : 'small'

exports.getClazz = (col) => {
    return this.checkGridSize(col['value']['schema']['colSize']) + " " + this.checkFontSize(col['value']['schema']['fontSize'])
}

exports.checkEnablity = (enumObject) => {
    let obj = []
    // col['value']['schema']['enum'].map(enumObject => {
    if (Object.keys(enumObject).includes('enabled')) {
        if (typeof enumObject['enabled'] == "boolean") {
            return enumObject['enabled']
            // return {
            //     key: enumObject['key'],
            //     value: enumObject['value'],
            //     enabled: enumObject['enabled']
            // }
        } else if (typeof enumObject['enabled'] == "object" && Object.keys(enumObject['enabled']).includes('rule')) {
            if (isExpression(enumObject['enabled']['rule'])) {
                // obj.push(
                // JSON.stringify(
                return {
                    key: enumObject['key'],
                    value: enumObject['value'],
                    enabled: evaluateExpression(enumObject['enabled']['rule'])
                }
                // )
                // )
            } else if (isRule(enumObject['enabled']['rule'])) {
                // return {
                //     key: enumObject['key'],
                //     value: enumObject['value'],
                //     enabled: evaluateRule(enumObject['enabled']['rule'])
                // }
                return evaluateRule(enumObject['enabled']['rule'])
            }
        }
    } else {
        return true
    }

    // })
    // return JSON.stringify(obj);
    // return obj;
}

exports.extractSystemObject = (col) => {
    if (Object.keys(col['value']['schema']['dataSourceProvider']['systemObject']['objectName']).includes('rule')) {
        if (
            isExpression(col['value']['schema']['dataSourceProvider']['systemObject']['objectName']['rule'])
        ) {
            return evaluateExpression(col['value']['schema']['dataSourceProvider']['systemObject']['objectName']['rule'])
        } else if (
            isRule(col['value']['schema']['dataSourceProvider']['systemObject']['objectName']['rule'])
        ) {
            return evaluateRule(col['value']['schema']['dataSourceProvider']['systemObject']['objectName']['rule'])
        }
    }
}

exports.hasFakeAuthProvider = (systemObject) => {
    return systemObject.indexOf('fakeAuthProvider') > -1;
}

exports.uniqueObjectlist = (systemObject) => {
    let objectList = {}
    if (
        systemObject.indexOf('==') > -1 ||
        systemObject.indexOf('!=') > -1 ||
        systemObject.indexOf('&&') > -1 ||
        systemObject.indexOf('+') > -1 ||
        systemObject.indexOf('-') > -1 ||
        systemObject.indexOf('*') > -1 ||
        systemObject.indexOf('/') > -1
    ) {
        objectList[systemObject.split('+')[0].split('.')[0]] = ''
        objectList[systemObject.substring(systemObject.split('+')[0].length + 2).split('.')[0]] = ''
    } else {
        objectList[systemObject.split('.')[0]] = ''
    }
    return objectList
}

exports.checkOnBlur = (col, initialSpace) => {
    let name = ``
    let key = ``
    let value = ``

    let func = ``
    if (Object.keys(col['value']['schema']).includes('onBlurDataSourceProvider')) {
        Object.keys(col['value']['schema']['onBlurDataSourceProvider']).map((item) => {

            // console.log(col['value']['schema']['onBlurDataSourceProvider']['storedProcedure']['name']);
            let inParametersObject = {};
            let outParametersObject = {};
            let inParameterString = ``;
            let outParameterStringArray = [];
            let end = ``;
            let method = '';
            let funcParameter = ``
            const backendUrl = ExpandedConfig.getBackendURI()


            if (item == 'storedProcedure' && Object.keys(col['value']['schema']['onBlurDataSourceProvider']['storedProcedure']).length > 0) {
                name = col['value']['schema']['onBlurDataSourceProvider']['storedProcedure']['name'];
                key = col['value']['schema']['onBlurDataSourceProvider']['storedProcedure']['key'];
                value = col['value']['schema']['onBlurDataSourceProvider']['storedProcedure']['value']

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
                    // console.log(inParametersObject[inParameter]['rule']);
                    end = length < Object.keys(inParametersObject).length - 1 ? `,  ` : ''
                    // inParameterString = `\"${inParameter}\": state['${inParametersObject[inParameter]}']${end}`
                    // inParameterString += `\"${inParameter}\": ${evaluateExpression(inParametersObject[inParameter]['rule'])}${end}`
                    funcParameter += `${inParameter}${end}`
                    inParameterString += `\"${inParameter}\": ${inParameter}${end}`
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
                // console.log(inParametersObject);

                func = `async (${funcParameter}) => {
${initialSpace}  const response = await sendRequest(
${initialSpace}    "${backendUrl}/${name}s?page=0&size=2",
${initialSpace}    "${method}",
${initialSpace}    { ${inParameterString} }
${initialSpace}  );
${initialSpace}  return response.data
${initialSpace}}`
            }
        })
        return func
    }
}

exports.extractNumberFormat = (col) => {
    // ***  Locale options  ***
    //  localeMatcher
    //  numberSystem

    //  

    // ***  Style Options  ***
    //  style:'',                   decimal, currency, percent, unit

    // ***  Currency Options  ***
    // {
    //  style:'currency',
    //  currency:'',                IRR, USD, EUR
    //  currencyDisplay: ''         code, symbol, narrowSymbol, name
    //  currencySign: ''            standard, accouting
    // }

    // ***  Unit Options  ***
    // {
    //  style: 'unit'
    //  unit:
    //  unitDisplay:''              short, narrow, long
    // }

    // ***  Digit Options ***
    //  style: 'unit'
    //  minimumIntegerDigits:''     1-21
    //  minimumFractionDigits:''    0-100
    //  maximumFractionDigits:''    0-100
    //  minimumSignificantDigits:'' 1-21
    //  maximumSignificantDigits:'' 1-21
    //  roundingPriority: ''        auto, morePrecision, lessPrecision
    //  roundingIncrement:''        1,2,5.10,20,25,50,100,250,500,1000,2000,2500 and 5000
    //  roundingMode:''             ceil, floor, expand, trunc, halfCeil, halfFloor, halfExpand, halfTrunc, halfEven
    //  trailingZeroDisplay         auto, stripIfInteger

    // ***  Other Options ***
    //  notation:''                 standard, scientific, engineering, campact
    //  compactDisplay              short, long
    //  useGrouping                 always, auto, min2, true, false
    //  signDisplay                 auto, always, exceptZero, negative, never

    let locale = `Fa-IR`
    let style = `decimal`
    let signDisplay = `never`
    let useGrouping = false

    let result = ``

    if (Object.keys(col['value']['schema']['type'] !== 'String')) {
        if (Object.keys(col['value']['schema']).includes('numberFormat')) {
            if (Object.keys(col['value']['schema']['numberFormat']).includes('locale')) {
                locale = col['value']['schema']['numberFormat']['locale']
            }
            if (Object.keys(col['value']['schema']['numberFormat']).includes('options')) {
                //  style options
                if (Object.keys(col['value']['schema']['numberFormat']['options']).includes('style')) {
                    if (col['value']['schema']['numberFormat']['options']['style'] == 'decimal') {
                        style = col['value']['schema']['numberFormat']['options']['style']
                    }
                    else if (col['value']['schema']['numberFormat']['options']['style'] == 'currency') {
                        style = col['value']['schema']['numberFormat']['options']['style']
                    }
                    else if (col['value']['schema']['numberFormat']['options']['style'] == 'percent') {
                        style = col['value']['schema']['numberFormat']['options']['style']
                    }
                    else if (col['value']['schema']['numberFormat']['options']['style'] == 'unit') {
                        style = col['value']['schema']['numberFormat']['options']['style']
                    }
                }
                //  other options
                if (Object.keys(col['value']['schema']['numberFormat']['options']).includes('signDisplay')) {
                    signDisplay = col['value']['schema']['numberFormat']['options']['signDisplay']
                }
                if (Object.keys(col['value']['schema']['numberFormat']['options']).includes('useGrouping')) {
                    useGrouping = col['value']['schema']['numberFormat']['options']['useGrouping']
                }
            }
            return JSON.stringify({ locale: locale, options: { style: style, signDisplay: signDisplay, useGrouping: useGrouping } });
        } else {
            return JSON.stringify({ locale: locale, options: { style: style, signDisplay: signDisplay, useGrouping: useGrouping } });
        }
    }


    // let f = {
    //     locale: '', // numbering system , Fa-fa, fa-IR, En-en, 
    //     options: {
    //         style: "",  //decimal, currency, percent, unit
    //         currency: "",
    //     }
    // }

    // let thousandSeperator = ``
    // if (Object.keys(col['value']['schema']).includes('separator')) {
    //     if (col['value']['schema']['separator'] = "foreSlash") {
    //         return "/"
    //     } else if (col['value']['schema']['separator'] = "backSlash") {
    //         return "/"
    //     } else if (col['value']['schema']['separator'] = "comma") {
    //         return ","
    //     } else if (col['value']['schema']['separator'] = "dot") {
    //         return "."
    //     }
    // }
}