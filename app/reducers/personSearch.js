import { PERSON_SEARCH_CHANGE } from '../actions/personSearch'
import {RECIEVED_PERSON_SEARCH_RESULTS} from '../actions/movieApi'
const initState ={
  searchTxt: "",
  searchTxtResults:"",
  results: []
}

export function personSearchActions(state = initState, action){
  switch(action.type){
    case PERSON_SEARCH_CHANGE:
      return Object.assign({}, state, {searchTxt: action.searchTxt})
    case RECIEVED_PERSON_SEARCH_RESULTS:
      console.log(action)
      return Object.assign({}, state, 
        {
          results: action.response.results, 
          searchTxtResults: action.searchTxt
        }
      )
    default:
      return state;
  }
}
