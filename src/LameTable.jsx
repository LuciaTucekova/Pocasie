import React from 'react';

export const LameTable = ({ dataTable, columnsTable }) => {
  return (
    <table
      style={{ border: 'solid 1px blue', fontSize: '10px', marginTop: '5%' }}
    >
      <thead>
        <tr>
          {columnsTable.map((element) => (
            <th
              style={{
                maxWidth: '40px',
                padding: '4px',
                background: 'aliceblue',
                color: 'black',
                fontWeight: 'bold',
              }}
            >
              {element}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {dataTable.map((element) => (
            <td
              style={{
                maxWidth: '40px',
                color: 'black',
                padding: '4px',
                border: 'solid 1px gray',
                background: 'white',
              }}
            >
              {element}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};
