import { OfferPercentageMinus, OfferSlice } from "./interfacers";

export const typeOffers = {
  minus: "minus",
  percentage: "percentage",
  slice: "slice",
};
export const calculMinus = (total, { value }: OfferPercentageMinus): number => {
  return total - value;
};

export const calculPercentage = (
  total,
  { value }: OfferPercentageMinus
): number => {
  return total - (total * value) / 100;
};

export const calculSlide = (
  total,
  { value, sliceValue }: OfferSlice
): number => {
  let sliceNumber = Math.trunc(total / sliceValue);
  return total - value * sliceNumber;
};

export const total = (books): number => {
  return books.reduce((acc, b) => acc + b.price, 0);
};

export const getMin = (calcul: number[]): number => {
  return Math.min(...calcul);
};

export const getResultOffer = (offers, cart) => {
  let totalAmount = total(cart);
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
