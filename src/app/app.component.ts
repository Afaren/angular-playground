import {Component, OnInit} from '@angular/core';
import {Pirate} from './pirate';
import {PirateService} from './pirate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  pirates: Pirate[];
  title = 'Straw Hat Pirates';
  selectedPirate: Pirate;

  constructor(private pirateService: PirateService) {
  }

  ngOnInit(): void {
    this.getPirates();
  }

  getPirates(): void {
    this.pirateService.getPiratesSlowly().then(pirates => this.pirates = pirates);
  }

  onSelect(pirate: Pirate): void {
    this.selectedPirate = pirate;
  }
}
