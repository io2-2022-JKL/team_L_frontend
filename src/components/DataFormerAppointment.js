import { useRef } from "react";
import { Form, Modal, ModalBody } from "react-bootstrap";
import "./Modal.module.css";

export function DataFormerAppointment(props) {
  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const peselInputRef = useRef();

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
          <Modal.Title id="contained-modal-title-vcenter">
            Patient data
          </Modal.Title>
        </Modal.Header>
        <ModalBody>
          <div className="container">
            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="input"
                required
                id="firstName"
                disabled
                defaultValue={props.patient.patientFirstName}
                ref={firstNameInputRef}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="input"
                required
                disabled
                id="lastName"
                defaultValue={props.patient.patientLastName}
                ref={lastNameInputRef}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>PESEL</Form.Label>
              <Form.Control
                type="input"
                required
                id="pesel"
                disabled
                minLength={11}
                maxLength={11}
                defaultValue={props.patient.PESEL}
                ref={peselInputRef}
              />
            </Form.Group>
          </div>
        </ModalBody>
      </Form>
    </Modal>
  );
}

export default DataFormerAppointment;
