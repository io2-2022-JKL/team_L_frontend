import { Button } from "bootstrap";
import { Modal, ModalBody, ModalFooter } from "react-bootstrap";

export function DataPatientModal(props) {
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Patient data</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h1>First Name</h1>
        <h4 className="d-inline-flex p-2">{props.doctor.firstName}</h4>
        <h1>Last Name</h1>
        <h4>{props.doctor.lastName}</h4>
        <h1>PESEL</h1>
        <h4>{props.doctor.PESEL}</h4>
        <h1>Mail</h1>
        <h4>{props.doctor.mail}</h4>
        <h1>Birthday</h1>
        <h4>{props.doctor.dateOfBirth}</h4>
        <h1>PhoneNumber</h1>
        <h4>{props.doctor.phoneNumber}</h4>
        <h1>active</h1>
        <h4>{props.doctor.active}</h4>
        <h1>vaccinationCenterId</h1>
        <h4>{props.doctor.vaccinationCenterId}</h4>
        <h1>Name</h1>
        <h4>{props.doctor.name}</h4>
        <h1>City</h1>
        <h4>{props.doctor.city}</h4>
        <h1>Street</h1>
        <h4>{props.doctor.street}</h4>
      </Modal.Body>
    </Modal>
  );
}

export default DataPatientModal;
