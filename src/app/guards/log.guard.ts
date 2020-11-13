import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate,
} from "@angular/router";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { filter, map, take, tap } from "rxjs/operators";
import { ShopState } from "../store/interfacers";
import * as fromActions from "../store/shop.action";
import * as fromSelectors from "../store/shop.selectors";

@Injectable({
  providedIn: "root",
})
export class LogGuard implements CanActivate {
  constructor(private shopState: Store<ShopState>) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return this.shopState.select(fromSelectors.selectBooks).pipe(
      map((books) => Object.keys(books).length > 0),
      tap((loaded) => {
        if (!loaded) {
          // checking if we need to dispatch the action.
          this.shopState.dispatch(fromActions.loadRequestBooks());
        }
      }),
      filter((loaded) => !!loaded), // waiting until the tasks have been loaded.
      take(1)
    );
  }
}
