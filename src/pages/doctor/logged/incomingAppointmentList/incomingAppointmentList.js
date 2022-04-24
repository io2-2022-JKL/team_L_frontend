import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import DataIncomingAppointments from "../../../../components/doctor/DataIncomingAppointments";
import { Table } from "../../../../components/Table";
import { basicURL } from "../../../../Services";
import Auth from "../../../../services/Auth";

function IncomingApointments() {
  const COLUMNINCOMINGAPPOINTMENTS = [
    {
      Header: "Vaccine",
      accessor: "vaccineName",
    },
    {
      Header: "Company",
      accessor: "vaccineCompany",
    },
    {
      Header: "Virus",
      accessor: "vaccineVirus",
    },
    {
      Header: "Dose",
      accessor: "whichVaccineDose",
    },
    {
      Header: "From",
      accessor: "from",
    },
    {
      Header: "To",
      accessor: "to",
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
                  setIncomingAppointment(row.row.original);
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
  const [loadedIncomingAppointment, setLoadedIncomingAppointment] = useState(
    []
  );
  const [modalShowinfo, setModalShowInfo] = useState(false);
  const [incomingAppointment, setIncomingAppointment] = useState({});
  const [errors, setErrors] = useState("");

  async function fetchData() {
    const userId = Auth.getUserId();
    const response = await fetch(
      basicURL + "/doctor/formerAppointments/" + userId
    );

    if (response.status === 200) {
      const data = await response.json();
      const incomingAppointments = [];

      for (const key in data) {
        const incomingAppointment = { id: key, ...data[key] };
        incomingAppointments.push(incomingAppointment);
      }
      setLoadedIncomingAppointment(incomingAppointments);
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
          columns={COLUMNINCOMINGAPPOINTMENTS}
          data={loadedIncomingAppointment}
        />
      </Container>
      <DataIncomingAppointments
        incomingAppointment={incomingAppointment}
        show={modalShowinfo}
        onHide={() => setModalShowInfo(false)}
      />
    </div>
  );
}

export default IncomingApointments;
