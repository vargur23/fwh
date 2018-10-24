import { Injectable } from '@angular/core';
import { Unit, Item, List, Storage } from '../poo';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  readonly STORAGE_KEY = 'storage';
  storage: Storage;
  activeList: List;
  unit: Unit;

  constructor() {
    this.storage = this.getStorage();
    if (!this.storage) {
      this.createDefaultStorage();
    }
      this.activeList = this.getActiveList();

   }

   add() {
     const list = this.getActiveList();
     if (this.unit.unique) {

     } else {
      this.activeList.data.push(this.unit);
     }
     this.writeList(list);
   }

   /**
    * Storage / List Handling
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

   getList(name: string): List {
    let result;
    this.storage.data.map(l => {
        if (l.name === name) {
          result = l;
        }
      });
    return Object.assign(result, List);
   }

   getLists(): List[] {
      return this.storage.data;
   }

   writeList(list: List) {
    this.storage.data.map(l => {
      if (l.name === list.name) {
          l = list;
      }
    });
    this.writeStorage();
   }

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
     this.unit.does_cary = unit.does_cary;
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
