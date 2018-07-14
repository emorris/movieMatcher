import { combineReducers } from 'redux'
import {personSearch} from './personSearch'
import {addPeople} from './addPeople'
import {personCredits} from './personCredits'
import modalState from './modalState'

const reducers = combineReducers({
  personSearch,
  addPeople,
  personCredits,
  modalState
})

export default reducers
