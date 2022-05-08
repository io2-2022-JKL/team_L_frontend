import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import VaccinationCenterCard from "../../../../components/doctor/VaccinationCenterCard";
import ProfileDataCard from "../../../../components/shared/ProfileDataCard";
import { basicURL } from "../../../../Services";
import Auth from "../../../../services/Auth";

function Home() {
  const [loadedPatient, setLoadedPatient] = useState({});
  const [loadedDoctor, setLoadedDoctor] = useState({});

  async function fetchingData() {
    const doctorId = Auth.getUserId();
    const responseDoctor = await fetch(basicURL + "/doctor/info/" + doctorId);
    const doctor = await responseDoctor.json();
    setLoadedDoctor(doctor);

    const patientId = doctor.patientAccountId;
    const responsePatient = await fetch(
      basicURL + "/patient/info/" + patientId
    );
    const patient = await responsePatient.json();
    setLoadedPatient(patient);
  }

  useEffect(() => {
    fetchingData();
  }, []);

  return (
    <div>
      <Container className="mt-4">
        <Row>
          <Col>
            <ProfileDataCard user={loadedPatient} />
          </Col>
          <Col>
            <VaccinationCenterCard user={loadedDoctor} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
