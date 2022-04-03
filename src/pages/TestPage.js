import { Button } from "react-bootstrap";
import { useState } from "react";
import EditPacientModal from "../components/EditPacientModal";

function TestPage() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <EditPacientModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default TestPage;
