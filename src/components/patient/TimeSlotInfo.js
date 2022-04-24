import { Form, Modal, ModalBody, Button } from "react-bootstrap";
import "../Modal.module.css";

function TimeSlotInfo(props) {
  const openingHours = props.object.openingHours;
  const availableVaccines = props.object.availableVaccines;
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Form>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Info</Modal.Title>
        </Modal.Header>
        <ModalBody>
          <div className="container">
            <div className="mb-3">
              <h4>Vaccination Center</h4>
              <Form.Group>
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="input"
                  id="vaccinationCenterCity"
                  disabled
                  defaultValue={props.object.vaccinationCenterCity}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Vaccination center name</Form.Label>
                <Form.Control
                  type="input"
                  disabled
                  id="vaccinationCenterName"
                  defaultValue={props.object.vaccinationCenterName}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="input"
                  id="vaccinationCenterStreet"
                  disabled
                  defaultValue={props.object.vaccinationCenterStreet}
                />
              </Form.Group>
              <p>Opening hours:</p>
              {openingHours.map((item, index) => (
                <li key={index}>
                  {item.from} - {item.to}
                </li>
              ))}
            </div>
            <div className="mb-3">
              <h4>Doctor</h4>
              <p>
                {props.object.doctorFirstName} {props.object.doctorLastName}
              </p>
            </div>
            <div className="mb-3">
              <h4>Vaccines</h4>
              {availableVaccines.map((item, index) => (
                <li key={index}>{item.company}</li>
              ))}
            </div>
          </div>
        </ModalBody>
        <Modal.Footer>
          <Button variant="danger" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default TimeSlotInfo;
