import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { RouterModule, Routes } from "@angular/router";
import { BooksModule } from "./books/books.module";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools/";
import { BooksResolver } from "./resolver/books.resolver";
import { DetailsBookModule } from "./books/details-book/details-book.module";

export const routes: Routes = [
  {
    path: "books",
    loadChildren: () =>
      import("./books/books.module").then((m) => m.BooksModule),
    resolve: {
      data: BooksResolver,
    },
  },
  {
    path: "details-book/:isbn",
    loadChildren: () =>
      import("./books/details-book/details-book.module").then(
        (m) => m.DetailsBookModule
      ),
    resolve: {
      data: BooksResolver,
    },
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
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BooksModule,
    DetailsBookModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
