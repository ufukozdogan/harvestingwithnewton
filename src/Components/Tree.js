import React, { Component } from 'react';
import tree from '../Images/tree.svg';
import '../App.scss';

class Tree extends Component {
  render() {
    return (          
          <img src={tree} className={this.props.treeState} alt="tree" />
          // Renders the tree image to the screen. Also control his classname by props. This way animating tree is possible with SASS.
    );
  }
}

export default Tree;
