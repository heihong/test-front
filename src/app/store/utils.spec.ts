import {
  calculMinus,
  calculPercentage,
  calculSlide,
  totalCart,
  getResultOffer,
} from "./utils";

describe("Hello World", () => {
  const offers = [
    { type: "percentage", value: 10 },
    { type: "minus", value: 15 },
    { type: "slice", sliceValue: 100, value: 12 },
  ];

  let total = 65;

  it("calculMinus", () => {
    let total = 65;
    let offer = { type: "minus", value: 5 };
    expect(calculMinus(total, offer)).toEqual(60);
  });

  it("calculPercentage", () => {
    let total = 60;
    let offer = { type: "percentage", value: 10 };
    expect(calculPercentage(total, offer)).toEqual(54);
  });

  it("calculSlide", () => {
    let total = 60;
    let offer = { type: "percentage", value: 10, sliceValue: 50 };
    expect(calculSlide(total, offer)).toEqual(50);
  });

  it("totalCart", () => {
    let calcul = [4, 2, 6];
    expect(totalCart(calcul)).toEqual(2);
  });

  it("getResultOffer", () => {
    let calcul = [4, 2, 6];
    let totalAmount = 65;
    let offers = [
      {
        type: "percentage",
        value: 5,
      },
      {
        type: "minus",
        value: 15,
      },
      {
        type: "slice",
        sliceValue: 100,
        value: 12,
      },
    ];
    let result = [50, 61.75, 65];

    expect(getResultOffer(offers, totalAmount)).toEqual(result);
  });
});
