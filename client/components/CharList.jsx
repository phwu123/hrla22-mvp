import React, { Component } from 'react';
import Home from './Home.jsx';

export default class CharList extends Component{
  constructor(props) {
    super(props);
    this.state = {
      char: '',
      chars: []
    }
  }
  render() {
    return(
      <div>
        charlist
      </div>
    )
  }
}