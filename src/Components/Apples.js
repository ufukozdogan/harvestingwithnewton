import React, { Component } from 'react';
import '../App.scss';
import Apple from './Apple';

class Apples extends Component {
  render() {
    let apple;
    if(this.props.apples){
        // We're mapping the apple props and sending each apple to Apple.js and this way we're rendering each apple individually.
        apple = this.props.apples.map(eachapple => {
            return (
                <Apple key={eachapple.id} eachapple={eachapple}/>
            );
        });
    }
    return (
        <div>
            {apple}
        </div>
      );
  }
}

export default Apples;
