import React from "react";
import ReactDOM from "react-dom";
import Accordeon from "./Accordeon";
import AccordeonItem from "./AccordeonItem";

function App() {
  //const data = require("./data.json");

  return (
    <div className="app">
      <Accordeon>
        <AccordeonItem title="Title1">
          <p>Contenido1</p>
        </AccordeonItem>
        <AccordeonItem title="Title2">
          <p>Contenido2</p>
          <ul>
            <li>Hola1</li>
            <li>Hola2</li>
          </ul>
          <Accordeon>
            <AccordeonItem title="Title1">
              <p>Contenido1</p>
            </AccordeonItem>
            <AccordeonItem title="Title2">
              <p>Contenido2</p>
              <ul>
                <li>Hola1</li>
                <li>Hola2</li>
              </ul>
              <img src="http://placeimg.com/400/400" />
            </AccordeonItem>
          </Accordeon>
        </AccordeonItem>
        <AccordeonItem title="Title3">
          <p>Contenido2</p>
          <img src="http://placeimg.com/100/100" />
        </AccordeonItem>
      </Accordeon>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
