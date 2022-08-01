import { AfterViewInit, Component, OnInit } from "@angular/core";
import { works } from "src/assets/arrays/works";

@Component({
  selector: "app-works",
  templateUrl: "./works.component.html",
  styleUrls: ["./works.component.scss"],
})
export class WorksComponent implements OnInit, AfterViewInit {
  works = [...works];
  count: number = 1;
  maxCount = works.length;
  width: number = 100;

  constructor() {}

  ngOnInit(): void {}

  prevHandler() {
    this.count--;
    this.count < 1 ? (this.count = this.maxCount) : this.count;
  }
  ngAfterViewInit() {
    setInterval(() => {
      this.nextHandler();
    }, 3000);
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
