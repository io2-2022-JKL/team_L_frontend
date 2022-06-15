import { Form, Row, Col, Button } from "react-bootstrap";
import { useRef } from "react";
import Helper from "../../../../services/Helper";

function FilterForm(props) {
  const dateFromInputRef = useRef();
  const dateToInputRef = useRef();
  const virusInputRef = useRef();
  const cityInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredDateFrom = Helper.convertDate(dateFromInputRef.current.value);
    const enteredDateTo = Helper.convertDate(dateToInputRef.current.value);
    const enteredCity = cityInputRef.current.value;
    const enteredVirus = virusInputRef.current.value;

    const searchData = {
      dateFrom: enteredDateFrom,
      dateTo: enteredDateTo,
      city: enteredCity,
      virus: enteredVirus,
    };
    props.search(searchData);
  }

  return (
    <div>
      <Form onSubmit={submitHandler}>
        <Row className="px-4">
          <Col>
            <Form.Group>
              <Form.Label>Date from</Form.Label>
              <Form.Control
                type="date"
                required
                id="dateFrom"
                ref={dateFromInputRef}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Date to</Form.Label>
              <Form.Control
                type="date"
                required
                id="dateTo"
                ref={dateToInputRef}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>City</Form.Label>
              <select className="form-select" name="select" ref={cityInputRef}>
                {props.cities.map((city, y) => (
                  <option key={y} value={city.city}>
                    {city.city}
                  </option>
                ))}
              </select>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Virus</Form.Label>
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
        <div className="px-4">
          <Button type="submit">Search</Button>
        </div>
      </Form>
    </div>
  );
}

export default FilterForm;
