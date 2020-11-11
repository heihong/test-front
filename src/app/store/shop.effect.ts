import { Injectable } from "@angular/core";
import { Actions, createEffect, Effect, ofType } from "@ngrx/effects";
import { EMPTY, of } from "rxjs";
import { map, mergeMap, catchError, switchMap, tap } from "rxjs/operators";
import * as fromActions from "./shop.action";
import { HttpClient } from "@angular/common/http";
import { Book } from "./shop.reducer";

@Injectable()
export class BookEffects {
  loadRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromActions.loadRequest),
      mergeMap((_) =>
        this.http.get<Book[]>("http://henri-potier.xebia.fr/books").pipe(
          map((books: Book[]) => fromActions.loadRequestSuccess({ books })),
          catchError((error) => of(fromActions.loadRequestFailure({ error })))
        )
      )
    );
  });

  /* addRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromActions.addRequest),
      tap((_) => {
        console.log(_);
      })
    );
  });
*/
  constructor(private actions$: Actions, private http: HttpClient) {}
}
