import { Button } from "react-bootstrap";

export const COLUMNPATIENT = [
  {
    Header: "First name",
    accessor: "firstName",
  },
  {
    Header: "Last name",
    accessor: "lastName",
  },
  {
    Header: "Mail",
    accessor: "mail",
  },
  {
    Header: "Birthday",
    accessor: "dateOfBirth",
  },
  {
    Header: "Phone",
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
          <Button variant="danger" onClick={handleEdit(row.row.original)}>
            Delete
          </Button>
        </div>
      </div>
    ),
  },
];

export function handleEdit(row) {
  console.log(row.firstName);
}
