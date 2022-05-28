import { useRef, useState } from "react";
import { Form, Modal, ModalBody, Button } from "react-bootstrap";

export function EditVaccineModal(props) {
  const CompanyInputRef = useRef();
  const NameInputRef = useRef();
  const DoseNumberInputRef = useRef();
  const virusInputRef = useRef();
  const MinDoseDaysInputRef = useRef();
  const MaxDoseDaysInputRef = useRef();
  const MinAgeInputRef = useRef();
  const MaxAgeInputRef = useRef();
  const IsActiveInputRef = useRef();

  const [Error, setError] = useState("");

  function submitHandler(event) {
    event.preventDefault();

    const vaxID = props.vaccine.vaccineId;

    const enteredMinDoseDays = Number(MinDoseDaysInputRef.current.value);
    const enteredMaxDoseDays = Number(MaxDoseDaysInputRef.current.value);

    const enteredMinAge = Number(MinAgeInputRef.current.value);
    const enteredMaxAge = Number(MaxAgeInputRef.current.value);

    const enteredDoseNUmber = Number(DoseNumberInputRef.current.value);

    const enteredIsActive = IsActiveInputRef.current.value === "true";
    const enteredCompany = CompanyInputRef.current.value;
    const enteredName = NameInputRef.current.value;
    const enteredVirus = virusInputRef.current.value;

    const editVaccine = {
      vaccineId: vaxID,
      company: enteredCompany,
      name: enteredName,
      numberOfDoses: enteredDoseNUmber,
      minDaysBetweenDoses: enteredMinDoseDays,
      maxDaysBetweenDoses: enteredMaxDoseDays,
      virus: enteredVirus,
      minPatientAge: enteredMinAge,
      maxPatientAge: enteredMaxAge,
      active: enteredIsActive,
    };

    if (enteredMinDoseDays >= enteredMaxDoseDays) {
      setError(
        "The maximal numbeer of days cannot be lower than the minimal number of days."
      );
    } else if (enteredMinAge >= enteredMaxAge) {
      setError("The maximal age cannot be lower than the minimal age.");
    } else {
      props.editVaccine(editVaccine);
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
            New Vaccine
          </Modal.Title>
        </Modal.Header>
        <ModalBody>
          <p className="text-center text-danger">{Error}</p>
          <div className="container">
            <Form.Group>
              <Form.Label>Company</Form.Label>
              <Form.Control
                type="text"
                required
                defaultValue={props.vaccine.company}
                id="company"
                ref={CompanyInputRef}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                required
                defaultValue={props.vaccine.name}
                id="name"
                ref={NameInputRef}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Number of doses</Form.Label>
              <Form.Control
                type="number"
                required
                defaultValue={props.vaccine.numberOfDoses}
                min={0}
                id="numberOfDoses"
                ref={DoseNumberInputRef}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Minimal days between doses</Form.Label>
              <Form.Control
                type="number"
                required
                defaultValue={props.vaccine.minDaysBetweenDoses}
                min={0}
                id="minDaysBetweenDoses"
                ref={MinDoseDaysInputRef}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Maximal days between doses</Form.Label>
              <Form.Control
                type="number"
                required
                defaultValue={props.vaccine.maxDaysBetweenDoses}
                min={0}
                id="maxDaysBetweenDoses"
                ref={MaxDoseDaysInputRef}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Virus</Form.Label>
              <Form.Control
                as="select"
                required
                defaultValue={props.vaccine.virus}
                id="virus"
                ref={virusInputRef}
              >
                {Object.keys(props.virus).map((opt) => (
                  <option
                    key={props.virus[opt].id}
                    value={props.virus[opt].virus}
                  >
                    {props.virus[opt].virus}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Minimal age</Form.Label>
              <Form.Control
                type="number"
                required
                defaultValue={props.vaccine.minPatientAge}
                min={0}
                id="minPatientAge"
                ref={MinAgeInputRef}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Maximal age</Form.Label>
              <Form.Control
                type="number"
                required
                defaultValue={props.vaccine.maxPatientAge}
                min={0}
                id="maxPatientAge"
                ref={MaxAgeInputRef}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Active</Form.Label>
              <Form.Control
                as="select"
                defaultValue={props.vaccine.active}
                ref={IsActiveInputRef}
              >
                <option value="true">true</option>
                <option value="false">false</option>
              </Form.Control>
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

export default EditVaccineModal;
