import React from 'react';
import Transis from 'transis';

// ES6
class TransisViewES6 extends React.Component {
  render () {
    const {deadpool, punisher} = this.props;
    return  <div style={{paddingBottom:20, border: "1px dotted gray"}}>
      <h4>
        <img src="http://icons.iconarchive.com/icons/icons8/windows-8/96/Cinema-Spiderman-New-icon.png"/> Spiderman
      </h4>
      <h3 style={{color: this.props.spidermanColor}}>{this.props.spidermanName}: {this.props.spidermanPowerlevel}</h3>

      <h4>
        <img src="http://pre09.deviantart.net/2d60/th/pre/i/2014/111/3/0/deadpool_icon_1_by_jmk_prime-d7fdtw4.png"/> Deadpool
      </h4>
      <h3 style={{color: deadpool && deadpool.color}}>{deadpool && deadpool.name}: {deadpool && deadpool.powerlevel}</h3>

      <h4>
        <img src="http://icons.iconarchive.com/icons/icons8/windows-8/128/Cinema-Punisher-icon.png"/> Punisher
      </h4>
      <h3 style={{color: punisher && punisher.color}}>{punisher && punisher.name}: {punisher && punisher.powerlevel}</h3>
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
      <TransisViewES6 {...this.props}/>
    </div>
  }
}
