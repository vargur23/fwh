import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { JsonService } from '../../services';
import { Unit, Faction } from '../../poo';
import * as globals from '../../globals';

@Component({
  selector: 'app-unit-list',
  templateUrl: './unit-list.component.html',
  styleUrls: ['./unit-list.component.css']
})
export class UnitListComponent implements OnInit {

  faction: Faction;
  units: Unit[];

  constructor( private route: ActivatedRoute,
    private jsonService: JsonService ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id_faction');
    this.getData(id);
  }

  getData(id: string) {
    this.jsonService.getFactionByID(id).subscribe(faction => this.faction = faction);
    this.jsonService.getUnitsByFaction(id).subscribe(units => this.units = units);
  }

}
