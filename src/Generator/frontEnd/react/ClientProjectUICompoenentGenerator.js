const { isPathExists, createFile, firstLetterCaptalize } = require('../../util');

const ClientProjectUIComponentGenerator = (ConfigObject) => {

  const componentPath = ConfigObject.getClientComponentPath();
  const componentOwnPath = `${componentPath}\\UIComponent`;
  const fileUploadPath = `${componentOwnPath}\\fileUpload`
  const datePickerPath = `${componentOwnPath}\\DatePicker`
  const fieldSetPath = `${componentOwnPath}\\FieldSet`
  const datePickerSharedPath = `${datePickerPath}\\shared`
  const datePickerComponentPath = `${datePickerPath}\\components`
  const gridPath = `${componentPath}\\UIComponent\\grid`
  const tableWithInput = `${componentPath}\\UIComponent\\table`
  const includedCustomerPath = `${componentOwnPath}\\includedCustomer`
  const entityField = `${componentOwnPath}\\EntityField`
  const selectPath = `${componentOwnPath}\\select\\`
  const textPath = `${componentOwnPath}\\text\\`
  const emailPath = `${componentOwnPath}\\email\\`
  const telphoneNumberPath = `${componentOwnPath}\\telphoneNumber\\`
  const amountPath = `${componentOwnPath}\\amount\\`
  const textareaPath = `${componentOwnPath}\\textarea\\`
  const switchPath = `${componentOwnPath}\\switch\\`
  const checkPath = `${componentOwnPath}\\check\\`
  const radioPath = `${componentOwnPath}\\radio\\`
  const spanPath = `${componentOwnPath}\\span\\`
  const breadCrumbPath = `${componentOwnPath}\\breadcrumb\\`
  const modalPath = `${componentOwnPath}\\modal\\`
  const reportPath = `${componentOwnPath}\\report`
  const reportsPath = `${componentOwnPath}\\reports`
  const reportCardPath = `${componentOwnPath}\\reportCard`
  const reportComponentPath = `${componentOwnPath}\\reportComponent`
  const reportTablePath = `${componentOwnPath}\\reportTable`
  const messagePath = `${componentOwnPath}\\message`
  const space = `    `

  const backendUrl = ConfigObject.getBackendURI();
  // console.log(gridPath);
  // const gridPath = ConfigObject.getClientComponentGridPath();
  // const modalPath = ConfigObject.getClientComponentModalPath();
  // const breadcrumbPath = ConfigObject.getClientComponentBreadcrumbPath();

  // isPathExists(gridPath);
  // isPathExists(modalPath);
  // isPathExists(breadcrumbPath);

  isPathExists(componentOwnPath);
  isPathExists(fileUploadPath);
  isPathExists(datePickerPath);
  isPathExists(fieldSetPath);
  isPathExists(datePickerSharedPath);
  isPathExists(datePickerComponentPath);
  isPathExists(gridPath);
  isPathExists(tableWithInput);
  isPathExists(includedCustomerPath);
  isPathExists(entityField)
  isPathExists(selectPath)
  isPathExists(textPath)
  isPathExists(emailPath)
  isPathExists(telphoneNumberPath)
  isPathExists(amountPath)
  isPathExists(textareaPath)
  isPathExists(switchPath)
  isPathExists(checkPath)
  isPathExists(radioPath)
  isPathExists(spanPath)
  isPathExists(breadCrumbPath)
  isPathExists(modalPath)
  isPathExists(reportPath)
  isPathExists(reportsPath)
  isPathExists(reportCardPath)
  isPathExists(reportComponentPath)
  isPathExists(reportTablePath)
  isPathExists(messagePath)

  /********************************************************************************
   *                        Text Component file
   ********************************************************************************/

  // injectedContent = `import React, { useState, useEffect } from "react"

  // export const Text = ({ id, name, type, value, onChangeData, onBlur, placeholder, lable, disabled, autocomplete, isVisible }) => {
  //     const [localizedVal, setLocalizedVal] = useState(value);
  //     const [originalVal, setOriginalVal] = useState(value);
  //     const [visible, setVisible] = useState(true);

  //     const [error, setError] = useState();

  //     const isColTypeOfNumber = () => {
  //         const numberArray = ["Integer", "long", "BigDecimal"]
  //         return numberArray.findIndex(t => { return t == type ? true : false }) > -1
  //     }

  //     const isColTypeOfString = () => {
  //         const stringArray = ["String"]
  //         return stringArray.findIndex(t => { return t == type ? true : false }) > -1
  //     }

  //     const handleNumPad = (inputValue) => {
  //         // const numPadArray = ["Numpad0", "Numpad1", "Numpad2", "Numpad3", "Numpad4", "Numpad5", "Numpad6", , "Numpad7", "Numpad8", "Numpad9"]
  //         const altArray = ['Tab', 'ShiftLeft', 'ShiftRight', 'AltLeft', 'AltRight']
  //         const numPadArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

  //         if (numPadArray.indexOf(inputValue) > -1) {
  //             // if (inputValue in [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) {
  //             // setLocalizedVal(localizedVal + Intl.NumberFormat('fa-IR', { "style": "decimal", "signDisplay": "never", "useGrouping": false }).format(numPadArray.indexOf(inputValue)))
  //             setLocalizedVal(localizedVal + Intl.NumberFormat('fa-IR', { "style": "decimal", "signDisplay": "never", "useGrouping": false }).format(inputValue))
  //             setOriginalVal(originalVal + inputValue)
  //             return
  //         } else if (altArray.indexOf(inputValue) > -1) {
  //         } else if (inputValue == "Backspace") {
  //             setLocalizedVal(localizedVal.substring(0, localizedVal.length - 1))
  //             setOriginalVal(originalVal.substring(0, originalVal.length - 1))
  //         } else if (inputValue == "Delete") {
  //             setLocalizedVal(localizedVal.substring(1, localizedVal.length))
  //             setOriginalVal(originalVal.substring(1, originalVal.length))
  //         } else {
  //             setError('لطفا از NumPad استفاده کنید.')
  //         }
  //     }

  //     const handleCharacter = (inputValue) => {
  //         const altArray = ['Tab', 'ShiftLeft', 'ShiftRight', 'AltLeft', 'AltRight']
  //         const characterArray = ['ا', 'آ', 'ب', 'پ', 'ت', 'ث', 'ج', 'چ', 'ح', 'خ', 'د', 'ذ', 'ر', 'ز', 'ژ', 'س', 'ش', 'ص', 'ض', 'ط', 'ظ', 'ع', 'غ', 'ف', 'ق', 'ک', 'گ', 'ل', 'م', 'ن', 'و', 'ه', 'ی', '.', 'ُ', '،', 'ئ', ':', '؛', '|', '-', '_', '(', ')', '/', '\\\\', '\', ' \']
  //         if (characterArray.indexOf(inputValue) > -1) {
  //             setLocalizedVal(localizedVal + inputValue)
  //             setOriginalVal(originalVal + inputValue)
  //         } else if (altArray.indexOf(inputValue) > -1) {
  //         } else if (inputValue == "Backspace") {
  //             setLocalizedVal(localizedVal.substring(0, localizedVal.length - 1))
  //             setOriginalVal(originalVal.substring(0, originalVal.length - 1))
  //         } else if (inputValue == "Delete") {
  //             setLocalizedVal(localizedVal.substring(1, localizedVal.length))
  //             setOriginalVal(originalVal.substring(1, originalVal.length))
  //         } else {
  //             setError('لطفا از صفحه کلید فارسی استفاده کنید.')
  //         }
  //     }

  //     const handleIputValue = (inputValue) => {
  //         if (isColTypeOfNumber()) {
  //             setError('')
  //             handleNumPad(inputValue)
  //         } else if (isColTypeOfString()) {
  //             setError('')
  //             handleCharacter(inputValue)
  //         } else {
  //             console.log('Buzzzz');
  //         }
  //     }

  //     const handleDefaultValue = (inputValue) => {
  //       if (isColTypeOfNumber()) {
  //           setLocalizedVal(Intl.NumberFormat('fa-IR', { "style": "decimal", "signDisplay": "never", "useGrouping": false }).format(inputValue))
  //           setOriginalVal(inputValue)
  //       } else if (isColTypeOfString()) {
  //           setLocalizedVal(inputValue)
  //           setOriginalVal(inputValue)
  //       }
  //     }

  //     useEffect(() => {
  //         if (value != undefined && value != '' && value != originalVal) {
  //             handleDefaultValue(value.toString())
  //         }
  //     }, [value])

  //     useEffect(() => {
  //         if (isVisible == true) {
  //             setVisible(true)
  //         } else if (isVisible == false) {
  //             setVisible(false)
  //             setLocalizedVal('')
  //             setOriginalVal('')
  //         }
  //     }, [isVisible])

  //     return visible
  //         ?
  //         (
  //             <div className="col">
  //                 <div className="form-floating mb-3 p-0 border-bottom">
  //                     <input
  //                         type="text"
  //                         className="form-control border-0"
  //                         id={id}
  //                         name={name}
  //                         value={localizedVal}
  //                         onChange={e => { }}
  //                         onKeyDown={e => {
  //                             handleIputValue(e.key)
  //                         }}
  //                         onBlur={() => onBlur(
  //                             {
  //                                 'target': {
  //                                     id,
  //                                     'value': originalVal
  //                                 }
  //                             }
  //                         )}
  //                         placeholder={placeholder}
  //                         disabled={disabled}
  //                         autoComplete={autocomplete}
  //                     />
  //                     <label htmlFor={id}>{lable}</label>
  //                 </div>
  //                 <div className="error">{error}</div>
  //             </div>
  //         )
  //         :
  //         (
  //             <div className="col"></div>
  //         )
  // }`;
  injectedContent = `import React,{ useState, useEffect } from "react"
import * as z from 'zod'

export const Text = ({ id, name, type, value, onChangeData, onBlur, placeholder, lable, disabled, autocomplete, isVisible, minValue, maxValue }) => {
    const [val, setVal] = useState(value);
    const [visible, setVisible] = useState(true);
  
    const [errorCode, setErrorCode] = useState(0)
    const [message, setMessage] = useState('')
    
    let schema = ''
    if (['Integer', 'BigDecimal', 'long', 'Short'].includes(type)) {
        schema = z
            .coerce
            .number({ message: 'مقادیر غیرعددی مجاز نمی باشد' })
            .int({ message: 'مقادیر غیرعددی مجاز نمی باشد' })
            .positive({ message: 'صفر و اعداد منفی مجاز نمی باشد' })
            .gte(minValue, { message: \`اعداد ورودی کمتر از \${minValue} مجاز نمی باشند\` })
            .lte(maxValue, { message: \`اعداد ورودی بیشتر از \${maxValue} مجاز نمی باشند\` })
    }
    else if (['String'].includes(type)) {
        schema = z
            .coerce
            .string({ required_error: 'فیلد اجباری می باشد', message: 'مقادیر غیر رشته مجاز نمی باشد' })
            .min(minValue, { message: \`حداقل طول ورودی \${minValue} می باشد\` })
            .max(maxValue, { message: \`حداکثر طول ورودی \${maxValue} می باشد\` })
            .regex(new RegExp('^[ آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی]+$'), 'مقادیری غیر از حروف فارسی مجاز نمی باشد.')
            // .string({ message: 'مقادیر غیر رشته مجاز نمی باشد' })
    }

  useEffect(() => {
      if (isVisible == true) {
          setVisible(true)
      } else if (isVisible == false) {
          setVisible(false)
          setVal('')
          onChangeData({
              'target': {
                  'id': name,
                  'value': ''
              }
          })
      }
    }, [isVisible])

    useEffect((e) => {
      if (typeof value != 'undefined' && value != '') {
          setVal(value)
      }
    }, [value])
    return isVisible
        ?
        (
            <div className="col">
                <div className="form-floating mb-3 p-0 border-bottom">
                    <input
                        type="text"
                        className="form-control border-0"
                        id={id}
                        name={name}
                        value={val}
                        onChange={(e) => {
                          e.preventDefault()
                          setVal(e.target.value)
                          if (['Integer', 'BigDecimal', 'long', 'Short'].includes(type) || ['String'].includes(type)) {
                            const data = schema.safeParse(e.target.value)
                            if (!data.success) {
                                setErrorCode(100)
                                setMessage(data.error.issues[0].message)
                                onChangeData({
                                    'target': {
                                        'id': id,
                                        'value': ['Integer', 'BigDecimal', 'long', 'Short'].includes(type) ? 0 : ''
                                    }
                                })
                            } else {
                                setErrorCode(0)
                                setMessage('')
                                onChangeData({
                                    'target': {
                                        'id': id,
                                        'value': ['Integer', 'BigDecimal', 'long', 'Short'].includes(type) ? parseInt(e.target.value) : e.target.value
                                    }
                                })
                            }
                            // if (/^[0-9]+$/.test(e.target.value) == true) {
                            //   setErrorCode(0)
                            //   setMessage('')
                            //     onChangeData({
                            //         'target': {
                            //             'id': id,
                            //             'value': parseInt(e.target.value)
                            //         }
                            //     })
                            // } else {
                            //     setErrorCode(100)
                            //     setMessage('تنها مقادیر عددی مجاز می باشد.')
                            //     onChangeData({
                            //         'target': {
                            //             'id': id,
                            //             'value': ''
                            //         }
                            //     })
                            // }
                          } else {
                              onChangeData({
                                  'target': {
                                      'id': name,
                                      'value': e.target.value
                                  }
                              })
                          }
                        }}
                        // onBlur={onBlur}
                        placeholder={placeholder}
                        disabled={disabled}
                        autoComplete={autocomplete}
                    />
                    <label htmlFor={id}>{lable}</label>
                </div>
                {
                  message.length > 0 &&
                  <span style={{ color: 'red', fontSize: 'small' }}>{message}</span>
                }
            </div>
        )
        :
        (
            <div className="col"></div>
        )
  }`;
  createFile(`${textPath}`, `${'Text'}.jsx`, injectedContent);

  /********************************************************************************
   *                        Email Component file
   ********************************************************************************/
  injectedContent = `import React, { useState, useEffect } from "react"
import * as z from 'zod'

export const Email = ({ id, name, type, value, onChangeData, onBlur, placeholder, lable, disabled, autocomplete, isVisible, isEmail }) => {
    const [val, setVal] = useState(value);
    const [visible, setVisible] = useState(true);

    const [errorCode, setErrorCode] = useState(0)
    const [message, setMessage] = useState('')

    const schema = z
        .coerce
        .string()
        .email({ message: 'فرمت ایمیل صحیح نمی باشد' })

    useEffect(() => {
        if (isVisible == true) {
            setVisible(true)
        } else if (isVisible == false) {
            setVisible(false)
            setVal('')
            onChangeData({
                'target': {
                    'id': name,
                    'value': ''
                }
            })
        }
    }, [isVisible])

    useEffect((e) => {
        if (typeof value != 'undefined' && value != '') {
            setVal(value)
        }
    }, [value])
    return isVisible
        ?
        (
            <div className="col">
                <div className="form-floating mb-3 p-0 border-bottom">
                    <input
                        type="text"
                        className="form-control border-0"
                        id={id}
                        name={name}
                        value={val}
                        onChange={(e) => {
                            e.preventDefault()
                            setVal(e.target.value)
                            if (['Email'].includes(type)) {
                                const data = schema.safeParse(e.target.value)
                                if (!data.success) {
                                    setErrorCode(100)
                                    setMessage(data.error.issues[0].message)
                                    onChangeData({
                                        'target': {
                                            'id': id,
                                            'value': ''
                                        }
                                    })
                                } else {
                                    setErrorCode(0)
                                    setMessage('')
                                    onChangeData({
                                        'target': {
                                            'id': id,
                                            'value': e.target.value
                                        }
                                    })
                                }
                            }
                        }}
                        // onBlur={onBlur}
                        placeholder={placeholder}
                        disabled={disabled}
                        autoComplete={autocomplete}
                    />
                    <label htmlFor={id}>{lable}</label>
                </div>
                {
                    message.length > 0 &&
                    <span style={{ color: 'red', fontSize: 'small' }}>{message}</span>
                }
            </div>
        )
        :
        (
            <div className="col"></div>
        )
}`
  createFile(`${emailPath}`, `${'Email'}.jsx`, injectedContent);

  /********************************************************************************
   *                        TelphoneNumber Component file
   ********************************************************************************/
  injectedContent = `import React, { useState, useEffect } from "react"
   import * as z from 'zod'
   
   export const TelphoneNumber = ({ id, name, type, value, onChangeData, onBlur, placeholder, lable, disabled, autocomplete, isVisible, isTelNo }) => {
       const [val, setVal] = useState(value);
       const [visible, setVisible] = useState(true);
   
       const [errorCode, setErrorCode] = useState(0)
       const [message, setMessage] = useState('')
   
       const schema = z
           .coerce
           .string()
           .regex(new RegExp('^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$'), 'فرمت شماره تلفن صحیح نمی باشد. حداقل طول شماره تلفن ۱۰ رقم می باشد.')
   
       useEffect(() => {
           if (isVisible == true) {
               setVisible(true)
           } else if (isVisible == false) {
               setVisible(false)
               setVal('')
               onChangeData({
                   'target': {
                       'id': name,
                       'value': ''
                   }
               })
           }
       }, [isVisible])
   
       useEffect((e) => {
           if (typeof value != 'undefined' && value != '') {
               setVal(value)
           }
       }, [value])
       return isVisible
           ?
           (
               <div className="col">
                   <div className="form-floating mb-3 p-0 border-bottom">
                       <input
                           type="text"
                           className="form-control border-0"
                           id={id}
                           name={name}
                           value={val}
                           onChange={(e) => {
                               e.preventDefault()
                               setVal(e.target.value)
                               if (['TelNo'].includes(type)) {
                                   const data = schema.safeParse(e.target.value)
                                   if (!data.success) {
                                       setErrorCode(100)
                                       setMessage(data.error.issues[0].message)
                                       onChangeData({
                                           'target': {
                                               'id': id,
                                               'value': ''
                                           }
                                       })
                                   } else {
                                       setErrorCode(0)
                                       setMessage('')
                                       onChangeData({
                                           'target': {
                                               'id': id,
                                               'value': e.target.value
                                           }
                                       })
                                   }
                               }
                           }}
                           // onBlur={onBlur}
                           placeholder={placeholder}
                           disabled={disabled}
                           autoComplete={autocomplete}
                       />
                       <label htmlFor={id}>{lable}</label>
                   </div>
                   {
                       message.length > 0 &&
                       <span style={{ color: 'red', fontSize: 'small' }}>{message}</span>
                   }
               </div>
           )
           :
           (
               <div className="col"></div>
           )
   }`
  createFile(`${telphoneNumberPath}`, `${'TelphoneNumber'}.jsx`, injectedContent);

  /********************************************************************************
   *                        Amount Component file
   ********************************************************************************/
  injectedContent = `import React, { useState, useEffect } from "react"
import { addCommas, numberToWords, removeCommas } from '@persian-tools/persian-tools'
import * as z from 'zod'

export const Amount = ({ id, name, type, value, onChangeData, onBlur, placeholder, lable, disabled, autocomplete, isVisible, isAmount }) => {
    const [val, setVal] = useState(value);
    const [visible, setVisible] = useState(true);

    const [errorCode, setErrorCode] = useState(0)
    const [message, setMessage] = useState('')

    const schema = z
        .coerce
        .number({ message: 'تنها مقادیر عددی مجاز می باشد' })
        .nonnegative({ message: 'تنها اعداد مثبت مجاز می باشد' })
        .safe()

    useEffect(() => {
        if (isVisible == true) {
            setVisible(true)
        } else if (isVisible == false) {
            setVisible(false)
            setVal('')
            onChangeData({
                'target': {
                    'id': name,
                    'value': ''
                }
            })
        }
    }, [isVisible])

    useEffect((e) => {
        if (typeof value != 'undefined' && value != '') {
            if (['Amount'].includes(type)) {
                setVal(addCommas(value))
            } else if (['Percent'].includes(type)) {
                setVal(addCommas('%' + value))
            }
        }
    }, [value])

    return isVisible
        ?
        (
            <div className="col">
                <div className="form-floating mb-3 p-0 border-bottom">
                    <input
                        type="text"
                        className="form-control border-0"
                        id={id}
                        name={name}
                        value={val}
                        onChange={(e) => {
                            e.preventDefault()
                            if (['Amount'].includes(type)) {
                                const data = schema.safeParse(removeCommas(e.target.value))
                                if (!data.success) {
                                    setVal(e.target.value)
                                    setErrorCode(100)
                                    setMessage(data.error.issues[0].message)
                                    onChangeData({
                                        'target': {
                                            'id': id,
                                            'value': ''
                                        }
                                    })
                                } else {
                                    setVal(addCommas(e.target.value))
                                    setErrorCode(0)
                                    setMessage('')
                                    onChangeData({
                                        'target': {
                                            'id': id,
                                            'value': removeCommas(e.target.value)
                                        }
                                    })
                                }
                            } else if (['Percent'].includes(type)) {
                                const tmp = e.target.value.indexOf('%') > -1
                                    ? e.target.value.substring(1)
                                    : e.target.value

                                const data = schema.safeParse(removeCommas(tmp))
                                if (!data.success) {
                                    setVal(tmp)
                                    setErrorCode(100)
                                    setMessage(data.error.issues[0].message)
                                    onChangeData({
                                        'target': {
                                            'id': id,
                                            'value': ''
                                        }
                                    })
                                } else {
                                    setVal(tmp)
                                    setErrorCode(0)
                                    setMessage('')
                                    onChangeData({
                                        'target': {
                                            'id': id,
                                            'value': removeCommas(tmp
                                                /* e.target.value.indexOf('%') > -1
                                                    ? e.target.value.substring(1)
                                                    : e.target.value */)
                                        }
                                    })
                                }
                            }
                        }}
                        // onBlur={onBlur}
                        placeholder={placeholder}
                        disabled={disabled}
                        autoComplete={autocomplete}
                    />
                    <label htmlFor={id}>{lable}</label>
                </div>
                {
                    message.length > 0 &&
                    <span style={{ color: 'red', fontSize: 'small' }}>{message}</span>
                }
                {
                    (['Amount'].includes(type) && message.length == 0 && val != '') &&
                    <span style={{ color: 'green', fontSize: 'small' }}>{numberToWords(val) + ' ریال'}</span>
                }
            </div>
        )
        :
        (
            <div className="col"></div>
        )
}`
  createFile(`${amountPath}`, `${'Amount'}.jsx`, injectedContent);

  /********************************************************************************
   *                        Span Component file
   ********************************************************************************/
  injectedContent = `import React,{ useState, useEffect } from "react"

  export const Span = ({stateRef, dataArray, clazz, disabled, isVisible}) => {

      return isVisible
          ?
          (
            // <div className="col fs-6">
            //     {dataArray.map((enumItem, index) => {
            //         const end = index < enumItem.length - 1 ? <br /> : ''
            //         return <><span key={index} className="small text-muted">{enumItem.value}</span>{end}</>
            //         // <br />
            //     })}
            // </div>
            <div className={clazz}>
                {/* 
                  {stateRef == 0 && <span className="small text-muted">در ارسال موردی، متن پیامک مرتبط با موضوع (تغییروضعیت/ اعلام سررسید) به طور اتوماتیک تنظیم و در <strong><u>زمان تحقق موضوع</u></strong> به مخاطبین ارسال خواهد شد. </span>}
                  {stateRef == 1 && <span className="small text-muted">در ارسال دوره ای، متن پیامک مرتبط با موضوع (میزان منابع/ مصارف) به طور اتوماتیک تنظیم و در <strong><u>مقطع زمانی مشخص</u></strong> به مخاطبین ارسال خواهد شد. </span>}
                */}
                <span className="small text-muted">{dataArray}</span>
            </div>
          )
          :
          (
              <div className="col"></div>
          )
    }`;
  createFile(`${spanPath}`, `${'Span'}.jsx`, injectedContent);

  /********************************************************************************
   *                        MultiSpan Component file
   ********************************************************************************/
   injectedContent = `import React, { useState, useEffect } from "react"
import { FieldSet } from '../../UIComponent/fieldSet/FieldSet';
import { getTodayDate } from "../../../util/Date";

export const MultiSpan = ({ sendMethod, eventMthdSubject, cyclicMthdSubject, dataArray, clazz, disabled, isVisible}) => {

  const [method, setMethod] = useState('')
  const [event, setEvent] = useState('')
  const [cyclic, setCyclic] = useState('')

  const todayFa = getTodayDate()

  useEffect(() => {
    if (sendMethod != undefined && !Array.isArray(sendMethod)) {
      setMethod(sendMethod)
    }
  }, [sendMethod])

  useEffect(() => {
    if (eventMthdSubject != undefined && !Array.isArray(eventMthdSubject)) {
      setEvent(eventMthdSubject)
    }
  }, [eventMthdSubject])

  useEffect(() => {
    if (cyclicMthdSubject != undefined && !Array.isArray(cyclicMthdSubject)) {
      setCyclic(cyclicMthdSubject)
    }
  }, [cyclicMthdSubject])

  return isVisible
    ?
    (
      <div className={clazz}>
        {(event != '' || cyclic != '') &&
          <FieldSet title="پیش نمایش متن پیامک">
            {(method.split(',').includes('0') && event.split(',').includes('0')) && <div className="row mx-1 my-1 align-items-center justify-content-center"><small className='text-center'> باسلام، وضعیت تفاهم نامه باکد....از دردست اقدام به بلااقدام تغییر یافت. واحد تفاهم نامه ها {todayFa.year}/{todayFa.month}/{todayFa.day}</small></div>}
            {(method.split(',').includes('0') && event.split(',').includes('1')) && <div className="row mx-1 my-1 align-items-center justify-content-center"><small className='text-center'> باسلام، وضعیت تفاهم نامه باکد ....از دردست اقدام به نافذ تغییر یافت. واحد تفاهم نامه ها {todayFa.year}/{todayFa.month}/{todayFa.day}</small></div>}
            {(method.split(',').includes('0') && event.split(',').includes('2')) && <div className="row mx-1 my-1 align-items-center justify-content-center"><small className='text-center'> باسلام، وضعیت تفاهم نامه باکد ....از نافذ به منقضی شده تغییر یافت. واحد تفاهم نامه ها {todayFa.year}/{todayFa.month}/{todayFa.day}</small></div>}
            {(method.split(',').includes('0') && event.split(',').includes('3')) && <div className="row mx-1 my-1 align-items-center justify-content-center"><small className='text-center'> باسلام، تفاهم نامه باکد ....تا ۳۰ روز دیگر منقضی خواهد شد. واحد تفاهم نامه ها {todayFa.year}/{todayFa.month}/{todayFa.day}</small></div>}
            {(method.split(',').includes('0') && event.split(',').includes('4')) && <div className="row mx-1 my-1 align-items-center justify-content-center"><small className='text-center'> باسلام، تفاهم نامه باکد ....تا ۶۰ روز دیگر منقضی خواهد شد. واحد تفاهم نامه ها {todayFa.year}/{todayFa.month}/{todayFa.day}</small></div>}
            {(method.split(',').includes('1') && cyclic.split(',').includes('0')) && <div className="row mx-1 my-1 align-items-center justify-content-center"> <small className='text-center'> باسلام، منابع تفاهم نامه باکد ..... به مبلغ .... می باشد. واحد تفاهم نامه ها {todayFa.year}/{todayFa.month}/{todayFa.day}</small></div>}
            {(method.split(',').includes('1') && cyclic.split(',').includes('1')) && <div className="row mx-1 my-1 align-items-center justify-content-center"> <small className='text-center'> باسلام، مصارف تفاهم نامه باکد ..... به مبلغ .... می باشد. واحد تفاهم نامه ها {todayFa.year}/{todayFa.month}/{todayFa.day}</small></div>}
          </FieldSet>
        }
      </div>
    )
    :
    (
      <div className="col"></div>
    )
}`;
   createFile(`${spanPath}`, `${'MultiSpan'}.jsx`, injectedContent);
 

  /********************************************************************************
   *                        Check Component file
   ********************************************************************************/

  injectedContent = `import React, { useEffect, useState } from "react"

export const Check = ({ id, name, lable, dataSource, value, inline, onChangeData, disabled, isVisible, gridSize, fontSize }) => {
  
  const [checked, setChecked] = useState([...value])
  
  useEffect(() => {
    if (typeof value != 'undefined' && Array.isArray(value)) {
      setChecked(value)
    }
  }, [value])

  useEffect(() => {
    onChangeData({
      target: {
        id,
        'value': checked.toString()
      }
    })
  }, [checked])

  return isVisible
  ?
  (
    <div className={gridSize}>
      <fieldset className="reset">
        <legend className="reset">
          <span>{lable}</span>
        </legend>
        {dataSource.map((enumItem, index) => {
          return <div className={"form-check" + (inline ? ' form-check-inline' : '')} key={index}>
            <input
              className="form-check-input"
              type="checkbox"
              id={name + '' + index}
              name={name}
              value={index}
              onChange={(e) => {
                setChecked(prevState => {
                  return checked.includes(e.target.value.toString())
                    ? checked.filter((idx) => { return idx !== e.target.value.toString() })
                    : [...prevState, e.target.value]
                })
              }}
              // checked=\${col['value']['schema']['checked'] ? '{true}' : '{false}'}
              disabled={disabled}
              // checked={(typeof value !== 'undefined' && value.includes(index.toString())) ? true : false}
              checked={checked.includes(index.toString()) ? true : false}
            />
            <label className={"form-check-label" + ' ' + fontSize} htmlFor={name + '' + index}>
              {dataSource[index]}
            </label>
          </div>
        })}
      </fieldset>
    </div>
  )
  :
  (
    <div className="col"></div>
  )
}`
  createFile(`${checkPath}`, `${'Check'}.jsx`, injectedContent);


  /********************************************************************************
   *                        Radio Component file
   ********************************************************************************/

  injectedContent = `import React from "react"

export const Radio = ({ lable, dataArray, id, name, value, inline, clazz, onChangeStatus, disabled, isVisible }) => {
    return isVisible
        ?
        (
            <div className={clazz}>
                <fieldset className="reset">
                    <legend className="reset">
                        <span>{lable}</span>
                    </legend>
                    {dataArray.map((enumItem, index) => {
                        return <div className={"form-check" + (inline ? ' form-check-inline' : '')} key={index}>
                            <input
                                className="form-check-input"
                                type="radio"
                                id={name + '' + index}
                                name={name}
                                value={index}
                                // onChange={onChangeStatus}
                                onChange={(e) => {
                                  onChangeStatus({
                                    target: {
                                      id: e.target.name,
                                      value: e.target.value
                                    }
                                  })
                                }}
                                // checked=\${col['value']['schema']['checked'] ? '{true}' : '{false}'}
                                disabled={disabled}
                                // checked={(typeof value !== 'undefined' && value == index) ? true : false}
                                checked={parseInt(value) == index ? true : false}
                            />
                            <label className="form-check-label" htmlFor={name + '' + index}>
                                {dataArray[index]}
                            </label>
                        </div>
                    })}
                </fieldset>
             </div>
        )
        :
        (
          <div className="col"></div>
        )
}`
  createFile(`${radioPath}`, `${'Radio'}.jsx`, injectedContent);


  /********************************************************************************
   *                        RadioWithAO Component file
   ********************************************************************************/

  injectedContent = `import React, { useState, useEffect } from "react"
export const RadioWithAO = ({ id, name, lable, previousValue, clazz, onCheck, datasoruce, inline, isVisible, disabled }) => {

  const [checked, setChecked] = useState();
  useEffect(() => {
    if (typeof previousValue != 'undefined' && typeof parseInt(previousValue) == 'number') {
      setChecked(parseInt(previousValue))
    }
  }, [previousValue])

  return isVisible
    ?
    (
      <div className={clazz}>
        <fieldset className="reset">
          <legend className="reset">
            <span>{lable}</span>
          </legend>
          {datasoruce.map((enumItem, index) => {
            return <div className={"form-check" + (inline ? ' form-check-inline' : '')} key={index}>
              <input
                className="form-check-input"
                type="radio"
                id={name + '' + index}
                name={name}
                value={enumItem['key']}
                onChange={(e) => {
                  setChecked(e.target.value)
                  onCheck({
                    target: {
                      id: e.target.name,
                      value: e.target.value
                    }
                  })
                }}
                disabled={disabled}
                checked={checked == enumItem['key'] ? true : false}
              />
              <label className="form-check-label" htmlFor={name + '' + index}>
                {enumItem['value']}
              </label>
            </div>
          })}
        </fieldset>
      </div>
    )
    :
    (
      <div className="col"></div>
    )
}`
  createFile(`${radioPath}`, `${'RadioWithAO'}.jsx`, injectedContent);

  /********************************************************************************
  *                        TextAreaComponent file
  ********************************************************************************/

  injectedContent = `import React from "react"

export const TextArea = ({ id, name, value, onChangeData, onBlur, placeholder, lable, disabled, autocomplete, numOfLines, isVisible }) => {
  return isVisible
  ?
  (
    <div className="col form-floating">
      <textarea className="form-control" 
        id={id}
        name={name}
        value={value}
        onChange={onChangeData}
        onBlur={onBlur}
        placeholder={placeholder}
        disabled={disabled}
        autoComplete={autocomplete}
        style={{height: (numOfLines * 40 + 'px')}}>
      </textarea>
      <label htmlFor={id}>{lable}</label>
    </div>
  )
  :
  (
    <div className="col"></div>
  )
}`;
  createFile(`${textareaPath}`, `${'TextArea'}.jsx`, injectedContent);

  /********************************************************************************
  *                        TextWithResultSetDataSource Component file
  ********************************************************************************/

  injectedContent = `import React, { useEffect, useState } from 'react';

export const TextWithResultSetDataSource = ({ id, name, value, onChangeStatus, placeholder, lable, disabled, autocomplete, isVisible, resultSet, dsKey, dsValue, onResultSetSelected, dataSourceProvider, onChangeDataSourceProviderOutput, mode }) => {

  const [visible, setVisible] = useState(true);
  const [filteredDataSource, setFilteredDataSource] = useState(resultSet);
  const [currentValue, setCurrentValue] = useState('');

  const getIndexByKey = (key) => {
    return filteredDataSource.findIndex((e) => {
      return e[\`\${dsKey}\`] == key ? true : false
    })

  }

  const getIndexByValue = (value) => {
    return filteredDataSource.findIndex((e) => {
      return e[\`\${dsValue}\`] == value ? true : false
    })
  }

  const getSelectedDataSourceRowByCode = (code) => {
    const idx = getIndexByKey(code)
    return filteredDataSource[idx]
  }

  useEffect(() => {
    if (isVisible == true) {
      setVisible(true)
    } else if (isVisible == false) {
      setVisible(false)
      setCurrentValue('');
      onChangeStatus({
        'target': {
          'id': id,
          'value': ''
        }
      })
      onResultSetSelected({})
    }
  }, [isVisible])

  useEffect(() => {
    if (typeof resultSet != 'undefined' && resultSet.length > 0) {
      setFilteredDataSource(resultSet)
      if (typeof value != 'undefined' && value != '') {
        const idx = resultSet.findIndex((e) => {
          return e[\`\${dsKey}\`] == value ? true : false
        })
        if (idx > -1) {
          const abc = resultSet[idx][dsValue]
          setCurrentValue(abc)
          onChangeStatus({
            'target': {
              'id': id,
              'value': resultSet[idx][dsKey]
            }
          })
          onResultSetSelected(resultSet[idx])
        } else {
          setCurrentValue('')
          onChangeStatus({
            'target': {
              'id': id,
              'value': ''
            }
          })
          onResultSetSelected({})
        }
      } else {
        setCurrentValue('')
        onChangeStatus({
          'target': {
            'id': id,
            'value': ''
          }
        })
      }
    } else {
      if (currentValue != '') {
        setCurrentValue('')
        onChangeStatus({
          'target': {
            'id': id,
            'value': ''
          }
        })
        onResultSetSelected({})
        setFilteredDataSource([])
      }
    }
  }, [resultSet, value])


  // useEffect(e => {
  //   if (typeof value != 'undefined' && value != "") {
  //     const selectedRow = getSelectedDataSourceRowByCode(value)
  //     if (currentValue == selectedRow[dsValue]) {
  //     } else {
  //       setCurrentValue(selectedRow[dsValue])
  //       onChangeStatus({
  //         'target': {
  //           'id': id,
  //           'value': selectedRow[dsKey]
  //         }
  //       })
  //       onResultSetSelected(selectedRow)
  //     }
  //   }
  // }, [value])

  const onBlur = (e) => {
    e.preventDefault()
    try {
      const valueToChange = e.target.value
      const idx = getIndexByValue(valueToChange)

      if (idx > -1) {
        // setCurrentValue(filteredDataSource[idx][dsValue])
        setCurrentValue(valueToChange)
        onChangeStatus({
          'target': {
            'id': e.target.id,
            'value': filteredDataSource[idx][dsKey]
          }
        })
        onResultSetSelected(filteredDataSource[idx])
      } else {
        setCurrentValue('')
        onChangeStatus({
          'target': {
            'id': e.target.id,
            'value': ''
          }
        })
        onResultSetSelected({})
      }
    } catch (error) {
      throw({
        'status':99,
        'message':'خطا در فرم TextWithResultSetDataSource'
      })
    }
  }

  return isVisible
    ?
    (
      <div className="col">
        <div className="form-floating mb-3 p-0 border-bottom">
          <input
            type="text"
            className="form-control border-0"
            id={id}
            name={name}
            value={currentValue}
            onChange={
              e => setCurrentValue(e.target.value)
              //  e => {
              //    const valueToChange = e.target.value
              //    const idx = getIndexByValue(valueToChange)
              //    if (idx > -1) {
              //      setCurrentValue(filteredDataSource[idx][dsValue])
              //      onChangeStatus({
              //        'target': {
              //          'id': e.target.id,
              //          'value': filteredDataSource[idx][dsKey]
              //        }
              //      })
              //      onResultSetSelected(filteredDataSource[idx])
              //    } else {
              //      setCurrentValue('')
              //      onChangeStatus({
              //        'target': {
              //          'id': e.target.id,
              //          'value': ''
              //        }
              //      })
              //      onResultSetSelected({})
              //    }
              //  }
            }
            onBlur={onBlur}
            placeholder={placeholder}
            disabled={disabled}
            autoComplete="off"
            list={(name) + "DatalistOptions"}
          />
          <label htmlFor={name}>{lable}</label>
          <datalist id={(name) + "DatalistOptions"}>
            {Object.keys(filteredDataSource).map((idx) => {
              //  3
              return <option
                key={filteredDataSource[idx][\`\${dsKey}\`]}
                value={filteredDataSource[idx][\`\${dsValue}\`]} >
              </option>
            })}
          </datalist>
        </div>
      </div>
    )
    :
    (
      <div className="col"></div>
    )
}`;
  createFile(`${textPath}`, `${'TextWithResultSetDataSource'}.jsx`, injectedContent);

  /********************************************************************************
  *                        TextWithResultSetDataSourceAndOnBlurEvent Component file
  ********************************************************************************/

  injectedContent = `import React, { useEffect, useState } from 'react';

export const TextWithResultSetDataSourceAndOnBlurEvent = ({ id, name, value, onChangeStatus, placeholder, lable, disabled, autocomplete, isVisible, resultSet, dsKey, dsValue, onResultSetSelected, dataSourceProvider, onChangeDataSourceProviderOutput }) => {

  const [visible, setVisible] = useState(true);
  const [filteredDataSource, setFilteredDataSource] = useState(resultSet);
  const [currentValue, setCurrentValue] = useState('');

  const getIndexByKey = (key) => {
    return filteredDataSource.findIndex((e) => {
      return e[\`\${dsKey}\`] == key ? true : false
    })

  }

  const getIndexByValue = (value) => {
    return filteredDataSource.findIndex((e) => {
      return e[\`\${dsValue}\`] == value ? true : false
    })
  }


  const getSelectedDataSourceRowByCode = (code) => {
    const idx = getIndexByKey(code)
    return filteredDataSource[idx]
  }

  const callRemoteAddress = (key) => {
    async function callRemoteProcedure(key) {
      return dataSourceProvider(key, 1)
    }
    try {
      if (key != '') {
        callRemoteProcedure(key).then((response) => {
          onChangeDataSourceProviderOutput(
            [
              ...response
            ]
          );
        })
      }
    } catch (error) {
      throw({
        'status': 999,
        'message': 'TextWithResultSetDataSourceAndOnBlurEvent'
      })
    }
  }

  useEffect(() => {
    if (isVisible == true) {
      setVisible(true)
    } else if (isVisible == false) {
      setVisible(false)
      setCurrentValue('');
      onChangeStatus({
        'target': {
          'id': id,
          'value': ''
        }
      })
      onResultSetSelected({})
      onChangeDataSourceProviderOutput([])
    }
  }, [isVisible])

  useEffect(e => {
    if (typeof value != 'undefined' && value != "") {
      const selectedRow = getSelectedDataSourceRowByCode(value)
      if (currentValue == selectedRow[dsValue]) {
        // console.log('YES')
      } else {
        setCurrentValue(selectedRow[dsValue])
        onChangeStatus({
          'target': {
            'id': id,
            'value': selectedRow[dsKey]
          }
        })
        onResultSetSelected(selectedRow)
        callRemoteAddress(selectedRow[dsKey])
      }
    }
  }, [value])

  useEffect(e => {
    if (typeof currentValue != 'undefined' && currentValue != "") {
      const selectedIndex = getIndexByValue(currentValue)
      if (selectedIndex > -1) {
        onChangeStatus({
          'target': {
            'id': id,
            'value': filteredDataSource[selectedIndex]['branch']
          }
        })
        onResultSetSelected(filteredDataSource[selectedIndex])
        callRemoteAddress(filteredDataSource[selectedIndex]['branch'])
      } else {
        onChangeStatus({
          'target': {
            'id': id,
            'value': ''
          }
        })
        onResultSetSelected({})
        onChangeDataSourceProviderOutput([])
      }
    }
  }, [currentValue])

  const onBlur = (e) => {
    e.preventDefault()
    try {
      const valueToChange = e.target.value
      const idx = getIndexByValue(valueToChange)
      if (idx > -1) {
        setCurrentValue(valueToChange);
        onChangeStatus({
          'target': {
            'id': e.target.id,
            'value': filteredDataSource[idx][dsKey]
          }
        })
        onResultSetSelected(filteredDataSource[idx])
        callRemoteAddress(filteredDataSource[idx][dsKey])
      } else {
        setCurrentValue('');
        onChangeStatus({
          'target': {
            'id': e.target.id,
            'value': ''
          }
        })
        onResultSetSelected({})
        onChangeDataSourceProviderOutput([])
      }
    } catch (error) {
      console.log(error);
      throw({
        'status':9999,
        'message':'خطا در کامپوننت TextWithResultSetDataSourceAndOnBlurEvent'
      })
    }
  }

  return isVisible
    ?
    (
      <div className="col">
        <div className="form-floating mb-3 p-0 border-bottom">
          <input
            type="text"
            className="form-control border-0"
            id={name}
            name={name}
            value={currentValue}
            onChange={e => {
              e.preventDefault()
              setCurrentValue(e.target.value)
            }
              //  e => {
              //    const valueToChange = e.target.value
              //    const idx = getIndexByValue(valueToChange)
              //    if (idx > -1) {
              //      setCurrentValue(valueToChange);
              //      onChangeStatus({
              //        'target': {
              //          'id': e.target.id,
              //          'value': filteredDataSource[idx][dsKey]
              //        }
              //      })
              //      onResultSetSelected(filteredDataSource[idx])
              //    } else {
              //      setCurrentValue('');
              //      onChangeStatus({
              //        'target': {
              //          'id': e.target.id,
              //          'value': ''
              //        }
              //      })
              //      onResultSetSelected({})
              //      onChangeDataSourceProviderOutput([])
              //    }
              // }
            }
            onBlur={(e) => onBlur(e)}
            placeholder={placeholder}
            disabled={disabled}
            autoComplete="off"
            list={(name) + "DatalistOptions"}
          />
          <label htmlFor={name}>{lable}</label>
          <datalist id={(name) + "DatalistOptions"}>
            {Object.keys(filteredDataSource).map((idx) => {
              return <option
                key={filteredDataSource[idx][\`\${dsKey}\`]}
                value={filteredDataSource[idx][\`\${dsValue}\`]} >
              </option>
            })}
          </datalist>
        </div>
      </div>
    )
    :
    (
      <div className="col"></div>
    )
}`;
  createFile(`${textPath}`, `${'TextWithResultSetDataSourceAndOnBlurEvent'}.jsx`, injectedContent);

  /********************************************************************************
*                        TexWithOwnDataSource Component file
********************************************************************************/

  // injectedContent = `import React from "react"

  //    export const TexWithOwnDataSource = ({ dataSourceType, dataSource, id, name, value, dsKey, dsValue, onChangeStatus, placeholder, lable, disabled, autocomplete, isVisible }) => {
  //     //  if (dataSourceType == 'storedProcedure' && Object.keys(dataSource).length >= 0) {
  //       if (dataSourceType == 'storedProcedure') {
  //        return isVisible && (
  //         <div className="col>
  //           <div className="form-floating mb-3 p-0 border-bottom">
  //             <input
  //               type="text"
  //               className="form-control border-0"
  //               id={name}
  //               name={name}
  //               value={value}
  //               onChange={onChangeStatus}
  //               placeholder={placeholder}
  //               disabled={disabled}
  //               autoComplete="off"
  //               list={(name) + "DatalistOptions"}
  //             />
  //             <label htmlFor={name}>{lable}</label>
  //             <datalist id={(name) + "DatalistOptions"}>

  //             </datalist>
  //           </div>
  //          </div>
  //        )
  //      }
  //    }

  //    //  {Object.keys(dataSource).map((idx) => {
  //             //    //  3
  //             //    return <option 
  //             //      key={dataSource[idx][\`\${dsKey}\`]}
  //             //      value={dataSource[idx][\`\${dsValue}\`]} >
  //             //    </option>
  //             //  })}
  //    `;
  // createFile(`${textPath}`, `${'TexWithOwnDataSource'}.jsx`, injectedContent);

  /********************************************************************************
*                        textWithObjectDataSource Component file
********************************************************************************/

  injectedContent = `import React, { useState, useEffect } from "react"
import { sendRequest } from '../../../util/makeRequest';

export const TextWithObjectDataSource = ({ dataSourceType, id, name, value, dataSourceProvider, onChangeDataSourceProviderOutput, onChange, placeholder, lable, disabled, autocomplete, isVisible }) => {

  const [v, setV] = useState(dataSourceProvider);

  useEffect(() => {
    setV(dataSourceProvider)
    onChange(
      {
        'target': {
          id,
          'value': dataSourceProvider
        }
      }
    )
  }, [dataSourceProvider])

  useEffect(e => {
    if (typeof value != 'undefined' && value != '') {
      setV(value)
    }
  }, [value])

  return isVisible
    ?
    (
      <div className="col">
        <div className="form-floating mb-3 p-0 border-bottom">
          <input
            type="text"
            className="form-control border-0"
            id={id}
            name={name}
            value={v
              // value != undefined
              //   ?
              //   value
              //   // value.toLocaleString()
              //   // Intl.NumberFormat('Fa-IR', { useGrouping: false }).format(value)
              //   :
              //   v != undefined
              //     ? v.toLocaleString()
              //     :
              //     ''
            }
            onChange={(e) => {
              e.preventDefault()
              setV(e.target.value);
              onChange({
                'target': {
                  id,
                  'value': e.target.value
                }
              })
            }}
            // readOnly={true}
            placeholder={placeholder}
            disabled={disabled}
            autoComplete="off"
          />
          <label htmlFor={name}>{lable}</label>
        </div>
      </div>
    )
    :
    (
      <div className="col"></div>
    )
}

//  {Object.keys(dataSource).map((idx) => {
         //    //  3
         //    return <option 
         //      key={dataSource[idx][\`\${dsKey}\`]}
         //      value={dataSource[idx][\`\${dsValue}\`]} >
         //    </option>
         //  })}
`;
  createFile(`${textPath}`, `${'TextWithObjectDataSource'}.jsx`, injectedContent);

  /********************************************************************************
*                        textWithObjectDataSourceAndOnBlurEvent Component file
********************************************************************************/

  injectedContent = `import React, { useState, useEffect } from "react"
import { sendRequest } from '../../../util/makeRequest';
import * as z from 'zod'

export const TextWithObjectDataSourceAndOnBlurEvent = ({ dataSourceType, id, name, value, maxValue, dataSourceProvider, onChangeDataSourceProviderOutput, onChangeStatus, onChangeData, placeholder, lable, disabled, autocomplete, isVisible }) => {

  const [val, setVal] = useState(value);
  const [message, setMessage] = useState('')

  useEffect((e) => {
    if (typeof value != 'undefined' && value != '') {
      setVal(value)
    }
  }, [value])

  const schema = z
    .coerce
    .number({ message: 'تنها مقادیر عددی مجاز می باشد' })
    .nonnegative({ message: 'تنها اعداد مثبت مجاز می باشد' })
    .lte(maxValue, { message: \`حداکثر طول مجاز \${maxValue.toString().length} رقم می باشد\`})
    .safe()

  const onBlur = (e) => {
    e.preventDefault()
    async function callRemoteProcedure() {
      return dataSourceProvider()
    }
    try {
      if (value !== "") {
        callRemoteProcedure().then((response) => {
          onChangeDataSourceProviderOutput(
            response
          );
        })
      }
    } catch (error) {
      throw({
        'status':9999,
        'message':'خطا در کامپوننت TextWithObjectDataSourceAndOnBlurEvent'
      })
    }
  }

  return isVisible
    ?
    (
      <div className="col">
        <div className="form-floating mb-3 p-0 border-bottom">
          <input
            type="text"
            className="form-control border-0"
            id={id}
            name={name}
            value={val}
            onBlur={onBlur}
            onChange={(e) => {
              e.preventDefault()
              const data = schema.safeParse(e.target.value)
              if (!data.success) {
                setVal(e.target.value)
                setMessage(data.error.issues[0].message)
                onChangeData({
                  'target': {
                    'id': id,
                    'value': ''
                  }
                })
              } else {
                setVal(e.target.value)
                setMessage('')
                onChangeData({
                  'target': {
                    'id': id,
                    'value': e.target.value
                  }
                })
              }
            }
            }
            placeholder={placeholder}
            disabled={disabled}
            autoComplete="off"
            list={(name) + "DatalistOptions"}
          />
          <label htmlFor={name}>{lable}</label>
          <datalist id={(name) + "DatalistOptions"}>

          </datalist>
        </div>
        {
          message.length > 0 &&
          <span style={{ color: 'red', fontSize: 'small' }}>{message}</span>
        }
      </div>
    )
    :
    (
      (<div className="col"></div>)
    )
}`;
  createFile(`${textPath}`, `${'TextWithObjectDataSourceAndOnBlurEvent'}.jsx`, injectedContent);

  /********************************************************************************
  *                        Select Component file
  ********************************************************************************/

  // placeholder, autocomplete,  numOfLines
  injectedContent = `import React from "react"

export const Select = ({ id, name, value, dataSource, onChangeStatus, placeholder, lable, disabled, autocomplete, numOfLines, isVisible }) => {
  return isVisible
  ?
  (
    <div className="col">
      <div className="form-floating">
        <select
          className="form-select form-select-sm"
          id={name}
          name={name}
          aria-label="Floating label select example"
          onChange={onChangeStatus}
          disabled={disabled}
          value={value > 0 ? dataSource[value - 1] : ''}
        >
          <option defaultValue>انتخاب کنید</option>
          {dataSource.map((item, index) => {
            return <option key={index}>{item}</option>;
          })}
        </select>
        <label htmlFor={name}>{lable}</label>
      </div>
    </div>
    
  )
  :
  (
    <div className="col"></div>
  )
}`;
  createFile(`${selectPath}`, `${'Select'}.jsx`, injectedContent);

  /********************************************************************************
  *                        SelectWithAO Component file
  ********************************************************************************/

  injectedContent = `import React, { useState, useEffect } from "react"

  export const SelectWithAO = ({ id, name, previousValue, dataSource, onSelect, placeholder, lable, disabled, autocomplete, stateKey, isVisible }) => {

    const [visible, setVisible] = useState(true);
    const [key, setKey] = useState()
    const [value, setValue] = useState('')

    useEffect(() => {
      if (isVisible == true) {
        setVisible(true)
      } else if (isVisible == false) {
        setVisible(false)
        setKey()
        setValue('');
        onSelect({
          'target': {
            'id': id,
            'value': ''
          }
        })
      }
    }, [isVisible])

    useEffect(() => {
      if (typeof previousValue != 'undefined' && typeof parseInt(previousValue) == 'number') {
        setKey(parseInt(previousValue))
      }
    }, [previousValue])

    return isVisible
    ?
    (
      <div className="col">
        <div className="form-floating">
          <select
            className="form-select form-select-sm"
            id={id}
            name={name}
            aria-label="Floating label select example"
            onChange={(e)=>{
              setKey(e.target.selectedOptions[0]['value'])
              setValue(e.target.selectedOptions[0]['text'])
              onSelect({
                target: {
                  id: id,
                  value: e.target.selectedOptions[0]['value'],
                  key: e.target.selectedOptions[0]['text'],
                }
              })
            }}
            disabled={disabled}
            value={previousValue}
          >
            {previousValue == '' && <option defaultValue value="100">انتخاب کنید</option>}
            {dataSource.map((item, index) => {
              return <option key={index} value={item['key']}>{item['value']}</option>;
            })}
          </select>
          <label htmlFor={name}>{lable}</label>
        </div>
      </div>
    )
    :
    (
      <div className="col"></div>
    )
  }`
  createFile(`${selectPath}`, `${'SelectWithAO'}.jsx`, injectedContent);

  /********************************************************************************
  *                        SelectWithStaticArrayDSComponent file
  ********************************************************************************/

  // placeholder, autocomplete,  numOfLines
  injectedContent = `import React, { useState, useEffect } from "react"

  export const SelectWithStaticArrayDataSource = ({ id, name, value, enumDataSource, dataSource, onSelectItem, placeholder, lable, disabled, autocomplete, numOfLines, isVisible }) => {
  
    const [currentIndex, setCurrentIndex] = useState(value)
    const [currentValue, setCurrentValue] = useState();
  
    useEffect(() => {
      if (typeof value != 'undefined' && value != '') {
        setCurrentIndex(value)
      }
    }, [value])
  
  
    useEffect(() => {
      if (typeof currentIndex != 'undefined' && currentIndex != '' && typeof dataSource != 'undefined' && dataSource.length > 0) {
        setCurrentValue(dataSource[currentIndex - 1]['value'])
      }
    }, [currentIndex])

    return isVisible
    ?
    (
      <div className="col">
        <div className="form-floating">
          <select
            className="form-select"
            id={name}
            name={name}
            aria-label="Floating label select example"
            onChange={(e) => {
              onSelectItem({
                target: {
                  'id': name,
                  'index': e.target.selectedIndex,
                  'value': e.target.value
                }
              })
            }}
            disabled={disabled}
            value={currentValue}
          >
            <option defaultValue>انتخاب کنید</option>
            {dataSource.map((item, index) => {
              return <option key={item['key']}>{item['value']}</option>;
            })}
          </select>
          <label htmlFor={name}>{lable}</label>
        </div>
      </div>
    )
    :
    (
      <div className="col"></div>
    )
  }
  `
  createFile(`${selectPath}`, `${'SelectWithStaticArrayDataSource'}.jsx`, injectedContent);

  /********************************************************************************
  *                        SelectWithObjectDataSource Component file
  ********************************************************************************/

  // placeholder, autocomplete,  numOfLines
  injectedContent = `import React, { useState, useEffect } from "react"

export const SelectWithObjectDataSource = ({ id, name, value, enumDataSource, objectDataSource, onSelect, placeholder, lable, disabled, autocomplete, numOfLines, isVisible }) => {

  const [v, setV] = useState(objectDataSource);

  useEffect(() => {
    setV(objectDataSource)
    onSelect(
      {
        'target': {
          id,
          'value': objectDataSource
        }
      }
    )
  }, [objectDataSource])

  return isVisible
  ?
  (
    <div className="col">
      <div className="form-floating">
        <select
          className="form-select"
          id={name}
          name={name}
          aria-label="Floating label select example"
          onChange={(e) => {
              setV(e.target.value);
            }}
          disabled={disabled}
          value={enumDataSource[
            value != undefined && value != ''
              ?
              parseInt(value)
              :
              v != undefined
                ? v
                :
                0
          ]
          }
        >
          <option defaultValue>انتخاب کنید</option>
          {enumDataSource.map((item, index) => {
            return <option key={index}>{item}</option>;
          })}
        </select>
        <label htmlFor={name}>{lable}</label>
      </div>
    </div>
    
  )
  :
  (
    <div className="col"></div>
  )
}`;
  createFile(`${selectPath}`, `${'SelectWithObjectDataSource'}.jsx`, injectedContent);

  /********************************************************************************
  *                        Switch Component file
  ********************************************************************************/
  //  dataSource, placeholder, autocomplete, numOfLines
  injectedContent = `import React, { useState, useEffect } from "react"

export const Switch = ({ id, name, value, dataSource, onChangeStatus, placeholder, lable, disabled, autocomplete, numOfLines, isVisible }) => {

  const [currentValue, setCurrentValue] = useState(value);

  useEffect(() => {
    if (typeof value != 'undefined' && value != '') {
      setCurrentValue(value)
    }
  }, [value])

  return isVisible
  ?
  (
    <div className="col">
      <div className="form-check form-switch">
        <input 
          className="form-check-input" 
          type="checkbox" 
          role="switch" 
          id={id} 
          name={name}
          onChange={(e) => {
            e.preventDefault()
            onChangeStatus({
              'target': {
                id,
                'value': e.target.checked == true ? 'بلی' : 'خیر'
              }
            })
          }}
          checked={(value.includes('بلی')) ? true : false}
          disabled={disabled}
        />
        <label 
          className="form-check-label" 
          htmlFor={name}>{lable}
        </label>
      </div>
      {currentValue == 'بلی' ? <small className="text-muted">تسهیلات اعطایی - از محل حدوسقف - به مشتری، در مصارف تفاهم نامه لحاظ خواهد شد.</small> : <small>هیچ یک از تسهیلات اعطایی به مشتری، در مصارف تفاهم نامه لحاظ نخواهد نشد.</small>}
    </div>
  )
  :
  (
    <div className="col"></div>
  )
}`;
  createFile(`${switchPath}`, `${'Switch'}.jsx`, injectedContent);

  /********************************************************************************
  *                        FeildSet Component file
  ********************************************************************************/
  injectedContent = `import React from 'react'

  export function FieldSet({ children, title }) {
      return (
          <fieldset className="reset">
              <legend className="reset">{title}</legend>
              {children}
          </fieldset>
      )
  }`;
  createFile(`${fieldSetPath}`, `${'FieldSet'}.jsx`, injectedContent);

  /********************************************************************************
  *                        TableHeader Component file
  ********************************************************************************/
  injectedContent = `import * as React from 'react';

   export default function TableHeader({ columnObject }) {
       return (
           <thead>
               <tr className="text-center">
               {columnObject.map((obj, index) => { return <td scope='col' className="fs-6 fw-semibold text-body-secondary" style={{ backgroundColor: '#E7E7E7', width: '10%' }} key={index}>{obj.lable}</td> })}
               </tr>
           </thead>
       );
   }`;
  createFile(`${tableWithInput}`, `${'tableHeader'}.jsx`, injectedContent);


  /********************************************************************************
  *                        TableBody Component file
  ********************************************************************************/
  injectedContent = `import React, { useState, useEffect } from 'react';
  import TableRow from './tableRow';
  
  export default function TableBody({ dataSource, columnObject, updateState, previousSelect, mode = 'view' }) {
      return (
          <tbody>
              {typeof dataSource != 'undefined' && dataSource.length > -1 && dataSource.map((customer, index) => {
                  return (
                      <TableRow
                          key={index}
                          entity={customer}
                          updateState={updateState}
                          columnObject={columnObject}
                          previousSelect={previousSelect}
                          mode={mode}
                      />
                  )
              })}
          </tbody>
      );
  }`;
  createFile(`${tableWithInput}`, `${'tableBody'}.jsx`, injectedContent);

  /********************************************************************************
  *                        TableRow Component file
  ********************************************************************************/
  injectedContent = `import * as React from 'react';

  export default function TableRow({ entity, updateState, columnObject, previousSelect, mode }) {
      return (
          <tr className="text-center">
              {columnObject.map((obj, index) => {
                if (Object.keys(entity).includes(obj.title)) {
                    return <td key={index} style={{ width: '10%' }}>{entity[obj.title]}</td>
                }
              })}
              {/* 
              <td style={{ width: '10%' }}>{entity.extCustId}</td>
              <td style={{ width: '20%' }}>{entity.ownerName}</td>
              <td style={{ width: '10%' }}>{entity.nationalCode}</td>
              */}
              <td style={{ width: '10%' }}>
                  <div className="form-switch">
                      <input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          // id={id}
                          name={"name"}
                          onChange={(e) => {
                              // e.preventDefault()
                              if (previousSelect == 0 || previousSelect == entity.extCustId) {
                                  updateState({
                                      ...entity,
                                      selected: e.target.checked == true ? 'بلی' : 'خیر'
                                  })
                              } else {
                                  alert('جهت ادامه کار، ابتدا تغییرات اعمال شده را ثبت نمایید.')
                              }
                          }}
                          checked={(entity.selected == 'بلی') ? true : false}
                          disabled={mode == 'view' ? true : false}
                      />
                  </div>
              </td>
          </tr>
      );
  }
  `;
  createFile(`${tableWithInput}`, `${'tableRow'}.jsx`, injectedContent);

  /********************************************************************************
  *                        IncludedCustomer Component file
  ********************************************************************************/
  //  dataSource, placeholder, autocomplete, numOfLines
  injectedContent = `import React, { useState, useEffect } from "react"
import { useParams, useLoaderData } from 'react-router-dom';
import { FieldSet } from "../fieldSet/FieldSet";
import TableBody from "../table/tableBody";
import TableHeader from "../table/tableHeader";
import { sendRequest } from '../../../util/makeRequest';
import utils from "../DatePicker/shared/localeUtils";

export const IncludedCustomer = ({ id, name, type, value, onChangeData, onBlur, placeholder, lable, tafCode, disabled, autocomplete, isVisible, mode }) => {
    const [displayCustomer, setDisplayCustomer] = useState([])
    const [selectedUser, setSelectedUser] = useState([])
    const [selectedIntCustId, setSelectedIntCustId] = useState([])

    const loaderData = useLoaderData();

    const params = useParams();
    //  get all customers
    useEffect(() => {
        try {
            async function getAllAccounts() {
                const response = await sendRequest(
                    \`${backendUrl}/tafahomInformations/\${params.archiveNumber}/accounts\${'?tafCode=' + tafCode}\`,
                    "GET",
                );
                return response.data
            }
            //  get TafahomInformation's ALL Account without 'Selected' field
            getAllAccounts().then((response) => {
                let uniqueAccount = [];
                if (typeof response.content != 'undefined' && response.content.length > 0) {
                    uniqueAccount = response.content.filter((value, index, array) =>
                        index === array.findIndex(item => (item.extCustId === value.extCustId))
                    )
                };
                return uniqueAccount
            }).then(uniqueAccount => {
                if (mode == 'edit' || mode == 'view') {
                    const selectedIds = loaderData.data.includedCustomer.split(',')
                    setDisplayCustomer(
                        uniqueAccount.map(account => {
                            if (selectedIds.findIndex(Idx => parseInt(Idx) === account.extCustId) > -1) {
                                if (!Object.keys(account).includes('selected')) {
                                    if (!selectedUser.includes(account.extCustId)) {
                                        setSelectedUser(prevState => [...prevState, account.extCustId])
                                        setSelectedIntCustId(prevState => [...prevState, account.intCustId])
                                    }
                                    return {
                                        ...account,
                                        'selected': 'بلی'
                                    }
                                }
                            } else {
                                return account
                            }
                        })
                    )
                } else {
                    setDisplayCustomer(uniqueAccount)
                }
            })
        } catch (error) {
        }
    }, [])

    useEffect(() => {
        onChangeData({
            'target': {
                // 'id': id,
                // 'value': selectedUser.toString()
                'includedCustomer': selectedUser.toString(),
                'includedCustomerIntCustId': selectedIntCustId.toString(),
                'date': utils('fa').getToday().year + '/' + utils('fa').getToday().month + '/' + utils('fa').getToday().day,
                'selected': ''
            }
        });
    }, [selectedUser])

    const updateState = (e) => {
        const id = e.extCustId
        setDisplayCustomer(
            displayCustomer.map(customer => {
                if (customer.extCustId == id) {
                    if (Object.keys(customer).includes('selected')) {
                        // console.log('User With selected');
                        if (customer['selected'] == 'خیر') {
                            if (!selectedUser.includes(id)) {
                                setSelectedUser([...selectedUser, id])
                                setSelectedIntCustId([...selectedIntCustId, e.intCustId])
                            }
                            return {
                                ...customer,
                                'selected': 'بلی'
                            }
                        } else if (customer['selected'] == 'بلی') {
                            if (selectedUser.includes(id)) {
                                setSelectedUser(selectedUser.filter(item => item != id))
                                setSelectedIntCustId(selectedIntCustId.filter(item => item != e.intCustId))
                            }
                            return {
                                ...customer,
                                'selected': 'خیر'
                            }
                        }
                    } else if (!Object.keys(customer).includes('selected')) {
                        // console.log('User Without selected');
                        if (!selectedUser.includes(id)) {
                            setSelectedUser([...selectedUser, id])
                            setSelectedIntCustId([...selectedIntCustId, e.intCustId])
                        }
                        return {
                            ...customer,
                            'selected': 'بلی'
                        }
                    }
                } else { return customer }
            })
        )
    }

    const columnObject = [
        { title: 'extCustId', lable: 'شماره مشتری', backgroundColor: 'E7E7E7', width: '10', fontSize: '', fontWeight: '', textBody: '' },
        { title: 'ownerName', lable: 'نام خانوادگی/ نام', backgroundColor: 'E7E7E7', width: '20', fontSize: '', fontWeight: '', textBody: '' },
        { title: 'nationalCode', lable: 'کدملی', backgroundColor: '', width: 'E7E7E7', fontSize: '10', fontWeight: '', textBody: '' },
        { title: '', lable: 'انتخاب مشتری', backgroundColor: 'E7E7E7', width: '10', fontSize: '', fontWeight: '', textBody: '' },
    ]

    return isVisible
        ?
        (
            <div className="d-flex justify-content-center">
                <div className="col-10">
                    <FieldSet title="مشتریان مشمول در مصارف تفاهم نامه">
                        <table className="table">
                            {displayCustomer.length == 0 ? <caption className="text-center small">رکوردی برای نمایش وجود ندارد.</caption> : <caption className="text-center small">باانتخاب مشتری، تسهیلاتی که از محل حدوسقف به آن مشتری اعطا شده است، در مصارف تفاهم نامه لحاظ خواهد گردید.</caption>}
                            <TableHeader columnObject={columnObject} />
                            <TableBody dataSource={displayCustomer} columnObject={columnObject} updateState={updateState} previousSelect={0} mode={mode} />
                        </table>
                    </FieldSet>
                </div >
            </div>
        )
        :
        (
            <div className="col"></div>
        )
}`;
  createFile(`${includedCustomerPath}`, `${'IncludedCustomer'}.jsx`, injectedContent);

  /********************************************************************************
  *                        TafState Component file
  ********************************************************************************/
  injectedContent = `import React, { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import { FieldSet } from "../fieldSet/FieldSet";
import { sendRequest } from '../../../util/makeRequest';
import { fakeAuthProvider } from "../../../auth";
import utils from "../DatePicker/shared/localeUtils";
import { addCommas } from '@persian-tools/persian-tools'
import { validateTafahomInformationBeforeSeri } from "../../../util/Validation";

export const TafState = ({ id, name, type, value, onSelect, onSelectItem, dataSource, onBlur, placeholder, lable, tafCode, disabled, autocomplete, isVisible, mode }) => {

    const [state, setState] = useState({})
    const [tafStateCode, setTafStateCode] = useState(value)
    const [tafStateDescription, setTafStateDescription] = useState('');
    const [updated, setUpdated] = useState(false);
    const [confirm, setConfirm] = useState([])
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [message, setMessage] = useState('')
    const [errorCode, setErrorCode] = useState(0)
    const [errorMessage, setErrorMessage] = useState('')

    const params = useParams();
    const credential = fakeAuthProvider.getCredential()

    const updateActiveTafahomInformation = async () => {
        const response = await sendRequest(
            \`${backendUrl}/tafahomInformations/\${params.archiveNumber}\`,
            "PUT",
            {
                ...state,
                tafStateCode: tafStateCode,
                tafStateDescription: tafStateDescription,
            }
        ).then((response) => {
            if (response.status == 204) {
                setUpdated(true)
            }
        }).catch((error) => {
            // setErrorCode(response.data.error)
            setErrorMessage(\`خطا در بروزرسانی پورتال تفاهم نامه ها.\`)
        });
    }


    useEffect(() => {
        async function getTafahomInformation() {
            const response = await sendRequest(
                \`${backendUrl}/tafahomInformations/\${params.archiveNumber}\`,
                "GET",
            );
            return response.data
        }
        try {
            getTafahomInformation()
                .then((response) => {
                    setState(response.content[0])
                    setTafStateCode(typeof response.content[0]['tafStateCode'] != 'number' ? '' : response.content[0]['tafStateCode'])
                    setTafStateDescription(response.content[0]['tafStateDescription'])
                }).catch(err => {
                  setErrorMessage(JSON.parse(err).message)
              })
        } catch (error) {

        }
    }, [])

    useEffect(() => {
        if (updated == true) {
            onSelect({
                target: {
                    key: tafStateCode,
                    value: tafStateDescription,
                    date: utils('fa').getToday().year + '/' + utils('fa').getToday().month + '/' + utils('fa').getToday().day
                }
            })
            setMessage(["اطلاعات تفاهم نامه با موفقیت ارسال شد. وضعیت این تفاهم نامه ", <strong key={1}><u>{tafStateDescription} </u></strong>, " گردید.", <br key={3} />, " "])
        }
    }, [updated])

    useEffect(() => {
        if (state.tafCode > 0) {
            try {
                validateTafahomInformationBeforeSeri(state)
            } catch (error) {
                setErrorMessage(error);
            }
            // validateState()
        }
    }, [state])

    return isVisible
        ?
        (
            <div className="d-flex justify-content-center">
                <div className="col-8">
                    <p className="text-center m-0 ">{(mode == 'new') && <span className="small text-muted">شما درحال ارسال وضعیت تفاهم نامه با مشخصات زیر، به پورتال تفاهم نامه ها هستید.</span>}</p>
                    <p className="text-center m-0 ">{errorMessage.length > 0 ? <span className="small text-danger">{errorMessage}</span> : <span className="small text-danger"></span>}</p>
                    <p className="text-center m-0 ">{(errorMessage.length == 0 && message.length > 0 ) ? <span className="small text-success">{message}</span> : <span className="small text-success"></span>}</p>
                    <FieldSet title="مشخصات تفاهم نامه">
                        <div className="row mx-1 my-1 align-items-center justify-content-center">
                            <div className="col-2"><span className="fw-bolder">عنوان</span></div>
                            <div className="col-4"><span className="text-decoration-underline">{state.title ? state.title : 'تعریف نشده'}</span></div>
                            <div className="col-2"><span className="fw-bolder">کد تفاهم نامه</span></div>
                            <div className="col-4"><span className="text-decoration-underline">{state.tafCode ? state.tafCode : 'تعریف نشده'}</span></div>
                        </div>
                        <div className="row mx-1 my-1 align-items-center justify-content-center">
                            <div className="col-2"><span className="fw-bolder">وضعیت</span></div>
                            <div className="col-4"><span className="text-decoration-underline">{state.tafStateDescription ? state.tafStateDescription : 'تعریف نشده'}</span></div>
                            <div className="col-2"><span className="fw-bolder">شماره آرشیو</span></div>
                            <div className="col-4"><span className="text-decoration-underline">{state.archiveNumber ? state.archiveNumber : 'تعریف نشده'}</span></div>
                        </div>
                        <div className="row mx-1 my-1 align-items-center justify-content-center">
                            <div className="col-2"><span className="fw-bolder">دامنه تفاهم نامه</span></div>
                            <div className="col-4"><span className="text-decoration-underline">{state.tafScope == 0 ? 'کشوری' : state.tafScope == 1 ? 'استانی' : state.tafScope == 2 ? 'تخصصی' : 'تعریف نشده'}</span></div>
                            <div className="col-2"><span className="fw-bolder">نوع منطقه</span></div>
                            <div className="col-4"><span className="text-decoration-underline">{state.zoneType ? state.zoneType == 3 ? 'منطقه عادی' : state.zoneType == 5 ? 'منطقه آزاد تجاری - اقتصادی' : '' : 'تعریف نشده'}</span></div>
                        </div>
                        {/* <div className="row mx-1 my-1 align-items-center justify-content-center">
                            <div className="col-2"><span className="fw-bolder">خدمات تفاهم نامه</span></div>
                            <div className="col-4"><span className="text-decoration-underline">{
                                state.services
                                    ? \`\${state.services}\`.split(',').length > 0
                                        ? console.log('Y')
                                            ? \`\${state.services}\`.split(',').includes('0')
                                            : 'تسهیلات اعتباری'
                                        : console.log('N')
                                    //         ? \`\${state.services}\`.split(',').includes('1')
                                    //         //         ? 'بیمه'
                                    //         //         : \`\${state.services}\`.split(',').includes('2')
                                    //         //             ? 'کارتخوان'
                                    //         //             : \`\${state.services}\`.split(',').includes('3')
                                    //         //                 ? 'خودپرداز'
                                    //         : ''
                                    : 'تعریف نشده'
                            }</span></div>
                            <div className="col-2"><span className="fw-bolder">***</span></div>
                            <div className="col-4"><span className="text-decoration-underline">{state.branchTitle ? state.branchTitle : 'تعریف نشده'}</span></div>
                        </div> */}
                        <div className="row mx-1 my-1 align-items-center justify-content-center">
                            <div className="col-2"><span className="fw-bolder">مدیریت شعب</span></div>
                            <div className="col-4"><span className="text-decoration-underline">{state.branchManagementTitle ? state.branchManagementTitle : 'تعریف نشده'}</span></div>
                            <div className="col-2"><span className="fw-bolder">شعبه عامل</span></div>
                            <div className="col-4"><span className="text-decoration-underline">{state.branchTitle ? state.branchTitle : 'تعریف نشده'}</span></div>
                        </div>
                        <div className="row mx-1 my-1 align-items-center justify-content-center">
                            <div className="col-2"><span className="fw-bolder">نام مشتری</span></div>
                            <div className="col-4"><span className="text-decoration-underline">{state.customerName ? state.customerName : 'تعریف نشده'}</span></div>
                            <div className="col-2"><span className="fw-bolder">شماره مشتری</span></div>
                            <div className="col-4"><span className="text-decoration-underline">{state.extCustId ? state.extCustId : 'تعریف نشده'}</span></div>
                        </div>
                        <div className="row mx-1 my-1 align-items-center justify-content-center">
                            <div className="col-2"><span className="fw-bolder">تاریخ انعقاد</span></div>
                            <div className="col-4"><span className="text-decoration-underline">{state.startDate ? state.startDate : 'تعریف نشده'}</span></div>
                            <div className="col-2"><span className="fw-bolder">تاریخ انقضاء</span></div>
                            <div className="col-4"><span className="text-decoration-underline">{state.expireDate ? state.expireDate : 'تعریف نشده'}</span></div>
                        </div>
                        <div className="row mx-1 my-1 align-items-center justify-content-center">
                            <div className="col-2"><span className="fw-bolder">مبلغ ثابت</span></div>
                            <div className="col-4"><span className="text-decoration-underline">{state.fixAmount !== null ? addCommas(state.fixAmount) : 0}{state.fixAmount !== null ? ' ریال' : ''}</span></div>
                            <div className="col-2"><span className="fw-bolder">معدل</span></div>
                            <div className="col-4"><span className="text-decoration-underline">{0}</span></div>
                        </div>
                        <div className="row mx-1 my-1 align-items-center justify-content-center">
                            <div className="col-2"><span className="fw-bolder">تعداد افراد</span></div>
                            <div className="col-4"><span className="text-decoration-underline">{state.numOfPerson ? state.numOfPerson : 'تعریف نشده'}</span></div>
                            <div className="col-2"><span className="fw-bolder">تجدید پذیری</span></div>
                            <div className="col-4"><span className="text-decoration-underline">{typeof state.includeBalance == 'number' ? parseInt(state.includeBalance) == 0 ? 'بلی' : 'خیر' : 'تعریف نشده'}</span></div>
                        </div>
                        {/* <div className="row mx-1 my-1 align-items-center justify-content-center">
                            <div className="col-2"><span className="fw-bolder">شماره مصوبه</span></div>
                            <div className="col-4"><span className="text-decoration-underline">{state.seri == '' ? <span className="text-danger">تعریف نشده</span> : <span className="text-success fw-bold">{state.seri}</span>}</span></div>
                            <div className="col-2"><span className="fw-bolder">وضعیت اعطا</span></div>
                            <div className="col-4"><span className="text-decoration-underline">{state.loanStateDescription == '' ? <span className="text-danger">تعریف نشده</span> : state.loanStateCode == 0 ? <span className="text-danger fw-bold">{state.loanStateDescription}</span> : <span className="text-success fw-bold">{state.loanStateDescription}</span>}</span></div>
                        </div> */}
                    </FieldSet>
                    <p />
                    {errorMessage.length == 0 &&
                        <div className="form-floating">
                            <select
                                className="form-select form-select-sm"
                                id={name}
                                name={name}
                                aria-label="Floating label select example"
                                onChange={(e) => {
                                    setTafStateCode(e.target.selectedOptions[0]['value'])
                                    setTafStateDescription(e.target.selectedOptions[0]['text'])
                                }}
                                disabled={disabled}
                                value={tafStateCode}
                            >
                                {typeof tafStateCode != 'number' && <option defaultValue value="100">انتخاب کنید</option>}
                                {dataSource.map((item, index) => {
                                    return <option key={index} value={item['key']}>{item['value']}</option>;
                                })}
                            </select>
                            <label htmlFor={name}>{lable}</label>
                        </div>
                    }
                    <p />
                    {(errorMessage.length == 0 && (tafStateCode != '' && tafStateCode != 100)) && <FieldSet title="">
                        <div className="row mx-1 my-1 align-items-center justify-content-center">
                            {/*
                            <div className="col-8">
                                <div className={"form-check form-check-inline"}>
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="sendToHQCheckbox"
                                        name="sendToHQCheckbox"
                                        onChange={(e) => {
                                            confirm.length == 0 ? setConfirm(['0']) : setConfirm([])
                                        }}
                                        disabled={false || message.length > 0}
                                        checked={(typeof confirm !== 'undefined' && confirm.includes('0')) ? true : false}
                                    />
                                    <label className="form-check-label small" htmlFor="sendToHQCheckbox">
                                        باارسال وضعیت تفاهم نامه با مشخصات فوق، موافق هستم؟
                                    </label>
                                </div>
                            </div>
                            */}
                            <div className="col-4">
                                <button
                                    type="button"
                                    className={\`btn \${confirm.length == 1 && confirm[0] == '0' ? "btn-outline-primary btn-sm" : "btn-outline-secondary btn-sm"}\`}
                                    // disabled={confirm.length == 1 && confirm[0] == '0' ? false : true}
                                    disabled={updated == true}
                                    onClick={(e) => {
                                        setIsSubmitting(true)
                                        updateActiveTafahomInformation()
                                        setIsSubmitting(false)
                                        setConfirm([])
                                    }}
                                >
                                    {isSubmitting ? 'درحال ارسال اطلاعات...' : 'ارسال اطلاعات'}
                                </button>
                            </div>
                        </div>
                    </FieldSet>
                    }
                    {/* <p />
                    {
                        message.length > 0 &&
                        <FieldSet title="">
                            <div className="row mx-1 my-1 align-items-center justify-content-center">
                                <div className="col-8">
                                    <span className="small">{message}</span>
                                </div>
                            </div>
                        </FieldSet>
                    } */}
                </div >
            </div>
        )
        :
        (
            <div className="col"></div>
        )
}`;
  createFile(`${entityField}`, `${'TafState'}.jsx`, injectedContent);

  /********************************************************************************
  *                        SendToHQ Component file
  ********************************************************************************/
  injectedContent = `import React, { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import { FieldSet } from "../fieldSet/FieldSet";
import { sendRequest } from '../../../util/makeRequest';
import { fakeAuthProvider } from "../../../auth";
import utils from "../DatePicker/shared/localeUtils";
import { removeSlashFromDate } from "../../../util/Date";
import { addCommas } from '@persian-tools/persian-tools'
import { validateTafahomInformationBeforeSeri } from "../../../util/Validation";

export const SendToHQ = ({ id, name, type, value, onChangeStatus, onSelectItem, dataSource, onBlur, placeholder, lable, tafCode, disabled, autocomplete, isVisible, mode }) => {
    const [state, setState] = useState({})
    const [seri, setSeri] = useState(0)
    const [currentSeri, setCurrentSeri] = useState(value)
    const [currentValue, setCurrentValue] = useState();
    const [confirm, setConfirm] = useState([])
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [message, setMessage] = useState('')
    const [errorCode, setErrorCode] = useState(0)
    const [errorMessage, setErrorMessage] = useState('')
    const params = useParams();
    const credential = fakeAuthProvider.getCredential()
    const [updated, setUpdated] = useState(false);

    const sendToHQ = async () => {
        try {
            const response = await sendRequest(
                \`${backendUrl}/getSeriFromTashilats\`,
                "POST",
                {
                    userId: credential.userName,
                    loanState: 1,
                    zoneType: state.zoneType,
                    numPerson: state.numOfPerson,
                    includBalance: state.includeBalance,
                    createDate: removeSlashFromDate(state.startDate),
                    expireDate: removeSlashFromDate(state.expireDate),
                    agentBranchManagement: state.branchManagement,
                    agentBranch: state.branch,
                    extCustId: state.extCustId,
                    fixAmount: state.fixAmount !== null ? state.fixAmount : 0,
                    avg: 0,
                    tafCode: state.tafCode,
                    title: state.title,
                    desciption: ''
                }
            )
            // 31848050 ->  tafahomname tekrari ast va ghablan mosavabe gerefte ast
            // 3181888  ->  tafahomname takhsis yafte va emkan e delete vojood nadarad
            // 3181586  ->  tafahomname ba in shomare vojoud nadarad
            // 100      ->  etelaat yaft nashod
            // 1000     ->  shomare moshtari mojoud nemibashad
            
            if (response.data.error == 0) {
              setSeri(response.data.seri)
              // setMessage(["اطلاعات تفاهم نامه با موفقیت ارسال و شماره مصوبه ",<strong key={0}><u>{response.data.seri}</u></strong>," دریافت گردید.", <br key={100}/>, " "])
              // onSelectItem({
              //   target: {
              //       seri: response.data.seri,
              //       date: utils('fa').getToday().year + '/' + utils('fa').getToday().month + '/' + utils('fa').getToday().day
              //   }
              // })
            } else {
                setErrorCode(response.data.error)
                if (response.data.error == 31848050) {
                    setErrorMessage(\`این تفاهم نامه قبلا ثبت شده است.\`)
                } else if (response.data.error == 3181888) {
                    setErrorMessage(\`تفاهم نامه تخصیص یافته و امکان حذف وجود ندارد.\`)
                } else if (response.data.error == 1000) {
                    setErrorMessage(\`شماره مشتری موجود نمی باشد.\`)
                } else if (response.data.error == 100) {
                    setErrorMessage(\`شماره مشتری مربوط به مشتری حقوقی نمی باشد.\`)
                } else if (response.data.error == 3181886) {
                    setErrorMessage(\`تفاهم نامه ای با کد تفاهم نامه وارد شده، وجود ندارد.\`)
                } 
                
                else if (response.data.error == 3181586) {
                    setErrorMessage(\`تفاهم نامه با اين شماره وجود ندارد.\`)
                } else if (response.data.error == -407) {
                    setErrorMessage(\`فیلدهای ضروری تکمیل نشده اند.\`)
                } else {
                  setErrorMessage(\`خطای عمومی \`)
                }
            }
            return response.data
        } catch (error) {
            // setErrorMessage(\`خطا در بروزرسانی پورتال تفاهم نامه ها.\`)
            setErrorMessage(JSON.parse(error).message)
        }
    }

    useEffect(() => {
        async function getActiveTafahomInformation() {
            const response = await sendRequest(
                \`${backendUrl}/tafahomInformations/\${params.archiveNumber}\`,
                "GET",
            );
            return response.data
        }
        try {
            getActiveTafahomInformation()
                .then((response) => {
                    setState(response.content[0])
                }).catch(err => {
                    setErrorMessage(JSON.parse(err).message)
                })
        } catch (error) {
        }
    }, [])

    useEffect(() => {
        if (typeof state != 'undefined' && Object.keys(state).length > 0) {
          try {
            if (state.tafStateCode == null || state.tafStateCode != 3) { throw (\`تفاهم نامه در وضعیت نافذ نمی باشد.\`) }
            if (state.tafStateDescription == '') { throw (\`تفاهم نامه در وضعیت نافذ نمی باشد.\`) }
            validateTafahomInformationBeforeSeri(state)
          } catch (error) {
            setErrorMessage(error)
          }
        }
    }, [state])

    useEffect(() => {
        async function updateActiveTafahomInformation() {
            const response = await sendRequest(
                \`${backendUrl}/tafahomInformations/\${params.archiveNumber}\`,
                "PUT",
                {
                    ...state,
                    seri: seri,
                    loanStateCode: 1,
                    loanStateDescription: \`فعال\`,
                }
            ).then((response) => {
                if (response.status == 204) {
                    setUpdated(true)
                    return response.data
                }
            }).catch((error) => {
                // setErrorCode(response.data.error)
                setErrorMessage(\`خطا در بروزرسانی پورتال تفاهم نامه ها.\`)
            })
        }
        if (seri > 0) {
            try {
                updateActiveTafahomInformation()
                    .then((response) => {
                        setMessage(["اطلاعات تفاهم نامه با موفقیت ارسال شد.", <br key={0}/>,"وضعیت اعطای تفاهم نامه ", <strong key={1}><u>فعال </u></strong> ," و شماره مصوبه ", <strong key={2}><u>{seri}</u></strong>, " دریافت گردید.", <br key={3} />, " "])
                        onSelectItem({
                            target: {
                                seri: seri,
                                date: utils('fa').getToday().year + '/' + utils('fa').getToday().month + '/' + utils('fa').getToday().day
                            }
                        })
                    })
            } catch (error) {
            }
        }
    }, [seri])

    //  usefull in EDIT
    useEffect(() => {
        if (typeof value != 'undefined' && value != '') {
            setCurrentSeri(value)
        }
    }, [value])

    useEffect(() => {
        if (typeof currentSeri != 'undefined' && currentSeri != '' && typeof dataSource != 'undefined' && dataSource.length > 0) {
            // setCurrentValue(dataSource[currentSeri - 1]['value'])
        }
    }, [currentSeri])

    return isVisible
    ?
    (
        <div className="d-flex justify-content-center">
            <div className="col-7">
                <p />
                <p className="text-center m-0 ">{(mode == 'new') && <span className="small text-muted">شما در حال ارسال تفاهم نامه با مشخصات زیر به اداره کل برنامه ریزی ونظارت اعتبای جهت اخذ شماره مصوبه مربوطه هستید</span>}</p>
                <p className="text-center m-0 ">{(mode != 'new' && seri != 'undefined' && seri > 0) && <span className="small text-muted">برای تفاهم نامه با مشخصات زیر، شماره مصوبه <strong><u>{value}</u></strong> اخذ شده و امکان ارسال مجدد مقدور می باشد.</span>}</p>
                <p className="text-center m-0 ">{errorMessage.length > 0 ? <span className="small text-danger">{errorMessage}</span> : <span className="small text-danger">{''}</span>}</p>
                <p className="text-center m-0 ">{(errorMessage.length == 0 && message.length > 0) ? <span className="small text-success">{message}</span> : <span className="small text-success">{''}</span>}</p>
                <FieldSet title="مشخصات تفاهم نامه">
                    <div className="row mx-1 my-1 align-items-center justify-content-center">
                        <div className="col-2"><span className="fw-bolder">عنوان</span></div>
                        <div className="col-4"><span className="text-decoration-underline">{state.title ? state.title : 'تعریف نشده'}</span></div>
                        <div className="col-2"><span className="fw-bolder">کد تفاهم نامه</span></div>
                        <div className="col-4"><span className="text-decoration-underline">{state.tafCode ? state.tafCode : 'تعریف نشده'}</span></div>
                    </div>
                    <div className="row mx-1 my-1 align-items-center justify-content-center">
                        <div className="col-2"><span className="fw-bolder">وضعیت</span></div>
                        <div className="col-4"><span className="text-decoration-underline">{state.tafStateDescription}</span></div>
                        <div className="col-2"><span className="fw-bolder">شماره آرشیو</span></div>
                        <div className="col-4"><span className="text-decoration-underline">{state.archiveNumber ? state.archiveNumber : 'تعریف نشده'}</span></div>
                    </div>
                    <div className="row mx-1 my-1 align-items-center justify-content-center">
                        <div className="col-2"><span className="fw-bolder">دامنه تفاهم نامه</span></div>
                        <div className="col-4"><span className="text-decoration-underline">{state.tafScope == 0 ? 'کشوری' : state.tafScope == 1 ? 'استانی' : state.tafScope == 2 ? 'تخصصی' : 'تعریف نشده'}</span></div>
                        <div className="col-2"><span className="fw-bolder">نوع منطقه</span></div>
                        <div className="col-4"><span className="text-decoration-underline">{state.zoneType ? state.zoneType == 3 ? 'منطقه عادی' : state.zoneType == 5 ? 'منطقه آزاد تجاری - اقتصادی' : '' : 'تعریف نشده'}</span></div>
                    </div>
                    {/* <div className="row mx-1 my-1 align-items-center justify-content-center">
                    <div className="col-2"><span className="fw-bolder">خدمات تفاهم نامه</span></div>
                    <div className="col-4"><span className="text-decoration-underline">{
                        state.services
                            ? \`\${state.services}\`.split(',').length > 0
                                ? console.log('Y')
                                    ? \`\${state.services}\`.split(',').includes('0')
                                    : 'تسهیلات اعتباری'
                                : console.log('N')
                            //         ? \`\${state.services}\`.split(',').includes('1')
                            //         //         ? 'بیمه'
                            //         //         : \`\${state.services}\`.split(',').includes('2')
                            //         //             ? 'کارتخوان'
                            //         //             : \`\${state.services}\`.split(',').includes('3')
                            //         //                 ? 'خودپرداز'
                            //         : ''
                            : 'تعریف نشده'
                    }</span></div>
                    <div className="col-2"><span className="fw-bolder">***</span></div>
                    <div className="col-4"><span className="text-decoration-underline">{state.branchTitle ? state.branchTitle : 'تعریف نشده'}</span></div>
                    </div> */}
                    <div className="row mx-1 my-1 align-items-center justify-content-center">
                        <div className="col-2"><span className="fw-bolder">مدیریت شعب</span></div>
                        <div className="col-4"><span className="text-decoration-underline">{state.branchManagementTitle ? state.branchManagementTitle : 'تعریف نشده'}</span></div>
                        <div className="col-2"><span className="fw-bolder">شعبه عامل</span></div>
                        <div className="col-4"><span className="text-decoration-underline">{state.branchTitle ? state.branchTitle : 'تعریف نشده'}</span></div>
                    </div>
                    <div className="row mx-1 my-1 align-items-center justify-content-center">
                        <div className="col-2"><span className="fw-bolder">نام مشتری</span></div>
                        <div className="col-4"><span className="text-decoration-underline">{state.customerName}</span></div>
                        <div className="col-2"><span className="fw-bolder">شماره مشتری</span></div>
                        <div className="col-4"><span className="text-decoration-underline">{state.extCustId}</span></div>
                    </div>
                    <div className="row mx-1 my-1 align-items-center justify-content-center">
                        <div className="col-2"><span className="fw-bolder">تاریخ انعقاد</span></div>
                        <div className="col-4"><span className="text-decoration-underline">{state.startDate}</span></div>
                        <div className="col-2"><span className="fw-bolder">تاریخ انقضاء</span></div>
                        <div className="col-4"><span className="text-decoration-underline">{state.expireDate}</span></div>
                    </div>
                    <div className="row mx-1 my-1 align-items-center justify-content-center">
                        <div className="col-2"><span className="fw-bolder">مبلغ ثابت</span></div>
                        <div className="col-4"><span className="text-decoration-underline">{state.fixAmount !== null ? addCommas(state.fixAmount) : 0}{state.fixAmount !== null ? ' ریال' : ''}</span></div>
                        <div className="col-2"><span className="fw-bolder">معدل</span></div>
                        <div className="col-4"><span className="text-decoration-underline">{0}</span></div>
                    </div>
                    <div className="row mx-1 my-1 align-items-center justify-content-center">
                        <div className="col-2"><span className="fw-bolder">تعداد افراد</span></div>
                        <div className="col-4"><span className="text-decoration-underline">{state.numOfPerson}</span></div>
                        <div className="col-2"><span className="fw-bolder">تجدید پذیری</span></div>
                        <div className="col-4"><span className="text-decoration-underline">{typeof state.includeBalance == 'number' ? parseInt(state.includeBalance) == 0 ? 'بلی' : 'خیر' : 'تعریف نشده'}</span></div>
                    </div>
                    <div className="row mx-1 my-1 align-items-center justify-content-center">
                    <div className="col-2"><span className="fw-bolder">شماره مصوبه</span></div>
                        <div className="col-4"><span className="text-decoration-underline">{state.seri == '' ? <span className="text-danger">تعریف نشده</span> : <span className="text-success fw-bold">{state.seri}</span>}</span></div>
                        <div className="col-2"><span className="fw-bolder">وضعیت اعطا</span></div>
                        <div className="col-4"><span className="text-decoration-underline">{state.loanStateDescription == '' ? <span className="text-danger">تعریف نشده</span> : state.loanStateCode == 0 ? <span className="text-danger fw-bold">{state.loanStateDescription}</span> : <span className="text-success fw-bold">{state.loanStateDescription}</span>}</span></div>
                    </div>
                </FieldSet>
                <p />
                {errorMessage.length == 0 &&
                    <FieldSet title="">
                        <div className="row mx-1 my-1 align-items-center justify-content-center">
                            {/* <div className="col-8">
                                <div className={"form-check form-check-inline"}>
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="sendToHQCheckbox"
                                        name="sendToHQCheckbox"
                                        value={0}
                                        onChange={(e) => {
                                            confirm.length == 0 ? setConfirm(['0']) : setConfirm([])
                                        }}
                                        disabled={false || message.length > 0 || typeof currentSeri != 'undefined' && currentSeri != ''}
                                        checked={(typeof confirm !== 'undefined' && confirm.includes('0')) ? true : false}
                                    />
                                    <label className="form-check-label small" htmlFor="sendToHQCheckbox">
                                        باارسال تفاهم نامه بامشخصات فوق موافق هستم؟
                                    </label>
                                </div>
                            </div> */}
                            <div className="col-4">
                                <button
                                    type="button"
                                    className={\`btn \${confirm.length == 1 && confirm[0] == '0' ? "btn-outline-primary btn-sm" : "btn-outline-secondary btn-sm"}\`}
                                    // disabled={confirm.length == 1 && confirm[0] == '0' ? false : true}
                                    disabled={updated == true}
                                    onClick={(e) => {
                                        setIsSubmitting(true)
                                        sendToHQ()
                                        setIsSubmitting(false)
                                        setConfirm([])
                                    }}
                                >
                                    {isSubmitting ? 'درحال ارسال اطلاعات...' : 'ارسال اطلاعات'}
                                </button>
                            </div>
                        </div>
                    </FieldSet>
                }
              {/* <p />
                {
                    message.length > 0 &&
                    <FieldSet title="">
                        <div className="row mx-1 my-1 align-items-center justify-content-center">
                            <div className="col-8">
                            ${space}<span className="small">{message}</span>
                            </div>
                        </div>
                    </FieldSet>
              } */}
            </div>
        </div >
    )
    :
    (
    ${space}<div className="col"></div>
    )
}`;
  createFile(`${entityField}`, `${'SendToHQ'}.jsx`, injectedContent);

  /********************************************************************************
  *                        loanState Component file
  ********************************************************************************/
  injectedContent = `import React, { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import { FieldSet } from "../fieldSet/FieldSet";
import { sendRequest } from '../../../util/makeRequest';
import { fakeAuthProvider } from "../../../auth";
import utils from "../DatePicker/shared/localeUtils";
import { addCommas } from '@persian-tools/persian-tools'
import { validateTafahomInformation4TafState } from "../../../util/Validation";

export const LoanState = ({ id, name, type, value, onChangeStatus, onSelectItem, dataSource, onBlur, placeholder, lable, tafCode, disabled, autocomplete, isVisible, mode }) => {

    const [state, setState] = useState({})
    const [loanStateCode, setLoanStateCode] = useState(value)
    const [loanStateDescription, setLoanStateDescription] = useState('');
    const [updated, setUpdated] = useState(false);
    const [confirm, setConfirm] = useState([])
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [message, setMessage] = useState('')
    const [errorCode, setErrorCode] = useState(0)
    const [errorMessage, setErrorMessage] = useState('')
    
    const params = useParams();
    const credential = fakeAuthProvider.getCredential()

    const updateActiveTafahomInformation = async () => {
      const response = await sendRequest(
          \`${backendUrl}/tafahomInformations/\${params.archiveNumber}\`,
          "PUT",
          {
              ...state,
              loanStateCode: loanStateCode,
              loanStateDescription: loanStateDescription,
          }
      );
      return response.data
    }


    const getRawDate = (date) => {
      const year = date.slice(0, date.indexOf('/', 0))
      const month = date.slice(date.indexOf('/', 0) + 1, date.indexOf('/', 5)).length == 1 ? 0 + date.slice(date.indexOf('/', 0) + 1, date.indexOf('/', 5)) : date.slice(date.indexOf('/', 0) + 1, date.indexOf('/', 5))
      const day = date.slice(date.indexOf('/', 5) + 1).length == 1 ? 0 + date.slice(date.indexOf('/', 5) + 1) : date.slice(date.indexOf('/', 5) + 1)
      return year + month + day
    }

    const updateHQ = async () => {
        try {
            const response = await sendRequest(
              \`${backendUrl}/activeDeActiveTashilats\`,
              "POST",
              {
                  userId: credential.userName,
                  loanState: loanStateCode,
                  // zoneType: 3,
                  zoneType: state.zoneType,
                  numPerson: state.numOfPerson,
                  includBalance: state.includeBalance,
                  expireDate: getRawDate(state.expireDate),
                  branchManagement: state.branchManagement,
                  agentBranch: state.branch,
                  extCustId: state.extCustId,
                  fixAmount: state.fixAmount !== null ? state.fixAmount : 0,
                  seri: state.seri,
                  description: state.title,
                  comment: ''
              }
            )
            // 31848050 ->  tafahomname tekrari ast va ghablan mosavabe gerefte ast
            // 3181888  ->  tafahomname takhsis yafte va emkan e delete vojood nadarad
            // 3181586  ->  tafahomname ba in shomare vojoud nadarad
            // 100      ->  etelaat yaft nashod
            // 1000     ->  shomare moshtari mojoud nemibashad
              if (response.data.error == 0) {
                  setUpdated(true)
                  // setMessage(["وضعیت اعطا برای تفاهم نامه فوق  با موفقیت به  ", <strong key={0}><u>{currentValue}</u></strong>, " تغییر یافت.", <br key={100} />, " "])
                  // onSelectItem({
                  //     target: {
                  //         seri: \`فعال\`,
                  //         date: utils('fa').getToday().year + '/' + utils('fa').getToday().month + '/' + utils('fa').getToday().day
                  //     }
                  // })
            } else {
                setErrorCode(response.data.error)
                if (response.data.error == 31848050) {
                    setMessage(\`این تفاهم نامه قبلا ثبت شده است.\`)
                } else if (response.data.error == 3181888) {
                    setMessage(\`تفاهم نامه تخصیص یافته و امکان حذف وجود ندارد.\`)
                } else if (response.data.error == 1000) {
                    setMessage(\`شماره مشتری موجود نمی باشد.\`)
                } else if (response.data.error == 100) {
                    setMessage(\`شماره مشتری مربوط به مشتری حقوقی نمی باشد.\`)
                } else if (response.data.error == 3181886) {
                    setMessage(\`تفاهم نامه ای با کد تفاهم نامه وارد شده، وجود ندارد.\`)
                } 
                else if (response.data.error == 3181586) {
                    setMessage(\`تفاهم نامه با اين شماره وجود ندارد.\`)
                } else if (response.data.error == -407) {
                    setMessage(\`فیلدهای ضروری تکمیل نشده اند..\`)
                }
            }
            return response.data
        } catch (error) {
        }
    }

    useEffect(() => {
        async function getTafahomInformation() {
            const response = await sendRequest(
                \`${backendUrl}/tafahomInformations/\${params.archiveNumber}\`,
                "GET",
            );
            return response.data
        }
        try {
            getTafahomInformation()
              .then((response) => {
                  setState(response.content[0])
                  setLoanStateCode(response.content[0]['loanStateCode'])
                  setLoanStateDescription(response.content[0]['loanStateDescription'])
              }).catch(err => {
                setErrorMessage(JSON.parse(err).message)
              })
        } catch (error) {

        }
    }, [])

    useEffect(() => {
        if (typeof state != 'undefined' && Object.keys(state).length > 0) {
            try {
                validateTafahomInformation4TafState(state)
            } catch (error) {
                setErrorMessage(error);
            }
      }
    }, [state])

    useEffect(() => {
        async function updateActiveTafahomInformation() {
            const response = await sendRequest(
                \`${backendUrl}/tafahomInformations/\${params.archiveNumber}\`,
                "PUT",
                {
                    ...state,
                    loanStateCode: loanStateCode,
                    loanStateDescription: loanStateDescription,
                }
            );
            return response.data
        }
      if (updated == true) {
          updateActiveTafahomInformation()
              .then((response) => {
                  setMessage(["اطلاعات تفاهم نامه با موفقیت ارسال شد.", <br key={0} />, " اعطای تسهیلات این تفاهم نامه ", <strong key={1}><u>{loanStateDescription} </u></strong>, " گردید.", <br key={3} />, " "])
                  onSelectItem({
                      target: {
                          loanStateCode: loanStateCode,
                          loanStateDescription: loanStateDescription,
                          date: utils('fa').getToday().year + '/' + utils('fa').getToday().month + '/' + utils('fa').getToday().day
                      }
                  })
              }).catch(err => {
                  setErrorMessage(JSON.parse(err).message)
              })
      }
    }, [updated])

    //  usefull in EDIT
    useEffect(() => {
        if (typeof value != 'undefined' && value != '') {
            // setCurrentIndex(value)
        }
    }, [value])


    // useEffect(() => {
        // if (typeof currentIndex != 'undefined' && currentIndex != '' && typeof dataSource != 'undefined' && dataSource.length > 0) {
            // setCurrentValue(dataSource[currentIndex - 1]['value'])
        // }
    // }, [currentIndex])


    return isVisible
        ?
        (
            <div className="d-flex justify-content-center">
                <div className="col-7">
                <p />
                <p className="text-center m-0 ">{(mode == 'new') && <span className="small text-muted">شما درحال ارسال وضعیت اعطای تفاهم نامه با مشخصات زیر، به سامانه تسهیلات متمرکز هستید.</span>}</p>
                {(mode == 'new') &&
                    <p className="text-center m-0 ">
                        <span className="small text-muted">تنها امکان ارسال تغییرات در </span>
                        <span className="small fw-bolder">عنوان تفاهم نامه، مشتری تفاهم نامه، وضعیت اعطای تسهیلات، نوع منطقه، وضعیت تجدید پذیری، تاریخ انقضاء، مدیریت شعب، شعبه عامل،  تعدادافراد، مبلغ ثابت</span>
                        <span className="small text-muted"> به سامانه تسیهلات متمرکز میسر خواهد بود.</span>
                    </p>}
                <p className="text-center m-0 ">{errorMessage.length > 0 ? <span className="small text-danger">{errorMessage}</span> : <span className="small text-danger">{''}</span>}</p>
                <p className="text-center m-0 ">{(errorMessage.length == 0 && message.length > 0) ? <span className="small text-success">{message}</span> : <span className="small text-success">{''}</span>}</p>
                <p />
                    <FieldSet title="مشخصات تفاهم نامه">
                      <div className="row mx-1 my-1 align-items-center justify-content-center">
                          <div className="col-2"><span className="fw-bolder">عنوان</span></div>
                          <div className="col-4"><span className="text-decoration-underline">{state.title ? state.title : 'تعریف نشده'}</span></div>
                          <div className="col-2"><span className="fw-bolder">کد تفاهم نامه</span></div>
                          <div className="col-4"><span className="text-decoration-underline">{state.tafCode ? state.tafCode : 'تعریف نشده'}</span></div>
                      </div>
                      <div className="row mx-1 my-1 align-items-center justify-content-center">
                          <div className="col-2"><span className="fw-bolder">وضعیت</span></div>
                          <div className="col-4"><span className="text-decoration-underline">{state.tafStateDescription}</span></div>
                          <div className="col-2"><span className="fw-bolder">شماره آرشیو</span></div>
                          <div className="col-4"><span className="text-decoration-underline">{state.archiveNumber ? state.archiveNumber : 'تعریف نشده'}</span></div>
                      </div>
                      <div className="row mx-1 my-1 align-items-center justify-content-center">
                          <div className="col-2"><span className="fw-bolder">دامنه تفاهم نامه</span></div>
                          <div className="col-4"><span className="text-decoration-underline">{state.tafScope == 0 ? 'کشوری' : state.tafScope == 1 ? 'استانی' : state.tafScope == 2 ? 'تخصصی' : 'تعریف نشده'}</span></div>
                          <div className="col-2"><span className="fw-bolder">نوع منطقه</span></div>
                          <div className="col-4"><span className="text-decoration-underline">{state.zoneType ? state.zoneType == 3 ? 'منطقه عادی' : state.zoneType == 5 ? 'منطقه آزاد تجاری - اقتصادی' : '' : 'تعریف نشده'}</span></div>
                      </div>
                      {/* <div className="row mx-1 my-1 align-items-center justify-content-center">
                          <div className="col-2"><span className="fw-bolder">خدمات تفاهم نامه</span></div>
                          <div className="col-4"><span className="text-decoration-underline">{
                              state.services
                                  ? \`\${state.services}\`.split(',').length > 0
                                      ? console.log('Y')
                                          ? \`\${state.services}\`.split(',').includes('0')
                                          : 'تسهیلات اعتباری'
                                      : console.log('N')
                                  //         ? \`\${state.services}\`.split(',').includes('1')
                                  //         //         ? 'بیمه'
                                  //         //         : \`\${state.services}\`.split(',').includes('2')
                                  //         //             ? 'کارتخوان'
                                  //         //             : \`\${state.services}\`.split(',').includes('3')
                                  //         //                 ? 'خودپرداز'
                                  //         : ''
                                  : 'تعریف نشده'
                          }</span></div>
                          <div className="col-2"><span className="fw-bolder">***</span></div>
                          <div className="col-4"><span className="text-decoration-underline">{state.branchTitle ? state.branchTitle : 'تعریف نشده'}</span></div>
                      </div> */}
                      <div className="row mx-1 my-1 align-items-center justify-content-center">
                          <div className="col-2"><span className="fw-bolder">مدیریت شعب</span></div>
                          <div className="col-4"><span className="text-decoration-underline">{state.branchManagementTitle ? state.branchManagementTitle : 'تعریف نشده'}</span></div>
                          <div className="col-2"><span className="fw-bolder">شعبه عامل</span></div>
                          <div className="col-4"><span className="text-decoration-underline">{state.branchTitle ? state.branchTitle : 'تعریف نشده'}</span></div>
                      </div>
                      <div className="row mx-1 my-1 align-items-center justify-content-center">
                          <div className="col-2"><span className="fw-bolder">نام مشتری</span></div>
                          <div className="col-4"><span className="text-decoration-underline">{state.customerName}</span></div>
                          <div className="col-2"><span className="fw-bolder">شماره مشتری</span></div>
                          <div className="col-4"><span className="text-decoration-underline">{state.extCustId}</span></div>
                      </div>
                      <div className="row mx-1 my-1 align-items-center justify-content-center">
                          <div className="col-2"><span className="fw-bolder">تاریخ انعقاد</span></div>
                          <div className="col-4"><span className="text-decoration-underline">{state.startDate}</span></div>
                          <div className="col-2"><span className="fw-bolder">تاریخ انقضاء</span></div>
                          <div className="col-4"><span className="text-decoration-underline">{state.expireDate}</span></div>
                      </div>
                      <div className="row mx-1 my-1 align-items-center justify-content-center">
                          <div className="col-2"><span className="fw-bolder">مبلغ ثابت</span></div>
                          <div className="col-4"><span className="text-decoration-underline">{state.fixAmount !== null ? addCommas(state.fixAmount) : 0}{state.fixAmount !== null ? ' ریال' : ''}</span></div>
                          <div className="col-2"><span className="fw-bolder">معدل</span></div>
                          <div className="col-4"><span className="text-decoration-underline">{0}</span></div>
                      </div>
                      <div className="row mx-1 my-1 align-items-center justify-content-center">
                          <div className="col-2"><span className="fw-bolder">تعداد افراد</span></div>
                          <div className="col-4"><span className="text-decoration-underline">{state.numOfPerson}</span></div>
                          <div className="col-2"><span className="fw-bolder">تجدید پذیری</span></div>
                          <div className="col-4"><span className="text-decoration-underline">{typeof state.includeBalance == 'number' ? parseInt(state.includeBalance) == 0 ? 'بلی' : 'خیر' : 'تعریف نشده'}</span></div>
                      </div>
                      <div className="row mx-1 my-1 align-items-center justify-content-center">
                          <div className="col-2"><span className="fw-bolder">شماره مصوبه</span></div>
                          <div className="col-4"><span className="text-decoration-underline">{state.seri == '' ? <span className="text-danger">تعریف نشده</span> : <span className="text-success fw-bold">{state.seri}</span>}</span></div>
                          <div className="col-2"><span className="fw-bolder">وضعیت اعطا</span></div>
                          <div className="col-4"><span className="text-decoration-underline">{state.loanStateDescription == '' ? <span className="text-danger">تعریف نشده</span> : state.loanStateCode == 0 ? <span className="text-danger fw-bold">{state.loanStateDescription}</span> : <span className="text-success fw-bold">{state.loanStateDescription}</span>}</span></div>
                      </div>
                    </FieldSet>
                    <p />
                    {errorMessage.length == 0 &&
                        <div className="form-floating">
                          <select
                              className="form-select form-select-sm"
                              id={name}
                              name={name}
                              aria-label="Floating label select example"
                              onChange={(e) => {
                                setLoanStateCode(e.target.selectedIndex)
                                setLoanStateDescription(e.target.value)
                              }}
                              disabled={disabled}
                              value={loanStateDescription}
                          >
                              {/* <option defaultValue>انتخاب کنید</option> */}
                              {dataSource.map((item, index) => {
                                  return <option key={item['key']}>{item['value']}</option>;
                              })}
                          </select>
                          <label htmlFor={name}>{lable}</label>
                      </div>
                    }
                    <p />
                    {errorMessage.length == 0 &&
                        <FieldSet title="">
                            <div className="row mx-1 my-1 align-items-center justify-content-center">
                                {/* <div className="col-8">
                                    <div className={"form-check form-check-inline"}>
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="sendToHQCheckbox"
                                            name="sendToHQCheckbox"
                                            // value={0}
                                            onChange={(e) => {
                                                confirm.length == 0 ? setConfirm(['0']) : setConfirm([])
                                            }}
                                            disabled={false || message.length > 0 }
                                            checked={(typeof confirm !== 'undefined' && confirm.includes('0')) ? true : false}
                                        />
                                        <label className="form-check-label small" htmlFor="sendToHQCheckbox">
                                            باارسال وضعیت اعطای تفاهم نامه با مشخصات فوق، موافق هستم؟
                                        </label>
                                    </div>
                                </div> */}
                                <div className="col-4">
                                    <button
                                        type="button"
                                        className={\`btn \${confirm.length == 1 && confirm[0] == '0' ? "btn-outline-primary btn-sm" : "btn-outline-secondary btn-sm"}\`}
                                        // disabled={confirm.length == 1 && confirm[0] == '0' ? false : true}
                                        disabled={updated == true}
                                        onClick={(e) => {
                                            setIsSubmitting(true)
                                            updateHQ()
                                            setIsSubmitting(false)
                                            setConfirm([])
                                        }}
                                    >
                                        {isSubmitting ? 'درحال ارسال اطلاعات...' : 'ارسال اطلاعات'}
                                    </button>
                                </div>
                            </div>
                        </FieldSet>
                  }
                  {/* <p />
                    {
                        message.length > 0 &&
                        <FieldSet title="">
                            <div className="row mx-1 my-1 align-items-center justify-content-center">
                                <div className="col-8">
                                    <span className="small">{message}</span>
                                </div>
                            </div>
                        </FieldSet>
                    } */}
                </div >
            </div>
        )
        :
        (
            <div className="col"></div>
        )
}
`;
  createFile(`${entityField}`, `${'loanState'}.jsx`, injectedContent);

  /********************************************************************************
  *                        smsUserSelection Component file
  ********************************************************************************/
  injectedContent = `import React, { useState, useEffect } from "react"
import { useLoaderData, useParams } from 'react-router-dom';
import { FieldSet } from "../fieldSet/FieldSet";
import TableBody from "../table/tableBody";
import TableHeader from "../table/tableHeader";
import { sendRequest } from '../../../util/makeRequest';
import { fakeAuthProvider } from "../../../auth";

export const SmsUserSelection = ({ id, name, type, value, onChangeStatus, onChangeData, onSelectItem, dataSource, onBlur, placeholder, lable, tafCode, disabled, autocomplete, isVisible, mode }) => {

  const [uniqueUserArray, setUniqueUserArray] = useState([])
  const [uniqueAgentArray, setUniqueAgentArray] = useState([])
  const [selectedUser, setSelectedUser] = useState([])
  const [selectedAgent, setSelectedAgent] = useState([])
  const loaderData = useLoaderData();


  useEffect(() => {
    async function getAllAgents(archiveNumber, tafCode) {
      const response = await sendRequest(
        \`${backendUrl}/tafahomInformations\${archiveNumber == 0 ? '' : \`/\${archiveNumber}/agents\`}?tafCode=\${tafCode}\`,
        'GET',
        null
      );
      return response.data
    }
    async function getAllUsers() {
      const response = await sendRequest(
        \`${backendUrl}/users\`,
        "GET",
      );
      return response.data
    }
    try {
      const archiveNumber = fakeAuthProvider.activeProfile.archiveNumber == '' ? 0 : fakeAuthProvider.activeProfile.archiveNumber
      const tafCode = fakeAuthProvider.activeProfile.tafCode == '' ? 0 : fakeAuthProvider.activeProfile.tafCode
      Promise.all([
        getAllAgents(archiveNumber, tafCode),
        getAllUsers()
      ]).then((response) => {
        return {
          agents: response[0].content,
          users: response[1].content
        }
      }).then((allAudiences) => {
        const uniqueAgents = allAudiences['agents'].filter((value, index, array) => {
          if (value.mobilePhoneNumber != "") return value
        })
        const uniqueUsers = allAudiences['users'].filter((value, index, array) => {
          if (value.telNumber != "") return value
        })
        return {
          uniqueAgents: uniqueAgents,
          uniqueUsers: uniqueUsers
        }
      }).then((uniqueAudiences) => {
        if (mode == 'edit' || mode == 'view') {
          const selectedAgentIds = JSON.parse(loaderData.data.audience)['agents'].split(',')
          const selectedUserIds = JSON.parse(loaderData.data.audience)['users'].split(',')
          setUniqueUserArray(
            uniqueAudiences['uniqueUsers'].map(user => {
              if (selectedUserIds.findIndex(Idx => parseInt(Idx) === user.id) > -1) {
                if (!Object.keys(user).includes('selected')) {
                  if (!selectedUser.includes(user.id)) {
                    setSelectedUser(prevState => [...prevState, user.id])
                  }
                  return {
                    ...user,
                    'selected': 'بلی'
                  }
                }
              } else {
                //  user does NOT selected before
                return user
              }
            }
            )
          )
          setUniqueAgentArray(
            uniqueAudiences['uniqueAgents'].map(agent => {
              if (selectedAgentIds.findIndex(Idx => parseInt(Idx) === agent.idColumn) > -1) {
                if (!Object.keys(agent).includes('selected')) {
                  if (!selectedAgent.includes(agent.idColumn)) {
                    setSelectedAgent([...selectedAgent, agent.idColumn])
                  }
                  return {
                    ...agent,
                    'selected': 'بلی'
                  }
                }
              } else {
                //  agent does NOT selected before
                return agent
              }
            }
            )
          )
        } else {
          setUniqueUserArray(uniqueAudiences.uniqueUsers)
          setUniqueAgentArray(uniqueAudiences.uniqueAgents)                     //
        }
      })
    } catch (error) {

    }
  }, [])

  const updateAgent = (e) => {
    const id = e.idColumn
    setUniqueAgentArray(
      uniqueAgentArray.map(agent => {
        if (agent.idColumn == id) {
          if (Object.keys(agent).includes('selected')) {
            if (agent['selected'] == 'خیر') {
              if (!selectedAgent.includes(id)) {
                setSelectedAgent([...selectedAgent, id])
              }
              return {
                ...agent,
                'selected': 'بلی'
              }
            } else if (agent['selected'] == 'بلی') {
              if (selectedAgent.includes(id)) {
                setSelectedAgent(selectedAgent.filter(item => item != id))
              }
              return {
                ...agent,
                'selected': 'خیر'
              }
            }
          } else if (!Object.keys(agent).includes('selected')) {
            // console.log('User Without selected');
            if (!selectedAgent.includes(id)) {
              setSelectedAgent([...selectedAgent, id])
            }
            return {
              ...agent,
              'selected': 'بلی'
            }
          }
        } else {
          return agent
        }
      }
      )
    )
  }

  const updateUser = (e) => {
    const id = e.id
    setUniqueUserArray(
      uniqueUserArray.map(user => {
        if (user.id == id) {
          if (Object.keys(user).includes('selected')) {
            if (user['selected'] == 'خیر') {
              if (!selectedUser.includes(id)) {
                setSelectedUser([...selectedUser, id])
              }
              return {
                ...user,
                'selected': 'بلی'
              }
            } else if (user['selected'] == 'بلی') {
              if (selectedUser.includes(id)) {
                setSelectedUser(selectedUser.filter(item => item != id))
              }
              return {
                ...user,
                'selected': 'خیر'
              }
            }
          } else if (!Object.keys(user).includes('selected')) {
            // console.log('User Without selected');
            if (!selectedUser.includes(id)) {
              setSelectedUser([...selectedUser, id])
            }
            return {
              ...user,
              'selected': 'بلی'
            }
          }
        } else {
          return user
        }
      }
      )
    )
  }

  useEffect(() => {
    onChangeData({
      'target': {
        'id': id,
        'value': JSON.stringify({
          agents: selectedAgent.toString(),
          users: selectedUser.toString()
        })
      }
    });
  }, [selectedAgent, selectedUser])

  const columnObject = [
    { title: 'firstName', lable: 'نام', backgroundColor: 'E7E7E7', width: '20', fontSize: '', fontWeight: '', textBody: '' },
    { title: 'lastName', lable: 'نام خانوادگی', backgroundColor: 'E7E7E7', width: '20', fontSize: '', fontWeight: '', textBody: '' },
    { title: 'userSelection', lable: 'انتخاب مخاطب', backgroundColor: 'E7E7E7', width: '10', fontSize: '', fontWeight: '', textBody: '' },
  ]

  return isVisible
    ?
    (
      <div className="d-flex justify-content-center">
      {/*
       <div className="col-5">
          <FieldSet title="نماینده سازمان">
            <table className="table">
              {uniqueAgentArray.length == 0 ? <caption className="text-center small">رکوردی برای نمایش وجود ندارد.</caption> : <caption className="text-center small">باانتخاب مخاطب، متن پیامک تنظیم شده به صورت اتوماتیک برای ایشان ارسال خواهد گردید.</caption>}
              <TableHeader columnObject={columnObject} />
              <TableBody dataSource={uniqueAgentArray} columnObject={columnObject} updateState={updateAgent} previousSelect={0} mode={mode} />
            </table>
          </FieldSet>
        </div >
      */}
        <div className="col-5">
          <FieldSet title="کاربران سامانه">
            <table className="table">
              {uniqueUserArray.length == 0 ? <caption className="text-center small">رکوردی برای نمایش وجود ندارد.</caption> : <caption className="text-center small">باانتخاب مخاطب، متن پیامک تنظیم شده به صورت اتوماتیک برای ایشان ارسال خواهد گردید.</caption>}
              <TableHeader columnObject={columnObject} />
              <TableBody dataSource={uniqueUserArray} columnObject={columnObject} updateState={updateUser} previousSelect={0} mode={mode} />
            </table>
          </FieldSet>
        </div >
      </div>
    )
    :
    (
      <div className="col"></div>
    )
}  `
  createFile(`${entityField}`, `${'SmsUserSelection'}.jsx`, injectedContent);

  /********************************************************************************
  *                        DatePicker Component file
  ********************************************************************************/
  // dataSource
  injectedContent = `import React, { useState, useRef, useEffect, useLayoutEffect } from "react"
import './DatePicker.css'
import { Calendar } from './Calendar';
import DatePickerInput from "./DatePickerInput";
import { putZero, getValueType } from './shared/generalUtils';
import { TYPE_SINGLE_DATE, TYPE_MUTLI_DATE, TYPE_RANGE } from './shared/constants';
import { useLocaleUtils } from './shared/hooks';
import utils from './shared/localeUtils'

export const DatePicker = ({ id, name, locale, value, dataSource, onChangeData, placeholder, lable, disabled, autocomplete, isVisible, calendarPopperPosition, minimumDate, maximumDate, shouldHighlightToday }) => {

  const persianToday = utils('fa').getToday()
  const [selectedDayObject, setSelectedDayObject] = shouldHighlightToday == true ? useState(persianToday) : useState(null)
  const calendarContainerElement = useRef(null);
  const inputElement = useRef(null);
  const shouldPreventToggle = useRef(false);
  const [isCalendarOpen, setCalendarVisiblity] = useState(false);

  const { getLanguageDigits } = useLocaleUtils(locale);

  useEffect(() => {
    const handleBlur = () => {
      setCalendarVisiblity(false);
    };
    window.addEventListener('blur', handleBlur, false);
    return () => {
      window.removeEventListener('blur', handleBlur, false);
    };
  }, []);

  // handle input focus/blur
  useEffect(() => {
    const spreadValue = value.split("/");
    let dayObject = {}
    if (value != null && value != '') {
      dayObject = {
        year: parseInt(spreadValue[0]),
        month: parseInt(spreadValue[1]),
        day: parseInt(spreadValue[2])
      },
        setSelectedDayObject(dayObject)
    } else {
      shouldHighlightToday == true && onChangeData(
        {
          target: {
            id,
            name,
            type: "date",
            value: \`\${persianToday['year'] + \`/\` + persianToday['month'] + \`/\` + persianToday['day']}\`
          }
        }
      )
    }
    const valueType = getValueType(selectedDayObject);
    if (valueType === TYPE_MUTLI_DATE) return; // no need to close the calendar
    const shouldCloseCalendar =
      valueType === TYPE_SINGLE_DATE ? !isCalendarOpen : !isCalendarOpen && value.from && value.to;
  }, [value != '', isCalendarOpen]);

  const handleBlur = e => {
    e.persist();
    if (!isCalendarOpen) return;
    const isInnerElementFocused = calendarContainerElement.current.contains(e.relatedTarget);
    if (shouldPreventToggle.current) {
      shouldPreventToggle.current = false;
    } else if (isInnerElementFocused && e.relatedTarget) {
      e.relatedTarget.focus();
    } else {
      setCalendarVisiblity(false);
    }
  };

  const openCalendar = () => {
    if (!shouldPreventToggle.current) setCalendarVisiblity(true);
  };

  // Keep the calendar in the screen bounds if input is near the window edges
  useLayoutEffect(() => {
    if (!isCalendarOpen) return;
    const { left, width, height, top } = calendarContainerElement.current.getBoundingClientRect();
    const { clientWidth, clientHeight } = document.documentElement;
    const isOverflowingFromRight = left + width > clientWidth;
    const isOverflowingFromLeft = left < 0;
    const isOverflowingFromBottom = top + height > clientHeight;

    const getLeftStyle = () => {
      const overflowFromRightDistance = left + width - clientWidth;

      if (!isOverflowingFromRight && !isOverflowingFromLeft) return;
      const overflowFromLeftDistance = Math.abs(left);
      const rightPosition = isOverflowingFromLeft ? overflowFromLeftDistance : 0;

      const leftStyle = isOverflowingFromRight
        ? \`calc(50% - \${overflowFromRightDistance}px)\`
        : \`calc(50% + \${rightPosition}px)\`;
      return leftStyle;
    };

    calendarContainerElement.current.style.left = getLeftStyle();
    if (
      (calendarPopperPosition === 'auto' && isOverflowingFromBottom) ||
      calendarPopperPosition === 'top'
    ) {
      calendarContainerElement.current.classList.add('-top');
    }
  }, [isCalendarOpen]);

  const handleCalendarChange = newValue => {

    setSelectedDayObject(
      newValue
    )

    newValue != null ? onChangeData(
      {
        target: {
          id,
          name,
          type: "date",
          value: \`\${newValue['year'] + \`/\` + newValue['month'] + \`/\` + newValue['day']}\`
        }
      }
    ) : onChangeData({
      target: {
        id,
        name,
        type: "date",
        value: 0
      }
    })

    const valueType = getValueType(newValue);
    if (valueType === TYPE_SINGLE_DATE) setCalendarVisiblity(false);
    else if (valueType === TYPE_RANGE && newValue.from && newValue.to) setCalendarVisiblity(false);
  };

  const handleKeyUp = ({ key }) => {
    switch (key) {
      case 'Enter':
        setCalendarVisiblity(true);
        break;
      case 'Escape':
        setCalendarVisiblity(false);
        shouldPreventToggle.current = true;
        break;
    }
  };

  useEffect(() => {
    if (!isCalendarOpen && shouldPreventToggle.current) {
      shouldPreventToggle.current = false;
    }
  }, [shouldPreventToggle, isCalendarOpen]);

  return isVisible
    ?
    (
      !disabled
        ?
        <div className="col">
          <div
            onFocus={openCalendar}
            onBlur={handleBlur}
            onKeyUp={handleKeyUp}
            className={\`col DatePicker\`}
            role="presentation"
          >
            <DatePickerInput
              ref={inputElement}
              value={selectedDayObject}
              inputName={name}
              id={id}
              locale={locale}
              lable={lable}
            />
            {isCalendarOpen && (
              <>
                <div
                  ref={calendarContainerElement}
                  className="DatePicker__calendarContainer"
                  data-testid="calendar-container"
                  role="presentation"
                  onMouseDown={() => {
                    shouldPreventToggle.current = true;
                  }}
                >
                  <Calendar
                    id={name}
                    value={selectedDayObject}
                    onChange={(e) => {
                      handleCalendarChange(e)
                    }}
                    locale={locale}
                    shouldHighlightWeekends
                    renderFooter={() => (
                      <div style={{ display: 'flex', justifyContent: 'center', padding: '1rem 2rem' }}>
                        <button
                          type="button"
                          onClick={() => {
                            handleCalendarChange(null)
                          }}
                          style={{
                            border: '#0fbcf9',
                            color: '#fff',
                            borderRadius: '0.5rem',
                            padding: '1rem 2rem',
                          }}
                        >
                          تاریخ انتخاب شده پاک شود!
                        </button>
                      </div>
                    )}
                    maximumDate={maximumDate}
                  />
                </div>
                <div className="DatePicker__calendarArrow" />
              </>
            )}
          </div>
        </div>
        :
        <div className="col">
          <div className="form-floating mb-3 p-0 border-bottom">
            <input
              type="text"
              className="form-control border-0"
              id={name}
              name={name}
              value={value}
              onChange={onChangeData}
              placeholder={placeholder}
              disabled={disabled}
              autoComplete={autocomplete}
            />
            <label htmlFor={name}>{lable}</label>
          </div>

        </div>
    )
    :
    (
      <div className="col"></div>
    )
}`;
  createFile(`${datePickerPath}`, `${'DatePicker'}.js`, injectedContent);

  injectedContent = `import React from 'react';

  import { useLocaleUtils, useLocaleLanguage } from './shared/hooks';
  import { putZero, getValueType } from './shared/generalUtils';
  import { TYPE_SINGLE_DATE, TYPE_RANGE, TYPE_MUTLI_DATE } from './shared/constants';
  
  const DatePickerInput = React.forwardRef(
    (
      { value, inputPlaceholder, inputClassName, inputName, formatInputText, renderInput, locale, lable },
      ref,
    ) => {
      const { getLanguageDigits } = useLocaleUtils(locale);
      const {
        from: fromWord,
        to: toWord,
        yearLetterSkip,
        digitSeparator,
        defaultPlaceholder,
        isRtl,
      } = useLocaleLanguage(locale);
  
      const getSingleDayValue = () => {
        if (!value) return '';
        const year = getLanguageDigits(value.year);
        const month = getLanguageDigits(putZero(value.month));
        const day = getLanguageDigits(putZero(value.day));
        return \`\${year}/\${month}/\${day}\`;
      };
  
      const getDayRangeValue = () => {
        if (!value.from || !value.to) return '';
        const { from, to } = value;
        const fromText = \`\${getLanguageDigits(putZero(from.year))
          .toString()
          .slice(yearLetterSkip)}/\${getLanguageDigits(putZero(from.month))}/\${getLanguageDigits(
            putZero(from.day),
          )}\`;
        const toText = \`\${getLanguageDigits(putZero(to.year))
          .toString()
          .slice(yearLetterSkip)}/\${getLanguageDigits(putZero(to.month))}/\${getLanguageDigits(
            putZero(to.day),
          )}\`;
        return \`\${fromWord} \${fromText} \${toWord} \${toText}\`;
      };
  
      const getMultiDateValue = () => {
        return value.map(date => getLanguageDigits(date.day)).join(\`\${digitSeparator} \`);
      };
  
      const getValue = () => {
        if (formatInputText()) return formatInputText();
        const valueType = getValueType(value);
        switch (valueType) {
          case TYPE_SINGLE_DATE:
            return getSingleDayValue();
          case TYPE_RANGE:
            return getDayRangeValue();
          case TYPE_MUTLI_DATE:
            return getMultiDateValue();
        }
      };
  
      const placeholderValue = inputPlaceholder || defaultPlaceholder;
      const render = () => {
        return (
          renderInput({ ref }) || (
            // <input
            //   data-testid="datepicker-input"
            //   readOnly
            //   ref={ref}
            //   value={getValue()}
            //   name={inputName}
            //   placeholder={placeholderValue}
            //   className={\`DatePicker__input -\${isRtl ? 'rtl' : 'ltr'} \${inputClassName}\`}
            //   aria-label={placeholderValue}
            // />
            <div className="form-floating mb-3 p-0 border-bottom">
              <input
                ref={ref}
                type="text"
                className="form-control border-0"
                id={inputName}
                name={inputName}
                value={getValue()}
                onChange={() => { }}
                // onChange={onChangeData}
                // onBlur={onBlur}
                placeholder={placeholderValue}
                // disabled={disabled}
                // autoComplete={autocomplete}
              />
              <label htmlFor={inputName}>{lable}</label>
            </div>
          )
        );
      };
  
      return render();
    },
  );
  
  DatePickerInput.defaultProps = {
    formatInputText: () => '',
    renderInput: () => null,
    inputPlaceholder: '',
    inputClassName: '',
    inputName: '',
  };
  
  export default DatePickerInput;`
  createFile(`${datePickerPath}`, `${'DatePickerInput'}.js`, injectedContent);

  injectedContent = `import React, { useState, useRef, useEffect } from 'react';

  import { getDateAccordingToMonth, shallowClone, getValueType } from './shared/generalUtils';
  import { TYPE_SINGLE_DATE, TYPE_RANGE, TYPE_MUTLI_DATE } from './shared/constants';
  import { useLocaleUtils, useLocaleLanguage } from './shared/hooks';
  
  import { Header, MonthSelector, YearSelector, DaysList } from './components';
  
  const Calendar = ({
    value,
    onChange,
    onDisabledDayError,
    calendarClassName,
    calendarTodayClassName,
    calendarSelectedDayClassName,
    calendarRangeStartClassName,
    calendarRangeBetweenClassName,
    calendarRangeEndClassName,
    disabledDays,
    colorPrimary,
    colorPrimaryLight,
    slideAnimationDuration,
    minimumDate,
    maximumDate,
    selectorStartingYear,
    selectorEndingYear,
    locale,
    shouldHighlightWeekends,
    renderFooter,
    customDaysClassName,
  }) => {
    const calendarElement = useRef(null);
    const [mainState, setMainState] = useState({
      activeDate: null,
      monthChangeDirection: '',
      isMonthSelectorOpen: false,
      isYearSelectorOpen: false,
    });
  
    // useEffect(() => {
    //   const handleKeyUp = ({ key }) => {
    //     /* istanbul ignore else */
    //     if (key === 'Tab') calendarElement.current.classList.remove('-noFocusOutline');
    //   };
    //   calendarElement.current.addEventListener('keyup', handleKeyUp, false);
    //   return () => {
    //     calendarElement.current.removeEventListener('keyup', handleKeyUp, false);
    //   };
    // });
  
    const { getToday } = useLocaleUtils(locale);
    const { weekDays: weekDaysList, isRtl } = useLocaleLanguage(locale);
    const today = getToday();
  
    const createStateToggler = property => () => {
      setMainState({ ...mainState, [property]: !mainState[property] });
    };
  
    const toggleMonthSelector = createStateToggler('isMonthSelectorOpen');
    const toggleYearSelector = createStateToggler('isYearSelectorOpen');
  
    const getComputedActiveDate = () => {
      const valueType = getValueType(value);
      if (valueType === TYPE_MUTLI_DATE && value.length) return shallowClone(value[0]);
      if (valueType === TYPE_SINGLE_DATE && value) return shallowClone(value);
      if (valueType === TYPE_RANGE && value.from) return shallowClone(value.from);
      return shallowClone(today);
    };
  
    const activeDate = mainState.activeDate
      ? shallowClone(mainState.activeDate)
      : getComputedActiveDate();
  
    const weekdays = weekDaysList.map(weekDay => (
      <abbr key={weekDay.name} title={weekDay.name} className="Calendar__weekDay">
        {weekDay.short}
      </abbr>
    ));
  
    const handleMonthChange = direction => {
      setMainState({
        ...mainState,
        monthChangeDirection: direction,
      });
    };
  
    const updateDate = () => {
      setMainState({
        ...mainState,
        activeDate: getDateAccordingToMonth(activeDate, mainState.monthChangeDirection),
        monthChangeDirection: '',
      });
    };
  
    const selectMonth = newMonthNumber => {
      setMainState({
        ...mainState,
        activeDate: { ...activeDate, month: newMonthNumber },
        isMonthSelectorOpen: false,
      });
    };
  
    const selectYear = year => {
      setMainState({
        ...mainState,
        activeDate: { ...activeDate, year },
        isYearSelectorOpen: false,
      });
    };
  
    return (
      <div
        className={\`Calendar -noFocusOutline \${calendarClassName} -\${isRtl ? 'rtl' : 'ltr'}\`}
        role="grid"
        style={{
          '--cl-color-primary': colorPrimary,
          '--cl-color-primary-light': colorPrimaryLight,
          '--animation-duration': slideAnimationDuration,
        }}
        ref={calendarElement}
      >
        <Header
          maximumDate={maximumDate}
          minimumDate={minimumDate}
          activeDate={activeDate}
          onMonthChange={handleMonthChange}
          onMonthSelect={toggleMonthSelector}
          onYearSelect={toggleYearSelector}
          monthChangeDirection={mainState.monthChangeDirection}
          isMonthSelectorOpen={mainState.isMonthSelectorOpen}
          isYearSelectorOpen={mainState.isYearSelectorOpen}
          locale={locale}
        />
  
        <MonthSelector
          isOpen={mainState.isMonthSelectorOpen}
          activeDate={activeDate}
          onMonthSelect={selectMonth}
          maximumDate={maximumDate}
          minimumDate={minimumDate}
          locale={locale}
        />
  
        <YearSelector
          isOpen={mainState.isYearSelectorOpen}
          activeDate={activeDate}
          onYearSelect={selectYear}
          selectorStartingYear={selectorStartingYear}
          selectorEndingYear={selectorEndingYear}
          maximumDate={maximumDate}
          minimumDate={minimumDate}
          locale={locale}
        />
  
        <div className="Calendar__weekDays">{weekdays}</div>
  
        <DaysList
          activeDate={activeDate}
          value={value}
          monthChangeDirection={mainState.monthChangeDirection}
          onSlideChange={updateDate}
          disabledDays={disabledDays}
          onDisabledDayError={onDisabledDayError}
          minimumDate={minimumDate}
          maximumDate={maximumDate}
          onChange={onChange}
          calendarTodayClassName={calendarTodayClassName}
          calendarSelectedDayClassName={calendarSelectedDayClassName}
          calendarRangeStartClassName={calendarRangeStartClassName}
          calendarRangeEndClassName={calendarRangeEndClassName}
          calendarRangeBetweenClassName={calendarRangeBetweenClassName}
          locale={locale}
          shouldHighlightWeekends={shouldHighlightWeekends}
          customDaysClassName={customDaysClassName}
          isQuickSelectorOpen={mainState.isYearSelectorOpen || mainState.isMonthSelectorOpen}
        />
        <div className="Calendar__footer">{renderFooter()}</div>
      </div>
    );
  };
  
  Calendar.defaultProps = {
    minimumDate: null,
    maximumDate: null,
    colorPrimary: '#0eca2d',
    colorPrimaryLight: '#cff4d5',
    slideAnimationDuration: '0.4s',
    calendarClassName: '',
    locale: 'en',
    value: null,
    renderFooter: () => null,
    customDaysClassName: [],
  };
  
  export { Calendar };`
  createFile(`${datePickerPath}`, `${'Calendar'}.js`, injectedContent);

  injectedContent = `.DatePicker {
    position: relative;
    /* display: inline-block; */
    z-index: 100;
  }
  
  .DatePicker__input {
    background: #fff;
    border: 1px solid #ddd;
    padding: 0.4em 0.8em;
    font-family: inherit;
    text-align: center;
    font-size: 12px;
  }
  
  .DatePicker__input.-rtl {
    direction: rtl;
  }
  
  .DatePicker__input::placeholder {
    color: #979797;
  }
  
  .DatePicker__calendarContainer.-top + .DatePicker__calendarArrow {
    top: auto;
    bottom: calc(100% + 10px);
    transform: translateY(-2.5rem) rotate(180deg);
    animation: fadeArrowFlipped 0.3s forwards;
  }
  
  .DatePicker__calendarContainer {
    position: absolute;
    top: calc(100% + 20px);
    left: 50%;
    transform: translateX(-50%);
  }
  
  .DatePicker__calendarContainer.-top {
    top: auto;
    bottom: calc(100% + 20px);
  }
  
  .Calendar,
  .Calendar * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    direction: ltr;
  }
  
  .Calendar,
  .Calendar.-rtl * {
    direction: rtl;
  }
  
  .DatePicker__calendarArrow {
    position: absolute;
    width: 0;
    height: 0;
    top: calc(100% + 10px);
    left: 0;
    right: 0;
    margin: 0 auto;
    border-style: solid;
    z-index: 10;
    border-width: 0 10px 10px 10px;
    border-color: transparent transparent #fff transparent;
  }
  
  .Calendar {
    --cl-color-black: #444444;
    --cl-color-disabled: #d4d4d4;
    --cl-color-error: #ff2929;
    font-size: 10px;
    background: #fff;
    box-shadow: 0 1em 4em rgba(0, 0, 0, 0.07);
    border-radius: 1em;
    position: relative;
    user-select: none;
    padding-top: 1.2em;
    display: flex;
    flex-direction: column;
    width: 33em;
    z-index: 10;
    max-width: 90vw;
    min-height: 36.7em;
  }
  
  .DatePicker .Calendar,
  .DatePicker__calendarArrow {
    transform: translateY(2.5em);
    opacity: 0;
    animation: fadeCalendar 0.3s forwards;
  }
  
  .DatePicker__calendarContainer.-top .Calendar {
    transform: translateY(-2.5em);
  }
  
  .Calendar.-noFocusOutline *:focus {
    outline: none !important;
  }
  
  .Calendar > :not(.Calendar__footer) button {
    font-family: inherit;
    background: transparent;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    outline: none;
  }
  
  .Calendar__header {
    display: flex;
    color: var(--cl-color-black);
    padding: 2em 2.9em;
    align-items: center;
    overflow: hidden;
  }
  
  .Calendar__monthArrowWrapper {
    line-height: 0;
    font-size: 1em;
    padding: 3px;
    position: relative;
    border: none;
    z-index: 1;
    opacity: 1;
    transition: 0.2s;
  }
  
  .Calendar__monthArrowWrapper:focus {
    outline: 1px dashed rgba(0, 0, 0, 0.4);
    outline-offset: 2px;
  }
  
  .Calendar__monthArrowWrapper:disabled,
  .Calendar__monthArrowWrapper.-hidden {
    opacity: 0;
    pointer-events: none;
  }
  
  .Calendar__monthArrowWrapper.-left {
    transform: rotate(90deg);
  }
  .Calendar.-rtl .Calendar__monthArrowWrapper.-left {
    transform: rotate(-90deg);
  }
  
  .Calendar__monthArrowWrapper.-right {
    transform: rotate(-90deg);
  }
  .Calendar.-rtl .Calendar__monthArrowWrapper.-right {
    transform: rotate(90deg);
  }
  
  .Calendar__monthArrowWrapper:active .Calendar__monthArrow {
    transform: scale(0.7);
  }
  
  .Calendar__monthArrow {
    border-radius: 50%;
    transition: var(--animation-duration) transform;
    pointer-events: none;
    background-repeat: no-repeat;
    display: block;
    width: 1.7em;
    height: 1.7em;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg class='nc-icon-wrapper' fill='%23000000'%3E%3Cdefs stroke='none'%3E%3C/defs%3E%3Cpath class='cls-1' d='M12 23.25V.75' fill='none' stroke='%23000000' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5px'%3E%3C/path%3E%3Cpath class='cls-2' d='M22.5 11.25L12 .75 1.5 11.25' fill='none' stroke='%23000000' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5px' fill-rule='evenodd'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
    background-size: 100% 100%;
  }
  
  .Calendar__monthYearContainer {
    flex: 1;
    position: relative;
  }
  
  .Calendar__monthYear {
    font-size: 1.6em;
    font-weight: 500;
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    will-change: transform, opacity;
    backface-visibility: hidden;
    transform: translateZ(0);
    transition: var(--animation-duration);
    line-height: 1;
  }
  
  .Calendar__monthYear.-hiddenNext {
    opacity: 0;
    transform: translateX(50%);
  }
  
  .Calendar.-rtl .Calendar__monthYear.-hiddenNext {
    transform: translateX(-150%);
  }
  
  .Calendar__monthYear.-hiddenPrevious {
    opacity: 0;
    transform: translateX(-150%);
  }
  
  .Calendar.-rtl .Calendar__monthYear.-hiddenPrevious {
    transform: translateX(50%);
  }
  
  .Calendar__monthYear.-shown {
    opacity: 1;
    margin-top: auto;
    margin-bottom: auto;
    transform: translateX(-50%);
  }
  
  .Calendar__monthYear.-shownAnimated {
    animation: var(--animation-duration) fadeTextToCenter forwards;
  }
  
  .Calendar__monthYear > * {
    padding: 0.2em 0.5em;
    border: 1px solid transparent;
    transition: var(--animation-duration);
    font-size: 1.05em;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateX(0) scale(0.95);
    will-change: transform;
    border-radius: 5px;
  }
  
  .Calendar__monthYear:not(.-shown) > *,
  .Calendar__monthYear > *.-hidden {
    cursor: default;
    pointer-events: none;
  }
  
  .Calendar__monthText {
    margin-left: -0.3em;
  }
  .Calendar__yearText:last-child {
    margin-right: -0.3em;
  }
  
  .Calendar__monthYear.-shown > *:hover,
  .Calendar:not(.-noFocusOutline) .Calendar__monthYear.-shown > *:focus,
  .Calendar__monthYear > *.-activeBackground {
    background: #f5f5f5;
  }
  
  .Calendar__monthText:hover {
    transform: translateX(-0.2em) scale(0.95);
  }
  .Calendar.-rtl .Calendar__monthText:hover {
    transform: translateX(0.2em) scale(0.95);
  }
  
  .Calendar__yearText:hover {
    transform: translateX(0.2em) scale(0.95);
  }
  .Calendar.-rtl .Calendar__yearText:hover {
    transform: translateX(-0.2em) scale(0.95);
  }
  
  .Calendar__monthYear .Calendar__yearText.-hidden {
    transform: translateX(50%);
    opacity: 0;
  }
  
  .Calendar.-rtl .Calendar__monthYear .Calendar__yearText.-hidden {
    transform: translateX(-50%);
  }
  
  .Calendar__monthYear .Calendar__monthText.-hidden {
    transform: translateX(-50%);
    opacity: 0;
  }
  
  .Calendar.-rtl .Calendar__monthYear .Calendar__monthText.-hidden {
    transform: translateX(50%);
  }
  
  .Calendar__monthYear:not(.-shown) > * {
    pointer-events: none;
  }
  
  .Calendar__monthSelectorAnimationWrapper,
  .Calendar__yearSelectorAnimationWrapper {
    position: absolute;
    width: 100%;
    height: 80%;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  
  .Calendar__monthSelectorWrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .Calendar__monthSelector {
    padding: 0 2.5em;
    align-content: center;
    padding-bottom: 2em;
  }
  
  .Calendar__monthSelector,
  .Calendar__yearSelector {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    z-index: 2;
    background-color: #fff;
    transform: translateY(-150%);
    will-change: transform;
    transition: 0.6s;
    height: 100%;
  }
  
  .Calendar__yearSelectorWrapper {
    width: 100%;
    height: 100%;
  }
  
  .Calendar__yearSelectorWrapper::after,
  .Calendar__yearSelectorWrapper::before {
    content: '';
    width: 100%;
    height: 5em;
    position: absolute;
    left: 0;
    opacity: 0;
    transition: 0.4s;
    transition-delay: 0.2s;
  }
  
  .Calendar__yearSelectorWrapper::after {
    background-image: linear-gradient(to bottom, #fff, #fff 10%, rgba(245, 245, 245, 0));
    top: -0.1em;
  }
  
  .Calendar__yearSelectorWrapper::before {
    background-image: linear-gradient(to top, #fff, #fff 10%, rgba(245, 245, 245, 0));
    bottom: 0;
  }
  
  .Calendar__yearSelectorWrapper.-faded::after,
  .Calendar__yearSelectorWrapper.-faded::before {
    opacity: 1;
    z-index: 3;
  }
  
  .Calendar__yearSelector {
    align-content: flex-start;
    scrollbar-width: 0;
    overflow: scroll;
    position: relative;
    width: 100%;
    padding: 5em 2em;
    -ms-overflow-style: none;
  }
  
  .Calendar__yearSelector::-webkit-scrollbar {
    display: none;
  }
  
  .Calendar__yearSelectorItem {
    width: 25%;
    display: flex;
    justify-content: center;
  }
  
  .Calendar__yearSelectorItem:not(:nth-child(-n + 4)) {
    margin-top: 1.5em;
  }
  
  .Calendar__yearSelectorText {
    border: none;
    font-size: 1.4em;
    min-width: 85%;
    padding: 0.2em 0.5em;
    border-radius: 8.5px;
  }
  
  .Calendar__monthSelector.-open,
  .Calendar__yearSelector.-open {
    transform: translateY(0);
  }
  
  .Calendar__yearSelectorText:focus,
  .Calendar__monthSelectorItemText:focus {
    outline: 1px dashed rgba(0, 0, 0, 0.4);
    outline-offset: 2px;
  }
  
  .Calendar__monthSelectorItem {
    width: calc(100% / 3);
    display: flex;
    justify-content: center;
  }
  
  .Calendar__monthSelectorItem:not(:nth-child(-n + 3)) {
    margin-top: 2em;
  }
  
  .Calendar__monthSelectorItemText {
    border: none;
    padding: 0.4em 0.4em;
    border-radius: 8.5px;
    font-size: 1.3em;
    min-width: 70%;
    transition: 0.3s;
  }
  
  .Calendar__monthSelectorItem:not(.-active) .Calendar__monthSelectorItemText:not(:disabled):hover,
  .Calendar__yearSelectorItem:not(.-active) .Calendar__yearSelectorText:not(:disabled):hover {
    background: #f5f5f5;
  }
  
  .Calendar__monthSelectorItemText:disabled,
  .Calendar__yearSelectorText:disabled {
    opacity: 0.5;
    cursor: default;
  }
  
  .Calendar__monthSelectorItem.-active .Calendar__monthSelectorItemText,
  .Calendar__yearSelectorItem.-active .Calendar__yearSelectorText {
    background-color: var(--cl-color-primary);
    color: #fff;
  }
  
  .Calendar__weekDays {
    display: flex;
    justify-content: space-between;
    color: var(--cl-color-disabled);
    font-size: 1.2em;
    margin-bottom: 0.7em;
    padding: 0 2.6em;
    position: relative;
  }
  
  .Calendar__weekDay {
    display: block;
    width: calc(100% / 7);
    text-align: center;
    text-decoration: none;
  }
  
  .Calendar__sectionWrapper {
    position: relative;
    min-height: 25.8em;
    overflow: hidden;
  }
  
  .Calendar__section {
    display: flex;
    flex-direction: column;
    padding: 0 3.2em;
    position: absolute;
    color: var(--cl-color-black);
    top: 0;
    padding-top: 0.5em;
    left: 0;
    width: 100%;
    will-change: transform, opacity;
    transform: translateZ(0);
    backface-visibility: hidden;
    transition: var(--animation-duration);
  }
  
  .Calendar__section.-hiddenPrevious {
    opacity: 0.5;
    transform: translateX(-90%);
  }
  
  .Calendar.-rtl .Calendar__section.-hiddenPrevious {
    transform: translateX(90%);
  }
  
  .Calendar__section.-hiddenNext {
    opacity: 0.5;
    transform: translateX(90%);
  }
  
  .Calendar.-rtl .Calendar__section.-hiddenNext {
    transform: translateX(-90%);
  }
  
  .Calendar__section.-shown {
    opacity: 1;
    transform: translateX(0);
  }
  
  .Calendar__section.-shownAnimated {
    animation: var(--animation-duration) FadeContentToCenter forwards;
  }
  
  .Calendar__weekRow {
    display: flex;
    width: 100%;
  }
  
  .Calendar__day {
    display: block;
    width: calc(100% / 7);
    text-align: center;
    padding: calc(0.25em - 1px) 0;
    font-size: 1.6em;
    border-radius: 50%;
    transition: 0.2s;
    border: 1px solid transparent;
    margin-bottom: 0.3em;
    color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  
  .Calendar__day:focus {
    outline: 1px dashed rgba(0, 0, 0, 0.4);
    outline-offset: 2px;
  }
  
  .Calendar__day.-ltr {
    min-height: 2.6em;
    font-size: 1.45em;
  }
  
  .Calendar__day.-rtl {
    font-size: 1.55em;
    height: 2.45em;
  }
  
  .Calendar__day:not(.-blank):not(.-selectedStart):not(.-selectedEnd):not(.-selectedBetween):not(.-selected):hover {
    background: #eaeaea;
    border-radius: 50%;
    color: var(--cl-color-black);
    border-color: transparent;
  }
  
  .Calendar__day.-selected,
  .Calendar__day.-selectedStart,
  .Calendar__day.-selectedEnd {
    background: var(--cl-color-primary);
    color: #fff;
  }
  
  .Calendar__day.-ltr.-selectedStart {
    border-radius: 0;
    border-top-left-radius: 100em;
    border-bottom-left-radius: 100em;
  }
  
  .Calendar__day.-rtl.-selectedStart {
    border-radius: 0;
    border-top-right-radius: 100em;
    border-bottom-right-radius: 100em;
  }
  
  .Calendar__day.-selectedBetween {
    background: var(--cl-color-primary-light);
    color: var(--cl-color-primary);
    border-radius: 0;
  }
  
  .Calendar__day.-ltr.-selectedEnd {
    border-top-right-radius: 100em;
    border-bottom-right-radius: 100em;
  }
  
  .Calendar__day.-rtl.-selectedEnd {
    border-top-left-radius: 100em;
    border-bottom-left-radius: 100em;
  }
  
  .Calendar__day.-weekend:not(.-selected):not(.-blank):not(.-selectedStart):not(.-selectedEnd):not(.-selectedBetween) {
    color: var(--cl-color-error);
  }
  
  .Calendar__day.-weekend.-today:not(.-selectedStart):not(.-selectedEnd):not(.-selectedBetween)::after {
    background: var(--cl-color-error);
  }
  
  .Calendar__day.-disabled {
    color: var(--cl-color-disabled) !important;
    background: transparent !important;
    cursor: default !important;
  }
  .Calendar__day.-selected {
    border-radius: 50%;
  }
  .Calendar__day.-today:not(.-selectedStart):not(.-selectedEnd):not(.-selectedBetween) {
    font-weight: 600;
    color: var(--cl-color-black);
    color: #000;
    position: relative;
  }
  
  .Calendar__day.-today:not(.-selectedStart):not(.-selectedEnd):not(.-selectedBetween)::after {
    content: '';
    position: absolute;
    bottom: 0.2em;
    display: block;
    width: 0.6em;
    height: 1px;
    background: #000;
    left: 50%;
    opacity: 0.5;
    transform: translateX(-50%);
    transition: 0.2s;
  }
  
  .Calendar__day.-today:hover:not(.-selectedStart):not(.-selectedEnd):not(.-selectedBetween)::after {
    opacity: 0;
  }
  
  .Calendar__day.-blank {
    color: transparent;
    cursor: default;
    pointer-events: none;
  }
  
  .Calendar__footer {
    position: relative;
    z-index: 1;
  }
  
  @keyframes fadeCalendar {
    from {
      opacity: 0;
    }
  
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes fadeArrowFlipped {
    from {
      opacity: 0;
    }
  
    to {
      opacity: 1;
      transform: translateY(0) rotate(180deg);
    }
  }
  
  @keyframes fadeTextToCenter {
    to {
      opacity: 1;
      transform: translateX(-50%);
    }
  }
  
  @keyframes FadeContentToCenter {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  `
  createFile(`${datePickerPath}`, `${'DatePicker'}.css`, injectedContent);




  injectedContent = `import { TYPE_SINGLE_DATE, TYPE_RANGE, TYPE_MUTLI_DATE } from './constants';

  /*
    These utility functions don't depend on locale of the date picker(Persian or Gregorian)
  */
  
  const createUniqueRange = (number, startingId) =>
    Array.from(Array(number).keys()).map(key => ({
      value: key + 1,
      id: \`\${startingId}-\${key}\`,
    }));
  
  const isSameDay = (day1, day2) => {
    if (!day1 || !day2) return false;
    return day1.day === day2.day && day1.month === day2.month && day1.year === day2.year;
  };
  
  const putZero = number => (number.toString().length === 1 ? \`0\${number}\` : number);
  
  const toExtendedDay = date => [date.year, date.month, date.day];
  
  const shallowClone = value => ({ ...value });
  
  const deepCloneObject = obj =>
    JSON.parse(JSON.stringify(obj, (key, value) => (typeof value === 'undefined' ? null : value)));
  
  const getDateAccordingToMonth = (date, direction) => {
    const toSum = direction === 'NEXT' ? 1 : -1;
    let newMonthIndex = date.month + toSum;
    let newYear = date.year;
    if (newMonthIndex < 1) {
      newMonthIndex = 12;
      newYear -= 1;
    }
    if (newMonthIndex > 12) {
      newMonthIndex = 1;
      newYear += 1;
    }
    const newDate = { year: newYear, month: newMonthIndex, day: 1 };
    return newDate;
  };
  
  const hasProperty = (object, propertyName) =>
    Object.prototype.hasOwnProperty.call(object || {}, propertyName);
  
  const getValueType = value => {
    if (Array.isArray(value)) return TYPE_MUTLI_DATE;
    if (hasProperty(value, 'from') && hasProperty(value, 'to')) return TYPE_RANGE;
    if (
      !value ||
      (hasProperty(value, 'year') && hasProperty(value, 'month') && hasProperty(value, 'day'))
    ) {
      return TYPE_SINGLE_DATE;
    }
    throw new TypeError(
      \`The passed value is malformed! Please make sure you're using one of the valid value types for date picker.\`,
    );
  };
  
  export {
    createUniqueRange,
    isSameDay,
    putZero,
    toExtendedDay,
    shallowClone,
    deepCloneObject,
    getDateAccordingToMonth,
    getValueType,
  };`
  createFile(`${datePickerSharedPath}`, `${'generalUtils'}.js`, injectedContent);

  injectedContent = `export const PERSIAN_NUMBERS = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

  export const PERSIAN_MONTHS = [
    'فروردین',
    'اردیبهشت',
    'خرداد',
    'تیر',
    'مرداد',
    'شهریور',
    'مهر',
    'آبان',
    'آذر',
    'دی',
    'بهمن',
    'اسفند',
  ];
  
  export const GREGORIAN_MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  
  export const PERSIAN_WEEK_DAYS = [
    {
      name: 'شنبه',
      short: 'ش',
    },
    {
      name: 'یکشنبه',
      short: 'ی',
    },
    {
      name: 'دوشنبه',
      short: 'د',
    },
    {
      name: 'سه شنبه',
      short: 'س',
    },
    {
      name: 'چهارشنبه',
      short: 'چ',
    },
    {
      name: 'پنجشنبه',
      short: 'پ',
    },
    {
      name: 'جمعه',
      short: 'ج',
      isWeekend: true,
    },
  ];
  
  export const GREGORIAN_WEEK_DAYS = [
    {
      name: 'Sunday',
      short: 'S',
      isWeekend: true,
    },
    {
      name: 'Monday',
      short: 'M',
    },
    {
      name: 'Tuesday',
      short: 'T',
    },
    {
      name: 'Wednesday',
      short: 'W',
    },
    {
      name: 'Thursday',
      short: 'T',
    },
    {
      name: 'Friday',
      short: 'F',
    },
    {
      name: 'Saturday',
      short: 'S',
      isWeekend: true,
    },
  ];
  
  export const MINIMUM_SELECTABLE_YEAR_SUBTRACT = 100;
  
  export const MAXIMUM_SELECTABLE_YEAR_SUM = 50;
  
  export const TYPE_SINGLE_DATE = 'SINGLE_DATE';
  export const TYPE_RANGE = 'RANGE';
  export const TYPE_MUTLI_DATE = 'MUTLI_DATE';`
  createFile(`${datePickerSharedPath}`, `${'constants'}.js`, injectedContent);

  injectedContent = `import { useMemo } from 'react';

import utils from './localeUtils';
import getLanguageText from './localeLanguages';

const useLocaleUtils = locale => useMemo(() => utils(locale), [locale]);

const useLocaleLanguage = locale => useMemo(() => getLanguageText(locale), [locale]);

export { useLocaleUtils, useLocaleLanguage };`
  createFile(`${datePickerSharedPath}`, `${'hooks'}.js`, injectedContent);

  injectedContent = `const handleArrowKeys = (e, { allowVerticalArrows }) => {
    const { activeElement } = document;
    const getNthChildSafe = (element, index) => (element ? element.children[index] : null);
    const getStandardItem = item => item && (item.hasAttribute('aria-hidden') ? null : item);
    const { nextSibling: nextRow, previousSibling: previousRow } = activeElement.parentElement;
    const nextSibling = getStandardItem(activeElement.nextSibling || getNthChildSafe(nextRow, 0));
    const previousRowLength = previousRow ? previousRow.children.length - 1 : 0;
    const previousSibling = getStandardItem(
      activeElement.previousSibling || getNthChildSafe(previousRow, previousRowLength),
    );
    const getVerticalSibling = row =>
      getNthChildSafe(row, Array.from(activeElement.parentElement.children).indexOf(activeElement));
    const downSibling = getStandardItem(getVerticalSibling(nextRow));
    const upSibling = getStandardItem(getVerticalSibling(previousRow));
    const isDefaultSelectable = activeElement.dataset.isDefaultSelectable === 'true';
  
    if (!isDefaultSelectable) activeElement.tabIndex = '-1';
    const focusIfAvailable = element => {
      e.preventDefault();
      /* istanbul ignore else */
      if (element) {
        element.setAttribute('tabindex', '0');
        element.focus();
      }
    };
    switch (e.key) {
      case 'ArrowRight':
        focusIfAvailable(nextSibling);
        break;
      case 'ArrowLeft':
        focusIfAvailable(previousSibling);
        break;
      case 'ArrowDown':
        /* istanbul ignore else */
        if (allowVerticalArrows) focusIfAvailable(downSibling);
        break;
      case 'ArrowUp':
        /* istanbul ignore else */
        if (allowVerticalArrows) focusIfAvailable(upSibling);
        break;
    }
  };
  
  export default handleArrowKeys;`
  createFile(`${datePickerSharedPath}`, `${'keyboardNavigation'}.js`, injectedContent);

  injectedContent = `import jalaali from 'jalaali-js';

  import {
    GREGORIAN_MONTHS,
    PERSIAN_MONTHS,
    GREGORIAN_WEEK_DAYS,
    PERSIAN_WEEK_DAYS,
    PERSIAN_NUMBERS,
  } from './constants';
  import { toExtendedDay } from './generalUtils';
  
  const localeLanguages = {
    en: {
      months: GREGORIAN_MONTHS,
      weekDays: GREGORIAN_WEEK_DAYS,
      weekStartingIndex: 0,
      getToday(gregorainTodayObject) {
        return gregorainTodayObject;
      },
      toNativeDate(date) {
        return new Date(date.year, date.month - 1, date.day);
      },
      getMonthLength(date) {
        return new Date(date.year, date.month, 0).getDate();
      },
      transformDigit(digit) {
        return digit;
      },
      nextMonth: 'Next Month',
      previousMonth: 'Previous Month',
      openMonthSelector: 'Open Month Selector',
      openYearSelector: 'Open Year Selector',
      closeMonthSelector: 'Close Month Selector',
      closeYearSelector: 'Close Year Selector',
      from: 'from',
      to: 'to',
      defaultPlaceholder: 'Select...',
      digitSeparator: ',',
      yearLetterSkip: 0,
      isRtl: false,
    },
    fa: {
      months: PERSIAN_MONTHS,
      weekDays: PERSIAN_WEEK_DAYS,
      weekStartingIndex: 1,
      getToday({ year, month, day }) {
        const { jy, jm, jd } = jalaali.toJalaali(year, month, day);
        return { year: jy, month: jm, day: jd };
      },
      toNativeDate(date) {
        const gregorian = jalaali.toGregorian(...toExtendedDay(date));
        return new Date(gregorian.gy, gregorian.gm - 1, gregorian.gd);
      },
      getMonthLength(date) {
        return jalaali.jalaaliMonthLength(date.year, date.month);
      },
      transformDigit(digit) {
        return digit
          .toString()
          .split('')
          .map(letter => PERSIAN_NUMBERS[Number(letter)])
          .join('');
      },
      nextMonth: 'ماه بعد',
      previousMonth: 'ماه قبل',
      openMonthSelector: 'نمایش انتخابگر ماه',
      openYearSelector: 'نمایش انتخابگر سال',
      closeMonthSelector: 'بستن انتخابگر ماه',
      closeYearSelector: 'بستن انتخابگر ماه',
      from: 'از',
      to: 'تا',
      defaultPlaceholder: 'انتخاب...',
      digitSeparator: '،',
      yearLetterSkip: -2,
      isRtl: true,
    },
  };
  
  const getLocaleDetails = locale => {
    if (typeof locale === 'string') return localeLanguages[locale];
    return locale;
  };
  
  export { localeLanguages };
  export default getLocaleDetails;`
  createFile(`${datePickerSharedPath}`, `${'localeLanguages'}.js`, injectedContent);

  injectedContent = `/*
  These utility functions highly depend on locale of the date picker(Persian or Gregorian)
*/

import getLocaleDetails from './localeLanguages';

const utils = (locale = 'en') => {
  const {
    months: monthsList,
    getToday: localeGetToday,
    toNativeDate,
    getMonthLength,
    weekStartingIndex,
    transformDigit: getLanguageDigits,
  } = typeof locale === 'string' ? getLocaleDetails(locale) : locale;

  const getToday = () => {
    const todayDate = new Date();
    const year = todayDate.getFullYear();
    const month = todayDate.getMonth() + 1;
    const day = todayDate.getDate();
    return localeGetToday({ year, month, day });
  };

  const getMonthName = month => monthsList[month - 1];

  const getMonthNumber = monthName => monthsList.indexOf(monthName) + 1;

  const getMonthFirstWeekday = date => {
    const gregorianDate = toNativeDate({ ...date, day: 1 });
    const weekday = gregorianDate.getDay();
    const dayIndex = weekday + weekStartingIndex;
    return dayIndex % 7;
  };

  const isBeforeDate = (day1, day2) => {
    if (!day1 || !day2) return false;
    return toNativeDate(day1) < toNativeDate(day2);
  };

  const checkDayInDayRange = ({ day, from, to }) => {
    if (!day || !from || !to) return false;
    const nativeDay = toNativeDate(day);
    const nativeFrom = toNativeDate(from);
    const nativeTo = toNativeDate(to);
    return nativeDay > nativeFrom && nativeDay < nativeTo;
  };

  return {
    getToday,
    getMonthName,
    getMonthNumber,
    getMonthLength,
    getMonthFirstWeekday,
    isBeforeDate,
    checkDayInDayRange,
    getLanguageDigits,
  };
};

export default utils;`
  createFile(`${datePickerSharedPath}`, `${'localeUtils'}.js`, injectedContent);

  injectedContent = `import { getDateAccordingToMonth } from './generalUtils';

  const getSlideDate = ({ parent, isInitialActiveChild, activeDate, monthChangeDirection }) => {
    if (!parent) {
      return isInitialActiveChild ? activeDate : getDateAccordingToMonth(activeDate, 'NEXT');
    }
    const child = parent.children[isInitialActiveChild ? 0 : 1];
    const isActiveSlide =
      child.classList.contains('-shown') || child.classList.contains('-shownAnimated'); // check -shownAnimated for Safari bug
    return isActiveSlide ? activeDate : getDateAccordingToMonth(activeDate, monthChangeDirection);
  };
  
  const animateContent = ({ parent, direction }) => {
    const wrapperChildren = Array.from(parent.children);
    const shownItem = wrapperChildren.find(child => child.classList.contains('-shown'));
    const hiddenItem = wrapperChildren.find(child => child !== shownItem);
    const baseClass = shownItem.classList[0];
    const isNextMonth = direction === 'NEXT';
    const getAnimationClass = value => (value ? '-hiddenNext' : '-hiddenPrevious');
    hiddenItem.style.transition = 'none';
    shownItem.style.transition = '';
    shownItem.className = \`\${baseClass} \${getAnimationClass(!isNextMonth)}\`;
    hiddenItem.className = \`\${baseClass} \${getAnimationClass(isNextMonth)}\`;
    hiddenItem.classList.add('-shownAnimated');
  };
  
  const handleSlideAnimationEnd = ({ target }) => {
    target.classList.remove('-hiddenNext');
    target.classList.remove('-hiddenPrevious');
    target.classList.replace('-shownAnimated', '-shown');
  };
  
  export { animateContent, getSlideDate, handleSlideAnimationEnd };`
  createFile(`${datePickerSharedPath}`, `${'sliderHelpers'}.js`, injectedContent);

  injectedContent = `import React, { useRef, useEffect } from 'react';

  import { getSlideDate, handleSlideAnimationEnd, animateContent } from '../shared/sliderHelpers';
  import {
    deepCloneObject,
    isSameDay,
    createUniqueRange,
    getValueType,
  } from '../shared/generalUtils';
  import { TYPE_SINGLE_DATE, TYPE_RANGE, TYPE_MUTLI_DATE } from '../shared/constants';
  import handleKeyboardNavigation from '../shared/keyboardNavigation';
  import { useLocaleUtils, useLocaleLanguage } from '../shared/hooks';
  
  const DaysList = ({
    activeDate,
    value,
    monthChangeDirection,
    onSlideChange,
    disabledDays,
    onDisabledDayError,
    minimumDate,
    maximumDate,
    onChange,
    locale,
    calendarTodayClassName,
    calendarSelectedDayClassName,
    calendarRangeStartClassName,
    calendarRangeEndClassName,
    calendarRangeBetweenClassName,
    shouldHighlightWeekends,
    isQuickSelectorOpen,
    customDaysClassName,
  }) => {
    const calendarSectionWrapper = useRef(null);
    const { isRtl, weekDays: weekDaysList } = useLocaleLanguage(locale);
    const {
      getToday,
      isBeforeDate,
      checkDayInDayRange,
      getMonthFirstWeekday,
      getMonthLength,
      getLanguageDigits,
      getMonthName,
    } = useLocaleUtils(locale);
    const today = getToday();
  
    useEffect(() => {
      if (!monthChangeDirection) return;
      animateContent({
        direction: monthChangeDirection,
        parent: calendarSectionWrapper.current,
      });
    }, [monthChangeDirection]);
  
    const getDayRangeValue = day => {
      const clonedDayRange = deepCloneObject(value);
      const dayRangeValue =
        clonedDayRange.from && clonedDayRange.to ? { from: null, to: null } : clonedDayRange;
      const dayRangeProp = !dayRangeValue.from ? 'from' : 'to';
      dayRangeValue[dayRangeProp] = day;
      const { from, to } = dayRangeValue;
  
      // swap from and to values if from is later than to
      if (isBeforeDate(dayRangeValue.to, dayRangeValue.from)) {
        dayRangeValue.from = to;
        dayRangeValue.to = from;
      }
  
      const checkIncludingDisabledDay = disabledDay => {
        return checkDayInDayRange({
          day: disabledDay,
          from: dayRangeValue.from,
          to: dayRangeValue.to,
        });
      };
      const includingDisabledDay = disabledDays.find(checkIncludingDisabledDay);
      if (includingDisabledDay) {
        onDisabledDayError(includingDisabledDay);
        return value;
      }
  
      return dayRangeValue;
    };
  
    const getMultiDateValue = day => {
      const isAlreadyExisting = value.some(valueDay => isSameDay(valueDay, day));
      const addedToValue = [...value, day];
      const removedFromValue = value.filter(valueDay => !isSameDay(valueDay, day));
      return isAlreadyExisting ? removedFromValue : addedToValue;
    };
  
    const handleDayClick = day => {
      const getNewValue = () => {
        const valueType = getValueType(value);
        switch (valueType) {
          case TYPE_SINGLE_DATE:
            return day;
          case TYPE_RANGE:
            return getDayRangeValue(day);
          case TYPE_MUTLI_DATE:
            return getMultiDateValue(day);
        }
      };
      const newValue = getNewValue();
      onChange(newValue);
    };
  
    const isSingleDateSelected = day => {
      const valueType = getValueType(value);
      if (valueType === TYPE_SINGLE_DATE) return isSameDay(day, value);
      if (valueType === TYPE_MUTLI_DATE) return value.some(valueDay => isSameDay(valueDay, day));
    };
  
    const getDayStatus = dayItem => {
      const isToday = isSameDay(dayItem, today);
      const isSelected = isSingleDateSelected(dayItem);
      const { from: startingDay, to: endingDay } = value || {};
      const isStartingDayRange = isSameDay(dayItem, startingDay);
      const isEndingDayRange = isSameDay(dayItem, endingDay);
      const isWithinRange = checkDayInDayRange({ day: dayItem, from: startingDay, to: endingDay });
      return { isToday, isSelected, isStartingDayRange, isEndingDayRange, isWithinRange };
    };
  
    const getDayClassNames = dayItem => {
      const {
        isToday,
        isSelected,
        isStartingDayRange,
        isEndingDayRange,
        isWithinRange,
      } = getDayStatus(dayItem);
      const customDayItemClassName = customDaysClassName.find(day => isSameDay(dayItem, day));
      const classNames = ''
        .concat(isToday && !isSelected ? \` -today \${calendarTodayClassName}\` : '')
        .concat(!dayItem.isStandard ? ' -blank' : '')
        .concat(dayItem.isWeekend && shouldHighlightWeekends ? ' -weekend' : '')
        .concat(customDayItemClassName ? \` \${customDayItemClassName.className}\` : '')
        .concat(isSelected ? \` -selected \${calendarSelectedDayClassName}\` : '')
        .concat(isStartingDayRange ? \` -selectedStart \${calendarRangeStartClassName}\` : '')
        .concat(isEndingDayRange ? \` -selectedEnd \${calendarRangeEndClassName}\` : '')
        .concat(isWithinRange ? \` -selectedBetween \${calendarRangeBetweenClassName}\` : '')
        .concat(dayItem.isDisabled ? ' -disabled' : '');
      return classNames;
    };
  
    const getViewMonthDays = date => {
      // to match month starting date with the correct weekday label
      const prependingBlankDays = createUniqueRange(getMonthFirstWeekday(date), 'starting-blank');
      const standardDays = createUniqueRange(getMonthLength(date)).map(day => ({
        ...day,
        isStandard: true,
        month: date.month,
        year: date.year,
      }));
      const allDays = [...prependingBlankDays, ...standardDays];
      return allDays;
    };
  
    const handleDayPress = ({ isDisabled, ...dayItem }) => {
      if (isDisabled) {
        onDisabledDayError(dayItem); // good for showing error messages
      } else handleDayClick(dayItem);
    };
  
    const isDayReachableByKeyboard = ({
      isOnActiveSlide,
      isStandard,
      isSelected,
      isStartingDayRange,
      isToday,
      day,
    }) => {
      if (isQuickSelectorOpen || !isOnActiveSlide || !isStandard) return false;
      if (isSelected || isStartingDayRange || isToday || day === 1) return true;
    };
  
    const renderEachWeekDays = ({ id, value: day, month, year, isStandard }, index) => {
      const dayItem = { day, month, year };
      const isInDisabledDaysRange = disabledDays.some(disabledDay => isSameDay(dayItem, disabledDay));
      const isBeforeMinimumDate = isBeforeDate(dayItem, minimumDate);
      const isAfterMaximumDate = isBeforeDate(maximumDate, dayItem);
      const isNotInValidRange = isStandard && (isBeforeMinimumDate || isAfterMaximumDate);
      const isDisabled = isInDisabledDaysRange || isNotInValidRange;
      const isWeekend = weekDaysList.some(
        (weekDayItem, weekDayItemIndex) => weekDayItem.isWeekend && weekDayItemIndex === index,
      );
      const additionalClass = getDayClassNames({ ...dayItem, isWeekend, isStandard, isDisabled });
      const dayLabel = \`\${weekDaysList[index].name}, \${day} \${getMonthName(month)} \${year}\`;
      const isOnActiveSlide = month === activeDate.month;
      const dayStatus = getDayStatus(dayItem);
      const { isSelected, isStartingDayRange, isEndingDayRange, isWithinRange } = dayStatus;
      const shouldEnableKeyboardNavigation = isDayReachableByKeyboard({
        ...dayItem,
        ...dayStatus,
        isOnActiveSlide,
        isStandard,
      });
      return (
        <div
          tabIndex={shouldEnableKeyboardNavigation ? '0' : '-1'}
          key={id}
          className={\`Calendar__day -\${isRtl ? 'rtl' : 'ltr'} \${additionalClass}\`}
          onClick={() => {
            handleDayPress({ ...dayItem, isDisabled });
          }}
          onKeyDown={({ key }) => {
            /* istanbul ignore else */
            if (key === 'Enter') handleDayPress({ ...dayItem, isDisabled });
          }}
          aria-disabled={isDisabled}
          aria-label={dayLabel}
          aria-selected={isSelected || isStartingDayRange || isEndingDayRange || isWithinRange}
          {...(!isStandard || !isOnActiveSlide || isQuickSelectorOpen ? { 'aria-hidden': true } : {})}
          role="gridcell"
          data-is-default-selectable={shouldEnableKeyboardNavigation}
        >
          {!isStandard ? '' : getLanguageDigits(day)}
        </div>
      );
    };
  
    const renderMonthDays = isInitialActiveChild => {
      const date = getSlideDate({
        activeDate,
        isInitialActiveChild,
        monthChangeDirection,
        parent: calendarSectionWrapper.current,
      });
      const allDays = getViewMonthDays(date);
      const renderSingleWeekRow = weekRowIndex => {
        const eachWeekDays = allDays
          .slice(weekRowIndex * 7, weekRowIndex * 7 + 7)
          .map(renderEachWeekDays);
        return (
          <div key={String(weekRowIndex)} className="Calendar__weekRow" role="row">
            {eachWeekDays}
          </div>
        );
      };
      return Array.from(Array(6).keys()).map(renderSingleWeekRow);
    };
  
    const handleKeyDown = e => {
      handleKeyboardNavigation(e, { allowVerticalArrows: true });
    };
  
    return (
      <div
        ref={calendarSectionWrapper}
        className="Calendar__sectionWrapper"
        role="presentation"
        data-testid="days-section-wrapper"
        onKeyDown={handleKeyDown}
      >
        <div
          onAnimationEnd={e => {
            handleSlideAnimationEnd(e);
            onSlideChange();
          }}
          className="Calendar__section -shown"
          role="rowgroup"
        >
          {renderMonthDays(true)}
        </div>
        <div
          onAnimationEnd={e => {
            handleSlideAnimationEnd(e);
            onSlideChange();
          }}
          className="Calendar__section -hiddenNext"
          role="rowgroup"
        >
          {renderMonthDays(false)}
        </div>
      </div>
    );
  };
  
  DaysList.defaultProps = {
    onChange: () => {},
    onDisabledDayError: () => {},
    disabledDays: [],
    calendarTodayClassName: '',
    calendarSelectedDayClassName: '',
    calendarRangeStartClassName: '',
    calendarRangeBetweenClassName: '',
    calendarRangeEndClassName: '',
    shouldHighlightWeekends: false,
  };
  
  export default DaysList;`
  createFile(`${datePickerComponentPath}`, `${'DaysList'}.js`, injectedContent);

  injectedContent = `import React, { useEffect, useRef } from 'react';

  import { isSameDay } from '../shared/generalUtils';
  import { getSlideDate, animateContent, handleSlideAnimationEnd } from '../shared/sliderHelpers';
  import { useLocaleUtils, useLocaleLanguage } from '../shared/hooks';
  
  const Header = ({
    maximumDate,
    minimumDate,
    onMonthChange,
    activeDate,
    monthChangeDirection,
    onMonthSelect,
    onYearSelect,
    isMonthSelectorOpen,
    isYearSelectorOpen,
    locale,
  }) => {
    const headerElement = useRef(null);
    const monthYearWrapperElement = useRef(null);
  
    const { getMonthName, isBeforeDate, getLanguageDigits } = useLocaleUtils(locale);
    const {
      isRtl,
      nextMonth,
      previousMonth,
      openMonthSelector,
      closeMonthSelector,
      openYearSelector,
      closeYearSelector,
    } = useLocaleLanguage(locale);
  
    useEffect(() => {
      if (!monthChangeDirection) return;
      animateContent({
        direction: monthChangeDirection,
        parent: monthYearWrapperElement.current,
      });
    }, [monthChangeDirection]);
  
    useEffect(() => {
      const isOpen = isMonthSelectorOpen || isYearSelectorOpen;
      const monthText = headerElement.current.querySelector(
        '.Calendar__monthYear.-shown .Calendar__monthText',
      );
      const yearText = monthText.nextSibling;
      const hasActiveBackground = element => element.classList.contains('-activeBackground');
      const isInitialRender =
        !isOpen && !hasActiveBackground(monthText) && !hasActiveBackground(yearText);
      if (isInitialRender) return;
  
      const arrows = [...headerElement.current.querySelectorAll('.Calendar__monthArrowWrapper')];
      const hasMonthSelectorToggled = isMonthSelectorOpen || hasActiveBackground(monthText);
      const primaryElement = hasMonthSelectorToggled ? monthText : yearText;
      const secondaryElement = hasMonthSelectorToggled ? yearText : monthText;
  
      let translateXDirection = hasMonthSelectorToggled ? 1 : -1;
      if (isRtl) translateXDirection *= -1;
      const scale = !isOpen ? 0.95 : 1;
      const translateX = !isOpen ? 0 : \`\${(translateXDirection * secondaryElement.offsetWidth) / 2}\`;
      if (!isOpen) {
        secondaryElement.removeAttribute('aria-hidden');
      } else {
        secondaryElement.setAttribute('aria-hidden', true);
      }
      secondaryElement.setAttribute('tabindex', isOpen ? '-1' : '0');
      secondaryElement.style.transform = '';
      primaryElement.style.transform = \`scale(\${scale}) \${
        translateX ? \`translateX(\${translateX}px)\` : ''
      }\`;
      primaryElement.classList.toggle('-activeBackground');
      secondaryElement.classList.toggle('-hidden');
      arrows.forEach(arrow => {
        const isHidden = arrow.classList.contains('-hidden');
        arrow.classList.toggle('-hidden');
        if (isHidden) {
          arrow.removeAttribute('aria-hidden');
          arrow.setAttribute('tabindex', '0');
        } else {
          arrow.setAttribute('aria-hidden', true);
          arrow.setAttribute('tabindex', '-1');
        }
      });
    }, [isMonthSelectorOpen, isYearSelectorOpen]);
  
    const getMonthYearText = isInitialActiveChild => {
      const date = getSlideDate({
        isInitialActiveChild,
        monthChangeDirection,
        activeDate,
        parent: monthYearWrapperElement.current,
      });
      const year = getLanguageDigits(date.year);
      const month = getMonthName(date.month);
      return { month, year };
    };
  
    const isNextMonthArrowDisabled =
      maximumDate &&
      isBeforeDate(maximumDate, { ...activeDate, month: activeDate.month + 1, day: 1 });
    const isPreviousMonthArrowDisabled =
      minimumDate &&
      (isBeforeDate({ ...activeDate, day: 1 }, minimumDate) ||
        isSameDay(minimumDate, { ...activeDate, day: 1 }));
  
    const onMonthChangeTrigger = direction => {
      const isMonthChanging = Array.from(monthYearWrapperElement.current.children).some(child =>
        child.classList.contains('-shownAnimated'),
      );
      if (isMonthChanging) return;
      onMonthChange(direction);
    };
  
    // first button text is the one who shows the current month and year(initial active child)
    const monthYearButtons = [true, false].map(isInitialActiveChild => {
      const { month, year } = getMonthYearText(isInitialActiveChild);
      const isActiveMonth = month === getMonthName(activeDate.month);
      const hiddenStatus = {
        ...(isActiveMonth ? {} : { 'aria-hidden': true }),
      };
      return (
        <div
          onAnimationEnd={handleSlideAnimationEnd}
          className={\`Calendar__monthYear \${isInitialActiveChild ? '-shown' : '-hiddenNext'}\`}
          role="presentation"
          key={String(isInitialActiveChild)}
          {...hiddenStatus}
        >
          <button
            onClick={onMonthSelect}
            type="button"
            className="Calendar__monthText"
            aria-label={isMonthSelectorOpen ? closeMonthSelector : openMonthSelector}
            tabIndex={isActiveMonth ? '0' : '-1'}
            {...hiddenStatus}
          >
            {month}
          </button>
          <button
            onClick={onYearSelect}
            type="button"
            className="Calendar__yearText"
            aria-label={isYearSelectorOpen ? closeYearSelector : openYearSelector}
            tabIndex={isActiveMonth ? '0' : '-1'}
            {...hiddenStatus}
          >
            {year}
          </button>
        </div>
      );
    });
  
    return (
      <div ref={headerElement} className="Calendar__header">
        <button
          className="Calendar__monthArrowWrapper -right"
          onClick={() => {
            onMonthChangeTrigger('PREVIOUS');
          }}
          aria-label={previousMonth}
          type="button"
          disabled={isPreviousMonthArrowDisabled}
        >
          <span className="Calendar__monthArrow" />
        </button>
        <div
          className="Calendar__monthYearContainer"
          ref={monthYearWrapperElement}
          data-testid="month-year-container"
        >
          &nbsp;
          {monthYearButtons}
        </div>
        <button
          className="Calendar__monthArrowWrapper -left"
          onClick={() => {
            onMonthChangeTrigger('NEXT');
          }}
          aria-label={nextMonth}
          type="button"
          disabled={isNextMonthArrowDisabled}
        >
          <span className="Calendar__monthArrow" />
        </button>
      </div>
    );
  };
  
  export default Header;`
  createFile(`${datePickerComponentPath}`, `${'Header'}.js`, injectedContent);

  injectedContent = `import React, { useRef, useEffect } from 'react';

  import { isSameDay } from '../shared/generalUtils';
  import handleKeyboardNavigation from '../shared/keyboardNavigation';
  import { useLocaleUtils, useLocaleLanguage } from '../shared/hooks';
  
  const MonthSelector = ({ activeDate, maximumDate, minimumDate, onMonthSelect, isOpen, locale }) => {
    const monthSelector = useRef(null);
  
    useEffect(() => {
      const classToggleMethod = isOpen ? 'add' : 'remove';
      monthSelector.current.classList[classToggleMethod]('-open');
    }, [isOpen]);
  
    const { getMonthNumber, isBeforeDate } = useLocaleUtils(locale);
    const { months: monthsList } = useLocaleLanguage(locale);
  
    const handleKeyDown = e => {
      handleKeyboardNavigation(e, { allowVerticalArrows: false });
    };
  
    const renderMonthSelectorItems = () =>
      monthsList.map(persianMonth => {
        const monthNumber = getMonthNumber(persianMonth);
        const monthDate = { day: 1, month: monthNumber, year: activeDate.year };
        const isAfterMaximumDate =
          maximumDate && isBeforeDate(maximumDate, { ...monthDate, month: monthNumber });
        const isBeforeMinimumDate =
          minimumDate &&
          (isBeforeDate({ ...monthDate, month: monthNumber + 1 }, minimumDate) ||
            isSameDay({ ...monthDate, month: monthNumber + 1 }, minimumDate));
        const isSelected = monthNumber === activeDate.month;
        return (
          <li
            key={persianMonth}
            className={\`Calendar__monthSelectorItem \${isSelected ? '-active' : ''}\`}
          >
            <button
              tabIndex={isSelected && isOpen ? '0' : '-1'}
              onClick={() => {
                onMonthSelect(monthNumber);
              }}
              className="Calendar__monthSelectorItemText"
              type="button"
              disabled={isAfterMaximumDate || isBeforeMinimumDate}
              aria-pressed={isSelected}
              data-is-default-selectable={isSelected}
            >
              {persianMonth}
            </button>
          </li>
        );
      });
    return (
      <div
        role="presentation"
        className="Calendar__monthSelectorAnimationWrapper"
        {...(isOpen ? {} : { 'aria-hidden': true })}
      >
        <div
          role="presentation"
          data-testid="month-selector-wrapper"
          className="Calendar__monthSelectorWrapper"
          onKeyDown={handleKeyDown}
        >
          <ul ref={monthSelector} className="Calendar__monthSelector" data-testid="month-selector">
            {renderMonthSelectorItems()}
          </ul>
        </div>
      </div>
    );
  };
  
  export default MonthSelector;`
  createFile(`${datePickerComponentPath}`, `${'MonthSelector'}.js`, injectedContent);

  injectedContent = `import React, { useRef, useEffect } from 'react';

  import { MINIMUM_SELECTABLE_YEAR_SUBTRACT, MAXIMUM_SELECTABLE_YEAR_SUM } from '../shared/constants';
  import handleKeyboardNavigation from '../shared/keyboardNavigation';
  import { useLocaleUtils } from '../shared/hooks';
  
  const YearSelector = ({
    isOpen,
    activeDate,
    onYearSelect,
    selectorStartingYear,
    selectorEndingYear,
    maximumDate,
    minimumDate,
    locale,
  }) => {
    const wrapperElement = useRef(null);
    const yearListElement = useRef(null);
  
    const { getLanguageDigits, getToday } = useLocaleUtils(locale);
    const startingYearValue =
      selectorStartingYear || getToday().year - MINIMUM_SELECTABLE_YEAR_SUBTRACT;
    const endingYearValue = selectorEndingYear || getToday().year + MAXIMUM_SELECTABLE_YEAR_SUM;
    const allYears = [];
    for (let i = startingYearValue; i <= endingYearValue; i += 1) {
      allYears.push(i);
    }
    useEffect(() => {
      const classToggleMethod = isOpen ? 'add' : 'remove';
      const activeSelectorYear = wrapperElement.current.querySelector(
        '.Calendar__yearSelectorItem.-active',
      );
      if (!activeSelectorYear) {
        throw new RangeError(
          \`Provided value for year is out of selectable year range. You're probably using a wrong locale prop value or your provided value's locale is different from the date picker locale. Try changing the 'locale' prop or the value you've provided.\`,
        );
      }
      wrapperElement.current.classList[classToggleMethod]('-faded');
      yearListElement.current.scrollTop =
        activeSelectorYear.offsetTop - activeSelectorYear.offsetHeight * 5;
      yearListElement.current.classList[classToggleMethod]('-open');
    }, [isOpen]);
  
    const renderSelectorYears = () => {
      return allYears.map(item => {
        const isAfterMaximumDate = maximumDate && item > maximumDate.year;
        const isBeforeMinimumDate = minimumDate && item < minimumDate.year;
        const isSelected = activeDate.year === item;
        return (
          <li key={item} className={\`Calendar__yearSelectorItem \${isSelected ? '-active' : ''}\`}>
            <button
              tabIndex={isSelected && isOpen ? '0' : '-1'}
              className="Calendar__yearSelectorText"
              type="button"
              onClick={() => {
                onYearSelect(item);
              }}
              disabled={isAfterMaximumDate || isBeforeMinimumDate}
              aria-pressed={isSelected}
              data-is-default-selectable={isSelected}
            >
              {getLanguageDigits(item)}
            </button>
          </li>
        );
      });
    };
  
    const handleKeyDown = e => {
      handleKeyboardNavigation(e, { allowVerticalArrows: false });
    };
  
    return (
      <div
        className="Calendar__yearSelectorAnimationWrapper"
        role="presentation"
        {...(isOpen ? {} : { 'aria-hidden': true })}
      >
        <div
          ref={wrapperElement}
          className="Calendar__yearSelectorWrapper"
          role="presentation"
          data-testid="year-selector-wrapper"
          onKeyDown={handleKeyDown}
        >
          <ul ref={yearListElement} className="Calendar__yearSelector" data-testid="year-selector">
            {renderSelectorYears()}
          </ul>
        </div>
      </div>
    );
  };
  
  YearSelector.defaultProps = {
    selectorStartingYear: 0,
    selectorEndingYear: 0,
  };
  
  export default YearSelector;`
  createFile(`${datePickerComponentPath}`, `${'YearSelector'}.js`, injectedContent);

  injectedContent = `export { default as Header } from './Header';
  export { default as MonthSelector } from './MonthSelector';
  export { default as YearSelector } from './YearSelector';
  export { default as DaysList } from './DaysList';`
  createFile(`${datePickerComponentPath}`, `${'index'}.js`, injectedContent);

  /********************************************************************************
  *                        BreadCrumb Component file
  ********************************************************************************/

  injectedContent = `import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export function Breadcrumb({ path, isVisible }) {
  const navigate = useNavigate()
  return isVisible && (
    <div className="row border-bottom mx-1 my-1 align-items-center justify-content-center">
      <div className="col-10 text-end">
        <nav
          // style={{ '--bs-breadcrumb-divider': ':' }}
          aria-label="breadcrumb"
        >
          <ol className="breadcrumb">
            {Object.keys(path).map((pathLink, index) => {
              return (
                <li
                  className={
                    index >= Object.keys(path).length - 1
                      ? 'breadcrumb-item active'
                      : 'breadcrumb-item'
                  }
                  key={index}
                >
                  {index === Object.keys(path).length - 1 ? (
                    <span>{pathLink}</span>
                  ) : (
                    <Link to={path[pathLink]}>{pathLink}</Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
      <div className="col-2 text-start">
        <Link
          //  to={Object.values(path)[Object.keys(path).length - 2]}
          onClick={() => { return navigate(-1) }}
          data-bs-toggle="tooltip"
          title={Object.keys(path)[Object.keys(path).length - 2]}
          container="body"
          className="heartbeat"
        >
          <i className="bi bi-arrow-return-right fs-4 pe-2" />
        </Link>
      </div>
    </div>
  );
}`
  createFile(`${breadCrumbPath}`, `${'Breadcrumb'}.jsx`, injectedContent);

  /********************************************************************************
  *                        Modal Component file
  ********************************************************************************/

  injectedContent = `import React, { useState } from 'react';
  import { Link, useNavigate, useSubmit } from 'react-router-dom';
  // import * as bootstrap from 'bootstrap';
  
  export default function Modal({ entityId, routePath, params, isVisible }) {
    const navigate = useNavigate();
    const submit = useSubmit();
  
    let actionPath = \`\`
    if (routePath['isRoot'] == true) {
      if (Object.keys(params).length == 0) {
        actionPath = \`\${entityId}/delete\`
      } else if (Object.keys(params).length == 1) {
        actionPath = \`delete\`
      }
    } else {
      if (Object.keys(params).length == 1) {
        actionPath = entityId+'/delete'
      } else if (Object.keys(params).length == 2) {
        actionPath = \`delete\`
      }
    }
    
    const onButtonClicked = () => {
      // const elem = document.getElementById('exampleModal');
  
      // const mod = bootstrap.Modal.getInstance(elem);
      // mod.hide();
      // redirect(\`/users/\${entityId}/delete\`);
      // navigate(\`/users/\${entityId}/delete\`);
      submit(null, {
        method: 'POST',
        // params == 0 for listAll
        // params > 0 for listSpecific
        // action: Object.keys(params).length == 0 ? \`\${entityId}/delete\` : \`\${entityId}/delete\`
        action: actionPath,
        // action: \`\${entityId}/delete\`,
        // action: \`delete\`,
      });
    };
  
    return isVisible && (
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <div className='col-11'>
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  حذف {routePath['lable']}
                </h1>
              </div>
              <div className='col-1'>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
            </div>
            {/* <div className="modal-body">آیا از حذف {routePath['lable']} با {routePath['numberLable']} {routePath['number']} اطمینان دارید؟</div> */}
            <div className="modal-body">آیا از حذف {routePath['lable']} اطمینان دارید؟</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                انصراف
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={onButtonClicked}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                تایید
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  `
  createFile(`${modalPath}`, `${'Modal'}.jsx`, injectedContent);

  /********************************************************************************
   *                        grid component
   ********************************************************************************/
  injectedContent = `import * as React from 'react';
import { Link, Outlet } from 'react-router-dom';
import GridHeader from './gridHeader';
import GridPagination from './gridPagination';
import GridRows from './gridRows';
import gridLable from './gridRowLable_fa';

export default function Grid({
  gridLayout,
  data,
  showPagination,
  routePath,
  params,
  primaryKeyName,
  isVisible,
  isCreateIconRendered,
  isReadIconRendered,
  isUpdateIconRendered,
  isDeleteIconRendered,
}) {
  let newLink = \`\`
  if (routePath['isRoot'] == true) {
    if (Object.keys(params).length == 0) {
      newLink = \`new\`
    } else if (Object.keys(params).length == 1) {
      newLink = \`/\${routePath['title']}/new\`
    }
  } else {
    if (Object.keys(params).length == 1) {
      newLink = \`new\`
      // } else if (Object.keys(params).length == 2) {
      //   viewLink = \`\${row[routePath['columnToSelect']]}/view\`
      //   editLink = \`\${row[routePath['columnToSelect']]}/edit\`
      //   deleteLink = \`\${row[routePath['columnToSelect']]}/delete\`
    }
  }

  return isVisible && (
    <div className="container">
      <div className="row mx-1 my-1 fs-6 fw-semibold text-body-secondary justify-content-end">
        <div className="col-2 text-center">
          {
            isCreateIconRendered ?
              <Link
                //  to={Object.keys(params).length == 0 ? 'new' : \`/\${routePath['title']}/new\`}
                //  to={Object.keys(params).length == 0 ? 'new' : \`new\`}
                to={newLink}
                data-bs-toggle="tooltip"
                title={gridLable.new}
                className="icon-link heartbeat"
              >
                <i className="bi bi-plus-circle fs-4 pe-2" />
              </Link>
              :
              <Link></Link>
          }
        </div>
      </div>
      <GridHeader gridLayout={gridLayout} />
      <GridRows data={data} gridLayout={gridLayout} routePath={routePath} params={params} primaryKeyName={primaryKeyName} isReadIconRendered={isReadIconRendered} isUpdateIconRendered={isUpdateIconRendered} isDeleteIconRendered={isDeleteIconRendered} />
      <GridPagination
        showPagination={showPagination}
        pagination={{
          currentPage: data.currentPage,
          totalItems: data.totalItems,
          totalPages: data.totalPages,
        }}
      />
      <Outlet />
    </div>
  );
}`;
  createFile(`${gridPath}`, `grid.jsx`, injectedContent);

  injectedContent = `import * as React from 'react';
   
   export default function GridHeader({ gridLayout }) {
     return (
       <div
         className="row border mx-1 my-1 fs-6 fw-semibold text-body-secondary"
         style={{ backgroundColor: '#E7E7E7' }}
       >
         {Object.keys(gridLayout).map((title, index) => {
           return gridLayout[index]['isPrimaryKey'] == false && (
             <div
               className={\`col-md-\${gridLayout[index]['largeBreakpointWidth']} py-1 border\`}
               key={index}
             >
               {gridLayout[index]['label']}
             </div>
           );
         })}
         <div className="col-md-2 py-1 border text-center">عملیات</div>
       </div>
     );
   }
   `;
  createFile(`${gridPath}`, `gridHeader.jsx`, injectedContent);

  injectedContent = `import React, { useState } from 'react';
import Modal from '../modal/Modal';
import GridRow from './gridRow';

export default function GridRows({ data, gridLayout, routePath, params, primaryKeyName, isReadIconRendered, isUpdateIconRendered, isDeleteIconRendered }) {
  const [entityId, setEntityId] = useState();
  return (
    <>
      <Modal entityId={entityId} routePath={routePath} params={params} isVisible={true} />
      {data.content.map((row, index) => {
        return (
          <GridRow
            gridLayout={gridLayout}
            row={row}
            onRowClick={setEntityId}
            routePath={routePath}
            key={index}
            params={params}
            primaryKeyName={primaryKeyName}
            isReadIconRendered={isReadIconRendered}
            isUpdateIconRendered={isUpdateIconRendered}
            isDeleteIconRendered={isDeleteIconRendered}
          />
        );
      })}
    </>
  );
}`;
  createFile(`${gridPath}`, `gridRows.jsx`, injectedContent);

  injectedContent = `import React from 'react';
import { Link } from 'react-router-dom';
import GridColumn from './gridColumn';
import gridRow from './gridRowLable_fa';

export default function GridRow({ gridLayout, row, onRowClick, routePath, params, primaryKeyName, isReadIconRendered, isUpdateIconRendered, isDeleteIconRendered }) {
  //  const primaryKeyName = gridLayout.find((col) => col['isPrimaryKey'] == true);

  let viewLink = \`\`
  let editLink = \`\`
  let deleteLink = \`\`
  const rowNo = row[routePath['columnToSelect']]

  if (routePath['isRoot'] == true) {
    if (Object.keys(params).length == 0) {
      viewLink = \`\${row[routePath['columnToSelect']]}/view\`
      editLink = \`\${row[routePath['columnToSelect']]}/edit\`
      deleteLink = \`\${row[routePath['columnToSelect']]}/delete\`
    } else if (Object.keys(params).length == 1) {
      viewLink = \`view\`
      editLink = \`edit\`
      deleteLink = \`delete\`
    }
  } else {
    if (Object.keys(params).length == 1) {
      viewLink = \`\${row[routePath['columnToSelect']]}/view\`
      editLink = \`\${row[routePath['columnToSelect']]}/edit\`
      deleteLink = \`\${row[routePath['columnToSelect']]}/delete\`
    } else if (Object.keys(params).length == 2) {
      viewLink = \`\${row[routePath['columnToSelect']]}/view\`
      editLink = \`\${row[routePath['columnToSelect']]}/edit\`
      deleteLink = \`\${row[routePath['columnToSelect']]}/delete\`
    }
  }

  return (
    <div className="row border-bottom border-warning mx-1 my-1 hover-effect align-items-center">
      {Object.keys(row).map((col, index) => {
        return Object.keys(gridLayout).map((index) => {
          return gridLayout[index]['isPrimaryKey'] == false && gridLayout[index]['name'] === col ? (
            <GridColumn
              gridLayout={gridLayout}
              columnLength={gridLayout[index]['largeBreakpointWidth']}
              columnValue={row[col]}
              type={gridLayout[index]['type']}
              key={index}
            />
          ) : null;
        });
        {
          123;
        }
      })}
      <div className="col-md-2 text-center">
        <div className="d-flex flex-wrap align-items-center justify-content-lg-center">
          {isReadIconRendered ?
            <Link
              //  to={\`\${row[primaryKeyName['name']]}/view\`}
              //  to={Object.keys(params).length == 0 ? \`\${row[primaryKeyName['name']]}/view\` : \`/\${routePath}/\${row[primaryKeyName['name']]}/view\`}
              //  to={Object.keys(params).length == 0 ? \`\${row[primaryKeyName]}/view\` : \`/\${routePath['title']}/\${row[primaryKeyName]}/view\`}
              //  to={Object.keys(params).length == 0 ? \`\${row[routePath['columnToSelect']]}/view\` : \`/\${routePath['title']}/\${row[primaryKeyName]}/view\`}
              to={viewLink}
              //  to={\`\${row[primaryKeyName]}/view\`}
              data-bs-toggle="tooltip"
              title={gridRow.view}
              container="body"
              className="heartbeat"
            >
              <i className="bi bi-eye fs-4 pe-2" />
            </Link>
            :
            <Link></Link>
          }
          {isUpdateIconRendered ?
            <Link
              //  to={Object.keys(params).length == 0 ? \`\${row[primaryKeyName['name']]}/edit\` : \`/\${routePath}/\${row[primaryKeyName['name']]}/edit\`}
              // to={Object.keys(params).length == 0 ? \`\${row[primaryKeyName]}/edit\` : \`/\${routePath['title']}/\${row[primaryKeyName]}/edit\`}
              // to={Object.keys(params).length == 0 ? \`\${row[routePath['columnToSelect']]}/edit\` : \`/\${routePath['title']}/\${row[primaryKeyName]}/edit\`}
              to={editLink}
              data-bs-toggle="tooltip"
              title={gridRow.edit}
              className="heartbeat"
            >
              <i className="bi bi-pencil-square fs-4 text-warning pe-2" />
            </Link>
            :
            <Link></Link>
          }
          {isDeleteIconRendered ?
            <Link
              //  to={Object.keys(params).length == 0 ? \`\${row[primaryKeyName['name']]}/delete\` : \`/\${routePath}/\${row[primaryKeyName['name']]}/delete\`}
              // to={Object.keys(params).length == 0 ? \`\${row[primaryKeyName]}/delete\` : \`/\${routePath['title']}/\${row[primaryKeyName]}/delete\`}
              // to={Object.keys(params).length == 0 ? \`\${row[routePath['columnToSelect']]}/delete\` : \`/\${routePath['title']}/\${row[primaryKeyName]}/delete\`}
              to={deleteLink}
              onClick={() => {
                //  onRowClick(\`\${row[primaryKeyName]}\`);
                //  onRowClick(\`\${row[routePath['columnToSelect']]}\`);
                onRowClick(rowNo);
              }}
              data-bs-toggle="tooltip"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              title={gridRow.delete}
              className="heartbeat"
            >
              <i className="bi bi-trash fs-4 text-warning pe-2" />
            </Link>
            :
            <Link></Link>
          }
        </div>
      </div>
    </div>
  );
}
`;
  createFile(`${gridPath}`, `gridRow.jsx`, injectedContent);

  injectedContent = `import * as React from 'react';
import { convertDateString } from '../../../util/Date';
   
   export default function GridColumn({ gridLayout, columnLength, columnValue, type }) {
     return (
       <div className={\`col-md-\${columnLength} text-body-secondary\`}>
         {
          typeof columnValue == 'number' || typeof columnValue == 'bigint'
          ?
          columnValue.toLocaleString('Fa-IR', { "style": "decimal", "signDisplay": "never", "useGrouping": false })
          :
          type == 'Date' && columnValue.length > 0
            ?
            convertDateString(columnValue)
            :
            columnValue
         }
       </div>
     );
   }
   `;
  createFile(`${gridPath}`, `gridColumn.jsx`, injectedContent);

  injectedContent = `import * as React from 'react';
   import { Link } from 'react-router-dom';
   import gridRow from './gridRowLable_fa';
   
   export default function GridPagination({ showPagination, pagination }) {
     //  1-base currentPage
     const currentPage = pagination.currentPage + 1;
     const totalPages = pagination.totalPages;
   
     const hasFirstPage = currentPage > 1;
     const firstPage = 1;
   
     const hasPreviousPage = currentPage > 1;
     const previousPage = currentPage - 1;
   
     const hasNextPage = currentPage < totalPages;
     const nextPage = currentPage + 1;
   
     const hasLastPage = currentPage < totalPages;
     const lastPage = totalPages;
   
     //  0-base currentPage
   
     // const currentPage = pagination.currentPage;
     // const totalPages = pagination.totalPages;
     // const hasNextPage = currentPage + 1 < totalPages;
     // const nextPage = currentPage + 1;
     // const hasPreviousPage = currentPage > 0;
     // const previousPage = currentPage - 1;
     // const firstPage = 0;
     // const lastPage = totalPages - 1;
     // const hasFirstPage = currentPage > 0;
     // const hasLastPage = currentPage < lastPage;
   
     return (
       showPagination && (
         <nav aria-label="Page navigation example with icons">
           <ul className="pagination justify-content-center pagination-sm">
             <li className={\`page-item \${hasFirstPage ? '' : 'disabled'}\`}>
               <Link
                 // onClick={() => {
                 //   return null;
                 // }}
                 to={\`?page=\${firstPage}\`}
                 // to={() => {}}
                 data-bs-toggle="tooltip"
                 title={gridRow.first}
                 container="body"
                 className="page-link heartbeat"
               >
                 <span aria-hidden="true">&#8249;&lsaquo;</span>
               </Link>
             </li>
             <li className={\`page-item \${hasPreviousPage ? '' : 'disabled'}\`}>
               <Link
                 to={\`?page=\${previousPage}\`}
                 data-bs-toggle="tooltip"
                 title={gridRow.previous}
                 container="body"
                 className="page-link heartbeat"
               >
                 <span aria-hidden="true">&lsaquo;</span>
               </Link>
             </li>
   
             <li className="page-item">
               <a className="page-link" href="#">
                 <span aria-hidden="true">{pagination.currentPage + 1}</span>
                 <span aria-hidden="true">&nbsp;از&nbsp;</span>
                 <span aria-hidden="true">{lastPage}</span>
               </a>
             </li>
   
             <li className={\`page-item \${hasNextPage ? '' : 'disabled'}\`}>
               <Link
                 to={\`?page=\${nextPage}\`}
                 data-bs-toggle="tooltip"
                 title={gridRow.next}
                 container="body"
                 className="page-link heartbeat"
               >
                 <span aria-hidden="true">&#8250;</span>
               </Link>
             </li>
             <li className={\`page-item \${hasLastPage ? '' : 'disabled'}\`}>
               <Link
                 to={\`?page=\${lastPage}\`}
                 data-bs-toggle="tooltip"
                 title={gridRow.last}
                 container="body"
                 className="page-link heartbeat"
               >
                 <span aria-hidden="true">&#8250;&rsaquo;</span>
               </Link>
             </li>
           </ul>
         </nav>
       )
     );
   }
   `;
  createFile(`${gridPath}`, `gridPagination.jsx`, injectedContent);

  injectedContent = `const gridRow = {
     new: 'جدید',
     view: 'نمایش',
     edit: 'ویرایش',
     delete: 'حذف',
   
     first:'اولین ردکورد',
     previous:'رکورد قبلی',
     next: 'رکورد بعدی',
     last: 'آخرین رکورد',
   };
   
   module.exports = gridRow;
   `;
  createFile(`${gridPath}`, `gridRowLable_fa.js`, injectedContent);
  /********************************************************************************
   *                        fileupload component
   ********************************************************************************/
  injectedContent = `import { method } from "lodash";
  import React, { useEffect, useState } from "react";
  import { fakeAuthProvider } from '../../../auth';
  import { recieveFile, sendFile } from '../../../util/makeRequest';
  import { StatusIndicator } from './FileUploadStatusIndicator';
  
  export const FileUpload = ({ id, name, value, onChangeData, onBlur, placeholder, lable, disabled, autocomplete, isVisible, rowId, docTypeNo }) => {
  
    const [file, setFile] = useState(null)
  
    // < "initial" | "uploading" | "success" | "fail" > 
    const [status, setStatus] = useState("initial")
    const [fileProperties, setFileProperties] = useState({})
  
    useEffect(e => {
      value != "" && setFileProperties(JSON.parse(value))
    }, [value != ""])
  
    useEffect(e => {
      handleUpload()
    }, [file])
  
    const handleFileChange = e => {
      if (e.target.files) {
        setStatus("initial")
        setFile(e.target.files[0])
        setFileProperties({
          name: e.target.files[0]['name'],
          type: e.target.files[0]['type'],
          size: e.target.files[0]['size'],
          id: e.target.files[0]['id'],
        })
      }
    }
  
    const handleUpload = async () => {
      if (file) {
        setStatus("uploading")
  
        if (file) {
          setStatus("uploading")
  
          const formData = new FormData();
          formData.append("file", file)
  
          const response = await sendFile(
            // \`${backendUrl}/tafahomInformations/1/uploadFileRMs/\${rowId}?docTypeNo=\${docTypeNo}\`,
            \`${backendUrl}/tafahomInformations/1/uploadFileRMs?docTypeNo=\${docTypeNo}\`,
            'POST',
            formData
          ).then(
            (response) => {
              onChangeData({
                'target': {
                  id,
                  'value': JSON.stringify(response.data)
                }
              })
              setStatus("success")
            },
            (error) => {
              setStatus("fail")
            }
          );
        }
      };
    }
  
    const handleDownload = async () => {
  
      fetch(
        \`${backendUrl}/tafahomInformations/1/uploadFileRMs/\${rowId}?docTypeNo=\${docTypeNo}\`,
        {
          method: 'get',
          headers: new Headers({
            Authorization: \`Bearer \${fakeAuthProvider.token}\`,
            responseType: 'blob',
          })
        }
      )
        .then(response => response.blob())
        .then(blob => {
          let url = window.URL.createObjectURL(blob)
          let a = document.createElement('a')
          a.href = url
          // a.download = file['name']
          a.download = fileProperties['name']
          a.click()
        })
    }
  
    return isVisible && (
      <div className="row mx-1 my-1 align-items-center justify-content-center custom-file-button input-group">
        <div className="col-7">
          <label
            className="input-group-text"
            htmlFor={id}
          >
            {lable}
          </label>
        </div>
        <div className="col-2 fileUploadInput">
          <input
            name={name}
            // value={value}
            onChange={handleFileChange}
            type="file"
            className="form-control"
            disabled={disabled || !['initial', 'success', 'fail'].includes(status)}
            id={id}
          />
        </div>
  
        {
          value != "" || Object.keys(fileProperties).length != 0
            ?
            <div
              className="col-1 m-0 p-0"
              style={{ "display": "flex", "justifyContent": "center" }}
            >
              <a
                // href={handleDownload}
                onClick={handleDownload}
                data-bs-toggle="tooltip"
                title="دانلود"
                className="heartbeat"
              // className="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom border-warning"
              // style={{ border: '#FCB648' }}
              >
                <i
                  className="bi bi-cloud-download"
                  style={{ "fontSize": "x-large" }}
                />
              </a>
            </div>
            :
            <div className="col-1 justify-content-"></div>
        }
        <div className="col-2">
          <StatusIndicator status={status} />
        </div>
      </div>
    );
  }`
  createFile(fileUploadPath, `FileUpload.jsx`, injectedContent);
  /********************************************************************************
   *                        fileuploadResultIndicator component
   ********************************************************************************/
  injectedContent = `import React from 'react';

  export const StatusIndicator = ({ status }) => {
    if (status === 'success') {
      return <p style={{ 'marginBottom': 0 }}>✅ بارگزاری موفق!</p>;
    } else if (status === "fail") {
      return <p style={{ 'marginBottom': 0 }}>❌ خطار در بارگزاری!</p>;
    } else if (status === "uploading") {
      return <p style={{ 'marginBottom': 0 }}>⏳ درحال بارگزاری ...</p>;
    } else if (status === "download-success") {
      return <p style={{ 'marginBottom': 0 }}>✅ دانلود موفق!</p>;
    } else if (status === "download-fail") {
      return <p style={{ 'marginBottom': 0 }}>❌ خطار در دانلود!</p>;
    } else if (status === "downloading") {
      return <p style={{ 'marginBottom': 0 }}>⏳ درحال دانلود ...</p>;
    } {
      return null;
    }
  }`
  createFile(fileUploadPath, `FileUploadStatusIndicator.jsx`, injectedContent);

  /********************************************************************************
   *                        tableWithInput component
   ********************************************************************************/
  injectedContent = `import React, { useState, useEffect } from 'react';
  import { Link, Outlet } from 'react-router-dom';
  import { sendRequest } from '../../../util/makeRequest';
  
  
  export const TableWithInput = ({ dataSourceType, dataSource, id, name, value, dsKey, dsValue, onChangeStatus, onChangeData, placeholder, lable, disabled, autocomplete, isVisible }) => {
  
      const [inputDataSource, setInputDataSource] = useState([]);
      const [selectedValue, setSelectedValue] = useState([])
  
      const [person, setPerson] = useState("");
  
      //  fill input datasource
      useEffect(() => {
          try {
  
              const data = func().then((data) => {
                  setInputDataSource(
                      [
                          ...data.content
                      ]
                  )
  
                  let myObject = []
                  value.map(valueItem => {
                      if (
                          data.content.some(item => item['id'] === valueItem)
                      ) {
                          const findedObject = data.content.find(item => item['id'] === valueItem)
                          myObject.push(
                              {
                                  id: findedObject['id'],
                                  firstName: findedObject['firstName'],
                                  lastName: findedObject['lastName'],
                                  email: findedObject['email']
                              }
                          )
  
                      }
  
                  })
                  setSelectedValue([
                      ...myObject
                  ])
              });
          } catch (err) {
              throw({
                'status':999,
                'message':'خطا در کامپوننت TableWithInput'
              })
          }
      }, [value.length > 0])
  
  
      //  fill Table
      const onAddPersonClick = () => {
          if (
              (
                  (inputDataSource.some((objectElement) => {
                      return objectElement['lastName'] === person;
                  }) == true
                  ) && !(
                      selectedValue.some((objectElement) => {
                          return objectElement['lastName'] === person;
                      })
                  )
              )
          ) {
              const findedObject = inputDataSource.find((objectElement) => {
                  return objectElement['lastName'] === person;
              })
              setSelectedValue([
                  ...selectedValue,
                  {
                      id: findedObject['id'],
                      firstName: findedObject['firstName'],
                      lastName: findedObject['lastName'],
                      email: findedObject['email']
                  }
              ])
              let o = []
              selectedValue.map(item => o.push(item['id']))
              o.push(findedObject['id'])
              onChangeData(
                  {
                      target: {
                          id,
                          name,
                          type: "array",
                          value: \`[\${o.toString()}]\`
                      }
                  }
              )
  
          }
  
          setPerson("")
      }
  
  
      const onDelPersonClick = (idx) => {
          const index = selectedValue.findIndex(element => element['id'] == idx)
          if (index > -1) {
              selectedValue.splice(index, 1)
              setSelectedValue([
                  ...selectedValue
              ])
  
              let o = []
              selectedValue.map(item => o.push(item['id']))
              onChangeData(
                  {
                      target: {
                          id,
                          name,
                          type: "array",
                          value: \`[\${o.toString()}]\`
                      }
                  }
              )
  
          }
      }
  
      return (
          <>
              <div className="row mx-1 my-1 align-items-center justify-content-center">
                  <div className="col-6">
                      <fieldset className="reset">
                          <legend className="reset">
                              <span>{lable}</span>
                          </legend>
                          <div className="row mx-1 my-1 align-items-center justify-content-center">
                              <div className="col-6">
                                  <div className="form-floating mb-3 p-0 border-bottom">
                                      <input
                                          type="text"
                                          className="form-control border-0"
                                          id={name}
                                          name={name}
                                          value={person}
                                          onChange={(e) => { setPerson(e.target.value) }}
                                          placeholder={placeholder}
                                          disabled={disabled}
                                          autoComplete="off"
                                          list={(name) + "DatalistOptions"}
                                      />
                                      <label htmlFor={name}>{lable}</label>
                                      <datalist id={(name) + "DatalistOptions"}>
                                          {inputDataSource.map((item, index) => {
                                              return <option
                                                  key={index}
                                                  value={item['lastName']}
                                              />
                                          })}
                                      </datalist>
                                  </div>
                              </div>
                              <div className="col-6 text-end">
                                  <a
                                      title="خروج"
                                      className="icon-link heartbeat"
                                      data-bs-toggle="tooltip"
                                      onClick={onAddPersonClick}
                                  >
                                      <i className="bi bi-plus-circle fs-4 pe-2" />
                                  </a>
                              </div>
                          </div>
                          <div className="row mx-1 my-1 align-items-center justify-content-center">
                              <div className="col-12">
  
                                  <table className='table table-striped table-hover '>
                                      <thead>
                                          <tr>
                                              <th scope='col'>#</th>
                                              <th scope='col'>نام</th>
                                              <th scope='col'>نام خانوادگی</th>
                                              <th scope='col'>شماره تلفن</th>
                                          </tr>
                                      </thead>
                                      <tbody>
  
                                          {selectedValue.map((item, index) => {
                                              return (
                                                  <tr key={index}>
                                                      <th scope='row'>{item['id']}</th>
                                                      <th scope='row'>{item['firstName']}</th>
                                                      <th scope='row'>{item['lastName']}</th>
                                                      <th scope='row'>{item['email']}</th>
                                                      <th scope='row'>
                                                          <a
                                                              title='حذف'
                                                              className='icon-link heartbeat'
                                                              data-bs-toggle='tooltip'
                                                              onClick={() => onDelPersonClick(item['id'])}
                                                          >
                                                              <i className="bi bi-trash fs-4 pe-2" />
                                                          </a>
                                                      </th>
                                                  </tr>)
                                          })}
                                      </tbody>
                                      <tfoot>
                                          <tr>
                                              <th scope='row' colSpan="4">نتیجه</th>
                                          </tr>
                                      </tfoot>
                                  </table>
                              </div>
                          </div>
                      </fieldset>
                  </div>
              </div>
          </>
      )
  }
  
  
  const func = async function loader() {
      try {
          const response = await sendRequest(
              \`${backendUrl}/users\`,
              'GET',
              null
          );
          const data = response.data
          return data;
      } catch (err) {
          throw({
            'status':9999,
            'message':'خطا در کامپوننت TableWithInput'
          })
          // return null;
          // throw json({
          //     status: err?.code,
          //     message: err?.message,
          // });
          // return redirect('/login');
      }
  }`
  createFile(tableWithInput, `TableWithInput.jsX`, injectedContent);

  //   injectedContent = `.custom-file-button {
  //   input[type="file"] {
  //     margin-left: -2px !important;

  //     &::-webkit-file-upload-button {
  //       display: none;
  //     }
  //     &::file-selector-button {
  //       display: none;
  //     }
  //   }

  //   &:hover {
  //     label {
  //       background-color: #dde0e3;
  //       cursor: pointer;
  //     }
  //   }
  // }`
  //   createFile(fileUploadPath, `FileUpload.css`, injectedContent);

  /********************************************************************************
  *                        Report component
  ********************************************************************************/

  injectedContent = `import React, { useState, useEffect } from "react"
import ReportComponent from "../reportComponent";
import ReportCard from "../reportCard";
import { Message } from "../message/Message";

const Report = ({ id, name, data, filterData, onRowClick, clazz, isVisible, disabled, pageSize = [10, 15, 20], hasRowNumber = true, showBackIcon = true }) => {

    return isVisible
        ?
        <>
            {
                !_.isEmpty(data.rows)
                    ?
                    (
                        <div className={clazz}>
                            <ReportCard header={data.reportTitle}>
                                <div id="report">
                                    <ReportComponent data={data} filterData={filterData} pageSizes={pageSize} onRowClick={onRowClick} hasRowNumber={hasRowNumber} showBackIcon={showBackIcon} />
                                </div>
                            </ReportCard>
                        </div>
                    )
                    :
                    <div className="d-flex justify-content-center">
                        <Message message={'اطلاعاتی برای نمایش یافت نشد'} />
                    </div>
            }
        </>
        :
        (
            <div className="col"></div>
        )
}
export {
  Report
}
`
  createFile(reportPath, `Report.jsx`, injectedContent);
  /********************************************************************************
   *                        Report Card component
   ********************************************************************************/
  injectedContent = `.card {
  border-width: 2px !important;
  border-color: #000000 !important;
  display: contents !important;
}
.card-header {
  background-color: #e0e0e0 !important;
  color: #000000 !important;
}
.btn-close {
  color: #000000 !important;
}
.card-footer {
  background-color: #e0e0e0 !important;
  /* background-color: #f1d4d8 !important; */
  /* background-color: #424242 !important; */
}`
  createFile(reportCardPath, `index.css`, injectedContent);

  injectedContent = `import React from "react";
import "./index.css";

const ReportCard = (props) => {
  return (
    <div className="card ">
      <div className="card-header d-flex justify-content-center border border-dark">
        {props.header}
      </div>
      <div className="card-body border border-dark">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            props.onSubmit();
          }}
        >
          {props.children}
        </form>
      </div>
    </div>
  );
};

export default ReportCard;
`

  createFile(reportCardPath, `index.js`, injectedContent);

  /********************************************************************************
   *                        Report Component component
   ********************************************************************************/
  injectedContent = `import React, { useRef } from "react";
  import ReportTable from "../reportTable";
  import ReactToPrint from "react-to-print";
  // import CSVExport from "./csvExport";
  import ExcelExport from "./excelExport";
  import DocExport from "./DocExport";
  import { Link, useNavigate } from "react-router-dom";
  
  const ReportComponent = ({ data, filterData, pageSizes,onRowClick, hasRowNumber, showBackIcon }) => {
    const pdfRef = useRef(null);
    const navigate = useNavigate()

    return (
      <>
      <div className="d-flex">
          <div className="col-6 d-flex justify-content-start">
            <ReactToPrint
              copyShadowRoots={true}
              content={() => pdfRef.current}
              trigger={() => (
                <a
                  title="چاپ"
                  container="body"
                  data-bs-toggle="tooltip"
                  className="icon-link"
                  style={{ cursor: "pointer" }}
                >
                  <i className="bi bi-printer fs-4 pe-4" />
                </a>
              )}
            />
            {/* <CSVExport filterData={filterData} reportName={data.reportName}/> */}
            <ExcelExport filterData={filterData} headerData={data.headerData} reportName={data.reportName} exportType="xlsx" />
            <ExcelExport filterData={filterData} headerData={data.headerData} reportName={data.reportName} exportType="csv" />
          </div>
          <div className="col-6 d-flex justify-content-end">
            {showBackIcon == true && <Link
              //  to={Object.values(path)[Object.keys(path).length - 2]}
              onClick={() => { return navigate(-1) }}
              data-bs-toggle="tooltip"
              // title={Object.keys(path)[Object.keys(path).length - 2]}
              title={'بازگشت به صفحه قبل'}
              container="body"
              className="heartbeat"
            >
              <i className="bi bi-arrow-return-right fs-4 pe-2" />
            </Link>}
          </div>
        </div>

        <div className="border rounded m-2">
          <div className="row m-1">
            <ReportTable data={data} pageSizes={pageSizes} onRowClick={onRowClick} hasRowNumber={hasRowNumber} />
          </div>
        </div>
        {/* pdf panel */}
        <div style={{ display: "none" }}>
          <DocExport data={data} ref={pdfRef} />
        </div>
        {/* end of pdf panel */}
      </>
    );
  };
  
  export default ReportComponent;
  `
  createFile(reportComponentPath, `index.js`, injectedContent);

  injectedContent = `import React from "react";
  import * as XLSX from "xlsx";
  
  const ExcelExport = ({ filterData, headerData, reportName, exportType }) => {

    const exportToExcel = () => {
      const workbook = { Workbook: { Views: [{ RTL: true }] }, Sheets: {}, SheetNames: [] }
  
      if (headerData == undefined) {
        const worksheet = XLSX.utils.json_to_sheet(filterData);
        XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
      } else {
        const worksheet = XLSX.utils.json_to_sheet([
          headerData
        ], { skipHeader: true })
  
        XLSX.utils.sheet_add_json(
          worksheet,
          filterData,
          { origin: { c: 0, r: 1 } }
        )
        XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
      }
      XLSX.writeFile(workbook, \`\${reportName}.xlsx\`);

    //   const workbook = XLSX.utils.book_new();
    //   const worksheet = XLSX.utils.json_to_sheet(filterData);
    //   XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    //   // const table1 = document.getElementById("reporttable");
    //   // const workbook = XLSX.utils.book_new();
    //   // const worksheet = XLSX.utils.table_to_sheet(table1);
    //   // const csvFile = XLSX.utils.sheet_to_csv(worksheet);
    //   // worksheet["D2"].z = "#,##0";
    //   XLSX.writeFile(workbook, \`\${reportName}.xlsx\`);
    
    };
    const exportToCSV = () => {
      // const workbook = XLSX.utils.book_new();
      // const workbook = { Workbook: { Views: [{ RTL: true }] }, Sheets: {}, SheetNames: [] }
      // const worksheet = XLSX.utils.json_to_sheet(filterData);
      // XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
      // XLSX.writeFile(workbook, \`\${reportName}.csv\`);
      const workbook = { Workbook: { Views: [{ RTL: true }] }, Sheets: {}, SheetNames: [] }
      if (headerData == undefined) {
        const worksheet = XLSX.utils.json_to_sheet(filterData);
        XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
      } else {
        const worksheet = XLSX.utils.json_to_sheet([
          headerData
        ], { skipHeader: true })
  
        XLSX.utils.sheet_add_json(
          worksheet,
          filterData,
          { origin: { c: 0, r: 1 } }
        )
        XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
      }
      XLSX.writeFile(workbook, \`\${reportName}.csv\`);
    };
    return (<>
      {exportType == "xlsx" && (
        <a
        title="Excel"
        container="body"
        data-bs-toggle="tooltip"
        className="icon-link"
        style={{ cursor: "pointer" }}
        onClick={exportToExcel}
      >
        <i className="bi bi-filetype-xls fs-4 pe-4" />
      </a>)}
      {exportType == "csv" && (<a
          title="CSV"
          container="body"
          data-bs-toggle="tooltip"
          className="icon-link"
          style={{ cursor: "pointer" }}
          onClick={exportToCSV}
        >
          <i className="bi bi-filetype-csv fs-4 pe-4" />
        </a>)}
      </>
  
    );
  };
  
  export default ExcelExport;
`
  createFile(reportComponentPath, `excelExport.js`, injectedContent);

  injectedContent = `import React from "react";
import { getTodayDate } from "../../../util/Date";
import ReportTable from "../reportTable";

const DocExport = React.forwardRef((props, ref) => {
  const { data } = props;
  const todayFa = getTodayDate()

  return (
    <div
      ref={ref}
      className="border border-dark rounded m-2"
      style={{ backgroundColor: "white", direction: "rtl" }}
    >
      <div className="card ">
        <div className="card-header d-flex justify-content-between border border-dark">
          <div className="col-2 small">{data.reportTitle}</div>
          <div className="col-8 d-flex justify-content-center">
            <span className="text-body-secondary fw-semibold">
              {'پورتال تفاهم نامه های بانک ملت'}</span>
          </div>
          <div className="col-2 d-felx justify-content-end small">
            <span>
              {todayFa.dayWeek} {todayFa.day} {todayFa.monthTitle}{' '}
              {todayFa.year}
            </span>
          </div>

        </div>
        <div className="card-body border border-dark">
          <div className="row m-1">
            <ReportTable data={data} pageSizes={[10000]} hasRowNumber={true} id="reporttable" />
          </div>
        </div>
      </div>
    </div>
  );
});

export default DocExport;
`
  createFile(reportComponentPath, `DocExport.js`, injectedContent);

  injectedContent = `import React from "react";
  import { CSVLink } from "react-csv";
  
  const CSVExport = ({ filterData,reportName }) => {
    return (
      <CSVLink data={filterData} filename={\`\${reportName}.csv\`} target="_blank">
        <a
          title="CSV"
          container="body"
          data-bs-toggle="tooltip"
          className="icon-link"
          style={{ cursor: "pointer" }}
        >
          <i className="bi bi-filetype-csv fs-4 pe-3" />
        </a>
      </CSVLink>
    );
  };
  
  export default CSVExport;
`
  createFile(reportComponentPath, `csvExport.js`, injectedContent);


  /********************************************************************************
  *                        Report Table component
  ********************************************************************************/
  injectedContent = `import React, { useEffect,useState } from "react";
  import PropTypes from "prop-types";
  import TableBody from "./tableBody";
  import TableFooter from "./tableFooter";
  import TableHeader from "./tableHeader";
  import _ from "lodash";
  import "bootstrap/dist/css/bootstrap.css";
  import "bootstrap/dist/js/bootstrap.bundle.min";
  
  const ReportTable = (props) => {
    const { data, pageSizes, id, onRowClick, hasRowNumber } = props;
    const {columns} = data;
    const [pageNum, setPageNum] = useState(0);
    const [pageCount, setpPageCount] = useState(pageSizes ? pageSizes[0] : 10);
    const [sortColumn, setSortColumn] = useState({ field: "", order: "asc" });
    const [rows, setRows] = useState([]);
    const [count, setCount] = useState(0);
    
    const handleDefault = ()=>{
      let filterRows = data.rows;
      setCount(filterRows.length);
      if (count < pageCount) setPageNum(0);
      filterRows = _.orderBy(filterRows, sortColumn.field, sortColumn.order);
      filterRows = [...filterRows].slice(pageNum * pageCount, (pageNum + 1) * pageCount);
      setRows(filterRows);
    }
  
    useEffect(() => {
      handleDefault();
    }, [pageNum,pageCount]);
    
    const handlePaging = (event,pageNum) => {
      setPageNum(pageNum - 1);
    };
    // handleSort = (column) => {
    //   if (column.content === null) {
    //     if (sortColumn.field === column.field) {
    //       setSortColumn({
    //         ...sortColumn,
    //         order: sortColumn.order === "asc" ? "desc" : "asc",
    //       });
    //     } else {
    //       setSortColumn({ ...sortColumn, field: column.field });
    //       setSortColumn({ ...sortColumn, order: "asc" });
    //     }
    //   }
    // };
  
    // handleSortIcon = (column) => {
    //   if (column.field !== sortColumn.field) return null;
    //   if (sortColumn.order === "asc") return <i className="fa fa-sort-asc"></i>;
    //   else return <i className="fa fa-sort-desc"></i>;
    // };
  
    const handlePageSize = (e) => {
      setpPageCount(e.target.value);
    };
  
    return (
      <React.Fragment>
        <table
          id="reportTableId"
          className="table table-striped table-bordered table-hover table-sm"
        >
          <TableHeader
            columns={columns}
            // onSort={handleSort}
            // onSortIcon={handleSortIcon}
          />
          <TableBody columns={columns} rows={data.rows} rowID={pageNum * pageCount} onRowClick={onRowClick} hasRowNumber={hasRowNumber} />
        </table>
        <TableFooter
          onPaging={handlePaging}
          pageCount={pageCount}
          pageNum={pageNum}
          count={count}
          pageSizes={pageSizes}
          onPageSize={handlePageSize}
        />
      </React.Fragment>
    );
  };
  
  ReportTable.propTypes = {
    data: PropTypes.object.isRequired,
    pageSizes: PropTypes.array,
  };
  
  ReportTable.defaultProps = {
    pageSizes: [10, 15],
  };
  
  export default ReportTable;
  `
  createFile(reportTablePath, `index.js`, injectedContent);

  injectedContent = `import React from "react";
  import PropTypes from "prop-types";
  
  const Paging = ({
    totalCount,
    pageCount,
    pageNum,
    onPageChange,
    pageSizes,
    onPageSize,
  }) => {
    const items = [];
    let isPageNumberOutOfRange;
    for (let i = 1; i <= totalCount; i++) {
      if (Math.abs(pageNum - i) <= 3) {
        isPageNumberOutOfRange = false;
        items.push(
          <li
            key={i}
            className={i === pageNum + 1 ? "page-item active" : "page-item"}
          >
            <a
              href="#/"
              className="page-link"
              onClick={(e) => onPageChange(e, i)}
            >
              {i}
            </a>
          </li>
        );
      } else if (!isPageNumberOutOfRange) {
        isPageNumberOutOfRange = true;
        items.push(
          <li key={i} className="page-item disabled">
            <a href="#" className="page-link" tabIndex="-1">
              {"..."}
            </a>
          </li>
        );
      }
    }
  
    return (
      <div className="d-flex justify-content-center">
        {totalCount > 1 && (
          <nav aria-label="Page navigation" dir="rtl">
            <ul className="pagination">
              <li
                key="first"
                className={pageNum === 0 ? "page-item disabled" : "page-item"}
              >
                <a
                  href="#/"
                  className="page-link"
                  onClick={(e) => onPageChange(e, 1)}
                >
                  {"«"}
                </a>
              </li>
              <li
                key="prev"
                className={pageNum === 0 ? "page-item disabled" : "page-item"}
              >
                <a
                  href="#/"
                  className="page-link"
                  onClick={(e) => onPageChange(e, pageNum)}
                >
                  {"‹"}
                </a>
              </li>
              {items}
              <li
                key="next"
                className={
                  pageNum === totalCount - 1 ? "page-item disabled" : "page-item"
                }
              >
                <a
                  href="#/"
                  className="page-link"
                  onClick={(e) => onPageChange(e, pageNum + 2)}
                >
                  {"›"}
                </a>
              </li>
              <li
                key="last"
                className={
                  pageNum === totalCount - 1 ? "page-item disabled" : "page-item"
                }
              >
                <a
                  href="#/"
                  className="page-link"
                  onClick={(e) => onPageChange(e, totalCount)}
                >
                  {"»"}
                </a>
              </li>
            </ul>
          </nav>
        )}
  
        {pageSizes.length > 1 && (
          <select
            className="rounded"
            style={{
              width: "60px",
              height: "37px",
              marginRight: "10px",
            }}
            value={pageCount}
            onChange={(e) => onPageSize(e)}
          >
            {pageSizes.map((item, i) => (
              <option key={i} value={item}>
                {item}
              </option>
            ))}
          </select>
        )}
      </div>
    );
  };
  
  Paging.propTypes = {
    totalCount: PropTypes.number.isRequired,
    pageCount: PropTypes.number.isRequired,
    onPageChange: PropTypes.func,
    pageNum: PropTypes.number.isRequired,
  };
  
  export default Paging;
  `
  createFile(reportTablePath, `paging.js`, injectedContent);

  injectedContent = `import React from "react";
  import _ from "lodash";
  
  const TableBody = ({ columns, rows, rowID,onRowClick, hasRowNumber }) => {

    const renderCell = (row, column, cIndex) => {
      // if (column.content) { return column.content(row); }
      if (typeof column == 'object') {
        if (_.has(row, column.field)) {
          return _.get(row, column.field);
        }
      } else if (typeof column == 'string') {
        if (typeof row[Object.keys(row)[cIndex]] == 'object') {
          return (row[Object.keys(row)[cIndex]]['title']);
        } else if (typeof row[Object.keys(row)[cIndex]] == 'string' && row[Object.keys(row)[cIndex]].startsWith('colspan=')) {
          return '';
        } else {
          return row[Object.keys(row)[cIndex]]
        }
      }
    }
  
    const renderColSpan = (row, column, cIndex) => {
      if (typeof row[Object.keys(row)[cIndex]] == 'string' && row[Object.keys(row)[cIndex]].startsWith('colspan=')) {
        return row[Object.keys(row)[cIndex]].substr(8)
      }
    }

    const renderStyle = (row, column, cIndex) => {
      if (typeof row[Object.keys(row)[cIndex]] == 'object') {
        return row[Object.keys(row)[cIndex]]['style']
      }
    }
  
    const renderClass = (row, column, cIndex) => {
      if (typeof row[Object.keys(row)[cIndex]] == 'object') {
        return row[Object.keys(row)[cIndex]]['class']
      }
    }

    return (
      <tbody>
        {rows.map((row, rIndex) => (
          <tr
            key={rIndex}
            style={{
              fontSize: 14,
              textAlign: "center",
              cursor: "pointer",
              // fontWeight: \`\${rIndex == 0 ? "bolder" : "normal"}\`
            }}
            onClick={() => onRowClick(row)}
          >
            {hasRowNumber && <td style={{ textAlign: "center" }}>{rowID + rIndex + 1}</td>}
            {
            columns.length > 0
              ?
              columns.map((column, cIndex) => (
                <td key={cIndex}>{renderCell(row, column, cIndex)}</td>
              ))
              :
              Object.keys(row).map((column, cIndex) => (
                <td 
                  key={cIndex}
                  className={renderClass(row, column, cIndex)}
                  colSpan={renderColSpan(row, column, cIndex)}
                  // style={{
                    // direction: "ltr",
                    // display: "inline-block",
                  // }}>
                  style={(renderStyle(row, column, cIndex))
                  }>
                  {renderCell(row, column, cIndex)}
                </td>
              ))
          }
          </tr>
        ))}
      </tbody>
    );
  };
  
  export default TableBody;
`
  createFile(reportTablePath, `tableBody.js`, injectedContent);

  injectedContent = `import React from "react";
import Paging from "./paging";

const TableFooter = ({
  onPaging,
  pageNum,
  count,
  pageCount,
  pageSizes,
  onPageSize,
}) => {
  return (
    <Paging
      totalCount={Math.ceil(count / pageCount)}
      pageCount={pageCount}
      onPageChange={onPaging}
      pageNum={pageNum}
      pageSizes={pageSizes}
      onPageSize={onPageSize}
    />
  );
};

export default TableFooter;
`
  createFile(reportTablePath, `tableFooter.js`, injectedContent);

  injectedContent = `import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const TableHeader = ({ columns, onSort, onSortIcon }) => {
  return (
    <thead className="table-secondary">
      <tr>
        {columns.length > 0 && <th scope="col" style={{ width: "2%" }}><small>ردیف</small></th>}
        {columns.map((column, index) => (
          <th
            // onClick={() => onSort(column)}
            scope="col"
            key={index}
            style={{
              width: column.percent + "%",
              textAlign: "center",
              // cursor: column.content !== null ? "" : "pointer",
              fontSize: 14,
            }}
          >
            {column.title}
            {/* {onSortIcon(column)} */}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
`
  createFile(reportTablePath, `tableHeader.js`, injectedContent);

  /********************************************************************************
  *                        searchRpt Component file
  ********************************************************************************/
  injectedContent = `import React, { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import { FieldSet } from "../fieldSet/FieldSet";
import { sendRequest } from '../../../util/makeRequest';
import { fakeAuthProvider } from "../../../auth";
import utils from "../DatePicker/shared/localeUtils";
import { Report } from "../report/Report";
import { removeSlashFromDate, getJalaliDateGregorianFormat } from "../../../util/Date";
import { Message } from "../message/Message";
import * as z from 'zod'
import { DatePicker } from "../DatePicker/DatePicker";
import { TextWithResultSetDataSourceAndOnBlurEvent } from "../text/TextWithResultSetDataSourceAndOnBlurEvent";
import { TextWithResultSetDataSource } from "../text/TextWithResultSetDataSource";
import { Check } from "../check/Check";
import { RadioWithAO } from "../radio/RadioWithAO";
import { Text } from "../text/Text";

export const SearchRpt = ({ id, name, type, value, onChangeStatus, onSelectItem, dataSource, onBlur, placeholder, data, lable, disabled, autocomplete, isVisible, mode }) => {
  const [title, setTitle] = useState('')
  const [lstTypeCode, setLstTypeCode] = useState(0)
  const [tafCode, setTafCode] = useState(0)
  const [seri, setSeri] = useState('')
  const [branchManagementDataSource, setBranchManagementDataSource] = useState([])
  const [branchManagement, setBranchManagement] = useState('')
  const [branchDataSource, setBranchDataSource] = useState([]);
  const [branch, setBranch] = useState('')
  const [startDateAz, setStartDateAz] = useState('')
  const [expireDateTa, setExpireDateTa] = useState('')
  const [expertId, setExpertId] = useState(0)
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    function callBranchManagementResponse() {
      const branchManagementResponse = sendRequest(\`${backendUrl}/regionLists?page=1&size=2\`,
        "POST",
        { "zonecode": 0 }
      );
      return branchManagementResponse
    }

    callBranchManagementResponse().then(response => {
      setBranchManagementDataSource(response.data)
    })
  }, [])

  const doSearch = async () => {
    
    console.log(title)
    console.log(lstTypeCode)
    console.log(tafCode)
    console.log(seri)
    console.log(branchManagement)
    console.log(branch)
    console.log(startDateAz)
    console.log(expireDateTa)

    const callListDetailResponse = await sendRequest(\`${backendUrl}/listDetails?page=0&size=2\`,
      "POST",
      { "tafCode": tafCode, "tafTitle": title, "customerName": '', "extCustId": 0, "startDateAz": 0, "expireDateTa": 0, "seri": seri, "branchManagement": branchManagement, 'branch': '', "expertId": 0, "lstTypeCode": lstTypeCode, "filterCode": 0 }
    ).then(res => {
      console.log(res.data);
    }).catch(err => {console.log(err);})
  }

  let schema = z
    .coerce
    .string({ required_error: 'فیلد اجباری می باشد', message: 'مقادیر غیر رشته مجاز نمی باشد' })
    .min(0, { message: \`حداقل طول ورودی \${0} می باشد\` })
    .max(50, { message: \`حداکثر طول ورودی \${50} می باشد\` })
    .regex(new RegExp('^[ آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی]+$'), 'مقادیری غیر از حروف فارسی مجاز نمی باشد.')
  // console.log(branchManagementDataSource);
  if (branchManagementDataSource.length === 0) return null;
  return isVisible
    ?
    (
      <>
        <div className="row mx-1 my-1 align-items-center justify-content-center">
          <Text
            // Text-1 with StoredProcedure DataSourceProvider & onBlur callPlace
            id="title"
            name="title"
            type="String"
            // value={state.title ? state.title : ''}
            value={''}
            onChangeData={(e) => setTitle(e.target.value)}
            // onBlur={onChangeData}
            onBlur={(e) => console.log(e)}
            placeholder="title"
            lable={'عنوان تفاهم نامه'}
            disabled={false}
            autocomplete="off"
            isVisible={true}
            minValue={0}
            maxValue={50}
          />
          <RadioWithAO
            id="tafState"
            name="tafState"
            lable={'وضعیت تفاهم نامه'}
            previousValue={''}
            // onChangeStatus={onChangeStatus}
            clazz={"col small"}
            // onCheck={onChangeData}
            onCheck={(e) => { setLstTypeCode(e.target.value); }}
            datasoruce={[true && { key: 1, value: 'دردست اقدام' }, true && { key: 2, value: 'بلااقدام' }, true && { key: 3, value: 'نافذ' }, true && { key: 4, value: 'منقضی' }]}
            inline={true}
            isVisible={true}
            disabled={false}
          />
        </div>
        <div className="row mx-1 my-1 align-items-center justify-content-center">
          <Text
            // Text-1 with StoredProcedure DataSourceProvider & onBlur callPlace
            id="tafCode"
            name="tafCode"
            type="BigDecimal"
            // value={state.title ? state.title : ''}
            value={''}
            onChangeData={(e) => setTafCode(e.target.value)}
            // onBlur={onChangeData}
            onBlur={(e) => console.log(e)}
            placeholder="tafCode"
            lable={'کد تفاهم نامه'}
            disabled={false}
            autocomplete="off"
            isVisible={true}
            minValue={-9007199254740991}
            maxValue={9007199254740991}
          />
          <Text
            // Text-1 with StoredProcedure DataSourceProvider & onBlur callPlace
            id="seri"
            name="seri"
            type="BigDecimal"
            // value={state.title ? state.title : ''}
            value={''}
            onChangeData={(e) => {setSeri(e.target.value == 0 ? '' : e.target.value.toString())}}
            // onBlur={onChangeData}
            // onBlur={(e) => console.log(e)}
            placeholder="seri"
            lable={'شماره مصوبه'}
            disabled={false}
            autocomplete="off"
            isVisible={true}
            minValue={-9007199254740991}
            maxValue={9007199254740991}
          />
        </div>
        <div className="row mx-1 my-1 align-items-center justify-content-center">
          <TextWithResultSetDataSourceAndOnBlurEvent
            id="branchManagement"
            name="branchManagement"
            value={''}
            //  set state
            onChangeStatus={(e) => { /* console.log(e);setBranchManagement(e) */ }}

            placeholder="branchManagement"
            lable={'مدیریت شعب'}
            disabled={false}
            autocomplete="off"
            isVisible={true}
            //  input result set filled on form load
            resultSet={branchManagementDataSource}
            // resultSet={() => { }}
            dsKey={'rgncode'}
            dsValue={'rgndesc'}
            //  set selected row of the result set
            // onResultSetSelected={setBranchManagement}
            onResultSetSelected={(e) => { setBranchManagement(e.rgndesc) }}
            //  define function to be called on Blur event
            dataSourceProvider={async (rgncode) => {
              const response = await sendRequest(
                "${backendUrl}/branchLists?page=0&size=2",
                "POST",
                { "rgncode": rgncode }
              );
              return response.data
            }}
            //  result of onBlur event function call
            onChangeDataSourceProviderOutput={(e) => {
              // setBranchManagementOnBlurOutput(e)
              setBranchDataSource(e)
            }}
          />
          <TextWithResultSetDataSource
            id="branch"
            name="branch"
            // value={state['branch'] ? state['branch'] : ''}
            value={''}
            // onChangeStatus={onChangeData}
            onChangeStatus={() => { }}

            mode="new"
            placeholder="branch"
            lable={'شعبه'}
            disabled={false}
            autocomplete="off"
            isVisible={true}

            resultSet={branchDataSource}
            // resultSet={branchManagementOnBlurOutput}
            dsKey={'branch'}
            dsValue={'titlex'}
            // onResultSetSelected={setBranch}
            onResultSetSelected={(e) => { setBranch(Object.keys(e).length > 0 ? e.titlex : '') }}
          />
        </div>
        <div className="row mx-1 my-1 align-items-center justify-content-center">
          <DatePicker
            id="startDate"
            name="startDate"
            locale="fa"
            value={startDateAz}
            onChangeData={(e) => { setStartDateAz(e.target.value); }}
            lable={'تاریخ شروع'}
            calendarPopperPosition="bottom"
            disabled={false}
            isVisible={true}
            maximumDate={''}
            shouldHighlightToday={false}
          />
          <DatePicker
            id="expireDate"
            name="expireDate"
            locale="fa"
            value={expireDateTa}
            onChangeData={(e) => { setExpireDateTa(e.target.value); }}
            lable={'تاریخ انقضاء'}
            calendarPopperPosition="bottom"
            disabled={false}
            isVisible={true}
            maximumDate={''}
            shouldHighlightToday={false}
          />
        </div>
        <div className="row mx-1 my-1 align-items-center justify-content-center">
          <div className="col-1">
            <button
              type="button"
              className={"btn btn-outline-primary btn-sm"}
              // disabled={updated == true}
              disabled={false}
              onClick={(e) => {
                setIsSubmitting(true)
                doSearch()
                setIsSubmitting(false)
              }}
            >
            {isSubmitting ? 'درحال ارسال اطلاعات...' : 'جستجو'}
            </button>
          </div>
        </div>
      </>
    )
    :
    (
      <div className="col"></div >
    )
}`
  createFile(`${reportsPath}`, `${'searchRpt'}.jsx`, injectedContent);

  /********************************************************************************
  *                        commitmentsRpt Component file
  ********************************************************************************/
  injectedContent = `import React, { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import { FieldSet } from "../fieldSet/FieldSet";
import { sendRequest } from '../../../util/makeRequest';
import { fakeAuthProvider } from "../../../auth";
import utils from "../DatePicker/shared/localeUtils";
import { Report } from "../report/Report";
import { removeSlashFromDate, getJalaliDateGregorianFormat, getTodayDate } from "../../../util/Date";
import { Message } from "../message/Message";
import { extractCommitment } from "../../../util/reportLogic";

export const CommitmentsRpt = ({ id, name, type, value, onChangeStatus, onSelectItem, dataSource, onBlur, placeholder, data, lable, tafCode, disabled, autocomplete, isVisible, mode }) => {

    const [state, setState] = useState({})
    const [tafStateCode, setTafStateCode] = useState(0)
    const [tafahomInformation, setTafahomInformation] = useState({})
    const [rialLG, setRialLG] = useState([])
    const [rialLC, setRialLC] = useState([])
    const [arzLG, setArzLG] = useState([])
    const [arzLC, setArzLC] = useState([])
    const [reportData, setReportData] = useState()
    const [feed, setFeed] = useState(data)


    const [currentSeri, setCurrentSeri] = useState(value)
    const [currentValue, setCurrentValue] = useState();
    const [confirm, setConfirm] = useState([])
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [errorCode, setErrorCode] = useState(0)
    const [message, setMessage] = useState('')
    const [downloadStatus, setDownloadStatus] = useState('initial')

    let filterData = ''
    const params = useParams();
    const credential = fakeAuthProvider.getCredential()

    const handleRowClick = (row) => { }
    const todayFa = getTodayDate()


    //  get tafahomInformation
    useEffect(() => {
        if (tafCode != '' && typeof tafCode != 'undefined') {
            setMessage('')
            setDownloadStatus('downloading')
            async function getTafahomInformation() {
                const response = await sendRequest(
                    \`${backendUrl}/tafahomInformations/\${params.archiveNumber}\`,
                    "GET",
                );
                return response.data
            }
            try {
                getTafahomInformation()
                    .then((response) => {
                        // setTafStateCode({ ...response.content[0].tafStateCode })
                        setTafahomInformation({ ...response.content[0] })
                    }).catch(err => {
                      setMessage(msg)
                      setDownloadStatus('error')
                  })
            } catch (error) {
              setMessage(msg)
              setDownloadStatus('error')
            }
        }
    }, [tafCode])

    useEffect(() => {
        if (
            tafahomInformation != '' &&
            typeof tafahomInformation != 'undefined' &&
            Object.keys(tafahomInformation).length > 0 &&
            (typeof tafahomInformation.startDate != undefined && tafahomInformation.startDate != '') &&
            (typeof tafahomInformation.expireDate != undefined && tafahomInformation.expireDate != '')
        ) {
            async function getSelectedCustomers() {
                const response = await sendRequest(
                    \`${backendUrl}/tafahomInformations/\${params.archiveNumber}/customerWithHadSaghfs\${'?tafCode=' + tafCode}\`,
                    "GET",
                );
                return response.data
            }
            try {

                getSelectedCustomers()
                    .then((response) => {
                        if (response.content.length > 0) {
                            return (response.content);
                        } else {
                            return []
                        }
                    })
                    .then(selectedCustomer => {
                        async function getRialLG(intCustId, startDate, expireDate) {
                            const response = await sendRequest(
                                \`${backendUrl}/rialLetterOfGuaranties\${'?tafCode=' + tafCode}\`,
                                "POST",
                                {
                                    "usercd": "tafahom",
                                    "systemDT": 14030707,
                                    "intcstmrcd": intCustId,
                                    "fromdt": startDate,
                                    "todt": expireDate
                                }
                            )
                            return response.data
                        }
                        async function getArzLG(intCustId, startDate, expireDate) {
                            const response = await sendRequest(
                                \`${backendUrl}/arzLetterOfGuaranties\${'?tafCode=' + tafCode}\`,
                                "POST",
                                {
                                    "intcstmrcd": intCustId,
                                    "fromdt": startDate,
                                    "todt": expireDate
                                }
                            )
                            return response.data
                        }
                        async function getRialLC(intCustId, startDate, expireDate) {
                            const response = await sendRequest(
                                \`${backendUrl}/rialLetterOfCredits\`,
                                "POST",
                                {
                                    "intcstmrcd": intCustId,
                                    "fromdt": startDate,
                                    "todt": expireDate
                                }
                            )
                            return response.data
                        }
                        async function getArzLC(intCustId, startDate, expireDate) {
                            const response = await sendRequest(
                                \`${backendUrl}/arzLetterOfCredits\`,
                                "POST",
                                {
                                    "repTyp": 1,
                                    "intcstmrcd": intCustId,
                                    "fromdt": startDate,
                                    "todt": expireDate
                                }
                            )
                            return response.data
                        }
                        async function getCommitmentByTafCode(tafCode) {
                            const response = await sendRequest(
                                \`${backendUrl}/tafahomInformations/\${params.archiveNumber}/commitmentsRpts?tafCode=\${tafCode}\`,
                                "GET"
                            );
                            return response.data.content.length
                        }
                        async function setCommitment(
                          rialLgTotalCntrcts,
                          rialLgTotalAmnt,
                          rialLgTotalMandeBedehi,
                          arzLgTotalCntrcts,
                          arzLgTotalAmnt,
                          arzLgTotalMandeBedehi,
                          rialLcTotalCntrcts,
                          rialLcTotalAmnt,
                          rialLcTotalMandeBedehi,
                          arzLcTotalCntrcts,
                          arzLcTotalAmnt,
                          arzLcTotalMandeBedehi
                        ) {
                            const response = await sendRequest(
                                \`${backendUrl}/tafahomInformations/\${params.archiveNumber}/commitmentsRpts\`,
                                "POST",
                                {
                                    "tafCode": tafCode,
                                    "commitmentsReportUser": fakeAuthProvider.getCredential().firstName + fakeAuthProvider.getCredential().lastName,
                                    "lastReportDate": +\`\${getJalaliDateGregorianFormat(fakeAuthProvider.getCredential().date, { year: '2-digit' })}\${getJalaliDateGregorianFormat(fakeAuthProvider.getCredential().date, { month: '2-digit' })}\`,
                                    "rialLgTotalCntrcts": rialLgTotalCntrcts,
                                    "rialLgTotalAmnt": rialLgTotalAmnt,
                                    "rialLgTotalMandeBedehiAmnt": rialLgTotalMandeBedehi,
                                    "arzLgTotalCntrcts": arzLgTotalCntrcts,
                                    "arzLgTotalAmnt": arzLgTotalAmnt,
                                    "arzLgTotalMandeBedehiAmnt": arzLgTotalMandeBedehi,
                                    "rialLcTotalCntrcts": rialLcTotalCntrcts,
                                    "rialLcTotalAmnt": rialLcTotalAmnt,
                                    "rialLcTotalMandeBedehiAmnt": rialLcTotalMandeBedehi,
                                    "arzLcTotalCntrcts": arzLcTotalCntrcts,
                                    "arzLcTotalAmnt": arzLcTotalAmnt,
                                    "arzLcTotalMandeBedehiAmnt": arzLcTotalMandeBedehi,
                                }
                            );
                            return response.data
                        }
                        try {
                            const startDate = removeSlashFromDate(tafahomInformation.startDate);
                            const expireDate = removeSlashFromDate(tafahomInformation.expireDate);
                            Promise.all([
                                getRialLG(tafahomInformation.intCustId, startDate, expireDate),
                                getArzLG(tafahomInformation.intCustId, startDate, expireDate),
                                getRialLC(tafahomInformation.intCustId, startDate, expireDate),
                                getArzLC(tafahomInformation.intCustId, startDate, expireDate)
                            ]).then(mainCustomer => {
                                Promise.all(
                                    selectedCustomer.length == 0 || selectedCustomer[selectedCustomer.length - 1].includedCustomerIntCustId == ''
                                        ? [Promise.resolve(3)]
                                        : selectedCustomer[selectedCustomer.length - 1].includedCustomerIntCustId.split(',').map(async customer => {
                                            if (!!customer) {
                                                const intCustId = customer;
                                                return [
                                                    await getRialLG(intCustId, startDate, expireDate),
                                                    await getArzLG(intCustId, startDate, expireDate),
                                                    await getRialLC(intCustId, startDate, expireDate),
                                                    await getArzLC(intCustId, startDate, expireDate)
                                                ]
                                            } else {
                                                throw ('شماره داخلی مشتری ثبت نشده است ')
                                            }
                                        })
                                ).then((customers, index) => {
                                    let total = 0
                                    let rialLgTotalCntrcts = 0
                                    let rialLgTotalAmnt = 0
                                    let rialLgTotalMandeBedehi = 0
                                    let arzLgTotalCntrcts = 0
                                    let arzLgTotalAmnt = 0
                                    let arzLgTotalMandeBedehi = 0
                                    let rialLcTotalCntrcts = 0
                                    let rialLcTotalAmnt = 0
                                    let rialLcTotalMandeBedehi = 0
                                    let arzLcTotalCntrcts = 0
                                    let arzLcTotalAmnt = 0
                                    let arzLcTotalMandeBedehi = 0
                                    let tempRows = []
                                    let tempFilterData = []

                                    total += mainCustomer[0].length + mainCustomer[1].length + mainCustomer[2].length + mainCustomer[3].length
                                    rialLgTotalCntrcts += mainCustomer[0].length
                                    arzLgTotalCntrcts += mainCustomer[1].length
                                    rialLcTotalCntrcts += mainCustomer[2].length
                                    arzLcTotalCntrcts += mainCustomer[3].length

                                    const result = extractCommitment(mainCustomer, data)

                                    rialLgTotalAmnt += result.rialLgTotalAmnt
                                    rialLgTotalMandeBedehi += result.rialLgTotalMandeBedehi
                                    arzLgTotalAmnt += result.arzLgTotalAmnt
                                    arzLgTotalMandeBedehi += result.arzLgTotalMandeBedehi
                                    rialLcTotalAmnt += result.rialLcTotalAmnt
                                    rialLcTotalMandeBedehi += result.rialLcTotalMandeBedehi
                                    arzLcTotalAmnt += result.arzLcTotalAmnt
                                    arzLcTotalMandeBedehi += result.arzLcTotalMandeBedehi

                                    tempRows = [
                                        ...tempRows,
                                        ...result.tempRows
                                    ]
                                    tempFilterData = [
                                        ...tempFilterData,
                                        ...result.tempFilterData
                                    ]

                                    if (customers.length != 1 || typeof customers[0] != 'number') {
                                        customers.map((customerInfo, index) => {
                                            total += customerInfo[0].length + customerInfo[1].length + customerInfo[2].length + customerInfo[3].length
                                            rialLgTotalCntrcts += customerInfo[0].length
                                            arzLgTotalCntrcts += customerInfo[1].length
                                            rialLcTotalCntrcts += customerInfo[2].length
                                            arzLcTotalCntrcts += customerInfo[3].length
                                            
                                            const result = extractCommitment(customerInfo, data)

                                            rialLgTotalAmnt += result.rialLgTotalAmnt
                                            rialLgTotalMandeBedehi += result.rialLgTotalMandeBedehi
                                            arzLgTotalAmnt += result.arzLgTotalAmnt
                                            arzLgTotalMandeBedehi += result.arzLgTotalMandeBedehi
                                            rialLcTotalAmnt += result.rialLcTotalAmnt
                                            rialLcTotalMandeBedehi += result.rialLcTotalMandeBedehi
                                            arzLcTotalAmnt += result.arzLcTotalAmnt
                                            arzLcTotalMandeBedehi += result.arzLcTotalMandeBedehi

                                            tempRows = [
                                                ...tempRows,
                                                ...result.tempRows
                                            ]
                                            tempFilterData = [
                                                ...tempFilterData,
                                                ...result.tempFilterData
                                            ]
                                        })
                                    }
                                    tempFilterData = [
                                        ...tempFilterData,
                                    ]
                                    if (total == 0) {
                                        setFeed(prevState => ({
                                            ...prevState,
                                            rows: [
                                                {
                                                    // title: tafahomInformation['title'],
                                                    cntrctAmnt: "-",
                                                    cntrctId: "-",
                                                    cstmrId: "-",
                                                    cstmrName: "-",
                                                    fcltySts: "-",
                                                    grntngdt: "-",
                                                    lgCntrctAmnt: "-",
                                                    lgFcltySts: "-",
                                                    lgPrpslTypDsc: "-",
                                                    prpslTypDsc: "-",
                                                }
                                            ]
                                        }))
                                        // feed.rows = [];
                                    } else {
                                        setFeed(prevState => ({
                                            ...prevState,
                                            rows: tempRows,
                                            headerData:
                                                JSON.parse(\`{
                                                    "\${data.columns[0].title}":"پورتال تفاهم نامه های بانک ملت",
                                                    "\${data.columns[1].title}":"\${''}",
                                                    "\${data.columns[2].title}":"\${''}",
                                                    "\${data.columns[3].title}":"\${''}",
                                                    "\${data.columns[4].title}":"\${data.reportTitle}",
                                                    "\${data.columns[5].title}":"\${''}",
                                                    "\${data.columns[6].title}":"\${''}",
                                                    "\${data.columns[7].title}":"\${''}",
                                                    "\${data.columns[8].title}":"\${todayFa.dayWeek + todayFa.day + todayFa.monthTitle + ' '+ todayFa.year}"
                                                }\`),
                                            filterData: tempFilterData
                                        }))
                                    }

                                    return {
                                        rialLgTotalCntrcts: rialLgTotalCntrcts,
                                        rialLgTotalAmnt: rialLgTotalAmnt,
                                        rialLgTotalMandeBedehi: rialLgTotalMandeBedehi,
                                        arzLgTotalCntrcts: arzLgTotalCntrcts,
                                        arzLgTotalAmnt: arzLgTotalAmnt,
                                        arzLgTotalMandeBedehi: arzLgTotalMandeBedehi,
                                        rialLcTotalCntrcts: rialLcTotalCntrcts,
                                        rialLcTotalAmnt: rialLcTotalAmnt,
                                        rialLcTotalMandeBedehi: rialLcTotalMandeBedehi,
                                        arzLcTotalCntrcts: arzLcTotalCntrcts,
                                        arzLcTotalAmnt: arzLcTotalAmnt,
                                        arzLcTotalMandeBedehi: arzLcTotalMandeBedehi
                                    }
                                }).then(commitmentResult => {
                                    getCommitmentByTafCode(tafCode)
                                        .then(count => {
                                            if (count == 0) {
                                                setCommitment(
                                                    commitmentResult.rialLgTotalCntrcts,
                                                    commitmentResult.rialLgTotalAmnt,
                                                    commitmentResult.rialLgTotalMandeBedehi,
                                                    commitmentResult.arzLgTotalCntrcts,
                                                    commitmentResult.arzLgTotalAmnt,
                                                    commitmentResult.arzLgTotalMandeBedehi,
                                                    commitmentResult.rialLcTotalCntrcts,
                                                    commitmentResult.rialLcTotalAmnt,
                                                    commitmentResult.rialLcTotalMandeBedehi,
                                                    commitmentResult.arzLcTotalCntrcts,
                                                    commitmentResult.arzLcTotalAmnt,
                                                    commitmentResult.arzLcTotalMandeBedehi
                                                )
                                            }
                                            setDownloadStatus('completed')
                                        })
                                        .catch(error => {
                                            setMessage('خطا در  ثبت اطلاعات تعهدات')
                                            setDownloadStatus('error')
                                        })
                                }).catch(err => {
                                    console.log(err);
                                    setMessage(err ? err : 'خطا در واکشی اطلاعات مربوط به تعهدات مشتریان زیرمجموعه تفاهم نامه')
                                    setDownloadStatus('error')
                                })
                            }).catch(err => {
                                // console.log(err);
                                setMessage('خطا در واکشی اطلاعات مربوط به تعهدات مشتری طرف تفاهم نامه')
                                setDownloadStatus('error')
                            })
                        } catch (error) {
                            console.log(error)
                        }
                    })
                    .catch(msg => {
                        setMessage(msg)
                        setDownloadStatus('error')
                    })
            } catch (error) {
            }
        }
    }, [tafahomInformation])

    return isVisible
        ?
        (
            <>
                {
                    message.length > 0
                        ?
                        <Message message={message} />
                        :
                        <>
                            {downloadStatus == 'downloading'
                                ?
                                <Message message={"درحال دانلود اطلاعات"} />
                                :
                                <>
                                    <Report
                                        id="uniqueCode"
                                        name="uniqueCode"
                                        data={feed}
                                        filterData={feed.filterData}
                                        onRowClick={handleRowClick}
                                        disabled={false}
                                        isVisible={true}
                                        mode={"report"}
                                        pageSize={[10]}
                                    />
                                </>
                            }
                        </>
                }
            </>
        )
        :
        (
            <div className="col"></div>
        )
}`;
  createFile(reportsPath, `${'commitmentsRpt'}.jsx`, injectedContent);

  /********************************************************************************
  *                        Message Component file
  ********************************************************************************/
  injectedContent = `import React from 'react';
import { FieldSet } from "../fieldSet/FieldSet";

export const Message = ({ message }) => {
    return < div className="col-6">
        <FieldSet title="">
            <div className="row mx-1 my-1 align-items-center justify-content-center">
                <div className="col-8">
                    {/* <p className="text-center"><span className="small text-muted">مشکل در واکشی اطلاعات</span></p> */}
                    <p className="text-center"><span className="small">{message}</span></p>
                </div>
            </div>
        </FieldSet>
    </div>
}
// ⏳`
  createFile(messagePath, `Message.jsx`, injectedContent)

  /********************************************************************************
  *                        customerRialResourceRpt Component file
  ********************************************************************************/
  //  dataSource, placeholder, autocomplete, numOfLines
  injectedContent = `import React, { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import TableBody from "../table/tableBody";
import TableHeader from "../table/tableHeader";
import { sendRequest } from '../../../util/makeRequest';
import { fakeAuthProvider } from "../../../auth";
import { Report } from "../report/Report";
import { Message } from "../message/Message";
import { calculateAverage, validateAccounts, validateTafahomInformation } from '../../../util/Validation';
import { addCommas } from "@persian-tools/persian-tools";
import { getTodayDate } from "../../../util/Date";

export const CustomerRialResourceRpt = ({ id, name, type, value, onChangeStatus, onBlur, placeholder, lable, data, tafCode, disabled, autocomplete, isVisible }) => {
    const [savedCustomerArray, setSavedCustomerArray] = useState([])            //  saved unique
    const [allCustomerArray, setAllCustomerArray] = useState([])                //  all with duplicates
    const [allCustomerUniqueArray, setAllCustomerUniqueArray] = useState([])    //  all Unique
    const [displayCustomer, setDisplayCustomer] = useState([])
    const [previousSelect, setPreviousSelect] = useState(0)
    const [selectedUser, setSelectedUser] = useState([])
    const [feed, setFeed] = useState(data)
    const [message, setMessage] = useState('')
    const [downloadStatus, setDownloadStatus] = useState('initial')

    let filterData = ''
    let jariBalance = 0
    let gharzBalance = 0
    let shortBalance = 0
    let longBalance = 0
    let govahiBalance = 0

    let jariArziBalance = 0
    let gharzArziBalance = 0
    let shortArziBalance = 0
    let longArziBalance = 0
    let govahiArziBalance = 0

    const handleRowClick = (row) => { }
    const todayFa = getTodayDate()

    const params = useParams();
    //  get all customers
    useEffect(() => {
        if (tafCode != '' && typeof tafCode != 'undefined') {
            async function getTafahomInformation() {
                const response = await sendRequest(
                    \`${backendUrl}/tafahomInformations/\${params.archiveNumber}\`,
                    "GET",
                );
                return response.data
            }
            async function getCustomerAccounts() {
                const response = await sendRequest(
                    \`${backendUrl}/tafahomInformations/\${params.archiveNumber}/accounts\${'?tafCode=' + tafCode}\`,
                    "GET",
                )
                return response.data
            }
            async function getGovahiEmzas(intCustId) {
                const response = await sendRequest(
                    \`${backendUrl}/getGovahiEmzas\`,
                    "POST",
                    {
                        "intCustId": intCustId
                    }
                );
                return response.data
            }
            try {
                setDownloadStatus('downloading')
                //  get customer's ALL account
                getCustomerAccounts()
                    .then((customerAccountsResponse) => {
                        let customerUniqueAccounts;
                        if (typeof customerAccountsResponse.content != 'undefined' && customerAccountsResponse.content.length > 0) {
                            customerUniqueAccounts = customerAccountsResponse.content.filter((value, index, array) =>
                                index === array.findIndex(item => (item.extCustId === value.extCustId))
                            )
                        } else {
                            throw ('مشتری فاقد حساب تعریف شده می باشد')
                        };
                        setAllCustomerArray([...customerAccountsResponse.content])
                        return customerUniqueAccounts
                    }).then(customerUniqueAccounts => {
                        validateAccounts(customerUniqueAccounts)
                        return customerUniqueAccounts;
                    }).then(customerUniqueAccounts => {
                        Promise.all(
                            customerUniqueAccounts.map(async account => {
                                if (!!account.intCustId) {
                                    const intCustId = account.intCustId;
                                    return [
                                        await getGovahiEmzas(intCustId),
                                    ]
                                }
                            })
                        ).then(govahiResponse => {
                            let subGovahiEmza = 0
                            govahiResponse.map(govahi => {
                                subGovahiEmza += govahi[0].bndrem
                            })
                            return subGovahiEmza
                        }).then(sumGovahiEmza => {
                            getTafahomInformation()
                                .then(tafahomInformation => {
                                    setDownloadStatus('completed');
                                    govahiBalance = sumGovahiEmza
                                    customerUniqueAccounts.map(account => {
                                        if (account['accTypeCode'] > 100 && account['accTypeCode'] < 200) {
                                            jariBalance += account['balance']
                                        } else if ((account['accTypeCode'] > 200 && account['accTypeCode'] < 300) || (account['accTypeCode'] > 700 && account['accTypeCode'] < 800)) {
                                            gharzBalance += account['balance']
                                        } else if (account['accTypeCode'] > 300 && account['accTypeCode'] < 400) {
                                            shortBalance += account['balance']
                                        } else if (account['accTypeCode'] > 400 && account['accTypeCode'] < 500) {
                                            longBalance += account['balance']
                                        } else if (account['accTypeCode'] > 1100 && account['accTypeCode'] < 1200) {
                                            jariArziBalance += account['balance']
                                        } else if (account['accTypeCode'] > 2200 && account['accTypeCode'] < 2300) {
                                            gharzArziBalance += account['balance']
                                        } else if (account['accTypeCode'] > 3300 && account['accTypeCode'] < 3400) {
                                            shortArziBalance += account['balance']
                                        } else if (account['accTypeCode'] > 4400 && account['accTypeCode'] < 4500) {
                                            longArziBalance += account['balance']
                                        }
                                    })
                                    const total = addCommas(jariBalance + gharzBalance + shortBalance + longBalance + govahiBalance)
                                    setFeed((prevState) => ({
                                        ...prevState,
                                        rows: [{
                                            title: tafahomInformation.content[0]['title'],
                                            jariBalance: addCommas(jariBalance),
                                            gharzBalance: addCommas(gharzBalance),
                                            shortBalance: addCommas(shortBalance),
                                            longBalance: addCommas(longBalance),
                                            govahiBalance: addCommas(govahiBalance),
                                            sum: total,
                                        }],
                                        headerData:
                                            JSON.parse(\`{
                                              "\${data.columns[0].title}": "پورتال تفاهم نامه های بانک ملت",
                                              "\${data.columns[1].title}": "\${''}",
                                              "\${data.columns[2].title}": "\${''}",
                                              "\${data.columns[3].title}": "\${data.reportTitle}",
                                              "\${data.columns[4].title}": "\${''}",
                                              "\${data.columns[5].title}": "\${''}",
                                              "\${data.columns[6].title}": "\${todayFa.dayWeek + todayFa.day + todayFa.monthTitle + ' '+ todayFa.year}"
                                            }\`),
                                        filterData: [
                                            JSON.parse(\`{
                                                "\${data.columns[0].title}": "\${tafahomInformation.content[0]['title']}",
                                                "\${data.columns[1].title}": "\${jariBalance}",
                                                "\${data.columns[2].title}": "\${gharzBalance}",
                                                "\${data.columns[3].title}": "\${shortBalance}",
                                                "\${data.columns[4].title}": "\${longBalance}",
                                                "\${data.columns[5].title}": "\${govahiBalance}",
                                                "\${data.columns[6].title}": "\${total}"
                                            }\`),
                                        ]
                                    }))
                                    //filterData = JSON.parse(
                                    //    \`{
                                    //        "\${data.columns[0].title}": "Title",
                                    //        "\${data.columns[1].title}": "\${jariBalance}",
                                    //        "\${data.columns[2].title}": "\${gharzBalance}",
                                    //        "\${data.columns[3].title}": "\${shortBalance}",
                                    //        "\${data.columns[4].title}": "\${longBalance}",
                                    //        "\${data.columns[5].title}": "\${govahiBalance}",
                                    //        "\${data.columns[6].title}": "\${jariBalance + gharzBalance + shortBalance + longBalance}"
                                    //    }\`
                                    //)
                                })
                                .catch(err => { 
                                    setMessage('خطا در واکشی اطلاعات تفاهم نامه')
                                    setDownloadStatus('error');
                                 })
                        }).catch(err => { throw ('خطا در واکشی اطلاعات گواهی امضاء') })
                    }).catch(err => {
                        setMessage(err)
                        setDownloadStatus('error');
                    })
            } catch (error) {
            }
        }
    }, [tafCode])

    const updateState = (e) => {
        const idx = displayCustomer.findIndex((element, index, array) => element.extCustId == e.extCustId)
        if (!selectedUser.includes(displayCustomer[idx]['extCustId'])) {
            setSelectedUser([
                ...selectedUser,
                displayCustomer[idx]['extCustId']
            ])
            setPreviousSelect(displayCustomer[idx]['extCustId'])
        } else {
            const abc = selectedUser.filter(item => item != displayCustomer[idx]['extCustId'])
            setSelectedUser(abc)
            setPreviousSelect(0)
        }
        displayCustomer[idx]['selected'] = e['selected']
        setDisplayCustomer([...displayCustomer])
        onChangeStatus({
            extCustId: e.extCustId,
            intCustId: e.intCustId,
            ownerName: e.ownerName,
            nationalCode: e.nationalCode,
            selected: e.selected
        })
    }

    const columnObject = [
        { title: 'extCustId', lable: 'شماره مشتری', backgroundColor: 'E7E7E7', width: '10', fontSize: '', fontWeight: '', textBody: '' },
        { title: 'ownerName', lable: 'نام خانوادگی/ نام', backgroundColor: 'E7E7E7', width: '20', fontSize: '', fontWeight: '', textBody: '' },
        { title: 'nationalCode', lable: 'کدملی', backgroundColor: '', width: 'E7E7E7', fontSize: '10', fontWeight: '', textBody: '' },
        { title: '', lable: 'انتخاب مشتری', backgroundColor: 'E7E7E7', width: '10', fontSize: '', fontWeight: '', textBody: '' },
    ]

    return isVisible
        ?
        (
            <>
                {
                    message.length > 0
                        ?
                        <Message message={message} />
                        :
                        <>
                            {downloadStatus == 'downloading'
                                ?
                                <Message message={"درحال دانلود اطلاعات"} />
                                :
                                <>
                                    <Report
                                        id="uniqueCode"
                                        name="uniqueCode"
                                        data={feed}
                                        filterData={feed.filterData}
                                        onRowClick={handleRowClick}
                                        disabled={false}
                                        isVisible={true}
                                        mode={"report"}
                                    />
                                </>
                            }
                        </>
                }
            </>
        )
        :
        (
            <div className="col"></div>
        )
}`;
  createFile(`${reportsPath}`, `${'customerRialResourceRpt'}.jsx`, injectedContent);

  /********************************************************************************
  *                        customerArzResourceRpt Component file
  ********************************************************************************/
  //  dataSource, placeholder, autocomplete, numOfLines
  injectedContent = `import React, { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import { FieldSet } from "../fieldSet/FieldSet";
import TableBody from "../table/tableBody";
import TableHeader from "../table/tableHeader";
import { sendRequest } from '../../../util/makeRequest';
import { fakeAuthProvider } from "../../../auth";
import { Report } from "../report/Report";
import { Message } from "../message/Message";
import { calculateAverage, validateAccounts, validateTafahomInformation } from '../../../util/Validation';
import { addCommas } from "@persian-tools/persian-tools";
import { getTodayDate } from "../../../util/Date";

export const CustomerArzResourceRpt = ({ id, name, type, value, onChangeStatus, onBlur, placeholder, lable, data, tafCode, disabled, autocomplete, isVisible }) => {
    const [savedCustomerArray, setSavedCustomerArray] = useState([])            //  saved unique
    const [allCustomerArray, setAllCustomerArray] = useState([])                //  all with duplicates
    const [allCustomerUniqueArray, setAllCustomerUniqueArray] = useState([])    //  all Unique
    const [displayCustomer, setDisplayCustomer] = useState([])
    const [previousSelect, setPreviousSelect] = useState(0)
    const [selectedUser, setSelectedUser] = useState([])
    const [feed, setFeed] = useState(data)
    const [message, setMessage] = useState('')
    const [downloadStatus, setDownloadStatus] = useState('initial')

    let filterData = ''
    let jariBalance = 0
    let gharzBalance = 0
    let shortBalance = 0
    let longBalance = 0
    let govahiBalance = 0

    let jariArziBalance = 0
    let gharzArziBalance = 0
    let shortArziBalance = 0
    let longArziBalance = 0

    const handleRowClick = (row) => { }
    const todayFa = getTodayDate()

    const params = useParams();
    //  get all customers
    useEffect(() => {
        if (tafCode != '' && typeof tafCode != 'undefined') {
            async function getTafahomInformation() {
                const response = await sendRequest(
                    \`${backendUrl}/tafahomInformations/\${params.archiveNumber}\`,
                    "GET",
                );
                return response.data
            }
            async function getCustomerAccounts() {
                const response = await sendRequest(
                    \`${backendUrl}/tafahomInformations/\${params.archiveNumber}/accounts\${'?tafCode=' + tafCode}\`,
                    "GET",
                );
                return response.data
            }
            try {
                setDownloadStatus('downloading')
                //  get customer's ALL account
                getCustomerAccounts()
                    .then(customerAccountsResponse => {
                        let customerUniqueAccounts;
                        if (typeof customerAccountsResponse.content != 'undefined' && customerAccountsResponse.content.length > 0) {
                            customerUniqueAccounts = customerAccountsResponse.content.filter((value, index, array) =>
                                index === array.findIndex(item => (item.extCustId === value.extCustId))
                            )
                            return customerUniqueAccounts
                        } else {
                            throw ('مشتری فاقد حساب تعریف شده می باشد')
                        };
                    })
                    .then(customerUniqueAccounts => {
                        validateAccounts(customerUniqueAccounts)
                        return customerUniqueAccounts;
                    })
                    .then((customerUniqueAccounts) => {
                        if (customerUniqueAccounts.length > 0) {
                            getTafahomInformation()
                                .then(tafahomInformation => {
                                    setDownloadStatus('completed');
                                    customerUniqueAccounts.map((row) => {
                                        if (row['accTypeCode'] > 100 && row['accTypeCode'] < 200) {
                                            jariBalance += row['balance']
                                        } else if ((row['accTypeCode'] > 200 && row['accTypeCode'] < 300) || (row['accTypeCode'] > 700 && row['accTypeCode'] < 800)) {
                                            gharzBalance += row['balance']
                                        } else if (row['accTypeCode'] > 300 && row['accTypeCode'] < 400) {
                                            shortBalance += row['balance']
                                        } else if (row['accTypeCode'] > 400 && row['accTypeCode'] < 500) {
                                            longBalance += row['balance']
                                        } else if (row['accTypeCode'] > 1100 && row['accTypeCode'] < 1200) {
                                            jariArziBalance += row['balance']
                                        } else if (row['accTypeCode'] > 2200 && row['accTypeCode'] < 2300) {
                                            gharzArziBalance += row['balance']
                                        } else if (row['accTypeCode'] > 3300 && row['accTypeCode'] < 3400) {
                                            shortArziBalance += row['balance']
                                        } else if (row['accTypeCode'] > 4400 && row['accTypeCode'] < 4500) {
                                            longArziBalance += row['balance']
                                        }
                                    }
                                    )
                                    const total = addCommas(jariArziBalance + gharzArziBalance + shortArziBalance + longArziBalance)
                                    setFeed((prevState) => ({
                                        ...prevState,
                                        rows: [{
                                            title: tafahomInformation.content[0]['title'],
                                            jariBalance: addCommas(jariArziBalance),
                                            gharzBalance: addCommas(gharzArziBalance),
                                            shortBalance: addCommas(shortArziBalance),
                                            longBalance: addCommas(longArziBalance),
                                            sum: total
                                        }],
                                        headerData:
                                            JSON.parse(\`{
                                              "\${data.columns[0].title}": "پورتال تفاهم نامه های بانک ملت",
                                              "\${data.columns[1].title}": "\${''}",
                                              "\${data.columns[2].title}": "\${''}",
                                              "\${data.columns[3].title}": "\${data.reportTitle}",
                                              "\${data.columns[4].title}": "\${''}",
                                              "\${data.columns[5].title}": "\${todayFa.dayWeek + todayFa.day + todayFa.monthTitle + ' '+ todayFa.year}"
                                            }\`),
                                        filterData: [
                                            JSON.parse(\`{
                                            "\${data.columns[0].title}": "\${tafahomInformation.content[0]['title']}",
                                            "\${data.columns[1].title}": "\${addCommas(jariArziBalance)}",
                                            "\${data.columns[2].title}": "\${addCommas(gharzArziBalance)}",
                                            "\${data.columns[3].title}": "\${addCommas(shortArziBalance)}",
                                            "\${data.columns[4].title}": "\${addCommas(longArziBalance)}",
                                            "\${data.columns[5].title}": "\${total}"
                                        }\`),
                                        ]
                                    }))
                                })
                                .catch(() => {
                                    setMessage('خطا در واکشی اطلاعات تفاهم نامه')
                                    setDownloadStatus('error');
                                })
                        }
                    })
                    .catch(err => {
                        setMessage(err)
                        setDownloadStatus('error');
                    });
            } catch (error) {
            }
        }
    }, [tafCode])

    const updateState = (e) => {
        const idx = displayCustomer.findIndex((element, index, array) => element.extCustId == e.extCustId)
        if (!selectedUser.includes(displayCustomer[idx]['extCustId'])) {
            setSelectedUser([
                ...selectedUser,
                displayCustomer[idx]['extCustId']
            ])
            setPreviousSelect(displayCustomer[idx]['extCustId'])
        } else {
            const abc = selectedUser.filter(item => item != displayCustomer[idx]['extCustId'])
            setSelectedUser(abc)
            setPreviousSelect(0)
        }
        displayCustomer[idx]['selected'] = e['selected']
        setDisplayCustomer([...displayCustomer])
        onChangeStatus({
            extCustId: e.extCustId,
            intCustId: e.intCustId,
            ownerName: e.ownerName,
            nationalCode: e.nationalCode,
            selected: e.selected
        })
    }

    const columnObject = [
        { title: 'extCustId', lable: 'شماره مشتری', backgroundColor: 'E7E7E7', width: '10', fontSize: '', fontWeight: '', textBody: '' },
        { title: 'ownerName', lable: 'نام خانوادگی/ نام', backgroundColor: 'E7E7E7', width: '20', fontSize: '', fontWeight: '', textBody: '' },
        { title: 'nationalCode', lable: 'کدملی', backgroundColor: '', width: 'E7E7E7', fontSize: '10', fontWeight: '', textBody: '' },
        { title: '', lable: 'انتخاب مشتری', backgroundColor: 'E7E7E7', width: '10', fontSize: '', fontWeight: '', textBody: '' },
    ]

    return isVisible
        ?
        (
            <>
                {
                    message.length > 0
                        ?
                        <Message message={message} />
                        :
                        <>
                            {downloadStatus == 'downloading'
                                ?
                                <Message message={"درحال دانلود اطلاعات"} />
                                :
                                <>
                                    <Report
                                        id="uniqueCode"
                                        name="uniqueCode"
                                        data={feed}
                                        filterData={feed.filterData}
                                        onRowClick={handleRowClick}
                                        disabled={false}
                                        isVisible={true}
                                        mode={"report"}
                                    />
                                </>
                            }
                        </>
                }
            </>
        )
        :
        (
            <div className="col"></div>
        )
}`;
  createFile(`${reportsPath}`, `${'customerArzResourceRpt'}.jsx`, injectedContent);

  /********************************************************************************
  *                        customerRialResourceAvgRpt Component file
  ********************************************************************************/
  //  dataSource, placeholder, autocomplete, numOfLines
  injectedContent = `import React, { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import { FieldSet } from "../fieldSet/FieldSet";
import TableBody from "../table/tableBody";
import TableHeader from "../table/tableHeader";
import { sendRequest } from '../../../util/makeRequest';
import { fakeAuthProvider } from "../../../auth";
import { Report } from "../report/Report";
import { addDaysToUtcDate, convertUtc2Date, getJalaliDateGregorianFormat, removeSlashFromDate } from "../../../util/Date";
import { Message } from "../message/Message";
import { validateAccounts, validateTafahomInformation } from '../../../util/Validation';
import { addCommas } from "@persian-tools/persian-tools";
import { getTodayDate } from "../../../util/Date";

export const CustomerRialResourceAvgRpt = ({ id, name, type, value, onChangeStatus, onBlur, placeholder, lable, data, tafCode, disabled, autocomplete, isVisible }) => {

    const [feed, setFeed] = useState(data)
    const [message, setMessage] = useState('')
    const [downloadStatus, setDownloadStatus] = useState('initial')
    const [fromDate, setFromDate] = useState()
    const [toDate, setToDate] = useState()

    let filterData = ''
    let jariAverage = 0
    let gharzAverage = 0
    let shortAverage = 0
    let longAverage = 0

    let jariArziAverage = 0
    let gharzArziAverage = 0
    let shortArziAverage = 0
    let longArziAverage = 0

    const handleRowClick = (row) => { }
    const todayFa = getTodayDate()

    const calculateAverageDates = (tafahomInformation) => {
      const todayUTc = fakeAuthProvider.getCredential().date
      // const startDateUtc = getUTCFromJalaliDateInString(tafahomInformation.startDate)
      // const expireDateUtc = getUTCFromJalaliDateInString(tafahomInformation.expireDate)

      const newStartUTc = addDaysToUtcDate(todayUTc, -tafahomInformation.avgDay)
      const tmpDateObjec = convertUtc2Date(newStartUTc)
      const fromDate = \`\${tmpDateObjec.year}\${tmpDateObjec.month}\${tmpDateObjec.day}\`

      const tmpTodayDateObject = convertUtc2Date(todayUTc)
      const toDate = \`\${tmpTodayDateObject.year}\${tmpTodayDateObject.month}\${tmpTodayDateObject.day}\`

      return [fromDate, toDate]

  }
    const params = useParams();
    //  get all customers
    useEffect(() => {
        if (tafCode != '' && typeof tafCode != 'undefined') {
            async function getTafahomInformation() {
                const response = await sendRequest(
                    \`${backendUrl}/tafahomInformations/\${params.archiveNumber}\`,
                    "GET",
                );
                return response.data
            }
            async function getCustomerAccounts() {
                const response = await sendRequest(
                    \`${backendUrl}/tafahomInformations/\${params.archiveNumber}/accounts\${'?tafCode=' + tafCode}\`,
                    "GET",
                );
                return response.data
            }
            async function getAccountAverage(extAccNo, startDate, expireDAte, accTypeCode) {
                const response = await sendRequest(
                    \`${backendUrl}/accountAverages\`,
                    "POST",
                    {
                        "fromDate": startDate,
                        "toDate": expireDAte,
                        "accNo": extAccNo,
                        "envCode": 0,
                        "userId": "tafahom"
                    }
                );
                return { ...response.data[0], accTypeCode }
            }
            async function getCustomerRialResourceAvgByTafCode(tafCode) {
                const response = await sendRequest(
                    \`${backendUrl}/tafahomInformations/\${params.archiveNumber}/customerRialResourceAvgRpts?tafCode=\${tafCode}\`,
                    "GET"
                );
                return response.data.content.length
            }
            async function setCustomerRialResourceAvg(title, jariAverage, gharzAverage, shortAverage, longAverage, sum) {
                const response = await sendRequest(
                    \`${backendUrl}/tafahomInformations/\${params.archiveNumber}/customerRialResourceAvgRpts\`,
                    "POST",
                    {
                        "tafCode": tafCode,
                        "lastReportDate": +\`\${getJalaliDateGregorianFormat(fakeAuthProvider.getCredential().date, { year: '2-digit' })}\${getJalaliDateGregorianFormat(fakeAuthProvider.getCredential().date, { month: '2-digit' })}\`,
                        "title": title,
                        "jariAverage": jariAverage,
                        "gharzAverage": gharzAverage,
                        "shortAverage": shortAverage,
                        "longAverage": longAverage,
                        "sum": sum
                    }
                );
                return response.data
            }
            try {
                setDownloadStatus('downloading')
                getCustomerAccounts()
                    .then((customerAccountsResponse) => {
                        let customerUniqueAccounts;
                        if (typeof customerAccountsResponse.content != 'undefined' && customerAccountsResponse.content.length > 0) {
                            customerUniqueAccounts = customerAccountsResponse.content.filter((value, index, array) =>
                                index === array.findIndex(item => (item.extCustId === value.extCustId))
                            )
                            return customerUniqueAccounts
                        } else {
                            throw ('مشتری فاقد حساب تعریف شده می باشد')
                        };
                    }).then(customerUniqueAccounts => {
                        validateAccounts(customerUniqueAccounts)
                        return customerUniqueAccounts;
                    }).then((customerUniqueAccounts) => {
                        if (customerUniqueAccounts.length > 0) {
                            getTafahomInformation()
                                .then(response => response.content[0])
                                .then(tafahomInformation => {
                                    validateTafahomInformation(tafahomInformation)
                                    const [fromDate, toDate] = calculateAverageDates(tafahomInformation)
                                    setFromDate(fromDate)
                                    setToDate(toDate)
                                    Promise.all(
                                        customerUniqueAccounts.map(
                                            async account => {
                                                return await getAccountAverage(
                                                    account['extAccNo'],
                                                    // removeSlashFromDate(tafahomInformation['startDate']), removeSlashFromDate(tafahomInformation.content[0]['expireDate']),
                                                    fromDate,
                                                    toDate,
                                                    account['accTypeCode']
                                                )
                                            })
                                    ).then(res => {
                                        for (let i = 0; i < res.length; i++) {
                                            const accType = res[i]['accTypeCode']
                                            const avgBalance = res[i]['avgBalance'];
                                            if (accType > 100 && accType < 200) {
                                                jariAverage += avgBalance
                                            } else if ((accType > 200 && accType < 300) || (accType > 700 && accType < 800)) {
                                                gharzAverage += avgBalance
                                            } else if (accType > 300 && accType < 400) {
                                                shortAverage += avgBalance
                                            } else if (accType > 400 && accType < 500) {
                                                longAverage += avgBalance
                                            } else if (accType > 1100 && accType < 1200) {
                                                jariArziAverage += avgBalance
                                            } else if (accType > 2200 && accType < 2300) {
                                                gharzArziAverage += avgBalance
                                            } else if (accType > 3300 && accType < 3400) {
                                                shortArziAverage += avgBalance
                                            } else if (accType > 4400 && accType < 4500) {
                                                longArziAverage += avgBalance
                                            }
                                        }
                                        const total = addCommas(jariAverage + gharzAverage + shortAverage + longAverage)
                                        setFeed((prevState) => ({
                                            ...prevState,
                                            rows: [{
                                                title: tafahomInformation['title'],
                                                jariAverage: addCommas(jariAverage),
                                                gharzAverage: addCommas(gharzAverage),
                                                shortAverage: addCommas(shortAverage),
                                                longAverage: addCommas(longAverage),
                                                sum: total
                                            }],
                                            headerData:
                                                JSON.parse(\`{
                                                    "\${data.columns[0].title}": "پورتال تفاهم نامه های بانک ملت",
                                                    "\${data.columns[1].title}": "\${''}",
                                                    "\${data.columns[2].title}": "\${''}",
                                                    "\${data.columns[3].title}": "\${data.reportTitle}",
                                                    "\${data.columns[4].title}": "\${''}",
                                                    "\${data.columns[5].title}": "\${todayFa.dayWeek + todayFa.day + todayFa.monthTitle + ' ' + todayFa.year}"
                                                }\`),
                                            filterData: [
                                                JSON.parse(\`{
                                                    "\${data.columns[0].title}": "\${tafahomInformation['title']}",
                                                    "\${data.columns[1].title}": "\${addCommas(jariAverage)}",
                                                    "\${data.columns[2].title}": "\${addCommas(gharzAverage)}",
                                                    "\${data.columns[3].title}": "\${addCommas(shortAverage)}",
                                                    "\${data.columns[4].title}": "\${addCommas(longAverage)}",
                                                    "\${data.columns[5].title}": "\${total}"
                                                }\`),
                                            ]
                                        }))
                                        return {
                                          title: tafahomInformation['title'],
                                          jariAverage: \`\${jariAverage} \`,
                                          gharzAverage: \`\${gharzAverage} \`,
                                          shortAverage: \`\${shortAverage} \`,
                                          longAverage: \`\${longAverage} \`,
                                          sum: \`\${jariAverage + gharzAverage + shortAverage + longAverage} \`
                                      }
                                    }).then(result => {
                                        getCustomerRialResourceAvgByTafCode(tafCode)
                                            .then(count => {
                                                if(count == 0) {
                                                    setCustomerRialResourceAvg(result.title, result.jariAverage, result.gharzAverage, result.shortAverage, result.longAverage, result.sum)
                                                }
                                                setDownloadStatus('completed');
                                            })
                                    })
                                }).catch(err => {
                                    setMessage(err)
                                    setDownloadStatus('error');
                                })
                        } else {
                            throw ('مشتری فاقد حساب یکتا می باشد')
                        };
                    }).catch(err => {
                        setMessage(err)
                        setDownloadStatus('error');
                    })
            } catch (error) {
            }
        }
    }, [tafCode])

    const columnObject = [
        { title: 'extCustId', lable: 'شماره مشتری', backgroundColor: 'E7E7E7', width: '10', fontSize: '', fontWeight: '', textBody: '' },
        { title: 'ownerName', lable: 'نام خانوادگی/ نام', backgroundColor: 'E7E7E7', width: '20', fontSize: '', fontWeight: '', textBody: '' },
        { title: 'nationalCode', lable: 'کدملی', backgroundColor: '', width: 'E7E7E7', fontSize: '10', fontWeight: '', textBody: '' },
        { title: '', lable: 'انتخاب مشتری', backgroundColor: 'E7E7E7', width: '10', fontSize: '', fontWeight: '', textBody: '' },
    ]

    return isVisible
        ?
        (
            <>
                {
                    message.length > 0
                        ?
                        <Message message={message} />
                        :
                        <>
                            {downloadStatus == 'downloading'
                                ?
                                <Message message={"درحال دانلود اطلاعات"} />
                                :
                                <>
                                    <Report
                                        id="uniqueCode"
                                        name="uniqueCode"
                                        data={feed}
                                        filterData={feed.filterData}
                                        onRowClick={handleRowClick}
                                        disabled={false}
                                        isVisible={true}
                                        mode={"report"}
                                    />
                                </>
                            }
                        </>
                }
            </>
        )
        :
        (
            <div className="col"></div>
        )
}`;
  createFile(`${reportsPath}`, `${'customerRialResourceAvgRpt'}.jsx`, injectedContent);

  /********************************************************************************
  *                        customerArzResourceAvgRpt Component file
  ********************************************************************************/
  //  dataSource, placeholder, autocomplete, numOfLines
  injectedContent = `import React, { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import { FieldSet } from "../fieldSet/FieldSet";
import TableBody from "../table/tableBody";
import TableHeader from "../table/tableHeader";
import { sendRequest } from '../../../util/makeRequest';
import { fakeAuthProvider } from "../../../auth";
import { Report } from "../report/Report";
import { addDaysToUtcDate, convertUtc2Date, getJalaliDateGregorianFormat, removeSlashFromDate } from "../../../util/Date";
import { Message } from "../message/Message";
import { validateAccounts, validateTafahomInformation } from '../../../util/Validation';
import { addCommas } from "@persian-tools/persian-tools";
import { getTodayDate } from "../../../util/Date";

export const CustomerArzResourceAvgRpt = ({ id, name, type, value, onChangeStatus, onBlur, placeholder, lable, data, tafCode, disabled, autocomplete, isVisible }) => {

    const [feed, setFeed] = useState(data)
    const [message, setMessage] = useState('')
    const [downloadStatus, setDownloadStatus] = useState('initial')
    const [fromDate, setFromDate] = useState()
    const [toDate, setToDate] = useState()

    let filterData = ''
    let jariAverage = 0
    let gharzAverage = 0
    let shortAverage = 0
    let longAverage = 0

    let jariArziAverage = 0
    let gharzArziAverage = 0
    let shortArziAverage = 0
    let longArziAverage = 0

    const handleRowClick = (row) => { }
    const todayFa = getTodayDate()

    const calculateAverageDates = (tafahomInformation) => {
      const todayUTc = fakeAuthProvider.getCredential().date
      // const startDateUtc = getUTCFromJalaliDateInString(tafahomInformation.startDate)
      // const expireDateUtc = getUTCFromJalaliDateInString(tafahomInformation.expireDate)

      const newStartUTc = addDaysToUtcDate(todayUTc, -tafahomInformation.avgDay)
      const tmpDateObjec = convertUtc2Date(newStartUTc)
      const fromDate = \`\${tmpDateObjec.year}\${tmpDateObjec.month}\${tmpDateObjec.day}\`

      const tmpTodayDateObject = convertUtc2Date(todayUTc)
      const toDate = \`\${tmpTodayDateObject.year}\${tmpTodayDateObject.month}\${tmpTodayDateObject.day}\`

      return [fromDate, toDate]

    }

    const params = useParams();
    //  get all customers
    useEffect(() => {
        if (tafCode != '' && typeof tafCode != 'undefined') {
            async function getTafahomInformation() {
                const response = await sendRequest(
                    \`${backendUrl}/tafahomInformations/\${params.archiveNumber}\`,
                    "GET",
                );
                return response.data
            }
            async function getCustomerAccounts() {
                const response = await sendRequest(
                    \`${backendUrl}/tafahomInformations/\${params.archiveNumber}/accounts\${'?tafCode=' + tafCode}\`,
                    "GET",
                );
                return response.data
            }
            async function getAccountAverage(extAccNo, startDate, expireDAte, accTypeCode) {
                const response = await sendRequest(
                    \`${backendUrl}/accountAverages\`,
                    "POST",
                    {
                        "fromDate": startDate,
                        "toDate": expireDAte,
                        "accNo": extAccNo,
                        "envCode": 0,
                        "userId": "tafahom"
                    }
                );
                return { ...response.data[0], accTypeCode }
            }
            async function getCustomerArzResourceAvgByTafCode(tafCode) {
                const response = await sendRequest(
                    \`${backendUrl}/tafahomInformations/\${params.archiveNumber}/customerArzResourceAvgRpts?tafCode=\${tafCode}\`,
                    "GET"
                );
                return response.data.content.length
            }
            async function setCustomerArzResourceAvg(title, jariAverage, gharzAverage, shortAverage, longAverage, sum) {
                const response = await sendRequest(
                    \`${backendUrl}/tafahomInformations/\${params.archiveNumber}/customerArzResourceAvgRpts\`,
                    "POST",
                    {
                        "tafCode": tafCode,
                        "lastReportDate": +\`\${getJalaliDateGregorianFormat(fakeAuthProvider.getCredential().date, { year: '2-digit' })}\${getJalaliDateGregorianFormat(fakeAuthProvider.getCredential().date, { month: '2-digit' })}\`,
                        "title": title,
                        "jariAverage": jariAverage,
                        "gharzAverage": gharzAverage,
                        "shortAverage": shortAverage,
                        "longAverage": longAverage,
                        "sum": sum
                    }
                );
                return response.data
            }
            try {
                setDownloadStatus('downloading')
                getCustomerAccounts()
                    .then((customerAccountsResponse) => {
                        let customerUniqueAccounts;
                        if (typeof customerAccountsResponse.content != 'undefined' && customerAccountsResponse.content.length > 0) {
                            customerUniqueAccounts = customerAccountsResponse.content.filter((value, index, array) =>
                                index === array.findIndex(item => (item.extCustId === value.extCustId))
                            )
                            return customerUniqueAccounts
                        } else {
                            throw ('مشتری فاقد حساب تعریف شده می باشد')
                        };
                    }).then(customerUniqueAccounts => {
                        validateAccounts(customerUniqueAccounts)
                        return customerUniqueAccounts;
                    }).then((customerUniqueAccounts) => {
                        if (customerUniqueAccounts.length > 0) {
                            getTafahomInformation()
                                .then(response => response.content[0])
                                .then(tafahomInformation => {
                                    validateTafahomInformation(tafahomInformation)
                                    const [fromDate, toDate] = calculateAverageDates(tafahomInformation)
                                    setFromDate(fromDate);
                                    setToDate(toDate);
                                    Promise.all(
                                        customerUniqueAccounts.map(
                                            async account => {
                                                return await getAccountAverage(
                                                    account['extAccNo'],
                                                    // removeSlashFromDate(tafahomInformation['startDate']), removeSlashFromDate(tafahomInformation.content[0]['expireDate']),
                                                    fromDate,
                                                    toDate,
                                                    account['accTypeCode']
                                                )
                                            })
                                    ).then(res => {
                                        for (let i = 0; i < res.length; i++) {
                                            const accType = res[i]['accTypeCode']
                                            const avgBalance = res[i]['avgBalance'];
                                            if (accType > 100 && accType < 200) {
                                                jariAverage += avgBalance
                                            } else if ((accType > 200 && accType < 300) || (accType > 700 && accType < 800)) {
                                                gharzAverage += avgBalance
                                            } else if (accType > 300 && accType < 400) {
                                                shortAverage += avgBalance
                                            } else if (accType > 400 && accType < 500) {
                                                longAverage += avgBalance
                                            } else if (accType > 1100 && accType < 1200) {
                                                jariArziAverage += avgBalance
                                            } else if (accType > 2200 && accType < 2300) {
                                                gharzArziAverage += avgBalance
                                            } else if (accType > 3300 && accType < 3400) {
                                                shortArziAverage += avgBalance
                                            } else if (accType > 4400 && accType < 4500) {
                                                longArziAverage += avgBalance
                                            }
                                        }
                                        const total = jariArziAverage + gharzArziAverage + shortArziAverage + longArziAverage
                                        setFeed((prevState) => ({
                                            ...prevState,
                                            rows: [{
                                                title: tafahomInformation['title'],
                                                jariAverage: addCommas(jariArziAverage),
                                                gharzAverage: addCommas(gharzArziAverage),
                                                shortAverage: addCommas(shortArziAverage),
                                                longAverage: addCommas(longArziAverage),
                                                sum: total
                                            }],
                                            headerData:
                                                JSON.parse(\`{
                                                    "\${data.columns[0].title}": "پورتال تفاهم نامه های بانک ملت",
                                                    "\${data.columns[1].title}": "\${''}",
                                                    "\${data.columns[2].title}": "\${''}",
                                                    "\${data.columns[3].title}": "\${data.reportTitle}",
                                                    "\${data.columns[4].title}": "\${''}",
                                                    "\${data.columns[5].title}": "\${todayFa.dayWeek + todayFa.day + todayFa.monthTitle + ' ' + todayFa.year}"
                                                }\`),
                                            filterData: [
                                                JSON.parse(
                                                    \`{
                                                        "\${data.columns[0].title}": "\${tafahomInformation['title']}",
                                                        "\${data.columns[1].title}": "\${addCommas(jariArziAverage)}",
                                                        "\${data.columns[2].title}": "\${addCommas(gharzArziAverage)}",
                                                        "\${data.columns[3].title}": "\${addCommas(shortArziAverage)}",
                                                        "\${data.columns[4].title}": "\${addCommas(longArziAverage)}",
                                                        "\${data.columns[5].title}": "\${total}"
                                                     }\`
                                                ),
                                            ]
                                        }))
                                        return {
                                          title: tafahomInformation['title'],
                                          jariAverage: \`\${jariArziAverage} \`,
                                          gharzAverage: \`\${gharzArziAverage} \`,
                                          shortAverage: \`\${shortArziAverage} \`,
                                          longAverage: \`\${longArziAverage} \`,
                                          sum: \`\${jariArziAverage + gharzArziAverage + shortArziAverage + longArziAverage} \`
                                      }
                                    }).then(result => {
                                        getCustomerArzResourceAvgByTafCode(tafCode)
                                            .then(count => {
                                                if (count == 0) {
                                                    setCustomerArzResourceAvg(result.title, result.jariAverage, result.gharzAverage, result.shortAverage, result.longAverage, result.sum)
                                                }
                                                setDownloadStatus('completed');
                                            }).catch(err => {
                                                setMessage('خطا در ثبت اطلاعات معدل حساب در دیتابیس')
                                                setDownloadStatus('error');
                                            })
                                    }).catch(err => {
                                        setMessage('خطا درمحاسبه معدل حساب')
                                        setDownloadStatus('error');
                                    })
                                }).catch(err => {
                                    setMessage(err)
                                    setDownloadStatus('error');
                                })
                        } else {
                            throw ('مشتری فاقد حساب یکتا می باشد')
                        };
                    }).catch(err => {
                        setMessage(err)
                        setDownloadStatus('error');
                    })
            } catch (error) {
            }
        }
    }, [tafCode])

    const columnObject = [
        { title: 'extCustId', lable: 'شماره مشتری', backgroundColor: 'E7E7E7', width: '10', fontSize: '', fontWeight: '', textBody: '' },
        { title: 'ownerName', lable: 'نام خانوادگی/ نام', backgroundColor: 'E7E7E7', width: '20', fontSize: '', fontWeight: '', textBody: '' },
        { title: 'nationalCode', lable: 'کدملی', backgroundColor: '', width: 'E7E7E7', fontSize: '10', fontWeight: '', textBody: '' },
        { title: '', lable: 'انتخاب مشتری', backgroundColor: 'E7E7E7', width: '10', fontSize: '', fontWeight: '', textBody: '' },
    ]

    return isVisible
        ?
        (
            <>
                {
                    message.length > 0
                        ?
                        <Message message={message} />
                        :
                        <>
                            {downloadStatus == 'downloading'
                                ?
                                <Message message={"درحال دانلود اطلاعات"} />
                                :
                                <>
                                    <Report
                                        id="uniqueCode"
                                        name="uniqueCode"
                                        data={feed}
                                        filterData={feed.filterData}
                                        onRowClick={handleRowClick}
                                        disabled={false}
                                        isVisible={true}
                                        mode={"report"}
                                    />
                                </>
                            }
                        </>
                }
            </>
        )
        :
        (
            <div className="col"></div>
        )
}`;
  createFile(`${reportsPath}`, `${'customerArzResourceAvgRpt'}.jsx`, injectedContent);


  /********************************************************************************
  *                        lendingRpt Component file
  ********************************************************************************/
  //  dataSource, placeholder, autocomplete, numOfLines
  injectedContent = `import React, { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import { FieldSet } from "../fieldSet/FieldSet";
import TableBody from "../table/tableBody";
import TableHeader from "../table/tableHeader";
import { sendRequest } from '../../../util/makeRequest';
import { fakeAuthProvider } from "../../../auth";
import { Report } from "../report/Report";
import { removeSlashFromDate } from "../../../util/Date";
import { validateAccounts, validateTafahomInformation, validateTafahomInformation4TafState } from '../../../util/Validation';
import { Message } from "../message/Message";
import { getJalaliDateGregorianFormat, getTodayDate } from "../../../util/Date";
import { addCommas } from "@persian-tools/persian-tools";

export const LendingRpt = ({ id, name, type, value, onChangeStatus, onBlur, placeholder, lable, data, tafCode, disabled, autocomplete, isVisible }) => {

    const [tafahomInformation, setTafahomInformation] = useState({})
    const [feed, setFeed] = useState(data)
    const [message, setMessage] = useState('')
    const [downloadStatus, setDownloadStatus] = useState('initial')
    const [fromDate, setFromDate] = useState()
    const [toDate, setToDate] = useState()

    const params = useParams();

    const handleRowClick = (row) => { }
    const todayFa = getTodayDate()

    useEffect(() => {
        if (tafCode != '' && typeof tafCode != 'undefined') {
            async function getTafahomInformation() {
                const response = await sendRequest(
                    \`${backendUrl}/tafahomInformations/\${params.archiveNumber}\`,
                    "GET",
                );
                return response.data
            }
            async function getSelectedCustomers() {
                const response = await sendRequest(
                    \`${backendUrl}/tafahomInformations/\${params.archiveNumber}/customerWithHadSaghfs\${'?tafCode=' + tafCode}\`,
                    "GET",
                );
                return response.data
            }
            async function getLending(startDate, expireDate, seri, intCustIds) {
                const response = await sendRequest(
                    \`${backendUrl}/lendings\`,
                    "POST",
                    {
                        startDate: startDate,
                        expireDate: expireDate,
                        seri: seri,
                        intCustIds: intCustIds
                    }
                );
                return response.data
            }
            async function getLendingByTafCode(tafCode) {
                const response = await sendRequest(
                    \`${backendUrl}/tafahomInformations/\${params.archiveNumber}/lendingRpts?tafCode=\${tafCode}\`,
                    "GET"
                );
                return response.data.content.length
            }
            async function setLending(totalPrpslId, totalFcltyAmnt, totalStat) {
                const response = await sendRequest(
                    \`${backendUrl}/tafahomInformations/\${params.archiveNumber}/lendingRpts\`,
                    "POST",
                    {
                      "tafCode": tafCode,
                      "lastReportDate": +\`\${getJalaliDateGregorianFormat(fakeAuthProvider.getCredential().date, { year: '2-digit' })}\${getJalaliDateGregorianFormat(fakeAuthProvider.getCredential().date, { month: '2-digit' })}\`,
                      "totalPrpslId": totalPrpslId,
                      "totalFcltyAmnt": totalFcltyAmnt,
                      "totalStat": totalStat
                    }
                );
                return response.data
            }
            try {
                setDownloadStatus('downloading')
                getTafahomInformation().then((response) => {
                    // setTafStateCode({ ...response.content[0].tafStateCode })
                    return (response.content[0])
                }).then(tafahomInformation => {
                    validateTafahomInformation4TafState(tafahomInformation)
                    // setTafahomInformation(tafahomInformation)
                    getSelectedCustomers()
                        .then(response => {
                        //     if (response.content.length > 0) {
                        //         return (response.content);
                        //     } else {
                        //         throw ('مشتریان مشمول در مصارف تفاهم نامه انتخاب نشده است')
                        //     }
                        return response.content
                      })
                        .then(customers => {
                            let intCustIds = ''
                            if (customers.length > 0) {
                                customers[customers.length - 1].includedCustomerIntCustId.split(',').map((customer, index) => {
                                    const end = index < customers[customers.length - 1].includedCustomerIntCustId.split(',').length - 1 ? ';' : ''
                                    // intCustIds += \`\${customer['intCustId']}\${end}\`
                                    intCustIds += \`\${customer}\${end}\`
                                })
                                // intCustIds = customers[customers.length - 1].includedCustomerIntCustId
                              } else {
                                intCustIds = null
                            }
                            return intCustIds
                        })
                        .then(intCustIds => {
                            getLending(
                                removeSlashFromDate(tafahomInformation.startDate),
                                // 14010530,
                                removeSlashFromDate(tafahomInformation.expireDate),
                                // 14010630,
                                tafahomInformation.seri,
                                // 1401199467860,
                                intCustIds
                            ).then(response => {
                                let totalPrpslId = response.length
                                let totalFcltyamnt = 0
                                let totalSts = 0
                                let filterData = response.map(lending => {
                                    totalFcltyamnt += lending.fcltyamnt;
                                    totalSts += lending.sts
                                    lending.fcltyamnt = addCommas(lending.fcltyamnt)
                                    lending.amnt = addCommas(lending.amnt)
                                    lending.dbt = addCommas(lending.dbt)
                                    lending.sts = addCommas(lending.sts)
                                    return JSON.parse(
                                        \`{
                                            "\${data.columns[0].title}":"\${lending.prpslid}",
                                            "\${data.columns[1].title}":"\${lending.cstmrid}",
                                            "\${data.columns[2].title}":"\${lending.cstmrnaid}",
                                            "\${data.columns[3].title}":"\${lending.cstmrname}",
                                            "\${data.columns[4].title}":"\${lending.lstrvworgunitcd}",
                                            "\${data.columns[5].title}":"\${lending.otitlex}",
                                            "\${data.columns[6].title}":"\${lending.rgndesc}",
                                            "\${data.columns[7].title}":"\${lending.orgtitlex}",
                                            "\${data.columns[8].title}":"\${lending.prpslsts}",
                                            "\${data.columns[9].title}":"\${lending.prpsltypcd}",
                                            "\${data.columns[10].title}":"\${lending.prpsltypdsc}",
                                            "\${data.columns[11].title}":"\${lending.fcltytypcd}",
                                            "\${data.columns[12].title}":"\${lending.fcltytypdsc}",
                                            "\${data.columns[13].title}":"\${lending.cstmrintrstrt}",
                                            "\${data.columns[14].title}":"\${addCommas(lending.fcltyamnt)}",
                                            "\${data.columns[15].title}":"\${lending.asmahal}",
                                            "\${data.columns[16].title}":"\${addCommas(lending.amnt)}",
                                            "\${data.columns[17].title}":"\${addCommas(lending.dbt)}",
                                            "\${data.columns[18].title}":"\${addCommas(lending.sts)}",
                                            "\${data.columns[19].title}":"\${lending.cdfarsidsc}"
                                        }\`
                                    )
                                })
                                setFeed(prevState => ({
                                    ...prevState,
                                    rows: [
                                        ...response
                                    ],
                                    headerData:
                                        JSON.parse(
                                          \`{
                                              "\${data.columns[0].title}":"پورتال تفاهم نامه های بانک ملت",
                                              "\${data.columns[1].title}":"\${''}",
                                              "\${data.columns[2].title}":"\${''}",
                                              "\${data.columns[3].title}":"\${''}",
                                              "\${data.columns[4].title}":"\${''}",
                                              "\${data.columns[5].title}":"\${''}",
                                              "\${data.columns[6].title}":"\${''}",
                                              "\${data.columns[7].title}":"\${''}",
                                              "\${data.columns[8].title}":"\${data.reportTitle}",
                                              "\${data.columns[9].title}":"\${''}",
                                              "\${data.columns[10].title}":"\${''}",
                                              "\${data.columns[11].title}":"\${''}",
                                              "\${data.columns[12].title}":"\${''}",
                                              "\${data.columns[13].title}":"\${''}",
                                              "\${data.columns[14].title}":"\${''}",
                                              "\${data.columns[15].title}":"\${''}",
                                              "\${data.columns[16].title}":"\${''}",
                                              "\${data.columns[17].title}":"\${''}",
                                              "\${data.columns[18].title}":"\${''}",
                                              "\${data.columns[19].title}":"\${todayFa.dayWeek + todayFa.day + todayFa.monthTitle + ' '+ todayFa.year}"
                                          }\`),
                                    filterData: [
                                        ...filterData,
                                    ]
                                }))
                                return { totalPrpslId: totalPrpslId, totalFcltyamnt: totalFcltyamnt, totalSts: totalSts }
                            }).then((result) => {
                                getLendingByTafCode(tafCode).then(count => {
                                    if (count == 0) {
                                        setLending(result.totalPrpslId, result.totalFcltyamnt, result.totalSts)
                                    }
                                })
                                setDownloadStatus('completed')
                            }
                            ).catch(error => {
                                setMessage('خطا در واکشی اطلاعات تسهیلات اعطايی ازمحل تفاهم نامه')
                                setDownloadStatus('error')
                            })
                        })
                }).catch(err => {
                    setMessage(err)
                    setDownloadStatus('error');
                })
            } catch (error) {
            }
        }
    }, [tafCode])

    return isVisible
        ?
        (
            <>
                {
                    message.length > 0
                        ?
                        <Message message={message} />
                        :
                        <>
                            {downloadStatus == 'downloading'
                                ?
                                <Message message={"درحال دانلود اطلاعات"} />
                                :
                                <>
                                    <Report
                                        id="uniqueCode"
                                        name="uniqueCode"
                                        data={feed}
                                        filterData={feed.filterData}
                                        onRowClick={handleRowClick}
                                        disabled={false}
                                        isVisible={true}
                                        mode={"report"}
                                    />
                                </>
                            }
                        </>
                }
            </>
        )
        :
        (
            <div className="col"></div>
        )
}`
  createFile(`${reportsPath}`, `${'lendingRpt'}.jsx`, injectedContent);

  /********************************************************************************
  *                        collateralRpt Component file
  ********************************************************************************/
  //  dataSource, placeholder, autocomplete, numOfLines
  injectedContent = `import React, { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import { Report } from "../report/Report";
import { Message } from "../message/Message";
import { fakeAuthProvider } from "../../../auth";
import { sendRequest } from '../../../util/makeRequest';
import { getJalaliDateGregorianFormat, getTodayDate } from "../../../util/Date";
import { validateTafahomInformation4TafState } from "../../../util/Validation";
import { addCommas } from "@persian-tools/persian-tools";

export const CollateralRpt = ({ id, name, type, value, onChangeStatus, onBlur, placeholder, lable, data, tafCode, disabled, autocomplete, isVisible }) => {

    const [feed, setFeed] = useState(data)
    const [message, setMessage] = useState('')
    const [downloadStatus, setDownloadStatus] = useState('initial')

    const params = useParams();

    const handleRowClick = (row) => { }
    const todayFa = getTodayDate()

    useEffect(() => {
        if (tafCode != '' && typeof tafCode != 'undefined') {
            async function getTafahomInformation() {
                const response = await sendRequest(
                    \`${backendUrl}/tafahomInformations/\${params.archiveNumber}\`,
                    "GET",
                );
                return response.data
            }
            async function getCollateral(seri) {
                const response = await sendRequest(
                    \`${backendUrl}/collaterals\`,
                    "POST",
                    { seri: seri }
                );
                return response.data
            }
            async function getCollateralByTafCode(tafCode) {
                const response = await sendRequest(
                    \`${backendUrl}/tafahomInformations/\${params.archiveNumber}/collateralRpts?tafCode=\${tafCode}\`,
                    "GET",
                );
                return response.data.content.length
            }
            async function setCollateral(collatreralTotalCntrcts, facilityAllocationTotalAmount, commitmentAllocationTotalAmount, naghdGrpTotalAmnt, gheireManghoolGrpTotalAmnt, sayerGrpTotalAmnt, bedouneVasigheGrpTotalAmnt) {
                const response = await sendRequest(
                    \`${backendUrl}/tafahomInformations/\${params.archiveNumber}/collateralRpts\`,
                    "POST",
                    { 
                        "tafCode": tafCode,
                        "collateralReportUser": fakeAuthProvider.getCredential().firstName + fakeAuthProvider.getCredential().lastName,
                        "lastReportDate": +\`\${getJalaliDateGregorianFormat(fakeAuthProvider.getCredential().date, { year: '2-digit' })}\${getJalaliDateGregorianFormat(fakeAuthProvider.getCredential().date, { month: '2-digit' })}\`,
                        "collatreralTotalCntrcts": collatreralTotalCntrcts,
                        "facilityAllocationTotalAmount": facilityAllocationTotalAmount,
                        "commitmentAllocationTotalAmount": commitmentAllocationTotalAmount,
                        "naghdGrpTotalAmnt": naghdGrpTotalAmnt,
                        "gheireManghoolGrpTotalAmnt": gheireManghoolGrpTotalAmnt,
                        "sayerGrpTotalAmnt": sayerGrpTotalAmnt,
                        "bedouneVasigheGrpTotalAmnt": bedouneVasigheGrpTotalAmnt                    }
                );
                return response.data
            }
            try {
                setDownloadStatus('downloading')
                getTafahomInformation().then((response) => {
                    return (response.content[0])
                }).then(tafahomInformation => {
                    validateTafahomInformation4TafState(tafahomInformation)
                    getCollateral(tafahomInformation.seri)
                        .then(response => {
                            if (response.length == 0) {
                                return [{
                                    collateralTypDsc: "",
                                    collatreralTypCd: "",
                                    commitmentAllocationAmount: "",
                                    customerId: "",
                                    customerName: "",
                                    facilityAllocationAmount: "",
                                    prpslId: "",
                                    prpslTypCd: "",
                                    prpslTypDsc: "",
                                }]
                            } else {
                                return response
                            }
                        })
                        .then(collateral => {
                            let filterData = collateral.map(collat => {
                                collat.facilityAllocationAmount = addCommas(collat.facilityAllocationAmount)
                                collat.commitmentAllocationAmount = addCommas(collat.commitmentAllocationAmount)
                                return JSON.parse(
                                    \`{
                                            "\${data.columns[0].title}":"\${collat.prpslId}",
                                            "\${data.columns[1].title}":"\${collat.customerId}",
                                            "\${data.columns[2].title}":"\${collat.customerName}",
                                            "\${data.columns[3].title}":"\${collat.prpslTypDsc}",
                                            "\${data.columns[4].title}":"\${collat.collateralTypDsc}",
                                            "\${data.columns[5].title}":"\${addCommas(collat.facilityAllocationAmount)}",
                                            "\${data.columns[6].title}":"\${addCommas(collat.commitmentAllocationAmount)}"
                                        }\`)
                            })
                            setFeed(prevState => ({
                                ...prevState,
                                rows: [
                                    ...collateral
                                ],
                                headerData:
                                    JSON.parse(\`{
                                            "\${data.columns[0].title}":"پورتال تفاهم نامه های بانک ملت",
                                            "\${data.columns[1].title}":"\${''}",
                                            "\${data.columns[2].title}":"\${''}",
                                            "\${data.columns[3].title}":"\${data.reportTitle}",
                                            "\${data.columns[4].title}":"\${''}",
                                            "\${data.columns[5].title}":"\${''}",
                                            "\${data.columns[6].title}":"\${todayFa.dayWeek + todayFa.day + todayFa.monthTitle + ' '+ todayFa.year}"
                                    }\`),
                                filterData: [
                                    ...filterData,
                                ]
                            }))
                            return collateral
                        })
                        .then(collateral => {
                            let collatreralTotalCntrcts = collateral.length
                            let facilityAllocationTotalAmount = 0
                            let commitmentAllocationTotalAmount = 0
                            let naghdGrpTotalAmnt = 0
                            let gheireManghoolGrpTotalAmnt = 0
                            let sayerGrpTotalAmnt = 0
                            let bedouneVasigheGrpTotalAmnt = 0
                            collateral.map(coll => {
                                facilityAllocationTotalAmount += +coll.facilityAllocationAmount
                                commitmentAllocationTotalAmount += +coll.commitmentAllocationAmount
                                switch (coll.collatreralGrpTypId) {
                                    case 342:
                                        naghdGrpTotalAmnt += coll.facilityAllocationAmount + coll.commitmentAllocationAmount
                                        break;
                                    case 343:
                                        gheireManghoolGrpTotalAmnt += coll.facilityAllocationAmount + coll.commitmentAllocationAmount
                                        break;
                                    case 344:
                                        sayerGrpTotalAmnt += coll.facilityAllocationAmount + coll.commitmentAllocationAmount
                                        break;
                                    case 345:
                                        bedouneVasigheGrpTotalAmnt += coll.facilityAllocationAmount + coll.commitmentAllocationAmount
                                        break;
                                    default:
                                        break;
                                }
                            })
                            getCollateralByTafCode(tafCode)
                                .then(count => {
                                    if (count == 0) {
                                        setCollateral(
                                            collatreralTotalCntrcts,
                                            facilityAllocationTotalAmount,
                                            commitmentAllocationTotalAmount,
                                            naghdGrpTotalAmnt,
                                            gheireManghoolGrpTotalAmnt,
                                            sayerGrpTotalAmnt,
                                            bedouneVasigheGrpTotalAmnt,
                                        )
                                            .catch(err => {
                                                setMessage('خطا در ثبت اطلاعات وقیقه')
                                                setDownloadStatus('error')
                                            })
                                    }
                                    setDownloadStatus('completed');
                                })
                                .catch(err => {
                                    setMessage('خطا در بازیابی اطلاعات وثیقه')
                                    setDownloadStatus('error')
                                })
                        })
                        .catch(err => {
                            setMessage('مشکل در واکشی اطلاعات وثایق تفاهم نامه')
                            setDownloadStatus('error');
                        })
                }).catch(err => {
                    setMessage(err)
                    setDownloadStatus('error');
                })
            } catch (error) {
            }
        }
    }, [tafCode])

    return isVisible
        ?
        (
            <>
                {
                    message.length > 0
                        ?
                        <Message message={message} />
                        :
                        <>
                            {downloadStatus == 'downloading'
                                ?
                                <Message message={"درحال دانلود اطلاعات"} />
                                :
                                <>
                                    <Report
                                        id="uniqueCode"
                                        name="uniqueCode"
                                        data={feed}
                                        filterData={feed.filterData}
                                        onRowClick={handleRowClick}
                                        disabled={false}
                                        isVisible={true}
                                        mode={"report"}
                                    />
                                </>
                            }
                        </>
                }
            </>
        )
        :
        (
            <div className="col"></div>
        )
}`
  createFile(`${reportsPath}`, `${'collateralRpt'}.jsx`, injectedContent);


  /********************************************************************************
  *                        costBenefitRpt Component file
  ********************************************************************************/
  //  dataSource, placeholder, autocomplete, numOfLines
  injectedContent = `import React, { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import { sendRequest } from '../../../util/makeRequest';
import { Report } from "../report/Report";
import { Message } from "../message/Message";
import { addDaysToUtcDate, convertUtc2Date, getJalaliDateGregorianFormat, getTodayDate } from "../../../util/Date";
import { fakeAuthProvider } from "../../../auth";
import { calculateAverage, validateAccounts, validateTafahomInformation } from '../../../util/Validation';
import { addCommas } from "@persian-tools/persian-tools";

export const CostBenefitRpt = ({ id, name, type, value, onChangeStatus, onBlur, placeholder, lable, data, tafCode, disabled, autocomplete, isVisible }) => {

    const [feed, setFeed] = useState(data)
    const [message, setMessage] = useState('')
    const [downloadStatus, setDownloadStatus] = useState('initial')

    const [fromDate, setFromDate] = useState()
    const [toDate, setToDate] = useState()

    let jariAverage = 0
    let shortNormal = 0
    let shortVije = 0
    let shortTarjihi = 0
    let gharzAverage = 0
    let longYearAverage = 0
    let jariDolati = 0
    let longAverage = 0

    // let filterData = ''
    // let jariAverage = 0
    // let gharzAverage = 0
    // let shortAverage = 0
    // let longAverage = 0

    let jariArziAverage = 0
    let gharzArziAverage = 0
    let shortArziAverage = 0
    let longArziAverage = 0

    let soudPardakhtiJariAmnt = 0
    let soudPardakhtiShortNormalAmnt = 0
    let soudPardakhtiShortVijeAmnt = 0
    let soudPardakhtiShortTarjihiAmnt = 0
    let soudPardakhtiGharzAmnt = 0
    let soudPardakhtiLongYearAmnt = 0
    let soudPardakhtiJariDolatiAmnt = 0
    let soudPardakhtiTotalAmnt = 0

    let sepordeGhanouniJariAmnt = 0
    let sepordeGhanouniShortNormalAmnt = 0
    let sepordeGhanouniShortVijeAmnt = 0
    let sepordeGhanouniShortTarjihiAmnt = 0
    let sepordeGhanouniGharzAmnt = 0
    let sepordeGhanouniLongYearAmnt = 0
    let sepordeGhanouniJariDolatiAmnt = 0
    let sepordeGhanouniTotalAmnt = 0


    let jayezeSepordeGhanouniJariAmnt = 0
    let jayezeSepordeGhanouniShortNormalAmnt = 0
    let jayezeSepordeGhanouniShortVijeAmnt = 0
    let jayezeSepordeGhanouniShortTarjihiAmnt = 0
    let jayezeSepordeGhanouniGharzAmnt = 0
    let jayezeSepordeGhanouniLongYearAmnt = 0
    let jayezeSepordeGhanouniJariDolatiAmnt = 0
    let jayezeSepordeGhanouniTotalAmnt = 0

    let hadeNaghdinegiJariAmnt = 0
    let hadeNaghdinegiShortNormalAmnt = 0
    let hadeNaghdinegiShortVijeAmnt = 0
    let hadeNaghdinegiShortTarjihiAmnt = 0
    let hadeNaghdinegiGharzAmnt = 0
    let hadeNaghdinegiLongYearAmnt = 0
    let hadeNaghdinegiJariDolatiAmnt = 0
    let hadeNaghdinegiTotalAmnt = 0

    let freeResourceJariAmnt = 0
    let freeResourceShortNormalAmnt = 0
    let freeResourceShortVijeAmnt = 0
    let freeResourceShortTarjihiAmnt = 0
    let freeResourceGharzAmnt = 0
    let freeResourceLongYearAmnt = 0
    let freeResourceJariDolatiAmnt = 0
    let freeResourceTotalAmnt = 0

    let freeResourceMosharekatiTadrijiAmnt = 0
    let freeResourceMosharekatiTadrijiSoudAmnt = 0
    let freeResourceMosharekatiSarmayeDarGardeshAmnt = 0
    let freeResourceMosharekatiSarmayeDarGardeshSoudAmnt = 0
    let freeResourceGharzKarmozdAmnt = 0
    let totalSoudAmnt = 0
    let mashkoukCost = 0
    let totalCostAmnt = 0
    let temp = 0

    let customerUniqueAccounts = []
    const params = useParams();
    const todayFa = getTodayDate()

    const handleRowClick = (row) => { }

    const calculateAverageDates = (tafahomInformation) => {
        const todayUTc = fakeAuthProvider.getCredential().date
        const newStartUTc = addDaysToUtcDate(todayUTc, -tafahomInformation.avgDay)
        const tmpDateObjec = convertUtc2Date(newStartUTc)
        const fromDate = \`\${tmpDateObjec.year}\${tmpDateObjec.month}\${tmpDateObjec.day}\`

        const tmpTodayDateObject = convertUtc2Date(todayUTc)
        const toDate = \`\${tmpTodayDateObject.year}\${tmpTodayDateObject.month}\${tmpTodayDateObject.day}\`

        return [fromDate, toDate]

    }
    useEffect(() => {
        async function getTafahomInformation() {
            const response = await sendRequest(
                \`${backendUrl}/tafahomInformations/\${params.archiveNumber}\`,
                "GET",
            );
            return response.data
        }
        async function getCustomerAccounts() {
            const response = await sendRequest(
                \`${backendUrl}/tafahomInformations/\${params.archiveNumber}/accounts\${'?tafCode=' + tafCode}\`,
                "GET",
            );
            return response.data
        }
        async function getAccountAverage(extAccNo, startDate, expireDAte, accTypeCode) {
            const response = await sendRequest(
                \`${backendUrl}/accountAverages\`,
                "POST",
                {
                    "fromDate": startDate,
                    "toDate": expireDAte,
                    "accNo": extAccNo,
                    "envCode": 0,
                    "userId": "tafahom"
                }
            ).catch(err => {
                throw (JSON.parse(err).message)
            });
            return { ...response.data[0], accTypeCode }
        }
        async function getCustomerRialResourceAvgByTafCode(tafCode) {
            const response = await sendRequest(
                \`${backendUrl}/tafahomInformations/\${params.archiveNumber}/customerRialResourceAvgRpts?tafCode=\${tafCode}\`,
                "GET"
            );
            return response.data.content.length
        }
        async function setCustomerRialResourceAvg(title, jariAverage, gharzAverage, shortAverage, longAverage, sum) {
            const response = await sendRequest(
                \`${backendUrl}/tafahomInformations/\${params.archiveNumber}/customerRialResourceAvgRpts\`,
                "POST",
                {
                    "tafCode": tafCode,
                    "lastReportDate": +\`\${getJalaliDateGregorianFormat(fakeAuthProvider.getCredential().date, { year: '2-digit' })}\${getJalaliDateGregorianFormat(fakeAuthProvider.getCredential().date, { month: '2-digit' })}\`,
                    "title": title,
                    "jariAverage": jariAverage,
                    "gharzAverage": gharzAverage,
                    "shortAverage": shortAverage,
                    "longAverage": longAverage,
                    "sum": sum
                }
            );
            return response.data
        }
        async function getTasParameterByTafCode(tafCode) {
            const response = await sendRequest(
                \`${backendUrl}/tasParameters?tafCode=\${tafCode}\`,
                "GET",
            );
            return response.data.content
        }
        try {
            setDownloadStatus('downloading')
            getCustomerAccounts()
                .then((customerAccountsResponse) => {
                    if (typeof customerAccountsResponse.content != 'undefined' && customerAccountsResponse.content.length > 0) {
                        customerUniqueAccounts = customerAccountsResponse.content.filter((value, index, array) =>
                            index === array.findIndex(item => (item.extCustId === value.extCustId))
                        )
                        return customerUniqueAccounts
                    } else {
                        throw ('مشتری فاقد حساب تعریف شده می باشد')
                    };
                }).then(customerUniqueAccounts => {
                    validateAccounts(customerUniqueAccounts)
                    return customerUniqueAccounts;
                }).then((customerUniqueAccounts) => {
                    if (customerUniqueAccounts.length > 0) {
                        getTafahomInformation()
                            .then(response => response.content[0])
                            .then(tafahomInformation => {
                                validateTafahomInformation(tafahomInformation)
                                const [fromDate, toDate] = calculateAverageDates(tafahomInformation)
                                setFromDate(fromDate)
                                setToDate(toDate)
                                Promise.all(
                                    customerUniqueAccounts.map(
                                        async account => {
                                            return await getAccountAverage(
                                                account['extAccNo'],
                                                fromDate,
                                                toDate,
                                                account['accTypeCode']
                                            )
                                        })
                                ).then(accountAverage => {
                                    const averageResult = calculateAverage(customerUniqueAccounts, accountAverage)

                                    jariAverage = averageResult.jariAverage
                                    jariDolati = averageResult.jariDolati
                                    gharzAverage = averageResult.gharzAverage
                                    shortNormal = averageResult.shortNormal
                                    shortVije = averageResult.shortVije
                                    shortTarjihi = averageResult.shortTarjihi
                                    longYearAverage = averageResult.longYearAverage
                                    longAverage = averageResult.longAverage

                                    return {
                                        jariAverage: averageResult.jariAverage,
                                        jariDolati: averageResult.jariDolati,
                                        gharzAverage: averageResult.gharzAverage,
                                        shortNormal: averageResult.shortNormal,
                                        shortVije: averageResult.shortVije,
                                        shortTarjihi: averageResult.shortTarjihi,
                                        longYearAverage: averageResult.longYearAverage,
                                        longAverage: averageResult.longAverage,
                                    }
                                }).then(res => {
                                    Promise.all([
                                        getTasParameterByTafCode(tafCode),
                                        //  getCustomerRialResourceAvgByTafCode(tafCode),
                                        //  getCustomerArzResourceAvgByTafCode(tafCode)
                                    ]).then(response => {
                                        const tasParameterTemp = response[0].length > 0
                                            ? response[0][response[0].length - 1]
                                            : {
                                                configDate: '',
                                                gardeshIRate: 0,
                                                gharzAccHadNaghdinegi: 0,
                                                gharzAccJayezeSeporde: 0,
                                                gharzAccNerkheGhanooni: 0,
                                                gharzAccSudJayeze: 0,
                                                gharzWageRate: 0,
                                                jariAccDolatiNerkheGhanooni: 0,
                                                jariAccHadNaghdinegi: 0,
                                                jariAccJayezeSeporde: 0,
                                                jariAccNerkheGhanooni: 0,
                                                jariAccSudJayeze: 0,
                                                jariDolatiAccSudJayeze: 0,
                                                jariDolatiHadNaghdinegi: 0,
                                                longAccHadNaghdinegi: 0,
                                                longAccJayezeSeporde: 0,
                                                longAccNerkheGhanooni: 0,
                                                longAccSudJayeze: 0,
                                                mashkoukCostCoefficient: 0,
                                                shortAccAdiSudJayeze: 0,
                                                shortAccHadNaghdinegi: 0,
                                                shortAccJayezeSeporde: 0,
                                                shortAccNerkheGhanooni: 0,
                                                shortAccTarjihiHadNaghdinegi: 0,
                                                shortAccTarjihiNerkheGhanooni: 0,
                                                shortAccTarjihiSudJayeze: 0,
                                                shortAccVijeHadNaghdinegi: 0,
                                                shortAccVizheJayezeSeporde: 0,
                                                shortAccVizheNerkheGhanooni: 0,
                                                tadrijiIRate: 0,
                                                uniqueCode: 0,
                                                vizheKhadamatSudJayeze: 0,
                                            }
                                        
                                        
                                        const tasParameter = {
                                            ...tasParameterTemp,
                                            'configDate': tasParameterTemp.configDate != '' ? tasParameterTemp.configDate : 0,
                                            'gardeshIRate': tasParameterTemp.gardeshIRate != null ? tasParameterTemp.gardeshIRate : 0,
                                            'gharzAccHadNaghdinegi': tasParameterTemp.gharzAccHadNaghdinegi != null ? tasParameterTemp.gharzAccHadNaghdinegi : 0,
                                            'gharzAccJayezeSeporde': tasParameterTemp.gharzAccJayezeSeporde != null ? tasParameterTemp.gharzAccJayezeSeporde : 0,
                                            'gharzAccNerkheGhanooni': tasParameterTemp.gharzAccNerkheGhanooni != null ? tasParameterTemp.gharzAccNerkheGhanooni : 0,
                                            'gharzAccSudJayeze': tasParameterTemp.gharzAccSudJayeze != null ? tasParameterTemp.gharzAccSudJayeze : 0,
                                            'gharzWageRate': tasParameterTemp.gharzWageRate != null ? tasParameterTemp.gharzWageRate : 0,
                                            'jariAccDolatiNerkheGhanooni': tasParameterTemp.jariAccDolatiNerkheGhanooni != null ? tasParameterTemp.jariAccDolatiNerkheGhanooni : 0,
                                            'jariAccHadNaghdinegi': tasParameterTemp.jariAccHadNaghdinegi != null ? tasParameterTemp.jariAccHadNaghdinegi : 0,
                                            'jariAccJayezeSeporde': tasParameterTemp.jariAccJayezeSeporde != null ? tasParameterTemp.jariAccJayezeSeporde : 0,
                                            'jariAccNerkheGhanooni': tasParameterTemp.jariAccNerkheGhanooni != null ? tasParameterTemp.jariAccNerkheGhanooni : 0,
                                            'jariAccSudJayeze': tasParameterTemp.jariAccSudJayeze != null ? tasParameterTemp.jariAccSudJayeze : 0,
                                            'jariDolatiAccSudJayeze': tasParameterTemp.jariDolatiAccSudJayeze != null ? tasParameterTemp.jariDolatiAccSudJayeze : 0,
                                            'jariDolatiHadNaghdinegi': tasParameterTemp.jariDolatiHadNaghdinegi != null ? tasParameterTemp.jariDolatiHadNaghdinegi : 0,
                                            'longAccHadNaghdinegi': tasParameterTemp.longAccHadNaghdinegi != null ? tasParameterTemp.longAccHadNaghdinegi : 0,
                                            'longAccJayezeSeporde': tasParameterTemp.longAccJayezeSeporde != null ? tasParameterTemp.longAccJayezeSeporde : 0,
                                            'longAccNerkheGhanooni': tasParameterTemp.longAccNerkheGhanooni != null ? tasParameterTemp.longAccNerkheGhanooni : 0,
                                            'longAccSudJayeze': tasParameterTemp.longAccSudJayeze != null ? tasParameterTemp.longAccSudJayeze : 0,
                                            'mashkoukCostCoefficient': tasParameterTemp.mashkoukCostCoefficient != null ? tasParameterTemp.mashkoukCostCoefficient : 0,
                                            'shortAccAdiSudJayeze': tasParameterTemp.shortAccAdiSudJayeze != null ? tasParameterTemp.shortAccAdiSudJayeze : 0,
                                            'shortAccHadNaghdinegi': tasParameterTemp.shortAccHadNaghdinegi != null ? tasParameterTemp.shortAccHadNaghdinegi : 0,
                                            'shortAccJayezeSeporde': tasParameterTemp.shortAccJayezeSeporde != null ? tasParameterTemp.shortAccJayezeSeporde : 0,
                                            'shortAccNerkheGhanooni': tasParameterTemp.shortAccNerkheGhanooni != null ? tasParameterTemp.shortAccNerkheGhanooni : 0,
                                            'shortAccTarjihiHadNaghdinegi': tasParameterTemp.shortAccTarjihiHadNaghdinegi != null ? tasParameterTemp.shortAccTarjihiHadNaghdinegi : 0,
                                            'shortAccTarjihiNerkheGhanooni': tasParameterTemp.shortAccTarjihiNerkheGhanooni != null ? tasParameterTemp.shortAccTarjihiNerkheGhanooni : 0,
                                            'shortAccTarjihiSudJayeze': tasParameterTemp.shortAccTarjihiSudJayeze != null ? tasParameterTemp.shortAccTarjihiSudJayeze : 0,
                                            'shortAccVijeHadNaghdinegi': tasParameterTemp.shortAccVijeHadNaghdinegi != null ? tasParameterTemp.shortAccVijeHadNaghdinegi : 0,
                                            'shortAccVizheJayezeSeporde': tasParameterTemp.shortAccVizheJayezeSeporde != null ? tasParameterTemp.shortAccVizheJayezeSeporde : 0,
                                            'shortAccVizheNerkheGhanooni': tasParameterTemp.shortAccVizheNerkheGhanooni != null ? tasParameterTemp.shortAccVizheNerkheGhanooni : 0,
                                            'tadrijiIRate': tasParameterTemp.tadrijiIRate != null ? tasParameterTemp.tadrijiIRate : 0,
                                            'uniqueCode': tasParameterTemp.uniqueCode != null ? tasParameterTemp.uniqueCode : 0,
                                            'vizheKhadamatSudJayeze': tasParameterTemp.vizheKhadamatSudJayeze != null ? tasParameterTemp.vizheKhadamatSudJayeze : 0,
                                        }

                                        return tasParameter;
                                    }).then(tasParameter => {
                                        soudPardakhtiJariAmnt = (jariAverage * tasParameter.jariAccSudJayeze) / 100,
                                            soudPardakhtiShortNormalAmnt = (shortNormal * tasParameter.shortAccAdiSudJayeze) / 100,
                                            soudPardakhtiShortVijeAmnt = (shortVije * tasParameter.vizheKhadamatSudJayeze) / 100,
                                            soudPardakhtiShortTarjihiAmnt = (shortTarjihi * tasParameter.shortAccTarjihiSudJayeze) / 100,
                                            soudPardakhtiGharzAmnt = (gharzAverage * tasParameter.gharzAccSudJayeze) / 100,
                                            soudPardakhtiLongYearAmnt = (longYearAverage * tasParameter.longAccSudJayeze) / 100,
                                            soudPardakhtiJariDolatiAmnt = (jariDolati * tasParameter.jariDolatiAccSudJayeze) / 100,
                                            soudPardakhtiTotalAmnt = soudPardakhtiJariAmnt + soudPardakhtiShortNormalAmnt + soudPardakhtiShortVijeAmnt + soudPardakhtiShortTarjihiAmnt + soudPardakhtiGharzAmnt + soudPardakhtiLongYearAmnt + soudPardakhtiJariDolatiAmnt,

                                            sepordeGhanouniJariAmnt = jariAverage * tasParameter.jariAccNerkheGhanooni,
                                            sepordeGhanouniShortNormalAmnt = shortNormal * tasParameter.shortAccNerkheGhanooni,
                                            sepordeGhanouniShortVijeAmnt = shortVije * tasParameter.shortAccVizheNerkheGhanooni,
                                            sepordeGhanouniShortTarjihiAmnt = shortTarjihi * tasParameter.shortAccTarjihiNerkheGhanooni,
                                            sepordeGhanouniGharzAmnt = gharzAverage * tasParameter.gharzAccNerkheGhanooni,
                                            sepordeGhanouniLongYearAmnt = longYearAverage * tasParameter.longAccNerkheGhanooni,
                                            sepordeGhanouniJariDolatiAmnt = jariDolati * tasParameter.jariAccDolatiNerkheGhanooni,
                                            sepordeGhanouniTotalAmnt = sepordeGhanouniJariAmnt + sepordeGhanouniShortNormalAmnt + sepordeGhanouniShortVijeAmnt + sepordeGhanouniShortTarjihiAmnt + sepordeGhanouniGharzAmnt + sepordeGhanouniLongYearAmnt + sepordeGhanouniJariDolatiAmnt,

                                            jayezeSepordeGhanouniJariAmnt = sepordeGhanouniJariAmnt * tasParameter.jariAccJayezeSeporde,
                                            jayezeSepordeGhanouniShortNormalAmnt = sepordeGhanouniShortNormalAmnt * tasParameter.shortAccJayezeSeporde,
                                            jayezeSepordeGhanouniShortVijeAmnt = sepordeGhanouniShortVijeAmnt * tasParameter.shortAccVizheJayezeSeporde,
                                            jayezeSepordeGhanouniShortTarjihiAmnt = sepordeGhanouniShortTarjihiAmnt * 0,
                                            jayezeSepordeGhanouniGharzAmnt = sepordeGhanouniGharzAmnt * tasParameter.gharzAccJayezeSeporde,
                                            jayezeSepordeGhanouniLongYearAmnt = sepordeGhanouniLongYearAmnt * tasParameter.longAccJayezeSeporde,
                                            jayezeSepordeGhanouniJariDolatiAmnt = sepordeGhanouniJariDolatiAmnt * 0,
                                            jayezeSepordeGhanouniTotalAmnt = jayezeSepordeGhanouniJariAmnt + jayezeSepordeGhanouniShortNormalAmnt + jayezeSepordeGhanouniShortVijeAmnt + jayezeSepordeGhanouniGharzAmnt + jayezeSepordeGhanouniLongYearAmnt,

                                            hadeNaghdinegiJariAmnt = jariAverage * tasParameter.jariAccHadNaghdinegi,
                                            hadeNaghdinegiShortNormalAmnt = shortNormal * tasParameter.shortAccHadNaghdinegi,
                                            hadeNaghdinegiShortVijeAmnt = shortVije * tasParameter.shortAccVijeHadNaghdinegi,
                                            hadeNaghdinegiShortTarjihiAmnt = shortTarjihi * tasParameter.shortAccTarjihiHadNaghdinegi,
                                            hadeNaghdinegiGharzAmnt = gharzAverage * tasParameter.gharzAccHadNaghdinegi,
                                            hadeNaghdinegiLongYearAmnt = longYearAverage * tasParameter.longAccHadNaghdinegi,
                                            hadeNaghdinegiJariDolatiAmnt = jariDolati * tasParameter.jariDolatiHadNaghdinegi,
                                            hadeNaghdinegiTotalAmnt = hadeNaghdinegiJariAmnt + hadeNaghdinegiShortNormalAmnt + hadeNaghdinegiShortVijeAmnt + hadeNaghdinegiShortTarjihiAmnt + hadeNaghdinegiGharzAmnt + hadeNaghdinegiLongYearAmnt + hadeNaghdinegiJariDolatiAmnt,

                                            freeResourceJariAmnt = jariAverage - sepordeGhanouniJariAmnt - hadeNaghdinegiJariAmnt,
                                            freeResourceShortNormalAmnt = shortNormal - sepordeGhanouniShortNormalAmnt - hadeNaghdinegiShortNormalAmnt,
                                            freeResourceShortVijeAmnt = shortVije - sepordeGhanouniShortVijeAmnt - hadeNaghdinegiShortVijeAmnt,
                                            freeResourceShortTarjihiAmnt = shortTarjihi - sepordeGhanouniShortTarjihiAmnt - hadeNaghdinegiShortTarjihiAmnt,
                                            freeResourceGharzAmnt = gharzAverage - sepordeGhanouniGharzAmnt - hadeNaghdinegiGharzAmnt,
                                            freeResourceLongYearAmnt = longYearAverage - sepordeGhanouniLongYearAmnt - hadeNaghdinegiLongYearAmnt,
                                            freeResourceJariDolatiAmnt = jariDolati - sepordeGhanouniJariDolatiAmnt - hadeNaghdinegiJariDolatiAmnt,
                                            freeResourceTotalAmnt = freeResourceJariAmnt + freeResourceShortNormalAmnt + freeResourceShortVijeAmnt + freeResourceShortTarjihiAmnt + freeResourceGharzAmnt + freeResourceLongYearAmnt + freeResourceJariDolatiAmnt,

                                            freeResourceMosharekatiTadrijiAmnt = ((freeResourceTotalAmnt - freeResourceGharzAmnt) * 20) / 100,
                                            temp = ((1 + (((tasParameter.tadrijiIRate * 1) / 1200))) ** 12),
                                            temp = parseInt(freeResourceMosharekatiTadrijiAmnt * tasParameter.tadrijiIRate) / 100,
                                            freeResourceMosharekatiTadrijiSoudAmnt = ((temp * 12) - freeResourceMosharekatiTadrijiAmnt),
                                            freeResourceMosharekatiSarmayeDarGardeshAmnt = ((freeResourceTotalAmnt - freeResourceGharzAmnt) * 80) / 100,
                                            freeResourceMosharekatiSarmayeDarGardeshSoudAmnt = (freeResourceMosharekatiSarmayeDarGardeshAmnt * tasParameter.gardeshIRate) / 100,
                                            freeResourceGharzKarmozdAmnt = (freeResourceGharzAmnt * tasParameter.gharzWageRate) / 100,
                                            totalSoudAmnt = freeResourceMosharekatiTadrijiSoudAmnt + freeResourceMosharekatiSarmayeDarGardeshSoudAmnt + freeResourceGharzKarmozdAmnt + jayezeSepordeGhanouniTotalAmnt,
                                            mashkoukCost = tasParameter.mashkoukCostCoefficient * freeResourceTotalAmnt,
                                            totalCostAmnt = mashkoukCost + soudPardakhtiTotalAmnt

                                        setFeed(prevState => ({
                                            ...prevState,
                                            columns: [],
                                            rows: [
                                                {
                                                    accountType: data.columns[0].title,
                                                    resourceAvg: data.columns[1].title,
                                                    soodJayezeRate: data.columns[2].title,
                                                    soodPardakhti: data.columns[3].title,
                                                    sepordeGhanooniRate: data.columns[4].title,
                                                    jayezeSepordeGhanooni: data.columns[5].title,
                                                    hadNaghdinegiRate: data.columns[6].title,
                                                    sepordeGhanooniAmnt: data.columns[7].title,
                                                    jayezeSepordeGhanooniAmnt: data.columns[8].title,
                                                    hadNaghdinegiAmnt: data.columns[9].title,
                                                    freeResource: data.columns[10].title,
                                                },
                                                {
                                                    accountType: data.columns[11].title,
                                                    resourceAvg: addCommas(jariAverage),
                                                    soodJayezeRate: tasParameter.jariAccSudJayeze,
                                                    soodPardakhti: addCommas(soudPardakhtiJariAmnt),
                                                    sepordeGhanooniRate: tasParameter.jariAccNerkheGhanooni,
                                                    jayezeSepordeGhanooni: tasParameter.jariAccJayezeSeporde,
                                                    hadNaghdinegiRate: tasParameter.jariAccHadNaghdinegi,
                                                    sepordeGhanooniAmnt: addCommas(sepordeGhanouniJariAmnt),
                                                    jayezeSepordeGhanooniAmnt: addCommas(jayezeSepordeGhanouniJariAmnt),
                                                    hadNaghdinegiAmnt: addCommas(hadeNaghdinegiJariAmnt),
                                                    freeResource: {
                                                        title: addCommas(freeResourceJariAmnt),
                                                        style: { textAlign: 'center', direction: 'ltr' },
                                                        class: "align-middle"
                                                    },
                                                },
                                                {
                                                    accountType: data.columns[12].title,
                                                    resourceAvg: addCommas(shortNormal),
                                                    soodJayezeRate: tasParameter.shortAccAdiSudJayeze,
                                                    soodPardakhti: addCommas(soudPardakhtiShortNormalAmnt),
                                                    sepordeGhanooniRate: tasParameter.shortAccNerkheGhanooni,
                                                    jayezeSepordeGhanooni: tasParameter.shortAccJayezeSeporde,
                                                    hadNaghdinegiRate: tasParameter.shortAccHadNaghdinegi,
                                                    sepordeGhanooniAmnt: addCommas(sepordeGhanouniShortNormalAmnt),
                                                    jayezeSepordeGhanooniAmnt: addCommas(jayezeSepordeGhanouniShortNormalAmnt),
                                                    hadNaghdinegiAmnt: addCommas(hadeNaghdinegiShortNormalAmnt),
                                                    freeResource: {
                                                        title: addCommas(freeResourceShortNormalAmnt),
                                                        style: { textAlign: 'center', direction: 'ltr' },
                                                        class: "align-middle"
                                                    },
                                                },
                                                {
                                                    accountType: data.columns[13].title,
                                                    resourceAvg: addCommas(shortVije),
                                                    soodJayezeRate: tasParameter.vizheKhadamatSudJayeze,
                                                    soodPardakhti: addCommas(soudPardakhtiShortVijeAmnt),
                                                    sepordeGhanooniRate: tasParameter.shortAccVizheNerkheGhanooni,
                                                    jayezeSepordeGhanooni: tasParameter.shortAccVizheJayezeSeporde,
                                                    hadNaghdinegiRate: tasParameter.shortAccVijeHadNaghdinegi,
                                                    sepordeGhanooniAmnt: addCommas(sepordeGhanouniShortVijeAmnt),
                                                    jayezeSepordeGhanooniAmnt: addCommas(jayezeSepordeGhanouniShortVijeAmnt),
                                                    hadNaghdinegiAmnt: addCommas(hadeNaghdinegiShortVijeAmnt),
                                                    freeResource: {
                                                        title: addCommas(freeResourceShortVijeAmnt),
                                                        style: { textAlign: 'center', direction: 'ltr' },
                                                        class: "align-middle"
                                                    },
                                                },
                                                {
                                                    accountType: data.columns[14].title,
                                                    resourceAvg: addCommas(shortTarjihi),
                                                    soodJayezeRate: tasParameter.shortAccTarjihiSudJayeze,
                                                    soodPardakhti: addCommas(soudPardakhtiShortTarjihiAmnt),
                                                    sepordeGhanooniRate: tasParameter.shortAccTarjihiNerkheGhanooni,
                                                    jayezeSepordeGhanooni: 0,
                                                    hadNaghdinegiRate: tasParameter.shortAccTarjihiHadNaghdinegi,
                                                    sepordeGhanooniAmnt: addCommas(sepordeGhanouniShortTarjihiAmnt),
                                                    jayezeSepordeGhanooniAmnt: addCommas(jayezeSepordeGhanouniShortTarjihiAmnt),
                                                    hadNaghdinegiAmnt: addCommas(hadeNaghdinegiShortTarjihiAmnt),
                                                    freeResource: {
                                                        title: addCommas(freeResourceShortTarjihiAmnt),
                                                        style: { textAlign: 'center', direction: 'ltr' },
                                                        class: "align-middle"
                                                    },
                                                },
                                                {
                                                    accountType: data.columns[15].title,
                                                    resourceAvg: addCommas(gharzAverage),
                                                    soodJayezeRate: tasParameter.gharzAccSudJayeze,
                                                    soodPardakhti: addCommas(soudPardakhtiGharzAmnt),
                                                    sepordeGhanooniRate: tasParameter.gharzAccNerkheGhanooni,
                                                    jayezeSepordeGhanooni: tasParameter.gharzAccJayezeSeporde,
                                                    hadNaghdinegiRate: tasParameter.gharzAccHadNaghdinegi,
                                                    sepordeGhanooniAmnt: addCommas(sepordeGhanouniGharzAmnt),
                                                    jayezeSepordeGhanooniAmnt: addCommas(jayezeSepordeGhanouniGharzAmnt),
                                                    hadNaghdinegiAmnt: addCommas(hadeNaghdinegiGharzAmnt),
                                                    freeResource: {
                                                        title: addCommas(freeResourceGharzAmnt),
                                                        style: { textAlign: 'center', direction: 'ltr' },
                                                        class: "align-middle"
                                                    },
                                                },
                                                {
                                                    accountType: data.columns[16].title,
                                                    resourceAvg: addCommas(longYearAverage),
                                                    soodJayezeRate: tasParameter.longAccSudJayeze,
                                                    soodPardakhti: addCommas(soudPardakhtiLongYearAmnt),
                                                    sepordeGhanooniRate: tasParameter.longAccNerkheGhanooni,
                                                    jayezeSepordeGhanooni: tasParameter.longAccJayezeSeporde,
                                                    hadNaghdinegiRate: tasParameter.longAccHadNaghdinegi,
                                                    sepordeGhanooniAmnt: addCommas(sepordeGhanouniLongYearAmnt),
                                                    jayezeSepordeGhanooniAmnt: addCommas(jayezeSepordeGhanouniLongYearAmnt),
                                                    hadNaghdinegiAmnt: addCommas(hadeNaghdinegiLongYearAmnt),
                                                    freeResource: {
                                                        title: addCommas(freeResourceLongYearAmnt),
                                                        style: { textAlign: 'center', direction: 'ltr' },
                                                        class: "align-middle"
                                                    },
                                                },
                                                {
                                                    accountType: data.columns[17].title,
                                                    resourceAvg: addCommas(jariDolati),
                                                    soodJayezeRate: tasParameter.jariDolatiAccSudJayeze,
                                                    soodPardakhti: addCommas(soudPardakhtiJariDolatiAmnt),
                                                    sepordeGhanooniRate: tasParameter.jariAccDolatiNerkheGhanooni,
                                                    jayezeSepordeGhanooni: 0,
                                                    hadNaghdinegiRate: tasParameter.jariDolatiHadNaghdinegi,
                                                    sepordeGhanooniAmnt: addCommas(sepordeGhanouniJariDolatiAmnt),
                                                    jayezeSepordeGhanooniAmnt: addCommas(jayezeSepordeGhanouniJariDolatiAmnt),
                                                    hadNaghdinegiAmnt: addCommas(hadeNaghdinegiJariDolatiAmnt),
                                                    freeResource: {
                                                        title: addCommas(freeResourceJariDolatiAmnt),
                                                        style: { textAlign: 'center', direction: 'ltr' },
                                                        class: "align-middle"
                                                    },
                                                },
                                                {
                                                    sum: data.columns[18].title,
                                                    resourceAvg: addCommas(jariAverage + shortNormal + shortVije + shortTarjihi + gharzAverage + longYearAverage + jariDolati),
                                                    soodJayezeRate: '0',
                                                    soodPardakhti: addCommas(soudPardakhtiTotalAmnt),
                                                    sepordeGhanooniRate: '0',
                                                    jayezeSepordeGhanooni: '0',
                                                    hadNaghdinegiRate: '0',
                                                    sepordeGhanooniAmnt: addCommas(sepordeGhanouniTotalAmnt),
                                                    jayezeSepordeGhanooniAmnt: addCommas(jayezeSepordeGhanouniTotalAmnt),
                                                    hadNaghdinegiAmnt: addCommas(hadeNaghdinegiTotalAmnt),
                                                    freeResource: {
                                                        title: addCommas(freeResourceTotalAmnt),
                                                        style: { textAlign: 'center', direction: 'ltr' },
                                                        class: "align-middle"
                                                    },
                                                },
                                                {
                                                    sum: ' ',
                                                    resourceAvg: ' ',
                                                    soodJayezeRate: ' ',
                                                    soodPardakhti: ' ',
                                                    sepordeGhanooniRate: ' ',
                                                    jayezeSepordeGhanooni: ' ',
                                                    hadNaghdinegiRate: ' ',
                                                    sepordeGhanooniAmnt: ' ',
                                                    jayezeSepordeGhanooniAmnt: ' ',
                                                    hadNaghdinegiAmnt: ' ',
                                                    freeResource: ' ',
                                                },
                                                {
                                                    oghoudMosharekatiTadriji: 'نام عقد',
                                                    tadrijiIRate: data.columns[20].title,
                                                    amount: 'منابع محاسبه شده',
                                                    tadrijiISoud: 'سود/کارمزد',
                                                    oghoudMosharekatiSarmayeDarGardesh: '',
                                                    gardeshIRate: '',
                                                    gardeshISoud: '',
                                                    oghoudGharzolhasane: data.columns[10].title,
                                                    gharzWageRate: {
                                                        title: addCommas(freeResourceTotalAmnt),
                                                        style: { textAlign: 'center', direction: 'ltr' },
                                                        class: "align-middle"
                                                    },
                                                    gharzWage: '',
                                                    totalBenefit: '',
                                                },
                                                {
                                                    oghoudMosharekatiTadriji: data.columns[19].title,
                                                    tadrijiIRate: tasParameter.tadrijiIRate,
                                                    amount: {
                                                        title: addCommas(freeResourceMosharekatiTadrijiAmnt),
                                                        style: { textAlign: 'center', direction: 'ltr' },
                                                        class: "align-middle"
                                                    },
                                                    tadrijiISoud: {
                                                        title: addCommas(freeResourceMosharekatiTadrijiSoudAmnt),
                                                        style: { textAlign: 'center', direction: 'ltr' },
                                                        class: "align-middle"
                                                    },
                                                    totalBenefit: '',
                                                    lable1: '',
                                                    lable2: '',
                                                    lable3: data.columns[29].title,
                                                    lable4: {
                                                        title: tasParameter.mashkoukCostCoefficient,
                                                        style: { textAlign: 'center', direction: 'ltr' },
                                                        class: "align-middle"
                                                    },
                                                    lable5: '',
                                                    lable6: ''
                                                },
                                                {
                                                    oghoudMosharekatiSarmayeDarGardesh: data.columns[22].title,
                                                    gardeshIRate: tasParameter.gardeshIRate,
                                                    amount: {
                                                        title: addCommas(freeResourceMosharekatiSarmayeDarGardeshAmnt),
                                                        style: { textAlign: 'center', direction: 'ltr' },
                                                        class: "align-middle"
                                                    },
                                                    gardeshISoud: {
                                                        title: addCommas(freeResourceMosharekatiSarmayeDarGardeshSoudAmnt),
                                                        style: { textAlign: 'center', direction: 'ltr' },
                                                        class: "align-middle"
                                                    },
                                                    oghoudGharzolhasane: '',
                                                    gharzWageRate: '',
                                                    gharzWage: '',
                                                    freeResource: data.columns[30].title,
                                                    mashkoukCostCoefficient: {
                                                        title: addCommas(mashkoukCost),
                                                        style: { textAlign: 'center', direction: 'ltr' },
                                                        class: "align-middle"
                                                    },
                                                    mashkoukCost: '',
                                                    soudPardakhtiBeSepordeha: '',
                                                },
                                                {
                                                    oghoudGharzolhasane: data.columns[25].title,
                                                    gharzWageRate: tasParameter.gharzWageRate,
                                                    amount: {
                                                        title: addCommas(freeResourceGharzAmnt),
                                                        style: { textAlign: 'center', direction: 'ltr' },
                                                        class: "align-middle"
                                                    },
                                                    gharzWage: {
                                                        title: addCommas(freeResourceGharzKarmozdAmnt),
                                                        style: { textAlign: 'center', direction: 'ltr' },
                                                        class: "align-middle"
                                                    },
                                                    lable1: '',
                                                    lable2: '',
                                                    lable3: '',
                                                    freeResource: data.columns[31].title,
                                                    mashkoukCostCoefficient: {
                                                        title: addCommas(soudPardakhtiTotalAmnt),
                                                        style: { textAlign: 'center', direction: 'ltr' },
                                                        class: "align-middle"
                                                    },
                                                    mashkoukCost: '',
                                                    soodPardakhti: ''
                                                },
                                                {
                                                    totalBenefit: {
                                                        title: data.columns[32].title,
                                                        style: { textAlign: 'center', fontWeight: 'bold' },
                                                        class: "align-middle"
                                                    },
                                                    oghoudMosharekatiTadriji: '',
                                                    tadrijiIRate: '',
                                                    amount: {
                                                        title: addCommas(totalSoudAmnt),
                                                        style: { color: 'green', textAlign: 'center', fontWeight: 'bold', direction: 'ltr' },
                                                        class: "align-middle"
                                                    },
                                                    tadrijiISoud: '',
                                                    oghoudMosharekatiSarmayeDarGardesh: '',
                                                    gardeshIRate: '',
                                                    totalCost: {
                                                        title: data.columns[33].title,
                                                        style: { textAlign: 'center', fontWeight: 'bold' },
                                                        class: "align-middle"
                                                    },
                                                    oghoudGharzolhasane: {
                                                        title: addCommas(totalCostAmnt),
                                                        style: { color: 'red', textAlign: 'center', fontWeight: 'bold', direction: 'ltr' },
                                                        class: "align-middle"
                                                    },
                                                    gharzWageRate: '',
                                                    gharzWage: ''
                                                },
                                                {
                                                    lable1: '',
                                                    lable2: '',
                                                    lable3: '',
                                                    lable4: '',
                                                    lable5: {
                                                        title: 'عایدی کل',
                                                        style: { textAlign: 'center', fontWeight: 'bold', direction: 'ltr' },
                                                        class: "align-middle"
                                                    },
                                                    lable6: {
                                                        title: addCommas(totalSoudAmnt + totalCostAmnt),
                                                        style: { textAlign: 'center', fontWeight: 'bold', direction: 'ltr' },
                                                        class: "align-middle"
                                                    },
                                                    lable7: '',
                                                    lable8: '',
                                                    lable9: '',
                                                    lable10: '',
                                                    lable11: '',
                                                }
                                            ],
                                            headerData:
                                                JSON.parse(\`{
                                                        "\${data.columns[0].title}":"پورتال تفاهم نامه های بانک ملت",
                                                        "\${data.columns[1].title}":"\${''}",
                                                        "\${data.columns[2].title}":"\${''}",
                                                        "\${data.columns[3].title}":"\${''}",
                                                        "\${data.columns[4].title}":"\${''}",
                                                        "\${data.columns[5].title}":"\${data.reportTitle}",
                                                        "\${data.columns[6].title}":"\${''}",
                                                        "\${data.columns[7].title}":"\${''}",
                                                        "\${data.columns[8].title}":"\${''}",
                                                        "\${data.columns[9].title}":"\${''}",
                                                        "\${data.columns[10].title}":"\${todayFa.dayWeek + todayFa.day + todayFa.monthTitle + ' '
                                                    + todayFa.year}"
                                                }\`),
                                              filterData: [
                                                JSON.parse(\`{
                                                            "\${data.columns[0].title}":"\${data.columns[11].title}",
                                                            "\${data.columns[1].title}":"\${addCommas(jariAverage)}",
                                                            "\${data.columns[2].title}":"\${tasParameter.jariAccSudJayeze}",
                                                            "\${data.columns[3].title}":"\${addCommas(soudPardakhtiJariAmnt)}",
                                                            "\${data.columns[4].title}":"\${tasParameter.jariAccNerkheGhanooni}",
                                                            "\${data.columns[5].title}":"\${tasParameter.jariAccJayezeSeporde}",
                                                            "\${data.columns[6].title}":"\${tasParameter.jariAccHadNaghdinegi}",
                                                            "\${data.columns[7].title}":"\${addCommas(sepordeGhanouniJariAmnt)}",
                                                            "\${data.columns[8].title}":"\${addCommas(jayezeSepordeGhanouniJariAmnt)}",
                                                            "\${data.columns[9].title}":"\${addCommas(hadeNaghdinegiJariAmnt)}",
                                                            "\${data.columns[10].title}":"\${addCommas(freeResourceJariAmnt)}"
                                                    }\`),
                                                JSON.parse(\`{
                                                            "\${data.columns[0].title}":"\${data.columns[12].title}",
                                                            "\${data.columns[1].title}":"\${addCommas(shortNormal)}",
                                                            "\${data.columns[2].title}":"\${tasParameter.shortAccAdiSudJayeze}",
                                                            "\${data.columns[3].title}":"\${addCommas(soudPardakhtiShortNormalAmnt)}",
                                                            "\${data.columns[4].title}":"\${tasParameter.shortAccNerkheGhanooni}",
                                                            "\${data.columns[5].title}":"\${tasParameter.shortAccJayezeSeporde}",
                                                            "\${data.columns[6].title}":"\${tasParameter.shortAccHadNaghdinegi}",
                                                            "\${data.columns[7].title}":"\${addCommas(sepordeGhanouniShortNormalAmnt)}",
                                                            "\${data.columns[8].title}":"\${addCommas(jayezeSepordeGhanouniShortNormalAmnt)}",
                                                            "\${data.columns[9].title}":"\${addCommas(hadeNaghdinegiShortNormalAmnt)}",
                                                            "\${data.columns[10].title}":"\${addCommas(freeResourceShortNormalAmnt)}"
                                                    }\`),
                                                JSON.parse(\`{
                                                            "\${data.columns[0].title}":"\${data.columns[13].title}",
                                                            "\${data.columns[1].title}":"\${addCommas(shortVije)}",
                                                            "\${data.columns[2].title}":"\${tasParameter.vizheKhadamatSudJayeze}",
                                                            "\${data.columns[3].title}":"\${addCommas(soudPardakhtiShortVijeAmnt)}",
                                                            "\${data.columns[4].title}":"\${tasParameter.shortAccVizheNerkheGhanooni}",
                                                            "\${data.columns[5].title}":"\${tasParameter.shortAccVizheJayezeSeporde}",
                                                            "\${data.columns[6].title}":"\${tasParameter.shortAccVijeHadNaghdinegi}",
                                                            "\${data.columns[7].title}":"\${addCommas(sepordeGhanouniShortVijeAmnt)}",
                                                            "\${data.columns[8].title}":"\${addCommas(jayezeSepordeGhanouniShortVijeAmnt)}",
                                                            "\${data.columns[9].title}":"\${addCommas(hadeNaghdinegiShortVijeAmnt)}",
                                                            "\${data.columns[10].title}":"\${addCommas(freeResourceShortVijeAmnt)}"
                                                    }\`),
                                                JSON.parse(\`{
                                                        "\${data.columns[0].title}":"\${data.columns[14].title}",
                                                        "\${data.columns[1].title}":"\${addCommas(shortTarjihi)}",
                                                        "\${data.columns[2].title}":"\${tasParameter.shortAccTarjihiSudJayeze}",
                                                        "\${data.columns[3].title}":"\${addCommas(soudPardakhtiShortTarjihiAmnt)}",
                                                        "\${data.columns[4].title}":"\${tasParameter.shortAccTarjihiNerkheGhanooni}",
                                                        "\${data.columns[5].title}":"\${0}",
                                                        "\${data.columns[6].title}":"\${tasParameter.shortAccTarjihiHadNaghdinegi}",
                                                        "\${data.columns[7].title}":"\${addCommas(sepordeGhanouniShortTarjihiAmnt)}",
                                                        "\${data.columns[8].title}":"\${addCommas(jayezeSepordeGhanouniShortTarjihiAmnt)}",
                                                        "\${data.columns[9].title}":"\${addCommas(hadeNaghdinegiShortTarjihiAmnt)}",
                                                        "\${data.columns[10].title}":"\${addCommas(freeResourceShortTarjihiAmnt)}"
                                                    }\`),
                                                JSON.parse(\`{
                                                        "\${data.columns[0].title}":"\${data.columns[15].title}",
                                                        "\${data.columns[1].title}":"\${addCommas(gharzAverage)}",
                                                        "\${data.columns[2].title}":"\${tasParameter.gharzAccSudJayeze}",
                                                        "\${data.columns[3].title}":"\${addCommas(soudPardakhtiGharzAmnt)}",
                                                        "\${data.columns[4].title}":"\${tasParameter.gharzAccNerkheGhanooni}",
                                                        "\${data.columns[5].title}":"\${tasParameter.gharzAccJayezeSeporde}",
                                                        "\${data.columns[6].title}":"\${tasParameter.gharzAccHadNaghdinegi}",
                                                        "\${data.columns[7].title}":"\${addCommas(sepordeGhanouniGharzAmnt)}",
                                                        "\${data.columns[8].title}":"\${addCommas(jayezeSepordeGhanouniGharzAmnt)}",
                                                        "\${data.columns[9].title}":"\${addCommas(hadeNaghdinegiGharzAmnt)}",
                                                        "\${data.columns[10].title}":"\${addCommas(freeResourceGharzAmnt)}"
                                                    }\`),
                                                JSON.parse(\`{
                                                        "\${data.columns[0].title}": "\${data.columns[16].title}",
                                                        "\${data.columns[1].title}": "\${addCommas(longYearAverage)}",
                                                        "\${data.columns[2].title}": "\${tasParameter.longAccSudJayeze}",
                                                        "\${data.columns[3].title}": "\${addCommas(soudPardakhtiLongYearAmnt)}",
                                                        "\${data.columns[4].title}": "\${tasParameter.longAccNerkheGhanooni}",
                                                        "\${data.columns[5].title}": "\${tasParameter.longAccJayezeSeporde}",
                                                        "\${data.columns[6].title}": "\${tasParameter.longAccHadNaghdinegi}",
                                                        "\${data.columns[7].title}": "\${addCommas(sepordeGhanouniLongYearAmnt)}",
                                                        "\${data.columns[8].title}": "\${addCommas(jayezeSepordeGhanouniLongYearAmnt)}",
                                                        "\${data.columns[9].title}": "\${addCommas(hadeNaghdinegiLongYearAmnt)}",
                                                        "\${data.columns[10].title}": "\${addCommas(freeResourceLongYearAmnt)}"
                                                    }\`),
                                                JSON.parse(\`{
                                                        "\${data.columns[0].title}":"\${data.columns[17].title}",
                                                        "\${data.columns[1].title}":"\${addCommas(jariDolati)}",
                                                        "\${data.columns[2].title}":"\${tasParameter.jariDolatiAccSudJayeze}",
                                                        "\${data.columns[3].title}":"\${addCommas(soudPardakhtiJariDolatiAmnt)}",
                                                        "\${data.columns[4].title}":"\${tasParameter.jariAccDolatiNerkheGhanooni}",
                                                        "\${data.columns[5].title}":"\${0}",
                                                        "\${data.columns[6].title}":"\${tasParameter.jariDolatiHadNaghdinegi}",
                                                        "\${data.columns[7].title}":"\${addCommas(sepordeGhanouniJariDolatiAmnt)}",
                                                        "\${data.columns[8].title}":"\${addCommas(jayezeSepordeGhanouniJariDolatiAmnt)}",
                                                        "\${data.columns[9].title}":"\${addCommas(hadeNaghdinegiJariDolatiAmnt)}",
                                                        "\${data.columns[10].title}":"\${addCommas(freeResourceJariDolatiAmnt)}"
                                                    }\`),
                                                JSON.parse(\`{
                                                        "\${data.columns[0].title}":"\${data.columns[18].title}",
                                                        "\${data.columns[1].title}":"\${addCommas(jariAverage + shortNormal + shortVije + shortTarjihi + gharzAverage + longYearAverage + jariDolati)}",
                                                        "\${data.columns[2].title}":"\${'0'}",
                                                        "\${data.columns[3].title}":"\${addCommas(soudPardakhtiTotalAmnt)}",
                                                        "\${data.columns[4].title}":"\${''}",
                                                        "\${data.columns[5].title}":"\${''}",
                                                        "\${data.columns[6].title}":"\${''}",
                                                        "\${data.columns[7].title}":"\${addCommas(sepordeGhanouniTotalAmnt)}",
                                                        "\${data.columns[8].title}":"\${addCommas(jayezeSepordeGhanouniTotalAmnt)}",
                                                        "\${data.columns[9].title}":"\${addCommas(hadeNaghdinegiTotalAmnt)}",
                                                        "\${data.columns[10].title}":"\${addCommas(freeResourceTotalAmnt)}"
                                                    }\`),
                                                JSON.parse(\`{
                                                        "\${data.columns[0].title}":"\${'نام عقد'}",
                                                        "\${data.columns[1].title}":"\${'نرخ تسهیلات'}",
                                                        "\${data.columns[2].title}":"\${'منابع محاسبه شده'}",
                                                        "\${data.columns[3].title}":"\${'سود/کارمزد'}",
                                                        "\${data.columns[4].title}":"\${''}",
                                                        "\${data.columns[5].title}":"\${''}",
                                                        "\${data.columns[6].title}":"\${''}",
                                                        "\${data.columns[7].title}":"\${''}",
                                                        "\${data.columns[8].title}":"\${''}",
                                                        "\${data.columns[9].title}":"\${''}",
                                                        "\${data.columns[10].title}":"\${''}"
                                                    }\`),
                                                JSON.parse(\`{
                                                        "\${data.columns[0].title}":"\${data.columns[19].title}",
                                                        "\${data.columns[1].title}":"\${tasParameter.tadrijiIRate}",
                                                        "\${data.columns[2].title}":"\${addCommas(freeResourceMosharekatiTadrijiAmnt)}",
                                                        "\${data.columns[3].title}":"\${addCommas(freeResourceMosharekatiTadrijiSoudAmnt)}",
                                                        "\${data.columns[4].title}":"\${''}",
                                                        "\${data.columns[5].title}":"\${''}",
                                                        "\${data.columns[6].title}":"\${''}",
                                                        "\${data.columns[7].title}":"\${''}",
                                                        "\${data.columns[8].title}":"\${''}",
                                                        "\${data.columns[9].title}":"\${''}",
                                                        "\${data.columns[10].title}":"\${''}"
                                                    }\`),
                                                JSON.parse(\`{
                                                        "\${data.columns[0].title}": "\${data.columns[22].title}",
                                                        "\${data.columns[1].title}": "\${tasParameter.gardeshIRate}",
                                                        "\${data.columns[2].title}":"$\{addCommas(freeResourceMosharekatiSarmayeDarGardeshAmnt)}",
                                                        "\${data.columns[3].title}": "\${addCommas(freeResourceMosharekatiSarmayeDarGardeshSoudAmnt)}",
                                                        "\${data.columns[4].title}":"$\{''}",
                                                        "\${data.columns[5].title}":"$\{''}",
                                                        "\${data.columns[6].title}":"$\{''}",
                                                        "\${data.columns[7].title}": "\${data.columns[10].title}",
                                                        "\${data.columns[8].title}": "\${data.columns[29].title}",
                                                        "\${data.columns[9].title}": "\${data.columns[30].title}",
                                                        "\${data.columns[10].title}": "\${data.columns[31].title}"
                                                    }\`),
                                                JSON.parse(\`{
                                                        "\${data.columns[0].title}": "\${data.columns[25].title}",
                                                        "\${data.columns[1].title}": "\${tasParameter.gharzWageRate}",
                                                        "\${data.columns[2].title}": "\${addCommas(freeResourceGharzAmnt)}",
                                                        "\${data.columns[3].title}": "\${addCommas(freeResourceGharzKarmozdAmnt)}",
                                                        "\${data.columns[4].title}": "\${''}",
                                                        "\${data.columns[5].title}": "\${''}",
                                                        "\${data.columns[6].title}": "\${''}",
                                                        "\${data.columns[7].title}": "\${addCommas(freeResourceTotalAmnt)}",
                                                        "\${data.columns[8].title}": "\${tasParameter.mashkoukCostCoefficient}",
                                                        "\${data.columns[9].title}": "\${addCommas(mashkoukCost)}",
                                                        "\${data.columns[10].title}": "\${addCommas(soudPardakhtiTotalAmnt)}"
                                                    }\`),
                                                JSON.parse(\`{                                                                
                                                        "\${data.columns[0].title}": "\${data.columns[32].title}",
                                                        "\${data.columns[1].title}": "\${''}",
                                                        "\${data.columns[2].title}": "\${''}",
                                                        "\${data.columns[3].title}": "\${addCommas(totalSoudAmnt)}",
                                                        "\${data.columns[4].title}": "\${''}",
                                                        "\${data.columns[5].title}": "\${''}",
                                                        "\${data.columns[6].title}": "\${''}",
                                                        "\${data.columns[7].title}": "\${data.columns[33].title}",
                                                        "\${data.columns[8].title}": "\${''}",
                                                        "\${data.columns[9].title}": "\${''}",
                                                        "\${data.columns[10].title}":"\${addCommas(totalCostAmnt)}"
                                                    }\`),
                                                JSON.parse(\`{
                                                        "\${data.columns[0].title}":"\${''}",
                                                        "\${data.columns[1].title}":"\${''}",
                                                        "\${data.columns[2].title}":"\${''}",
                                                        "\${data.columns[3].title}":"\${''}",
                                                        "\${data.columns[4].title}":"\${'عایدی کل'}",
                                                        "\${data.columns[5].title}":"\${addCommas(totalSoudAmnt + totalCostAmnt)}",
                                                        "\${data.columns[6].title}":"\${''}",
                                                        "\${data.columns[7].title}":"\${''}",
                                                        "\${data.columns[8].title}":"\${''}",
                                                        "\${data.columns[9].title}":"\${''}",
                                                        "\${data.columns[10].title}":"\${''}"
                                                    }\`),
                                            ]
                                          }))
                                          setDownloadStatus('completed')
                                    }).catch(err => { console.log(err) })
                                }).catch(err => {
                                    setMessage(err)
                                    setDownloadStatus('error')
                                })
                            })
                            // .then(result => {
                            //     getCustomerRialResourceAvgByTafCode(tafCode)
                            //         .then(count => {
                            //             if (count == 0) {
                            //                 setCustomerRialResourceAvg(result.title, result.jariAverage, result.gharzAverage, result.shortAverage, result.longAverage, result.sum)
                            //             }
                            //             setDownloadStatus('completed');
                            //         })
                            // })
                            .catch(err => {
                              setMessage(err)
                              setDownloadStatus('error');
                          })
                    }
                }).catch(err => {
                    setMessage(err)
                    setDownloadStatus('error');
                })
            //     } else {
            //         throw ('مشتری فاقد حساب یکتا می باشد')
            //     };
            // }).catch(err => {
            //     setMessage(err)
            //     setDownloadStatus('error');
            // })
        } catch (error) {
        }
    }, [tafCode])

    return isVisible
        ?
        (
            <>
                {
                    message.length > 0
                        ?
                        <Message message={message} />
                        :
                        <>
                            {downloadStatus == 'downloading'
                                ?
                                <Message message={"درحال دانلود اطلاعات"} />
                                :
                                <>
                                    <Report
                                        id="uniqueCode"
                                        name="uniqueCode"
                                        data={feed}
                                        filterData={feed.filterData}
                                        onRowClick={handleRowClick}
                                        disabled={false}
                                        isVisible={true}
                                        mode={"report"}
                                        pageSize={[20]}
                                        hasRowNumber={false}
                                    />
                                </>
                            }
                        </>
                }
            </>
        )
        :
        (
            <div className="col"></div>
        )
}`
  createFile(`${reportsPath}`, `${'costBenefitRpt'}.jsx`, injectedContent);

  /********************************************************************************
  *                        customerProfileRpt Component file
  ********************************************************************************/
  //  dataSource, placeholder, autocomplete, numOfLines
  injectedContent = `import React, { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import { sendRequest } from '../../../util/makeRequest';
import { fakeAuthProvider } from "../../../auth";
import { Report } from "../report/Report";
import { Message } from "../message/Message";
import { getJalaliDateGregorianFormat, removeSlashFromDate, addDaysToUtcDate, convertUtc2Date, getTodayDate } from "../../../util/Date";
import { calculateAverage, validateAccounts, validateTafahomInformation, validateTafahomInformation4TafState } from '../../../util/Validation';
import { extractCommitment } from "../../../util/reportLogic";
import { addCommas } from "@persian-tools/persian-tools";

export const CustomerProfileRpt = ({ id, name, type, value, onChangeStatus, onBlur, placeholder, lable, data, tafCode, disabled, autocomplete, isVisible }) => {

    const [feed, setFeed] = useState(data)
    const [message, setMessage] = useState('')
    const [downloadStatus, setDownloadStatus] = useState('initial')
    const [tafahomInformation, setTafahomInformation] = useState({});

    // let customerLifeCycleValue = {}

    const handleRowClick = (row) => { }
    const todayFa = getTodayDate()

    const calculateAverageDates = (tafahomInformation) => {
        const todayUTc = fakeAuthProvider.getCredential().date
        // const startDateUtc = getUTCFromJalaliDateInString(tafahomInformation.startDate)
        // const expireDateUtc = getUTCFromJalaliDateInString(tafahomInformation.expireDate)

        const newStartUTc = addDaysToUtcDate(todayUTc, -tafahomInformation.avgDay)
        const tmpDateObjec = convertUtc2Date(newStartUTc)
        const fromDate = \`\${tmpDateObjec.year}\${tmpDateObjec.month}\${tmpDateObjec.day}\`

        const tmpTodayDateObject = convertUtc2Date(todayUTc)
        const toDate = \`\${tmpTodayDateObject.year}\${tmpTodayDateObject.month}\${tmpTodayDateObject.day}\`

        return [fromDate, toDate]

    }
    const validateState = (tafahomInformation) => {
        let flag = false
        let msg = \`\`
        if (flag == false) { if (!tafahomInformation.archiveNumber > 0) { flag = true; msg = \`شماره آرشیو مقداردهی نشده است\`; setErrorCode(1401); setMessage(\`شماره آرشیو مقداردهی نشده است\`) } }
        if (flag == false) { if (!tafahomInformation.tafCode > 0) { flag = true; msg = \`کدتفاهم نامه مقداردهی نشده است\`; setErrorCode(1402); setMessage(\`کدتفاهم نامه مقداردهی نشده است\`) } }
        if (flag == false) { if (tafahomInformation.extCustId == null || !typeof tafahomInformation.extCustId == 'number') { flag = true; msg = \`شماره مشتری/سازمان مقداردهی نشده است\`; setErrorCode(1412); setMessage(\`شماره مشتری/سازمان مقداردهی نشده است\`) } }
        if (flag == true) {
            // setMessage(\`\${msg} لذا ارسال وضعیت تفاهم نامه امکان پذیرنمی باشد.\`)
            // const msg = \`ارسال وضعیت تفاهم نامه امکان پذیرنمی باشد. \${message}\`
            throw (msg)
        }
    }

    const params = useParams();

    useEffect(() => {
        async function getTafahomInformation() {
            const response = await sendRequest(
                \`${backendUrl}/tafahomInformations/\${params.archiveNumber}\`,
                "GET",
            );
            return response.data
        }
        if (tafCode > 0) {
            getTafahomInformation()
                .then(response => {
                    const tafahomInformation = response.content[0];
                    validateState(tafahomInformation)
                    if (typeof tafahomInformation == 'undefined' || tafahomInformation.length <= 0) {
                      throw ('مشتری فاقد تفاهم نامه تعریف شده می باشد')
                    };
                    validateTafahomInformation4TafState(tafahomInformation)
                    setTafahomInformation(tafahomInformation)
                }).catch(error => setMessage(error))
        }
    }, [tafCode])

    //  get all customers
    useEffect(() => {
        async function getCustomerAccounts() {
            const response = await sendRequest(
                \`${backendUrl}/tafahomInformations/\${params.archiveNumber}/accounts\${'?tafCode=' + tafCode}\`,
                "GET",
            );
            return response.data
        }
        async function getAccountAverage(extAccNo, startDate, expireDAte, accTypeCode) {
            const response = await sendRequest(
                \`${backendUrl}/accountAverages\`,
                "POST",
                {
                    "fromDate": startDate,
                    "toDate": expireDAte,
                    "accNo": extAccNo,
                    "envCode": 0,
                    "userId": "tafahom"
                }
            );
            return { ...response.data[0], accTypeCode }
        }
        async function getSelectedCustomers() {
            const response = await sendRequest(
                \`${backendUrl}/tafahomInformations/\${params.archiveNumber}/customerWithHadSaghfs\${'?tafCode=' + tafCode}\`,
                "GET",
            );
            return response.data
        }
        async function getLending(startDate, expireDate, seri, intCustIds) {
            const response = await sendRequest(
                \`${backendUrl}/lendings\`,
                "POST",
                {
                    startDate: startDate,
                    expireDate: expireDate,
                    seri: seri,
                    intCustIds: intCustIds
                }
            );
            return response.data
        }
        async function getCollateral(seri) {
            const response = await sendRequest(
                \`${backendUrl}/collaterals\`,
                "POST",
                { seri: seri }
            );
            return response.data
        }
        async function getRialLG(intCustId, startDate, expireDate) {
            const response = await sendRequest(
                \`${backendUrl}/rialLetterOfGuaranties\${'?tafCode=' + tafCode}\`,
                "POST",
                {
                    "usercd": "tafahom",
                    "systemDT": 14030707,
                    "intcstmrcd": intCustId,
                    "fromdt": startDate,
                    "todt": expireDate
                }
            )
            return response.data
        }
        async function getArzLG(intCustId, startDate, expireDate) {
            const response = await sendRequest(
                \`${backendUrl}/arzLetterOfGuaranties\${'?tafCode=' + tafCode}\`,
                "POST",
                {
                    "intcstmrcd": intCustId,
                    "fromdt": startDate,
                    "todt": expireDate
                }
            )
            return response.data
        }
        async function getRialLC(intCustId, startDate, expireDate) {
            const response = await sendRequest(
                \`${backendUrl}/rialLetterOfCredits\`,
                "POST",
                {
                    "intcstmrcd": intCustId,
                    "fromdt": startDate,
                    "todt": expireDate
                }
            )
            return response.data
        }
        async function getArzLC(repTyp, intCustId, startDate, expireDate) {
            const response = await sendRequest(
                \`${backendUrl}/arzLetterOfCredits\`,
                "POST",
                {
                    "repTyp": repTyp,
                    "intcstmrcd": intCustId,
                    "fromdt": startDate,
                    "todt": expireDate
                }
            )
            return response.data
        }
        async function getFinantialStatementAbstract(tafCode) {
            const response = await sendRequest(
                \`${backendUrl}/tafahomInformations/\${tafCode}/finantialStatementAbstracts?tafCode=\${tafCode}\`,
                "GET"
            );
            return response.data.content
        }
        async function getResourcesAndExpensesByTafCode(tafCode) {
            const response = await sendRequest(
                \`${backendUrl}/tafahomInformations/\${params.archiveNumber}/resourcesAndExpensess?tafCode=\${tafCode}\`,
                "GET"
            );
            return response.data.content
        }
        async function getFinantialInformationByTafCode(tafCode) {
            const response = await sendRequest(
                \`${backendUrl}/tafahomInformations/\${params.archiveNumber}/finantialInformations?tafCode=\${tafCode}\`,
                "GET"
            );
            return response.data.content
        }
        async function getTasParameterByTafCode(tafCode) {
            const response = await sendRequest(
                \`${backendUrl}/tasParameters?tafCode=\${tafCode}\`,
                "GET",
            );
            return response.data.content
        }
        // async function getCustomerLifeCycleValue(interval, extCustId) {
        //     const response = await sendRequest(
        //         \`${backendUrl}/clv\`,
        //         "POST",
        //         {
        //             // intervalCode: 10,
        //             // customerNumber: 161012161250
        //             intervalCode: interval,
        //             customerNumber: extCustId
        //         }
        //     );
        //     if (typeof response.data == 'undefined') {
        //         response.data = {
        //             customerName: '',
        //             customerGeneralTypeTitle: '',
        //             customerCode: '',
        //             groupBenefitTitle: '',
        //             yearlyGroupBenefitTitle: '',
        //             oldYearlyGroupBenefitTitle: '',
        //             valueFromBeginningYear: ''
        //         }
        //     }
        //     return response.data
        // }
        if (Object.keys(tafahomInformation).length > 0) {
            setDownloadStatus('downloading')
            const year = getJalaliDateGregorianFormat(fakeAuthProvider.getCredential().date, { year: '2-digit' })
            const month = getJalaliDateGregorianFormat(fakeAuthProvider.getCredential().date, { month: '2-digit' })
            Promise.all([
                getCustomerAccounts(),
                getSelectedCustomers(),
                getCollateral(tafahomInformation['seri']),
                getFinantialStatementAbstract(tafCode),
                getResourcesAndExpensesByTafCode(tafCode),
                getFinantialInformationByTafCode(tafCode),
                getTasParameterByTafCode(tafCode),
                // getCustomerLifeCycleValue(\`\${year}\${month}\`, tafahomInformation['extCustId'])
            ]).then((response) => {

                const customerAccounts = response[0].content.length > 0
                    ? response[0].content
                    : [{
                        accNo: 0,
                        accTypeCode: 0,
                        accTypeTitle: '',
                        average: null,
                        balance: 0,
                        branchCode: 0,
                        branchName: '',
                        categoryCode: 0,
                        createDate: 0,
                        custType: 0,
                        extAccNo: 0,
                        extCustId: 0,
                        furm: null,
                        idColumn: 0,
                        intCustId: 0,
                        nationalCode: 0,
                        ownerName: '',
                        status: '',
                        statusCode: 0,
                        statusDate: 0,
                        tafCode: 0,
                        tarjihiRate: 0
                    }]

                const customerUniqueAccounts = customerAccounts.filter((value, index, array) =>
                    index === array.findIndex(item => (item.extCustId === value.extCustId))
                )
                validateAccounts(customerUniqueAccounts)

                const selectedCustomers = response[1].content

                const collaterals = response[2].length > 0
                    ? response[2]
                    : [{
                        facilityAllocationAmount: 0,
                        commitmentAllocationAmount: 0,
                        collatreralGrpTypId: 0,
                    }]
                const finantialStatementAbstractTemp = response[3].length > 0
                    ? response[3][response[3].length - 1]
                    : {
                        asnadeDaryaftani: 0,
                        asnadePardakhtani: 0,
                        bahayeTamamShode: 0,
                        bedehiJari: 0,
                        date: '',
                        foroush: 0,
                        idColumn: '',
                        jameHoghough: 0,
                        jameKolJari: 0,
                        jameKolSabet: 0,
                        mizanBedehi: 0,
                        mojoudiNaghdi: 0,
                        mojoudiSherkat: 0,
                        nesbateAni: 0,
                        nesbateJari: 0,
                        nesbateMalekane: 0,
                        pishPardakht: 0,
                        samayegozariBoland: 0,
                        samayegozariKotah: 0,
                        sarmayeDarGardesh: 0,
                        sarmayeSabti: 0,
                        soudeKhales: 0,
                        soudeNakhales: 0,
                        tafCode: '',
                        tashilatBolandModat: 0,
                        tashilatKotahModat: 0,
                    }
                const finantialStatementAbstract = {
                    ...finantialStatementAbstractTemp,
                    asnadeDaryaftani: finantialStatementAbstractTemp.asnadeDaryaftani == null ? 0 : finantialStatementAbstractTemp.asnadeDaryaftani,
                    asnadePardakhtani: finantialStatementAbstractTemp.asnadePardakhtani == null ? 0 : finantialStatementAbstractTemp.asnadePardakhtani,
                    bahayeTamamShode: finantialStatementAbstractTemp.bahayeTamamShode == null ? 0 : finantialStatementAbstractTemp.bahayeTamamShode,
                    bedehiJari: finantialStatementAbstractTemp.bedehiJari == null ? 0 : finantialStatementAbstractTemp.bedehiJari,
                    date: '',
                    foroush: finantialStatementAbstractTemp.foroush == null ? 0 : finantialStatementAbstractTemp.foroush,
                    idColumn: '',
                    jameHoghough: finantialStatementAbstractTemp.jameHoghough == null ? 0 : finantialStatementAbstractTemp.jameHoghough,
                    jameKolJari: finantialStatementAbstractTemp.jameKolJari == null ? 0 : finantialStatementAbstractTemp.jameKolJari,
                    jameKolSabet: finantialStatementAbstractTemp.jameKolSabet == null ? 0 : finantialStatementAbstractTemp.jameKolSabet,
                    mizanBedehi: finantialStatementAbstractTemp.mizanBedehi == null ? 0 : finantialStatementAbstractTemp.mizanBedehi,
                    mojoudiNaghdi: finantialStatementAbstractTemp.mojoudiNaghdi == null ? 0 : finantialStatementAbstractTemp.mojoudiNaghdi,
                    mojoudiSherkat: finantialStatementAbstractTemp.mojoudiSherkat == null ? 0 : finantialStatementAbstractTemp.mojoudiSherkat,
                    nesbateAni: finantialStatementAbstractTemp.nesbateAni == null ? 0 : finantialStatementAbstractTemp.nesbateAni,
                    nesbateJari: finantialStatementAbstractTemp.nesbateJari == null ? 0 : finantialStatementAbstractTemp.nesbateJari,
                    nesbateMalekane: finantialStatementAbstractTemp.nesbateMalekane == null ? 0 : finantialStatementAbstractTemp.nesbateMalekane,
                    pishPardakht: finantialStatementAbstractTemp.pishPardakht == null ? 0 : finantialStatementAbstractTemp.pishPardakht,
                    samayegozariBoland: finantialStatementAbstractTemp.samayegozariBoland == null ? 0 : finantialStatementAbstractTemp.samayegozariBoland,
                    samayegozariKotah: finantialStatementAbstractTemp.samayegozariKotah == null ? 0 : finantialStatementAbstractTemp.samayegozariKotah,
                    sarmayeDarGardesh: finantialStatementAbstractTemp.sarmayeDarGardesh == null ? 0 : finantialStatementAbstractTemp.sarmayeDarGardesh,
                    sarmayeSabti: finantialStatementAbstractTemp.sarmayeSabti == null ? 0 : finantialStatementAbstractTemp.sarmayeSabti,
                    soudeKhales: finantialStatementAbstractTemp.soudeKhales == null ? 0 : finantialStatementAbstractTemp.soudeKhales,
                    soudeNakhales: finantialStatementAbstractTemp.soudeNakhales == null ? 0 : finantialStatementAbstractTemp.soudeNakhales,
                    tafCode: '',
                    tashilatBolandModat: finantialStatementAbstractTemp.tashilatBolandModat == null ? 0 : finantialStatementAbstractTemp.tashilatBolandModat,
                    tashilatKotahModat: finantialStatementAbstractTemp.tashilatKotahModat == null ? 0 : finantialStatementAbstractTemp.tashilatKotahModat,
                }
                const resourcesAndExpensesTemp = response[4].length > 0
                    ?
                    response[4][response[4].length - 1]
                    : {
                        date: '',
                        idColumn: 0,
                        manabePishbini: 0,
                        pishbiniMasaref: 0,
                        pishbiniTahodat: 0,
                        tafCode: 0,
                    }
                const resourcesAndExpenses = {
                    ...resourcesAndExpensesTemp,
                    date: '',
                    idColumn: 0,
                    manabePishbini: resourcesAndExpensesTemp.manabePishbini == null ? 0 : resourcesAndExpensesTemp.manabePishbini,
                    pishbiniMasaref: resourcesAndExpensesTemp.pishbiniMasaref == null ? 0 : resourcesAndExpensesTemp.pishbiniMasaref,
                    pishbiniTahodat: resourcesAndExpensesTemp.pishbiniTahodat == null ? 0 : resourcesAndExpensesTemp.pishbiniTahodat,
                    tafCode: 0,
                }
                const finantialInformationTemp = response[5].length > 0
                    ?
                    response[5][response[5].length - 1]
                    : {
                        asnadeDaryaftani: 0,
                        asnadePardakhtani: 0,
                        bahayeTamamshode: 0,
                        bedehiBolandModat: 0,
                        bedehiJari: 0,
                        daraeiGheireJari: 0,
                        daraeiJari: 0,
                        daraeiSabet: 0,
                        date: '',
                        foroushKhales: 0,
                        hesabhayeDaryaftani: 0,
                        hesabhayePardakhtani: 0,
                        hoghoughSaheban: 0,
                        idColumn: '',
                        mojoudiKala: 0,
                        mojoudiNaghd: 0,
                        sarmayeDarGardesh: 0,
                        sarmayeGozariKotahModat: 0,
                        tafCode: '',
                    }
                const finantialInformation = {
                    ...finantialInformationTemp,
                    asnadeDaryaftani: finantialInformationTemp.asnadeDaryaftani == null ? 0 : finantialInformationTemp.asnadeDaryaftani,
                    asnadePardakhtani: finantialInformationTemp.asnadePardakhtani == null ? 0 : finantialInformationTemp.asnadePardakhtani,
                    bahayeTamamshode: finantialInformationTemp.bahayeTamamshode == null ? 0 : finantialInformationTemp.bahayeTamamshode,
                    bedehiBolandModat: finantialInformationTemp.bedehiBolandModat == null ? 0 : finantialInformationTemp.bedehiBolandModat,
                    bedehiJari: finantialInformationTemp.bedehiJari == null ? 0 : finantialInformationTemp.bedehiJari,
                    daraeiGheireJari: finantialInformationTemp.daraeiGheireJari == null ? 0 : finantialInformationTemp.daraeiGheireJari,
                    daraeiJari: finantialInformationTemp.daraeiJari == null ? 0 : finantialInformationTemp.daraeiJari,
                    daraeiSabet: finantialInformationTemp.daraeiSabet == null ? 0 : finantialInformationTemp.daraeiSabet,
                    foroushKhales: finantialInformationTemp.foroushKhales == null ? 0 : finantialInformationTemp.foroushKhales,
                    hesabhayeDaryaftani: finantialInformationTemp.hesabhayeDaryaftani == null ? 0 : finantialInformationTemp.hesabhayeDaryaftani,
                    hesabhayePardakhtani: finantialInformationTemp.hesabhayePardakhtani == null ? 0 : finantialInformationTemp.hesabhayePardakhtani,
                    hoghoughSaheban: finantialInformationTemp.hoghoughSaheban == null ? 0 : finantialInformationTemp.hoghoughSaheban,
                    mojoudiKala: finantialInformationTemp.mojoudiKala == null ? 0 : finantialInformationTemp.mojoudiKala,
                    mojoudiNaghd: finantialInformationTemp.mojoudiNaghd == null ? 0 : finantialInformationTemp.mojoudiNaghd,
                    sarmayeDarGardesh: finantialInformationTemp.sarmayeDarGardesh == null ? 0 : finantialInformationTemp.sarmayeDarGardesh,
                    sarmayeGozariKotahModat: finantialInformationTemp.sarmayeGozariKotahModat == null ? 0 : finantialInformationTemp.sarmayeGozariKotahModat,
                }
                const tasParametersTemp = response[6].length > 0
                    ? response[6][response[6].length - 1]
                    : {
                        configDate: '',
                        gardeshIRate: 0,
                        gharzAccHadNaghdinegi: 0,
                        gharzAccJayezeSeporde: 0,
                        gharzAccNerkheGhanooni: 0,
                        gharzAccSudJayeze: 0,
                        gharzWageRate: 0,
                        jariAccDolatiNerkheGhanooni: 0,
                        jariAccHadNaghdinegi: 0,
                        jariAccJayezeSeporde: 0,
                        jariAccNerkheGhanooni: 0,
                        jariAccSudJayeze: 0,
                        jariDolatiAccSudJayeze: 0,
                        jariDolatiHadNaghdinegi: 0,
                        longAccHadNaghdinegi: 0,
                        longAccJayezeSeporde: 0,
                        longAccNerkheGhanooni: 0,
                        longAccSudJayeze: 0,
                        mashkoukCostCoefficient: 0,
                        shortAccAdiSudJayeze: 0,
                        shortAccHadNaghdinegi: 0,
                        shortAccJayezeSeporde: 0,
                        shortAccNerkheGhanooni: 0,
                        shortAccTarjihiHadNaghdinegi: 0,
                        shortAccTarjihiNerkheGhanooni: 0,
                        shortAccTarjihiSudJayeze: 0,
                        shortAccVijeHadNaghdinegi: 0,
                        shortAccVizheJayezeSeporde: 0,
                        shortAccVizheNerkheGhanooni: 0,
                        tadrijiIRate: 0,
                        uniqueCode: 0,
                        vizheKhadamatSudJayeze: 0,
                    }
                const tasParameters = {
                    ...tasParametersTemp,
                    configDate: '',
                    gardeshIRate: tasParametersTemp.gardeshIRate == null ? 0 : tasParametersTemp.gardeshIRate,
                    gharzAccHadNaghdinegi: tasParametersTemp.gharzAccHadNaghdinegi == null ? 0 : tasParametersTemp.gharzAccHadNaghdinegi,
                    gharzAccJayezeSeporde: tasParametersTemp.gharzAccJayezeSeporde == null ? 0 : tasParametersTemp.gharzAccJayezeSeporde,
                    gharzAccNerkheGhanooni: tasParametersTemp.gharzAccNerkheGhanooni == null ? 0 : tasParametersTemp.gharzAccNerkheGhanooni,
                    gharzAccSudJayeze: tasParametersTemp.gharzAccSudJayeze == null ? 0 : tasParametersTemp.gharzAccSudJayeze,
                    gharzWageRate: tasParametersTemp.gharzWageRate == null ? 0 : tasParametersTemp.gharzWageRate,
                    jariAccDolatiNerkheGhanooni: tasParametersTemp.jariAccDolatiNerkheGhanooni == null ? 0 : tasParametersTemp.jariAccDolatiNerkheGhanooni,
                    jariAccHadNaghdinegi: tasParametersTemp.jariAccHadNaghdinegi == null ? 0 : tasParametersTemp.jariAccHadNaghdinegi,
                    jariAccJayezeSeporde: tasParametersTemp.jariAccJayezeSeporde == null ? 0 : tasParametersTemp.jariAccJayezeSeporde,
                    jariAccNerkheGhanooni: tasParametersTemp.jariAccNerkheGhanooni == null ? 0 : tasParametersTemp.jariAccNerkheGhanooni,
                    jariAccSudJayeze: tasParametersTemp.jariAccSudJayeze == null ? 0 : tasParametersTemp.jariAccSudJayeze,
                    jariDolatiAccSudJayeze: tasParametersTemp.jariDolatiAccSudJayeze == null ? 0 : tasParametersTemp.jariDolatiAccSudJayeze,
                    jariDolatiHadNaghdinegi: tasParametersTemp.jariDolatiHadNaghdinegi == null ? 0 : tasParametersTemp.jariDolatiHadNaghdinegi,
                    longAccHadNaghdinegi: tasParametersTemp.longAccHadNaghdinegi == null ? 0 : tasParametersTemp.longAccHadNaghdinegi,
                    longAccJayezeSeporde: tasParametersTemp.longAccJayezeSeporde == null ? 0 : tasParametersTemp.longAccJayezeSeporde,
                    longAccNerkheGhanooni: tasParametersTemp.longAccNerkheGhanooni == null ? 0 : tasParametersTemp.longAccNerkheGhanooni,
                    longAccSudJayeze: tasParametersTemp.longAccSudJayeze == null ? 0 : tasParametersTemp.longAccSudJayeze,
                    mashkoukCostCoefficient: tasParametersTemp.mashkoukCostCoefficient == null ? 0 : tasParametersTemp.mashkoukCostCoefficient,
                    shortAccAdiSudJayeze: tasParametersTemp.shortAccAdiSudJayeze == null ? 0 : tasParametersTemp.shortAccAdiSudJayeze,
                    shortAccHadNaghdinegi: tasParametersTemp.shortAccHadNaghdinegi == null ? 0 : tasParametersTemp.shortAccHadNaghdinegi,
                    shortAccJayezeSeporde: tasParametersTemp.shortAccJayezeSeporde == null ? 0 : tasParametersTemp.shortAccJayezeSeporde,
                    shortAccNerkheGhanooni: tasParametersTemp.shortAccNerkheGhanooni == null ? 0 : tasParametersTemp.shortAccNerkheGhanooni,
                    shortAccTarjihiHadNaghdinegi: tasParametersTemp.shortAccTarjihiHadNaghdinegi == null ? 0 : tasParametersTemp.shortAccTarjihiHadNaghdinegi,
                    shortAccTarjihiNerkheGhanooni: tasParametersTemp.shortAccTarjihiNerkheGhanooni == null ? 0 : tasParametersTemp.shortAccTarjihiNerkheGhanooni,
                    shortAccTarjihiSudJayeze: tasParametersTemp.shortAccTarjihiSudJayeze == null ? 0 : tasParametersTemp.shortAccTarjihiSudJayeze,
                    shortAccVijeHadNaghdinegi: tasParametersTemp.shortAccVijeHadNaghdinegi == null ? 0 : tasParametersTemp.shortAccVijeHadNaghdinegi,
                    shortAccVizheJayezeSeporde: tasParametersTemp.shortAccVizheJayezeSeporde == null ? 0 : tasParametersTemp.shortAccVizheJayezeSeporde,
                    shortAccVizheNerkheGhanooni: tasParametersTemp.shortAccVizheNerkheGhanooni == null ? 0 : tasParametersTemp.shortAccVizheNerkheGhanooni,
                    tadrijiIRate: tasParametersTemp.tadrijiIRate == null ? 0 : tasParametersTemp.tadrijiIRate,
                    uniqueCode: tasParametersTemp.uniqueCode == null ? 0 : tasParametersTemp.uniqueCode,
                    vizheKhadamatSudJayeze: tasParametersTemp.vizheKhadamatSudJayeze == null ? 0 : tasParametersTemp.vizheKhadamatSudJayeze,
                }
                const customerLifeCycleValue = {
                  customerGeneralTypeTitle: tafahomInformation.registerNo == 0 ? 'حقیقی' : 'حقوقی',
                  customerCode: tafahomInformation.extCustId,
                  groupBenefitTitle: '-',
                  yearlyGroupBenefitTitle: '-',
                  oldyearlyGroupBenefitTitle: '-',
                  valueFromBeginningYear: 0
                }
                
                // const customerLifeCycleValue = {
                //     ...response[7],
                //     customerGeneralTypeTitle: tafahomInformation.registerNo == 0 ? 'حقیقی' : 'حقوقی'
                // }

                // const lending = response[4].length == 1
                //     ? response[4][response[4].length - 1]
                //     : {
                //         idColumn: 1,
                //         lastReportDate: 308,
                //         lendingReport: null,
                //         tafCode: 1,
                //         totalPrpslId: '-',
                //         totalFcltyAmnt: '-',
                //         totalStat: '-',
                //     };
                // const commitment = response[5].length > 0
                //     ? response[5][response[5].length - 1]
                //     : {
                //         arzLcTotalAmnt: "",
                //         arzLgTotalAmnt: "",
                //         commitmentsRpt: null,
                //         idColumn: '',
                //         lastReportDate: "",
                //         rialLcTotalAmnt: null,
                //         rialLgTotalAmnt: "",
                //         tafCode: '',
                //         totalCntrcts: "",
                //     }

                //  *** Average  *** 
                // .catch(err => {
                //     setMessage(err)
                //     setDownloadStatus('error');
                // })

                // return customerUniqueAccounts;
                // let customerAccountsResponse = response[1]
                // let customerUniqueAccounts;
                // if (typeof response[1].content != 'undefined' && response[1].content.length > 0) {
                //     customerUniqueAccounts = customerAccountsResponse.content.filter((value, index, array) =>
                //         index === array.findIndex(item => (item.extCustId === value.extCustId))
                //     )
                //     return customerUniqueAccounts
                // } else {
                //     throw ('مشتری فاقد حساب تعریف شده می باشد')
                // };
                return {
                    customerUniqueAccounts: customerUniqueAccounts,
                    selectedCustomers: selectedCustomers,
                    collaterals: collaterals,
                    finantialStatementAbstract: finantialStatementAbstract,
                    resourcesAndExpenses: resourcesAndExpenses,
                    finantialInformation: finantialInformation,
                    tasParameters: tasParameters,
                    customerLifeCycleValue: customerLifeCycleValue
                }
            }).then(validatedResponse => {
                //  *** Collateral  *** 
                let facilityAllocationTotalAmount = 0
                let commitmentAllocationTotalAmount = 0

                let naghdGrpTotalAmnt = 0
                let gheireManghoolGrpTotalAmnt = 0
                let sayerGrpTotalAmnt = 0
                let bedouneVasigheGrpTotalAmnt = 0
                validatedResponse.collaterals.map(coll => {
                    facilityAllocationTotalAmount += +coll.facilityAllocationAmount
                    commitmentAllocationTotalAmount += +coll.commitmentAllocationAmount
                    switch (coll.collatreralGrpTypId) {
                        case 342:
                            naghdGrpTotalAmnt += coll.facilityAllocationAmount + coll.commitmentAllocationAmount
                            break;
                        case 343:
                            gheireManghoolGrpTotalAmnt += coll.facilityAllocationAmount + coll.commitmentAllocationAmount
                            break;
                        case 344:
                            sayerGrpTotalAmnt += coll.facilityAllocationAmount + coll.commitmentAllocationAmount
                            break;
                        case 345:
                            bedouneVasigheGrpTotalAmnt += coll.facilityAllocationAmount + coll.commitmentAllocationAmount
                            break;
                        default:
                            break;
                    }
                })
                const collateralResult = { naghdGrpTotalAmnt: naghdGrpTotalAmnt, gheireManghoolGrpTotalAmnt: gheireManghoolGrpTotalAmnt, sayerGrpTotalAmnt: sayerGrpTotalAmnt, bedouneVasigheGrpTotalAmnt: bedouneVasigheGrpTotalAmnt }
                const { collaterals, ...rest } = validatedResponse
                return {
                    ...rest,
                    collateralResult: collateralResult
                }
            }).then(withCollateral => {
                //  *** Lending  *** 
                let intCustIds = ''
                if (withCollateral.selectedCustomers.length > 0) {
                    withCollateral.selectedCustomers[withCollateral.selectedCustomers.length - 1].includedCustomerIntCustId.split(',').map((customer, index) => {
                        const end = index < withCollateral.selectedCustomers[withCollateral.selectedCustomers.length - 1].includedCustomerIntCustId.split(',').length - 1 ? ';' : ''
                        intCustIds += \`\${customer}\${end}\`
                    })
                } else {
                    intCustIds = null
                }
                getLending(
                    removeSlashFromDate(tafahomInformation.startDate),
                    // 14030204,
                    removeSlashFromDate(tafahomInformation.expireDate),
                    // 14011229,
                    tafahomInformation.seri,
                    // 14001724622,
                    intCustIds
                ).then(response => {
                    let totalPrpslId = response.length
                    let totalFcltyamnt = 0
                    let totalStat = 0
                    let filterData = response.map(lending => {
                        totalFcltyamnt += lending.fcltyamnt;
                        totalStat += lending.sts
                    })
                    const lendingRialResult = { totalPrpslId: totalPrpslId, totalFcltyAmnt: totalFcltyamnt, totalStat: totalStat }
                    return { ...withCollateral, lendingRialResult: lendingRialResult };
                }).then(withLending => {
                    //  *** Commitment  *** 
                    if (withLending.selectedCustomers.length > 0) {
                        // try {
                        const startDate = removeSlashFromDate(tafahomInformation.startDate);
                        const expireDate = removeSlashFromDate(tafahomInformation.expireDate);
                        Promise.all([
                            getRialLG(tafahomInformation.intCustId, startDate, expireDate),
                            getArzLG(tafahomInformation.intCustId, startDate, expireDate),
                            getRialLC(tafahomInformation.intCustId, startDate, expireDate),
                            getArzLC(1, tafahomInformation.intCustId, startDate, expireDate),
                            getArzLC(2, tafahomInformation.intCustId, startDate, expireDate)
                        ]).then(mainCustomer => {
                            let totalPrpslIdArz = mainCustomer[4].length
                            let totalFcltyAmntArz = 0
                            let totalStatArz = 0
                            mainCustomer[4].map(lendingArz => {
                                totalFcltyAmntArz += lendingArz.cntrctAmnt;
                                totalStatArz += lendingArz.mandehTahodat
                            })
                            Promise.all(
                              withLending.selectedCustomers.length == 0 ||  withLending.selectedCustomers[withLending.selectedCustomers.length - 1].includedCustomerIntCustId == ''
                              ? [Promise.resolve(3)]
                              : withLending.selectedCustomers[withLending.selectedCustomers.length - 1].includedCustomerIntCustId.split(',').map(async customer => {
                                    // if (!!customer.intCustId) {
                                    if (!!customer) {
                                        // const intCustId = customer.intCustId;
                                        const intCustId = customer;
                                        return [
                                            // await getRialLG(20059046, 14020606, 14020707),
                                            // await getArzLG(52364, 14020606, 14020707),
                                            // await getRialLC(28063662, 14020606, 14020707),
                                            // await getArzLC(1, intCustId, startDate, expireDate)
                                            await getRialLG(intCustId, startDate, expireDate),
                                            await getArzLG(intCustId, startDate, expireDate),
                                            await getRialLC(intCustId, startDate, expireDate),
                                            await getArzLC(1, intCustId, startDate, expireDate)
                                        ]
                                    } else {
                                        throw ('شماره داخلی مشتری ثبت نشده است ')
                                    }
                                })
                            ).then((customers, index) => {
                                let total = 0
                                let rialLgTotalCntrcts = 0
                                let rialLgTotalAmnt = 0
                                let rialLgTotalMandeBedehi = 0
                                let arzLgTotalCntrcts = 0
                                let arzLgTotalAmnt = 0
                                let arzLgTotalMandeBedehi = 0
                                let rialLcTotalCntrcts = 0
                                let rialLcTotalAmnt = 0
                                let rialLcTotalMandeBedehi = 0
                                let arzLcTotalCntrcts = 0
                                let arzLcTotalAmnt = 0
                                let arzLcTotalMandeBedehi = 0
                                let tempRows = []
                                let tempFilterData = []

                                total += mainCustomer[0].length + mainCustomer[1].length + mainCustomer[2].length + mainCustomer[3].length
                                rialLgTotalCntrcts += mainCustomer[0].length
                                arzLgTotalCntrcts += mainCustomer[1].length
                                rialLcTotalCntrcts += mainCustomer[2].length
                                arzLcTotalCntrcts += mainCustomer[3].length

                                const result = extractCommitment(mainCustomer, null)
                                
                                rialLgTotalAmnt += result.rialLgTotalAmnt
                                rialLgTotalMandeBedehi += result.rialLgTotalMandeBedehi
                                arzLgTotalAmnt += result.arzLgTotalAmnt
                                arzLgTotalMandeBedehi += result.arzLgTotalMandeBedehi
                                rialLcTotalAmnt += result.rialLcTotalAmnt
                                rialLcTotalMandeBedehi += result.rialLcTotalMandeBedehi
                                arzLcTotalAmnt += result.arzLcTotalAmnt
                                arzLcTotalMandeBedehi += result.arzLcTotalMandeBedehi

                                customers.map((customerInfo, index) => {

                                    rialLgTotalCntrcts += customerInfo[0].length
                                    arzLgTotalCntrcts += customerInfo[1].length
                                    rialLcTotalCntrcts += customerInfo[2].length
                                    arzLcTotalCntrcts += customerInfo[3].length

                                    total += rialLgTotalCntrcts + arzLgTotalCntrcts + rialLcTotalCntrcts //+ arzLcTotalCntrcts

                                    const result = extractCommitment(customerInfo, null)
                                    rialLgTotalAmnt += result.rialLgTotalAmnt
                                    rialLgTotalMandeBedehi += result.rialLgTotalMandeBedehi
                                    arzLgTotalAmnt += result.arzLgTotalAmnt
                                    arzLgTotalMandeBedehi += result.arzLgTotalMandeBedehi
                                    rialLcTotalAmnt += result.rialLcTotalAmnt
                                    rialLcTotalMandeBedehi += result.rialLcTotalMandeBedehi
                                    arzLcTotalAmnt += result.arzLcTotalAmnt
                                    arzLcTotalMandeBedehi += result.arzLcTotalMandeBedehi

                                })

                                return {
                                    ...withLending,
                                    commitmentResult: {
                                        rialTotalCntrcts: rialLgTotalCntrcts + rialLcTotalCntrcts,
                                        rialTotalAmnt: rialLgTotalAmnt + rialLcTotalAmnt,
                                        rialTotalMandeBedehi: rialLgTotalMandeBedehi + rialLcTotalMandeBedehi,
                                        arzTotalCntrcts: arzLgTotalCntrcts + arzLcTotalCntrcts,
                                        arzTotalAmnt: arzLgTotalAmnt + arzLcTotalAmnt,
                                        arzTotalMandeBehdehi: arzLgTotalMandeBedehi + arzLcTotalMandeBedehi
                                    },
                                    lendingArzResult: {
                                        totalPrpslIdArz: totalPrpslIdArz,
                                        totalFcltyAmntArz: totalFcltyAmntArz,
                                        totalStatArz: totalStatArz
                                    }
                                }

                            }).then(withCommitment => {
                                //  *** Average  *** 
                                const [fromDate, toDate] = calculateAverageDates(tafahomInformation)
                                Promise.all(
                                    withCommitment.customerUniqueAccounts.map(
                                        async account => {
                                            return getAccountAverage(
                                                account['extAccNo'],
                                                fromDate,
                                                toDate,
                                                account['accTypeCode']
                                            )
                                        })
                                ).then(average => {
                                    const accountAverage = calculateAverage(withCommitment.customerUniqueAccounts, average)
                                    return {
                                        ...withCommitment,
                                        accountAverage: {
                                            rialAvg: accountAverage.jariAverage + accountAverage.jariDolati + accountAverage.gharzArziAverage + accountAverage.shortVije + accountAverage.shortTarjihi + accountAverage.shortNormal + accountAverage.longYearAverage + accountAverage.longAverage,
                                            arzAvg: accountAverage.jariArziAverage + accountAverage.gharzArziAverage + accountAverage.shortArziAverage + accountAverage.longArziAverage,

                                            jariAverage: accountAverage.jariAverage,
                                            jariDolati: accountAverage.jariDolati,
                                            gharzAverage: accountAverage.gharzAverage,
                                            shortNormal: accountAverage.shortNormal,
                                            shortVije: accountAverage.shortVije,
                                            shortTarjihi: accountAverage.shortTarjihi,
                                            longYearAverage: accountAverage.longYearAverage,
                                            longAverage: accountAverage.longAverage
                                        }
                                    }
                                }).then(result => {
                                const customerRialResourceAvg = result.accountAverage.rialAvg
                                const customerArzResourceAvg = result.accountAverage.arzAvg
                                const collateral = result.collateralResult
                                const commitment = result.commitmentResult
                                const finantialInformation = result.finantialInformation
                                const finantialStatementAbstract = result.finantialStatementAbstract
                                const lendingRial = result.lendingRialResult
                                const lendingArz = result.lendingArzResult
                                const resourcesAndExpenses = result.resourcesAndExpenses
                                const tasParameter = result.tasParameters
                                const customerLifeCycleValue = result.customerLifeCycleValue

                                const jariAverage = result.accountAverage.jariAverage
                                const jariDolati = result.accountAverage.jariDolati
                                const gharzAverage = result.accountAverage.gharzAverage
                                const shortNormal = result.accountAverage.shortNormal
                                const shortVije = result.accountAverage.shortVije
                                const shortTarjihi = result.accountAverage.shortTarjihi
                                const longYearAverage = result.accountAverage.longYearAverage
                                const longAverage = result.accountAverage.longAverage

                                const soudPardakhtiJariAmnt = jariAverage * tasParameter.jariAccSudJayeze
                                const soudPardakhtiShortNormalAmnt = shortNormal * tasParameter.shortAccAdiSudJayeze
                                const soudPardakhtiShortVijeAmnt = shortVije * tasParameter.vizheKhadamatSudJayeze
                                const soudPardakhtiShortTarjihiAmnt = shortTarjihi * tasParameter.shortAccTarjihiSudJayeze
                                const soudPardakhtiGharzAmnt = gharzAverage * tasParameter.gharzAccSudJayeze
                                const soudPardakhtiLongYearAmnt = longYearAverage * tasParameter.longAccSudJayeze
                                const soudPardakhtiJariDolatiAmnt = jariDolati * tasParameter.jariDolatiAccSudJayeze
                                const soudPardakhtiTotalAmnt = soudPardakhtiJariAmnt + soudPardakhtiShortNormalAmnt + soudPardakhtiShortVijeAmnt + soudPardakhtiShortTarjihiAmnt + soudPardakhtiGharzAmnt + soudPardakhtiLongYearAmnt + soudPardakhtiJariDolatiAmnt

                                const sepordeGhanouniJariAmnt = jariAverage * tasParameter.jariAccNerkheGhanooni
                                const sepordeGhanouniShortNormalAmnt = shortNormal * tasParameter.shortAccNerkheGhanooni
                                const sepordeGhanouniShortVijeAmnt = shortVije * tasParameter.shortAccVizheNerkheGhanooni
                                const sepordeGhanouniShortTarjihiAmnt = shortTarjihi * tasParameter.shortAccTarjihiNerkheGhanooni
                                const sepordeGhanouniGharzAmnt = gharzAverage * tasParameter.gharzAccNerkheGhanooni
                                const sepordeGhanouniLongYearAmnt = longYearAverage * tasParameter.longAccNerkheGhanooni
                                const sepordeGhanouniJariDolatiAmnt = jariDolati * tasParameter.jariAccDolatiNerkheGhanooni
                                const sepordeGhanouniTotalAmnt = sepordeGhanouniJariAmnt + sepordeGhanouniShortNormalAmnt + sepordeGhanouniShortVijeAmnt + sepordeGhanouniShortTarjihiAmnt + sepordeGhanouniGharzAmnt + sepordeGhanouniLongYearAmnt + sepordeGhanouniJariDolatiAmnt

                                const jayezeSepordeGhanouniJariAmnt = sepordeGhanouniJariAmnt * tasParameter.jariAccJayezeSeporde
                                const jayezeSepordeGhanouniShortNormalAmnt = sepordeGhanouniShortNormalAmnt * tasParameter.shortAccJayezeSeporde
                                const jayezeSepordeGhanouniShortVijeAmnt = sepordeGhanouniShortVijeAmnt * tasParameter.shortAccVizheJayezeSeporde
                                const jayezeSepordeGhanouniShortTarjihiAmnt = sepordeGhanouniShortTarjihiAmnt * 0
                                const jayezeSepordeGhanouniGharzAmnt = sepordeGhanouniGharzAmnt * tasParameter.gharzAccJayezeSeporde
                                const jayezeSepordeGhanouniLongYearAmnt = sepordeGhanouniLongYearAmnt * tasParameter.longAccJayezeSeporde
                                const jayezeSepordeGhanouniJariDolatiAmnt = sepordeGhanouniJariDolatiAmnt * 0
                                const jayezeSepordeGhanouniTotalAmnt = jayezeSepordeGhanouniJariAmnt + jayezeSepordeGhanouniShortNormalAmnt + jayezeSepordeGhanouniShortVijeAmnt + jayezeSepordeGhanouniGharzAmnt + jayezeSepordeGhanouniLongYearAmnt

                                const hadeNaghdinegiJariAmnt = jariAverage * tasParameter.jariAccHadNaghdinegi
                                const hadeNaghdinegiShortNormalAmnt = shortNormal * tasParameter.shortAccHadNaghdinegi
                                const hadeNaghdinegiShortVijeAmnt = shortVije * tasParameter.shortAccVijeHadNaghdinegi
                                const hadeNaghdinegiShortTarjihiAmnt = shortTarjihi * tasParameter.shortAccTarjihiHadNaghdinegi
                                const hadeNaghdinegiGharzAmnt = gharzAverage * tasParameter.gharzAccHadNaghdinegi
                                const hadeNaghdinegiLongYearAmnt = longYearAverage * tasParameter.longAccHadNaghdinegi
                                const hadeNaghdinegiJariDolatiAmnt = jariDolati * tasParameter.jariDolatiHadNaghdinegi
                                const hadeNaghdinegiTotalAmnt = hadeNaghdinegiJariAmnt + hadeNaghdinegiShortNormalAmnt + hadeNaghdinegiShortVijeAmnt + hadeNaghdinegiShortTarjihiAmnt + hadeNaghdinegiGharzAmnt + hadeNaghdinegiLongYearAmnt + hadeNaghdinegiJariDolatiAmnt

                                const freeResourceJariAmnt = jariAverage - sepordeGhanouniJariAmnt - hadeNaghdinegiJariAmnt
                                const freeResourceShortNormalAmnt = shortNormal - sepordeGhanouniShortNormalAmnt - hadeNaghdinegiShortNormalAmnt
                                const freeResourceShortVijeAmnt = shortVije - sepordeGhanouniShortVijeAmnt - hadeNaghdinegiShortVijeAmnt
                                const freeResourceShortTarjihiAmnt = shortTarjihi - sepordeGhanouniShortTarjihiAmnt - hadeNaghdinegiShortTarjihiAmnt
                                const freeResourceGharzAmnt = gharzAverage - sepordeGhanouniGharzAmnt - hadeNaghdinegiGharzAmnt
                                const freeResourceLongYearAmnt = longYearAverage - sepordeGhanouniLongYearAmnt - hadeNaghdinegiLongYearAmnt
                                const freeResourceJariDolatiAmnt = jariDolati - sepordeGhanouniJariDolatiAmnt - hadeNaghdinegiJariDolatiAmnt
                                const freeResourceTotalAmnt = freeResourceJariAmnt + freeResourceShortNormalAmnt + freeResourceShortVijeAmnt + freeResourceShortTarjihiAmnt + freeResourceGharzAmnt + freeResourceLongYearAmnt + freeResourceJariDolatiAmnt

                                const freeResourceMosharekatiTadrijiAmnt = ((freeResourceTotalAmnt - freeResourceGharzAmnt) * 20) / 100
                                let temp = ((1 + (((tasParameter.tadrijiIRate * 1) / 1200))) ** 12)
                                temp = parseInt(freeResourceMosharekatiTadrijiAmnt * tasParameter.tadrijiIRate) / 100
                                const freeResourceMosharekatiTadrijiSoudAmnt = ((temp * 12) - freeResourceMosharekatiTadrijiAmnt)
                                const freeResourceMosharekatiSarmayeDarGardeshAmnt = ((freeResourceTotalAmnt - freeResourceGharzAmnt) * 80) / 100
                                const freeResourceMosharekatiSarmayeDarGardeshSoudAmnt = (freeResourceMosharekatiSarmayeDarGardeshAmnt * tasParameter.gardeshIRate) / 100
                                const freeResourceGharzKarmozdAmnt = (freeResourceGharzAmnt * tasParameter.gharzWageRate) / 100
                                const totalSoudAmnt = freeResourceMosharekatiTadrijiSoudAmnt + freeResourceMosharekatiSarmayeDarGardeshSoudAmnt + freeResourceGharzKarmozdAmnt + jayezeSepordeGhanouniTotalAmnt
                                const mashkoukCost = tasParameter.mashkoukCostCoefficient * freeResourceTotalAmnt
                                const totalCostAmnt = mashkoukCost + soudPardakhtiTotalAmnt
                                const ayedi = totalSoudAmnt - totalCostAmnt
                                const nlpRatio = ((lendingRial.totalStat + lendingArz.totalStatArz) / (lendingRial.totalFcltyAmnt + lendingArz.totalFcltyAmntArz)) * 100

                                setFeed((prevState) => (
                                    {
                                        ...prevState,
                                        columns: [],
                                        rows: [
                                            {
                                                customerName: data.columns[46].title,
                                                customerGeneralTypeTitle: data.columns[47].title,
                                                customerCode: data.columns[48].title,
                                                customerRegisterCode: data.columns[49].title,
                                                groupBenefitTitle: data.columns[50].title,
                                                yearlyGroupBenefitTitle: data.columns[51].title,
                                                oldYearlyGroupBenefitTitle: data.columns[52].title,
                                                valueFromBeginningYear: data.columns[53].title,
                                                lable1: '',
                                                lable2: '',
                                                lable3: ''
                                            },
                                            {
                                                customerName: tafahomInformation.customerName,
                                                customerGeneralTypeTitle: customerLifeCycleValue.customerGeneralTypeTitle,
                                                customerCode: customerLifeCycleValue.customerCode,
                                                customerRegisterCode: tafahomInformation.registerNo,
                                                groupBenefitTitle: customerLifeCycleValue.groupBenefitTitle,
                                                yearlyGroupBenefitTitle: customerLifeCycleValue.yearlyGroupBenefitTitle,
                                                oldYearlyGroupBenefitTitle: customerLifeCycleValue.oldyearlyGroupBenefitTitle,
                                                valueFromBeginningYear: customerLifeCycleValue.valueFromBeginningYear,
                                                lable1: '',
                                                lable2: '',
                                                lable3: ''
                                            },
                                            {
                                                sarmayeSherkatGroup: data.columns[0].title,
                                                sarmayeSabti: data.columns[1].title,
                                                foroush: data.columns[2].title,
                                                bahayeTamamShode: data.columns[3].title,
                                                jameKolJari: data.columns[4].title,
                                                jameKolSabet: data.columns[5].title,
                                                mojoudiSherkat: data.columns[6].title,
                                                mojoudiNaghdi: data.columns[7].title,
                                                samayegozariKotah: data.columns[8].title,
                                                samayegozariBoland: data.columns[9].title,
                                                pishPardakht: data.columns[10].title,
                                            },
                                            {
                                                sarmayeSherkatGroup: addCommas(finantialInformation.sarmayeDarGardesh),
                                                sarmayeSabti: addCommas(finantialStatementAbstract.sarmayeSabti),
                                                foroush: addCommas(finantialStatementAbstract.foroush),
                                                bahayeTamamShode: addCommas(finantialStatementAbstract.bahayeTamamShode),
                                                jameKolJari: addCommas(finantialStatementAbstract.jameKolJari),
                                                jameKolSabet: addCommas(finantialStatementAbstract.jameKolSabet),
                                                mojoudiSherkat: addCommas(finantialStatementAbstract.mojoudiSherkat),
                                                mojoudiNaghdi: addCommas(finantialStatementAbstract.mojoudiNaghdi),
                                                samayegozariKotah: addCommas(finantialStatementAbstract.samayegozariKotah),
                                                samayegozariBoland: addCommas(finantialStatementAbstract.samayegozariBoland),
                                                pishPardakht: addCommas(finantialStatementAbstract.pishPardakht),
                                            },
                                            {
                                                asnadeDaryaftani: data.columns[11].title,
                                                asnadePardakhtani: data.columns[12].title,
                                                jameHoghough: data.columns[13].title,
                                                mizanBedehi: data.columns[14].title,
                                                sarmayeDarGardesh: data.columns[15].title,
                                                tashilatKotahModat: data.columns[16].title,
                                                tashilatBolandModat: data.columns[17].title,
                                                soudeNakhales: data.columns[18].title,
                                                soudeKhales: data.columns[19].title,
                                                lable1: '',
                                                lable2: '',
                                            },
                                            {
                                                asnadeDaryaftani: addCommas(finantialStatementAbstract.asnadeDaryaftani),
                                                asnadePardakhtani: addCommas(finantialStatementAbstract.asnadePardakhtani),
                                                jameHoghough: addCommas(finantialStatementAbstract.jameHoghough),
                                                mizanBedehi: addCommas(finantialStatementAbstract.mizanBedehi),
                                                sarmayeDarGardesh: addCommas(finantialStatementAbstract.sarmayeDarGardesh),
                                                tashilatKotahModat: addCommas(finantialStatementAbstract.tashilatKotahModat),
                                                tashilatBolandModat: addCommas(finantialStatementAbstract.tashilatBolandModat),
                                                soudeNakhales: addCommas(finantialStatementAbstract.soudeNakhales),
                                                soudeKhales: addCommas(finantialStatementAbstract.soudeKhales),
                                                lable1: '',
                                                lable2: '',
                                            },
                                            {
                                                rialResourceAvg: data.columns[20].title,
                                                arzResourceAvg: data.columns[21].title,
                                                rialFacilityContractCount: data.columns[22].title,
                                                totalRialFacility: data.columns[23].title,
                                                rialMotalebatMande: data.columns[24].title,
                                                arzFacilityContractCount: data.columns[25].title,
                                                totalArzFacility: data.columns[26].title,
                                                arzMotalebatMande: data.columns[27].title,
                                                colateralType: '', // data.columns[28].title,
                                                colateralSum: '', // data.columns[29].title,
                                                lable1: '',
                                            },
                                            {
                                                rialResourceAvg: addCommas(customerRialResourceAvg),
                                                arzResourceAvg: addCommas(customerArzResourceAvg),
                                                rialFacilityContractCount: lendingRial.totalPrpslId,
                                                totalRialFacility: addCommas(lendingRial.totalFcltyAmnt),
                                                rialMotalebatMande: addCommas(lendingRial.totalStat),
                                                arzFacilityContractCount: lendingArz.totalPrpslIdArz,
                                                totalArzFacility: addCommas(lendingArz.totalFcltyAmntArz),
                                                arzMotalebatMande: addCommas(lendingArz.totalStatArz),
                                                colateralType: '',
                                                colateralSum: '',
                                                lable1: '',
                                            },
                                            {
                                                collateralLongShortAccount: data.columns[28].title,
                                                collateralGheirManghol: data.columns[29].title,
                                                collateralStock: data.columns[30].title,
                                                collateralLazemolEjra: data.columns[31].title,
                                                resourceCostBenefit: data.columns[32].title,
                                                lable1: '',
                                                lable2: '',
                                                lable3: '',
                                                lable4: '',
                                                lable5: '',
                                                lable6: '',
                                            },
                                            {
                                                collateralLongShortAccount: addCommas(collateral.naghdGrpTotalAmnt),
                                                collateralGheirManghol: addCommas(collateral.gheireManghoolGrpTotalAmnt),
                                                collateralStock: addCommas(collateral.sayerGrpTotalAmnt),
                                                collateralLazemolEjra: addCommas(collateral.bedouneVasigheGrpTotalAmnt),
                                                resourceCostBenefit: addCommas(ayedi),
                                                lable1: '',
                                                lable2: '',
                                                lable3: '',
                                                lable4: '',
                                                lable5: '',
                                                lable6: '',
                                            },
                                            {
                                                rialCommitmentContractCount: data.columns[33].title,
                                                rialCommitmentSum: data.columns[34].title,
                                                rialCommitmentBedehi: data.columns[35].title,
                                                arziCommitmentContractCount: data.columns[36].title,
                                                arziCommitmentSum: data.columns[37].title,
                                                arziCommitmentBedehi: data.columns[38].title,
                                                lable1: '',
                                                lable2: '',
                                                lable3: '',
                                                lable4: '',
                                                lable5: '',
                                            },
                                            {
                                                rialCommitmentContractCount: Number(commitment.rialTotalCntrcts),
                                                rialCommitmentSum: addCommas(commitment.rialTotalAmnt),
                                                rialCommitmentBedehi: addCommas(commitment.rialTotalMandeBedehi),
                                                arziCommitmentContractCount: Number(commitment.arzTotalCntrcts),
                                                arziCommitmentSum: addCommas(commitment.arzTotalAmnt),
                                                arziCommitmentBedehi: addCommas(commitment.arzTotalMandeBehdehi),
                                                lable1: '',
                                                lable2: '',
                                                lable3: '',
                                                lable4: '',
                                                lable5: '',
                                            },
                                            {
                                                resourceForecast: data.columns[39].title,
                                                expenseForecast: data.columns[40].title,
                                                commitmentForecast: data.columns[41].title,
                                                nlpRatio: data.columns[42].title,
                                                lable1: '',
                                                lable2: '',
                                                lable3: '',
                                                lable4: '',
                                                lable5: '',
                                                lable6: '',
                                                lable7: '',
                                            },
                                            {
                                                resourceForecast: addCommas(resourcesAndExpenses.manabePishbini),
                                                expenseForecast: addCommas(resourcesAndExpenses.pishbiniMasaref),
                                                commitmentForecast: addCommas(resourcesAndExpenses.pishbiniTahodat),
                                                nlpRatio: addCommas(nlpRatio),
                                                lable1: '',
                                                lable2: '',
                                                lable3: '',
                                                lable4: '',
                                                lable5: '',
                                                lable6: '',
                                                lable7: '',
                                            },
                                            {
                                                malekaneRatio: data.columns[43].title,
                                                jariRatio: data.columns[44].title,
                                                AniRatio: data.columns[45].title,
                                                lable1: '',
                                                lable2: '',
                                                lable3: '',
                                                lable4: '',
                                                lable5: '',
                                                lable6: '',
                                                lable7: '',
                                                lable8: '',
                                            },
                                            {
                                                malekaneRatio: addCommas(finantialStatementAbstract.nesbateMalekane),
                                                jariRatio: addCommas(finantialStatementAbstract.nesbateJari),
                                                AniRatio: addCommas(finantialStatementAbstract.nesbateAni),
                                                lable1: '',
                                                lable2: '',
                                                lable3: '',
                                                lable4: '',
                                                lable5: '',
                                                lable6: '',
                                                lable7: '',
                                                lable8: '',
                                            }
                                        ],
                                        headerData:
                                            JSON.parse(\`{
                                                "\${data.columns[46].title}":"پورتال تفاهم نامه های بانک ملت",
                                                "\${data.columns[47].title}":"\${''}",
                                                "\${data.columns[48].title}":"\${''}",
                                                "\${data.columns[49].title}":"\${''}",
                                                "\${data.columns[50].title}":"\${data.reportTitle}",
                                                "\${data.columns[51].title}":"\${''}",
                                                "\${data.columns[52].title}":"\${''}",
                                                "\${data.columns[53].title}":"\${''}",
                                                "":"",
                                                "":"",
                                                "":"\${todayFa.dayWeek + todayFa.day + todayFa.monthTitle + ' '+ todayFa.year}"
                                              }\`),
                                        filterData: [
                                            JSON.parse(\`{
                                                "\${data.columns[46].title}":"\${tafahomInformation.customerName}",
                                                "\${data.columns[47].title}":"\${customerLifeCycleValue.customerGeneralTypeTitle}",
                                                "\${data.columns[48].title}":"\${customerLifeCycleValue.customerCode}",
                                                "\${data.columns[49].title}":"\${tafahomInformation.registerNo}",
                                                "\${data.columns[50].title}":"\${customerLifeCycleValue.groupBenefitTitle}",
                                                "\${data.columns[51].title}":"\${customerLifeCycleValue.yearlyGroupBenefitTitle}",
                                                "\${data.columns[52].title}":"\${customerLifeCycleValue.oldyearlyGroupBenefitTitle}",
                                                "\${data.columns[53].title}":"\${customerLifeCycleValue.valueFromBeginningYear}",
                                                "":"",
                                                "":"",
                                                "":""
                                            }\`),
                                            JSON.parse(\`{
                                                "\${data.columns[46].title}":"\${data.columns[0].title}",
                                                "\${data.columns[47].title}":"\${data.columns[1].title}",
                                                "\${data.columns[48].title}":"\${data.columns[2].title}",
                                                "\${data.columns[49].title}":"\${data.columns[3].title}",
                                                "\${data.columns[50].title}":"\${data.columns[4].title}",
                                                "\${data.columns[51].title}":"\${data.columns[5].title}",
                                                "\${data.columns[52].title}":"\${data.columns[6].title}",
                                                "\${data.columns[53].title}":"\${data.columns[7].title}",
                                                "":"\${data.columns[8].title}",
                                                "":"\${data.columns[9].title}",
                                                "":"\${data.columns[10].title}"
                                            }\`),
                                            JSON.parse(\`{
                                                "\${data.columns[46].title}":"\${addCommas(finantialInformation.sarmayeDarGardesh)}",
                                                "\${data.columns[47].title}":"\${addCommas(finantialStatementAbstract.sarmayeSabti)}",
                                                "\${data.columns[48].title}":"\${addCommas(finantialStatementAbstract.foroush)}",
                                                "\${data.columns[49].title}":"\${addCommas(finantialStatementAbstract.bahayeTamamShode)}",
                                                "\${data.columns[50].title}":"\${addCommas(finantialStatementAbstract.jameKolJari)}",
                                                "\${data.columns[51].title}":"\${addCommas(finantialStatementAbstract.jameKolSabet)}",
                                                "\${data.columns[52].title}":"\${addCommas(finantialStatementAbstract.mojoudiSherkat)}",
                                                "\${data.columns[53].title}":"\${addCommas(finantialStatementAbstract.mojoudiNaghdi)}",
                                                "":"\${addCommas(finantialStatementAbstract.samayegozariKotah)}",
                                                "":"\${addCommas(finantialStatementAbstract.samayegozariBoland)}",
                                                "":"\${addCommas(finantialStatementAbstract.pishPardakht)}"
                                            }\`),
                                            JSON.parse(\`{
                                                "\${data.columns[46].title}":"\${data.columns[11].title}",
                                                "\${data.columns[47].title}":"\${data.columns[12].title}",
                                                "\${data.columns[48].title}":"\${data.columns[13].title}",
                                                "\${data.columns[49].title}":"\${data.columns[14].title}",
                                                "\${data.columns[50].title}":"\${data.columns[15].title}",
                                                "\${data.columns[51].title}":"\${data.columns[16].title}",
                                                "\${data.columns[52].title}":"\${data.columns[17].title}",
                                                "\${data.columns[53].title}":"\${data.columns[18].title}",
                                                "":"\${data.columns[19].title}",
                                                "":"",
                                                "":""
                                            }\`),
                                            JSON.parse(\`{
                                                "\${data.columns[46].title}":"\${addCommas(finantialStatementAbstract.asnadeDaryaftani)}",
                                                "\${data.columns[47].title}":"\${addCommas(finantialStatementAbstract.asnadePardakhtani)}",
                                                "\${data.columns[48].title}":"\${addCommas(finantialStatementAbstract.jameHoghough)}",
                                                "\${data.columns[49].title}":"\${addCommas(finantialStatementAbstract.mizanBedehi)}",
                                                "\${data.columns[50].title}":"\${addCommas(finantialStatementAbstract.sarmayeDarGardesh)}",
                                                "\${data.columns[51].title}":"\${addCommas(finantialStatementAbstract.tashilatKotahModat)}",
                                                "\${data.columns[52].title}":"\${addCommas(finantialStatementAbstract.tashilatBolandModat)}",
                                                "\${data.columns[53].title}":"\${addCommas(finantialStatementAbstract.soudeNakhales)}",
                                                "":"\${addCommas(finantialStatementAbstract.soudeKhales)}",
                                                "":"",
                                                "":""
                                            }\`),
                                            JSON.parse(\`{
                                                "\${data.columns[46].title}":"\${data.columns[20].title}",
                                                "\${data.columns[47].title}":"\${data.columns[21].title}",
                                                "\${data.columns[48].title}":"\${data.columns[22].title}",
                                                "\${data.columns[49].title}":"\${data.columns[23].title}",
                                                "\${data.columns[50].title}":"\${data.columns[24].title}",
                                                "\${data.columns[51].title}":"\${data.columns[25].title}",
                                                "\${data.columns[52].title}":"\${data.columns[26].title}",
                                                "\${data.columns[53].title}":"\${data.columns[27].title}",
                                                "":"",
                                                "":"",
                                                "":""
                                            }\`),
                                            JSON.parse(\`{
                                                "\${data.columns[46].title}":"\${addCommas(customerRialResourceAvg)}",
                                                "\${data.columns[47].title}":"\${addCommas(customerArzResourceAvg)}",
                                                "\${data.columns[48].title}":"\${lendingRial.totalPrpslId}",
                                                "\${data.columns[49].title}":"\${addCommas(lendingRial.totalFcltyAmnt)}",
                                                "\${data.columns[50].title}":"\${addCommas(lendingRial.totalStat)}",
                                                "\${data.columns[51].title}":"\${lendingArz.totalPrpslIdArz}",
                                                "\${data.columns[52].title}":"\${addCommas(lendingArz.totalFcltyAmntArz)}",
                                                "\${data.columns[53].title}":"\${addCommas(lendingArz.totalStatArz)}",
                                                "":"",
                                                "":"",
                                                "":""
                                            }\`),
                                            JSON.parse(\`{
                                                "\${data.columns[46].title}":"\${data.columns[28].title}",
                                                "\${data.columns[47].title}":"\${data.columns[29].title}",
                                                "\${data.columns[48].title}":"\${data.columns[30].title}",
                                                "\${data.columns[49].title}":"\${data.columns[31].title}",
                                                "\${data.columns[50].title}":"\${data.columns[32].title}",
                                                "":"",
                                                "":"",
                                                "":"",
                                                "":"",
                                                "":"",
                                                "":""
                                            }\`),
                                            JSON.parse(\`{
                                                "\${data.columns[46].title}":"\${addCommas(collateral.naghdGrpTotalAmnt)}",
                                                "\${data.columns[47].title}":"\${addCommas(collateral.gheireManghoolGrpTotalAmnt)}",
                                                "\${data.columns[48].title}":"\${addCommas(collateral.sayerGrpTotalAmnt)}",
                                                "\${data.columns[49].title}":"\${addCommas(collateral.bedouneVasigheGrpTotalAmnt)}",
                                                "\${data.columns[50].title}":"\${addCommas(ayedi)}",
                                                "":"",
                                                "":"",
                                                "":"",
                                                "":"",
                                                "":"",
                                                "":""
                                            }\`),
                                            JSON.parse(\`{
                                                "\${data.columns[46].title}":"\${data.columns[33].title}",
                                                "\${data.columns[47].title}":"\${data.columns[34].title}",
                                                "\${data.columns[48].title}":"\${data.columns[35].title}",
                                                "\${data.columns[49].title}":"\${data.columns[36].title}",
                                                "\${data.columns[50].title}":"\${data.columns[37].title}",
                                                "\${data.columns[51].title}":"\${data.columns[38].title}",
                                                "\${data.columns[52].title}":"",
                                                "\${data.columns[53].title}":"",
                                                "":"",
                                                "":"",
                                                "":""
                                            }\`),
                                            JSON.parse(\`{
                                                "\${data.columns[46].title}":"\${Number(commitment.rialTotalCntrcts)}",
                                                "\${data.columns[47].title}":"\${addCommas(commitment.rialTotalAmnt)}",
                                                "\${data.columns[48].title}":"\${addCommas(commitment.rialTotalMandeBedehi)}",
                                                "\${data.columns[49].title}":"\${Number(commitment.arzTotalCntrcts)}",
                                                "\${data.columns[50].title}":"\${addCommas(commitment.arzTotalAmnt)}",
                                                "\${data.columns[51].title}":"\${addCommas(commitment.arzTotalMandeBehdehi)}",
                                                "\${data.columns[52].title}":"",
                                                "\${data.columns[53].title}":"",
                                                "":"",
                                                "":"",
                                                "":""
                                            }\`),
                                            JSON.parse(\`{
                                                "\${data.columns[46].title}":"\${data.columns[39].title}",
                                                "\${data.columns[47].title}":"\${data.columns[40].title}",
                                                "\${data.columns[48].title}":"\${data.columns[41].title}",
                                                "\${data.columns[49].title}":"\${data.columns[42].title}",
                                                "\${data.columns[50].title}":"",
                                                "\${data.columns[51].title}":"",
                                                "\${data.columns[52].title}":"",
                                                "\${data.columns[53].title}":"",
                                                "":"",
                                                "":"",
                                                "":""
                                            }\`),
                                            JSON.parse(\`{
                                                "\${data.columns[46].title}":"\${addCommas(resourcesAndExpenses.manabePishbini)}",
                                                "\${data.columns[47].title}":"\${addCommas(resourcesAndExpenses.pishbiniMasaref)}",
                                                "\${data.columns[48].title}":"\${addCommas(resourcesAndExpenses.pishbiniTahodat)}",
                                                "\${data.columns[49].title}":"\${addCommas(nlpRatio)}",
                                                "\${data.columns[50].title}":"",
                                                "\${data.columns[51].title}":"",
                                                "\${data.columns[52].title}":"",
                                                "\${data.columns[53].title}":"",
                                                "":"",
                                                "":"",
                                                "":""
                                            }\`),
                                            JSON.parse(\`{
                                                "\${data.columns[46].title}":"\${data.columns[43].title}",
                                                "\${data.columns[47].title}":"\${data.columns[44].title}",
                                                "\${data.columns[48].title}":"\${data.columns[45].title}",
                                                "\${data.columns[49].title}":"",
                                                "\${data.columns[50].title}":"",
                                                "\${data.columns[51].title}":"",
                                                "\${data.columns[52].title}":"",
                                                "\${data.columns[53].title}":"",
                                                "":"",
                                                "":"",
                                                "":""
                                            }\`),
                                            JSON.parse(\`{
                                                "\${data.columns[46].title}":"\${addCommas(finantialStatementAbstract.nesbateMalekane)}",
                                                "\${data.columns[47].title}":"\${addCommas(finantialStatementAbstract.nesbateJari)}",
                                                "\${data.columns[48].title}":"\${addCommas(finantialStatementAbstract.nesbateAni)}",
                                                "\${data.columns[49].title}":"",
                                                "\${data.columns[50].title}":"",
                                                "\${data.columns[51].title}":"",
                                                "\${data.columns[52].title}":"",
                                                "\${data.columns[53].title}":"",
                                                "":"",
                                                "":"",
                                                "":""
                                            }\`),
                                        ]
                                    }))
                                setDownloadStatus('completed')
                            }).catch(error => {
                                    setMessage('خطا در محاسبه معدل حساب های تفاهم نامه')
                                    setDownloadStatus('error')
                                })
                            }).catch(err => {
                                setMessage('خطا در واکشی اطلاعات تعهدات  مشتریان زیرمجموعه تفاهم نامه')
                                setDownloadStatus('error')
                            })
                        }).catch(error => {
                            setMessage('خطا در واکشی اطلاعات تعهدات  متقاضی اصلی تفاهم نامه')
                            setDownloadStatus('error')
                        })
                    } else {
                        commitmentResult = {
                            rialLgTotalCntrcts: 0,
                            rialLgTotalAmnt: 0,
                            rialLgTotalMandeBedehi: 0,

                            arzLgTotalCntrcts: 0,
                            arzLgTotalAmnt: 0,
                            arzLgTotalMandeBedehi: 0,

                            rialLcTotalCntrcts: 0,
                            rialLcTotalAmnt: 0,
                            rialLcTotalMandeBedehi: 0,

                            arzLcTotalCntrcts: 0,
                            arzLcTotalAmnt: 0,
                            arzLcTotalMandeBedehi: 0
                        }
                    }
                }).catch(error => {
                    setMessage('خطا در واکشی اطلاعات تسهیلات اعطايی ازمحل تفاهم نامه')
                    setDownloadStatus('error')
                })
            }).catch(err => {
                setMessage(err)
                setDownloadStatus('error');
            })
        }
    }, [tafahomInformation])

    const columnObject = [
        { title: 'extCustId', lable: 'شماره مشتری', backgroundColor: 'E7E7E7', width: '10', fontSize: '', fontWeight: '', textBody: '' },
        { title: 'ownerName', lable: 'نام خانوادگی/ نام', backgroundColor: 'E7E7E7', width: '20', fontSize: '', fontWeight: '', textBody: '' },
        { title: 'nationalCode', lable: 'کدملی', backgroundColor: '', width: 'E7E7E7', fontSize: '10', fontWeight: '', textBody: '' },
        { title: '', lable: 'انتخاب مشتری', backgroundColor: 'E7E7E7', width: '10', fontSize: '', fontWeight: '', textBody: '' },
    ]

    return isVisible
        ?
        (
            <>
                {
                    message.length > 0
                        ?
                        <Message message={message} />
                        :
                        <>
                            {downloadStatus == 'downloading'
                                ?
                                <Message message={"درحال دانلود اطلاعات"} />
                                :
                                <>
                                    <Report
                                        id="uniqueCode"
                                        name="uniqueCode"
                                        data={feed}
                                        filterData={feed.filterData}
                                        onRowClick={handleRowClick}
                                        disabled={false}
                                        isVisible={true}
                                        mode={"report"}
                                        pageSize={[20]}
                                        hasRowNumber={false}
                                    />
                                </>
                            }
                        </>
                }
            </>
        )
        :
        (
            <div className="col"></div>
        )
}`;
  createFile(`${reportsPath}`, `${'customerProfileRpt'}.jsx`, injectedContent);

  /********************************************************************************
  *                        performanceRpt Component file
  ********************************************************************************/
  //  dataSource, placeholder, autocomplete, numOfLines
  injectedContent = `import React, { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import { sendRequest } from '../../../util/makeRequest';
import { fakeAuthProvider } from "../../../auth";
import { Report } from "../report/Report";
import { Message } from "../message/Message";
import { getJalaliDateGregorianFormat, removeSlashFromDate, addDaysToUtcDate, convertUtc2Date, getTodayDate } from "../../../util/Date";
import { calculateAverage, validateAccounts, validateTafahomInformation, validateTafahomInformation4TafState } from '../../../util/Validation';
import { extractCommitment } from "../../../util/reportLogic";
import { addCommas } from "@persian-tools/persian-tools";

export const PerformanceRpt = ({ id, name, type, value, onChangeStatus, onBlur, placeholder, lable, data, tafCode, disabled, autocomplete, isVisible }) => {
  let jariBalance = 0
  let gharzBalance = 0
  let shortBalance = 0
  let longBalance = 0
  let govahiBalance = 0

  let jariArziBalance = 0
  let gharzArziBalance = 0
  let shortArziBalance = 0
  let longArziBalance = 0

  const params = useParams();
  const [downloadStatus, setDownloadStatus] = useState('initial')
  const [feed, setFeed] = useState(data)
  const [message, setMessage] = useState('')

  const handleRowClick = (row) => { }
  const todayFa = getTodayDate()

  const [tafahomInformation, setTafahomInformation] = useState({});

  const calculateAverageDates = (tafahomInformation) => {
    const todayUTc = fakeAuthProvider.getCredential().date

    const newStartUTc = addDaysToUtcDate(todayUTc, -tafahomInformation.avgDay)
    const tmpDateObjec = convertUtc2Date(newStartUTc)
    const fromDate = \`\${tmpDateObjec.year}\${tmpDateObjec.month}\${tmpDateObjec.day}\`

    const tmpTodayDateObject = convertUtc2Date(todayUTc)
    const toDate = \`\${tmpTodayDateObject.year}\${tmpTodayDateObject.month}\${tmpTodayDateObject.day}\`

    return [fromDate, toDate]

  }
  const validateState = (tafahomInformation) => {
    let flag = false
    let msg = \`\`
    if (flag == false) { if (!tafahomInformation.archiveNumber > 0) { flag = true; msg = \`شماره آرشیو مقداردهی نشده است\`; setErrorCode(1401); setMessage(\`شماره آرشیو مقداردهی نشده است\`) } }
    if (flag == false) { if (!tafahomInformation.tafCode > 0) { flag = true; msg = \`کدتفاهم نامه مقداردهی نشده است\`; setErrorCode(1402); setMessage(\`کدتفاهم نامه مقداردهی نشده است\`) } }
    if (flag == false) { if (tafahomInformation.extCustId == null || !typeof tafahomInformation.extCustId == 'number') { flag = true; msg = \`شماره مشتری/سازمان مقداردهی نشده است\`; setErrorCode(1412); setMessage(\`شماره مشتری/سازمان مقداردهی نشده است\`) } }
    if (flag == true) {
      throw (msg)
    }
  }

  useEffect(() => {
    async function getTafahomInformation() {
      const response = await sendRequest(
        \`${backendUrl}/tafahomInformations/\${params.archiveNumber}\`,
        "GET",
      );
      return response.data
    }
    if (tafCode > 0) {
      getTafahomInformation()
        .then(response => {
          const tafahomInformation = response.content[0];
          validateState(tafahomInformation)
          if (typeof tafahomInformation == 'undefined' || tafahomInformation.length <= 0) {
            throw ('مشتری فاقد تفاهم نامه تعریف شده می باشد')
          };
          validateTafahomInformation4TafState(tafahomInformation)
          setTafahomInformation(tafahomInformation)
        }).catch(error => setMessage(error))
    }
  }, [tafCode])

  useEffect(() => {
    if (Object.keys(tafahomInformation).length > 0) {
      async function getTafahomInformation() {
        const response = await sendRequest(
          \`${backendUrl}/tafahomInformations/\${params.archiveNumber}\`,
          "GET",
        );
        return response.data
      }
      async function getCustomerAccounts() {
        const response = await sendRequest(
          \`${backendUrl}/tafahomInformations/\${params.archiveNumber}/accounts\${'?tafCode=' + tafCode}\`,
          "GET",
        )
        return response.data
      }
      async function getAccountAverage(extAccNo, startDate, expireDAte, accTypeCode) {
        const response = await sendRequest(
          \`${backendUrl}/accountAverages\`,
          "POST",
          {
            "fromDate": startDate,
            "toDate": expireDAte,
            "accNo": extAccNo,
            "envCode": 0,
            "userId": "tafahom"
          }
        );
        return { ...response.data[0], accTypeCode }
      }
      async function getGovahiEmzas(intCustId) {
        const response = await sendRequest(
          \`${backendUrl}/getGovahiEmzas\`,
          "POST",
          {
            "intCustId": intCustId
          }
        );
        return response.data
      }
      async function getSelectedCustomers() {
        const response = await sendRequest(
          \`${backendUrl}/tafahomInformations/\${params.archiveNumber}/customerWithHadSaghfs\${'?tafCode=' + tafCode}\`,
          "GET",
        );
        return response.data
      }
      async function getLending(startDate, expireDate, seri, intCustIds) {
        const response = await sendRequest(
          \`${backendUrl}/lendings\`,
          "POST",
          {
            startDate: startDate,
            expireDate: expireDate,
            seri: seri,
            intCustIds: intCustIds
          }
        );
        return response.data
      }
      async function getResourcesAndExpensesByTafCode(tafCode) {
        const response = await sendRequest(
          \`${backendUrl}/tafahomInformations/\${params.archiveNumber}/resourcesAndExpensess?tafCode=\${tafCode}\`,
          "GET"
        );
        return response.data.content
      }
      async function getRialLG(intCustId, startDate, expireDate) {
        const response = await sendRequest(
          \`${backendUrl}/rialLetterOfGuaranties\${'?tafCode=' + tafCode}\`,
          "POST",
          {
            "usercd": "tafahom",
            "systemDT": 14030707,
            "intcstmrcd": intCustId,
            "fromdt": startDate,
            "todt": expireDate
          }
        )
        return response.data
      }
      async function getArzLG(intCustId, startDate, expireDate) {
        const response = await sendRequest(
          \`${backendUrl}/arzLetterOfGuaranties\${'?tafCode=' + tafCode}\`,
          "POST",
          {
            "intcstmrcd": intCustId,
            "fromdt": startDate,
            "todt": expireDate
          }
        )
        return response.data
      }
      async function getRialLC(intCustId, startDate, expireDate) {
        const response = await sendRequest(
          \`${backendUrl}/rialLetterOfCredits\`,
          "POST",
          {
            "intcstmrcd": intCustId,
            "fromdt": startDate,
            "todt": expireDate
          }
        )
        return response.data
      }
      async function getArzLC(repTyp, intCustId, startDate, expireDate) {
        const response = await sendRequest(
          \`${backendUrl}/arzLetterOfCredits\`,
          "POST",
          {
            "repTyp": repTyp,
            "intcstmrcd": intCustId,
            "fromdt": startDate,
            "todt": expireDate
          }
        )
        return response.data
      }
      try {
        setDownloadStatus('downloading')
        const year = getJalaliDateGregorianFormat(fakeAuthProvider.getCredential().date, { year: '2-digit' })
        const month = getJalaliDateGregorianFormat(fakeAuthProvider.getCredential().date, { month: '2-digit' })

        //  get customer's ALL account
        Promise.all([
          getCustomerAccounts(),
          getSelectedCustomers(),
          getResourcesAndExpensesByTafCode(tafCode),
        ]).then((response) => {

          const customerAccountResponse = response[0].content.length > 0
            ? response[0].content
            : [{
              accNo: 0,
              accTypeCode: 0,
              accTypeTitle: '',
              average: null,
              balance: 0,
              branchCode: 0,
              branchName: '',
              categoryCode: 0,
              createDate: 0,
              custType: 0,
              extAccNo: 0,
              extCustId: 0,
              furm: null,
              idColumn: 0,
              intCustId: 0,
              nationalCode: 0,
              ownerName: '',
              status: '',
              statusCode: 0,
              statusDate: 0,
              tafCode: 0,
              tarjihiRate: 0
            }]

          let customerUniqueAccounts;
          customerUniqueAccounts = customerAccountResponse.filter((value, index, array) =>
            index === array.findIndex(item => (item.extCustId === value.extCustId))
          )
          validateAccounts(customerUniqueAccounts)

          const selectedCustomers = response[1].content

          const resourcesAndExpensesTemp = response[2].length > 0
            ?
            response[2][response[2].length - 1]
            : {
              date: '',
              idColumn: 0,
              manabePishbini: 0,
              pishbiniMasaref: 0,
              pishbiniTahodat: 0,
              tafCode: 0,
            }
          const resourcesAndExpenses = {
            ...resourcesAndExpensesTemp,
            date: '',
            idColumn: 0,
            manabePishbini: resourcesAndExpensesTemp.manabePishbini == null ? 0 : resourcesAndExpensesTemp.manabePishbini,
            pishbiniMasaref: resourcesAndExpensesTemp.pishbiniMasaref == null ? 0 : resourcesAndExpensesTemp.pishbiniMasaref,
            pishbiniTahodat: resourcesAndExpensesTemp.pishbiniTahodat == null ? 0 : resourcesAndExpensesTemp.pishbiniTahodat,
            tafCode: 0,
          }

          return {
            customerUniqueAccounts: customerUniqueAccounts,
            selectedCustomers: selectedCustomers,
            resourcesAndExpenses: resourcesAndExpenses
          }
        })
          .then(validatedResponse => {
            Promise.all(
              validatedResponse['customerUniqueAccounts'].map(async account => {
                if (!!account.intCustId) {
                  const intCustId = account.intCustId;
                  return [
                    await getGovahiEmzas(intCustId),
                  ]
                }
              })
            ).then(govahiResponse => {
              let subGovahiEmza = 0
              govahiResponse.map(govahi => {
                subGovahiEmza += govahi[0].bndrem
              })
              return subGovahiEmza
            }).then(sumGovahiEmza => {
              setDownloadStatus('completed');
              govahiBalance = sumGovahiEmza
              validatedResponse['customerUniqueAccounts'].map(account => {
                if (account['accTypeCode'] > 100 && account['accTypeCode'] < 200) {
                  jariBalance += account['balance']
                } else if ((account['accTypeCode'] > 200 && account['accTypeCode'] < 300) || (account['accTypeCode'] > 700 && account['accTypeCode'] < 800)) {
                  gharzBalance += account['balance']
                } else if (account['accTypeCode'] > 300 && account['accTypeCode'] < 400) {
                  shortBalance += account['balance']
                } else if (account['accTypeCode'] > 400 && account['accTypeCode'] < 500) {
                  longBalance += account['balance']
                } else if (account['accTypeCode'] > 1100 && account['accTypeCode'] < 1200) {
                  jariArziBalance += account['balance']
                } else if (account['accTypeCode'] > 2200 && account['accTypeCode'] < 2300) {
                  gharzArziBalance += account['balance']
                } else if (account['accTypeCode'] > 3300 && account['accTypeCode'] < 3400) {
                  shortArziBalance += account['balance']
                } else if (account['accTypeCode'] > 4400 && account['accTypeCode'] < 4500) {
                  longArziBalance += account['balance']
                }
              })
              return {
                totalRialResourceAmnt: jariBalance + gharzBalance + shortBalance + longBalance + govahiBalance
              }
            }).then(totalRialResourceAmnt => {
              //  *** Lending  *** 
              let intCustIds = ''
              if (validatedResponse.selectedCustomers.length > 0) {
                validatedResponse.selectedCustomers[validatedResponse.selectedCustomers.length - 1].includedCustomerIntCustId.split(',').map((customer, index) => {
                  const end = index < validatedResponse.selectedCustomers[validatedResponse.selectedCustomers.length - 1].includedCustomerIntCustId.split(',').length - 1 ? ';' : ''
                  intCustIds += \`\${customer}\${end}\`
                })
              } else {
                intCustIds = null
              }
              getLending(
                removeSlashFromDate(tafahomInformation.startDate),
                // 14030204,
                removeSlashFromDate(tafahomInformation.expireDate),
                // 14011229,
                tafahomInformation.seri,
                // 14001724622,
                intCustIds
              ).then(response => {
                let totalPrpslId = response.length
                let totalFcltyamnt = 0
                let totalStat = 0
                let filterData = response.map(lending => {
                  totalFcltyamnt += lending.fcltyamnt;
                  totalStat += lending.sts
                })
                const lendingRialResult = { totalPrpslId: totalPrpslId, totalFcltyAmnt: totalFcltyamnt, totalStat: totalStat }
                return { lendingRialResult: lendingRialResult };
              }).then(withLending => {
                //  *** Commitment  *** 
                if (validatedResponse.selectedCustomers.length > 0) {
                  // try {
                  const startDate = removeSlashFromDate(tafahomInformation.startDate);
                  const expireDate = removeSlashFromDate(tafahomInformation.expireDate);
                  Promise.all([
                    getRialLG(tafahomInformation.intCustId, startDate, expireDate),
                    getArzLG(tafahomInformation.intCustId, startDate, expireDate),
                    getRialLC(tafahomInformation.intCustId, startDate, expireDate),
                    getArzLC(1, tafahomInformation.intCustId, startDate, expireDate),
                    getArzLC(2, tafahomInformation.intCustId, startDate, expireDate)
                  ]).then(mainCustomer => {
                    let totalPrpslIdArz = mainCustomer[4].length
                    let totalFcltyAmntArz = 0
                    let totalStatArz = 0
                    mainCustomer[4].map(lendingArz => {
                      totalFcltyAmntArz += lendingArz.cntrctAmnt;
                      totalStatArz += lendingArz.mandehTahodat
                    })
                    Promise.all(
                      validatedResponse.selectedCustomers.length == 0 || validatedResponse.selectedCustomers[validatedResponse.selectedCustomers.length - 1].includedCustomerIntCustId == ''
                        ? [Promise.resolve(3)]
                        : validatedResponse.selectedCustomers[validatedResponse.selectedCustomers.length - 1].includedCustomerIntCustId.split(',').map(async customer => {
                          // if (!!customer.intCustId) {
                          if (!!customer) {
                            // const intCustId = customer.intCustId;
                            const intCustId = customer;
                            return [
                              // await getRialLG(20059046, 14020606, 14020707),
                              // await getArzLG(52364, 14020606, 14020707),
                              // await getRialLC(28063662, 14020606, 14020707),
                              // await getArzLC(1, intCustId, startDate, expireDate)
                              await getRialLG(intCustId, startDate, expireDate),
                              await getArzLG(intCustId, startDate, expireDate),
                              await getRialLC(intCustId, startDate, expireDate),
                              await getArzLC(1, intCustId, startDate, expireDate)
                            ]
                          } else {
                            throw ('شماره داخلی مشتری ثبت نشده است ')
                          }
                        })
                    ).then((customers, index) => {
                      let total = 0
                      let rialLgTotalCntrcts = 0
                      let rialLgTotalAmnt = 0
                      let rialLgTotalMandeBedehi = 0
                      let arzLgTotalCntrcts = 0
                      let arzLgTotalAmnt = 0
                      let arzLgTotalMandeBedehi = 0
                      let rialLcTotalCntrcts = 0
                      let rialLcTotalAmnt = 0
                      let rialLcTotalMandeBedehi = 0
                      let arzLcTotalCntrcts = 0
                      let arzLcTotalAmnt = 0
                      let arzLcTotalMandeBedehi = 0
                      let tempRows = []
                      let tempFilterData = []

                      total += mainCustomer[0].length + mainCustomer[1].length + mainCustomer[2].length + mainCustomer[3].length
                      rialLgTotalCntrcts += mainCustomer[0].length
                      arzLgTotalCntrcts += mainCustomer[1].length
                      rialLcTotalCntrcts += mainCustomer[2].length
                      arzLcTotalCntrcts += mainCustomer[3].length

                      const result = extractCommitment(mainCustomer, null)

                      rialLgTotalAmnt += result.rialLgTotalAmnt
                      rialLgTotalMandeBedehi += result.rialLgTotalMandeBedehi
                      arzLgTotalAmnt += result.arzLgTotalAmnt
                      arzLgTotalMandeBedehi += result.arzLgTotalMandeBedehi
                      rialLcTotalAmnt += result.rialLcTotalAmnt
                      rialLcTotalMandeBedehi += result.rialLcTotalMandeBedehi
                      arzLcTotalAmnt += result.arzLcTotalAmnt
                      arzLcTotalMandeBedehi += result.arzLcTotalMandeBedehi

                      customers.map((customerInfo, index) => {

                        rialLgTotalCntrcts += customerInfo[0].length
                        arzLgTotalCntrcts += customerInfo[1].length
                        rialLcTotalCntrcts += customerInfo[2].length
                        arzLcTotalCntrcts += customerInfo[3].length

                        total += rialLgTotalCntrcts + arzLgTotalCntrcts + rialLcTotalCntrcts //+ arzLcTotalCntrcts

                        const result = extractCommitment(customerInfo, null)
                        rialLgTotalAmnt += result.rialLgTotalAmnt
                        rialLgTotalMandeBedehi += result.rialLgTotalMandeBedehi
                        arzLgTotalAmnt += result.arzLgTotalAmnt
                        arzLgTotalMandeBedehi += result.arzLgTotalMandeBedehi
                        rialLcTotalAmnt += result.rialLcTotalAmnt
                        rialLcTotalMandeBedehi += result.rialLcTotalMandeBedehi
                        arzLcTotalAmnt += result.arzLcTotalAmnt
                        arzLcTotalMandeBedehi += result.arzLcTotalMandeBedehi

                      })
                      return {
                        ...totalRialResourceAmnt,
                        ...withLending,
                        commitmentResult: {
                          rialTotalCntrcts: rialLgTotalCntrcts + rialLcTotalCntrcts,
                          rialTotalAmnt: rialLgTotalAmnt + rialLcTotalAmnt,
                          rialTotalMandeBedehi: rialLgTotalMandeBedehi + rialLcTotalMandeBedehi,
                          arzTotalCntrcts: arzLgTotalCntrcts + arzLcTotalCntrcts,
                          arzTotalAmnt: arzLgTotalAmnt + arzLcTotalAmnt,
                          arzTotalMandeBehdehi: arzLgTotalMandeBedehi + arzLcTotalMandeBedehi
                        },
                        lendingArzResult: {
                          totalPrpslIdArz: totalPrpslIdArz,
                          totalFcltyAmntArz: totalFcltyAmntArz,
                          totalStatArz: totalStatArz
                        }
                      }

                    }).then(withCommitment => {
                      //  *** Average  *** 
                      const [fromDate, toDate] = calculateAverageDates(tafahomInformation)
                      Promise.all(
                        validatedResponse.customerUniqueAccounts.map(
                          async account => {
                            return getAccountAverage(
                              account['extAccNo'],
                              fromDate,
                              toDate,
                              account['accTypeCode']
                            )
                          })
                      ).then(average => {
                        const accountAverage = calculateAverage(validatedResponse.customerUniqueAccounts, average)
                        return {
                          ...withCommitment,
                          accountAverage: {
                            rialAvg: accountAverage.jariAverage + accountAverage.jariDolati + accountAverage.gharzArziAverage + accountAverage.shortVije + accountAverage.shortTarjihi + accountAverage.shortNormal + accountAverage.longYearAverage + accountAverage.longAverage,
                            arzAvg: accountAverage.jariArziAverage + accountAverage.gharzArziAverage + accountAverage.shortArziAverage + accountAverage.longArziAverage,

                            jariAverage: accountAverage.jariAverage,
                            jariDolati: accountAverage.jariDolati,
                            gharzAverage: accountAverage.gharzAverage,
                            shortNormal: accountAverage.shortNormal,
                            shortVije: accountAverage.shortVije,
                            shortTarjihi: accountAverage.shortTarjihi,
                            longYearAverage: accountAverage.longYearAverage,
                            longAverage: accountAverage.longAverage
                          }
                        }
                      }).then(result => {
                        const commitment = result.commitmentResult
                        const lendingRial = result.lendingRialResult
                        const lendingArz = result.lendingArzResult
                        const resourcesAndExpenses = validatedResponse.resourcesAndExpenses
                        const rialResourceTotal = result.totalRialResourceAmnt
                        const lendingTotal = lendingRial.totalFcltyAmnt + lendingArz.totalFcltyAmntArz
                        const commitmentTotal = commitment.arzTotalAmnt + commitment.rialTotalAmnt

                        const manabePishbini = resourcesAndExpenses.manabePishbini
                        const pishbiniMasaref = resourcesAndExpenses.pishbiniMasaref
                        const pishbiniTahodat = resourcesAndExpenses.pishbiniTahodat

                        setFeed(prevState => ({
                          ...prevState,
                          rows: [{
                            title: 'مقدار محقق شده',
                            manabe: addCommas(rialResourceTotal),
                            masaref: addCommas(lendingTotal),
                            tahodat: addCommas(commitmentTotal)
                          },
                          {
                            title: 'مقدار پیش بینی شده',
                            manabe: addCommas(manabePishbini),
                            masaref: addCommas(pishbiniMasaref),
                            tahodat: addCommas(pishbiniTahodat)
                          },
                          {
                            title: 'کارآیی تفاهم نامه',
                            manabe: addCommas(rialResourceTotal / manabePishbini),
                            masaref: addCommas(lendingTotal / pishbiniMasaref),
                            tahodat: addCommas(commitmentTotal / pishbiniTahodat)
                          }],
                          headerData:
                            JSON.parse(\`{
                              "\${data.columns[0].title}":"پورتال تفاهم نامه های بانک ملت",
                              "\${data.columns[1].title}":"\${data.reportTitle}",
                              "\${data.columns[2].title}":"\${''}",
                              "\${data.columns[3].title}":"\${todayFa.dayWeek + todayFa.day + todayFa.monthTitle + ' '+ todayFa.year}"
                            }\`),
                          filterData: [
                            JSON.parse(\`{
                              "\${data.columns[0].title}":"مقدار محقق شده",
                              "\${data.columns[1].title}":"\${addCommas(rialResourceTotal)}",
                              "\${data.columns[2].title}":"\${addCommas(lendingTotal)}",
                              "\${data.columns[3].title}":"\${addCommas(commitmentTotal)}"
                            }\`),
                            JSON.parse(\`{
                            "\${data.columns[0].title}": "مقدار پیش بینی شده",
                            "\${data.columns[1].title}": "\${addCommas(manabePishbini)}",
                            "\${data.columns[2].title}": "\${addCommas(pishbiniMasaref)}",
                            "\${data.columns[3].title}": "\${addCommas(pishbiniTahodat)}"
                            }\`),
                            JSON.parse(\`{
                              "\${data.columns[0].title}": "کارآیی تفاهم نامه",
                              "\${data.columns[1].title}": "\${addCommas(rialResourceTotal / manabePishbini)}",
                              "\${data.columns[2].title}": "\${addCommas(lendingTotal / pishbiniMasaref)}",
                              "\${data.columns[3].title}": "\${addCommas(commitmentTotal / pishbiniTahodat)}"
                              }\`)
                          ]
                        }))
                        setDownloadStatus('completed')
                      }).catch(error => {
                        setMessage('خطا در محاسبه معدل حساب های تفاهم نامه')
                        setDownloadStatus('error')
                      })
                    }).catch(err => {
                      setMessage('خطا در واکشی اطلاعات تعهدات  مشتریان زیرمجموعه تفاهم نامه')
                      setDownloadStatus('error')
                    })
                  }).catch(error => {
                    setMessage('خطا در واکشی اطلاعات تعهدات  متقاضی اصلی تفاهم نامه')
                    setDownloadStatus('error')
                  })
                } else {
                  commitmentResult = {
                    rialLgTotalCntrcts: 0,
                    rialLgTotalAmnt: 0,
                    rialLgTotalMandeBedehi: 0,

                    arzLgTotalCntrcts: 0,
                    arzLgTotalAmnt: 0,
                    arzLgTotalMandeBedehi: 0,

                    rialLcTotalCntrcts: 0,
                    rialLcTotalAmnt: 0,
                    rialLcTotalMandeBedehi: 0,

                    arzLcTotalCntrcts: 0,
                    arzLcTotalAmnt: 0,
                    arzLcTotalMandeBedehi: 0
                  }
                }
              }).catch(error => {
                setMessage('خطا در واکشی اطلاعات تسهیلات اعطايی ازمحل تفاهم نامه')
                setDownloadStatus('error')
              })
            }).catch(err => { throw ('خطا در واکشی اطلاعات گواهی امضاء') })
          }).catch(err => {
            setMessage(err)
            setDownloadStatus('error');
          })
      } catch (error) {
      }
    }
  }, [tafahomInformation])

  return isVisible
    ?
    (
      <>
        {
          message.length > 0
            ?
            <Message message={message} />
            :
            <>
              {downloadStatus == 'downloading'
                ?
                <Message message={"درحال دانلود اطلاعات"} />
                :
                <>
                  <Report
                    id="uniqueCode"
                    name="uniqueCode"
                    data={feed}
                    filterData={feed.filterData}
                    onRowClick={handleRowClick}
                    disabled={false}
                    isVisible={true}
                    mode={"report"}
                  />
                </>
              }
            </>
        }
      </>
    )
    :
    (
      <div className="col"></div>
    )
}`
  createFile(`${reportsPath}`, `${'performanceRpt'}.jsx`, injectedContent);

}
module.exports = ClientProjectUIComponentGenerator