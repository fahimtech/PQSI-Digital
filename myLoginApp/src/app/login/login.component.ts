import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string;
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off-outline';
  public loadProgress: number = 0;
  loadInterval: any;


  constructor(private fb: FormBuilder, public loginService: LoginService, public route: Router) {
    this.initializeForm();
  }

  ionViewDidLeave() {
    if (this.loadInterval) {
      clearInterval(this.loadInterval);
    }
  }

  initializeForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]],
      password: ['', Validators.required]
    })
  }

  validateLogin() {
    if (this.loginForm.valid) {
      console.log("data ===>", this.loginForm.getRawValue());
      if (this.loginService.validateLogin(this.loginForm.getRawValue())) {
        /*success response */
        this.loadInterval = setInterval(() => {
          if (this.loadProgress < 1) {
            this.loadProgress += 0.1;
          } else {
            clearInterval(this.loadInterval);
            this.errorMessage = "";
            this.loadProgress = 0;
            this.route.navigateByUrl('home');
          }
        }, 100);
      } else {
        /* error response */
        this.errorMessage = "Invalid Credentials";
      }
      return
    }
  }

  hideShowPassword(): void {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off-outline' ? 'eye-outline' : 'eye-off-outline';
  }
}
