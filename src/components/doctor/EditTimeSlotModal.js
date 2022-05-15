import { useRef, useState } from "react";
import { Form, Modal, ModalBody, Button } from "react-bootstrap";
import Helper from "../../services/Helper";

export function EditTimeSlotModal(props) {
  const windowBeginInputRef = useRef();
  const windowEndInputRef = useRef();
  const [Error, setError] = useState("");

  const from = Helper.convertDateTimeForInput(props.timeSlot.from);
  const to = Helper.convertDateTimeForInput(props.timeSlot.to);

  function submitHandler(event) {
    event.preventDefault();
    const enteredWindowBegin = Helper.convertDateTime(
      windowBeginInputRef.current.value
    );
    const enteredWindowEnd = Helper.convertDateTime(
      windowEndInputRef.current.value
    );

    const newTimeSlotData = {
      timeFrom: enteredWindowBegin,
      timeTo: enteredWindowEnd,
    };

    if (windowBeginInputRef.current.value >= windowEndInputRef.current.value) {
      setError(
        "The start date and time of the recording cannot be later than the end"
      );
    } else {
      props.editTimeSlot(newTimeSlotData);
      setError("");
    }
  }

  function closeModal() {
    setError("");
    props.onHide();
  }

  return (
    <Modal
      show={props.show}
      onHide={closeModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Form onSubmit={submitHandler}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Time Slot
          </Modal.Title>
        </Modal.Header>
        <ModalBody>
          <p className="text-center text-danger">{Error}</p>
          <div className="container">
            <Form.Group>
              <Form.Label>Window Begin</Form.Label>
              <Form.Control
                type="datetime-local"
                required
                defaultValue={from}
                id="from"
                ref={windowBeginInputRef}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Window End</Form.Label>
              <Form.Control
                type="datetime-local"
                required
                defaultValue={to}
                id="to"
                ref={windowEndInputRef}
              />
            </Form.Group>
          </div>
        </ModalBody>
        <Modal.Footer>
          <Button type="submit" variant="success">
            Submit
          </Button>
          <Button variant="danger" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default EditTimeSlotModal;
