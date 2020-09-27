import React from "react";
class Button extends React.Component {
  constructor() {
    super();
    this.state = { displayBio: false };
    console.log("Component this", this);
    this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
  }
  toggleDisplayBio() {
    this.setState({ displayBio: !this.state.displayBio });
  }
  render() {
    return (
      <div>
        <h1>Welcome to JavaTpoint!!</h1>
        {this.state.displayBio ? (
          <div>
            <p>
              <h3>Javatpoint is one of the best Java training institute </h3>
            </p>
            <button onClick={this.toggleDisplayBio}> Show Less </button>
          </div>
        ) : (
          <div>
            <button onClick={this.toggleDisplayBio}> Read More </button>
          </div>
        )}
      </div>
    );
  }
}
export default Button;
