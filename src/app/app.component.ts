import { Component } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

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
  constructor(location: Location){
    this.location=location;
  }
  goBack(): void {
    this.location.back();
  }
}
