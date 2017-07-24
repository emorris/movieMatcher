import {RECIEVED_PERSON_CREDITS_RESULTS} from '../actions/movieApi'
const initState ={
  movieCastCredits: {},
  movieCrewCredits: {}
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

export function personCreditsActions(state = initState, action){
  switch(action.type){
    case RECIEVED_PERSON_CREDITS_RESULTS:
      return Object.assign({}, state, addMovieCredits(state, action))
    default:
      return state;
  }
}
