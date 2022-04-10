import React, { useState, useEffect } from "react";
import { Container, Button, Modal } from "react-bootstrap";
import { DataPatientModal } from "../../../../components/DataPatientModal";
import { Table } from "../../../../components/Table";

export function AdminDoctorList() {
  const COLUMDOCTORS = [
    {
      Header: "First Name",
      accessor: "firstName",
    },
    {
      Header: "Last Name",
      accessor: "lastName",
    },
    {
      Header: "Mail",
      accessor: "mail",
    },
    {
      Header: "Vaccination Center",
      accessor: "name",
    },
    {
      Header: "City",
      accessor: "city",
    },
    {
      Header: "Telefon",
      accessor: "phoneNumber",
    },
    {
      Header: "Options",
      accessor: "action",
      Cell: (row) => (
        <div>
          <div className="row">
            <div className="col text-center">
              <Button variant="secondary" onClick={() => {}}>
                Edit
              </Button>
            </div>
            <div className="col text-center">
              <Button variant="danger">Delete</Button>
            </div>
            <div className="col text-center">
              <Button
                variant="info"
                onClick={(e) => {
                  setDoctor(row.row.original);
                  setModalShow(true);
                }}
              >
                Info
              </Button>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const [isLoading, setIsLoading] = useState(true);
  const [loadedDoctors, setLoadedDoctors] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [doctor, setDoctor] = useState({});

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
      <DataPatientModal
        doctor={doctor}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default AdminDoctorList;
