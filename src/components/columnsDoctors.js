
export const COLUMNS = [
    {
        Header: 'Imie',
        accessor: 'firstName',
    },
    {
        Header: 'Nazwisko',
        accessor: 'lastName',
    },
    {
        Header: 'Mail',
        accessor: 'mail'
    },
    {
        Header: 'Vaccination Center',
        accessor: 'name'
    },
    {
        Header: 'Miasto',
        accessor: 'city'
    },
    {
        Header: 'Telefon',
        accessor: 'phoneNumber',
    },
    {
        Header: 'Opcje',
        accessor: 'action',
        Cell: row => (
            <div>
                  <button onClick={e=> handleEdit(row.row.original)}>Edytuj</button>
                  <button onClick={e=> handleEdit(row.row.original)}>Usuń</button>
            </div>
        )
        
    },

]

function handleEdit(row) {
    console.log(row);
  }