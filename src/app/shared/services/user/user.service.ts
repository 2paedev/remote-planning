import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@models/index';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userUrl = 'http://localhost:8081/user/';

  public constructor(private http: HttpClient) {}

  public getUser(id: string): Observable<User> {
    return this.http.get<User>(this.userUrl + id);
  }
}
