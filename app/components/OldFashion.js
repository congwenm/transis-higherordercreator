import React from 'react';
import Transis from 'transis';

const TransisView = React.createClass({
  mixins: [
    Transis.ReactPropsMixin({
      vehicle: ['color']
    })
  ],

  render () {
    console.debug('render transis view');
    return <div style={{paddingBottom:20}}>
      <h3>Name: {this.props.vehicle.name}</h3>
      <h3>Color: {this.props.vehicle.color}</h3>
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
    return <div style={{display: 'inline-block', border: '1px solid purple', margin: 10, padding: 10}}>
      <h4> Old Fashioned </h4>
      <TransisView vehicle={this.state.vehicle}/>
      <button onClick={()=> { this.state.vehicle.name = 'GMC'; this.state.vehicle.color = 'yellow'}} style={{padding: 20, fontSize: 20}}>change name</button>
      <button onClick={()=> { this.state.vehicle.color = 'green'}} style={{padding: 20, fontSize: 20}}>change color</button>
      <button onClick={()=> { this.state.vehicle.color = 'yellow';
      this.state.vehicle.name = 'Honda'}} style={{padding: 20, fontSize: 20}}>change Both</button>
    </div>;
  }
})
