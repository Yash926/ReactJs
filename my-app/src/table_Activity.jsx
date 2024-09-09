import React from 'react';

function Table() {
  return (
    <div>
      <h2>Details</h2>
      <table border="1" cellPadding="10" cellSpacing="2">
        <tbody>
            
          <tr>
            <td><b>Company</b></td>
            <td><b>Contact</b></td>
            <td><b>Country</b></td>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Yash Tripathi</td>
            <td>India</td>
          </tr>
          <tr>
            <td>Centro Comercial Moctezuma</td>
            <td>Awanit Singh</td>
            <td>Maxico</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
