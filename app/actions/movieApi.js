const API_BASE = "https://api.themoviedb.org/3"
const API_KEY = "d658c3789fbf9e3c3d24ecf6e5cde56a"

export const RECIEVED_PERSON_SEARCH_RESULTS = "RECIEVED_PERSON_SEARCH_RESULTS"
export const RECIEVED_MOVIE_CREDITS_RESULTS = "RECIEVED_MOVIE_CREDITS_RESULTS"

const baseApiUrl = (path) => {
  return `${API_BASE}${path}`
}

const recievedPersonSearch = (response) => {
  return{
    type: RECIEVED_PERSON_SEARCH_RESULTS,
    response
  }
}

const recievedMovieCredits = (response) => {
  return{
    type: RECIEVED_MOVIE_CREDITS_RESULTS,
    response
  }
}

const addParamsToUrl = (url, params = {}) =>{
  params['api_key'] = API_KEY
  params['include_adult'] = true
  let encode = encodeURIComponent;
  let query = Object.keys(params)
      .map(k => encode(k) + '=' + encode(params[k]))
      .join('&');
  return `${url}?${query}`
}

export const sendPersonSearch = (searchText) => {
  let params = {query: searchText}
  let url = baseApiUrl("/search/person")
  url = addParamsToUrl(url, params)
  return apiCall(url,recievedPersonSearch)
}

export const getMovieCredits = (user_id) => {
  let url = `/person/${person_id}/movie_credits`
  url = baseApiUrl(url)
  url = addParamsToUrl(url)
  return apiCall(url, recievedMovieCredits)
}

export const apiCall = (url, onRecieved) => {
  return dispatch => {
    return fetch(url, {
      method: "GET",
    })
    .then(checkStatus)
    .then(function(json) {
      console.log(json)
      dispatch(onRecieved(json))
    })
    .catch(function(error) {
      console.log(error)
    });
  }
}

const checkStatus = (response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.json();
    } else {
      let error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  }