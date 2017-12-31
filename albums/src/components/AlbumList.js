import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {

  state = { albums: [] };

//TODO(ornitorrincco)change console.log error for correcting handle of error
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }))
      .catch(error => (console.log(error)));
  }

  renderAlbums() {
    return this.state.albums.map(albums => <Text>{albums.title}</Text>);
  }
  render() {
    return (
      <View>
      {this.renderAlbums()}
      </View>
    );
  }
}

export default AlbumList;
