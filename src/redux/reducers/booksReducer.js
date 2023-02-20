import { GET_BOOKS, GET_BOOKS_ERROR } from "../actions";

const initialState = {
  stock: [], // qui dentro finiranno i libri una volta chiamata la fetch da dentro la nostra funziona asincrona nell'action creator
  hasError: false
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return {
        ...state,
        stock: action.payload
      };
    case GET_BOOKS_ERROR:
      return {
        ...state,
        hasError: true
      };
    default:
      return state;
  }
};

export default booksReducer;
