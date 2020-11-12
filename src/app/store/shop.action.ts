import { Action, createAction, props } from "@ngrx/store";
import { Book, OfferPercentageMinus, OfferSlice } from "./model";

export const loadRequestBooks = createAction("[Shop] Load Request Books");

export const loadRequestSuccess = createAction(
  "[Shop] Load Request success",
  props<{ books: Book[] }>()
);

export const loadRequestFailure = createAction(
  "[Shop] Load Request failure",
  props<{ error: Error }>()
);

export const addRequest = createAction(
  "[Shop] Load add request",
  props<{ book: Book }>()
);

export const loadRequestCart = createAction("[Shop] Load Request cart success");

export const loadRequestCartSuccess = createAction(
  "[Shop] Load Request success cart",
  props<{ offers: OfferPercentageMinus[] | OfferSlice[] }>()
);

export const deleteRequest = createAction(
  "[Shop] Load delete Request success",
  props<{ book: Book }>()
);
