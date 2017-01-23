import React, { Component } from 'react';
import { View, DrawerLayoutAndroid, Text } from 'react-native';
import KeepAwake from 'react-native-keep-awake';

/* https://github.com/skv-headless/react-native-scrollable-tab-view */
import ScrollableTabView from 'react-native-scrollable-tab-view';

import Home from './routes/Home';
import Profile from './routes/Profile';
import SignIn from './routes/SignIn';
import styles from './config/styles';
import Toolbar from './components/Toolbar';

export default class App extends Component {

  componentDidMount() {
    KeepAwake.activate();
  }

  componentWillUnmount() {
    KeepAwake.deactivate();
  }

  renderDrawerMenu() {
      return (
          <View style={{flex: 1, backgroundColor: '#fff'}}>
              <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>
                  I'm in the Drawer!
              </Text>
          </View>
      );
  }

  render() {
    return (
      <DrawerLayoutAndroid
          drawerWidth={250}
          drawerPosition={DrawerLayoutAndroid.positions.Left}
          renderNavigationView={this.renderDrawerMenu}>
            {/* Main content */}
            <Toolbar />
            <ScrollableTabView tabBarUnderlineStyle={{ backgroundColor: styles.color.accent}}>
              <Home tabLabel="Home" />
              <Profile tabLabel="Profile" />
              <SignIn tabLabel="Components" />
            </ScrollableTabView>
      </DrawerLayoutAndroid>
    );
  }
}

