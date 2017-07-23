export const ADD_PERSON_TO_MATCH = "ADD_PERSON_TO_MATCH"

export const addPersonToMatch = (person) => {
  return{
    type: ADD_PERSON_TO_MATCH,
    person
  }
}