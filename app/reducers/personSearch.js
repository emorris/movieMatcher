import { PERSON_SEARCH_CHANGE } from '../actions/personSearch'
import {RECIEVED_PERSON_SEARCH_RESULTS} from '../actions/movieApi'
const initState ={
  searchTxt: "",
  results: []
}

export function personSearchActions(state = initState, action){
  switch(action.type){
    case PERSON_SEARCH_CHANGE:
      return Object.assign({}, state, {searchTxt: action.searchTxt})
    case RECIEVED_PERSON_SEARCH_RESULTS:
      return Object.assign({}, state, {results: action.response.results})
    default:
      return state;
  }
}
