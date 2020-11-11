import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { MatCardModule, MatButtonModule } from "@angular/material";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { BookEffects } from "../store/shop.effect";
import { bookReducer } from "../store/shop.reducer";
import { BookComponent } from "./book/book.component";
import { BooksComponent } from "./books.component";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    RouterModule.forChild([
      { path: "", pathMatch: "full", component: BooksComponent },
    ]),
    MatCardModule,
    StoreModule.forFeature("bookState", bookReducer),
    EffectsModule.forFeature([BookEffects]),
  ],
  declarations: [BooksComponent, BookComponent],
})
export class BooksModule {}
