import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FakeDataService } from '../fake-data.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  new_user: User;
  passRegex = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$';

  registerForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2), Validators.pattern('^[^0-9]+$')]],
    lastName: ['', [Validators.required, Validators.minLength(2), Validators.pattern('^[^0-9]+$')]],
    email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9·-]+.[a-z]{2,4}$')]],
    password: ['', [Validators.required, Validators.pattern(this.passRegex)]]
  });

  constructor(private fb: FormBuilder, private fakeData: FakeDataService, private router: Router) { }

  ngOnInit(): void {
  }

  isValidInput(name: string): boolean {
    const input: any = this.registerForm.get(name);
    return input.touched && input.invalid
  }

  onRegister() {
    this.new_user = new User(this.registerForm.value);
    this.fakeData.createUser(this.new_user);
    this.router.navigate(['/home']);
  }

}
