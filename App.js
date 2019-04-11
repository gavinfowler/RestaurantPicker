import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import HomeScreen from './src/screens/home';
import PassScreen from './src/screens/pass';

export default class App extends Component {
    render() {
        return (
            <AppContainer />
        );
    }
}

const Root = createStackNavigator(
    {
        Home: HomeScreen,
        Pass: PassScreen
    },
    {
        initialRouteName: 'Home'
    }
);

const AppContainer = createAppContainer(Root);
