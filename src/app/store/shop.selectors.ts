import { createSelector } from "@ngrx/store";
import * as fromReducer from "./shop.reducer";

export const selectBooks = createSelector(
  fromReducer.bookStateSelector,
  (state) => state.books
);

export const selectCart = createSelector(
  fromReducer.bookStateSelector,
  (state) => state.cart
);

export const selectBook = createSelector(
  fromReducer.bookStateSelector,
  (state, { isbn }) => state.books.find((book) => book.isbn === isbn)
);

export const selectLoading = createSelector(
  fromReducer.bookStateSelector,
  (state) => state.isLoading
);

export const selectMinPrices = createSelector(
  fromReducer.bookStateSelector,
  (state) => state.minPrices
);
