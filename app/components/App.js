import React from 'react';
import Transis from 'transis';

import Global from './Global';

import AppHigherOrder from './HigherOrder';
import OldFashion from './OldFashion';
import AppES6 from './ES6';



export default class App extends React.Component {
  constructor() {
    super();
  }

  render () {
    return (
      <div>
        <OldFashion />
        <AppES6 vehicle = {AppState.vehicle}/>
        <AppHigherOrder />
      </div>
    );
  }
}
