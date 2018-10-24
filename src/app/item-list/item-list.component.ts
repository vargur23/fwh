import { Component, OnInit, Input  } from '@angular/core';

import { JsonService, StorageService } from '../../services';
import { Item, Unit } from '../../poo';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit  {

  @Input() unit: Unit;
  @Input() itemType: string;
  items: Item[];

  constructor(private jsonService: JsonService,
    private storageService: StorageService
    ) {}

  ngOnInit() {
      try {
        this.jsonService.getItemsByIDs(this.itemType, this.unit[this.itemType]).subscribe(result => this.items = result);
      } catch (ex) {
         console.error(`${this.itemType}: empty!->${ex}`);
      }
  }

  addItem(e, item) {
    if (e.checked) {
      this.storageService.addItemToUnit(item, this.itemType);
    } else {
      this.storageService.removeItemFromUnit(item, this.itemType);
    }

  }
}
