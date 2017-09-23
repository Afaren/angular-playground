import {Component, OnInit} from '@angular/core';
import {Pirate} from './pirate';
import {PirateService} from './pirate.service';

@Component({
  selector: 'app-pirate',
  templateUrl: './pirate.component.html',
  styleUrls: ['./pirate.component.css']
})

export class PirateComponent implements OnInit {
  pirates: Pirate[];
  title = 'Straw Hat Pirates';
  selectedPirate: Pirate;

  constructor(private pirateService: PirateService) {
  }

  ngOnInit(): void {
    this.getPirates();
  }

  getPirates(): void {
    this.pirateService.getPirates().then(pirates => this.pirates = pirates);
  }

  onSelect(pirate: Pirate): void {
    this.selectedPirate = pirate;
  }
}
