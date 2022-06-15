import { useRef, useState } from "react";
import { Form, Modal, ModalBody, Button } from "react-bootstrap";
import "../Modal.module.css";

function Vaccination(props) {
  const onOccured = props.occured;
  const onDidNotOccured = props.notoccured;
  const batchIdInputRef = useRef();
  const [Error, setError] = useState("");

  function submitHandler(event) {
    event.preventDefault();

    const enteredBatchId = batchIdInputRef.current.value;

    if (enteredBatchId) {
      onOccured(enteredBatchId);
      setError("");
    } else {
      setError("Batch id needs to be filled");
    }
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
            Vaccination Information
          </Modal.Title>
        </Modal.Header>
        <ModalBody>
          <p className="text-center text-danger">{Error}</p>
          <div className="container">
            <Form.Group>
              <Form.Label>Vaccine name</Form.Label>
              <Form.Control
                type="input"
                required
                id="vaccineName"
                disabled
                defaultValue={props.vaccinationdata.vaccineName}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Vaccine company</Form.Label>
              <Form.Control
                type="input"
                required
                id="vaccineCompany"
                disabled
                defaultValue={props.vaccinationdata.vaccineCompany}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Number of doses</Form.Label>
              <Form.Control
                type="input"
                required
                id="numberOfDoses"
                disabled
                defaultValue={props.vaccinationdata.numberOfDoses}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Minimum days between doses</Form.Label>
              <Form.Control
                type="input"
                required
                id="vaccineName"
                disabled
                defaultValue={props.vaccinationdata.minDaysBetweenDoses}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Maximum days between doses</Form.Label>
              <Form.Control
                type="input"
                required
                id="vaccineName"
                disabled
                defaultValue={props.vaccinationdata.maxDaysBetweenDoses}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Virus name</Form.Label>
              <Form.Control
                type="input"
                required
                id="virusName"
                disabled
                defaultValue={props.vaccinationdata.virusName}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Minimal patient age</Form.Label>
              <Form.Control
                type="input"
                required
                id="vaccineName"
                disabled
                defaultValue={props.vaccinationdata.minPatientAge}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Maximal patient age</Form.Label>
              <Form.Control
                type="input"
                required
                id="maxPatientAge"
                disabled
                defaultValue={props.vaccinationdata.maxPatientAge}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Patient first name</Form.Label>
              <Form.Control
                type="input"
                required
                id="patientFirstName"
                disabled
                defaultValue={props.vaccinationdata.patientFirstName}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Patient last name</Form.Label>
              <Form.Control
                type="input"
                required
                id="patientLastName"
                disabled
                defaultValue={props.vaccinationdata.patientLastName}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Patient pesel</Form.Label>
              <Form.Control
                type="input"
                required
                id="PESEL"
                disabled
                defaultValue={props.vaccinationdata.PESEL}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Patient date of birth</Form.Label>
              <Form.Control
                type="input"
                required
                id="dateOfBirth"
                disabled
                defaultValue={props.vaccinationdata.dateOfBirth}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Appointment from</Form.Label>
              <Form.Control
                type="input"
                required
                id="from"
                disabled
                defaultValue={props.vaccinationdata.from}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Appointment to</Form.Label>
              <Form.Control
                type="input"
                required
                id="to"
                disabled
                defaultValue={props.vaccinationdata.to}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Batch Id</Form.Label>
              <Form.Control
                type="input"
                required
                id="to"
                ref={batchIdInputRef}
              />
            </Form.Group>
          </div>
        </ModalBody>
        <Modal.Footer>
          <Button variant="danger" onClick={onDidNotOccured}>
            Did not occur
          </Button>
          <Button variant="success" type="submit">
            Did occur
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default Vaccination;
