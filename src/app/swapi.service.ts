import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  baseUrl: string;
  endpoint: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://swapi.dev/api';
    this.endpoint = 'starships';
  }

  getAllStarships(page = 1): Promise<any> {
    return this.http.get<any>(`${this.baseUrl}/${this.endpoint}/?page=${page}`).toPromise();
  }
}
