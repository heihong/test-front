import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import * as fromReducer from "../store/shop.reducer";
import * as fromSelectors from "../store/shop.selectors";

@Component({
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"],
})
export class CartComponent implements OnInit {
  // cart = this.bookStore.select(fromSelectors.selectCart);

  constructor(private bookStore: Store<fromReducer.BookState>) {}

  ngOnInit() {}
}
