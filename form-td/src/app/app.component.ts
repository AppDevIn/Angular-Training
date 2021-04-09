import {
  Component,
  HostListener,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from "@angular/core";
import { NgForm, NgModel } from "@angular/forms";
import { getAngularClassTransformerFactory } from "@angular/compiler-cli/src/transformers/r3_transform";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  @ViewChild("f") form: NgForm;

  answer = "";
  genders = ["male", "female"];
  user = {
    username: "",
    email: "",
    secret: "",
    answer: "",
    gender: "",
  };

  suggestUserName() {
    // this.form.setValue({
    //   userData: {
    //     username: "suggestedName",
    //     email: this.form.value["userData"]["email"],
    //   },
    //   secret: "pet",
    //   questionAnswer: "",
    //   gender: "male",
    // });
    this.form.form.patchValue({
      userData: {
        username: "SuperUser",
      },
    });
  }

  onSubmit() {
    this.user.username = this.form.value.userData.username;
    this.user.email = this.form.value.userData.email;
    this.user.secret = this.form.value.secret;
    this.user.answer = this.form.value.questionAnswer;
    this.user.gender = this.form.value.gender;

    this.form.resetForm();
  }
}
