import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree
} from "@angular/router";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class ProductDetailGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // use info from route user is attempting to reach to get id
    let id = +next.url[1].path;

    // if id is NaN or is negative, alert user and redirect to products page
    if (isNaN(id) || id < 0) {
      alert("Invalid product ID");
      this.router.navigate(["/products"]);
      return false;
    } else {
      return true;
    }
  }
}
