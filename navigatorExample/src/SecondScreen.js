import React, { Component } from 'react';
import { View, Text } from 'react-native';

const SecondScreen = () => {
  return (
    <View style={{ flex : 1 }}>
      <Text>
        Second text test
      </Text>
    </View>
  );
}


// SecondScreen.navigationOptions = {
//   title: 'Second Screen title',
// };

export default SecondScreen;
