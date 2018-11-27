import React from "react";
import "./style.scss";

const AccordeonItem = ({ title, id, clickSection, active, children }) => {
  return (
    <div>
      <div className="section" onClick={() => clickSection(id)}>
        <span key={id}>{title}</span>
      </div>
      <div className={"content " + active}>
        <div className="contentDiv">{children}</div>
      </div>
    </div>
  );
};
export default AccordeonItem;
