import React, { Component } from 'react';
import Home from './Home.jsx';
import CharEntry from './CharEntry.jsx';
import axios from 'axios';

export default class CharList extends Component{
  constructor(props) {
    super(props);
    this.state = {
      char: '',
      chars: ['char1','char2','char3'],
      genre: ''
    }
  }

  handleChange(e) {
    console.log(e.target.value, ' was checked');
    if (e.target.checked) {
      this.setState({ genre: e.target.value })
    }
    // axios.post('/api/chars', {
    //   genre: e
    // })
  }

  handleSubmit(e) {
    event.preventDefault();
    axios({
      method: 'POST',
      url: '/api/chars',
      data: {
        genre: this.state.genre
      }
    });
  }

  render() {
    return(
      <div>
        charlist
        <div>
          <form>
            <input onChange={e => this.handleChange(e)} type="radio" name="genre" value="action" />Action
            <input onChange={e => this.handleChange(e)} type="radio" name="genre" value="adventure" />Adventure
            <input onChange={e => this.handleChange(e)} type="radio" name="genre" value="comedy" />Comedy
            <input onChange={e => this.handleChange(e)} type="radio" name="genre" value="drama" />Drama
            <input onChange={e => this.handleChange(e)} type="radio" name="genre" value="sci-fi" />Sci-fi
            <input onChange={e => this.handleChange(e)} type="radio" name="genre" value="space" />Space
            <input onChange={e => this.handleChange(e)} type="radio" name="genre" value="mystery" />Mystery
            <input onChange={e => this.handleChange(e)} type="radio" name="genre" value="magic" />Magic
            <input onChange={e => this.handleChange(e)} type="radio" name="genre" value="supernatural" />Supernatural
            <button type="submit" onClick={e => this.handleSubmit(e)}>Search</button>
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