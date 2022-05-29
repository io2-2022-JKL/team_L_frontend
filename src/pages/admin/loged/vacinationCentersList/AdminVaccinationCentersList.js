import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import { Active } from "../../../../components/shared/Active";
import AddVaccinationCentersModal from "../../../../components/admin/AddVaccinationCenterModal";
import DataVaccinationCentersModal from "../../../../components/admin/DataVaccinationCentersModal";
import EditVaccinationCentersModal from "../../../../components/admin/EditVaccinationCenterModal";
import { Table } from "../../../../components/Table";
import { basicURL } from "../../../../Services";

function AdminVaccinationCentersList() {
  const COLUMNVACCINATIONCENTER = [
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "City",
      accessor: "city",
    },
    {
      Header: "Address",
      accessor: "street",
    },
    {
      Header: "Is active",
      accessor: "active",
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
                  setVaccinationCenter(row.row.original);
                  setModalShowEdit(true);
                }}
              >
                Edit
              </Button>
            </div>
            <div className="col text-center">
              <Button
                variant="danger"
                onClick={() => deleteHandler(row.row.original.id)}
              >
                Delete
              </Button>
            </div>
            <div className="col text-center">
              <Button
                variant="info"
                onClick={() => {
                  setVaccinationCenter(row.row.original);
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
  const [loadedVaccinationCenters, setLoadedVaccinationCenters] = useState([]);
  const [loadedVaccines, setLoadedVaccines] = useState([]);
  const [modalShowEdit, setModalShowEdit] = useState(false);
  const [modalShowinfo, setModalShowInfo] = useState(false);
  const [vaccinationCenter, setVaccinationCenter] = useState({});
  const [modalShowNew, setModalShowNew] = useState(false);

  async function fetchData() {
    const response = await fetch(basicURL + "/admin/vaccinationCenters");

    if (response.status === 200) {
      const data = await response.json();
      const vaccinationCenters = [];

      for (const key in data) {
        const vaccinationCenter = { id: key, ...data[key] };
        vaccinationCenters.push(vaccinationCenter);
      }
      setLoadedVaccinationCenters(vaccinationCenters);
    }
  }

  async function fetchVaccines() {
    const response = await fetch(basicURL + "/admin/vaccines");

    if (response.status === 200) {
      const data = await response.json();
      const vaccines = [];

      for (const key in data) {
        const vaccine = { id: key, ...data[key] };
        vaccines.push(vaccine);
      }
      setLoadedVaccines(vaccines);
    }
  }

  useEffect(() => {
    setIsLoading(true);
    fetchData();
    fetchVaccines();
    setIsLoading(false);
  }, []);

  async function editHandler(editData) {
    const response = await fetch(
      basicURL + "/admin/vaccinationCenters/editVaccinationCenter/",
      {
        method: "POST",
        body: JSON.stringify(editData),
        headers: { "Content-Type": "application/json" },
      }
    );
    if (response.status === 200) {
      setModalShowEdit(false);
      fetchData();
    }
  }

  async function addHandler(data) {
    const response = await fetch(
      basicURL + "/admin/vaccinationCenters/addVaccinationCenter/",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      }
    );
    if (response.status === 200) {
      setModalShowNew(false);
      fetchData();
    }
  }

  async function deleteHandler(vaccinationCenterId) {
    if (window.confirm("Are you sure you want to delete?")) {
      const response = await fetch(
        basicURL +
          "/admin/vaccinationCenters/deleteVaccinationCenter/" +
          vaccinationCenterId,
        {
          method: "DELETE",
        }
      );
      if (response.status === 200) {
        fetchData();
      }
    }
  }

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
        <Button className="mb-4" onClick={() => setModalShowNew(true)}>
          Add new vaccination center
        </Button>
        <Table
          columns={COLUMNVACCINATIONCENTER}
          data={loadedVaccinationCenters}
        />
      </Container>
      <DataVaccinationCentersModal
        vaccinationCenter={vaccinationCenter}
        show={modalShowinfo}
        onHide={() => setModalShowInfo(false)}
      />
      <EditVaccinationCentersModal
        vaccines={loadedVaccines}
        edit={editHandler}
        vaccinationCenter={vaccinationCenter}
        show={modalShowEdit}
        onHide={() => setModalShowEdit(false)}
      />
      <AddVaccinationCentersModal
        vaccines={loadedVaccines}
        add={addHandler}
        show={modalShowNew}
        onHide={() => setModalShowNew(false)}
      />
    </div>
  );
}

export default AdminVaccinationCentersList;
