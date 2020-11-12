import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { Store } from "@ngrx/store";
import { ShopState } from "../store/model";
import * as fromActions from "../store/shop.action";
import * as fromReducer from "../store/shop.reducer";

@Injectable({
  providedIn: "root",
})
export class BooksResolver implements Resolve<boolean> {
  constructor(private shopState: Store<ShopState>) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    this.shopState.dispatch(fromActions.loadRequestBooks());
    return state;
  }
}
