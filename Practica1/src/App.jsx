
import './App.css'
import Tables from './tables/Tables';
// En el componente App.js poseo el siguiente arreglo de ingresos brutos por compañia:
// const netIncomes = [{brand: ´McDonalds´, income: 1291283}, {brand: Burger King, income: 1927361}, {brand: ‘KFC’, income: 1098463}];
// En el componente App:
// Escribir un componente Table.js que arme una tabla de HTML donde las columnas sean el nombre de la marca y el ingreso neto.
// Escribir una etiqueta p que muestre el promedio de ingreso neto entre todas las marcas. Utilizar obligatoriamente la función reduce para calcular el promedio.

	const netIncomes = [{
		brand: "McDonalds", income: 1291283}, {brand: "Burger King", income: 1927361}, {brand: "KFC", income: 1098463}];



function App() {
	
		const incomes= netIncomes.map((i)=>(i.income))
		const total = incomes.reduce((accumulator, average)=> accumulator + average,0 );

  return (
    <div>
		<Tables netIncomes={netIncomes} total={total}/>
		<p>Promedio total {total}</p>
		
    </div>
  )
}

export default App
