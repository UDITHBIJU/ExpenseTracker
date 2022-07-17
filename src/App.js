import ExpenseItem from "./components/ExpenseItem";
import "./App.css";

function App() {
	const data = [
		{ title: "car insurance", date: new Date(2021,5,4), amount: "123$" },
		{ title: "bike insurance", date: new Date(), amount: "123$" },
	];
	return (
		<div className="App">
      <ExpenseItem title={data[0].title} month = {data[0].date.getMonth()} day = {data[0].date.getDay()} year ={data[0].date.getFullYear()}  ></ExpenseItem>
      <ExpenseItem title ={data[1].title} ></ExpenseItem> 
		</div>
	);
}

export default App;
