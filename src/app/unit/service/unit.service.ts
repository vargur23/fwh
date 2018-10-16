import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { JsonService } from '../../../services';
import { Unit } from '../../../poo';
import * as globals from '../../../globals';

@Injectable({
  providedIn: 'root'
})
export class UnitService {
  pathsm = globals.sm_units_json_path;
  pathbos = globals.bos_units_json_path;
  pathsur = globals.surviver_units_json_path;

  constructor(private jsonService: JsonService) { }

  getUnits(faction): Observable<Unit[]> {
    let path;
    switch (faction) {
      case 'super_mutants': {
        path = this.pathsm;
        break;
      }
      case 'bos': {
        path = this.pathbos;
        break;
      }
      case 'surviver': {
        path = this.pathsur;
        break;
      }
      default: {
        path = this.pathsm;
        break;
      }

    }

    let result: Unit[];
    this.jsonService.getJson(path).subscribe(json => result = json.units);
    return of(result);
  }

}
