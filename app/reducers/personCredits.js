import {RECIEVED_PERSON_CREDITS_RESULTS} from '../actions/movieApi'
import {START_MATCHING_PEOPLE, STOPPED_MATCHING_PEOPLE} from '../actions/matchPerson'
const initState ={
  movieCastCredits: {},
  movieCrewCredits: {},
  startMatching: false,
}

function convertToObject(array){
  return array.reduce(function(result, obj) {
    result[obj.id] = obj
    return result
  }, {})
}

function addMovieCredits(state, action){
  let result = action.response
  let movieCastCredits = Object.assign({}, state.movieCastCredits, {[result.id]: convertToObject(result['cast'])})
  let movieCrewCredits = Object.assign({}, state.movieCastCredits, {[result.id]: convertToObject(result['crew'])})
  return {movieCastCredits, movieCrewCredits}
}

export function personCredits(state = initState, action){
  switch(action.type){
    case RECIEVED_PERSON_CREDITS_RESULTS:
      return Object.assign({}, state, addMovieCredits(state, action))
    case START_MATCHING_PEOPLE:
      return Object.assign({}, state, {startMatching: true})
    case STOPPED_MATCHING_PEOPLE:
      return Object.assign({}, state, {startMatching: false})
    default:
      return state;
  }
}
