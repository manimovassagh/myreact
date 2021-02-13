import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null };
    //update state

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => console.log(err)
    );
  }

  render() {
    return (
      <div className="container">
        <p>
          {this.state.lat > 0 ? "You are in south" : "you are in North"}
        </p>
      </div>
    );
  }
}

export default App;
