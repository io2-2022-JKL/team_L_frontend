import { Form, Modal, ModalBody, Button } from "react-bootstrap";
import "../Modal.module.css";

function DataCertificate(props) {
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
            Certificate
          </Modal.Title>
        </Modal.Header>
        <ModalBody>
          <div className="container">
            <Form.Group>
              <Form.Label>URL</Form.Label>
              <Form.Control
                type="input"
                required
                id="url"
                disabled
                defaultValue={props.certificate.url}
              />
              <Button
                onClick={() => {
                  window.open(
                    props.certificate.url,
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
              >
                Download certificate
              </Button>
            </Form.Group>
            <Form.Group>
              <Form.Label>Vaccine Name</Form.Label>
              <Form.Control
                type="input"
                required
                disabled
                id="vaccineName"
                defaultValue={props.certificate.vaccineName}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Vaccine Company</Form.Label>
              <Form.Control
                type="input"
                required
                id="vaccineCompany"
                disabled
                defaultValue={props.certificate.vaccineCompany}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Virus Type</Form.Label>
              <Form.Control
                type="input"
                required
                id="virusType"
                disabled
                defaultValue={props.certificate.virusType}
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

export default DataCertificate;
