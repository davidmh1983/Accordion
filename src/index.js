import React from "react";
import ReactDOM from "react-dom";
import Accordeon from "./Accordeon";

//import "./styles.css";

function App() {
  const data = require("./data.json");

  return (
    <div className="app">
      <Accordeon data={data.Accordeon} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
