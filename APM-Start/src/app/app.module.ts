import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { ProductListComponent } from "./products/product-list.component";
import { StarComponent } from "./shared/star.component";
import { ConvertToSpaces } from "./shared/convert-to-spaces.pipe";
import { ProductDetailComponent } from "./products/product-detail.component";
import { RouterModule } from "@angular/router";
import { WelcomeComponent } from "./home/welcome.component";

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    StarComponent,
    ConvertToSpaces,
    ProductDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "welcome", component: WelcomeComponent },
      { path: "products", component: ProductListComponent },
      { path: "detail/:id", component: ProductDetailComponent },
      { path: "", redirectTo: "/welcome", pathMatch: "full" },
      { path: "**", component: WelcomeComponent }
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
