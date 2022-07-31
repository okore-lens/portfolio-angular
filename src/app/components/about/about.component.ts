import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent implements OnInit {
  @Input() imageLink: string = "https://unsplash.com/photos/_kdTyfnUFAc";

  constructor() {}

  ngOnInit(): void {}
}
