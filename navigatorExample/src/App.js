import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class App extends Component<{}> {
  render() {
    const { container, welcome } = styles;
    const { navigate } = this.props.navigation;
    return (
      <View style={container}>
        <Text style={welcome}>
          Welcome to React Native!
        </Text>
        <Button
          onPress={() => navigate('SecondScreen')}
          title='go to the Second Screen'
        />
      </View>
    );
  }
}

// App.navigationOptions = {
//   title: 'Home Screen',
// };
const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
};
