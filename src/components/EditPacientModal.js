import { Modal, Button, Form } from "react-bootstrap";
import "./Modal.module.css";

function EditPacientModal(props) {
  function submitHandler() {}
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Form onSubmit={submitHandler}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Pacient
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <Form.Group>
              <Form.Label>Id</Form.Label>
              <Form.Control
                type="input"
                required
                disabled
                defaultValue={props.id}
                id="id"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="input"
                required
                id="firstName"
                defaultValue={props.firstName}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="input"
                required
                id="lastName"
                defaultValue={props.lastName}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                required
                id="email"
                defaultValue={props.email}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>PESEL</Form.Label>
              <Form.Control
                type="input"
                required
                id="pesel"
                minLength={11}
                maxLength={11}
                defaultValue={props.pesel}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Date Of Birth</Form.Label>
              <Form.Control
                type="date"
                required
                id="dateOfBirth"
                defaultValue={props.dateOfBirth}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="input"
                required
                id="phoneNumber"
                defaultValue={props.phoneNumber}
              />
            </Form.Group>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" variant="success">
            Submit
          </Button>
          <Button variant="danger" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default EditPacientModal;
