import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import DataIncomingAppointments from "../../../../components/doctor/DataIncomingAppointments";
import { Table } from "../../../../components/Table";
import { basicURL } from "../../../../Services";
import Auth from "../../../../services/Auth";
import CheckDate from "../../../../components/doctor/CheckDate";
import Vaccination from "../../../../components/doctor/Vaccination";

function IncomingApointments() {
  const HandleVaccinationClick = async function (appointmentID) {
    const doctorid = Auth.getUserId();
    let appointmentid = appointmentID;

    setVaccinationIsLoading(true);

    try {
      const responseVaccine = await fetch(
        basicURL + "/doctor/vaccinate/" + doctorid + "/" + appointmentid
      );

      if (responseVaccine.status === 200) {
        const data = await responseVaccine.json();
        setVaccinateDetails(data);
        setModalVaccinate(true);
        console.log("Poprawne dzialanie");
      }
    } finally {
      setVaccinationIsLoading(false);
    }
  };

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
              {CheckDate(row.row.original.from) ? (
                <div className="col text-center">
                  <Button
                    variant="success"
                    onClick={() => {
                      setIncomingAppointment(row.row.original);
                      HandleVaccinationClick(row.row.original.appointmentId);
                    }}
                  >
                    Vaccination
                  </Button>
                </div>
              ) : null}
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

  const [vaccinationIsLoading, setVaccinationIsLoading] = useState(false);
  const [modalShowinfo, setModalShowInfo] = useState(false);
  const [vaccinateDetails, setVaccinateDetails] = useState({});
  const [modalVaccinate, setModalVaccinate] = useState(false);
  const [incomingAppointment, setIncomingAppointment] = useState({});
  const [errors, setErrors] = useState("");

  async function fetchData() {
    const userId = Auth.getUserId();
    const response = await fetch(
      basicURL + "/doctor/incomingAppointments/" + userId
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

  async function vaccinationOccured(batchID) {
    const doctorId = Auth.getUserId();
    const response = await fetch(
      basicURL +
        "/doctor/vaccinate/confirmVaccination/" +
        doctorId +
        "/" +
        incomingAppointment.appointmentId +
        "/" +
        batchID,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 200) {
      setVaccinateDetails({});
      const data = await response.json();
      if (data.canCertify === true) {
        const responseCertify = await fetch(
          basicURL +
            "/doctor/vaccinate/certify/" +
            doctorId +
            "/" +
            incomingAppointment.appointmentId,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (responseCertify.status === 200) {
          console.log("Doctor certify ok");
        } else {
          console.log("Doctor certify error");
        }
      } else {
        console.log("Doctor no certify");
      }
    } else {
      console.log("Vaccination occured error");
    }
    setModalVaccinate(false);
  }

  async function vaccinationDidNotOccured() {
    const doctorId = Auth.getUserId();
    console.log("DoctorID " + doctorId);
    console.log("AppointmentID " + incomingAppointment.appointmentId);

    const response = await fetch(
      basicURL +
        "/doctor/vaccinate/vaccinationDidNotHappen/" +
        doctorId +
        "/" +
        incomingAppointment.appointmentId,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 200) {
      setVaccinateDetails({});
      console.log("Vaccination did not occured ok");
    } else {
      console.log("Vaccination did not occured error");
    }
    setModalVaccinate(false);
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
      <Vaccination
        notoccured={() => vaccinationDidNotOccured()}
        occured={vaccinationOccured}
        vaccinationdata={vaccinateDetails}
        show={modalVaccinate}
        onHide={() => setModalVaccinate(false)}
      />
    </div>
  );
}

export default IncomingApointments;
