import {Component, OnInit} from '@angular/core';
import {chifan, Lsy, shuijiao, xiedaima} from '../../../reducers/app.model';
import {Observable, Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import {Article, User} from '../../service/app.model';
import {MoviesService} from '../../service/app.service';

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

  displayedColumns: string[] = ['id', 'title', 'author', 'content'];
  dataSource: Article[] = [];

  user: User[];
  userState$: Observable<User[]>;
  private userSubscription: Subscription;

  constructor(
    private store: Store<any>,
    private service: MoviesService,
  ) {
    this.tagState$ = store.select('lsy');
    this.userState$ = store.select('user');
  }

  ngOnInit() {
    this.service.getAllArticle().subscribe(res => {
      this.dataSource = res;
    });
    setTimeout(() => {
      this.delayLoadUser();
    }, 2000);

    this.userSubscription = this.userState$.subscribe(res => {
      console.log('this is test.component', res);
      this.user = res;
    });
  }

  changezui(val) {
    this.store.dispatch({
      type: chifan,
      payload: val
    });
  }

  changeshou(val) {
    this.store.dispatch({
      type: shuijiao,
      payload: val
    });
  }

  changetou(val) {
    this.store.dispatch({
      type: xiedaima,
      payload: val
    });
  }

  delayLoadUser() {
    this.store.dispatch({
      type: 'ok',
      data: []
    });
  }

  getName(id: number): string {
    if (this.user.length === 0) {
      return '';
    }
    const currentUser: User[] = this.user.filter(item => {
      return item.id === id;
    });
    return currentUser[0].name;
  }

}
