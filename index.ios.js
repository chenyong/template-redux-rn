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
  View
} from 'react-native';
import App from './app/containers/app';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './app/reducers/';

var store = createStore(reducer);

class Main extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('templateReduxRN', () => Main);
