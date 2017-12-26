import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { User } from '../models/user';
import { List } from '../models/list';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {
  private BASE_URL: string = 'http://localhost:8080';
  private headers: Headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http: Http) {}
  login(user: User): Promise<any> {
    let url: string = `${this.BASE_URL}/auth`;
    return this.http.post(url, user, {headers: this.headers}).toPromise();
  }
  register(user: User): Promise<any> {
    let url: string = `${this.BASE_URL}/auth/create`;
    return this.http.post(url, user, {headers: this.headers}).toPromise();
  }
  gettodoList(token): Promise<any> {
    let url: string = `${this.BASE_URL}/api?token=`+token;
    let headers: Headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.get(url, {headers: headers}).toPromise();
  }
  settodoList(token, list: List): Promise<any> {
    let url: string = `${this.BASE_URL}/api`;
    let headers: Headers = new Headers({
      'Content-Type': 'application/json',
    });
    return this.http.post(url, list, {headers: headers}).toPromise();
  }
  archivetodoList(token: string, list: any): Promise<any> {
    let url: string = `${this.BASE_URL}/api/`+list._id;
    let headers: Headers = new Headers({
      'Content-Type': 'application/json',
    });
    return this.http.post(url, list, {headers: headers}).toPromise();
  }
}
