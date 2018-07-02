import { combineReducers } from 'redux'
import {personSearch} from './personSearch'
import {addPeople} from './addPeople'
import {personCredits} from './personCredits'

const reducers = combineReducers({
  personSearch,
  addPeople,
  personCredits
})

export default reducers
