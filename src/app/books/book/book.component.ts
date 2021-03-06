import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { Book } from "src/app/store/interfacers";

@Component({
  selector: "app-book",
  templateUrl: "./book.component.html",
  styleUrls: ["./book.component.scss"],
})
export class BookComponent {
  @Input() book: Book;

  constructor(private router: Router) {}

  more(isbn: string) {
    this.router.navigate(["/details-book", isbn]);
  }
}
