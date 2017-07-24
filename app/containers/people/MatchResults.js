import React, {PropTypes} from 'react'
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import PersonSelected from './PersonSelected'

class MatchResults extends React.Component {
  render() {
    if(this.props.results.length > 0){
      return(
        <View style={[styles.main]}>
        </View>
      )
    }
    return null
  }
}

function processMatch(state){
  let credits = state.personCreditsActions
  let toMatch = state.addPeopleActions.people
  
}

var styles = StyleSheet.create({
  main: {
    flex: 2
  },
});

function mapStateToProps(state) {
  return {
    results: processMatch(state)
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    checkMovies: function(){
      console.log("checkMovies")
    }
  }
}

MatchResults = connect(mapStateToProps, mapDispatchToProps)(MatchResults)
export default MatchResults
