import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import * as fromReducer from "../../store/shop.reducer";

@Component({
  selector: "app-book",
  templateUrl: "./book.component.html",
  styleUrls: ["./book.component.scss"],
})
export class BookComponent {
  @Input() book: fromReducer.Book;

  constructor(private router: Router) {}

  more(isbn: string) {
    this.router.navigate(["/details-book", isbn]);
  }
}
