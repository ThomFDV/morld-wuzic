import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  hide = true;

  connexionForm: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) { }

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

    this.authService.isUserAuthenticated(this.connexionForm.value.username, this.connexionForm.value.password).subscribe(result => {
      this.router.navigateByUrl('/account');
    });
  }

  getErrorMessage() {
    return this.connexionForm.controls.username.hasError('required') ? 'You must enter a value' : '';
  }

}
