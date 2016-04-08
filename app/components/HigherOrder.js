import React from 'react';
import Transis from 'transis';
import createHigherOrderComponent from '../createHigherOrderComponent';

const TransisViewHigherOrder = createHigherOrderComponent(
  {
    propsMixin: Transis.ReactPropsMixin({
      spiderman: ['*']
    }),
    stateMixin: Transis.ReactStateMixin(AppState, {
      deadpool: ['*'],
      punisher: ['*'],
    })
  },
  class TransisView extends React.Component {
    render () {
      return <div style={{paddingBottom:20, border: "1px dotted gray"}}>
        <h4>
          <img src="http://icons.iconarchive.com/icons/icons8/windows-8/96/Cinema-Spiderman-New-icon.png"/> Spiderman
        </h4>
        <h3 style={{color: this.props.spiderman.color}}>{this.props.spiderman.name}: {this.props.spiderman.powerlevel}</h3>

        <h4>
          <img src="http://pre09.deviantart.net/2d60/th/pre/i/2014/111/3/0/deadpool_icon_1_by_jmk_prime-d7fdtw4.png"/> Deadpool
        </h4>
        <h3 style={{color: this.props.deadpool.color}}>{this.props.deadpool.name}: {this.props.deadpool.powerlevel}</h3>

        <h4>
          <img src="http://icons.iconarchive.com/icons/icons8/windows-8/128/Cinema-Punisher-icon.png"/> Punisher
        </h4>
        <h3 style={{color: this.props.punisher.color}}>{this.props.punisher.name}: {this.props.punisher.powerlevel}</h3>
      </div>
    }
  }
);


  export default createHigherOrderComponent({
    stateMixin: Transis.ReactStateMixin(AppState, {
      spiderman: ['']
    })
  }, class App extends React.Component {
    render() {
      return <div style={{display: 'inline-block', border: '1px solid green', margin: 10, padding: 10, width: '30%'}}>
        <h4> Higher Order</h4>
        <TransisViewHigherOrder spiderman={this.props.spiderman}/>
      </div>
    }
  }
);
