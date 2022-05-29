import { useRef } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

function FilterTimeSlots(props) {
  const doctorIdInputRef = useRef();
  function submitHandler(event) {
    event.preventDefault();
    const enteredDoctorId = doctorIdInputRef.current.value;
    props.search(enteredDoctorId);
  }

  return (
    <div>
      <Form onSubmit={submitHandler}>
        <Row className="px-4">
          <Col>
            <Form.Group>
              <Form.Label>Doctor:</Form.Label>
              <select
                className="form-select"
                name="select"
                ref={doctorIdInputRef}
              >
                {props.doctors.map((doctor, y) => (
                  <option key={y} value={doctor.id}>
                    {doctor.firstName} {doctor.lastName}
                  </option>
                ))}
              </select>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="mt-2 px-4">
              <Button type="submit">Search</Button>
            </div>
          </Col>
          <Col>
            <div className="mt-2 px-4" onClick={props.delete}>
              <Button variant="danger">Delete choosed</Button>
            </div>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default FilterTimeSlots;
