import {RECIEVED_PERSON_CREDITS_RESULTS} from '../actions/movieApi'
import {START_MATCHING_PEOPLE} from '../actions/matchPerson'
import { ADD_PERSON_TO_MATCHING, REMOVE_PERSON_FROM_MATCHING } from '../actions/matchPerson'


const initState ={
  movieCastCredits: {},
  movieCrewCredits: {},
  matched: {},
  peopleToMatch: []
}

function removePerson(state, action){
  let people = state.peopleToMatch.slice()
  people = people.filter((person) => action.person.id != person.id)
  return {people}
}

function addPerson(state, action) {
  let people = state.peopleToMatch.slice()
  let found = people.find((person) => action.person.id == person.id)
  if(!found) people.push(action.person)
  return {people}
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
  let movieCredits = state.personCredits.movieCastCredits
  let toMatch = state.peopleToMatch.slice()
  let startMatching = state.personCredits.startMatching
  if(!startMatching || !checkIfMatchIsReady(toMatch, movieCredits)) {
    return []
  } else {
    return searchForMatches(toMatch, movieCredits);
  }
}

function convertToObject(array){
  return array.reduce(function(result, obj) {
    result[obj.id] = obj
    return result
  }, {})
}

function addMovieCredits(state, action){
  let result = action.response
  let movieCastCredits = Object.assign(
    {},
    state.movieCastCredits,
    {[result.id]: convertToObject(result['cast'])}
  )
  let movieCrewCredits = Object.assign(
    {},
    state.movieCastCredits,
    {[result.id]: convertToObject(result['crew'])}
  )
  return {movieCastCredits, movieCrewCredits}
}

export function personCredits(state = initState, action){
  switch(action.type){
    case RECIEVED_PERSON_CREDITS_RESULTS:
      return Object.assign({}, state, addMovieCredits(state, action))
    case START_MATCHING_PEOPLE:
      let matched = processMatch(state)
      return Object.assign({}, state, {matched: matched})
    case ADD_PERSON_TO_MATCHING:
      return Object.assign({}, state, addPerson(state, action))
    case REMOVE_PERSON_FROM_MATCHING:
      return Object.assign({}, state, removePerson(state, action))
    default:
      return state;
  }
}
