import { Form, Modal, ModalBody, Button } from "react-bootstrap";
import "../Modal.module.css";

function DataDoctorTimeSlots(props) {
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
            Time slot data
          </Modal.Title>
        </Modal.Header>
        <ModalBody>
          <div className="container">
            <Form.Group>
              <Form.Label>ID</Form.Label>
              <Form.Control
                type="input"
                required
                id="id"
                disabled
                defaultValue={props.TimeSlots.id}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>From</Form.Label>
              <Form.Control
                type="input"
                required
                disabled
                id="from"
                defaultValue={props.TimeSlots.from}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>To</Form.Label>
              <Form.Control
                type="input"
                required
                id="to"
                disabled
                defaultValue={props.TimeSlots.to}
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

export default DataDoctorTimeSlots;
