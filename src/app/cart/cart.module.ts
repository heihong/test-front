import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import {
  MatButtonModule,
  MatCardModule,
  MatProgressSpinnerModule,
} from "@angular/material";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { ShopEffects } from "../store/shop.effect";
import { shopReducer } from "../store/shop.reducer";
import { BookComponent } from "./book/book.component";
import { CartComponent } from "./cart.component";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    RouterModule.forChild([
      { path: "", pathMatch: "full", component: CartComponent },
    ]),
    StoreModule.forFeature("shopState", shopReducer),
    EffectsModule.forFeature([ShopEffects]),
  ],
  declarations: [CartComponent, BookComponent],
})
export class CartModule {}
