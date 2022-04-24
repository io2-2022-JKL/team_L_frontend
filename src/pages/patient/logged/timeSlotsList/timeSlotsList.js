import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import { Table } from "../../../../components/Table";
import { basicURL } from "../../../../Services";
import FilterForm from "./FilterForm";
import TimeSlotInfo from "../../../../components/patient/TimeSlotInfo";

function TimeSlotsList() {
  const COLUMNAPPOINTMENT = [
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
      Header: "Options",
      accessor: "action",
      Cell: (row) => (
        <div>
          <div className="row">
            <div className="col text-center">
              <Button
                variant="info"
                onClick={() => {
                  setChoosedTimeSlot(row.row.original);
                  setInfoModalShow(true);
                }}
              >
                More info
              </Button>
            </div>
            <div className="col text-center">
              <Button
                variant="success"
                onClick={() => {
                  // setChoosedTimeSlot(row.row.original);
                  // setInfoModalShow(true);
                }}
              >
                Reserve
              </Button>
            </div>
          </div>
        </div>
      ),
    },
  ];
  const [infoModalShow, setInfoModalShow] = useState(false);
  const [choosedTimeSlot, setChoosedTimeSlot] = useState({});
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
        console.log(appointmet[0]);
        appointmets.push(appointmet[0]);
      }
      setLoadedAppointments(appointmets);
      console.log(loadedAppointments[0]);
    }
  }

  return (
    <div className="mt-4">
      <FilterForm search={fetchingData} />
      <Container className="mt-4">
        <Table columns={COLUMNAPPOINTMENT} data={loadedAppointments} />
      </Container>
      <TimeSlotInfo
        object={choosedTimeSlot}
        show={infoModalShow}
        onHide={() => setInfoModalShow(false)}
      />
    </div>
  );
}

export default TimeSlotsList;
