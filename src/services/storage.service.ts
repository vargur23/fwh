import { Injectable } from '@angular/core';
import { Unit, List, Storage } from '../poo';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  readonly STORAGE_KEY = 'storage';
  storage: Storage;
  unit: Unit;

  constructor() {
    this.storage = JSON.parse(localStorage.getItem(this.STORAGE_KEY));
    if (!this.storage) {
      this.storage = new Storage();
      const defaultList = new List();
      defaultList.name = 'default';
      defaultList.active = true;
      this.storage.data.push(defaultList);
      const storageJSONString = JSON.stringify(this.storage);
      localStorage.setItem(this.STORAGE_KEY, storageJSONString);
    }
   }

   getLists(): List[] {
    this.storage = JSON.parse(localStorage.getItem(this.STORAGE_KEY));
    if (this.storage) {
      return this.storage.data;
    }
   }

   getListbyName(name: string): List {
    let result = new List;
    this.storage = JSON.parse(localStorage.getItem(this.STORAGE_KEY));
    if (this.storage) {
      const lArr = this.storage.data;
      lArr.map(l => {
        if (l.name === name) {
          result = l;
        }
      });
    }
    return result;
   }

   getActiveList(): List {
    let result = new List;
    this.storage = JSON.parse(localStorage.getItem(this.STORAGE_KEY));
    if (this.storage) {
      const lArr = this.storage.data;
      lArr.map(l => {
        if (l.active) {
          result = l;
        }
      });
    }
    return Object.assign(result, List);
   }

   setListActive(name: string): void {
    this.storage = JSON.parse(localStorage.getItem(this.STORAGE_KEY));
    if (this.storage) {
      const lArr = this.storage.data;
      lArr.map(l => {
        if (l.name === name) {
            l.active = true;
        } else {
          l.active = false;
        }
      });
    }
   }

   initUnitObject(unit: Unit): void {
     this.unit = new Unit();
     this.unit.id = this.unit.id;
     this.unit.name = this.unit.name;
     this.unit.cost = this.unit.cost;
     this.unit.does_cary = this.unit.does_cary;
   }
}
