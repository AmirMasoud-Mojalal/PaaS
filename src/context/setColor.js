import * as React from 'react';
import { withTheme } from './withForm';

const SetColor = (props) => (
  <div>
    {/* <button onClick={() => console.log(props.themeContext)}>Red</button> */}
    <button onClick={() => props.themeContext.setColor('red')}>Red</button>
    <button onClick={() => props.themeContext.setColor('lightblue')}>
      Blue
    </button>
  </div>
);
export default withTheme(SetColor);
