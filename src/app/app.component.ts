import { Component } from '@angular/core';

export class Pirate {
  id: number;
  name: string;
 }


const PIRATES:  Pirate[] = [
  { id: 1, 	name: 'Monkey D. Luffy' },
  { id: 2, 	name: 'Roronoa Zoro' },
  { id: 3, 	name: 'Nami' },
  { id: 4, 	name: 'Usopp'},
  { id: 5, 	name: 'Vinsmoke Sanji'},
  { id: 6, 	name: 'Tony Tony Chopper'},
  { id: 7, 	name: 'Nico Robin'},
  { id: 8, 	name: 'Franky'},
  { id: 9, 	name: 'Brook'}
]


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  pirates = PIRATES;
  title = 'Straw Hat Pirates';
  pirate: Pirate = {
    id: 1,
    name: 'Monkey D. Luffy'
  };
}
