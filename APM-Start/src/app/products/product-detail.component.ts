import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { IProduct } from "./product";

@Component({
  selector: "pm-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"]
})
export class ProductDetailComponent implements OnInit {
  product: IProduct; // product details being displayed
  pageTitle: string = "Product Detail";

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // + converts string to number
    let id = +this.route.snapshot.paramMap.get("id");
    this.pageTitle += `: ${id}`;
    this.product = {
      productId: id,
      productName: "Hammer",
      productCode: "TBX-0048",
      releaseDate: "May 21, 2019",
      description: "Curved claw steel hammer",
      price: 8.9,
      starRating: 4.8,
      imageUrl: "assets/images/hammer.png"
    };
  }

  onBack(): void {
    this.router.navigate(["/products"]);
  }
}
