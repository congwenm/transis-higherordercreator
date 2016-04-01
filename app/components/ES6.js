import React from 'react';
import Transis from 'transis';

// ES6
class TransisViewES6 extends React.Component {
  render () {
    // console.debug('render transis view')
    return <div style={{paddingBottom:20, border: "1px dotted gray"}}>
      <h3>Vehicle</h3>
      <h4>Name: {this.props.vehicle.name}</h4>
      <h4 style={{color: this.props.vehicle.color}}>Color: {this.props.vehicle.color}</h4>
      <h3>Limo Prices: {this.props.limo.price}</h3>
    </div>
  }
}

export default class AppES6 extends React.Component {
  constructor () {
    super();
  }
  render() {
    return <div style={{display: 'inline-block', border: '1px solid black', margin: 10, padding: 10, width: '30%'}}>
      <h4> ES6!</h4>
      <TransisViewES6 vehicle={this.props.vehicle} limo={this.props.limo}/>
    </div>
  }
}
