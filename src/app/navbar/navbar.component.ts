import { Component, OnInit } from '@angular/core';
import { FakeDataService } from '../fake-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private fakeData: FakeDataService) { }

  ngOnInit(): void {
  }

  logoutUser() {
    this.fakeData.logout();
  }

}
