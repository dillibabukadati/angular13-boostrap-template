import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  dataForm: FormGroup;
  isSubmitted = false;
  successMsg = '';
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    @Inject(LOCAL_STORAGE) private storageService: StorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.dataForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  onRegister() {
    this.isSubmitted = true;
    console.log(this.dataForm.value)
    if (this.dataForm.invalid) {
      return;
    }
    this.authService.register(this.dataForm.value).subscribe(
      (res: any) => {
        this.successMsg = res.message;
        localStorage.setItem('loggedInUser', JSON.stringify(res.user));
        // this.alertService.success(res.message);
        setTimeout(() => this.router.navigate(['/']), 1000);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
