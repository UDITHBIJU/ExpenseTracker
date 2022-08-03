import React from "react";
import ExpenseItem from "./ExpenseItem";
import "../css/ExpensesList.css";

export default function ExpensesList({ items }) {
	if (items.length === 0) {
		return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
	}
	return (
		<ul className="expenses-list">
			{items.map(
				(
					expense // map is built in function in js. here argument "expense" iterate like a for loop. in each iteration the value of "expense" will be th object in the data array.
				) => (
					<ExpenseItem
						key={expense.id}
						title={expense.title}
						amount={expense.amount}
						date={expense.date}
					/> 
                
				)
			)}
		</ul>
	);
} 
