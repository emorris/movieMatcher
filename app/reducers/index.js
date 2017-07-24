import { combineReducers } from 'redux'
import {personSearchActions} from './personSearch'
import {addPeopleActions} from './addPeople'
import {personCreditsActions} from './personCredits'

const reducers = combineReducers({
  personSearchActions,
  addPeopleActions,
  personCreditsActions
})

export default reducers
