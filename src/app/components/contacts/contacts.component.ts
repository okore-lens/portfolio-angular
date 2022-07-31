import { Component, OnInit } from "@angular/core";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

@Component({
  selector: "app-contacts",
  templateUrl: "./contacts.component.html",
  styleUrls: ["./contacts.component.scss"],
})
export class ContactsComponent implements OnInit {
  name: string = "";
  email: string = "";
  message: string = "";

  constructor() {}

  ngOnInit(): void {}

  public submitHandler(e: Event) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_yyeki9b",
        "template_ioz6ifx",
        e.target as HTMLFormElement,
        "yySSC3OYij-nR0TpB"
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  // submitHandler() {
  //   console.log(this.name, this.email, this.message);
  //   this.name = "";
  //   this.email = "";
  //   this.message = "";
  // }
}
