import firebase from 'firebase';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';


class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBvqgBnPly0rAchH0PUgH1_FJ3OEx9Aeqg',
      authDomain: 'manager-41caa.firebaseapp.com',
      databaseURL: 'https://manager-41caa.firebaseio.com',
      projectId: 'manager-41caa',
      storageBucket: 'manager-41caa.appspot.com',
      messagingSenderId: '822499752615'
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
    <Provider store={createStore(reducers)}>
      <View>
        <Text>
          App
        </Text>
      </View>
    </Provider>
  );
  }
}

export default App;
