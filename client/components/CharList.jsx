import React, { Component } from 'react';
import Home from './Home.jsx';
import CharEntry from './CharEntry.jsx';
import FavoritesEntry from './FavoritesEntry.jsx';
import axios from 'axios';

export default class CharList extends Component{
  constructor(props) {
    super(props);
    this.state = {
      chars: ['char1','char2','char3'],
      genre: '',
      favorites: ['fav1', 'fav2', 'fav3']
    }
  }

  addFavorite(e) {
    
  }

  deleteFavorite(index) {

  }

  handleToggle(e) {

  }

  handleChange(e) {
    console.log(e.target.value, ' was checked');
    if (e.target.checked) {
      this.setState({ genre: e.target.value })
    }
  }

  handleSubmit(e) {
    event.preventDefault();
    axios({
      method: 'POST',
      url: '/api/chars',
      data: {
        genre: this.state.genre
      }
    }).then(() => {
      axios({
        method: 'GET',
        url: '/api/chars',
        params: { genre: this.state.genre }
      }).then((data) => {
        console.log('data from axios get', data);
        this.setState({ chars: data.image })
        console.log('images?', this.state.chars)
      })
        .catch((err) => {
          console.log('err in axios get', err)
        })
    })
      .catch((err) => {
        console.log('err in axios post', err)
      })
  }

  render() {
    return(
      <div>
        charlist
        <div>
          favorites
          {this.state.favorites.map((series, i) => (
            <FavoritesEntry
              series={series}
              index={i}
            />
          ))}
        </div>
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