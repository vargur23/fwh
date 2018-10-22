import { Component, OnInit, Input  } from '@angular/core';

import { JsonService } from '../../services';
import { Item, Unit } from '../../poo';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit  {

  @Input() unit: Unit;
  @Input() itemType: string;
  @Input() subType: string;
  items: Item[];

  constructor(private jsonService: JsonService) {}

  ngOnInit() {
      try {
        const obj = this.unit[this.itemType];
        if (this.subType) {
          this.jsonService.getItemArrayByIdArray(this.subType, obj[this.subType]).subscribe(result => this.items = result);
        } else {
          let key;
          for (key in obj) {
            if ({}.hasOwnProperty.call(obj, key)) {
              this.jsonService.getItemArrayByIdArray(key, obj[key]).subscribe(result => this.items = result);
            }
          }
        }
      } catch (ex) {
        // console.error(`${this.itemType}: empty!->${ex}`);
      }
  }
}
