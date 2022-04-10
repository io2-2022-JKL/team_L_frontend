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
      <div>
        <button onClick={(e) => handleEdit(row.row.original)}>Edit</button>
        <button onClick={(e) => handleEdit(row.row.original)}>Delete</button>
      </div>
    ),
  },
];

function handleEdit(row) {
  console.log(row);
}
