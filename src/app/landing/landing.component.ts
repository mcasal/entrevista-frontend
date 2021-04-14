import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FakeDataService } from '../fake-data.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  new_user: User;

  registerForm: FormGroup = this.fb.group({
    name: ['Lasd', [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-Z]+$')]],
    lastName: ['Kasd', [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-Z]+$')]],
    email: ['sda@ssdf.es', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9·-]+.[a-z]{2,4}$')]],
    password: ['123abc', [Validators.required, Validators.minLength(3)]]
  })

  constructor(private fb: FormBuilder, private fakeData: FakeDataService, private router: Router) { }

  ngOnInit(): void {
  }

  isValidInput(name: string): boolean {
    const input: any = this.registerForm.get(name);
    return input.touched && input.invalid
  }

  onSubmit() {
    this.new_user = new User(this.registerForm.value);
    this.fakeData.createUser(this.new_user);
    //console.log(this.new_user);
    this.router.navigate(['/home']);
  }
}
