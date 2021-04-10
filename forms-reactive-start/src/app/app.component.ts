import { Component, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  genders = ["male", "female"];
  signUpForm: FormGroup;
  forbiddenUserName = ["Chris", "Anna"];

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [
          Validators.required,
          this.forbiddenNames.bind(this),
        ]),
        email: new FormControl(
          null,
          [Validators.required, Validators.email],
          this.forbiddenEmails
        ),
      }),
      gender: new FormControl("male", Validators.required),
      hobbies: new FormArray([]),
    });

    // this.signUpForm.valueChanges.subscribe((value) => console.log(value));
    this.signUpForm.statusChanges.subscribe((status) => console.log(status));
    this.signUpForm.setValue({
      userData: {
        username: "Jeya",
        email: "Jeyavishnu22@yahoo.co,",
      },
      gender: "male",
      hobbies: [],
    });

    this.signUpForm.patchValue({
      userData: {
        username: "Chris",
      },
    });
  }

  onSubmit() {
    console.log(this.signUpForm);
  }

  onAddHobby() {
    (<FormArray>this.signUpForm.get("hobbies")).push(
      new FormControl(null, Validators.required)
    );
  }

  private getHobbyControl() {
    return (<FormArray>this.signUpForm.get("hobbies")).controls;
  }

  forbiddenNames(controls: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUserName.indexOf(controls.value) !== -1) {
      return { nameIsForbidden: true };
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "test@test.com") {
          resolve({ emailIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });

    return promise;
  }
}
