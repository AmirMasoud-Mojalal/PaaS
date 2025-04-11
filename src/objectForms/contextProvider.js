import { FormContext, FormProvider } from './formContext';

export const contextProvider = () => {
  const fromContext = FormContext({
    value: 'ali',
  });
  <FormProvider>
    <children />
  </FormProvider>;
};
