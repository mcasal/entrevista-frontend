import { Component, OnInit } from '@angular/core';
import { Starship } from '../models/starship.model';
import { SwapiService } from '../swapi.service';

@Component({
  selector: 'app-starships-list',
  templateUrl: './starships-list.component.html',
  styleUrls: ['./starships-list.component.css']
})
export class StarshipsListComponent implements OnInit {

  starships: Starship[] = [];
  currentPage: number;
  numStarships: number;

  constructor(private swapiService: SwapiService) {
    this.currentPage = 1;
  }

  ngOnInit(): void {
    this.getAllStarships();
  }

  getAllStarships() {
    this.swapiService.getAllStarships()
      .then(response => {
        this.starships = response.results;
        this.numStarships = response.count;
      })
  }

  async onChangePage(page: boolean) {
    if (page) {
      this.currentPage++;
    } else {
      this.currentPage--;
    }
    const response = await this.swapiService.getAllStarships(this.currentPage);
    this.starships = response.results;
  }

}
