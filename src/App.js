import React, { Component } from "react";
import DisplayList from "./DisplayList";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      displayBio: true,
      data: [
        {
          id: 1,
          name: "Robin Williams",
          occupation: "teacher"
        },
        {
          id: 2,
          name: "John Doe",
          occupation: "gardener"
        }
      ]
    };
  }
  render() {
    const bio = this.state.displayBio ? (
      <div>
        <p>
          <h3>
            Javatpoint is one of the best Java training institute in Noida,
            Delhi, Gurugram, Ghaziabad and Faridabad. We have a team of
            experienced Java developers and trainers from multinational
            companies to teach our campus students.
          </h3>
        </p>
      </div>
    ) : (
      <h3>GoodDay!</h3>
    );
    return (
      <div>
        <h1> Welcome to JavaTpoint!! </h1>
        {bio}

        <ul>
          {this.state.data.map((item) => (
            <DisplayList data={item} />
          ))}
        </ul>
      </div>
    );
  }
}
export default App;
