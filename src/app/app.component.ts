import {Component, OnInit} from '@angular/core';
import {Store, select} from '@ngrx/store';
import {Lsy} from '../reducers/app.model';
import {Observable, Subscription} from 'rxjs';

import {increment, decrement, reset, setCount} from '../reducers/app.reducers';

// import {Hero, HeroService} from './entity-data/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  lsy: Lsy;
  tagState$: Observable<any>;
  private tagStateSubscription: Subscription;

  userState$: Observable<any>;
  private userStateSubscription: Subscription;

  loading$: Observable<boolean>;
  // heroes$: Observable<Hero[]>;

  data: {
    count: 0;
    extra: '';
  };
  count$: Observable<any>;
  private countStateSubscription: Subscription;

  constructor(
    private $store: Store<Lsy>,
    private store: Store<any>
    // private heroService: HeroService
  ) {
    this.tagState$ = $store.select('lsy');
    this.userState$ = $store.select('user');
    this.count$ = store.pipe(select('count'));

    // this.heroes$ = heroService.entities$;
    // this.loading$ = heroService.loading$;
  }

  ngOnInit() {
    this.tagStateSubscription = this.tagState$.subscribe((state) => {
      this.lsy = state;
    });

    this.userStateSubscription = this.userState$.subscribe(state => console.log(state));

    this.countStateSubscription = this.count$.subscribe(state => {
      this.data = state;
    });

    // this.heroService.getAll().subscribe(res => {
    //   console.log('11111');
    //   console.log(res);
    // });
  }

  calculate(operation) {
    if (operation === '+') {
      this.store.dispatch(increment());
    } else if (operation === '-') {
      this.store.dispatch(decrement());
    } else if (operation === 'set') {
      this.store.dispatch(setCount({data: {count: 10, extra: 'this is something I want to tell you'}}));
    } else {
      this.store.dispatch(reset());
    }
  }

}
