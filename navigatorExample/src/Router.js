import React from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import App from './App';
import SecondScreen from './SecondScreen.js';

const simpleApp = StackNavigator({
  Home: { screen: App,
  navigationOptions: ({ navigation }) => ({
  					header: null,
  				})
        },
  SecondScreen: { screen: SecondScreen,
  navigationOptions: ({ navigation }) => ({
            header: null,
          })
        },
  });

export default simpleApp;
