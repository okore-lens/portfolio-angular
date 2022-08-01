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

  async submitHandler(e: Event) {
    e.preventDefault();

    await emailjs
      .sendForm(
        "service_yyeki9b",
        "template_ioz6ifx",
        e.target as HTMLFormElement,
        "yySSC3OYij-nR0TpB"
      )
      .then(
        (result: EmailJSResponseStatus) => {
          alert("Email sent successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );
    this.email = "";
    this.message = "";
    this.name = "";
  }
}
