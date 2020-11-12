import { Injectable, OnDestroy } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { ShopState } from "../store/model";
import * as fromActions from "../store/shop.action";
import * as fromReducer from "../store/shop.reducer";
import * as fromSelectors from "../store/shop.selectors";

@Injectable({
  providedIn: "root",
})
export class CartResolver implements Resolve<boolean>, OnDestroy {
  subscription = new Subscription();

  constructor(private shopState: Store<ShopState>) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    this.subscription.add(
      this.shopState.select(fromSelectors.selectCart).subscribe((cart) => {
        if (cart.length) {
          this.shopState.dispatch(fromActions.loadRequestCart());
        }
      })
    );
    return state;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
