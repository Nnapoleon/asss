import React, { Component } from 'react'

export default class HelloClass extends Component {
    constructor(props){
        super(props);
    }

  render() {
    return  <div>Hello {this.props.name}</div>;
    
  }
}

