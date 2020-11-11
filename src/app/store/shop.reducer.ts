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
  result: number[];
}

export const initialState: BookState = {
  books: [],
  isLoading: false,
  cart: [],
  totalAmount: 0,
  result: [],
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

const typeOffers = {
  minus: "minus",
  percentage: "percentage",
  slice: "slice",
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
    totalAmount: state.totalAmount + book.price,
  })),
  on(fromActions.addRequestSuccess, (state, { offers }) => {
    let arrayType = offers.map((offer) => offer.type);
    return {
      ...state,
      result: [
        arrayType.includes(typeOffers.minus)
          ? calculMinus(
              state.totalAmount,
              offers.find((offer) => offer.type === typeOffers.minus)
            )
          : null,
        arrayType.includes(typeOffers.percentage)
          ? calculPercentage(
              state.totalAmount,
              offers.find((offer) => offer.type === typeOffers.percentage)
            )
          : null,
        arrayType.includes(typeOffers.slice)
          ? calculSlide(
              state.totalAmount,
              offers.find((offer) => offer.type === typeOffers.slice)
            )
          : null,
      ],
    };
  })
);

export function bookReducer(state: BookState | undefined, action: Action) {
  return initBookReducer(state, action);
}

export const bookStateSelector = createFeatureSelector<BookState>("bookState");
