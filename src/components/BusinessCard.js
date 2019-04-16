import React, { Component } from 'react';
import { Card, CardItem, Body, Text } from 'native-base';
import {Image} from 'react-native';

var data = {
  address: ["720 E 1000th N", "Logan, UT 84321"],
  image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/8Uv60fgvpTmNpN9zJRR7hQ/o.jpg",
  name: "Tandoori Oven",
  phone: "(435) 750-6836",
  price: "$$",
  rating: 4.5
}

export default class BusinessCard extends Component {


  render() {
    return (
      <Card>
        <CardItem header>
          <Body>
            <Text>{this.props.data.name}</Text>
            <Text note>{this.props.data.rating}</Text>
          </Body>
        </CardItem>
        <CardItem cardBody button onPress={()=>this.props.pressed(this.props.dataKey)}>
          <Image source={{uri: this.props.data.image_url}} style={{height: 200, width: null, flex: 1}}/>
        </CardItem>
        <CardItem>
          <Text>
            Price: {this.props.data.price} {'\n'}
            Phone: {this.props.data.phone} {'\n'}
            Address: {'\n'}
            {this.props.data.address[0]}{'\n'}
            {this.props.data.address[1]}
          </Text>
        </CardItem>
      </Card>
    );
  }
}