import { AppRegistry } from 'react-native';
import { Component } from 'react';
import App from './src/App';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import SecondScreen from './src/SecondScreen.js';

export default class navigatorExample extends Component {
  render() {

  const { navigation } = this.props;

    return (
      <App navigation={ navigation } />
    );
  }
}

const simpleApp = StackNavigator({
  Home: { screen: App,
  navigationOptions: ({ navigation }) => ({
  					header: null,
  				})
  },
  SecondScreen: { screen: SecondScreen,
  navigationOptions: ({ navigation }) => ({
            header: null,
          })
 },
});
AppRegistry.registerComponent('navigatorExample', () => simpleApp);
