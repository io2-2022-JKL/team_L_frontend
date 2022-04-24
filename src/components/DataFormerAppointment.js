import { Form, Modal, ModalBody } from "react-bootstrap";
import "./Modal.module.css";

export function DataFormerAppointment(props) {
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
              <Form.Label>Apointment ID</Form.Label>
              <Form.Control
                type="input"
                required
                id="appointmentId"
                disabled
                defaultValue={props.formerAppointment.appointmentId}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Vaccine Name</Form.Label>
              <Form.Control
                type="input"
                required
                disabled
                id="vaccineName"
                defaultValue={props.formerAppointment.vaccineName}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Vaccine Company</Form.Label>
              <Form.Control
                type="input"
                required
                id="vaccineCompany"
                disabled
                defaultValue={props.formerAppointment.vaccineCompany}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Virus Type</Form.Label>
              <Form.Control
                type="input"
                required
                id="vaccineVirus"
                disabled
                defaultValue={props.formerAppointment.vaccineVirus}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Dose</Form.Label>
              <Form.Control
                type="input"
                required
                id="whichVaccineDose"
                disabled
                defaultValue={props.formerAppointment.whichVaccineDose}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Patient first name</Form.Label>
              <Form.Control
                type="input"
                required
                id="patientFirstName"
                disabled
                defaultValue={props.formerAppointment.patientFirstName}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Patient last name</Form.Label>
              <Form.Control
                type="input"
                required
                id="patientLastName"
                disabled
                defaultValue={props.formerAppointment.patientLastName}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>PESEL</Form.Label>
              <Form.Control
                type="input"
                required
                id="PESEL"
                disabled
                defaultValue={props.formerAppointment.PESEL}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>State</Form.Label>
              <Form.Control
                type="input"
                required
                id="state"
                disabled
                defaultValue={props.formerAppointment.state}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Batch number</Form.Label>
              <Form.Control
                type="input"
                required
                id="batchNumber"
                disabled
                defaultValue={props.formerAppointment.batchNumber}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Begin</Form.Label>
              <Form.Control
                type="input"
                required
                id="from"
                disabled
                defaultValue={props.formerAppointment.from}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>End</Form.Label>
              <Form.Control
                type="input"
                required
                id="to"
                disabled
                defaultValue={props.formerAppointment.to}
              />
            </Form.Group>
          </div>
        </ModalBody>
      </Form>
    </Modal>
  );
}

export default DataFormerAppointment;
