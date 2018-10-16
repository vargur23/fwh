import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { JsonService } from '../../../services';
import { Faction} from '../../../poo';
import * as globals from '../../../globals';

@Injectable({
  providedIn: 'root'
})
export class FactionService {

  path = globals.factions_json_path;

  constructor(private jsonService: JsonService) { }

  getFactions(): Observable<Faction[]> {
    let result: Faction[];
    this.jsonService.getJson(this.path).subscribe(json => result = json.factions);
    return of(result);
  }

  getFaction(id: string): Observable<Faction> {
    let fArr: Faction[];
    let result: Faction;
    this.jsonService.getJson(this.path).subscribe(json => fArr = json.factions);
    fArr.map(f => {
      if (f.id === id) {
        result = f;
      }
    });
    return of(result);
  }
}
