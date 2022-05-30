import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import VaccinationCenterCard from "../../../../components/doctor/VaccinationCenterCard";
import ProfileDataCard from "../../../../components/shared/ProfileDataCard";
import { basicURL } from "../../../../Services";
import Auth from "../../../../services/Auth";

function Home() {
  const navigate = useNavigate();
  const [loadedPatient, setLoadedPatient] = useState({});
  const [loadedDoctor, setLoadedDoctor] = useState({});

  async function fetchingData() {
    const doctorId = Auth.getUserId();
    const token = Auth.getFullToken();
    const responseDoctor = await fetch(basicURL + "/doctor/info/" + doctorId, {
      headers: { Authorization: token },
    });
    const doctor = await responseDoctor.json();
    setLoadedDoctor(doctor);

    const patientId = doctor.patientAccountId;
    const responsePatient = await fetch(
      basicURL + "/patient/info/" + patientId,
      { headers: { Authorization: token } }
    );
    const patient = await responsePatient.json();
    setLoadedPatient(patient);
  }

  function loginAsPatient() {
    const userId = loadedDoctor.patientAccountId;
    Auth.login("patient", userId);
    navigate("/patient");
    window.location.reload();
  }

  useEffect(() => {
    fetchingData();
  }, []);

  return (
    <div>
      <h1 className="text-center">Doctor</h1>
      <Container className="mt-4">
        <Row className="mb-4">
          <Col>
            <ProfileDataCard user={loadedPatient} />
          </Col>
          <Col>
            <VaccinationCenterCard user={loadedDoctor} />
          </Col>
        </Row>
        <Button onClick={loginAsPatient}>Login as patient</Button>
      </Container>
    </div>
  );
}

export default Home;
