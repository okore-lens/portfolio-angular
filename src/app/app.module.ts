import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { ScrollComponent } from "./cards/scroll/scroll.component";
import { AboutComponent } from "./components/about/about.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { WorksComponent } from "./components/works/works.component";
import { SkillCardComponent } from "./cards/skill-card/skill-card.component";
import { FooterComponent } from "./components/footer/footer.component";
import { WorkCardComponent } from "./cards/work-card/work-card.component";
import { LandingPageComponent } from "./components/landing-page/landing-page.component";
import { ContactsComponent } from "./components/contacts/contacts.component";
import { FormsModule } from "@angular/forms";
import { InfoComponent } from "./cards/info/info.component";

@NgModule({
  declarations: [
    AppComponent,
    ScrollComponent,
    AboutComponent,
    SkillsComponent,
    WorksComponent,
    SkillCardComponent,
    FooterComponent,
    WorkCardComponent,
    LandingPageComponent,
    ContactsComponent,
    InfoComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
