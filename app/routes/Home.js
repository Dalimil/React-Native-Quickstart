import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Image,
  TouchableHighlight
} from 'react-native';

import images from '../config/images';

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

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  onPressButton() {
    console.log("log-android 'message'");
  }

  render() {
    return (
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

        <Image source={images.logo}
          style={{ flex: 1, width: undefined, height: undefined, resizeMode: "contain" }}>
          <Text style={{ textAlign: "center", color: "#fff", marginTop: 30 }}>
            Text over image
          </Text>
        </Image>
        
        <ScrollView>
          <Text>Let's scroll this...{'\n'}{'\n'}</Text>
          <Text>Let's scroll this{'\n'}{'\n'}</Text>
          <Text>Let's scroll this...{'\n'}{'\n'}</Text>
          <Text>Let's scroll this{'\n'}{'\n'}</Text>
          <Text>Let's scroll this...{'\n'}{'\n'}</Text>
          <Text>Let's scroll this{'\n'}{'\n'}</Text>
          <Text>Let's scroll this.</Text>
        </ScrollView>
      </View>
    );
  }

}

