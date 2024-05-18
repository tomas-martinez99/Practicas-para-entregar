

import PropTypes  from 'prop-types'
import TableItem from '../tableItem/TableItem'
import { Table } from 'react-bootstrap'

const Tables = ({netIncomes}) => {
    const incomes= netIncomes.map((i)=>(i.income))
    const total = incomes.reduce((accumulator, average)=> accumulator + average,0 );
    
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
                number={index+1}
                brand={i.brand}
                incomes={i.income}/>
            ))}
            <p>Total de ingresos {total}</p>
        </tbody>
        
        
        </Table>
    </div>
        
    
  )
}

Tables.propTypes={
    netIncomes:PropTypes.array
  

}

export default Tables