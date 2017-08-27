import React from 'react';
import { RaisedButton } from 'material-ui';
import styled from 'styled-components';
import { Link } from 'react-router';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: flex;
`;

export default class NotFound extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <h1>404</h1>
        <p>Page not found</p>
        <Link to="/">
          <RaisedButton>Back</RaisedButton>
        </Link>
      </Wrapper>
    );
  }
}
