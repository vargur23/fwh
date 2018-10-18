import { Component, OnInit } from '@angular/core';

import * as globals from '../../globals';
import { JsonService } from '../../services';
import { Faction} from '../../poo';


@Component({
  selector: 'app-faction',
  templateUrl: './faction.component.html',
  styleUrls: ['./faction.component.css']
})
export class FactionComponent implements OnInit {

  factions: Faction[];
  constructor(private jsonService: JsonService) { }

  ngOnInit() {
    this.jsonService.getFactionArray().subscribe(factions => this.factions = factions);
  }
}
