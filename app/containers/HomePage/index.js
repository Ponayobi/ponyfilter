import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { List } from 'immutable';
import { makeSelectPony } from './selectors';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>Home page</div>
    );
  }
}

HomePage.propTypes = {
  pony: PropTypes.instanceOf(List),
};

const mapStateToProps = createStructuredSelector({
  pony: makeSelectPony(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
