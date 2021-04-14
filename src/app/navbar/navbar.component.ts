import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FakeDataService } from '../fake-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private fakeData: FakeDataService, private router: Router) { }

  ngOnInit(): void {
  }

  logoutUser() {
    this.fakeData.logout();
    this.router.navigate(['/landing']);
  }

}
