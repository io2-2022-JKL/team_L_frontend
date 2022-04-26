import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
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
                variant="danger"
                onClick={() => {
                  setTimeSlot(row.row.original);
                }}
              >
                Remove
              </Button>
            </div>
          </div>
        </div>
      ),
    },
  ];
  const [isLoading, setIsLoading] = useState(true);
  const [loadedTimeSlots, setLoadedTimeSlots] = useState([]);
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
        <Table columns={COLUMNINTIMESLOTS} data={loadedTimeSlots} />
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
