import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { ShopState } from "../store/model";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  constructor(private route: ActivatedRoute, private router: Router) {}
  booksPage() {
    this.router.navigate(["books"], { relativeTo: this.route });
  }

  cartPage() {
    this.router.navigate(["cart"], { relativeTo: this.route });
  }
}
