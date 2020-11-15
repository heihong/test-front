import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Book, ShopState } from "src/app/store/interfacers";
import * as fromActions from "../../store/shop.action";

@Component({
  selector: "app-book",
  templateUrl: "./book.component.html",
  styleUrls: ["./book.component.scss"],
})
export class BookComponent {
  @Input() book: Book;
  @Input() index: number;

  constructor(private router: Router, private shopSate: Store<ShopState>) {}

  delete() {
    this.shopSate.dispatch(fromActions.deleteRequest({ index: this.index }));
  }
}
