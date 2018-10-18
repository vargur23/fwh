import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FactionComponent } from '../app/faction/faction.component';
import { UnitListComponent } from '../app/unit-list/unit-list.component';
import { UnitDetailsComponent } from '../app/unit-details/unit-details.component';


const routes: Routes = [
  { path: 'data', component: FactionComponent },
  { path: 'data/:id_faction', component: UnitListComponent },
  { path: 'data/:id_faction/:id_unit', component: UnitDetailsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
