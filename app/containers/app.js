
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import List from '../containers/list';
import Detail from '../containers/detail';
import {Router, Scene} from 'react-native-router-flux';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Text>{'App'}</Text>
        <Router>
          <Scene key="root">
            <Scene key="list" component={List} title="List" hideNavBar={true} initial={true} />
            <Scene key="detail" component={Detail} hideNavBar={true} title="Detail" />
          </Scene>
        </Router>
      </View>
    );
  }
}
