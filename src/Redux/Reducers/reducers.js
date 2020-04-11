/** @format */

import {
  GET_DATA,
  FILTER_MOVIE_BY_GENRE,
  FILTER_MOVIE_BY_LANGUAGE,
  FILTER_MOVIE_BY_THEATER,
  FILTER_MOVIE_BY_LOCATION,
  CALCULATE_PRICE,
  UPDATE_SEAT_STATUS,
} from "../ActionTypes/actionTypes";

const initialState = {
  isLoaded: false,
  tempMovies: [],
  filteredMovies: [],
  tempTheaters: [],
  tempGenres: [],
  tempLanguages: [],
  totalTicketMoney: 0,
};

const MovieReducer = (state = initialState, action) => {
  var fMovies = [];
  var temp = [];
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        ...action.payload,
        isLoaded: true,
      };

    case UPDATE_SEAT_STATUS: {
      console.log(action.payload1, action.payload2);
      let temp = state.theaters.map((ele) => {
        if (ele.theaterName == action.payload2) {
          ele.seats = action.payload1;
          return ele;
        } else {
          return ele;
        }
      });
      console.log(temp);
      return {
        ...state,
      };
    }
    case CALCULATE_PRICE:
      return {
        ...state,
        totalTicketMoney: action.payload,
      };
    // -----------------------------------------------------------------------

    case FILTER_MOVIE_BY_GENRE:
      let tGenre = action.payload;
      let fMovieByGenre = [];
      if (tGenre === "all") {
        fMovieByGenre = [...state.tempMovies];
      } else {
        fMovieByGenre = state.tempMovies.filter((ele) => {
          return ele.genre === tGenre;
        });
      }

      return {
        ...state,
        filteredMovies: [...fMovieByGenre],
      };

    // -----------------------------------------------------------------------

    case FILTER_MOVIE_BY_LANGUAGE:
      let tLang = action.payload;
      let fMovieByLang = [];
      console.log(tLang);
      if (tLang === "all") {
        fMovieByLang = [...state.tempMovies];
      } else {
        fMovieByLang = state.tempMovies.filter((ele) => {
          return ele.language === tLang;
        });
      }

      return {
        ...state,
        filteredMovies: [...fMovieByLang],
      };

    // -----------------------------------------------------------------------
    case FILTER_MOVIE_BY_THEATER:
      let theater = action.payload;
      let fMovieByTheater = [];
      console.log(theater);
      if (theater === "all") {
        fMovieByTheater = [...state.tempMovies];
      } else {
        fMovieByTheater = state.tempMovies.filter((ele) => {
          return ele.theaterName === theater;
        });
      }

      return {
        ...state,
        filteredMovies: [...fMovieByTheater],
      };

    //---------------------------------------------------------------------
    case FILTER_MOVIE_BY_LOCATION:
      let location = action.payload;
      console.log(location);
      let tGenres = [],
        tLanguages = [],
        tTheaters = [];
      if (location === "all") {
        temp = [...state.movies];
        tGenres = [...state.genres];
        tLanguages = [...state.languages];
        tTheaters = [...state.theaters];
        fMovies = [...state.movies];
      } else {
        let filteredTheatersByLoc = state.theaters.filter(
          (ele) => ele.location === location
        );
        for (let i = 0; i < state.movies.length; i++) {
          for (let j = 0; j < filteredTheatersByLoc.length; j++)
            if (
              state.movies[i].theaterName ===
              filteredTheatersByLoc[j].theaterName
            ) {
              temp.push(state.movies[i]);
            }
        }
        for (let i = 0; i < temp.length; i++) {
          for (let j = 0; j < state.languages.length; j++) {
            if (temp[i].language === state.languages[j].language) {
              tLanguages.push(state.languages[i]);
            }
          }
        }
        for (let i = 0; i < temp.length; i++) {
          for (let j = 0; j < state.genres.length; j++) {
            if (temp[i].genre === state.genres[j].genre) {
              if (!tGenres.includes(state.genres[j])) {
                tGenres.push(state.genres[j]);
              }
            }
          }
        }
        for (let i = 0; i < temp.length; i++) {
          for (let j = 0; j < state.theaters.length; j++) {
            if (temp[i].theaterName === state.theaters[j].theaterName) {
              if (!tTheaters.includes(state.theaters[j])) {
                tTheaters.push(state.theaters[j]);
              }
            }
          }
        }
        fMovies = [...temp];
      }
      return {
        ...state,
        tempMovies: [...temp],
        tempGenres: [...tGenres],
        tempLanguages: [...tLanguages],
        tempTheaters: [...tTheaters],
        filteredMovies: [...fMovies],
      };
    default: {
      return state;
    }
  }
};
export default MovieReducer;
