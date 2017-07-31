import { ADD_PERSON_TO_MATCHING, REMOVE_PERSON_FROM_MATCHING } from '../actions/matchPerson'

const initState ={
  people: [],
}
function matchUser(person){
  console.log(this.person.id, person.id)
  return 
}

function removePerson(state, action){
  let people = state.people.slice()
  people = people.filter((person) => action.person.id != person.id)
  return {people}
}

function addPerson(state, action) {
  let people = state.people.slice()
  let found = people.find((person) => action.person.id == person.id)
  if(!found) people.push(action.person)
  return {people}
}

export function addPeopleActions(state = initState, action) {
  switch(action.type){
    case ADD_PERSON_TO_MATCHING:
      return Object.assign({}, state, addPerson(state, action))
    case REMOVE_PERSON_FROM_MATCHING:
      return Object.assign({}, state, removePerson(state, action))
    default:
      return state;
  }
}
