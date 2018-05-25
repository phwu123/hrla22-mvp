import React, { Component } from 'react';
import Home from './Home.jsx';

export default class FavoritesList extends Component{
  constructor(props){
    super(props);
    this.state = {
      series: '',
      list: []
    }
  }
  render() {
    return(
      <div>
        list
      </div>
    )
  }
}