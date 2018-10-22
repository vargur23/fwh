import { Component } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

import { Unit, List, Storage } from '../poo';
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
  }

  goBack(): void {
    this.location.back();
  }
}
