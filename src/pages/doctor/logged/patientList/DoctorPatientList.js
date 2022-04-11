import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import DataPatientModal from "../../../../components/DataPatientModal";
import DataFormerAppointment from "../../../../components/DataFormerAppointment";
import { Table } from "../../../../components/Table";

export function DoctorPatientList() {
  const COLUMNAPPOINTMENT = [
    {
      Header: "Vaccine",
      accessor: "vaccineName",
    },
    {
      Header: "Company",
      accessor: "vaccineCompany",
    },
    {
      Header: "Dose",
      accessor: "whichVaccineDose",
    },
    {
      Header: "Virus",
      accessor: "vaccineVirus",
    },
    {
      Header: "Batch number",
      accessor: "batchNumber",
    },
    {
      Header: "Options",
      accessor: "action",
      Cell: (row) => (
        <div>
          <div className="row">
            <div className="col text-center">
              <Button
                variant="info"
                onClick={() => {
                  setAppointment(row.row.original);
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
  const [loadedAppointments, setLoadedAppointments] = useState([]);
  const [modalShowinfo, setModalShowInfo] = useState(false);
  const [appointmet, setAppointment] = useState({});

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://virtserver.swaggerhub.com/01151586/VaccinationSystem/2.0.0/doctor/formerAppointments/96620378-3191-4e1e-af4a-ba477b868e4f"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const appointmets = [];

        for (const key in data) {
          const appointmet = { id: key, ...data[key] };
          appointmets.push(appointmet);
        }
        setIsLoading(false);
        setLoadedAppointments(appointmets);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <div className="mt-2 d-flex justify-content-center">
          Former Appointments list
        </div>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <div>
      <div className="mt-2 d-flex justify-content-center">
        Former Appointments list
      </div>
      <Container>
        <Table columns={COLUMNAPPOINTMENT} data={loadedAppointments} />
      </Container>
      <DataFormerAppointment
        patient={appointmet}
        show={modalShowinfo}
        onHide={() => setModalShowInfo(false)}
      />
    </div>
  );
}

export default DoctorPatientList;
