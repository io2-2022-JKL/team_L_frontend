import { useRef } from "react";
import { Form, Modal, ModalBody } from "react-bootstrap";
import "../Modal.module.css";
import Helper from "../../services/Helper";

export function DataDoctorsModal(props) {
  const emailInputRef = useRef();
  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const dateOfBirthInputRef = useRef();
  const peselInputRef = useRef();
  const phoneNumberInputRef = useRef();

  const dateOfBirth = Helper.convertDateForInput(props.doctor.dateOfBirth);
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
            Doctors data
          </Modal.Title>
        </Modal.Header>
        <ModalBody>
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
                disabled
                defaultValue={props.doctor.firstName}
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
                defaultValue={props.doctor.lastName}
                ref={lastNameInputRef}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                required
                disabled
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
                disabled
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
                disabled
                id="dateOfBirth"
                defaultValue={dateOfBirth}
                ref={dateOfBirthInputRef}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="input"
                required
                disabled
                id="phoneNumber"
                defaultValue={props.doctor.phoneNumber}
                ref={phoneNumberInputRef}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Vaccination Center Id</Form.Label>
              <Form.Control
                type="input"
                required
                disabled
                id="phoneNumber"
                defaultValue={props.doctor.vaccinationCenterId}
                ref={phoneNumberInputRef}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="input"
                required
                disabled
                id="phoneNumber"
                defaultValue={props.doctor.name}
                ref={phoneNumberInputRef}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>City</Form.Label>
              <Form.Control
                type="input"
                required
                disabled
                id="phoneNumber"
                defaultValue={props.doctor.city}
                ref={phoneNumberInputRef}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Street</Form.Label>
              <Form.Control
                type="input"
                required
                disabled
                id="phoneNumber"
                defaultValue={props.doctor.street}
                ref={phoneNumberInputRef}
              />
            </Form.Group>
          </div>
        </ModalBody>
      </Form>
    </Modal>
  );
}

export default DataDoctorsModal;
