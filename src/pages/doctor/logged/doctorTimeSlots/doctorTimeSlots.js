import React, { useState, useEffect } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import EditTimeSlotModal from "../../../../components/doctor/EditTimeSlotModal";
import NewTimeSlotModal from "../../../../components/doctor/NewTimeSlotModal";
import { Active } from "../../../../components/shared/Active";
import { Table } from "../../../../components/Table";
import { basicURL } from "../../../../Services";
import Auth from "../../../../services/Auth";

function DoctorTimeSlots() {
  const COLUMNINTIMESLOTS = [
    {
      Header: "",
      accessor: "checked",
      Cell: (row) => (
        <div className="text-center">
          <input
            type="checkbox"
            className="checkbox"
            id={row.row.original.id}
          />
        </div>
      ),
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
      id: "free",
      Header: "Is free",
      accessor: "isFree",
      Cell: ({ cell: { value } }) => (
        <div className="text-center">
          <Active values={value} />
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
    const token = Auth.getFullToken();
    const response = await fetch(basicURL + "/doctor/timeSlots/" + userId, {
      headers: { Authorization: token },
    });

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

  function getCheckedTimeSlots() {
    let checkboxes = document.getElementsByClassName("checkbox");
    let timeSlotsIds = [];
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        timeSlotsIds.push({ id: checkboxes[i].id });
      }
    }
    return timeSlotsIds;
  }

  async function deleteTimeSlots() {
    const userId = Auth.getUserId();
    const token = Auth.getFullToken();
    let timeSlotsIds = getCheckedTimeSlots();
    if (window.confirm("Are you sure you want to delete?")) {
      await fetch(basicURL + "/doctor/timeSlots/delete/" + userId, {
        method: "POST",
        body: JSON.stringify(timeSlotsIds),
        headers: { "Content-Type": "application/json", Authorization: token },
      });
      fetchData();
    }
  }

  async function addNewTimeSlots(newTimeSlotsData) {
    const userId = Auth.getUserId();
    const token = Auth.getFullToken();
    const response = await fetch(
      basicURL + "/doctor/timeSlots/create/" + userId,
      {
        method: "POST",
        body: JSON.stringify(newTimeSlotsData),
        headers: { "Content-Type": "application/json", Authorization: token },
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
    const token = Auth.getFullToken();
    const timeSlotId = TimeSlot.id;
    const response = await fetch(
      basicURL + "/doctor/timeSlots/modify/" + userId + "/" + timeSlotId,
      {
        method: "POST",
        body: JSON.stringify(timeSlotData),
        headers: { "Content-Type": "application/json", Authorization: token },
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
        <Row>
          <Col>
            <Button
              className="mb-4"
              onClick={() => setModalNewTimeSlotShow(true)}
            >
              Add new time slots
            </Button>
          </Col>
          <Col>
            <Button
              variant="danger"
              className="mb-4"
              onClick={() => deleteTimeSlots()}
            >
              Delete checked time slots
            </Button>
          </Col>
        </Row>

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
