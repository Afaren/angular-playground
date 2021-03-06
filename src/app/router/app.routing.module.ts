import {RouterModule} from '@angular/router';
import {PirateComponent} from '../pirate/pirate.component';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {PirateDetailComponent} from '../pirate-detail/pirate-detail.component';
import {NgModule} from '@angular/core';

const routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'pirates',
    component: PirateComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'pirates/:id',
    component: PirateDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
