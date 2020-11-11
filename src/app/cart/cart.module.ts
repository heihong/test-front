import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { BookEffects } from "../store/shop.effect";
import { bookReducer } from "../store/shop.reducer";
import { CartComponent } from "./cart.component";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: "", pathMatch: "full", component: CartComponent },
    ]),
    StoreModule.forFeature("bookState", bookReducer),
    EffectsModule.forFeature([BookEffects]),
  ],
  declarations: [CartComponent],
})
export class CartModule {}
