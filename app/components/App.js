import React from 'react';
import Transis from 'transis';

import Global from './Global';

import AppHigherOrder from './HigherOrder';
import OldFashion from './OldFashion';
import AppES6 from './ES6';
function rand(num) {
  return Math.floor(Math.random() * num)
}


export default class App extends React.Component {
  constructor() {
    super();
  }

  render () {
    let {spiderman, deadpool, punisher} = AppState;
    return (<div>
      <div>
        <h1><center>Power ranking</center></h1>
        <OldFashion />
        <AppES6 spidermanName={spiderman.name}
          spidermanColor={spiderman.color}
          spidermanPowerlevel={spiderman.powerlevel}
        />
        <AppHigherOrder />
      </div>
      <div>
        <div>
          <h2 className="u-inlineBlock">Spiderman: state </h2>
          <button onClick={()=> spiderman.undoChanges()}>reset</button>
          <button onClick={()=> {spiderman.name = "Spiderman"; spiderman.color = "red"}}>Morphin Time</button>
          <button onClick={()=> {spiderman.color = "black"; spiderman.powerlevel = 20}}>Turn Evil</button>
        </div>

        <div>
          <h2 className="u-inlineBlock">Deadpool: prop </h2>
          <button onClick={()=> deadpool.undoChanges()}>reset</button>
          <button onClick={()=> {
            deadpool.name = "Deadpool";
            deadpool.color = 'red';
          }}>Morphin Time</button>
          <button onClick={()=> {
            deadpool.powerlevel = (Math.floor(Math.random() * 10E10)).toString()
          }}>
            Use the 4th Wall
          </button>
        </div>

        <div>
          <h2 className="u-inlineBlock">Punisher: state </h2>
          <button onClick={()=> punisher.undoChanges()}>reset</button>
          <button onClick={()=> {
            punisher.name = "Punisher";
            punisher.color = "black";
          }}>Morphin Time</button>
          <button onClick={()=> punisher.powerlevel = 30 }>
            Loses family
          </button>
        </div>

      </div>
    </div>);
  }
}
