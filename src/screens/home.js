import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View
} from 'react-native';

import { Container, Button, Icon, Title, Left, Right, Subtitle, Header, Content, Form, Item, Input, Label } from 'native-base';

import FloatingLabelExample from '../components/TextInput';
import YelpService from '../api/yelp.service'
import BusinessCard from '../components/BusinessCard';

export default class Home extends Component {
    static navigationOptions = {
        title: 'Welcome to Restaurant Picker',
        // headerStyle:{
        //   backgroundColor: '#FF0000'
        // }
    }

    constructor(props) {
        super(props);

        this.state = {
          areaCode: '',
          numberOfPlayers: 1
        }
    }

    zipChange(value){
      this.setState({areaCode:value});
    }

    checkValidation(){
      if(this.state.areaCode.length == 0){
        alert('Please add an area code');
      } else {
        this.props.navigation.navigate("Picker", this.state);
      }
    }

    render() {
        return (
          <Container>
            <Header>
              <Left><Title>Welcome to Restaurant Picker! {"\n"}</Title></Left>
            </Header>
            <Label>
              {"\n"}
              Here are the rules: {"\n"}
              1. Input your area code and the number of players  {"\n"}
              2. Hit Play!  {"\n"}
              3. Each person will take a turn picking a restaurant they 
              <Text style={{fontWeight: "bold"}}> DO NOT </Text>
              want to eat at  {"\n"}
              4. Once everyone has taken a turn, the remaining restaurant will be the chosen restaurant!
            </Label>
            <FloatingLabelExample pressed={(text) => this.zipChange(text)}/>
            <Text>{"\n"}</Text>
            <Text>{"\n"}</Text>
            <Container style={{ flex: 1, alignItems: 'center' }}>
                <Button iconRight light onPress={() => this.setState({ numberOfPlayers: this.state.numberOfPlayers + 1 })} style={{ alignSelf: 'center' }}>
                  <Icon name='arrow-up' />
                  <Text>       Add Person </Text>
                </Button>
              <Text>{this.state.numberOfPlayers}</Text>
                <Button iconLeft light onPress={() => {if(this.state.numberOfPlayers > 1) {this.setState({ numberOfPlayers: this.state.numberOfPlayers - 1 })}}} style={{ alignSelf: 'center' }}>
                  <Icon name='arrow-down' />
                  <Text>    Remove Person </Text>
                </Button>
                <Text>{"\n"}</Text>
                <Text>{"\n"}</Text>
                <Button style={{ alignSelf: 'center' }} onPress={() => { this.checkValidation() }}>
                  <Text>              Submit!              </Text>
                </Button>
						</Container>
          </Container>
        );
    }
}
