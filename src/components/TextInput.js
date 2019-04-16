import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';

export default class FloatingLabelExample extends Component {
  constructor(props){
    super(props);
    this.state = {
      text:''
    }
  }

  render() {
    return (
          <Form>
            <Item floatingLabel>
              <Label>Area Code</Label>
              <Input onChangeText={(text) => {this.props.pressed(text)}}
                // this.setState({text:text},()=>console.log(this.state.text))}}
                />
            </Item>
          </Form>
    );
  }
}