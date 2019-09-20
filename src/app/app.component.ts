import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Lsy} from '../reducers/app.model';
import {Observable, Subscription} from 'rxjs';
import {MoviesService} from './service/app.service';
import {Article, User} from './service/app.model';

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

  constructor(
    private $store: Store<Lsy>,
  ) {
    this.tagState$ = $store.select('lsy');
    this.userState$ = $store.select('user');
  }

  ngOnInit() {
    this.tagStateSubscription = this.tagState$.subscribe((state) => {
      this.lsy = state;
    });

    this.userStateSubscription = this.userState$.subscribe(state => console.log(state));
  }

}
