import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
// import { COLUMNPATIENT } from "../../../../components/columnsPatient";
import EditPatientModal from "../../../../components/EditPatientModal";
import { Table } from "../../../../components/Table";

export function AdminPacientList() {
  const COLUMNPATIENT = [
    {
      Header: "First name",
      accessor: "firstName",
    },
    {
      Header: "Last name",
      accessor: "lastName",
    },
    {
      Header: "Mail",
      accessor: "mail",
    },
    {
      Header: "Birthday",
      accessor: "dateOfBirth",
    },
    {
      Header: "Phone",
      accessor: "phoneNumber",
    },
    {
      Header: "Options",
      accessor: "action",
      Cell: (row) => (
        <div>
          <div className="row">
            <div className="col text-center">
              <Button
                variant="secondary"
                onClick={() => {
                  setPatient(row.row.original);
                  setModalShow(true);
                }}
              >
                Edit
              </Button>
            </div>
            <div className="col text-center">
              <Button variant="danger">Delete</Button>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const [isLoading, setIsLoading] = useState(true);
  const [loadedPatients, setLoadedPatients] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [patient, setPatient] = useState({});

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

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <div>
      <div className="mt-2 d-flex justify-content-center">Patients list</div>
      <Container>
        <Table columns={COLUMNPATIENT} data={loadedPatients} />
      </Container>
      <EditPatientModal
        edit={editHandler}
        patient={patient}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default AdminPacientList;
