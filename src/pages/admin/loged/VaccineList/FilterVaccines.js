import { useRef } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

function FilterVaccines(props) {
  const virusInputRef = useRef();
  function submitHandler(event) {
    event.preventDefault();
    const enteredVirus = virusInputRef.current.value;
    props.search(enteredVirus);
  }

  return (
    <div>
      <Form onSubmit={submitHandler}>
        <Row className="px-4">
          <Col>
            <Form.Group>
              <Form.Label>Virus:</Form.Label>

              <select className="form-select" name="select" ref={virusInputRef}>
                {props.viruses.map((virus, y) => (
                  <option key={y} value={virus.virus}>
                    {virus.virus}
                  </option>
                ))}
              </select>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="mt-2 px-4">
              <Button type="submit">Search</Button>
            </div>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default FilterVaccines;
