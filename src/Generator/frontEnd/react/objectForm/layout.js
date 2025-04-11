import React, { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';

export const Layout = (props) => {
    const [rowNums, setrowNums] = useState(1);
    const [colNum, setColNum] = useState(1);

    return (
        <div>
            {Array(rowNums).fill(0).forEach((rowNum) => {
                <Row>
                    <Col>
                        {props.children}
                    </Col>
                </Row>
            })}
        </div>
    )
}