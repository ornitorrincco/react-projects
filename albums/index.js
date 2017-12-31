import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

const App = () => (
  //flex:1 expand the content in the entire screen
  <View style={{ flex: 1 }}>
    <Header headerText={'albums'} />
    <AlbumList />
  </View>
);


AppRegistry.registerComponent('albums', () => App);
