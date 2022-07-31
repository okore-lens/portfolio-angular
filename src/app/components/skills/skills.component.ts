import { Component, Input, OnInit } from "@angular/core";

import { skills } from "src/assets/arrays/skills";

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.scss"],
})
export class SkillsComponent implements OnInit {
  @Input() imageLink: string = "https://unsplash.com/photos/jw3GOzxiSkw";
  skills = [...skills];

  constructor() {}

  ngOnInit(): void {}
}
