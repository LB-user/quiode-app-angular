import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  form: any = {
    username: null
  };
  isSuccessful = false;
  isFormFailed = false;
  errorMessage = '';
  successMessage = '';
  constructor(private authService: AuthService) { }
  ngOnInit(): void {
  }
  onSubmit(): void {
    const { username } = this.form;
    this.authService.forgotPassword(username).subscribe({
      next: data => {
        this.successMessage = data.message;
        this.isSuccessful = true;
        this.isFormFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isFormFailed = true;
      }
    });
  }
}
