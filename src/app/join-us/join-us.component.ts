import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PostFormsService } from '../services/post-forms.service';

@Component({
  selector: 'app-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.css']
})
export class JoinUsComponent implements OnInit {

  joinuform: FormGroup;
  submitted = false;
  postdata = {};
  myflag = false;
  durationInSeconds = 5;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';

  constructor(
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private _joinservice: PostFormsService
  ) { }

  ngOnInit(): void {
    this.joinuform = this.formBuilder.group({
      vendor_name: [
        '',
        [Validators.required, Validators.pattern('^[a-zA-Z]+( [a-zA-Z_]+)*$')],
      ],
      vendor_email_address: [
        '',
        [Validators.required, Validators.pattern(this.emailPattern)],
      ],
      vendor_shop_name: ['', [Validators.required]],
      vendor_mobile_number: [
        '',
        [Validators.required, Validators.pattern('^[1-9]{1}[0-9]{9}')],
      ],
      vendor_shop_address: ['', [Validators.required]],
      privacycb: ['', [Validators.required]],
      isresponcecb: ['', [Validators.required]],
    });
  }
  checkForm() {
    if (this.postdata !== undefined) {
      this.myflag = true;
    }
    console.log(this.postdata);
  }
  get fvalmobile() {
    return this.joinuform.controls;
  }
  submitForm() {
    this.submitted = true;
    if (this.joinuform.invalid) {
      console.log('Error');
      console.log(this.joinuform);
      return;
    }
    console.log(this.joinuform.value);
    this._joinservice.joinUser(this.joinuform.value).subscribe(
      (responce: any) => {
        // this.openSuccessSnackBar();
        this.openSnackBar('Form Submitted Successfully', 'OK');
        this.joinuform.reset();
        this.submitted = false;
      },
      (error: any) => {
        console.log(error);
        this.openSnackBar('ERROR !, ' + error.error.error, 'OK');
        // this.openErrorSnackBar();
      }
    );
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
      verticalPosition: 'top',
    });
  }

  openSuccessSnackBar() {
    this._snackBar.openFromComponent(SuccessMessageComponent, {
      duration: this.durationInSeconds * 1000,
      verticalPosition: 'top',
    });
  }

  openErrorSnackBar() {
    this._snackBar.openFromComponent(ErrorMessageComponent, {
      duration: this.durationInSeconds * 1000,
      verticalPosition: 'top',
    });
  }

}


@Component({
  selector: 'snack-bar-component-example-snack',
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
export class SuccessMessageComponent { }

@Component({
  selector: 'snack-bar-component-example-snack',
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
export class ErrorMessageComponent { }
