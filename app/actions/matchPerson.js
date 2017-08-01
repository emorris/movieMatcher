export const ADD_PERSON_TO_MATCHING = "ADD_PERSON_TO_MATCHING"
export const REMOVE_PERSON_FROM_MATCHING = "REMOVE_PERSON_FROM_MATCHING"
export const START_MATCHING_PEOPLE = "START_MATCHING_PEOPLE"
export const STOPPED_MATCHING_PEOPLE = "STOPPED_MATCHING_PEOPLE"

export const addPersonToMatching = (person) => {
  return{
    type: ADD_PERSON_TO_MATCHING,
    person
  }
}

export const removePersonFromMatching = (person) => {
  return{
    type: REMOVE_PERSON_FROM_MATCHING,
    person
  }
}

export const startMatchingPeople =() => {
  return {
    type: START_MATCHING_PEOPLE
  }
}

export const stoppedMatchingPeople =() => {
  return {
    type: STOPPED_MATCHING_PEOPLE
  }
}
