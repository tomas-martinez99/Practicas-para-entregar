import React, { useState } from 'react'
import PropTypes from 'prop-types'
import "./ListHomeworkItem.css"
import {Button} from "react-bootstrap"

const ListHomeworkItem = ({homework,done,onDelete}) => {
    const [ok, setOk] = useState(done)

    const handleClick = ()=>{
        setOk(true)
    }
    const handleDelete = (index) => {
       onDelete(index)
    }
  return (
    <div>
        {ok ? 
        <div>
        <p className='listItem'>{homework}</p> 
        <Button onClick={handleDelete}>Borrar tarea</Button>
        </div>
        : 
        <div> 
        <p>{homework}</p>
        <Button onClick={handleClick} >Hecho</Button>
        </div>
        }
    </div>
  )
}


ListHomeworkItem.propTypes = {
    homework: PropTypes.string,
    done : PropTypes.bool,
    onDelete: PropTypes.func
}

export default ListHomeworkItem