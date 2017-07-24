import {RECIEVED_PERSON_CREDITS_RESULTS} from '../actions/movieApi'
const initState ={
  movieCastCredits: {},
  movieCrewCredits: {}
}

function addMovieCredits(state, action){
  let results = action.results
  debugger
  let movieCastCredits = Object.assign({}, state.movieCastCredits, {[result.id]: new Map(result['cast'].map((obj) => [obj.id, obj]))})
  let movieCrewCredits = Object.assign({}, state.movieCastCredits, {[result.id]: new Map(result['crew'].map((obj) => [obj.id, obj]))})
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
