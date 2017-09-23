import {Component, OnInit} from '@angular/core';
import {Pirate} from './pirate';
import {PirateService} from './service/pirate.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pirate',
  templateUrl: './pirate.component.html',
  styleUrls: ['./pirate.component.css']
})

export class PirateComponent implements OnInit {
  pirates: Pirate[];
  title = 'Straw Hat Pirates';
  selectedPirate: Pirate;

  constructor(private pirateService: PirateService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getPirates();
  }

  onSelect(pirate: Pirate): void {
    this.selectedPirate = pirate;
  }

  getPirates(): void {
    this.pirateService.getPirates().then(pirates => this.pirates = pirates);
  }

  gotoDetail() {
    this.router.navigate(['/pirates', this.selectedPirate.id]);
  }
}
