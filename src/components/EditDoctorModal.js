import { Modal, Button, Form } from "react-bootstrap";
import { useRef } from "react";
import "./Modal.module.css";

function EditDoctorModal(props) {
  const emailInputRef = useRef();
  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const dateOfBirthInputRef = useRef();
  const peselInputRef = useRef();
  const phoneNumberInputRef = useRef();
  const vaccinationCenterIdInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredFirstName = firstNameInputRef.current.value;
    const enteredLastName = lastNameInputRef.current.value;
    const enteredPesel = peselInputRef.current.value;
    const enteredPhoneNumber = phoneNumberInputRef.current.value;
    const enteredDateOfBirth = dateOfBirthInputRef.current.value;
    const enteredVaccinationCenterId =
      vaccinationCenterIdInputRef.current.value;

    const editData = {
      email: enteredEmail,
      firstName: enteredFirstName,
      lastName: enteredLastName,
      pesel: enteredPesel,
      phoneNumber: enteredPhoneNumber,
      dateOfBirth: enteredDateOfBirth,
      vaccitationCenterId: enteredVaccinationCenterId,
    };

    props.edit(editData);
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
            Edit Patient
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
                defaultValue={props.doctor.id}
                id="id"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="input"
                required
                id="firstName"
                defaultValue={props.doctor.firstName}
                ref={firstNameInputRef}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="input"
                required
                id="lastName"
                defaultValue={props.doctor.lastName}
                ref={lastNameInputRef}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                required
                id="email"
                defaultValue={props.doctor.mail}
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
                defaultValue={props.doctor.PESEL}
                ref={peselInputRef}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Date Of Birth</Form.Label>
              <Form.Control
                type="date"
                required
                id="dateOfBirth"
                defaultValue={props.doctor.dateOfBirth}
                ref={dateOfBirthInputRef}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="input"
                required
                id="phoneNumber"
                defaultValue={props.doctor.phoneNumber}
                ref={phoneNumberInputRef}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Vaccination Center Id </Form.Label>
              <Form.Control
                type="input"
                required
                id="vaccinationCenterId"
                defaultValue={props.doctor.vaccinationCenterId}
                ref={vaccinationCenterIdInputRef}
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

export default EditDoctorModal;
