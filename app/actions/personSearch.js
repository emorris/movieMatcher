export const PERSON_SEARCH_CHANGE = "PERSON_SEARCH_CHANGE"

export const personSearchChange = (searchTxt) => {
  return {
    type: PERSON_SEARCH_CHANGE,
    searchTxt,
    receivedAt: Date.now()
  }
}


