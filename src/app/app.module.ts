import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FactionComponent } from './faction/faction.component';

import { AppRoutingModule } from '../routing/app-routing.module';
import { UnitComponent } from './unit/unit.component';
import { UnitDetailsComponent } from './unit-details/unit-details.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    FactionComponent,
    UnitComponent,
    UnitDetailsComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
