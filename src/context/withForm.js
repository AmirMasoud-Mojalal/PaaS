import * as React from 'react';
import { FormContext } from './formContext';
export function withTheme(Component) {
  return function ThemeComponent(props) {
    return (
      <FormContext.Consumer>
        {(contexts) => <Component {...props} {...contexts} />}
      </FormContext.Consumer>
    );
  };
}
