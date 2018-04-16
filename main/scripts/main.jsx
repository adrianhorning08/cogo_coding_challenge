import React from 'react';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thisThat: null
    };
  }

  async componentDidMount() {
    const res = await fetch('/api')
    const json = await res.json()
    this.setState({thisThat:json})
  }

  render() {
    if (this.state.thisThat) {
      return this.state.thisThat.that;
    } else {
      return null;
    }
  }
}

export default Main;
