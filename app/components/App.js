import React from 'react';
import Transis from 'transis';
import _ from 'lodash';

window.AppState = new (
  Transis.Model.extend('AppState', function() {
    this.prop('vehicle');
  })
);

const Car = Transis.Model.extend('Car', function() {
  this.attr('name', 'string');
  this.attr('color', 'string');
});

window.AppState.vehicle = new Car({name: 'Honda Civic'});

// ES6
class TransisViewES6 extends React.Component {
  render () {
    console.debug('render transis view')
    return <div>
      This is a view for transis model.
      <br/><br/>Name: {this.props.vehicle.name}
      <br/><br/>Color: {this.props.vehicle.color}
    </div>
  }
}

export const AppES6 = class AppES6 extends React.Component {
  constructor () {
    super();
    this.state = this.getMyState();
    // var trans = Transis;
  }
  render() {
    return <div style={{display: 'inline-block', border: '1px solid black', margin: 20, padding: 20}}>
      <h2> Hello World!</h2>
      <TransisViewES6 vehicle={this.state.vehicle}/>
      <button onClick={()=> { this.state.vehicle.name = 'GMC'; this.state.vehicle.color = 'yellow'}} style={{padding: 20, fontSize: 20}}>change name</button>
      <button onClick={()=> { this.state.vehicle.color = 'green'}} style={{padding: 20, fontSize: 20}}>change color</button>
    </div>
  }
}

const vehicleStateMixin = Transis.ReactStateMixin(AppState, {
  vehicle: ['name']
});

AppES6.prototype = _.extend(AppES6.prototype,
  {
    getMyState: vehicleStateMixin.getInitialState,
    componentWillUnmount: vehicleStateMixin.componentWillUnmount
  }
);

// old fashioned
const TransisView = React.createClass({
  mixins: [
    Transis.ReactPropsMixin({
      vehicle: ['color']
    })
  ],

  render () {
    console.debug('render transis view');
    return <div>
      This is a view for transis model.
      <br/><br/>Name: {this.props.vehicle.name}
      <br/><br/>Color: {this.props.vehicle.color}
    </div>;
  }
})

export const App = React.createClass({
  mixins: [
    Transis.ReactStateMixin(AppState, {
      vehicle: ['name']

    })
  ],

  render () {
    console.debug('rendering app', this.state.vehicle)
    return <div style={{display: 'inline-block', border: '1px solid purple', margin: 20, padding: 20}}>
      <h2> Hello World! </h2>
      <TransisView vehicle={this.state.vehicle}/>
      <button onClick={()=> { this.state.vehicle.name = 'GMC'; this.state.vehicle.color = 'yellow'}} style={{padding: 20, fontSize: 20}}>change name</button>
      <button onClick={()=> { this.state.vehicle.color = 'green'}} style={{padding: 20, fontSize: 20}}>change color</button>
    </div>;
  }
})
