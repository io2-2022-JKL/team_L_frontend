import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import DataVaccineModal from "../../../../components/admin/DataVaccineModal";
import EditVaccineModal from "../../../../components/admin/EditVaccineModal";
import NewVaccineModal from "../../../../components/admin/NewVaccineModal";
import { Table } from "../../../../components/Table";
import { basicURL } from "../../../../Services";
import { Active } from "../../../../components/shared/Active";
import Auth from "../../../../services/Auth";
import FilterVaccines from "./FilterVaccines";

function VaccineList() {
  const COLUMNVACCINES = [
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Company",
      accessor: "company",
    },
    {
      Header: "Virus",
      accessor: "virus",
    },
    {
      Header: "Number of doses",
      accessor: "numberOfDoses",
      Cell: (row) => <div className="text-center">{row.value}</div>,
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
                  setVaccines(row.row.original);
                  setModalShowEditVaccine(true);
                }}
              >
                Edit
              </Button>
            </div>
            <div className="col text-center">
              <Button
                variant="info"
                onClick={() => {
                  setVaccines(row.row.original);
                  setModalShowInfo(true);
                }}
              >
                Info
              </Button>
            </div>
            <div className="col text-center">
              <Button
                variant="danger"
                onClick={() => {
                  DeleteVaccine(row.row.original.vaccineId);
                }}
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      ),
    },
  ];
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVaccines, setLoadedVaccines] = useState([]);
  const [modalShowinfo, setModalShowInfo] = useState(false);
  const [vaccines, setVaccines] = useState({});
  const [errors, setErrors] = useState("");
  const [loadedViruses, setLoadedViruses] = useState([]);

  const [modalShowNewVaccine, setModalShowNewVaccine] = useState(false);
  const [modalShowEditVaccine, setModalShowEditVaccine] = useState(false);

  async function DeleteVaccine(data) {
    const token = Auth.getFullToken();
    const response = await fetch(
      basicURL + "/admin/vaccines/deleteVaccine/" + data,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json", Authorization: token },
      }
    );

    if (response.status === 200) {
      console.log("delete working");
      fetchData();
    } else {
      setErrors(response.statusText);
    }
  }

  async function addVaccine(newVaccine) {
    const token = Auth.getFullToken();
    const response = await fetch(basicURL + "/admin/vaccines/addVaccine", {
      method: "POST",
      body: JSON.stringify(newVaccine),
      headers: { "Content-Type": "application/json", Authorization: token },
    });

    if (response.status === 200) {
      setModalShowNewVaccine(false);
      fetchData();
    } else {
      setErrors(response.statusText);
    }
  }

  async function GetVirus() {
    const token = Auth.getFullToken();
    const response = await fetch(basicURL + "/viruses", {
      method: "GET",
      headers: { "Content-Type": "application/json", Authorization: token },
    });

    if (response.status === 200) {
      const data = await response.json();
      const viruses = [];

      for (const key in data) {
        const virus = { id: key, ...data[key] };
        viruses.push(virus);
      }
      setLoadedViruses(viruses);
    } else {
      setErrors(response.statusText);
    }
  }

  async function editVaccine(editVaccine) {
    const token = Auth.getFullToken();
    const response = await fetch(basicURL + "/admin/vaccines/editVaccine", {
      method: "POST",
      body: JSON.stringify(editVaccine),
      headers: { "Content-Type": "application/json", Authorization: token },
    });

    if (response.status === 200) {
      setModalShowEditVaccine(false);
      fetchData();
    } else {
      setErrors(response.statusText);
    }
  }

  async function fetchData() {
    const token = Auth.getFullToken();
    const response = await fetch(basicURL + "/admin/vaccines", {
      headers: { Authorization: token },
    });

    if (response.status === 200) {
      const data = await response.json();
      const vaccines = [];

      for (const key in data) {
        const vaccine = { id: key, ...data[key] };
        vaccines.push(vaccine);
      }
      setLoadedVaccines(vaccines);
      console.log(vaccines);
    } else {
      setErrors(response.statusText);
    }
  }

  function filter(virus) {
    var vaccines = loadedVaccines;
    vaccines = vaccines.filter((el) => el.virus === virus);
    console.log(vaccines);
  }

  useEffect(() => {
    setIsLoading(true);
    GetVirus();
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
      <div className="mt-4 col-4">
        <FilterVaccines viruses={loadedViruses} search={filter} />
      </div>

      <Container className="mt-4">
        <Button
          className="mb-4"
          onClick={() => {
            setModalShowNewVaccine(true);
          }}
        >
          Add vaccine
        </Button>
        <Table columns={COLUMNVACCINES} data={loadedVaccines} />
      </Container>
      <EditVaccineModal
        vaccine={vaccines}
        virus={loadedViruses}
        editVaccine={editVaccine}
        show={modalShowEditVaccine}
        onHide={() => setModalShowEditVaccine(false)}
      />
      <NewVaccineModal
        addVaccine={addVaccine}
        virus={loadedViruses}
        show={modalShowNewVaccine}
        onHide={() => setModalShowNewVaccine(false)}
      />
      <DataVaccineModal
        vaccine={vaccines}
        show={modalShowinfo}
        onHide={() => setModalShowInfo(false)}
      />
    </div>
  );
}

export default VaccineList;
