import { createReducer, on, Action, createFeatureSelector } from "@ngrx/store";
import * as fromActions from "./shop.action";

export interface Book {
  isbn: string;
  title: string;
  cover: string;
  price: number;
  synopsis: string[];
}
export interface OfferPercentageMinus {
  value: number;
  type: string;
}

export interface OfferSlice {
  value: number;
  type: string;
  sliceValue: number;
}

export interface BookState {
  books: Book[];
  isLoading: boolean;
  cart: Book[];
  totalAmount: number;
  offers: OfferPercentageMinus[] | OfferSlice[];
  totalCart: number;
}

export const initialState: BookState = {
  books: [],
  isLoading: false,
  cart: [],
  totalAmount: 0,
  offers: [],
  totalCart: null,
};

const calculMinus = (total, { value }: OfferPercentageMinus): number => {
  return total - value;
};

const calculPercentage = (total, { value }: OfferPercentageMinus): number => {
  return total - (total * value) / 100;
};

const calculSlide = (total, { value, sliceValue }: OfferSlice): number => {
  let sliceNumber = Math.trunc(total / sliceValue);
  return total - value * sliceNumber;
};

const totalAmount = (books): number => {
  return books.reduce((acc, b) => acc + b.price, 0);
};

const totalCart = (calcul: number[]): number => {
  return Math.min(...calcul);
};

const getResultOffer = (offers, totalAmount) => {
  let arrayType = offers.map((offer) => offer.type);
  return [
    arrayType.includes(typeOffers.minus)
      ? calculMinus(
          totalAmount,
          offers.find((offer) => offer.type === typeOffers.minus)
        )
      : null,
    arrayType.includes(typeOffers.percentage)
      ? calculPercentage(
          totalAmount,
          offers.find((offer) => offer.type === typeOffers.percentage)
        )
      : null,
    arrayType.includes(typeOffers.slice)
      ? calculSlide(
          totalAmount,
          offers.find((offer) => offer.type === typeOffers.slice)
        )
      : null,
  ].filter((el) => el != null);
};

const typeOffers = {
  minus: "minus",
  percentage: "percentage",
  slice: "slice",
};

const initBookReducer = createReducer(
  initialState,
  on(fromActions.loadRequestBook, (state) => ({ ...state, isLoading: true })),
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
  on(fromActions.loadRequestCartSuccess, (state, { offers }) => {
    return {
      ...state,
      offers,
      totalCart: totalCart(getResultOffer(offers, state.totalAmount)),
    };
  })
);

export function bookReducer(state: BookState | undefined, action: Action) {
  return initBookReducer(state, action);
}

export const bookStateSelector = createFeatureSelector<BookState>("bookState");
