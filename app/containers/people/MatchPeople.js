import React, {PropTypes} from 'react'
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import PersonSelected from './PersonSelected'

class MatchPeople extends React.Component {
  peopleToMatch(){
    return this.props.people.map((obj) => {
      return(
        <PersonSelected
          data={obj}
          key={`person-to-check-${obj.id}${Math.random()}`} />
      )
    })
  }

  render() {
    if(this.props.people.length > 0){
      return(
        <View style={[styles.main]}>
          <View style={[styles.matchBlock]}>
            {this.peopleToMatch()}
          </View>
          <View style={[styles.matchButtonBlock]}>
            <Button
              onPress={this.props.checkMovies.bind(this.props)}
              title="Check Movie Matches"
              color="#841584"
              accessibilityLabel="Check Movie Matches" />
          </View>
        </View>
      )
    }
    return null
  }
}


var styles = StyleSheet.create({
  main: {
    flexDirection: 'column'
  },
  matchBlock:{
    flexDirection: 'row'
  },
  matchButtonBlock: {

  }
});

import {startMatchingPeople} from "../../actions/matchPerson"

function mapStateToProps(state) {
  return {
    people: state.personCredits.matchUser
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    checkMovies: function(){
      dispatch(startMatchingPeople())
    }
  }
}

MatchPeople = connect(mapStateToProps, mapDispatchToProps)(MatchPeople)
export default MatchPeople
