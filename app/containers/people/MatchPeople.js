import React, {PropTypes} from 'react'
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import PersonSelected from './PersonSelected'

class MatchPeople extends React.Component {
  peopleToMatch(){
    console.log(this.props.people)
    return this.props.people.map((obj) => {
      return(
        <PersonSelected 
          data={obj} 
          key={`person-to-check-${obj.id}`} />
      )
    })
  }

  render() {
    if(this.props.people.length > 0){
      return(
        <View style={[styles.main]}>
          {this.peopleToMatch()}
          <Button
            onPress={this.props.checkMovies.bind(this.props)}
            title="Check Movie Matches"
            color="#841584"
            accessibilityLabel="Check Movie Matches" />
        </View>
      )
    }
    return null
  }
}


var styles = StyleSheet.create({
  main: {
    flex: 2
  },
});

function mapStateToProps(state) {
  console.log(state.addPeopleActions)
  return {
    people: state.addPeopleActions.people
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    checkMovies: function(){
      console.log("checkMovies")
    }
  }
}

MatchPeople = connect(mapStateToProps, mapDispatchToProps)(MatchPeople)
export default MatchPeople
