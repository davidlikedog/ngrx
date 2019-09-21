import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Lsy} from '../reducers/app.model';
import {Observable, Subscription} from 'rxjs';
import {Hero, HeroService} from './entity-data/hero.service';

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
  heroes$: Observable<Hero[]>;

  constructor(
    private $store: Store<Lsy>,
    private heroService: HeroService
  ) {
    this.tagState$ = $store.select('lsy');
    this.userState$ = $store.select('user');

    this.heroes$ = heroService.entities$;
    this.loading$ = heroService.loading$;
  }

  ngOnInit() {
    this.tagStateSubscription = this.tagState$.subscribe((state) => {
      this.lsy = state;
    });

    this.userStateSubscription = this.userState$.subscribe(state => console.log(state));

    this.heroService.getAll().subscribe(res => console.log(res));
  }

}
