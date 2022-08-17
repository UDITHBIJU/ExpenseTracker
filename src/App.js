
import "./App.css";

import Expenses from './components/Expenses/Expenses';

import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';

const data = [
	{id:'e1', title: "car insurance", date: new Date(2021, 6, 4), amount: "123" },
	{id:'e2', title: "bike insurance", date: new Date(), amount: "123" },
];
function App() {
	const [expenses, setExpenses] = useState(data);
	
	function addExpenseHandler(expenseData) {
		setExpenses((prevExpenses) => {
			return [expenseData, ...prevExpenses];
		});
	}
	return (
		<div className="App">
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses data={expenses}></Expenses>
		</div>
	);
}

export default App;
