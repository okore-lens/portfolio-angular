import { Component, OnInit } from "@angular/core";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

@Component({
  selector: "app-contacts",
  templateUrl: "./contacts.component.html",
  styleUrls: ["./contacts.component.scss"],
})
export class ContactsComponent implements OnInit {
  // name: string = "";
  // email: string = "";
  // message: string = "";

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
          alert("Email sent successfully");
          let value = document.querySelector("input")?.value;
          console.log(value);
          value = "";
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
}
