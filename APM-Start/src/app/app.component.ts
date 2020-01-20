import { Component } from "@angular/core";

@Component({
  selector: "pm-root",
  template: `
    <!-- Navigation menu -->
    <nav class="navbar navbar-expand navabr-light bg-light">
      <a class="navbar-brand">{{ pageTitle }}</a>
      <ul class="nav nav-pills">
        <li><a class="nav-link"[routerLink]="['/welcome']">Home</a></li>
        <li><a class="nav-link"[routerLink]="['/products']">Product List</a></li>        
      </ul>
    </nav>
    <div class="container">
      <!-- The component assoc. with the ActivatedRoute renders here -->
      <router-outlet></router-outlet> 
    </div>
  `
})
export class AppComponent {
  pageTitle: string = "Acme Product manager";
}
