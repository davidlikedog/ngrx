import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Article, ArticleResponse, User, UserResponse} from './app.model';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(
    private http: HttpClient
  ) {
  }

  getAll(val: { type: string, payload: string }): Observable<any> {
    console.log('this is app service, get all', val);
    return new Observable(ob => {
      setTimeout(() => {
        ob.next(val.payload);
        ob.complete();
      }, 1000);
    });
  }

  getAllUser(param?): Observable<User[]> {
    console.log('this is app service, get all user', param);
    return new Observable(ob => {
      this.http.get<UserResponse>(environment.hostURL + '/getUser/').subscribe(res => {
        ob.next(res.data);
        ob.complete();
      });
    });
  }

  getAllArticle(): Observable<Article[]> {
    return new Observable(ob => {
      this.http.get<ArticleResponse>(environment.hostURL + '/getAllArticle/').subscribe(res => {
        ob.next(res.data);
        ob.complete();
      });
    });
  }
}
