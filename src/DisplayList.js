import React from "react";

class DisplayList extends React.Component {
  render() {
    return (
      <ul>
        <li>{this.props.data.id}</li>
        <li>{this.props.data.name}</li>
        <li>{this.props.data.occupation}</li>
      </ul>
    );
  }
}
export default DisplayList;
