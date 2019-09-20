import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {EMPTY} from 'rxjs';
import {map, mergeMap, catchError} from 'rxjs/operators';
import {MoviesService} from '../service/app.service';
import {chifan} from '../../reducers/app.model';

@Injectable()
export class MovieEffects {

  loadMovies$ = createEffect((): Actions => this.actions$.pipe(
    ofType(chifan),
    mergeMap((val: string) => this.moviesService.getAll(val)
      .pipe(
        map(movies => ({type: '[Movies API] Movies Loaded Success', payload: movies})),
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
