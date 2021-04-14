import { Component, OnInit } from '@angular/core';
import { FakeDataService } from '../fake-data.service';
import { User } from '../models/user.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: User;

  constructor(private fakeData: FakeDataService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.user = this.fakeData.getUser();
    console.log(this.user);
  }
}
