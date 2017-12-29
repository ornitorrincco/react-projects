import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {

  // state = { albums: [] };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => console.log(response.data))
      .catch(error => (console.log(error)));
  }

  render() {
    return (
      <View>
        <Text>Album List</Text>
      </View>
    );
  }
}
// componentWillMount() {
//  const headers = {
//  'Content-Type': 'application/json',
//  };
//
//  const url = 'http://rallycoding.herokuapp.com/api/music_albums';
//  const body = null;
//
//  fetch(url, {
//  method: "GET",
//  headers: headers,
//  body: null
//  })
//  .then((response) => console.log(response));
//  }
//
//    render() {
//      return (
//        <View>
//          <Text>Album List</Text>
//        </View>
//      );
//    }
//  }

export default AlbumList;
