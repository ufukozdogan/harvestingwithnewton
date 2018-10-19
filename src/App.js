import React, { Component } from "react";
import Tree from "./Components/Tree";
import Basket from "./Components/Basket";
import Apples from "./Components/Apples";
import grab from "./Images/grab.svg";
import sign from "./Images/sign.png";
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    // Defining our states.
    this.state = {      
      apples: [], //  For managing apple component. 
      treeState: "", // For mananing tree action.
      collected: 0, // Small HUD display for user.
      appleList: Array.from({ length: 12 }, (v, i) => i + 1) // For selecting an apple and manipulating it.
    };
  }

  componentWillMount() {
    // Initinating our first state values. Thil will be activated upon components mount.
    this.setState({      
      apples: Array.from({ length: 12 }, (_, index) => ({ // Creating our apples. Changing the length will cause affect the apple components that are mounted.
      id: index + 1, // Each apple has an ID. Starting from 1 and goes to 12.
      status: "present" // Defining that are apples are currently present on the tree.
      })),
      treeState: "stagnant" // Tree is stable and not shaking.
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="App-warning">
            This application is experienced best with a screen resolution of 1920x1080.
          </div>
          <div className="App-info"> Harvesting with Newton <br/> v1.0 <br/> @ufukozdogan </div>
          <img src={sign} className="sign" alt="sign" /> {/* Just a cosmetic */}
          <img onClick={this.shakeTree.bind(this)} className="grab" src={grab} alt="grab" /> {/* The button that starts the adventure*/}
          <Apples apples={this.state.apples} /> {/* Apples that are going to apple component with apple state */}
          <Tree treeState={this.state.treeState} /> {/* Tree that is going to tree component with tree's state */}
          <Basket collected={this.state.collected} /> {/* Basket that is going to basket component with the data of collected apple number */}
        </div>
      </div>
    );
  }

  // Function below starts the happenings. Basically it changes the tree state to "shaking" and runs selectApples().
  // Additionally it gets the apple count on the tree and if there are none left returns an alert.
  shakeTree() {
    if (this.state.appleList.length === 0)
      return alert(
        "There are no apples left. Refresh the page to reset the app!"
      );
    var css = this.state.treeState === "stagnant" ? "shaking" : "stagnant"; // This way we get to shake the tree!
    this.setState({ treeState: css });
    this.selectApples();
  }

  // appleList is a state that we initiated above. This function gets that state array and selects a random index in it. This apple index has an ID and status.
  // After selection, we send that ID to the dropApples function. Before that we're removing the ID from the array list. We don't want to get the same random value next time, don't we?
  selectApples() {
    var appleList = this.state.appleList; // Getting the state value to a variable for easy control.
    var random; // For later use.
    var that = this; // Inside of the timeout function, we got to have "that" insted of "this" keyword. This way we get to use our functions such as dropApples().
    for (var i = 1; i <= 3; i++) {
      // For loop runs 3 times. This means we're dropping three apples. But we're putting a small delay amongst them. Function and timeout below does exactly that.
      (function(ind) {
        setTimeout(function() {
          random = appleList[Math.floor(Math.random() * appleList.length)]; // Getting a random ID within the length of the list.
          appleList.splice(appleList.indexOf(random), 1); // Removing that specific ID from the list.
          that.setState({ "that.state.appleList": that.state.appleList }); // Saving our local changes to the state. 
          that.dropApples(random); // Call the function. This occurs three times due to for loop.
        }, 1000 + 2000 * ind);
      })(i);
    }
  }

  // And this is the most important function. It actually does the magic user sees. It's rather simple than the other ones.
  // What it does is, once it has the value, translates the value to a local variable. And then, maps the whole apples array.
  // If it finds an apple with an ID given, it always does, sets that apple's status to 'falling'. And this way we're animating the apple in the SASS.
  dropApples(number) {
    if (this.state.apples) {
      this.setState(prevState => ({
        apples: prevState.apples.map(apple => { //Maps the apple and previous state too!
          if (apple.id === number) return { ...apple, status: "falling" }; // Magic
          return apple;
        })
      }));
    }

    //After that it changes the tree state to 'stagnant' and increases the collected apple by one. Small hud thingy.
    setTimeout(() => {
      this.setState({
        treeState: "stagnant",
        collected: this.state.collected + 1
      });
    }, 4000);
  }
}

export default App;
