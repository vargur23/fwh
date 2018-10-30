import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from '../app/dashboard/dashboard.component';
import { FactionComponent } from '../app/faction/faction.component';
import { UnitListComponent } from '../app/unit-list/unit-list.component';
import { UnitDetailsComponent } from '../app/unit-details/unit-details.component';
import { ItemDetailsComponent } from '../app/item-details/item-details.component';
import { ListsComponent } from '../app/lists/lists.component';
import { ListComponent } from '../app/list/list.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'data', component: FactionComponent },
  { path: 'data/:id_faction', component: UnitListComponent },
  { path: 'data/:id_faction/:id_unit', component: UnitDetailsComponent },
  { path: 'data/:id_faction/:id_unit/:id_item', component: ItemDetailsComponent },
  { path: 'lists', component: ListsComponent },
  { path: 'lists/:id_list', component: ListComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
