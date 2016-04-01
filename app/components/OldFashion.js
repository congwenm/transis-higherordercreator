import React from 'react';
import Transis from 'transis';

const TransisView = React.createClass({
  mixins: [
    Transis.ReactPropsMixin({
      vehicle: ['color']
    }),
    Transis.ReactStateMixin(AppState, {
      limo: ['price']
    })
  ],

  render () {
    console.debug('render transis view');
    return <div style={{paddingBottom:20, border: "1px dotted gray"}}>
      <h3>Vehicle</h3>
      <h4>Name: {this.props.vehicle.name}</h4>
      <h4 style={{color: this.props.vehicle.color}}>Color: {this.props.vehicle.color}</h4>
      <h3>Limo Prices: {this.state.limo.price}</h3>
    </div>;
  }
});

export default React.createClass({
  mixins: [
    Transis.ReactStateMixin(AppState, {
      vehicle: ['name']
    })
  ],

  render () {
    console.debug('rendering app', this.state.vehicle)
    return <div style={{display: 'inline-block', border: '1px solid purple', margin: 10, padding: 10, width: '30%'}}>
      <h4> Old Fashioned </h4>
      <TransisView vehicle={this.state.vehicle}/>
    </div>;
  }
})
