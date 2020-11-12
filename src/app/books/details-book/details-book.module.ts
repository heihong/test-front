import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { ShopEffects } from "../../store/shop.effect";
import { shopReducer } from "../../store/shop.reducer";
import { DetailsBookComponent } from "./details-book.component";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    RouterModule.forChild([
      { path: "", pathMatch: "full", component: DetailsBookComponent },
    ]),
    StoreModule.forFeature("shopState", shopReducer),
    EffectsModule.forFeature([ShopEffects]),
  ],
  declarations: [DetailsBookComponent],
})
export class DetailsBookModule {}
