import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {chifan} from '../../reducers/app.model';

@Injectable({
  providedIn: 'root'
})
export class RouterGard implements CanActivate {
  constructor(
    private store: Store<any>
  ) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {

    return new Observable(ob => {
      setTimeout(() => {
        this.store.dispatch({
          type: chifan + 'ok',
          payload: 'this is gard dispatch'
        });
        ob.next(true);
        ob.complete();
      }, 3000);
    });
  }
}

