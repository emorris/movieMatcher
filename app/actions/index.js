export const SET_MOVIE_MATCH_VISIBLE = "SET_MOVIE_MATCH_VISIBLE"

export const setVisibleMovieMatch = (visible) => {
  return{
    type: SET_MOVIE_MATCH_VISIBLE,
    visible
  }
}
