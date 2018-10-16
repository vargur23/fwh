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
    this.getFactions();
  }

  getFactions(): void {
   this.jsonService.getJSONArray<Faction>(globals.factions_json_path).subscribe(factions => this.factions = factions);
  }

}
