import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { FactionService } from 'src/app/faction/service/faction.service';
import { UnitService } from './service/unit.service';
import { Faction, Unit } from '../../poo';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {

  units: Unit[];
  faction: Faction;

  constructor(
    private unitService: UnitService,
    private route: ActivatedRoute,
    private factionService: FactionService
    ) { }

  ngOnInit() {
    this.getUnits();
  }

  getUnits(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.factionService.getFaction(id).subscribe(faction => this.faction = faction);
    this.unitService.getUnits(id).subscribe(units => this.units = units);
  }

}
