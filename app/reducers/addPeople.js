import { ADD_PERSON_TO_MATCH } from '../actions/addPerson'

const initState ={
  people: [],
}

function addPerson(state, action) {
  let people = state.people.slice()
  // let found = people.find((added) => { return added.id == action.person.id })
  // if(!found) people.push(action.person)
  people.push(action.person)
  return {people}
}

export function addPeopleActions(state = initState, action) {
  switch(action.type){
    case ADD_PERSON_TO_MATCH:
      return Object.assign({}, state, addPerson(state, action))
    default:
      return state;
  }
}
