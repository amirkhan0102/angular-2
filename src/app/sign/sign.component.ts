import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginValidators } from './login.validators';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit {
  constructor(private authService: AuthService) {

  }

  form = new FormGroup({

    login: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(12),
      LoginValidators.noSpace,
    ], LoginValidators.isTaken),
    fax: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      LoginValidators.noSpace,
    ]),
    parol: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(17),
    ], LoginValidators.isTaken),



  })

  sigIn() {
    let isValid = this.authService.sigIn(this.form.value);
    if (!isValid) {
      this.form.setErrors({
        invalaidLogin: true

      })
    }
  }

  get login() {
    return this.form.get('login')
  }

  get fax() {
    return this.form.get('fax');
  }

  get parol() {
    return this.form.get('parol');
  }



  ngOnInit(): void {

  }

}
