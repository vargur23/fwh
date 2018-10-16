import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FactionComponent } from '../app/faction/faction.component';
import { UnitComponent } from '../app/unit/unit.component';
import { UnitDetailsComponent } from '../app/unit-details/unit-details.component';


const routes: Routes = [
  { path: 'faction', component: FactionComponent },
  { path: 'faction/:id', component: UnitComponent },
  { path: 'faction/:id/:id', component: UnitDetailsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
