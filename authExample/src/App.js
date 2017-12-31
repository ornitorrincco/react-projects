import React, { Component } from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAgeKM5mHLtIpglsiOSXXwszFjh8RCiAA4',
      authDomain: 'authentication-b8a07.firebaseapp.com',
      databaseURL: 'https://authentication-b8a07.firebaseio.com',
      projectId: 'authentication-b8a07',
      storageBucket: 'authentication-b8a07.appspot.com',
      messagingSenderId: '204603754319'
  });
}

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
