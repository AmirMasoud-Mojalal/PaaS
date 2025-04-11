import { useState, useMemo } from 'react';
import { FormContext } from './formContext';

export const FormProvider = ({ children, defaultValue }) => {
  const [state, setState] = useState({ dataContext: defaultValue });
  //  Dynamically create data context
  // console.log(state);
  // let dataContext = {};
  // Object.keys(state.dataContext).map((key) => {
  //   dataContext[key] = defaultValue[key];
  // });
  // const dataContext = {...state}
  // console.log('abc');
  // console.log(abc);

  // Object.keys(defaultValue).map(
  //   (key) => (dataContext[key] = defaultValue[key])
  // );
  // dataContext['setValue'] = (name, value) => {
  //   setState({
  //     themeContext: {
  //       ...state.themeContext,
  //     },
  //     dataContext: {
  //       ...state.dataContext,
  //       [name]: value,
  //     },
  //   });
  // };
  // console.log(dataContext);
  const ctx = useMemo(() => {
    return {
      themeContext: {
        color: 'yellow',
        setColor: (clr) => {
          setState({
            themeContext: {
              ...state.themeContext,
              color: clr,
            },
            dataContext: {
              ...state.dataContext,
            },
          });
        },
      },
      // ...state,
      // dataContext: dataContext,
      dataContext: {
        ...state.dataContext,
      //   fName: state.dataContext.fName,
      //   lName: state.dataContext.lName,
        setValue: (name, value) => {
          // console.log('name');
          // console.log(name);
          // console.log('value');
          // console.log(value);
          setState({
            themeContext: {
              ...state.themeContext,
            },
            dataContext: {
              ...state.dataContext,
              [name]: value,
            },
          });
        },
      },
    };
  }, [state]);
  // console.log('state');
  // console.log(state);
  // console.log('ctx');
  // console.log(ctx);
  return <FormContext.Provider value={ctx}>{children}</FormContext.Provider>;
};
