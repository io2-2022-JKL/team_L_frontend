import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";

function AdminPacientList() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedPatients, setLoadedPatients] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://virtserver.swaggerhub.com/01151586/VaccinationSystem/2.0.0/admin/patients"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const patients = [];

        for (const key in data) {
          const patient = { id: key, ...data[key] };
          patients.push(patient);
        }
        setIsLoading(false);
        setLoadedPatients(patients);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <div>
      <div className="mt-2 d-flex justify-content-center">
        lista z pacjentami
      </div>

      <Container>
        <div>
          <Table className="mt-4" hover striped bordered size="sm">
            <thead>
              <tr>
                <th>Imie</th>
                <th>Nazwisko</th>
                <th>mail</th>
                <th>Telefon</th>
                <th>Opcje</th>
              </tr>
            </thead>
            <tbody>
              {loadedPatients.map((patient) => (
                <tr key={patient.firstName}>
                  <td>{patient.firstName}</td>
                  <td>{patient.lastName}</td>
                  <td>{patient.mail}</td>
                  <td>{patient.phoneNumber}</td>
                  <td>Edycja / usuwanie</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  );
}

export default AdminPacientList;
