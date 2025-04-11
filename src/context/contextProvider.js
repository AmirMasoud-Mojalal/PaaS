import { Children } from 'react';
import { FormContext } from './formContext';

export const FormProvider = ({ children, ctx }) => {
  // console.log('((');
  return <FormContext.Provider value={ctx}>{children}</FormContext.Provider>
};
