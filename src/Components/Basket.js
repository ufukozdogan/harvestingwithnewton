import React, { Component } from 'react';
import basket from '../Images/basket.svg'; 
import '../App.scss';

class Basket extends Component {
  render() {
    return (
      <div>
          <img src={basket} className="basket-image" alt="basket" /> {/* Basket image on the screen */}
          <div className="App-hud" >Apples Collected: {this.props.collected}</div> {/* Prints the apple collected state value to the screen */}
      </div>
    );
  }
}

export default Basket;
