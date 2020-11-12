import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";

import { Book, ShopState } from "src/app/store/model";
import * as fromActions from "../../store/shop.action";
import * as fromSelectors from "../../store/shop.selectors";

@Component({
  templateUrl: "./details-book.component.html",
  styleUrls: ["./details-book.component.scss"],
})
export class DetailsBookComponent {
  isbn = this.route.snapshot.paramMap.get("isbn");
  book$ = this.shopSate.select(fromSelectors.selectBook, { isbn: this.isbn });
  loading$ = this.shopSate.select(fromSelectors.selectLoading);
  constructor(
    private route: ActivatedRoute,
    private shopSate: Store<ShopState>
  ) {}

  addRequest(book: Book) {
    this.shopSate.dispatch(fromActions.addRequest({ book }));
  }
}
