import React, { Component } from 'react';
import {AppState, StatusBar, NetInfo } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import { connect, Provider } from 'react-redux';
import {Router, Scene} from 'react-native-router-flux';

import Home from './components/Home'

const RouterWithRedux = connect()(Router);

class App extends Component {
  render() {
    return (
      <RouterWithRedux>
        <Scene key="root">
          <Scene 
            initial={true} 
            key="home"
            component={Home}
            title="Home" />
        </Scene>
      </RouterWithRedux>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

App = connect(mapStateToProps, mapDispatchToProps)(App)

export default App;
