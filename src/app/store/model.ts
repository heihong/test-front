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

export interface ShopState {
  books: Book[];
  isLoading: boolean;
  cart: Book[];
  totalAmount: number;
  offers: OfferPercentageMinus[] | OfferSlice[];
  totalCart: number;
}

export const initialState: ShopState = {
  books: [],
  isLoading: false,
  cart: [],
  totalAmount: 0,
  offers: [],
  totalCart: null,
};
