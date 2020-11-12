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
import * as fromSelectors from "../store/shop.selectors";

@Injectable({
  providedIn: "root",
})
export class BooksResolver implements Resolve<boolean> {
  constructor(private shopState: Store<ShopState>) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    this.shopState.select(fromSelectors.selectBooks).subscribe((books) => {
      if (books.length == 0) {
        this.shopState.dispatch(fromActions.loadRequestBooks());
      }
    });
    return state;
  }
}
