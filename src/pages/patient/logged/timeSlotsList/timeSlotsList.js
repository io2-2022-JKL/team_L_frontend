import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Table } from "../../../../components/Table";
import { basicURL } from "../../../../Services";

function TimeSlotsList() {
  const COLUMNAPPOINTMENT = [
    {
      Header: "Time Slot Id",
      accessor: "timeSlotId",
    },
    {
      Header: "from",
      accessor: "from",
    },
    {
      Header: "To",
      accessor: "to",
    },
    {
      Header: "Center Name",
      accessor: "vaccinationCenterName",
    },
    {
      Header: "Center City",
      accessor: "vaccinationCenterCity",
    },
  ];

  const [isLoading, setIsLoading] = useState(true);
  const [loadedAppointments, setLoadedAppointments] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      basicURL +
        "/patient/timeSlots/Filter?city=Warszawa&dateFrom=2022-01-20T18%3A20%3A00.604Z&dateTo=2022-01-30T18%3A30%3A00.604Z&virus=Koronawirus"
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
      })
      .catch((error) => {
        console.log("error: " + error);
        this.setState({ requestFailed: true });
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
      <Container className="mt-4">
        <Table columns={COLUMNAPPOINTMENT} data={loadedAppointments} />
      </Container>
    </div>
  );
}

export default TimeSlotsList;
