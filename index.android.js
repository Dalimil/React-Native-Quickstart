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
  Image,
  TouchableHighlight
} from 'react-native';

import KeepAwake from 'react-native-keep-awake';
import ScrollableTabView from 'react-native-scrollable-tab-view';

export default class Quickstart extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  getUserInfo() {
  	// Fetch usage example
  	return fetch('https://api.github.com/users/octocat')
	  	.then(response => response.json()) // or text() or blob()
	  	.then(data => {
	  		console.log(data);
	  		return data["avatar_url"];
	  	});
  }

  componentDidMount() {
    KeepAwake.activate();
  }

  componentWillUnmount() {
    KeepAwake.deactivate();
  }

  onPressButton() {
    console.log("react-native log-android 'message'");
  }

  render() {
    return (
      <ScrollableTabView>
        <View tabLabel="React" />
        <View tabLabel="Flow" />
        <View tabLabel="Jest" />
      </ScrollableTabView>
      /*
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Shake or press menu button for dev menu
        </Text>

        <TouchableHighlight onPress={this.onPressButton}>
          <View style={{ justifyContent: 'space-around', flexDirection: 'row' }}>
            <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
            <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
            <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
          </View>
        </TouchableHighlight>

        <TextInput
          style={{height: 50}}
          placeholder="Type input here."
          onChangeText={(text) => this.setState({text})}
        />
        <Text>
          { this.state.text.toUpperCase().split("").join("_") }
        </Text>

        <Image source={require('./assets/logo.png')}
          style={{ flex: 1, width: undefined, height: undefined, resizeMode: "contain" }}>
          <Text style={{ textAlign: "center", color: "#fff", marginTop: 30 }}>
            Text over image
          </Text>
        </Image>
        
        <ScrollView>
          <Text>Let's scroll this{'\n'}{'\n'}</Text>
          <Text>Let's scroll this{'\n'}{'\n'}</Text>
          <Text>Let's scroll this{'\n'}{'\n'}</Text>
          <Text>Let's scroll this{'\n'}{'\n'}</Text>
          <Text>Let's scroll this{'\n'}{'\n'}</Text>
          <Text>Let's scroll this{'\n'}{'\n'}</Text>
          <Text>Let's scroll this</Text>
        </ScrollView>
      </View>*/
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
    color: '#333333'
  }
});

AppRegistry.registerComponent('Quickstart', () => Quickstart);
