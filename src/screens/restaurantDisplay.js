import React, { Component } from 'react';

import { View, Text } from 'react-native';

import BusinessCard from '../components/BusinessCard'

import YelpService from '../api/yelp.service';
import { Container, Content, Header, Footer } from 'native-base';

const newRed = '#CA0000';

export default class restaurantDisplay extends Component {
  static navigationOptions = {
    title: 'Pick a Restaurant',
    headerStyle: {
      backgroundColor: newRed
    }
  }

  constructor(props) {
    super(props);

    this.state = {
      businesses: []
    }
  }

  componentWillMount() {
    zipCode = this.props.navigation.getParam('areaCode');
    numPeople = this.props.navigation.getParam('numberOfPlayers');
    YelpService.getBusinesses(zipCode, numPeople + 1).then(results => {
      this.setState({ businesses: results })
    }).catch(error => {
      console.log('Something went wrong!');
    })
  }

  renderBusinesses() {
    var array = [];
    for (i = 0; i < this.state.businesses.length; i++) {
      array.push(<BusinessCard key={i} dataKey={i} data={this.state.businesses[i]} pressed={(index) => this.deleteOne(index)} />);
    }
    return (array);
  }

  deleteOne(index) {
    console.log(index);
    array = this.state.businesses;
    array.splice(index, 1);
    console.log(array);
    this.setState({ businesses: array });
  }

  render() {
    if (this.state.businesses.length > 0) {
      return (
        <Container>
          <Header iosBarStyle="light-content"
            androidStatusBarColor="grey"
            style={{ display: 'none' }}
          />
          <Content>
            {this.renderBusinesses()}
          </Content>
          <Footer style={{backgroundColor:newRed}}>
            <Text style={{fontSize:20}}>Banner Ad Here</Text>
          </Footer>
        </Container>
      );
    }
    else {
      return (
        <View>
          <Text>Please Wait</Text>
        </View>
      )
    }
  }
}