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

  constructor(private swapiService: SwapiService) { }

  ngOnInit(): void {
    this.getAllStarships();
  }

  getAllStarships() {
    this.swapiService.getAllStarships()
      .subscribe((res: any) => {
        this.starships = res.results;
      }, error => {
        console.log(error);
      });
  }

}
