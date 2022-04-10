
export const COLUMNPATIENT = [
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
        Header: 'Data urodzenia',
        accessor: 'dateOfBirth'
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