import { Component, OnInit } from '@angular/core';
import { FakeDataService } from '../fake-data.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  user: User;

  constructor(private fakeData: FakeDataService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.user = this.fakeData.getUser();
  }

}
