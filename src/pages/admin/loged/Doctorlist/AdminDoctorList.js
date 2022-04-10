import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { COLUMDOCTORS } from "../../../../components/columnsDoctors";
import { Table } from "../../../../components/Table";

export function AdminDoctorList() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedDoctors, setLoadedDoctors] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://virtserver.swaggerhub.com/01151586/VaccinationSystem/2.0.0/admin/doctors"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const doctors = [];

        for (const key in data) {
          const doctor = { id: key, ...data[key] };
          doctors.push(doctor);
        }
        setIsLoading(false);
        setLoadedDoctors(doctors);
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
      <div className="mt-2 d-flex justify-content-center">Doctors list</div>
      <Container>
        <Table columns={COLUMDOCTORS} data={loadedDoctors} />
      </Container>
    </div>
  );
}

export default AdminDoctorList;
