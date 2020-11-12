import { Component, OnDestroy, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, Subscription } from "rxjs";
import { ShopState } from "../store/model";
import * as fromActions from "../store/shop.action";
import * as fromSelectors from "../store/shop.selectors";

@Component({
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"],
})
export class CartComponent implements OnInit, OnDestroy {
  cart$ = this.shopState.select(fromSelectors.selectCart);
  total$ = this.shopState.select(fromSelectors.selecttotalCart);
  loading$ = this.shopState.select(fromSelectors.selectLoading);

  subscription = new Subscription();

  constructor(private shopState: Store<ShopState>) {}

  ngOnInit() {
    /*  this.subscription.add(
      this.shopState.select(fromSelectors.selectCart).subscribe((cart) => {
        if (cart.length) {*/
    this.shopState.dispatch(fromActions.loadRequestCart());
    /*       }
      })
    );*/
  }

  ngOnDestroy() {}
}
