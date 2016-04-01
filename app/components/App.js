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
    return (<div>
      <div>
        <OldFashion />
        <AppES6 vehicle = {AppState.vehicle} limo={AppState.limo}/>
        <AppHigherOrder />
      </div>
      <div>
        <button onClick={()=> {AppState.vehicle.name = 'GMC';AppState.vehicle.color = 'yellow'}}
          style={{padding: 20, fontSize: 20}}
        >change name</button>
        <button style={{padding: 20, fontSize: 20}}
          onClick={()=> {AppState.vehicle.color = 'green'}}
        >change color</button>
        <button style={{padding: 20, fontSize: 20}}
          onClick={()=> {AppState.vehicle.color = 'yellow';AppState.vehicle.name = 'Honda'}}
        >
          change Name and Color
        </button>

        <br/>
        <button style={{padding: 20, fontSize: 20}}
          onClick={()=> {AppState.limo.price=rand(20000) }}
        >
          Limo: change price
        </button>
      </div>
    </div>);
  }
}
