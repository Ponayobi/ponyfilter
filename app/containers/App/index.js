import React from 'react';
import Helmet from 'react-helmet';
import { MuiThemeProvider } from 'material-ui';

export default class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <div>
        <Helmet
          titleTemplate="%s - Pony Store"
          defaultTitle="Pony Store"
          meta={[
            { name: 'description', content: 'Pony store!' },
          ]}
        />
        <MuiThemeProvider>
          {this.props.children}
        </MuiThemeProvider>
      </div>
    );
  }
}
