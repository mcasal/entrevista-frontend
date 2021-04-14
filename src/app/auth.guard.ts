import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { FakeDataService } from './fake-data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: FakeDataService) { }

  canActivate(): boolean {
    return this.auth.isAuth();
  }
}
