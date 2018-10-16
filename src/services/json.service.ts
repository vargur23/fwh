import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class JsonService {

  constructor() { }

  public getJson(path: string): Observable<any> {
    const request = new XMLHttpRequest();
    request.open('GET', path, false);
    request.send(null);
    const json = JSON.parse(request.responseText);
    return of(json);
  }
}
