import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {EMPTY} from 'rxjs';
import {map, mergeMap, catchError, tap} from 'rxjs/operators';
import {MoviesService} from '../service/app.service';
import {chifan} from '../../reducers/app.model';

@Injectable()
export class MovieEffects {

  loadMovies$ = createEffect((): Actions => this.actions$.pipe(
    ofType(chifan),
    mergeMap((val: { type: string, payload: string }) => this.moviesService.getAll(val)
      .pipe(
        map(movies => ({type: chifan + 'ok', payload: movies})),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private moviesService: MoviesService
  ) {
  }
}

@Injectable()
export class UserEffects {
  loadUsers$ = createEffect((): any => this.actions$.pipe(
    ofType('ok'),
    mergeMap((val) => this.moviesService.getAllUser(val)
      .pipe(
        map(user => {
          return {type: '[User API] User Loaded Success', payload: user};
        }),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private moviesService: MoviesService
  ) {
  }
}


