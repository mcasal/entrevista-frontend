import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class FakeDataService {

  users: User[];

  constructor() {
    this.users = [
      {
        username: 'Carlos Rodriguez',
        email: 'poi@lj.es',
        password: '123abc',
        active: true
      },
      {
        username: 'María Sánchez',
        email: 'sjdl@lkj.ok',
        password: '789poi',
        active: true
      },
      {
        username: 'José Gómez',
        email: 'bmn@hk.lp',
        password: '456ñlk',
        active: true
      }
    ];
  }

  createUser(user: User) {
    //this.users.push(user);
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  getUser() {
    let user = JSON.parse(localStorage.getItem('currentUser'));
    return user
  }

  isAuth(): boolean {
    let user = JSON.parse(localStorage.getItem('currentUser'));
    if (user.active) {
      return true
    } else {
      return false
    }
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}