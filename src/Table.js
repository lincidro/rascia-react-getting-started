import React, { Component } from 'react'

//Nombre de las constantes comienza con mayúscula
const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  )
}

const TableBody = () => {
  return (
    <tbody>
      <tr>
        <td>Juan</td>
        <td>Professor</td>
      </tr>
      <tr>
        <td>Maria</td>
        <td>Student</td>
      </tr>
      <tr>
        <td>Troy</td>
        <td>Developer</td>
      </tr>
      <tr>
        <td>Laura</td>
        <td>Mechanic</td>
      </tr>
    </tbody>
  )
}

export class Table extends Component {
  render() {
    return (
      <div>
        <table>
          <TableHeader/>
          <TableBody/>
        </table>
      </div>
    )
  }
}

export default Table
