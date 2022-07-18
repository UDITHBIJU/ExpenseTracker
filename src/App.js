
import "./App.css";
import './components/Expenses';

function App() {
	const data = [
		{ title: "car insurance", date: new Date(2021,6,4), amount: "123$" },
		{ title: "bike insurance", date: new Date(), amount: "123$" },
	]; 
	return (
		<div className="App">
      <Expenses data={data}></Expenses>
		</div>
	);
}

export default App;
