import {Component, OnInit} from '@angular/core';
import {chifan, Lsy, shuijiao, xiedaima} from '../../../reducers/app.model';
import {Observable, Subscription} from 'rxjs';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  value1 = '';
  value2 = '';
  value3 = '';
  tagState$: Observable<Lsy>;
  private tagStateSubscription: Subscription;

  constructor(private store: Store<Lsy>) {
    this.tagState$ = store.select('lsy');
  }

  ngOnInit() {
  }

  changezui(val) {
    this.store.dispatch({
      type: chifan,
      gaoshiqing: val
    });
  }

  changeshou(val) {
    this.store.dispatch({
      type: shuijiao,
      gaoshiqing: val
    });
  }

  changetou(val) {
    this.store.dispatch({
      type: xiedaima,
      gaoshiqing: val
    });
  }

}
