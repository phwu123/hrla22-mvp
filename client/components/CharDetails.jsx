import React, { Component } from 'react';

const CharDetails = (props) => (
  <div>
    Name: {props.details.name_series} <br />
    Genre: {props.details.genre} <br />
    Description: {props.details.desc_series} <br />
  </div>
)







export default CharDetails;