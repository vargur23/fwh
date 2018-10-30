import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialImportsModule } from './material_import_module';

import { AppComponent } from './app.component';
import { FactionComponent } from './faction/faction.component';

import { AppRoutingModule } from '../routing/app-routing.module';
import { UnitDetailsComponent } from './unit-details/unit-details.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { UnitListComponent } from './unit-list/unit-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListsComponent } from './lists/lists.component';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialImportsModule
  ],
  declarations: [
    AppComponent,
    FactionComponent,
    UnitDetailsComponent,
    UnitListComponent,
    ItemListComponent,
    ItemDetailsComponent,
    DashboardComponent,
    ListsComponent,
    ListComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
