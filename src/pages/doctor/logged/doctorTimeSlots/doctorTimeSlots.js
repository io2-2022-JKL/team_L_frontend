import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import EditTimeSlotModal from "../../../../components/doctor/EditTimeSlotModal";
import NewTimeSlotModal from "../../../../components/doctor/NewTimeSlotModal";
import { Table } from "../../../../components/Table";
import { basicURL } from "../../../../Services";
import Auth from "../../../../services/Auth";
import styles from "./timeSlot.module.css";

function DoctorTimeSlots() {
  const COLUMNINTIMESLOTS = [
    {
      Header: "From",
      accessor: "from",
    },
    {
      Header: "To",
      accessor: "to",
    },
    // testy
    {
      id: "free",
      Header: "Is free",
      accessor: "isFree",
      Cell: ({ cell: { value } }) => (
        <div className="row">
          <div className="col text-center">
            <Free values={value}></Free>
          </div>
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
                  setTimeSlot(row.row.original);
                  setModalEditTimeSlotShow(true);
                }}
              >
                Edit
              </Button>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const [isLoading, setIsLoading] = useState(true);
  const [loadedTimeSlots, setLoadedTimeSlots] = useState([]);
  const [modalNewTimeSlotShow, setModalNewTimeSlotShow] = useState(false);
  const [modalEditTimeSlotShow, setModalEditTimeSlotShow] = useState(false);
  const [TimeSlot, setTimeSlot] = useState({});
  const [errors, setErrors] = useState("");

  async function fetchData() {
    const userId = Auth.getUserId();
    const response = await fetch(basicURL + "/doctor/timeSlots/" + userId);

    if (response.status === 200) {
      const data = await response.json();
      const TimeSlots = [];

      for (const key in data) {
        const TimeSlot = { id: key, ...data[key] };
        TimeSlots.push(TimeSlot);
      }
      setLoadedTimeSlots(TimeSlots);
    } else {
      setErrors(response.statusText);
    }
  }

  async function addNewTimeSlots(newTimeSlotsData) {
    const userId = Auth.getUserId();
    const response = await fetch(
      basicURL + "/doctor/timeSlots/create/" + userId,
      {
        method: "POST",
        body: JSON.stringify(newTimeSlotsData),
        headers: { "Content-Type": "application/json" },
      }
    );

    if (response.status === 200) {
      setModalNewTimeSlotShow(false);
      fetchData();
    } else {
      setErrors(response.statusText);
    }
  }

  async function editTimeSlot(timeSlotData) {
    const userId = Auth.getUserId();
    const timeSlotId = TimeSlot.id;
    const response = await fetch(
      basicURL + "/doctor/timeSlots/modify/" + userId + "/" + timeSlotId,
      {
        method: "POST",
        body: JSON.stringify(timeSlotData),
        headers: { "Content-Type": "application/json" },
      }
    );

    if (response.status === 200) {
      setModalEditTimeSlotShow(false);
      fetchData();
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
        <Button className="mb-4" onClick={() => setModalNewTimeSlotShow(true)}>
          Add new time slots
        </Button>
        <Table columns={COLUMNINTIMESLOTS} data={loadedTimeSlots} />
        <NewTimeSlotModal
          addNewTimeSlots={addNewTimeSlots}
          show={modalNewTimeSlotShow}
          onHide={() => setModalNewTimeSlotShow(false)}
        />
        <EditTimeSlotModal
          editTimeSlot={editTimeSlot}
          timeSlot={TimeSlot}
          show={modalEditTimeSlotShow}
          onHide={() => setModalEditTimeSlotShow(false)}
        />
      </Container>
    </div>
  );
}

export default DoctorTimeSlots;

const Free = ({ values }) => {
  if (values) {
    return <span className={styles.true}>True</span>;
  } else {
    return <span className={styles.false}>False</span>;
  }
};
