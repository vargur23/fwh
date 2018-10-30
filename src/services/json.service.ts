import { Injectable } from '@angular/core';
import { Observable, of, EMPTY } from 'rxjs';
import { Unit, Faction, Item } from 'src/poo';
import * as globals from '../globals';



@Injectable({
  providedIn: 'root'
})
export class JsonService {

  readonly EQUIPMENT_DBS = [
    'leader',
    'armor',
    'clothing',
    'heavy_weapons',
    'weapons',
    'cc_weapons',
    'hand_weapons',
    'granates',
    'mines',
    'consumables'
    ];

  constructor() { }

  /**
   *  Factions JSON retrieving
   */

  getFactionArray(): Observable<Faction[]> {
    let result: Faction[];
    this.getJSONArray<Faction>(globals.factions_json_path).subscribe(factions => result = factions);
    return of(result);
  }

  getFactionByID(id_faction): Observable<Faction> {
    let result: Faction;
    this.getJSONByID<Faction>(globals.factions_json_path, id_faction).subscribe(faction => result = faction);
    return of(result);
  }

  /**
   *  Unit JSON retrieving
   */

  getUnitsByFaction(id_faction): Observable<Unit[]> {
    let result: Unit[];
    this.getJSONArray<Unit>(this.getUnitsJSONPath(id_faction)).subscribe(units => result = units);
    return of(result);
  }

  getUnitByID(id_faction, id_unit): Observable<Unit> {
    let result: Unit;
    this.getJSONByID<Unit>(this.getUnitsJSONPath(id_faction), id_unit).subscribe(units => result = units);
    return of(result);
  }

  private getUnitsJSONPath(id_faction): string {
    let path;
    switch (id_faction) {
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
    return path;
  }

  /**
   *  Item JSON retrieving
   */

  getItemsByIDs(eqipmentDB: string, ids: string[]): Observable<Item[]> {
    let result: Unit[];
    this.getJSONArrayByID<Unit>(this.getItemJSONPath(eqipmentDB), ids).subscribe(items => result = items);
    return of(result);
  }

  getItemByID(eqipmentDB: string, id_item): Observable<Item> {
    let result: Item;
    this.getJSONByID<Item>(this.getItemJSONPath(eqipmentDB), id_item).subscribe(items => result = items);
    return of(result);
  }

  searchItemsByIDs(ids: string[]): Observable<Item[]> {
    const result = [];
    let itemID;
    this.EQUIPMENT_DBS.map(db => {
      ids.map(id => {
          this.getJSONByID<Item>(this.getItemJSONPath(db), id).subscribe(item => itemID = item );
          if (itemID) {
            result.push(itemID);
          }
      });
    });
    return of(result);
  }

  private getItemJSONPath(eqipmentDB): string {
    let path;
    switch (eqipmentDB) {
      case 'leader': {
        path = globals.leader_json_path;
        break;
      }
      case 'armor': {
        path = globals.armor_json_path;
        break;
      }
      case 'clothing': {
        path = globals.clothing_json_path;
        break;
      }
      case 'heavy_weapons': {
        path = globals.heavy_weapons_json_path;
        break;
      }
      case 'weapons': {
        path = globals.weapons_json_path;
        break;
      }
      case 'cc_weapons': {
        path = globals.cc_weapons_json_path;
        break;
      }
      case 'hand_weapons': {
        path = globals.hand_weapons_json_path;
        break;
      }
      case 'granates': {
        path = globals.granates_json_path;
        break;
      }
      case 'mines': {
        path = globals.mines_json_path;
        break;
      }
      case 'consumables': {
        path = globals.consumables_json_path;
        break;
      }
      default: {
        path = '';
        break;
      }
    }
    return path;
  }

  /**
   *  Generic part of JSON retrieving
   */

  getJSONArray<T>(path: string): Observable<T[]> {
    let result;
    this.getJson(path).subscribe(json => result = json);
    return of(result);
  }

  getJSONByID<T>( path: string, id: string): Observable<T> {
    let fArr;
    let result;
    this.getJson(path).subscribe(json => fArr = json);
    if (fArr) {
    fArr.map(f => {
      if (f.id === id) {
        result = f;
      }
    });
  }
    return of(result);
  }
  getJSONArrayByID<T>( path: string, ids: string[]): Observable<T[]> {
    let fArr;
    const result = [];
    this.getJson(path).subscribe(json => fArr = json);
    if (fArr) {
    fArr.map(f => {
      if (ids.includes(f.id)) {
        result.push(f);
      }
    });
  }
    return of(result);
  }

  private getJson(path: string): Observable<any> {
    const request = new XMLHttpRequest();
    request.open('GET', path, false);
    request.send(null);
    const json = JSON.parse(request.responseText);
    if (json.data) {
      return of(json.data);
    }
    return of([]);
  }
}
