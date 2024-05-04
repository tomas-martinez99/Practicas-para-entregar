import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button, Form, Row} from 'react-bootstrap'

const Login = () => {
    const [enteredUser, setEnteredUser] = useState ("")
    const userChangeHandler = (e) => {
        const v = e.target.value
        setEnteredUser(v)
        if(enteredUser.includes("o") || enteredUser.includes("O") ){
            alert("El ususario contiene o")
        }
    }

    const sumbitUserHandler = (e) => {
        e.preventDefault();

        switch (enteredUser.trim()) {
            case "":
                alert("Usuario ingresado invalido")
                break;
            default:
                
                alert("El usuario se registró correctamente");
                break;
        }
        
    }
  return (
    <Form onSubmit={sumbitUserHandler}>
    <Row>
       <Form.Label>Usuario</Form.Label>
       <Form.Control 
       type='text'
       placeholder='Ingrese su usuario sin o/O'
       onChange={userChangeHandler}
       value={enteredUser}
       />
       <Button variant="primary" type='sumbit'>Registrarse</Button>
       </Row>
    <Row><p>{enteredUser}</p></Row>
    </Form>

  )
}

Login.propTypes = {}

export default Login