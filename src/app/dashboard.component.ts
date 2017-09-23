import {Component, OnInit} from '@angular/core';
import {PirateService} from './pirate.service';
import {Pirate} from './pirate';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  pirates: Pirate[];

  constructor(private pirateService: PirateService) {
  }

  ngOnInit(): void {
    this.pirateService.getPirates()
      .then(pirates => this.pirates = pirates.slice(1, 5));
  }
}
