import React from 'react';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thisThat: null
    };
  }

  componentDidMount() {
    async function fetchContent() {
      // Instead of using fetch().then, use await
      let content = await fetch('/api');
      let text = await content.text();

      // Inside the async function text is the request body
      console.log(text);

      // Resolve this async function with the text
      return text;
    }
    
    // fetch('/api')
    // .then(function(response) {
    //   return response.json();
    // })
    // .then(function(myJson) {
    //   console.log(myJson);
    // });
  }

  render() {
    return 'hey';
  }
}

export default Main;
