import { combineReducers } from 'redux'
import {personSearchActions} from './personSearch'
import {addPeopleActions} from './addPeople'

const reducers = combineReducers({
  personSearchActions,
  addPeopleActions
})

export default reducers
