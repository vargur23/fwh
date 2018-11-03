import { Injectable } from '@angular/core';
import * as globals from '../globals';
import { JsonService } from './json.service';
import { Unit, Item, List, Storage } from '../poo';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  readonly STORAGE_KEY = 'storage';
  storage: Storage;
  activeList: List;
  unit: Unit;

  private jsonService: JsonService;

  constructor() {
    this.jsonService = new JsonService;
    this.storage = this.getStorage();
    if (!this.storage) {
      this.createDefaultStorage();
    }
      this.activeList = this.getActiveList();

   }

   add() {
     let contains = false;
     if (this.unit.unique) {
      this.activeList.data.map(u => {
        if (u.id === this.unit.id ) {
          contains = true;
         }
      });
    }
    if (!contains) {
      if (this.activeList.faction === '' || (this.unit.faction_id === this.activeList.faction) ) {
        this.activeList.faction = this.unit.faction_id;
        this.activeList.data.push(this.unit);
        this.writeList(this.activeList);
      }
    }
   }

   /**
    * List Handling
    */
   getActiveList(): List {
    let result;
      this.storage.data.map(l => {
        if (l.active) {
          result = l;
        }
      });
    return Object.assign(result, List);
   }

   setListActive(name: string): void {
      this.storage.data.map(l => {
        if (l.name === name) {
            l.active = true;
        } else {
          l.active = false;
        }
      });
   }

   getList(id: string): List {
    let result;
    this.storage.data.map(l => {
        if (l.id === id) {
          result = l;
        }
      });
    return Object.assign(result, List);
   }

   getLists(): List[] {
      return this.storage.data;
   }

   deleteList(id: string): void {
    this.storage.data = this.storage.data.filter(l => l.id !== id );
   }

   writeList(list: List) {
    this.storage.data.map(l => {
      if (l.name === list.name) {
          l = list;
      }
    });
    this.writeStorage();
   }

   getListCost(list: List): number {
    let sum = 0;
    if (list.data) {
      list.data.map( u => {
        sum += this.getUnitCost(u);
      });
    }
    return sum;
  }

  getUnitCost(unit: Unit): number {
    let sumcost = unit.cost * 1;
    if ( unit.hero ) {
      sumcost += globals.hero_cost * 1;
    }

    sumcost =
    sumcost
    + this.getEquipmentCost(unit.leader) * 1
    + this.getEquipmentCost(unit.perks) * 1
    + this.getEquipmentCost(unit.armor) * 1
    + this.getEquipmentCost(unit.heavy_weapons) * 1
    + this.getEquipmentCost(unit.weapons) * 1
    + this.getEquipmentCost(unit.cc_weapons) * 1
    + this.getEquipmentCost(unit.hand_weapons) * 1
    + this.getEquipmentCost(unit.granates) * 1
    + this.getEquipmentCost(unit.mines) * 1
    + this.getEquipmentCost(unit.consumables) * 1;
    return sumcost;
  }

  private getEquipmentCost(arr: string []): number {
    let sum = 0;
    let itemArr: Item [];
    this.jsonService.searchItemsByIDs(arr).subscribe(ia => itemArr = ia);
    itemArr.map(i => {
      sum = sum + i.cost;
    });
    return sum;
  }



   /**
    * Storage Handling
    */

   getStorage(): Storage {
     return JSON.parse(localStorage.getItem(this.STORAGE_KEY));
   }

   writeStorage() {
    const storageJSONString = JSON.stringify(this.storage);
    localStorage.setItem(this.STORAGE_KEY, storageJSONString);
   }

   createDefaultStorage() {
    this.storage = new Storage();
    const defaultList = new List();
    defaultList.active = true;
    this.storage.data.push(defaultList);
    this.writeStorage();
   }

   /**
    * Unit / Item Handling
    */

   initUnitObject(unit: Unit): void {
     this.unit = new Unit();
     this.unit.id = unit.id;
     this.unit.name = unit.name;
     this.unit.cost = unit.cost;
     this.unit.unique = unit.unique;
     this.unit.does_cary = unit.does_cary;
   }

   removeUnit(id: string): void {
     
   }

   addItemToUnit(item: Item, itemType: string): void {
     this.unit[itemType].push(item.id);
   }

   removeItemFromUnit(item: Item, itemType: string): void {
    this.unit[itemType] = this.unit[itemType].filter(v => v !== item.id );
  }

  setHeroic(state: boolean): void {
    this.unit.hero = state;
  }
}
