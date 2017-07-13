import { Component, Input } from '@angular/core'
import { Pirate } from './pirate';


@Component({
  selector: 'pirate-detail',
  templateUrl: './pirate-detail.component.html'
})


export class PirateDetailComponent {
  @Input() pirate: Pirate;
}