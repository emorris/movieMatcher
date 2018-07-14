import {SET_MOVIE_MATCH_VISIBLE} from '../actions/index'
const initState ={
  matchModalVisible: false,
}

export default function personSearch(state = initState, action){
  switch(action.type){
    case SET_MOVIE_MATCH_VISIBLE:
      return {
        ...state,
        matchModalVisible: action.visible
      }
    default:
      return state;
  }
}
