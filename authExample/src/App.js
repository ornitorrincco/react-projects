import React, { Component } from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAgeKM5mHLtIpglsiOSXXwszFjh8RCiAA4',
      authDomain: 'authentication-b8a07.firebaseapp.com',
      databaseURL: 'https://authentication-b8a07.firebaseio.com',
      projectId: 'authentication-b8a07',
      storageBucket: 'authentication-b8a07.appspot.com',
      messagingSenderId: '204603754319'
  });

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      this.setState({ loggedIn: true });
    } else {
      this.setState({ loggedIn: false });
    }
  });
}

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
            Log out
            </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size='large' />;
    }
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
          {this.renderContent()}
      </View>
    );
  }
}

export default App;
