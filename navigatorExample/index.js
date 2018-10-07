import { AppRegistry } from 'react-native';
import { Component } from 'react';
import App from './src/App';
import simpleApp from './src/Router.js';

export default class navigatorExample extends Component {
  render() {
  const { navigation } = this.props;

    return (
      <App navigation={ navigation } />
    );
  }
}


AppRegistry.registerComponent('navigatorExample', () => simpleApp);
