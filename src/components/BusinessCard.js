import React, { Component } from 'react';
import { Card, CardItem, Body, Text } from 'native-base';
import { Image } from 'react-native';

export default class BusinessCard extends Component {

  render() {
    var imageObj;
    if (this.props.data.image_url != '')
      imageObj = { uri: this.props.data.image_url };
    else
      imageObj = require("../assets/noImage.jpg");

    return (
      <Card>
        <CardItem header>
          <Body>
            <Text>{this.props.data.name}</Text>
            <Text note>Rating: {this.props.data.rating}</Text>
          </Body>
        </CardItem>
        <CardItem cardBody button onPress={() => this.props.pressed(this.props.dataKey)}>
          <Image source={imageObj} style={{ height: 200, width: null, flex: 1 }} />
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