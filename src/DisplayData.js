import React from "react";

class DisplayData extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Kavitha",
      age: 12
    };
  }

  render() {
    return (
      <div>
        <h1>Display Data from Scope</h1>
        <h5>{this.state.name}</h5>
        <h5>{this.state.age}</h5>
      </div>
    );
  }
}

export default DisplayData;
