import { Component, Input, OnInit } from "@angular/core";
import { Works, works } from "src/assets/arrays/works";

@Component({
  selector: "app-work-card",
  templateUrl: "./work-card.component.html",
  styleUrls: ["./work-card.component.scss"],
})
export class WorkCardComponent implements OnInit {
  @Input() workItem!: Works;
  count: number = 1;
  maxCount: number = works.length;

  constructor() {}

  ngOnInit(): void {
    // console.log(this.workItem.text);
  }
}
