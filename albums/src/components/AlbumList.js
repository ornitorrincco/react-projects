import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {

  state = { albums: [] };

//TODO(ornitorrincco)change console.log error for correcting handle of error
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }))
      .catch(error => (console.log(error)));
  }

  renderAlbums() {
    // array, key is properly update with key in text tag (perfomance compromise)
    return this.state.albums.map(albums =>
       <AlbumDetail key={albums.title} album={albums} />
     );
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
