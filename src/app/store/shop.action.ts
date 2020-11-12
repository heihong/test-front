import { Action, createAction, props } from "@ngrx/store";
import * as fromReducer from "./shop.reducer";

export const loadRequestBook = createAction("[Shop] Load Request");

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

export const loadRequestCartSuccess = createAction(
  "[Shop] Load add Request success",
  props<{ offers: any }>()
);

export const loadRequestCart = createAction("[Shop] Load Request cart success");
