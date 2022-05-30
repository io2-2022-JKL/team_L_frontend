import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import DataCerificate from "../../../../components/patient/DataCertificate";
import { Table } from "../../../../components/Table";
import { basicURL } from "../../../../Services";
import Auth from "../../../../services/Auth";

function Certificates() {
  const COLUMNCERTIFICATE = [
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
      accessor: "virusType",
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
                  setCertificate(row.row.original);
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
  const [loadedCertificates, setLoadedCertificates] = useState([]);
  const [modalShowinfo, setModalShowInfo] = useState(false);
  const [certificate, setCertificate] = useState({});
  const [errors, setErrors] = useState("");

  async function fetchData() {
    const userId = Auth.getUserId();
    const token = Auth.getFullToken();
    const response = await fetch(basicURL + "/patient/certificates/" + userId, {
      headers: { Authorization: token },
    });

    if (response.status === 200) {
      const data = await response.json();
      const certificates = [];

      for (const key in data) {
        const certificate = { id: key, ...data[key] };
        certificates.push(certificate);
      }
      setLoadedCertificates(certificates);
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
        <Table columns={COLUMNCERTIFICATE} data={loadedCertificates} />
      </Container>
      <DataCerificate
        certificate={certificate}
        show={modalShowinfo}
        onHide={() => setModalShowInfo(false)}
      />
    </div>
  );
}

export default Certificates;
