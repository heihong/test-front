import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { ShopState } from "../store/model";
import * as fromReducer from "../store/shop.reducer";
import * as fromSelectors from "../store/shop.selectors";

@Component({
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"],
})
export class CartComponent implements OnInit {
  cart$ = this.shopState.select(fromSelectors.selectCart);
  total$ = this.shopState.select(fromSelectors.selecttotalCart);
  loading$ = this.shopState.select(fromSelectors.selectLoading);
  constructor(private shopState: Store<ShopState>) {}

  ngOnInit() {}
}
