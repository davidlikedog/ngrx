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

// mergeMap 的意思是说：它自己的外层是一个Observe，它里面也会是一个Observe，因此如果不用的话需要经过两次的subscription，
// 用它就相当于直接把两次的订阅结果返回到最高层

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
      )), tap(res => {
      console.log(res);
    })
    )
  );

  constructor(
    private actions$: Actions,
    private moviesService: MoviesService
  ) {
  }
}


