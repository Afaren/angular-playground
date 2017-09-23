import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {PirateDetailComponent} from './pirate-detail.component';
import {PirateService} from './pirate.service';
import {PirateComponent} from './pirate.component';

@NgModule({
  declarations: [
    AppComponent,
    PirateComponent,
    PirateDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [PirateService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
