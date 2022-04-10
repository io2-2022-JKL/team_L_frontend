import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import EditDoctorModal from "../../../../components/EditDoctorModal";
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
        </div>
      ),
    },
  ];

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

  function editHandler(editData) {
    // fetch(
    //   "https://virtserver.swaggerhub.com/01151586/VaccinationSystem/2.0.0/admin/doctors/editDoctor",
    //   {
    //     method: "PUT",
    //     body: JSON.stringify(editData),
    //     headers: { "Content-Type": "application/json" },
    //   }
    // ).then(() => {
    //   setModalShow(false)
    // });
    setModalShow(false);
    console.log(editData);
  }

  function deleteHandler(doctorId) {
    if (window.confirm("Are you sure you want to delete?")) {
      fetch(
        "https://virtserver.swaggerhub.com/01151586/VaccinationSystem/2.0.0/admin/doctors/deleteDoctor/" +
          doctorId,
        {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      ).then(() => {
        setModalShow(false);
      });
    }
  }

  const [isLoading, setIsLoading] = useState(true);
  const [loadedDoctors, setLoadedDoctors] = useState([]);
  const [modalShow, setModalShow] = useState(false);
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
      <div className="mt-2 d-flex justify-content-center">Doctors list</div>
      <Container>
        <Table columns={COLUMDOCTORS} data={loadedDoctors} />
      </Container>
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
