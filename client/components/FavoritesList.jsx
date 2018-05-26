import React, { Component } from 'react';
import Home from './Home.jsx';
import FavoritesEntry from './FavoritesEntry.jsx';
import CharList from './CharList.jsx';

export default class FavoritesList extends Component{
  constructor(props){
    super(props);
    this.state = {
      series: '',
      favorites: ['item1','item2','item3']
    }
  }

  addFavorite(e) {
    
  }

  deleteFavorite(index) {

  }

  handleToggle(e) {

  }

  render() {
    return(
      <div>
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
          <CharList favorites={this.state.favorites}/>
        </div>
      </div>
    )
  }
}