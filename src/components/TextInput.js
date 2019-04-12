import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
export default class FloatingLabelExample extends Component {
  render() {
    return (
          <Form>
            <Item floatingLabel>
              <Label>Area Code</Label>
              <Input />
            </Item>
          </Form>
    );
  }
}
