import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { FormsModule } from "@angular/forms";
import { ConvertToSpaces } from "../shared/convert-to-spaces.pipe";
import { SharedModule } from "../shared/shared.module";
import { ProductRoutingModule } from "./product-routing.module";

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpaces
  ],
  imports: [CommonModule, FormsModule, SharedModule,
    ProductRoutingModule]
})
export class ProductModule {}
