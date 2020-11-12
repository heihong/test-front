import { Component, OnInit } from "@angular/core";
import { pipe } from "rxjs";
import { Store } from "@ngrx/store";
import * as fromReducer from "../store/shop.reducer";
import * as fromSelectors from "../store/shop.selectors";

@Component({
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.scss"],
})
export class BooksComponent {
  books$ = this.bookStore.select(fromSelectors.selectBooks);
  loading$ = this.bookStore.select(fromSelectors.selectLoading);
  searchText: string;
  constructor(private bookStore: Store<fromReducer.BookState>) {}
}
