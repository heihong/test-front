import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {
  MatCardModule,
  MatButtonModule,
  MatInputModule,
} from "@angular/material";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { BookEffects } from "../store/shop.effect";
import { bookReducer } from "../store/shop.reducer";
import { BookComponent } from "./book/book.component";
import { BooksComponent } from "./books.component";
import { FilterPipe } from "./filter.pipe";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    RouterModule.forChild([
      { path: "", pathMatch: "full", component: BooksComponent },
    ]),
    StoreModule.forFeature("bookState", bookReducer),
    EffectsModule.forFeature([BookEffects]),
  ],
  declarations: [BooksComponent, BookComponent, FilterPipe],
})
export class BooksModule {}
