import { createReducer, on, Action, createFeatureSelector } from "@ngrx/store";
import * as fromActions from "./shop.action";

export interface Book {
  isbn: string;
  title: string;
  cover: string;
  price: number;
  synopsis: string[];
}

export interface BookState {
  books: Book[];
  isLoading: boolean;
  cart: Book[];
  totalAmount: number;
}
export const initialState: BookState = {
  books: [],
  isLoading: false,
  cart: [],
  totalAmount: 0,
};

const initBookReducer = createReducer(
  initialState,
  on(fromActions.loadRequest, (state) => ({ ...state, isLoading: true })),
  on(fromActions.loadRequestSuccess, (state, { books }) => ({
    ...state,
    books,
    isLoading: false,
  })),
  on(fromActions.addRequest, (state, { book }) => ({
    ...state,
    cart: [...state.cart, book],
  })),
  on(fromActions.addRequestSuccess, (state, { price }) => ({
    ...state,
    totalAmount: state.totalAmount + price,
  }))
);

export function bookReducer(state: BookState | undefined, action: Action) {
  return initBookReducer(state, action);
}

export const bookStateSelector = createFeatureSelector<BookState>("bookState");
