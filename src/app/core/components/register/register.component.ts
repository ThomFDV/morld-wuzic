import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  hide = true;
  registerForm: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      lastname: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      firstname: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      alert("Un problème est survenu lors de l'enregistrement")
      return;
    }

    this.authService.register(this.registerForm.value).subscribe(result => {
      alert("Bien enregisté ! Veuillez maintenant vous connecter.");
      this.router.navigateByUrl('/login');
    });
  }

  getErrorMessage() {
    return this.registerForm.controls.username.hasError('required') ? 'You must enter a value' :
        this.registerForm.controls.email.hasError('email') ? 'Not a valid email' :
            'problem';
  }

}
