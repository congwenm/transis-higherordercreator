import React from 'react';

export default function createHigherOrderComponent(
  {stateMixin, propsMixin},
  ComposedComponent
) {
  const higherOrderComponent = class HigherOrderComponent extends React.Component {
    isMounted() {
      return this.__isMounted;
    }
    componentDidMount() {
      this.__isMounted = true
    }
    componentWillUnmount() {
      this.__isMounted = false
    }
    constructor(props) {
      super(props)

      this.componentWillMount = () => {
        if (stateMixin) {
          stateMixin.componentWillMount.apply(this,arguments);
        }
        if (propsMixin) {
          propsMixin.componentWillMount.apply(this,arguments);
        }
      };

      this.componentWillUnmount = () => {
        if (stateMixin) {
          stateMixin.componentWillUnmount.apply(this,arguments);
        }
        if (propsMixin) {
          propsMixin.componentWillUnmount.apply(this,arguments);
        }
      };

      if (stateMixin) {
        this.state = stateMixin.getInitialState();
      }
      if (propsMixin) {
        this.componentWillReceiveProps = propsMixin.componentWillReceiveProps.bind(this);
      }
    }

    render() {
      return <ComposedComponent {...this.props} {...this.state} />;
    }
  };
  return higherOrderComponent;
}
