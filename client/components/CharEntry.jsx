import React, { Component } from 'react';
import CharDetails from './CharDetails.jsx';

export default class CharEntry extends Component{
  constructor(props){
    super(props);
    this.state = {
      show: false
    }
  }

  toggle(e) {
    this.setState({ show: !this.state.show })
  }

  render() {
    return (
      <div>  
        <img src={this.props.char.image} onClick={e => this.toggle(e)}/>
        {this.state.show && <CharDetails  details={this.props.char}/>}
      </div>
    )
  }
}

