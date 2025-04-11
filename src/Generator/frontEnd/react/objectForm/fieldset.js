import React from 'react';
// import '../css/bootstrap.rtl.min.css'

export const Fieldset = (props) => {
  //  Check for Valid Array
  // if (props.fields[0].length > 0) {
    //  Array of form fields
    // if (props.fields[0][0]['value']['type'] !== 'array') {
      return (
        <div>
          <fieldset className="reset">
          {/* <fieldset className="reset" disabled={props.fields[0].disabled}> */}
            <legend className="reset">{props.title}</legend>
            {props.children}
          </fieldset>
        </div>
      );
      //  Array of Grid rows & cells
    // } else {
    //   return (
    //     <>
    //       {props.children}
    //     </>
    //   )
    // }
  // } else {
  //   //  Empty Array
  //   console.log('Empty Array');
  // }
};
