import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor() {
  }

  getAll(val: string): Observable<any> {
    console.log('this is service', val);
    return new Observable(ob => {
      setTimeout(() => {
        ob.next(123);
        ob.complete();
      }, 1000);
    });
  }
}
