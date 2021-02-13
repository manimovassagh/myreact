import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: 'mani programmer'};
    
     
  };

  render() {
    return (
      <div>
        <div>hi mani{this.state.name}</div>
      </div>
    );
  }
}

export default App;
