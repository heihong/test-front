import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { Store } from "@ngrx/store";
import * as fromActions from "../store/shop.action";
import * as fromReducer from "../store/shop.reducer";

@Injectable({
  providedIn: "root",
})
export class BooksResolver implements Resolve<boolean> {
  constructor(private bookStore: Store<fromReducer.BookState>) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    this.bookStore.dispatch(fromActions.loadRequest());
    return state;
  }
}