import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.scss"],
})
export class LandingPageComponent implements OnInit {
  imageLink: string =
    "https://unsplash.com/photos/Im7lZjxeLhg?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink";

  constructor() {}

  ngOnInit(): void {}
}
