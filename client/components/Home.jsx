import React, { Component } from 'react';
import CharList from './CharList.jsx';

export default class Home extends Component{
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>        
        <CharList />
      </div>
    )
  }
}