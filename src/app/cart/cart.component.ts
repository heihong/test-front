import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { ShopState } from "../store/interfacers";
import * as fromActions from "../store/shop.action";
import * as fromSelectors from "../store/shop.selectors";

@Component({
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"],
})
export class CartComponent {
  cart$ = this.shopState.select(fromSelectors.selectCart);
  total$ = this.shopState.select(fromSelectors.selectTotalCart);
  loading$ = this.shopState.select(fromSelectors.selectLoading);

  subscription = new Subscription();

  constructor(private shopState: Store<ShopState>) {}

  ngOnInit() {
    this.shopState.dispatch(fromActions.loadRequestCart());
  }
}
