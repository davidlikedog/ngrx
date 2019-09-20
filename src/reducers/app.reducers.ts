import { Action } from '@ngrx/store';
import { Lsy, initLsy } from './app.model';
import { chifan, shuijiao, xiedaima } from './app.model';

export function lsyReducer(state: Lsy = initLsy, action: Action) {
  switch (action.type) {
    case chifan:
      return Object.assign({}, state, {
        zui: action['gaoshiqing']
      });
    case shuijiao:
      return Object.assign({}, state, {
        tou: action['gaoshiqing']
      });
    case xiedaima:
      return Object.assign({}, state, {
        shou: action['gaoshiqing']
      });
    default:
      return state;
  }
}
