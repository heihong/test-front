import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Book, ShopState } from "src/app/store/interfacers";
import * as fromActions from "../../store/shop.action";

@Component({
  selector: "app-book-cart",
  templateUrl: "./book-cart.component.html",
  styleUrls: ["./book-cart.component.scss"],
})
export class BookCartComponent {
  @Input() book: Book;

  constructor(private router: Router, private shopSate: Store<ShopState>) {}

  more(isbn: string) {
    this.router.navigate(["/details-book", isbn]);
  }

  delete(book) {
    this.shopSate.dispatch(fromActions.deleteRequest({ book }));
  }
}
