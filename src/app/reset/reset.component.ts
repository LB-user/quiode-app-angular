import { getHtmlTagDefinition } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {
  form: any = {
    resetToken: null,
    password: null,
    confirmPassword: null,
  };
  isSuccessful = false;
  isFormFailed = false;
  errorMessage = '';
  successMessage = '';

  constructor(private authService: AuthService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.form.resetToken = params['token'];
      }
    );
  }
  onSubmit(): void {
    const { resetToken, password, confirmPassword } = this.form;
    console.log(resetToken + password + confirmPassword);
    this.authService.resetPassword(resetToken, password, confirmPassword).subscribe({
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
