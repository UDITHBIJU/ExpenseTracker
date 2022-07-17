import React from "react";
import "./ExpenseItem.css";

export default function ExpenseItem(props) {
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
   
    return (
        
        <div className="expense-item">
            
			<div>
				<div>{month[props.month]}</div>
                <div>{weekday[props.day]}</div>
                <div>{props.year}</div>
                
			</div>
			<div className="expense-item__description">
				<h2>{props.title}</h2>

				<div className="expense-item__price">123$</div>
			</div>
		</div>
	);
}
