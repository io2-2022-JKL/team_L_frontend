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
