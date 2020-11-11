import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { map, mergeMap, catchError, withLatestFrom } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Store } from "@ngrx/store";
import * as fromActions from "./shop.action";
import * as fromReducer from "./shop.reducer";
import * as fromSelectors from "./shop.selectors";

@Injectable()
export class BookEffects {
  loadRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.loadRequest),
      mergeMap((_) =>
        this.http
          .get<fromReducer.Book[]>("http://henri-potier.xebia.fr/books")
          .pipe(
            map((books: fromReducer.Book[]) =>
              fromActions.loadRequestSuccess({ books })
            ),
            catchError((error) => of(fromActions.loadRequestFailure({ error })))
          )
      )
    )
  );
  addRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.addRequest),
      withLatestFrom(this.store.select(fromSelectors.selectCartbyIsbn)),
      mergeMap(([, isbnList]) => {
        return this.http
          .get<{ offers }>(
            `http://henri-potier.xebia.fr/books/${isbnList}/commercialOffers`
          )
          .pipe(
            map(({ offers }) => fromActions.addRequestSuccess({ offers })),
            catchError((error) => of(fromActions.loadRequestFailure({ error })))
          );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<fromReducer.BookState>
  ) {}
}
