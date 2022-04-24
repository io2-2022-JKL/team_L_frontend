import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import DataFormerAppointments from "../../../../components/patient/DataFormerAppointments";
import { Table } from "../../../../components/Table";
import { basicURL } from "../../../../Services";
import Auth from "../../../../services/Auth";

function FormerApointments() {
  const COLUMNFORMERAPPOINTMENTS = [
    {
      Header: "Vaccine",
      accessor: "vaccineName",
    },
    {
      Header: "Company",
      accessor: "vaccineCompany",
    },
    {
      Header: "Vaccination center",
      accessor: "vaccinationCenterName",
    },
    {
      Header: "Dose",
      accessor: "whichVaccineDose",
    },
    {
      Header: "Begin",
      accessor: "windowBegin",
    },
    {
      Header: "End",
      accessor: "windowEnd",
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
                  setFormerAppointment(row.row.original);
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
  const [loadedFormerAppointment, setLoadedFormerAppointment] = useState([]);
  const [modalShowinfo, setModalShowInfo] = useState(false);
  const [formerAppointment, setFormerAppointment] = useState({});
  const [errors, setErrors] = useState("");

  async function fetchData() {
    const userId = Auth.getUserId();
    const response = await fetch(
      basicURL + "/patient/appointments/formerAppointments/" + userId
    );

    if (response.status === 200) {
      const data = await response.json();
      const formerAppointments = [];

      for (const key in data) {
        const formerAppointment = { id: key, ...data[key] };
        formerAppointments.push(formerAppointment);
      }
      setLoadedFormerAppointment(formerAppointments);
    } else {
      setErrors(response.statusText);
    }
  }

  useEffect(() => {
    setIsLoading(true);
    fetchData();
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <section className="text-center">
        <p>Loading...</p>
      </section>
    );
  }

  if (errors !== "") {
    return (
      <section className="text-center">
        <p>{errors}</p>
      </section>
    );
  }

  return (
    <div>
      <Container className="mt-4">
        <Table
          columns={COLUMNFORMERAPPOINTMENTS}
          data={loadedFormerAppointment}
        />
      </Container>
      <DataFormerAppointments
        formerAppointment={formerAppointment}
        show={modalShowinfo}
        onHide={() => setModalShowInfo(false)}
      />
    </div>
  );
}

export default FormerApointments;
