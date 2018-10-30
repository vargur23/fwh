import { Component } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

import { List } from '../poo';
import { StorageService } from 'src/services';

@Component({
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  location: Location;

  title = 'Fallout Wasteland warfare list builder';
  heroImg = 'src/assets/img/vb_beer.jpg';
  list: List;
  constructor(location: Location, storageService: StorageService) {
    this.location = location;
    this.list = storageService.getActiveList();
    this.list.cost = storageService.getListCost(this.list);
  }

  goBack(): void {
    this.location.back();
  }
}
