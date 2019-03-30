import React, { Component } from 'react';

class Dataset extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null
    };
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/dataset/2009')
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log(JSON.stringify(myJson.msg));
      });

    //console.log(this.state.data);
  }

  render() {
    return <div />;
  }
}

export default Dataset;
