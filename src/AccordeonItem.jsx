import React from "react";
import "./style.scss";
import ThemeContext from "./ThemeContext";

const AccordeonItem = ({ title, id, clickSection, active, children }) => {
  return (
    <ThemeContext.Consumer>
      {contextValue => {
        return (
          <div>
            <div
              className={"section section-" + contextValue.theme}
              onClick={() => clickSection(id)}
            >
              <span key={id}>{title}</span>
            </div>
            <div className={"content " + active}>
              <div className="contentDiv">{children}</div>
            </div>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};
export default AccordeonItem;
