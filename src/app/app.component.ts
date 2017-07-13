import { Component } from '@angular/core';

export class Pirate {
  id: number;
  name: string;
 }


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Straw Hat Pirates';
  pirate: Pirate = {
    id: 1,
    name: 'Monkey D. Luffy'
  };
}
