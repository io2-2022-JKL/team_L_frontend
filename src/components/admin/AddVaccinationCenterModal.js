import { Form, Modal, ModalBody, Button, Row, Col } from "react-bootstrap";
import { useRef, useState } from "react";
import "../Modal.module.css";

function AddVaccinationCentersModal(props) {
  const nameInputRef = useRef();
  const cityInputRef = useRef();
  const streetInputRef = useRef();
  const activeInputRef = useRef();

  // Opening Hours
  const openingHour0FromInputRef = useRef();
  const openingHour0ToInputRef = useRef();

  const openingHour1FromInputRef = useRef();
  const openingHour1ToInputRef = useRef();

  const openingHour2FromInputRef = useRef();
  const openingHour2ToInputRef = useRef();

  const openingHour3FromInputRef = useRef();
  const openingHour3ToInputRef = useRef();

  const openingHour4FromInputRef = useRef();
  const openingHour4ToInputRef = useRef();

  const openingHour5FromInputRef = useRef();
  const openingHour5ToInputRef = useRef();

  const openingHour6FromInputRef = useRef();
  const openingHour6ToInputRef = useRef();

  const [selectedVaccines, setSelectedVaccines] = useState([]);

  function onValueChange(event) {
    const vaccine = event.target.value;
    var vaccines = selectedVaccines;
    if (!vaccines.includes(vaccine)) {
      vaccines.push(vaccine);
    } else {
      vaccines = vaccines.filter((el) => el !== vaccine);
    }
    setSelectedVaccines(vaccines);
  }

  function submitHandler(event) {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredActive = activeInputRef.current.value === "true";
    const enteredVaccines = selectedVaccines;

    const enteredOpeningHoursDays = [
      {
        from: openingHour0FromInputRef.current.value,
        to: openingHour0ToInputRef.current.value,
      },
      {
        from: openingHour1FromInputRef.current.value,
        to: openingHour1ToInputRef.current.value,
      },
      {
        from: openingHour2FromInputRef.current.value,
        to: openingHour2ToInputRef.current.value,
      },
      {
        from: openingHour3FromInputRef.current.value,
        to: openingHour3ToInputRef.current.value,
      },
      {
        from: openingHour4FromInputRef.current.value,
        to: openingHour4ToInputRef.current.value,
      },
      {
        from: openingHour5FromInputRef.current.value,
        to: openingHour5ToInputRef.current.value,
      },
      {
        from: openingHour6FromInputRef.current.value,
        to: openingHour6ToInputRef.current.value,
      },
    ];

    const data = {
      name: enteredName,
      city: enteredCity,
      street: enteredStreet,
      vaccineIds: enteredVaccines,
      openingHoursDays: enteredOpeningHoursDays,
      active: enteredActive,
    };

    props.add(data);
  }

  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Form onSubmit={submitHandler}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Vaccination Center
          </Modal.Title>
        </Modal.Header>
        <ModalBody>
          <div className="container">
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control type="input" ref={nameInputRef} id="name" />
            </Form.Group>

            <Form.Group>
              <Form.Label>City</Form.Label>
              <Form.Control type="input" ref={cityInputRef} id="city" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Address</Form.Label>
              <Form.Control type="input" id="street" ref={streetInputRef} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Opening Hours</Form.Label>
              <Row>
                <Col>
                  <Form.Control type="time" ref={openingHour0FromInputRef} />
                </Col>
                <Col>
                  <Form.Control type="time" ref={openingHour0ToInputRef} />
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Control type="time" ref={openingHour1FromInputRef} />
                </Col>
                <Col>
                  <Form.Control type="time" ref={openingHour1ToInputRef} />
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Control type="time" ref={openingHour2FromInputRef} />
                </Col>
                <Col>
                  <Form.Control type="time" ref={openingHour2ToInputRef} />
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Control type="time" ref={openingHour3FromInputRef} />
                </Col>
                <Col>
                  <Form.Control type="time" ref={openingHour3ToInputRef} />
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Control type="time" ref={openingHour4FromInputRef} />
                </Col>
                <Col>
                  <Form.Control type="time" ref={openingHour4ToInputRef} />
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Control type="time" ref={openingHour5FromInputRef} />
                </Col>
                <Col>
                  <Form.Control type="time" ref={openingHour5ToInputRef} />
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Control type="time" ref={openingHour6FromInputRef} />
                </Col>
                <Col>
                  <Form.Control type="time" ref={openingHour6ToInputRef} />
                </Col>
              </Row>
            </Form.Group>
            <h5>Vaccines</h5>
            {props.vaccines?.map((item, index) => (
              <Form.Group key={index}>
                <input
                  type="checkbox"
                  value={item.vaccineId}
                  onChange={onValueChange}
                />
                <Form.Label>{item.name}</Form.Label>
              </Form.Group>
            ))}

            <Form.Group>
              <Form.Label>Active</Form.Label>
              <select
                className="form-select"
                name="select"
                ref={activeInputRef}
                defaultValue={true}
              >
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
            </Form.Group>
          </div>
        </ModalBody>
        <Modal.Footer>
          <Button variant="danger" onClick={props.onHide}>
            Close
          </Button>
          <Button type="submit" variant="success">
            Submit
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default AddVaccinationCentersModal;
