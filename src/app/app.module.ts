import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ScrollComponent } from './cards/scroll/scroll.component';
import { ProjectComponent } from './cards/project/project.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { WorksComponent } from './components/works/works.component';
import { SkillCardComponent } from './cards/skill-card/skill-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ScrollComponent,
    ProjectComponent,
    AboutComponent,
    SkillsComponent,
    WorksComponent,
    SkillCardComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
