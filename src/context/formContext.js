import { createContext, useContext } from 'react';
// import * as React from 'react';

export const FormContext = createContext();
export const useFormContext = () => useContext(FormContext);
