import Stars from "./components/stars";
import React from "react";
import { render } from "react-dom";

const App = () => {
	return (
		<div>
			<Stars given={3} on={10} />
		</div>
	);
};

render(<App />, document.getElementById("app"));

export default Stars;
