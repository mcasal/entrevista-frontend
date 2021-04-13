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

  getAll() {
    return this.users;
  }

  createUser(user: User) {
    return this.users.push(user);
  }

  isAuth(i: number): boolean {
    return this.users[i].active;
  }
}
