import React from 'react'
import PropTypes from 'prop-types'
import ListHomeworkItem from '../listHomeworkItem/ListHomeworkItem'

const ListHomeWork = ({homework, onDelete})=> {
  return (
    <div>
        <ul>
        {homework.map((h)=>(
            <ListHomeworkItem
            key={h.id}
            homework={h.homeworkName}
            done={h.done}
            onDelete={onDelete}/>
        ))}
            
        </ul>
    </div>
  )
}

ListHomeWork.propTypes = {
    homework: PropTypes.array,
    onDelete: PropTypes.func
}

export default ListHomeWork