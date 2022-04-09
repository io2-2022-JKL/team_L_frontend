import React from "react";
import { useTable } from 'react-table'
import { COLUMNS } from './columnsDoctors'
import './table.css'

export function Table({columns, data} ) {
  
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

    return (+
        <div>
            <Table {...getTableProps()}>
                <thead >
                    {
                        headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {
                                    headerGroup.headers.map((column) =>(
                                        <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                                    ))}
                            </tr>
                        ))
                    }
                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        rows.map(row=>{
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {
                                        row.cells.map(cell =>{
                                            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                        })
                                    }
                                 </tr> 
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
      )
}

require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);
