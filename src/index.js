import React from "react";
import ReactDOM from "react-dom";
import Accordeon from "./Accordeon";
import AccordeonItem from "./AccordeonItem";
import ThemeButtons from "./ThemeButtons";
import ThemeContext from "./ThemeContext";

class App extends React.Component {
  //const data = require("./data.json");
  constructor(props) {
    super(props);
    this.state = {
      theme: "yellow"
    };
  }

  changeState = theme => {
    this.setState({
      theme: theme
    });
    console.log(theme);
  };

  render() {
    return (
      <div className="app">
        <ThemeContext.Provider
          value={{ changeState: this.changeState, theme: this.state.theme }}
        >
          <ThemeButtons />
          <Accordeon>
            <AccordeonItem title="Title0">
              <p>Contenido1</p>
            </AccordeonItem>
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
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default App;
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
