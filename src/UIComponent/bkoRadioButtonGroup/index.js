import React from "react";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";
import "./index.css";

function BKORadioButtonGroup(props) {
  const { name, error, options, selected, ...otherProps } = props;
  return (
    <React.Fragment>
      {options.map((item, i) => {
        const label = item[props.optionlabel]
          ? item[props.optionlabel]
          : item["label"];
        const value = item[props.optionvalue]
          ? item[props.optionvalue]
          : item["value"];

        return (
          <Form.Check
            key={i}
            type="radio"
            id={`radioButtonGroup-${i}`}
            required={error ? true : false}
            isInvalid={error ? true : false}
            name={name}
            value={value}
            label={label}
            checked={selected === value}
            {...otherProps}
          />
        );
      })}

      <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
    </React.Fragment>
  );
}

BKORadioButtonGroup.propTypes = {
  name: PropTypes.string.isRequired,
};
export default BKORadioButtonGroup;
