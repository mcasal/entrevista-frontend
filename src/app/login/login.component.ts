import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  passRegex = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{4,}$';
  register: boolean;

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9·-]+.[a-z]{2,4}$')]],
    password: ['', [Validators.required, Validators.pattern(this.passRegex)]]
  })

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }

  isValidInput(name: string): boolean {
    const input: any = this.loginForm.get(name);
    return input.touched && input.invalid
  }

  onLogin() {
    this.router.navigate(['/home']);
  }

}
