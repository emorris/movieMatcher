import React, {PropTypes} from 'react'
import {StyleSheet, Text, View, Button} from 'react-native';
import { Actions } from 'react-native-router-flux';
import SearchBox from "../containers/people/SearchBox"
import SearchResults from "../containers/people/SearchResults"
import MatchPeople from "../containers/people/MatchPeople"
import MatchResults from "../containers/people/MatchResults"

class Home extends React.Component {
  render() {
    return (
      <View style={[styles.home]}>
        <MatchPeople />
        <SearchBox />
        <SearchResults />

        <MatchResults />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  home: {
    flex: 1,
    padding: 10,
    backgroundColor: 'transparent'
  }
});

export default Home
