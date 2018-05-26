import React, { Component } from 'react';

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
        <img src={this.props.char} />
      </div>
    )
  }
}

