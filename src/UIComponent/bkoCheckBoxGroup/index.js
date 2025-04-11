import React from "react";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";
import "./index.css";

function BKOCheckBoxGroup(props) {
  const { name, error, options, onChange, defaultChecked, ...otherProps } =
    props;
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
            type="checkbox"
            id={`checkBoxGroup-${i}`}
            required={error ? true : false}
            isInvalid={error ? true : false}
            name={name}
            label={label}
            value={value}
            onChange={onChange}
            defaultChecked={defaultChecked[i]}
            {...otherProps}
          />
        );
      })}
      <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
    </React.Fragment>
  );
}

BKOCheckBoxGroup.propTypes = {
  name: PropTypes.string.isRequired,
};
export default BKOCheckBoxGroup;
