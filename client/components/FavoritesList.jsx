import React, { Component } from 'react';
import Home from './Home.jsx';
import FavoritesEntry from './FavoritesEntry.jsx';

export default class FavoritesList extends Component{
  constructor(props){
    super(props);
    this.state = {
      series: '',
      list: ['item1','item2','item3']
    }
  }
  render() {
    return(
      <div>
        favorites
        {this.state.list.map((series, i) => {
          <FavoriteEntry
            series={series}
            index={i}
          />
        })}
      </div>
    )
  }
}