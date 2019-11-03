import Stars from "./components/stars";
import React, { useState, useEffect } from "react";
import { render } from "react-dom";

const App = () => {
	const [given, updateGiven] = useState(3);
	useEffect(() => {
		console.log(given);
	});
	return (
		<div>
			<Stars given={given} on={10} updateGiven={updateGiven} />
		</div>
	);
};

render(<App />, document.getElementById("app"));

export default Stars;
