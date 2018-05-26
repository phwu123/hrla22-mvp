import React, { Component } from 'react';
import Home from './Home.jsx';
import CharEntry from './CharEntry.jsx';
import FavoritesEntry from './FavoritesEntry.jsx';
import axios from 'axios';

export default class CharList extends Component{
  constructor(props) {
    super(props);
    this.state = {
      chars: [],
      genre: '',
      favorites: [],
      show: false,
      popularity: []
    }
  }

  addFavorite(e) {
    
  }

  deleteFavorite(index) {

  }

  handleToggle(e) {
    this.setState({ show: !this.state.show })
  }

  handleChange(e) {
    console.log(e.target.value, ' was checked');
    if (e.target.checked) {
      this.setState({ genre: e.target.value })
    }
  }

  handleSubmit(e) {
    event.preventDefault();
    this.setState({ chars: [] })
    axios({
      method: 'GET',
      url: '/api/chars',
      params: { genre: this.state.genre}
    }).then((data) => {
      data.data.sort((a,b) => {
        return a.popularity - b.popularity;
      })
      console.log('data sorted :', data);
      data.data.forEach(item => {
        this.setState({ chars: [...this.state.chars, item ]});
      })      
      
      if (this.state.chars.length !== 0) {
        return;
      }

      axios({
        method: 'POST',
        url: '/api/chars',
        data: {
          genre: this.state.genre
        }
      }).then(() => {
        this.handleSubmit(e);
        // axios({
        //   method: 'GET',
        //   url: '/api/chars',
        //   params: { genre: this.state.genre }
        // }).then((data) => {
        //   data.data.sort((a,b) => {
        //     return a.popularity - b.popularity;
        //   })
        //   console.log('data sorted :', data);
        //   data.data.forEach(item => {
        //     this.setState({ chars: [...this.state.chars, item ]});
  
        //   })
        // })
        //   .catch((err) => {
        //      console.log('err in axios get', err)
        //    })
      })
        .catch((err) => {
          console.log('err in axios post', err)
        })
    })
      .catch((err) => {
        console.log('err in first get', err)
      })
    
  }

  render() {
    return(
      <div>
        Favorites
        <div>
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
            />
          ))}
          
        </div>
      </div>
    )
  }
}