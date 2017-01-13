import React, { Component } from 'react';
import { View } from 'react-native';
import KeepAwake from 'react-native-keep-awake';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import Home from './routes/Home';
import styles from './config/styles';

export default class App extends Component {

  componentDidMount() {
    KeepAwake.activate();
  }

  componentWillUnmount() {
    KeepAwake.deactivate();
  }

  render() {
    return (
      /* https://github.com/skv-headless/react-native-scrollable-tab-view */
      <ScrollableTabView tabBarUnderlineStyle={{ backgroundColor: styles.color.accent}}>
        <Home tabLabel="Home" />
        <View tabLabel="Profile" />
        <View tabLabel="Tab 3" />
      </ScrollableTabView>
    );
  }
}

