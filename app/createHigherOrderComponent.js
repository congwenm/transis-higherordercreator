import React from 'react';

export default function createHigherOrderComponent(ComposedComponent, {stateMixin, propsMixin}) {
  const higherOrderComponent = class HigherOrderComponent extends React.Component {
    constructor(props) {
      super(props)
      if (stateMixin) {
        this.state = stateMixin.getInitialState();
        this.componentWillMount = stateMixin.componentWillMount.bind(this);
        this.componentWillUnmount = stateMixin.componentWillUnmount.bind(this);
      }
      else if (propsMixin) {
        this.componentWillMount = propsMixin.componentWillMount.bind(this);
        this.componentWillUnmount = propsMixin.componentWillUnmount.bind(this);
        this.componentWillReceiveProps = propsMixin.componentWillReceiveProps.bind(this);
      }
    }

    render() {
      return <ComposedComponent {...this.props} {...this.state} />;
    }
  };
  return higherOrderComponent;
}
