import { Component, Input, OnInit } from '@angular/core';
import { Skills } from 'src/assets/arrays/skills';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.scss'],
})
export class SkillCardComponent implements OnInit {
  @Input() skillItem!: Skills;
  dashArray: any;

  constructor() {}

  ngOnInit(): void {
    console.log(this.skillItem);
    this.dashArray = `${this.skillItem.percentage},100`;
  }
}
