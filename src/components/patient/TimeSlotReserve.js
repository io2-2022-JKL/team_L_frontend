import { Form, Modal, ModalBody, Button } from "react-bootstrap";
import { useState } from "react";
import "../Modal.module.css";

function TimeSlotReserve(props) {
  const availableVaccines = props.object.availableVaccines;
  const [selectedVaccine, setSelectedVaccine] = useState("");

  function submitHandler(event) {
    event.preventDefault();
    const choosedVaccineId = selectedVaccine;

    props.reserve(choosedVaccineId);
  }

  function onValueChange(event) {
    setSelectedVaccine(event.target.value);
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
            Choose vaccine
          </Modal.Title>
        </Modal.Header>
        <ModalBody>
          <div className="container">
            {availableVaccines?.map((item, index) => (
              <Form.Group key={index}>
                <input
                  checked={selectedVaccine === item.vaccineId}
                  type="radio"
                  value={item.vaccineId}
                  onChange={onValueChange}
                />
                <Form.Label>{item.name}</Form.Label>
              </Form.Group>
            ))}
          </div>
        </ModalBody>
        <Modal.Footer>
          <Button variant="success" type="submit">
            Reserve
          </Button>
          <Button variant="danger" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default TimeSlotReserve;
