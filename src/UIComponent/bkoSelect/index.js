import React, { useRef } from "react";
import "./index.css";
import PropTypes from "prop-types";
import { Typeahead } from "react-bootstrap-typeahead";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { persianToArabic } from "../../helper/utils/string";

const BKOSelect = (props) => {
  const ref = useRef();
  const { as, filter, error, readOnly, options, ...otherProps } = props;
  const optionValue = props.optionvalue ? props.optionvalue : "value";
  const optionLabel = props.optionlabel ? props.optionlabel : "label";
  const formLabel = <Form.Label>{props.label}</Form.Label>;
  const filterByCallBack = (option, prop) =>
    option[optionLabel].indexOf(persianToArabic(prop.text)) !== -1;

  const formComponent = () => {
    if (props.filter) {
      return (
        <>
          <Typeahead
            id={`${props.id}-typeahead`}
            placeholder="جستجو نمائید"
            required={props.error ? true : false}
            isInvalid={props.error ? true : false}
            selected={options.filter(
              (item) => item[optionValue] === props.value
            )}
            options={options}
            labelKey={optionLabel}
            onChange={(e) => {
              e.length < 1
                ? props.onChange({ [optionLabel]: "", [optionValue]: -1 })
                : props.onChange(e[0]);
            }}
            key={optionValue}
            ref={ref}
            onMenuToggle={(isOpen) => {
              if (isOpen) ref.current.state.text = "";
            }}
            filterBy={filterByCallBack}
            inputProps={{ readOnly: readOnly }}
            disabled={props.disabled}
          />

          <Form.Control.Feedback type="invalid" style={{ display: "block" }}>
            {props.error}
          </Form.Control.Feedback>
        </>
      );
    } else
      return (
        <>
          <Form.Select
            style={{
              backgroundPosition: "left .75rem center",
              padding: ".375rem .75rem .375rem 2.25rem",
            }}
            required={props.error ? true : false}
            isInvalid={props.error ? true : false}
            readOnly={readOnly}
            {...otherProps}
          >
            {options.map((item, i) => (
              <option
                key={i}
                value={item[optionValue]}
                {...(props.value > 0 && props.value === item[optionValue]
                  ? { selected: true }
                  : {})}
              >
                {item[optionLabel]}
              </option>
            ))}
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            {props.error}
          </Form.Control.Feedback>
        </>
      );
  };
  const com = () => {
    if (props.as === { Row }) {
      return (
        <Row>
          <Col md={3} sm={3}>
            {formLabel}
          </Col>
          <Col md={9} sm={9}>
            {formComponent()}
          </Col>
        </Row>
      );
    } else {
      return (
        <React.Fragment>
          {formLabel}
          {formComponent()}
        </React.Fragment>
      );
    }
  };
  return com();
};

BKOSelect.propTypes = {
  value: PropTypes.number,
};

export default BKOSelect;
