import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Table } from "../../../../components/Table";
import { basicURL } from "../../../../Services";
import FilterTimeSlots from "./FilterTimeSlots";

function AdminTimeSlotsList() {
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
          <Free values={value}></Free> {/*do poprawy*/}
        </div>
      ),
    },
    {
      id: "active",
      Header: "Is active",
      accessor: "active",
      Cell: ({ cell: { value } }) => (
        <div className="text-center">
          <Free values={value}></Free>
        </div>
      ),
    },
  ];

  const [loadedTimeSlots, setLoadedTimeSlots] = useState([]);
  const [loadedDoctors, setLoadedDoctors] = useState([]);
  const [error, setError] = useState("");
  const [selectedDoctorId, setSelectedDoctorId] = useState("");

  useEffect(() => {
    fetchDoctors();
  }, []);

  async function fetchDoctors() {
    const response = await fetch(basicURL + "/admin/doctors");

    if (response.status === 200) {
      const data = await response.json();
      const doctors = [];

      for (const key in data) {
        const doctor = { id: key, ...data[key] };
        doctors.push(doctor);
      }
      setLoadedDoctors(doctors);
    }
  }

  async function fetchTimeSlots(doctorId) {
    setSelectedDoctorId(doctorId);
    const response = await fetch(
      basicURL + "/admin/doctors/timeslots/" + doctorId
    );

    if (response.status === 200) {
      const data = await response.json();
      const timeSlots = [];

      for (const key in data) {
        const timeSlot = { id: key, ...data[key] };
        timeSlots.push(timeSlot);
      }
      setLoadedTimeSlots(timeSlots);
      setError("");
    } else if (response.status === 404) {
      setError("Timeslots not found");
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
    let timeSlotsIds = getCheckedTimeSlots();
    if (
      timeSlotsIds.length > 0 &&
      window.confirm("Are you sure you want to delete?")
    ) {
      await fetch(basicURL + "/admin/doctors/timeSlots/deleteTimeSlots", {
        method: "POST",
        body: JSON.stringify(timeSlotsIds),
        headers: { "Content-Type": "application/json" },
      });
      fetchTimeSlots(selectedDoctorId);
    }
  }

  return (
    <div>
      <div className="mt-4 col-4">
        <FilterTimeSlots
          doctors={loadedDoctors}
          search={fetchTimeSlots}
          delete={deleteTimeSlots}
        />
      </div>

      <Container className="mt-4">
        {error === "" ? (
          <Table columns={COLUMNINTIMESLOTS} data={loadedTimeSlots} />
        ) : (
          <p className="text-center text-danger">{error}</p>
        )}
      </Container>
    </div>
  );
}

const Free = ({ values }) => {
  if (values) {
    return <span>True</span>;
  } else {
    return <span>False</span>;
  }
};

export default AdminTimeSlotsList;
