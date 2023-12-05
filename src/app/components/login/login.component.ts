import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit():void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      // Send a POST request to your login API
      this.http.post('http://127.0.0.1:4200/api/login', { email, password }, { withCredentials: true }).subscribe(
        (res: any) => {
          // Successful login response
          // You can handle the response here, e.g., store user data, navigate to another page, etc.
          const token = res.token;
          this.router.navigate(['/']);
          localStorage.setItem('token', token);
        },
        (error) => {
          // Error handling
          console.error('Login failed:', error);
          // You can display an error message to the user
        }
      );
    }
  }
}
