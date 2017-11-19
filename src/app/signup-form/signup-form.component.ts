import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { CustomValidators } from './cannotContainSpace.Validator'


@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({


    // tslint:disable-next-line:max-line-length
    account: new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(3), CustomValidators.cannotContainSpace], CustomValidators.shouldBeUnique),
      password: new FormControl('', [Validators.required, Validators.minLength(3)])
    })
  });
  get username() {
    return this.form.get('account.username');
  }


  get password() {
    return this.form.get('account.password');
  }

  login() {
    console.log('shit');
    this.form.setErrors({ invalidLogin: true });
  }


}
