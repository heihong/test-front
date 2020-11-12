import { OfferPercentageMinus, OfferSlice } from "./model";

export class Calcul {
  typeOffers = {
    minus: "minus",
    percentage: "percentage",
    slice: "slice",
  };
  calculMinus = (total, { value }: OfferPercentageMinus): number => {
    return total - value;
  };

  calculPercentage = (total, { value }: OfferPercentageMinus): number => {
    return total - (total * value) / 100;
  };

  calculSlide = (total, { value, sliceValue }: OfferSlice): number => {
    let sliceNumber = Math.trunc(total / sliceValue);
    return total - value * sliceNumber;
  };

  totalAmount = (books): number => {
    return books.reduce((acc, b) => acc + b.price, 0);
  };

  totalCart = (calcul: number[]): number => {
    return Math.min(...calcul);
  };

  getResultOffer = (offers, totalAmount) => {
    let arrayType = offers.map((offer) => offer.type);
    return [
      arrayType.includes(this.typeOffers.minus)
        ? this.calculMinus(
            totalAmount,
            offers.find((offer) => offer.type === this.typeOffers.minus)
          )
        : null,
      arrayType.includes(this.typeOffers.percentage)
        ? this.calculPercentage(
            totalAmount,
            offers.find((offer) => offer.type === this.typeOffers.percentage)
          )
        : null,
      arrayType.includes(this.typeOffers.slice)
        ? this.calculSlide(
            totalAmount,
            offers.find((offer) => offer.type === this.typeOffers.slice)
          )
        : null,
    ].filter((el) => el != null);
  };
}
