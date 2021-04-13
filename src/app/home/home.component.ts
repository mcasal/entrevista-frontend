import { Component, OnInit } from '@angular/core';
import { FakeDataService } from '../fake-data.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //users: User[];

  constructor(private fakeData: FakeDataService) { }

  ngOnInit(): void {

  }

}
