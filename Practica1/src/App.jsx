
import { useState } from 'react'
import './App.css'
import ListHomeWork from './listHomework/ListHomeWork'
import NewHomework from './newHomework/NewHomework'




//Debemos crear una aplicación de manejo de tareas personales.
//La app nos debe permitir:
//Agregar una nueva tarea a la lista. 
//Marcar una tarea como completada e indicarlo de alguna manera(tachando el texto o cambiando el color del mismo(gris claro, por ejemplo)).
//Borrar una tarea de la lista.
//Sugerencias:
//Crear el estado de las tareas en App.js para que se facilite el pasaje entre componentes. 
//Crear un componente tipo lista que nos muestre todas las tareas de una lista. 
//Crear un componente que nos permite agregar una nueva tarea.
const HOMEWORKS = [
  {id : 1,
  homeworkName: "Limpiar los platos",
  done : false,
},
{
  id : 2,
  homeworkName:"Cocinar la cena",
  done : true,
}]

function App() {
  const [homework , setHomework] = useState(HOMEWORKS)
	const  saveHomeworkDataHandler = (enteredHomeworkData) =>{
    const homeworkData ={
      ...enteredHomeworkData,
      id: Math.random().toString(),
    }
    setHomework((prev)=>[...prev, homeworkData])
  }
  const saveHandleDelete = (index) =>{
    const newHomework = [...homework];
    newHomework.splice(index,1);
    setHomework(newHomework)
  }

  return (
    <div>
      <h2>Practica 4</h2>
      <NewHomework onHomeworkDataSaved={saveHomeworkDataHandler}/>
      <ListHomeWork homework ={homework} onDelete={saveHandleDelete} />
    </div>
  )
}

export default App
