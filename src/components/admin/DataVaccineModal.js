import { Form, Modal, ModalBody, Button } from "react-bootstrap";
import "../Modal.module.css";

function DataVaccineModal(props) {
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
            Vaccine data
          </Modal.Title>
        </Modal.Header>
        <ModalBody>
          <div className="container">
            <Form.Group>
              <Form.Label>ID</Form.Label>
              <Form.Control
                type="input"
                required
                id="vaccineId"
                disabled
                defaultValue={props.vaccine.vaccineId}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="input"
                required
                disabled
                id="name"
                defaultValue={props.vaccine.name}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Company</Form.Label>
              <Form.Control
                type="input"
                required
                id="company"
                disabled
                defaultValue={props.vaccine.company}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Virus Type</Form.Label>
              <Form.Control
                type="input"
                required
                id="virus"
                disabled
                defaultValue={props.vaccine.virus}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Number of doses</Form.Label>
              <Form.Control
                type="input"
                required
                id="numberOfDoses"
                disabled
                defaultValue={props.vaccine.numberOfDoses}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Minimal number of days between doses</Form.Label>
              <Form.Control
                type="input"
                required
                id="minDaysBetweenDoses"
                disabled
                defaultValue={props.vaccine.minDaysBetweenDoses}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Maximal number of days between doses</Form.Label>
              <Form.Control
                type="input"
                required
                id="maxDaysBetweenDoses"
                disabled
                defaultValue={props.vaccine.maxDaysBetweenDoses}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Minimal patient age</Form.Label>
              <Form.Control
                type="input"
                required
                id="minPatientAge"
                disabled
                defaultValue={props.vaccine.minPatientAge}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Maximal patient age</Form.Label>
              <Form.Control
                type="input"
                required
                id="maxPatientAge"
                disabled
                defaultValue={props.vaccine.maxPatientAge}
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

export default DataVaccineModal;
