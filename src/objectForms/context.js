import { createContext, ReactNode, useContext, useState, useMemo } from 'react';

// export type Context = {
//   id: string,
//   name: string,
//   country: string,
//   setId: (val: string) => void,
//   setName: (val: string) => void,
//   setCountry: (val: string) => void,
// };

// const defaultValue = {
  // id: 'FormId',
  // name: '',
  // country: 'Australia',
  // setId: () => undefined,
  // setName: () => undefined,
  // setCountry: () => undefined,
// };


export const FormContext = () => createContext();

export const useFormContext = () => useContext(FormContext);

export const FormProvider = ({ children, ctx }: { children: ReactNode }) => {
  console.log(ctx);
  const [state, setState] = useState(ctx);

  const value = useMemo(() => {
    return {
      // id: state.id,
      name: state.name,
      // country: state.country,
      // setId: (id: string) => setState({ ...state, id }),
      // setName: (name: string) => setState({ ...state, name }),
      // setCountry: (country: string) => setState({ ...state, country }),
    };
  }, [state]);

  // return <FormContext.P
  // return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};
