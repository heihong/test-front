import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import * as fromSelectors from "../store/shop.selectors";
import { ShopState } from "../store/interfacers";

@Component({
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.scss"],
})
export class BooksComponent {
  books$ = this.shopState.select(fromSelectors.selectBooks);
  loading$ = this.shopState.select(fromSelectors.selectLoading);
  searchText: string;
  constructor(private shopState: Store<ShopState>) {}
}
