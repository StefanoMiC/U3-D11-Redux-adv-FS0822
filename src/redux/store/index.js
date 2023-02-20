// questo file si occupa di creare lo store all'avvio dell'applicazione

import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import mainReducer from "../reducers";
import cartReducer from "../reducers/cartReducer";
import userReducer from "../reducers/userReducer";
import booksReducer from "../reducers/booksReducer";

// cartReducer e userReducer gestiscono la loro porzione di stato più piccola,
// con combineReducer riportiamo le sezioni (slices) in un'unico macro oggetto globale
// prima di passarlo allo store
const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  books: booksReducer
});

// configureStore ha bisogno della struttura del nostro store/stato globale, come parametro principale (quindi un reducer)
const store = configureStore({
  // reducer
  reducer: rootReducer
});

export default store;
