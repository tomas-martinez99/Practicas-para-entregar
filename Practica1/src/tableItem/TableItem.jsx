import React from 'react'
import PropTypes  from 'prop-types'

const TableItem = ({brand, incomes,key}) => {
  return (
    <tr>
      <th scope="row">{key}</th>
      <td>{brand}</td>
      <td>{incomes}</td>
      
    </tr>
  
  )
}

TableItem.propTypes={
    brand: PropTypes.string,
    incomes: PropTypes.number,
}

export default TableItem