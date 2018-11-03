import React from 'react';
import {Route, withRouter} from 'react-router-dom';

class ScrollToTopRoute extends React.Component {
  componentDidMount () {
    window.scrollTo(0, 0)
  }
  componentDidUpdate () {
    window.scrollTo(0, 0)
  }
  render () {
    const {component: Component, componentProps, ...rest} = this.props
    return (
      <Route {...rest} render={
        props => <Component {...props} {...componentProps} />
      } />
    )
  }
}

export default withRouter(ScrollToTopRoute)
