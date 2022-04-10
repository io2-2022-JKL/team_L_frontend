import { Button } from "react-bootstrap";
import { useState } from "react";
import EditPatientModal from "../components/EditPatientModal";

function TestPage() {
  function editHandler(editData) {
    // fetch("", {
    //   method: "POST",
    //   body: JSON.stringify(registrationData),
    //   headers: { "Content-Type": "application/json" },
    // }).then(() => {
    //   navigate("/");
    // });
    console.log(editData);
  }
  const [modalShow, setModalShow] = useState(false);
  return (
    <div>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <EditPatientModal
        edit={editHandler}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default TestPage;
