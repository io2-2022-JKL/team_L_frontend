import { Modal, Button, Form } from "react-bootstrap";
import "./Modal.module.css";

function EditPacientModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Pacient
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <Form>
            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control type="input" required id="firstName" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="input" required id="lastName" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" required id="email" />
            </Form.Group>

            <Form.Group>
              <Form.Label>PESEL</Form.Label>
              <Form.Control
                type="input"
                required
                id="pesel"
                minLength={11}
                maxLength={11}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Date Of Birth</Form.Label>
              <Form.Control type="date" required id="dateOfBirth" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="input" required id="phoneNumber" />
            </Form.Group>
          </Form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditPacientModal;
