import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { FakeDataService } from './fake-data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  i: number = 1;

  constructor(private auth: FakeDataService) { }

  canActivate(): boolean {
    console.log('Guard');
    return this.auth.isAuth(this.i);
  }

}
