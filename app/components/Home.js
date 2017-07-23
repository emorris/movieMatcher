import React, {PropTypes} from 'react'
import {StyleSheet, Text, View, Button} from 'react-native';
import { Actions } from 'react-native-router-flux';
import SearchBox from "../containers/people/SearchBox"
import SearchResults from "../containers/people/SearchResults"
import MatchPeople from "../containers/people/MatchPeople"

class Home extends React.Component {
  render() {
    return (
      <View style={[styles.home]}>
        <SearchBox />
        <SearchResults />
        <MatchPeople />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  home: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  }
});

export default Home
