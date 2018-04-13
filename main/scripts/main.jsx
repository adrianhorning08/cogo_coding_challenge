import React from 'react';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thisThat: null
    };
  }

  componentDidMount() {
    // const request = async () => {
    //   const response = await fetch('http://itsthisforthat.com/api.php?json', {
    //   });
    //   const json = await response.json();
    //   console.log(json);
    // }
    // request();
  }
  render() {
    if (this.state.thisThat) {
      return this.state.thisThat;
    } else {
      return null;
    }
  }
}

export default Main;
