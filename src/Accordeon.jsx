import React from "react";
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

  mappingData(c) {
    console.log("c", c);
  }

  render() {
    return (
      <div className="accordion">
        {React.Children.map(this.props.children, (Child, i) => {
          let structure = React.cloneElement(Child, {
            id: i,
            key: i,
            active: i === this.state.active ? "active" : "inactive",
            clickSection: this.clickSection
          });
          return structure;
        })}
      </div>
    );
  }
}
export default Accordeon;
