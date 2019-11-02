import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Stars from "./components/stars";

function App() {
  const [given, updateGiven] = useState(3);
  const [total] = useState(10);
  useEffect(() => {
    // console.log(given);
  }, [given]);
  return (
    <div className="App">
      <Stars given={given} on={total} updateGiven={updateGiven} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
