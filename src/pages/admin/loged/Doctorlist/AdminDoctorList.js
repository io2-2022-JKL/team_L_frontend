import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import { DataDoctorsModal } from "../../../../components/admin/DataDoctorsModal";
import EditDoctorModal from "../../../../components/admin/EditDoctorModal";
import { Table } from "../../../../components/Table";
import { basicURL } from "../../../../Services";

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
        <div className="row">
          <div className="col text-center">
            <Button
              variant="secondary"
              onClick={() => {
                setDoctor(row.row.original);
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
                setDoctor(row.row.original);
                setModalShowInfo(true);
              }}
            >
              Info
            </Button>
          </div>
        </div>
      ),
    },
  ];

  async function fetchData() {
    const response = await fetch(basicURL + "/admin/doctors");

    if (response.status === 200) {
      const data = await response.json();
      const doctors = [];

      for (const key in data) {
        const doctor = { id: key, ...data[key] };
        doctors.push(doctor);
      }
      setLoadedDoctors(doctors);
    }
  }

  useEffect(() => {
    setIsLoading(true);
    fetchData();
    setIsLoading(false);
  }, []);

  async function editHandler(editData) {
    const response = await fetch(basicURL + "/admin/doctors/editDoctor", {
      method: "POST",
      body: JSON.stringify(editData),
      headers: { "Content-Type": "application/json" },
    });

    if (response.status === 200) {
      setModalShow(false);
      fetchData();
    }
  }

  async function deleteHandler(doctorId) {
    if (window.confirm("Are you sure you want to delete?")) {
      const response = await fetch(
        basicURL + "/admin/doctors/deleteDoctor/" + doctorId,
        {
          method: "DELETE",
        }
      );

      if (response.status === 200) {
        fetchData();
      }
    }
  }

  const [isLoading, setIsLoading] = useState(true);
  const [loadedDoctors, setLoadedDoctors] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [modalShowinfo, setModalShowInfo] = useState(false);
  const [doctor, setDoctor] = useState({});

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
        <Table columns={COLUMDOCTORS} data={loadedDoctors} />
      </Container>
      <DataDoctorsModal
        doctor={doctor}
        show={modalShowinfo}
        onHide={() => setModalShowInfo(false)}
      />
      <EditDoctorModal
        edit={editHandler}
        doctor={doctor}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default AdminDoctorList;
