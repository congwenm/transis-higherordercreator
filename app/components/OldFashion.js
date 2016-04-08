import React from 'react';
import Transis from 'transis';

const TransisView = React.createClass({
  mixins: [
    Transis.ReactPropsMixin({
      spiderman: ['*']
    }),
    Transis.ReactStateMixin(AppState, {
      punisher: ['*'],
      deadpool: ['*']
    })
  ],

  render () {
    console.debug('render transis view');
    return  <div style={{paddingBottom:20, border: "1px dotted gray"}}>
      <h4>
        <img src="http://icons.iconarchive.com/icons/icons8/windows-8/96/Cinema-Spiderman-New-icon.png"/> Spiderman
      </h4>
      <h3 style={{color: this.props.spiderman.color}}>{this.props.spiderman.name}: {this.props.spiderman.powerlevel}</h3>

      <h4>
        <img src="http://pre09.deviantart.net/2d60/th/pre/i/2014/111/3/0/deadpool_icon_1_by_jmk_prime-d7fdtw4.png"/> Deadpool
      </h4>
      <h3 style={{color: this.state.deadpool.color}}>{this.state.deadpool.name}: {this.state.deadpool.powerlevel}</h3>

      <h4>
        <img src="http://icons.iconarchive.com/icons/icons8/windows-8/128/Cinema-Punisher-icon.png"/> Punisher
      </h4>
      <h3 style={{color: this.state.punisher.color}}>{this.state.punisher.name}: {this.state.punisher.powerlevel}</h3>
    </div>;
  }
});

export default React.createClass({
  mixins: [
    Transis.ReactStateMixin(AppState, {
      spiderman: []
    })
  ],

  render () {
    console.debug('rendering app', this.state.spiderman)
    return <div style={{display: 'inline-block', border: '1px solid purple', margin: 10, padding: 10, width: '30%'}}>
      <h4> Old Fashioned </h4>
      <TransisView spiderman={this.state.spiderman}/>
    </div>;
  }
})
