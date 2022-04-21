import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import DataCerificate from "../../../../components/patient/DataCertificate";
import { Table } from "../../../../components/Table";

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

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://virtserver.swaggerhub.com/01151586/VaccinationSystem/2.0.0/patient/certificates/1c8ddbb7-06c8-44ec-893e-f936607aa36ff"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const certificates = [];

        for (const key in data) {
          const certificate = { id: key, ...data[key] };
          certificates.push(certificate);
        }
        setIsLoading(false);
        setLoadedCertificates(certificates);
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
