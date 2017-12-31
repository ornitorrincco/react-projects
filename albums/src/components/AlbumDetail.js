import React from 'react';
import { View, Text } from 'react-native';

const AlbumDetail = (props) => (
    <View>
      <Text>{props.albums.title}</Text>
    </View>
  );

export default AlbumDetail;
