import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {PirateDetailComponent} from './pirate-detail.component';
import {PirateService} from './pirate.service';
import {PirateComponent} from './pirate.component';
import {DashboardComponent} from './dashboard.component';
import {AppRoutingModule} from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PirateComponent,
    DashboardComponent,
    PirateDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [PirateService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
