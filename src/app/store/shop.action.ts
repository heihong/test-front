import { Action, createAction, props } from "@ngrx/store";
import * as fromReducer from "./shop.reducer";

export const loadRequest = createAction("[Shop] Load Request");

export const loadRequestSuccess = createAction(
  "[Shop] Load Request success",
  props<{ books: fromReducer.Book[] }>()
);

export const loadRequestFailure = createAction(
  "[Shop] Load Request failure",
  props<{ error: Error }>()
);

export const addRequest = createAction(
  "[Shop] Load add request",
  props<{ book: fromReducer.Book }>()
);

export const addRequestSuccess = createAction(
  "[Shop] Load Request success",
  props<{ price: number }>()
);
