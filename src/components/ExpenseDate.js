import React from "react";
import "./ExpenseDate.css";

export default function ExpenseDate({date}) {
	const month = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	return (
		<div className="expense-date">
			<div className="expense-date__month">{month[date.getMonth()]}</div>
			<div className="expense-date__day">{date.getDate()}</div>
			<div className="expense-date__year">{date.getFullYear()}</div>
		</div>
	);
}
