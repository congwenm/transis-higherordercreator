import React from 'react';
import Transis from 'transis';

// ES6
class TransisViewES6 extends React.Component {
  render () {
    // console.debug('render transis view')
    return <div style={{paddingBottom:20}}>
      <h3>Name: {this.props.vehicle.name}</h3>
      <h3>Color: {this.props.vehicle.color}</h3>
    </div>
  }
}

export default class AppES6 extends React.Component {
  constructor () {
    super();
  }
  render() {
    return <div style={{display: 'inline-block', border: '1px solid black', margin: 10, padding: 10}}>
      <h4> ES6!</h4>
      <TransisViewES6 vehicle={this.props.vehicle}/>
      <button onClick={()=> { this.props.vehicle.name = 'GMC'; this.props.vehicle.color = 'yellow'}} style={{padding: 20, fontSize: 20}}>change name</button>
      <button onClick={()=> { this.props.vehicle.color = 'green'}} style={{padding: 20, fontSize: 20}}>change color</button>
      <button onClick={()=> { this.props.vehicle.color = 'yellow';
      this.props.vehicle.name = 'Honda'}} style={{padding: 20, fontSize: 20}}>change Both</button>
    </div>
  }
}
