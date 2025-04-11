// import * as React from 'react';
// import { FormContext } from './formContext';
// export function withContext(Component) {
//   return function contextComponent(props) {
//     return (
//       <FormContext.Consumer>
//         {(contexts) => {
//           {/* console.log('contexts'); */}
//           {/* console.log(contexts); */}
//           return <Component {...props} {...contexts} />;
//         }}
//       </FormContext.Consumer>
//     );
//   };
// }

import { memo } from 'react';
// import * as React from 'react';
import { FormContext, useFormContext } from './formContext';

export function withContext(Component, selectors) {
  const MemoisedComponent = memo(Component);
  return (props) => {
    const ctx = useFormContext();
    // console.log('ctx');
    // console.log(ctx);

    if (Object.keys(selectors).length > 0) {
      const contextProps = Object.keys(selectors).reduce((acc, key) => {
        acc[key] = selectors[key](ctx);

        return acc;
      }, {});
      console.log('contextProps');
      console.log(contextProps);

      return <MemoisedComponent {...props} dataContext={contextProps} />;
    } else {
      return <MemoisedComponent {...props} {...ctx} />;
    }
  };
}
