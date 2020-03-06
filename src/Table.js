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

const TableBody = props => {

  const rows = props.characterDataBody.map(
    (row, index) => {
      return (
        <tr key = {index}>
          <td>{row.name}</td>
          <td>{row.job}</td>
        </tr>
      )
    }
  )

  return (
    <tbody>{rows}</tbody>
  )
}

export class Table extends Component {
  render() {

    const {characterData} = this.props;

    return (
      <div>
        <table>
          <TableHeader/>
          <TableBody characterDataBody = {characterData}/>
        </table>
      </div>
    )
  }
}

export default Table
