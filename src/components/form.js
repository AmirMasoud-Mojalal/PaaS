import React, { useState } from 'react';
// import '../css/bootstrap.rtl.min.css'
import { Fieldset } from './fieldset';
import { Form, Row, Col, Button } from 'react-bootstrap';

export const BaseForm = (props) => {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        setValidated(true);
    };

    return (

        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Fieldset label={props.title}>
                <Row>
                    <Col>
                        <Form.Label>{props.formFields[Object.keys(props.formFields)[0]]}</Form.Label>
                        <Form.Control required placeholder={props.formFields[Object.keys(props.formFields)[0]]}></Form.Control>
                    </Col>
                    <Col>
                        <Form.Label>{props.formFields[Object.keys(props.formFields)[0]]}</Form.Label>
                        <Form.Control placeholder={props.formFields[Object.keys(props.formFields)[0]]}></Form.Control>
                    </Col>
                </Row>
            </Fieldset>
            <br />
            <Fieldset>
                <Row>
                <Col></Col>
                <Col></Col>
                    <Col>
                        <Button type="submit" variant='outline-secondary'>Submit</Button>
                    </Col>
                </Row>
            </Fieldset>

        </Form>
    )
}
// {Object.keys(props.formFields).map((ll)=>{console.log(ll)})}
