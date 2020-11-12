import { createReducer, on, Action, createFeatureSelector } from "@ngrx/store";
import { Calcul } from "./calcul";
import { ShopState, initialState } from "./model";
import * as fromActions from "./shop.action";

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
    totalAmount: state.totalAmount + book.price,
  })),
  on(fromActions.loadRequestCart, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(fromActions.loadRequestCartSuccess, (state, { offers }) => {
    let calcul = new Calcul();
    return {
      ...state,
      offers,
      totalCart: calcul.totalCart(
        calcul.getResultOffer(offers, state.totalAmount)
      ),
      isLoading: false,
    };
  })
);

export function shopReducer(state: ShopState | undefined, action: Action) {
  return initBookReducer(state, action);
}

export const bookStateSelector = createFeatureSelector<ShopState>("shopState");
