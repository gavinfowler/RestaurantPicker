import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import HomeScreen from './src/screens/home';
import PassScreen from './src/screens/pass';
import restaurantDisplay from './src/screens/restaurantDisplay'

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
        Pass: PassScreen,
        Picker: restaurantDisplay
    },
    {
        initialRouteName: 'Home'
    }
);

const AppContainer = createAppContainer(Root);
