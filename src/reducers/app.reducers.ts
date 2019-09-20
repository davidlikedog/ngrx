import {Lsy, initLsy} from './app.model';
import {chifan, shuijiao, xiedaima} from './app.model';
import {User} from '../app/service/app.model';

export interface UserR {
  type: string;
  payload: User[];
}

export function lsyReducer(state: Lsy = initLsy, action: { type: string, payload: string }) {
  console.log('this is lsy reducer', action);
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
  console.log('this is user reducer', action);
  switch (action.type) {
    case '[User API] User Loaded Success':
      return action.payload;
    default:
      return state;
  }
}


