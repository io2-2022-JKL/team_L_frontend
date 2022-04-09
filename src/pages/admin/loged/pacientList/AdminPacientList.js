import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";

function AdminPacientList() {
  const [isLoading, setIsLoading] = useState(true);
  const [deps, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://virtserver.swaggerhub.com/01151586/VaccinationSystem/2.0.0/admin/patients"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = { id: key, ...data[key] };
          meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadedMeetups(meetups);
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
              {deps.map((dep) => (
                <tr key={dep.firstName}>
                  <td>{dep.firstName}</td>
                  <td>{dep.lastName}</td>
                  <td>{dep.mail}</td>
                  <td>{dep.phoneNumber}</td>
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
