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
    return <div>
      This is a view for transis model.
      <br/><br/>Name: {this.props.vehicle.name}
      <br/><br/>Color: {this.props.vehicle.color}
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
      <h2> Old Fashioned </h2>
      <TransisView vehicle={this.state.vehicle}/>
      <button onClick={()=> { this.state.vehicle.name = 'GMC'; this.state.vehicle.color = 'yellow'}} style={{padding: 20, fontSize: 20}}>change name</button>
      <button onClick={()=> { this.state.vehicle.color = 'green'}} style={{padding: 20, fontSize: 20}}>change color</button>
      <button onClick={()=> { this.state.vehicle.color = 'yellow';
      this.state.vehicle.name = 'Honda'}} style={{padding: 20, fontSize: 20}}>change Both</button>
    </div>;
  }
})
