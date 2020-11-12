import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { Book } from "src/app/store/model";

@Component({
  selector: "app-book-cart",
  templateUrl: "./book.component.html",
  styleUrls: ["./book.component.scss"],
})
export class BookCartComponent {
  @Input() book: Book;

  constructor(private router: Router) {}

  more(isbn: string) {
    this.router.navigate(["/details-book", isbn]);
  }
}
