import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Starship } from './models/starship.model';

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

  getAllStarships() {
    return this.http.get<Starship[]>(`${this.baseUrl}/${this.endpoint}`)
  }
}
