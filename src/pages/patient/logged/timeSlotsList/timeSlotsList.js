import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Table } from "../../../../components/Table";
import { basicURL } from "../../../../Services";
import FilterForm from "./FilterForm";

function TimeSlotsList() {
  const COLUMNAPPOINTMENT = [
    {
      Header: "Time Slot Id",
      accessor: "timeSlotId",
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
      Header: "Center Name",
      accessor: "vaccinationCenterName",
    },
    {
      Header: "Center City",
      accessor: "vaccinationCenterCity",
    },
  ];

  const [loadedAppointments, setLoadedAppointments] = useState([]);

  async function fetchingData(searchData) {
    const city = searchData.city;
    const dateFrom = searchData.dateFrom;
    const dateTo = searchData.dateTo;
    const virus = searchData.virus;
    const response = await fetch(
      basicURL +
        "/patient/timeSlots/Filter?city=" +
        city +
        "&dateFrom=" +
        dateFrom +
        "&dateTo=" +
        dateTo +
        "&virus=" +
        virus
    );

    if (response.status === 200) {
      const data = await response.json();

      const appointmets = [];
      for (const key in data) {
        const appointmet = { id: key, ...data[key] };
        appointmets.push(appointmet);
      }
      setLoadedAppointments(appointmets);
    }
  }

  return (
    <div className="mt-4">
      <FilterForm search={fetchingData} />
      <Container className="mt-4">
        <Table columns={COLUMNAPPOINTMENT} data={loadedAppointments} />
      </Container>
    </div>
  );
}

export default TimeSlotsList;
