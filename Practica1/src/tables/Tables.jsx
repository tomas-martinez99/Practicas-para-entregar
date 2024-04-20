

import PropTypes  from 'prop-types'
import TableItem from '../tableItem/TableItem'
import { Table } from 'react-bootstrap'

const Tables = ({netIncomes}) => {

    
  return (
   <div>
    <Table className="table">
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Marca</th>
            <th scope="col">Ingresos</th>
            
        </tr>
        </thead>
        <tbody>
            {netIncomes.map((i,index)=>(
                <TableItem
                key={index+1}
                brand={i.brand}
                incomes={i.income}/>
            ))}
        </tbody>
        
        
        </Table>
    </div>
        
    
  )
}

Tables.propTypes={
    netIncomes:PropTypes.array
  

}

export default Tables