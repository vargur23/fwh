import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { Unit } from '../../poo';
import { JsonService, StorageService } from 'src/services';

@Component({
  selector: 'app-unit-details',
  templateUrl: './unit-details.component.html',
  styleUrls: ['./unit-details.component.css']
})
export class UnitDetailsComponent implements OnInit {

  unit: Unit;
  moddedUnit: Unit;
  constructor(
    private route: ActivatedRoute,
    private jsonService: JsonService,
    private storageService: StorageService) { }

    ngOnInit() {
      const id_faction = this.route.snapshot.paramMap.get('id_faction');
      const id_unit = this.route.snapshot.paramMap.get('id_unit');
      this.jsonService.getUnitByID(id_faction, id_unit).subscribe(unit => this.unit = unit);
      this.storageService.initUnitObject(this.unit);
    }

    setHeroic(e) {
      if (e.checked) {
        this.storageService.setHeroic(true);
      } else {
        this.storageService.setHeroic(false);
      }
    }
}
