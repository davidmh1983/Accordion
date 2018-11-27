import React from "react";
import Axios from "axios";
import ASection from "./ASection";
import "./style.scss";

class Accordeon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: -1
    };
  }

  clickSection = id => {
    this.setState({
      active: id === this.state.active ? -1 : id
    });
  };

  render() {
    return (
      <div className="accordion">
        {this.props.data.map(datos => {
          return (
            <div>
              <div
                className="section"
                onClick={() => this.clickSection(datos.id)}
              >
                <span key={datos.id}>{datos.title}</span>
              </div>
              <div
                className={
                  "content " +
                  (datos.id === this.state.active ? "active" : "inactive")
                }
              >
                <div className="contentDiv">
                  <p>{datos.content}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Accordeon;
