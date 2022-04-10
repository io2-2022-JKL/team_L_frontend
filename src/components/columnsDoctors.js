import { Button } from "react-bootstrap";

export const COLUMDOCTORS = [
  {
    Header: "First Name",
    accessor: "firstName",
  },
  {
    Header: "Last Name",
    accessor: "lastName",
  },
  {
    Header: "Mail",
    accessor: "mail",
  },
  {
    Header: "Vaccination Center",
    accessor: "name",
  },
  {
    Header: "City",
    accessor: "city",
  },
  {
    Header: "Telefon",
    accessor: "phoneNumber",
  },
  {
    Header: "Options",
    accessor: "action",
    Cell: (row) => (
      <div className="row">
        <div className="col text-center">
          <Button
            variant="secondary"
            onClick={(e) => handleEdit(row.row.original)}
          >
            Edit
          </Button>
        </div>
        <div className="col text-center">
          <Button
            variant="danger"
            onClick={(e) => handleEdit(row.row.original)}
          >
            Delete
          </Button>
        </div>
      </div>
    ),
  },
];

function handleEdit(row) {
  console.log(row);
}
