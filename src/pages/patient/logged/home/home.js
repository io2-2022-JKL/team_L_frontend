import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import ProfileDataCard from "../../../../components/shared/ProfileDataCard";
import { basicURL } from "../../../../Services";
import Auth from "../../../../services/Auth";

function Home() {
  const [loadedPatient, setLoadedPatient] = useState({});

  async function fetchingData() {
    const userId = Auth.getUserId();
    const response = await fetch(basicURL + "/patient/info/" + userId);

    if (response.status === 200) {
      const data = await response.json();
      setLoadedPatient(data);
    }
  }

  useEffect(() => {
    fetchingData();
  }, []);

  return (
    <div>
      <Container className="mt-4">
        <h2 className="mb-3">Profile Data</h2>
        <ProfileDataCard user={loadedPatient} />
      </Container>
    </div>
  );
}

export default Home;
