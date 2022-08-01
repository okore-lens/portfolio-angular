import { Component, Input, OnInit } from "@angular/core";
import { works, Works } from "src/assets/arrays/works";

@Component({
  selector: "app-works",
  templateUrl: "./works.component.html",
  styleUrls: ["./works.component.scss"],
})
export class WorksComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  works = [...works];
  count: number = 1;
  maxCount = works.length;
  width: number = 100;

  prevHandler() {
    this.count--;
    this.count < 1 ? (this.count = this.maxCount) : this.count;
  }
  nextHandler() {
    this.count++;
    this.count > this.maxCount ? (this.count = 1) : this.count;
  }
  widthHandler() {
    this.width = (this.count / this.maxCount) * 100;
    return this.width + "%";
  }
}
