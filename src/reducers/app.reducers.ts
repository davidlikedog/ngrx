import {Lsy, initLsy} from './app.model';
import {chifan, shuijiao, xiedaima} from './app.model';
import {User} from '../app/service/app.model';

import {createAction, props} from '@ngrx/store';
import {createReducer, on} from '@ngrx/store';
import {count} from 'rxjs/operators';

export const increment: any = createAction('[Counter Component] Increment');
export const decrement: any = createAction('[Counter Component] Decrement');
export const reset: any = createAction('[Counter Component] Reset');
export const setCount: any = createAction('[Scoreboard Page] Set Scores', props<{ data: { count: number, extra: string } }>());

export interface UserR {
  type: string;
  payload: User[];
}

export function lsyReducer(state: Lsy = initLsy, action: { type: string, payload: string }) {
  switch (action.type) {
    case chifan + 'ok':
      return Object.assign({}, state, {
        zui: action.payload
      });
    case shuijiao:
      return Object.assign({}, state, {
        tou: action.payload
      });
    case xiedaima:
      return Object.assign({}, state, {
        shou: action.payload
      });
    default:
      return state;
  }
}

export function userReducer(state: User[] = [], action: UserR) {
  switch (action.type) {
    case '[User API] User Loaded Success':
      console.log(action);
      return action.payload;
    default:
      return state;
  }
}

export const initialState = {
  count: 0,
  extra: 'nothing'
};

const _counterReducer = createReducer(initialState,
  on(increment, state => ({...state, count: state.count + 1})),
  on(decrement, state => ({...state, count: state.count - 1})),
  on(reset, state => ({count: 0, extra: 'nothing'})),
  on(setCount, (state, {data}) => ({count: data.count, extra: data.extra}))
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}

