import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View,
  Image,
  Alert
} from 'react-native';

import { Container, Button, Icon, Title, Left, Right, Subtitle, Header, Content, Form, Item, Input, Label, Footer } from 'native-base';

import FloatingLabelExample from '../components/TextInput';

import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const newRed = '#CA0000';

export default class Home extends Component {
  static navigationOptions = {
    title: 'Welcome to Restaurant Picker',
    headerStyle: {
      backgroundColor: newRed
    }
  }

  constructor(props) {
    super(props);

    this.state = {
      areaCode: '',
      numberOfPlayers: 1
    }
  }

  zipChange(value) {
    this.setState({ areaCode: value });
  }

  checkValidation() {
    if (this.state.areaCode.length == 0) {
      Alert.alert('Cannot Submit', 'Please add an area code');
    } else {
      this.props.navigation.navigate("Picker", this.state);
    }
  }

  render() {
    return (
      <Container>
        <Header iosBarStyle="light-content"
          androidStatusBarColor="grey"
          style={{ display: 'none' }}
        />
        <Label style={{ padding: 10, fontSize:18 }}>
          {"\n"}
          Here are the rules: {"\n"}
          1. Input your area code and the number of players  {"\n"}
          2. Hit Submit!  {"\n"}
          3. Each person will take a turn picking a restaurant they
              <Text style={{ fontWeight: "bold" }}> DO NOT </Text>
          want to eat at  {"\n"}
          4. Once everyone has taken a turn, the remaining restaurant will be the chosen restaurant!
            </Label>
        <FloatingLabelExample pressed={(text) => this.zipChange(text)} />
        <Text>{"\n"}</Text>
        <Container style={{ flex: 1, alignItems: 'center' }}>
          <Button iconRight light
            onPress={() => this.setState({ numberOfPlayers: this.state.numberOfPlayers + 1 })}
            style={{ alignSelf: 'center', backgroundColor: "lightgrey", width: '40%' }}
          ><Text></Text>
            <Icon name='arrow-up' />
            <Text style={{color:'black'}}>       Add Person </Text>
          </Button>
          <Text style={{ fontSize: 20, padding: 15, color:'black' }}>{this.state.numberOfPlayers}</Text>
          <Button iconLeft light
            onPress={() => { if (this.state.numberOfPlayers > 1) { this.setState({ numberOfPlayers: this.state.numberOfPlayers - 1 }) } }}
            style={{ alignSelf: 'center', backgroundColor: "lightgrey", width: '40%' }}
          >
            <Icon name='arrow-down' />
            <Text style={{color:'black'}}>    Remove Person </Text>
          </Button>
          <Text/>
          <Text/>
          <Button style={{
            alignSelf: 'center', justifyContent: 'center',
            alignItems: 'center', backgroundColor: newRed, width: '40%'
          }} onPress={() => { this.checkValidation() }}>
            <Text style={{color:'black'}}>Submit!</Text>
          </Button>
        </Container>
      </Container>
    );
  }
}
