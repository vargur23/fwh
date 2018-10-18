import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { JsonService } from '../../services';
import { Unit, Faction, Item } from '../../poo';

@Component({
  selector: 'app-unit-details',
  templateUrl: './unit-details.component.html',
  styleUrls: ['./unit-details.component.css']
})
export class UnitDetailsComponent implements OnInit {

  unit: Unit;
  itemsCarry: Item[];

  constructor(private route: ActivatedRoute,
    private jsonService: JsonService) { }

    ngOnInit() {
      const id_faction = this.route.snapshot.paramMap.get('id_faction');
      const id_unit = this.route.snapshot.paramMap.get('id_unit');
      this.jsonService.getUnitByID(id_faction, id_unit).subscribe(unit => this.unit = unit);
      const carryObj = this.unit.does_cary;
      try {
        let key;
          for (key in carryObj) {
            if ({}.hasOwnProperty.call(carryObj, key)) {
              this.jsonService.getItemArrayByIdArray(key, carryObj[key]).subscribe(result => this.itemsCarry = result);
          }
        }
      } catch (ex) {
        console.log('does_carry empty!');
      }
    }

    onSelect(item: Item): void {
      console.log('click');
    }

}
