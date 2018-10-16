import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class JsonService {

  constructor() { }

  getJSONArray<T>(path: string): Observable<T[]> {
    let result;
    this.getJson(path).subscribe(json => result = json.data);
    return of(result);
  }

  getJSONObjectbyID<T>( path: string, id: string): Observable<T> {
    let fArr;
    let result;
    this.getJson(path).subscribe(json => fArr = json.data);
    fArr.map(f => {
      if (f.id === id) {
        result = f;
      }
    });
    return of(result);
  }

  private getJson(path: string): Observable<any> {
    const request = new XMLHttpRequest();
    request.open('GET', path, false);
    request.send(null);
    const json = JSON.parse(request.responseText);
    return of(json);
  }
}
