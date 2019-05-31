import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  hide = true;

  connexionForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.connexionForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.connexionForm.invalid) {
      return;
    }
    console.log(this.connexionForm.controls.username.value);
  }

  getErrorMessage() {
    return this.connexionForm.controls.username.hasError('required') ? 'You must enter a value' :
            '';
  }

}
