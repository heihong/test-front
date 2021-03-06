import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import {
  map,
  mergeMap,
  catchError,
  withLatestFrom,
  filter,
} from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Store } from "@ngrx/store";
import * as fromActions from "./shop.action";
import * as fromSelectors from "./shop.selectors";
import { Book, ShopState } from "./interfacers";

@Injectable()
export class ShopEffects {
  loadRequestBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.loadRequestBooks),
      mergeMap((_) =>
        this.http.get<Book[]>("http://henri-potier.xebia.fr/books").pipe(
          map((books: Book[]) => fromActions.loadRequestSuccess({ books })),
          catchError((error) => of(fromActions.loadRequestFailure({ error })))
        )
      )
    )
  );

  loadRequestCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.loadRequestCart),
      withLatestFrom(this.store.select(fromSelectors.selectCart)),
      filter(([, book]) => book.length > 0),
      mergeMap(([, cart]) => {
        return this.http
          .get<{ offers }>(
            `http://henri-potier.xebia.fr/books/${cart.map(
              (book) => book.isbn
            )}/commercialOffers`
          )
          .pipe(
            map(({ offers }) => fromActions.loadRequestCartSuccess({ offers })),
            catchError((error) => of(fromActions.loadRequestFailure({ error })))
          );
      })
    )
  );

  deleteRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.deleteRequest),
      withLatestFrom(this.store.select(fromSelectors.selectCart)),
      filter(([, book]) => book.length > 0),
      mergeMap(([, cart]) => {
        return this.http
          .get<{ offers }>(
            `http://henri-potier.xebia.fr/books/${cart.map(
              (book) => book.isbn
            )}/commercialOffers`
          )
          .pipe(
            map(({ offers }) => fromActions.loadRequestCartSuccess({ offers })),
            catchError((error) => of(fromActions.loadRequestFailure({ error })))
          );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<ShopState>
  ) {}
}
