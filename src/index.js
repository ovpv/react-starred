import React from "react";
import { render } from "react-dom";
import Stars from "react-starred";

const App = () => {
	return (
		<div>
			<Stars given={3} on={10} />
		</div>
	);
};

render(<App />, document.getElementById("app"));

export default Stars;
