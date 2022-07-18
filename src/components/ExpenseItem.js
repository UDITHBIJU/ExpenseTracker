import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
// gets data from app.js using constructors title and date
export default function ExpenseItem({ title,date,amount}) {
	

	return (
		<div className="expense-item">
			<div>
				{/* passes date from date in ExpenseItem to date in ExpenseDate */}
				<ExpenseDate date={date}/> 
			</div>
			<div className="expense-item__description">
				<h2>{title}</h2>

				<div className="expense-item__price">{amount}</div>
			</div>
		</div>
	);
}
