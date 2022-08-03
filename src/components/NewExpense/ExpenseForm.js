import React, { useState } from "react";
import "../css/ExpenseForm.css";

export default function ExpenseForm({onSaveExpenseData}) {
	const [enteredTitle, setEnteredTitle] = useState("");
	const [enteredAmount, setEnteredAmount] = useState("");
	const [enteredDate, setEnteredDate] = useState("");

    //for 2nd method
	// const [userInput, setUserInput] = useState({
	// 	enteredTitle: "",
	// 	enteredAmount: "",
	// 	enteredDate: "",
	// });

	function titleChangeHandler(event) {
        
		//1st method vastly used in real world

		setEnteredTitle(event.target.value);

		//2nd method not recommended because of not updated prevState
		// setUserInput({ ...userInput, enteredTitle: event.target.value });
		//3rd method better than 2nd always updated  prevState
		// setUserInput((prevState)=>{
		//     return { ...prevState, enteredTitle: event.target.value };
		// });
	}
	function amountChangeHandler(event) {
		setEnteredAmount(event.target.value);
		// setUserInput({ ...userInput, enteredAmount: event.target.value });
	}
	function dateChangeHandler(event) {
		setEnteredDate(event.target.value);
		// setUserInput({ ...userInput, enteredDate: event.target.value });
	}

    function submitHandler(event){
			//this function is for preventing default refreshing of browser after submitting the form
			event.preventDefault();

			const expenseData = {
				title: enteredTitle,
				amount: enteredAmount,
				date: new Date(enteredDate),
			};
			onSaveExpenseData(expenseData); // // function from NewExpenses. passes expenseData to parent component
			setEnteredTitle(""); //for clearing the value on page after submission
			setEnteredAmount("");
			setEnteredDate("");
		}

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Text</label>
					<input type="text" onChange={titleChangeHandler} value={enteredTitle} />
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						min="0.01"
						step="0.01"
						onChange={amountChangeHandler}
                        value={enteredAmount}
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						min="2019-01-01"
						max="2022-12-31"
						onChange={dateChangeHandler}
                        value={enteredDate}
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="submit" >Add Expense</button>
			</div>  
		</form>
	);
}
