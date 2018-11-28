import React from "react";
import ThemeContext from "./ThemeContext";
import "./style.scss";

class ThemeButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTheme: "black"
    };
  }

  changeState = theme => {
    this.setState({
      selectedTheme: theme
    });
  };

  render() {
    const themes = ["black", "blue", "yellow", "green"];
    return (
      <ThemeContext.Consumer>
        {contextValue => {
          console.log(contextValue);
          return (
            <div className="buttons">
              {themes.map(theme => (
                <button
                  className={theme}
                  key={theme}
                  id={theme}
                  onClick={() => contextValue.changeState(theme)}
                >
                  {theme}
                </button>
              ))}
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
export default ThemeButtons;
