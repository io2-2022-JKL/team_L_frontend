import { Form, Modal, ModalBody, Button } from "react-bootstrap";
import "../Modal.module.css";

function DataVaccinationCentersModal(props) {
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
            Vaccination Center Data
          </Modal.Title>
        </Modal.Header>
        <ModalBody>
          <div className="container">
            <Form.Group>
              <Form.Label>Id</Form.Label>
              <Form.Control
                type="input"
                disabled
                defaultValue={props.vaccinationCenter.id}
                id="id"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="input"
                disabled
                defaultValue={props.vaccinationCenter.name}
                id="id"
              />
            </Form.Group>

            <div className="mb-2">
              <h6>Address</h6>
              {props.vaccinationCenter.city}, {props.vaccinationCenter.street}
            </div>

            <div className="mb-2">
              <h6>Oppening hours</h6>
              {props.vaccinationCenter.openingHoursDays?.map((item, index) => (
                <li key={index}>
                  {item.from} - {item.to}
                </li>
              ))}
            </div>

            <div className="mb-2">
              <h6>Vaccines</h6>
              {props.vaccinationCenter.vaccines?.map((item, index) => (
                <li key={index}>{item.name} </li>
              ))}
            </div>

            <Form.Group>
              <Form.Label>Active</Form.Label>
              <select
                className="form-select"
                name="select"
                disabled
                defaultValue={props.vaccinationCenter.active}
              >
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
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

export default DataVaccinationCentersModal;
