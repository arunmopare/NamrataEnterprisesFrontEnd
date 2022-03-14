import { HttpClient } from "@angular/common/http";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-contact-us",
  templateUrl: "./contact-us.component.html",
  styleUrls: ["./contact-us.component.css"],
})
export class ContactUsComponent implements OnInit {
  registerDesktopForm: FormGroup;
  registerMobileForm: FormGroup;
  submitted = false;
  postdata = {};
  myflag = false;
  durationInSeconds = 5;
  url = `https://namrata-enterprises.herokuapp.com/send`;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$";

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private _router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.registerDesktopForm = this.formBuilder.group({
      firstname: [
        "",
        [Validators.required, Validators.pattern("^[a-zA-Z]+( [a-zA-Z_]+)*$")],
      ],
      lastname: [
        "",
        [Validators.required, Validators.pattern("^[a-zA-Z]+( [a-zA-Z_]+)*$")],
      ],
      emailid: [
        "",
        [Validators.required, Validators.pattern(this.emailPattern)],
      ],
      mobile: [
        "",
        [Validators.required, Validators.pattern("^[1-9]{1}[0-9]{9}")],
      ],
      msg: ["", [Validators.required]],
    });
    this.registerMobileForm = this.formBuilder.group({
      firstname: [
        "",
        [Validators.required, Validators.pattern("^[a-zA-Z]+( [a-zA-Z_]+)*$")],
      ],
      lastname: [
        "",
        [Validators.required, Validators.pattern("^[a-zA-Z]+( [a-zA-Z_]+)*$")],
      ],
      emailid: [
        "",
        [Validators.required, Validators.pattern(this.emailPattern)],
      ],
      mobile: [
        "",
        [Validators.required, Validators.pattern("^[1-9]{1}[0-9]{9}")],
      ],
      msg: ["", [Validators.required]],
    });
  }
  registerUser() {
    if (this.postdata != undefined) {
      this.myflag = true;
    }
    console.log(this.postdata);
  }
  get fvalmobile() {
    return this.registerMobileForm.controls;
  }
  get fvaldesk() {
    return this.registerDesktopForm.controls;
  }

  signupDesk() {
    this.submitted = true;
    if (this.registerDesktopForm.invalid) {
      console.log("Error");
      console.log(this.registerDesktopForm);

      return;
    }
    console.log("Success");
    this.http.post(this.url, this.registerDesktopForm.value).subscribe(
      (responce: any) => {
        this.openSuccessSnackBar();
        this.registerDesktopForm.reset();
        this.submitted = false;
      },
      (error: any) => {
        console.log(error);
        this.openErrorSnackBar();
      }
    );
  }

  signupMobile() {
    this.submitted = true;
    if (this.registerMobileForm.invalid) {
      console.log("Something Went Wrong");
      console.log(this.registerMobileForm);
      return;
    }
    this.http.post(this.url, this.registerMobileForm.value).subscribe(
      (responce: any) => {
        this.openSuccessSnackBar();
        this.registerMobileForm.reset();
        // this.reloadComponent();
        this.submitted = false;
      },
      (error: any) => {
        this.openErrorSnackBar();
      }
    );
  }

  openSuccessSnackBar() {
    this._snackBar.openFromComponent(SuccessMessageComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

  openErrorSnackBar() {
    this._snackBar.openFromComponent(ErrorMessageComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
}

@Component({
  selector: "snack-bar-component-example-snack",
  template: `<span class="example-pizza-party text-center">
    <h2>
      <span style="color:white"
        >Response Sent<i
          style="margin-left: 10px; color:green"
          class="fa fa-check da-2x"
          aria-hidden="true"
        ></i>
      </span>
    </h2>
  </span>`,
  styles: [
    `
      .example-pizza-party {
        color: green;
        margin-left: 12px;
      }
    `,
  ],
})
export class SuccessMessageComponent {}

@Component({
  selector: "snack-bar-component-example-snack",
  template: `<span class="example-pizza-party text-center">
    <h2>
      <span style="color:white"
        >Something Went Wrong.<i
          style="margin-left: 10px; color:red;"
          class="fa fa-times fa-2x"
          aria-hidden="true"
        ></i>
      </span>
    </h2>
  </span>`,
  styles: [
    `
      .example-pizza-party {
        color: red;
        margin-left: 12px;
      }
    `,
  ],
})
export class ErrorMessageComponent {}
