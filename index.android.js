/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Image
} from 'react-native';

import KeepAwake from 'react-native-keep-awake';

export default class Quickstart extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  componentDidMount() {
    KeepAwake.activate();
  }

  componentWillUnmount() {
    KeepAwake.deactivate();
  }

  render() {
    return (
      <ScrollView style={{ backgroundColor: '#F5FCFF' }}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js,{'\n'}
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
        <View style={{ justifyContent: 'space-around', flexDirection: 'row' }}>
          <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
        </View>

        <TextInput
          style={{height: 50}}
          placeholder="Type input here."
          onChangeText={(text) => this.setState({text})}
        />
        <Text>
          { this.state.text.toUpperCase().split("").join("_") }
        </Text>
        <Image source={require('./assets/logo.png')} style={{ width: 200, height: 200, resizeMode: 'contain' }}/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Quickstart', () => Quickstart);
