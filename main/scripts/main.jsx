import React from 'react';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thisThat: null
    };
    this.updateThisThat = this.updateThisThat.bind(this);
  }

  async componentDidMount() {
    const res = await fetch('/api')
    const json = await res.json()
    this.setState({thisThat:json})
  }

  async updateThisThat(e) {
    e.preventDefault();
    const res = await fetch('/api');
    const json = await res.json()
    await this.setState({thisThat:json})
  }

  render() {
    if (this.state.thisThat) {
      return (
        <div className="center-container">
          <h2>Wait, what does your startup do?</h2>
          <h3>So, basically, it's like a</h3>
          <h1>{this.state.thisThat.this}</h1>
          <h3>for</h3>
          <h1>{this.state.thisThat.that}</h1>
          <button onClick={this.updateThisThat}>Refresh</button>
        </div>
      )
    } else {
      return null;
    }
  }
}

export default Main;
