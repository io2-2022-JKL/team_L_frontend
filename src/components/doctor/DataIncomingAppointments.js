import { Form, Modal, ModalBody, Button } from "react-bootstrap";
import "../Modal.module.css";

function DataIncomingAppointments(props) {
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
            Appointment data
          </Modal.Title>
        </Modal.Header>
        <ModalBody>
          <div className="container">
            <Form.Group>
              <Form.Label>ID</Form.Label>
              <Form.Control
                type="input"
                required
                id="appointmentId"
                disabled
                defaultValue={props.incomingAppointment.appointmentId}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Vaccine Name</Form.Label>
              <Form.Control
                type="input"
                required
                disabled
                id="vaccineName"
                defaultValue={props.incomingAppointment.vaccineName}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Vaccine Company</Form.Label>
              <Form.Control
                type="input"
                required
                id="vaccineCompany"
                disabled
                defaultValue={props.incomingAppointment.vaccineCompany}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Virus Type</Form.Label>
              <Form.Control
                type="input"
                required
                id="vaccineVirus"
                disabled
                defaultValue={props.incomingAppointment.vaccineVirus}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Dose</Form.Label>
              <Form.Control
                type="input"
                required
                id="whichVaccineDose"
                disabled
                defaultValue={props.incomingAppointment.whichVaccineDose}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Patient first name</Form.Label>
              <Form.Control
                type="input"
                required
                id="patientFirstName"
                disabled
                defaultValue={props.incomingAppointment.patientFirstName}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Patient last name</Form.Label>
              <Form.Control
                type="input"
                required
                id="patientLastName"
                disabled
                defaultValue={props.incomingAppointment.patientLastName}
              />
            </Form.Group>
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

export default DataIncomingAppointments;
