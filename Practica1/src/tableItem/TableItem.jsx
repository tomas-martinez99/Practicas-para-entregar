import React from 'react'
import PropTypes  from 'prop-types'

const TableItem = ({brand, incomes,number}) => {
  return (
    <tr>
      <th scope="row">{number}</th>
      <td>{brand}</td>
      <td>{incomes}</td>
      
    </tr>
  
  )
}

TableItem.propTypes={
    brand: PropTypes.string,
    incomes: PropTypes.number,
    number: PropTypes.number
}

export default TableItem