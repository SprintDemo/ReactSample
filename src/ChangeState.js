import React from "react";
import RadioButton from "./RadioButton";

class ChangeState extends React.Component {
  constructor() {
    super();
    this.state = {
      hideData: true,
      name: "Kavitha",
      displayBio: false
    };

    console.log("Component Data=>" + this);
    this.changeStateData = this.changeStateData.bind(this);
  }

  changeStateData() {
    this.setState({
      displayBio: !this.state.displayBio,
      hideDate: false,
      name: "Monisha"
    });
  }
  render() {
    return (
      <div>
        <h1>Welcome to JavaTpoint!!</h1>

        <h4>{this.state.name} </h4>

        {this.state.displayBio ? (
          <div>
            <RadioButton />
            <p>
              <h4>
                Javatpoint is one of the best Java training institute in Noida,
                Delhi, Gurugram, Ghaziabad and Faridabad. We have a team of
                experienced Java developers and trainers from multinational
                companies to teach our campus students.
              </h4>
            </p>
            <button onClick={this.changeStateData}> Show Less </button>
          </div>
        ) : (
          <div>
            <button onClick={this.changeStateData}> Read More </button>
          </div>
        )}
      </div>
    );
  }
}

export default ChangeState;
