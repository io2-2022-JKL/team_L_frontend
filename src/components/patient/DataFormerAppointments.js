import { Form, Modal, ModalBody, Button } from "react-bootstrap";
import "../Modal.module.css";

function DataFormerAppointments(props) {
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
              <Form.Label>Vaccination center name</Form.Label>
              <Form.Control
                type="input"
                required
                id="vaccinationCenterName"
                disabled
                defaultValue={props.formerAppointment.vaccinationCenterName}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Vaccination center city</Form.Label>
              <Form.Control
                type="input"
                required
                id="vaccinationCenterCity"
                disabled
                defaultValue={props.formerAppointment.vaccinationCenterCity}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Vaccination center Street</Form.Label>
              <Form.Control
                type="input"
                required
                id="vaccinationCenterStreet"
                disabled
                defaultValue={props.formerAppointment.vaccinationCenterStreet}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Begin</Form.Label>
              <Form.Control
                type="input"
                required
                id="windowBegin"
                disabled
                defaultValue={props.formerAppointment.windowBegin}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>End</Form.Label>
              <Form.Control
                type="input"
                required
                id="windowEnd"
                disabled
                defaultValue={props.formerAppointment.windowEnd}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Doctor first name</Form.Label>
              <Form.Control
                type="input"
                required
                id="doctorFirstName"
                disabled
                defaultValue={props.formerAppointment.doctorFirstName}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Doctor last name</Form.Label>
              <Form.Control
                type="input"
                required
                id="doctorLastName"
                disabled
                defaultValue={props.formerAppointment.doctorLastName}
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

export default DataFormerAppointments;
