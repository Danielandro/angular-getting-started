import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ProductDetailGuard } from "./product-detail/product-detail.guard";
import { ConvertToSpaces } from "../shared/convert-to-spaces.pipe";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [ProductListComponent, ProductDetailComponent, ConvertToSpaces],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: "products", component: ProductListComponent },
      {
        path: "products/:id",
        component: ProductDetailComponent,
        canActivate: [ProductDetailGuard]
      }
    ]),
    SharedModule
  ]
})
export class ProductModule {}
