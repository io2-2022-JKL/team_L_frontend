import { useRef, useState } from "react";
import { Form, Modal, ModalBody, Button } from "react-bootstrap";
import Helper from "../../services/Helper";

export function NewTimeSlotModal(props) {
  const windowBeginInputRef = useRef();
  const windowEndInputRef = useRef();
  const timeSlotDurationInMinutesInputRef = useRef();
  const [Error, setError] = useState("");

  function submitHandler(event) {
    event.preventDefault();
    const enteredWindowBegin = Helper.convertDateTime(
      windowBeginInputRef.current.value
    );
    const enteredWindowEnd = Helper.convertDateTime(
      windowEndInputRef.current.value
    );
    const enteredTimeSlotDurationInMinutes = Number(
      timeSlotDurationInMinutesInputRef.current.value
    );

    const newTimeSlotsData = {
      windowBegin: enteredWindowBegin,
      windowEnd: enteredWindowEnd,
      timeSlotDurationInMinutes: enteredTimeSlotDurationInMinutes,
    };

    if (windowBeginInputRef.current.value >= windowEndInputRef.current.value) {
      setError(
        "The start date and time of the recording cannot be later than the end"
      );
    } else {
      props.addNewTimeSlots(newTimeSlotsData);
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
            New Time Slot
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
                id="windowBegin"
                ref={windowBeginInputRef}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Window End</Form.Label>
              <Form.Control
                type="datetime-local"
                required
                id="windowEnd"
                ref={windowEndInputRef}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Duration (Min)</Form.Label>
              <Form.Control
                type="number"
                required
                min={0}
                max={60}
                id="timeSlotDurationInMinutes"
                ref={timeSlotDurationInMinutesInputRef}
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

export default NewTimeSlotModal;
