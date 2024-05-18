
import { useState } from 'react'
import './App.css'
import ListHomeWork from './listHomework/ListHomeWork'
import NewHomework from './newHomework/NewHomework'
import Tables from "./tables/Tables"
// En el componente App.js poseo el siguiente arreglo de ingresos brutos por compañia:
// const netIncomes = [{brand: ´McDonalds´, income: 1291283}, {brand: Burger King, income: 1927361}, {brand: ‘KFC’, income: 1098463}];
// En el componente App:
// Escribir un componente Table.js que arme una tabla de HTML donde las columnas sean el nombre de la marca y el ingreso neto.
// Escribir una etiqueta p que muestre el promedio de ingreso neto entre todas las marcas. Utilizar obligatoriamente la función reduce para calcular el promedio.
const netIncomes = [{
  brand: "McDonalds", income: 1291283}, {brand: "Burger King", income: 1927361}, {brand: "KFC", income: 1098463}];



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
//practica 2 

		
//practica 2

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
      <Tables netIncomes={netIncomes} />  
    </div>
  )
}

export default App
