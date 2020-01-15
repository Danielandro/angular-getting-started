import { Component, OnChanges, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "pm-star",
  templateUrl: "./star.component.html",
  styleUrls: ["./star.component.css"]
})
export class StarComponent implements OnChanges {
  starWidth: number = 75;
  @Input() rating: number = 4;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  // listens for changes to any input property
  ngOnChanges(): void {
    this.starWidth = this.rating * (75 / 5);
    console.log("Star rating changed");
  }

  onClick(): void {
    this.ratingClicked.emit("CHILD COMPONENT: This is onClick");
  }
}
