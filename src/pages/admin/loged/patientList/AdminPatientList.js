import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import EditPatientModal from "../../../../components/admin/EditPatientModal";
import DataPatientModal from "../../../../components/admin/DataPatientModal";
import { Table } from "../../../../components/Table";
import { basicURL } from "../../../../Services";
import { Active } from "../../../../components/shared/Active";
import Auth from "../../../../services/Auth";

export function AdminPatientList() {
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
      Header: "Is active",
      accessor: "active",
      Cell: ({ cell: { value } }) => (
        <div className="text-center">
          <Active values={value} />
        </div>
      ),
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
              <Button
                variant="danger"
                onClick={() => deleteHandler(row.row.original.id)}
              >
                Delete
              </Button>
            </div>
            <div className="col text-center">
              <Button
                variant="info"
                onClick={() => {
                  setPatient(row.row.original);
                  setModalShowInfo(true);
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
  const [loadedPatients, setLoadedPatients] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [modalShowinfo, setModalShowInfo] = useState(false);
  const [patient, setPatient] = useState({});

  async function fetchData() {
    const token = Auth.getFullToken();
    const response = await fetch(basicURL + "/admin/patients", {
      headers: { Authorization: token },
    });

    if (response.status === 200) {
      const data = await response.json();
      const patients = [];

      for (const key in data) {
        const patient = { id: key, ...data[key] };
        patients.push(patient);
      }
      setLoadedPatients(patients);
    }
  }

  useEffect(() => {
    setIsLoading(true);
    fetchData();
    setIsLoading(false);
  }, []);

  async function editHandler(editData) {
    const token = Auth.getFullToken();
    const response = await fetch(basicURL + "/admin/patients/editPatient/", {
      method: "POST",
      body: JSON.stringify(editData),
      headers: { "Content-Type": "application/json", Authorization: token },
    });
    if (response.status === 200) {
      setModalShow(false);
      fetchData();
    }
  }

  async function deleteHandler(patientId) {
    if (window.confirm("Are you sure you want to delete?")) {
      const token = Auth.getFullToken();
      const response = await fetch(
        basicURL + "/admin/patients/deletePatient/" + patientId,
        {
          method: "DELETE",
          headers: {
            Authorization: token,
          },
        }
      );
      if (response.status === 200) {
        fetchData();
      }
    }
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
      <Container className="mt-4">
        <Table columns={COLUMNPATIENT} data={loadedPatients} />
      </Container>
      <DataPatientModal
        patient={patient}
        show={modalShowinfo}
        onHide={() => setModalShowInfo(false)}
      />
      <EditPatientModal
        edit={editHandler}
        patient={patient}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default AdminPatientList;
