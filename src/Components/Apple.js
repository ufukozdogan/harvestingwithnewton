import React, { Component } from 'react';
import apple from '../Images/apple.svg';
import '../App.scss';

class Apple extends Component {
  render() {
    return (
      <div>
          <img src={apple} className={ `apple-image${this.props.eachapple.id}${this.props.eachapple.status}` } alt="apple" />
          {/* 
            We're recieving both apple ID and status. And setting it as a classname. 
            For example for an apple with ID:1 and Status:'falling' classname would be 'apple-image1falling'.
            Later we're accessing this name in the Sass and doing whatever we want.
          */}
      </div>
    );
  }
}

export default Apple;
