import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button, Form } from 'react-bootstrap';

const NewHomework = ({onHomeworkDataSaved})=> {
    const [enteredHomework ,setEnteredHomework] = useState("");
    const handleChangeHomework = (e) =>{
        setEnteredHomework(e.target.value)
    }
    const sumbitHomework = (e) => {
        e.preventDefault(); 
        const homeworkData= {
            homeworkName: enteredHomework,
            done:false
        }
        onHomeworkDataSaved(homeworkData)
        setEnteredHomework("")
    }
  return (
    <Form onSubmit={sumbitHomework}>
        <Form.Label>Tarea por realizar</Form.Label>
        <Form.Control
        type='text'
        onChange={handleChangeHomework}
        value={enteredHomework}/>
        <Button type='sumbit'>Agregar tarea</Button>
    </Form>
  )
}

NewHomework.propTypes = {
    onHomeworkDataSaved: PropTypes.func
}

export default NewHomework