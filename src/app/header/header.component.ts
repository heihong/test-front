import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

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
