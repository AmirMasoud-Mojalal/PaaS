import React from 'react';
import { withTheme } from './withForm';
const Menu = (props) => {
  // console.log(props);
  // return null;
  return <div style={{ backgroundColor: props.themeContext.color }}>Menu</div>;
};

export default withTheme(Menu);
