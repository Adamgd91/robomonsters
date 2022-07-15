import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "Monster",
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Robo {this.state.name}</h1>
        <button
          onClick={() => {
            this.setState({ name: "chicken" });
          }}
        >
          Change Name
        </button>
      </div>
    );
  }
}
export default App;
