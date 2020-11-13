import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools/";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule, MatToolbarModule } from "@angular/material";
import { HeaderComponent } from "./header/header.component";
import { LogGuard } from "./guards/log.guard";

export const routes: Routes = [
  {
    path: "books",
    loadChildren: () =>
      import("./books/books.module").then((m) => m.BooksModule),
    canActivate: [LogGuard],
  },
  {
    path: "cart",
    loadChildren: () => import("./cart/cart.module").then((m) => m.CartModule),
  },
  {
    path: "details-book/:isbn",
    loadChildren: () =>
      import("./books/details-book/details-book.module").then(
        (m) => m.DetailsBookModule
      ),
    canActivate: [LogGuard],
  },
  {
    path: "",
    redirectTo: "books",
    pathMatch: "full",
  },
  {
    path: "**",
    redirectTo: "books",
  },
];

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
