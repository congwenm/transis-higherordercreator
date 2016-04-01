import React from 'react';
import Transis from 'transis';
import createHigherOrderComponent from '../createHigherOrderComponent';

const TransisViewHigherOrder = createHigherOrderComponent(
  {
    propsMixin: Transis.ReactPropsMixin({
      vehicle: ['color']
    }),
    stateMixin: Transis.ReactStateMixin(AppState, {
      limo: ['price']
    })
  },
  class TransisView extends React.Component {
    render () {
      return <div style={{paddingBottom:20, border: "1px dotted gray"}}>
        <h3>Vehicle</h3>
        <h4>Name: {this.props.vehicle.name}</h4>
        <h4 style={{color: this.props.vehicle.color}}>Color: {this.props.vehicle.color}</h4>
        <h3>Limo Prices: {this.props.limo.price}</h3>
      </div>
    }
  }
);


export default createHigherOrderComponent({
    stateMixin: Transis.ReactStateMixin(AppState, {
      vehicle: ['name']
    })
  }, class App extends React.Component {
    render() {
      return <div style={{display: 'inline-block', border: '1px solid green', margin: 10, padding: 10, width: '30%'}}>
        <h4> Higher Order</h4>
        <TransisViewHigherOrder vehicle={this.props.vehicle}/>
      </div>
    }
  }
);
