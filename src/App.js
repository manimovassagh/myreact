import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: "mani programmer" };
    //update state
  
    
  }

  render() {
    return (
      <div>
        <div>hi mani{this.newname}</div>
      </div>
    );
  }
}

export default App;
