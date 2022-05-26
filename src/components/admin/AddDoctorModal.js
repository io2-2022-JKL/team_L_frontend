import { useRef } from "react";
import { Form, Modal, ModalBody, Button } from "react-bootstrap";
import "../Modal.module.css";

export function AddDoctorModal(props) {
  const patientIdInputRef = useRef();
  const vaccinationCenterIdInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const patientId = patientIdInputRef.current.value;
    const vaccinationCenterId = vaccinationCenterIdInputRef.current.value;

    const editData = {
      patientId: patientId,
      vaccinationCenterId: vaccinationCenterId,
    };

    props.addDoctor(editData);
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
            New doctor
          </Modal.Title>
        </Modal.Header>
        <ModalBody>
          <div className="container">
            <Form.Group>
              <Form.Label>Patient</Form.Label>
              <select
                className="form-select"
                name="select"
                ref={patientIdInputRef}
              >
                {props.patients.map((patient, y) => (
                  <option key={y} value={patient.id}>
                    {patient.id} [{patient.firstName} {patient.lastName}]
                  </option>
                ))}
              </select>
            </Form.Group>

            <Form.Group>
              <Form.Label>Vaccination Center</Form.Label>
              <select
                className="form-select"
                name="select"
                ref={vaccinationCenterIdInputRef}
              >
                {props.vaccinationCenters.map((vaccinationCenter, y) => (
                  <option key={y} value={vaccinationCenter.id}>
                    {vaccinationCenter.id} [{vaccinationCenter.name}-
                    {vaccinationCenter.city}]
                  </option>
                ))}
              </select>
            </Form.Group>
          </div>
        </ModalBody>
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

export default AddDoctorModal;
