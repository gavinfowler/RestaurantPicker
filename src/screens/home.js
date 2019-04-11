import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View
} from 'react-native';

export default class Home extends Component {
    static navigationOptions = {
        title: 'Home'
    }

    constructor(props) {
        super(props);

        this.state = {
          areaCode: "Area Code...",
          numberOfPlayers: "Number of Players..."
        }
    }

    render() {
        return (
          <View style={styles.container}>
            <Text>
              Welcome to Restaurant Picker! Here are the rules: {"\n"}
              1. Input your area code and the number of players  {"\n"}
              2. Hit Play!  {"\n"}
              3. Each person will take a turn picking a restaurant they 
              <Text style={{fontWeight: "bold"}}> DO NOT </Text>
              want to eat at  {"\n"}
              4. Once everyone has taken a turn, the remaining restaurant will be the chosen restaurant! {"\n"}
            </Text>
            <TextInput
              style={{ width: 200, borderBottomColor: Platform.OS === 'ios' ? 'black' : null, borderBottomWidth: Platform.OS === 'ios' ? 1 : null }}
              value={this.state.areaCode}
              onChangeText={(val) => this.setState({ areaCode: val })}
              keyboardType='default'
              returnKeyType='done'
              onSubmitEditing={(val) => { console.log('submitted') }}
            />
            <TextInput
              style={{ width: 200, borderBottomColor: Platform.OS === 'ios' ? 'black' : null, borderBottomWidth: Platform.OS === 'ios' ? 1 : null }}
              value={this.state.numberOfPlayers}
              onChangeText={(val) => this.setState({ numberOfPlayers: val })}
              keyboardType='default'
              returnKeyType='done'
              onSubmitEditing={(val) => { console.log('submitted') }}
            />
            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Pass") }}>
              <Text>Play Game!</Text>
            </TouchableOpacity>
          </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
