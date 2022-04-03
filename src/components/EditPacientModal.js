import { Modal, Button, Form } from "react-bootstrap";
import { useRef } from "react";
import "./Modal.module.css";

function EditPacientModal(props) {
  const emailInputRef = useRef();
  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const dateOfBirthInputRef = useRef();
  const peselInputRef = useRef();
  const phoneNumberInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredFirstName = firstNameInputRef.current.value;
    const enteredLastName = lastNameInputRef.current.value;
    const enteredPesel = peselInputRef.current.value;
    const enteredPhoneNumber = phoneNumberInputRef.current.value;
    const enteredDateOfBirth = dateOfBirthInputRef.current.value;

    const editData = {
      email: enteredEmail,
      firstName: enteredFirstName,
      lastName: enteredLastName,
      pesel: enteredPesel,
      phoneNumber: enteredPhoneNumber,
      dateOfBirth: enteredDateOfBirth,
    };

    props.edit(editData);
  }
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
                ref={firstNameInputRef}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="input"
                required
                id="lastName"
                defaultValue={props.lastName}
                ref={lastNameInputRef}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                required
                id="email"
                defaultValue={props.email}
                ref={emailInputRef}
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
                ref={peselInputRef}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Date Of Birth</Form.Label>
              <Form.Control
                type="date"
                required
                id="dateOfBirth"
                defaultValue={props.dateOfBirth}
                ref={dateOfBirthInputRef}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="input"
                required
                id="phoneNumber"
                defaultValue={props.phoneNumber}
                ref={phoneNumberInputRef}
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
