import "../css/Chart.css";
import React from "react";
import ChartBar from "./ChartBar";
import "../css/Chart.css"

function Chart(props) {
    	let maxValue = 0;
    const dataPointValues = props.dataPoint.map((data)=>data.value);
    dataPointValues.forEach(element => {
			maxValue+=Number(element);
			
		});
	return (
		<div className="chart">
			{props.dataPoint.map((data) => (
				<ChartBar
					key={data.label}
					value={data.value}
					maxValue={maxValue}
					label={data.label}
				/>
			))}
		</div>
	);
}

export default Chart;
