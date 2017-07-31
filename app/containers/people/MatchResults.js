import React, {PropTypes} from 'react'
import {StyleSheet, Text, View, Button, Image, ScrollView} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import PersonSelected from './PersonSelected'
import MovieCard from '../../components/Movies/MovieCard'

class MatchResults extends React.Component {
  showResults(){
    let items = this.props.results.map((film) => {
      return(<MovieCard key={`film-${film.id}`} data={film} />)
    })
    return items
  }

  render() {
    if(this.props.results.length > 0){
      return(
        <View style={[styles.main]}>
          <Text>Match Results</Text>
          <ScrollView style={[styles.main]}>
            {this.showResults()}
          </ScrollView>
        </View>
      )
    }
    return null
  }
}

function checkIfMatchIsReady(toMatch, movieCredits){
  if(toMatch.length  < 2 || Object.keys(movieCredits).length == 0) return false
  let allGood = true
  toMatch.forEach(function(person) {
    allGood = allGood && !!movieCredits[person.id]
  });
  return allGood
}

function searchForMatches(toMatch, movieCredits){
  let matches = movieCredits[toMatch.pop().id]
  toMatch.forEach((user) => {
    let newMatches = {}
    let personFilms = movieCredits[user.id]
    Object.keys(matches).map((key, index)=>{
      if(!!personFilms[key]){
        newMatches[key] = matches[key]
      }
    })
    matches = newMatches
  })
  return Object.values(matches);
}

function processMatch(state){
  let movieCredits = state.personCreditsActions.movieCastCredits
  let toMatch = state.addPeopleActions.people.slice()
  if(!checkIfMatchIsReady(toMatch, movieCredits)) {
    return []
  } else {
    return searchForMatches(toMatch, movieCredits);
  }
}

var styles = StyleSheet.create({
  main: {
    flex: 5
  },
  scrollView: {
    flex: 1,
    padding: 10
  }
});

function mapStateToProps(state) {
  console.log("ping", state, processMatch(state))
  return {
    results: processMatch(state)
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

MatchResults = connect(mapStateToProps, mapDispatchToProps)(MatchResults)
export default MatchResults
