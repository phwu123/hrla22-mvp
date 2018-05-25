import React, { Component } from 'react';
import Home from './Home.jsx';
import CharEntry from './CharEntry.jsx';

export default class CharList extends Component{
  constructor(props) {
    super(props);
    this.state = {
      char: '',
      chars: ['char1','char2','char3']
    }
  }
  render() {
    return(
      <div>
        charlist
        <div>
          <form method="post">
            <input type="checkbox" name="genre" value="Action" />Action
            <input type="checkbox" name="genre" value="Adventure"/>Adventure

            <button type="submit">Search</button>
          </form>
        </div>
        <div>
          {this.state.chars.map((char, i) => (
            <CharEntry 
              char={char}
              key={i}
              index={i}
            />
          ))}
          
        </div>
      </div>
    )
  }
}