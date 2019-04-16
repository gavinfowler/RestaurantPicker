import React, { Component } from 'react';

import { View,Text } from 'react-native';

import  BusinessCard  from '../components/BusinessCard'

import YelpService from '../api/yelp.service';
import { Container, Content } from 'native-base';

var data = {
  address: ["720 E 1000th N", "Logan, UT 84321"],
  image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/8Uv60fgvpTmNpN9zJRR7hQ/o.jpg",
  name: "Tandoori Oven",
  phone: "(435) 750-6836",
  price: "$$",
  rating: 4.5
}

var SIZE = 4;

export default class restaurantDisplay extends Component {
  static navigationOptions = {
      title: 'Pick a Restaurant'
  }

  constructor(props) {
      super(props);

      this.state = {
        businesses: []
      }
  }

  componentWillMount(){
    zipCode = this.props.navigation.getParam('areaCode');
    numPeople = this.props.navigation.getParam('numberOfPlayers');
    YelpService.getBusinesses(zipCode,numPeople+1).then( results =>{
      this.setState({businesses:results})
    }).catch(error => {
      console.log('Something went wrong!');
    })
  }

  renderBusinesses(){
    var array = [];
    for(i=0;i<this.state.businesses.length;i++){
      array.push(<BusinessCard key={i} dataKey={i} data={this.state.businesses[i]} pressed={(index)=>this.deleteOne(index)}/>);
    }
    return(array);
  }

  deleteOne(index){
    console.log(index);
    array=this.state.businesses;
    array.splice(index, 1);
    console.log(array);
    this.setState({businesses:array});
  }

  render(){
    if(this.state.businesses.length > 0){
      return(
        <Container>
          <Content>
            {this.renderBusinesses()}
          </Content>
        </Container>
      );
    }
    else {
      return(
        <View>
          <Text>Please Wait</Text>
        </View>
      )
    }
  }
}