import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { select, Store } from "@ngrx/store";
import * as fromActions from "../../store/shop.action";
import * as fromReducer from "../../store/shop.reducer";
import * as fromSelectors from "../../store/shop.selectors";

@Component({
  templateUrl: "./details-book.component.html",
  styleUrls: ["./details-book.component.scss"],
})
export class DetailsBookComponent {
  isbn = this.route.snapshot.paramMap.get("isbn");
  book$ = this.bookStore.select(fromSelectors.selectBook, { isbn: this.isbn });
  loading$ = this.bookStore.select(fromSelectors.selectLoading);
  constructor(
    private route: ActivatedRoute,
    private bookStore: Store<fromReducer.BookState>
  ) {}

  addRequest(book: fromReducer.Book) {
    this.bookStore.dispatch(fromActions.addRequest({ book }));
  }
}
