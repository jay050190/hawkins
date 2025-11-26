import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { AuthenticateData, AuthenticateEntity } from '../data/authenticate';
import { ApiResponse, User } from '../data/users';
import jwt_decode from 'jwt-decode';
@Injectable()
export class AuthenticateService extends AuthenticateData {

    private currentUserSubject: BehaviorSubject<ApiResponse>;
    public currentUser: Observable<ApiResponse>;
    private userObj: User;

    public get currentUserValue(): User {
        try {
          this.userObj = {id:0};
          let res: ApiResponse = this.currentUserSubject.value;
          if (res != null) {
            var decoded = jwt_decode(res.data.token);
            this.userObj.id = parseInt(decoded["id"]);
          }
          else
          {
            this.userObj = null;
          }
        }
        catch (Error) {
          console.log(Error);
          this.userObj = null;
        }
        return this.userObj;
      }

      login(userRequest: AuthenticateEntity) {
        return this.http.post<any>(environment.apiURL + `/Authenticate/AuthenticateUser`, userRequest)
          .pipe(map(userResponse => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(userResponse));
            this.currentUserSubject.next(userResponse);
            return userResponse;
          }));
      }
    register(req: AuthenticateEntity): Observable<any> {
        return this.http.post(environment.apiURL +`/Authenticate/Customer`, req)
        .pipe(map(userResponse => {
          return userResponse;
        }));
    }
    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
      }
    constructor(private http: HttpClient) {
        super();
        this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable(); 
    }

    
}