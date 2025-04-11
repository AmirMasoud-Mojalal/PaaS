export const tst = () => {
  return (
    <>
<Row>
  <Col>
    <Form.Group className="mb-3" controlId="formBasicText">
      <FloatingLabel label={نوع کارتخوان} className="mb-3">
        <Form.Control
          id={fName}
          aria-describedby={fName-comment}
          required
          placeholder="field"
          value={item}
          onChange={onChangeData}
          disabled={undefined}
          size="lg"
        />
        <Form.Text id={fName-comment}>
          {undefined}
        </Form.Text>
      </FloatingLabel>
    </Form.Group>
  </Col>

  <Col>
    <FloatingLabel
      controlId={regionalType}
      label={نوع منطقه}
      className="mb-3"
    >
      <Form.Select
        aria-label="Select"
        onChange={''}
        disabled={undefined}
      >
        <option value={منطقه عادی}>{منطقه عادی}</option>;,<option value={منطقه آزاد تجاری - اقتصادی}>{منطقه آزاد تجاری - اقتصادی}</option>;
      </Form.Select>
    </FloatingLabel>
  </Col>

</Row>
{/* <Row>
      <Col>
        <FloatingLabel label={توضیحات} className="mb-3">
          <Form.Control
            as="textarea"
            id={description}
            required
            placeholder="field"
            value={''}
            onChange={''}
            disabled={undefined}
            style={{
              height: `120px`,
            }}
          />
        </FloatingLabel>
        {/* </Form.Group> */}
      </Col>
    
        <Col>
          <Form.Group className="mb-3" controlId={cols['id']}>
            <Form.Switch
              label={تجدید پذیر}
              value={''}
              onChange={''}
              disabled={undefined}
            />
          </Form.Group>
        </Col>;
      
</Row>
<Row>
  <Col>
    <Fieldset title={روش محاسبه معدل حساب}>
      <Form.Group className="mb-3" controlId="formBasicRadio">
        
          <Form.Check
            id={0}
            // key={key}
            type="radio"
            label={محاسبه معدل حساب باشیوه استاندارد (روال فعلی)}
            disabled={false}
            inline={false}
            onChange={''}
            checked={''}
            value={''}
          />;,
          <Form.Check
            id={1}
            // key={key}
            type="radio"
            label={محاسبه مابه التفاوت معدل حساب براساس بازه تاریخی بامبداء مشخصی}
            disabled={false}
            inline={false}
            onChange={''}
            checked={''}
            value={''}
          />;
      </Form.Group>
    </Fieldset>
  </Col>

  <Col>
    <Fieldset title={col['label']}>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <br></br>
        
      <Form.Label></Form.Label>
      <Form.Check
        // id={key}
        name={0}
        type="checkbox"
        label={تسهیلات اعتباری}
        disabled={false}
        inline={true}
        onChange={''}
        checked={''}
        value={''}
      ></Form.Check>,
      <Form.Label></Form.Label>
      <Form.Check
        // id={key}
        name={1}
        type="checkbox"
        label={بیمه}
        disabled={false}
        inline={true}
        onChange={''}
        checked={''}
        value={''}
      ></Form.Check>,
      <Form.Label></Form.Label>
      <Form.Check
        // id={key}
        name={2}
        type="checkbox"
        label={کارتخوان}
        disabled={false}
        inline={true}
        onChange={''}
        checked={''}
        value={''}
      ></Form.Check>,
      <Form.Label></Form.Label>
      <Form.Check
        // id={key}
        name={3}
        type="checkbox"
        label={خودپرداز}
        disabled={false}
        inline={true}
        onChange={''}
        checked={''}
        value={''}
      ></Form.Check>
      </Form.Group>
    </Fieldset>
  </Col>
      
</Row>
<Row>
</Row> */}
</>
)
}