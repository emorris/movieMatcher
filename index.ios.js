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
import { createStore, applyMiddleware, compose } from 'redux';
import { connect, Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk'
import App from "./app/App.js"
import allReducers from "./app/reducers"

const store = compose(
  applyMiddleware(
    thunkMiddleware
  )
)(createStore)(allReducers);

export default class MovieMatcher extends Component {
  render() {
    return (
      <Provider store={store}>
         <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('MovieMatcher', () => MovieMatcher);
