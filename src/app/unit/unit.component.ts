import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


import { JsonService } from '../../services';
import { Unit, Faction } from '../../poo';
import * as globals from '../../globals';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {

  units: Unit[];
  faction: Faction;

  constructor( private route: ActivatedRoute,
    private jsonService: JsonService ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getData(id);
  }

  getData(id: string) {
    this.getFaction(id);
    this.getUnits();
  }

  getFaction(id: string): void {
    this.jsonService.getJSONObjectbyID<Faction>(globals.factions_json_path,  id).subscribe(faction => this.faction = faction);
  }

  getUnits(): void {
    let path;
    switch (this.faction.id) {
      case 'super_mutants': {
        path = globals.sm_units_json_path;
        break;
      }
      case 'bos': {
        path = globals.bos_units_json_path;
        break;
      }
      case 'surviver': {
        path = globals.surviver_units_json_path;
        break;
      }
      default: {
        path = globals.sm_units_json_path;
        break;
      }
    }
    this.jsonService.getJSONArray<Unit>(path).subscribe(units => this.units = units);
  }

}
