import { createReducer, on, Action, createFeatureSelector } from "@ngrx/store";
import { ShopState } from "./interfacers";
import * as fromActions from "./shop.action";
import { getResultOffer, total, getMin } from "./utils";

export const initialState: ShopState = {
  books: [],
  isLoading: false,
  cart: [],
  totalAmount: 0,
  offers: [],
  minPrices: null,
};

const initBookReducer = createReducer(
  initialState,
  on(fromActions.loadRequestBooks, (state) => ({ ...state, isLoading: true })),
  on(fromActions.loadRequestSuccess, (state, { books }) => ({
    ...state,
    books,
    isLoading: false,
  })),
  on(fromActions.addRequest, (state, { book }) => ({
    ...state,
    cart: [...state.cart, book],
  })),
  on(fromActions.deleteRequest, (state, { index }) => {
    let cartCopy = [...state.cart];
    cartCopy.splice(index, 1);
    return {
      ...state,
      cart: cartCopy,
    };
  }),
  on(fromActions.loadRequestCart, (state) => ({
    ...state,
    isLoading: state.cart.length === 0 ? false : true,
  })),
  on(fromActions.loadRequestCartSuccess, (state, { offers }) => ({
    ...state,
    offers,
    totalAmount: total(state.cart),
    minPrices: getMin(getResultOffer(offers, state.cart)),
    isLoading: false,
  }))
);

export function shopReducer(state: ShopState | undefined, action: Action) {
  return initBookReducer(state, action);
}

export const bookStateSelector = createFeatureSelector<ShopState>("shopState");
