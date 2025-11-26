import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // const token  = this.userAuthenticationService.token;

    // if (!token) {
    //   return next.handle(req);
    // }

    // const authReq = req.clone({ setHeaders: { 'Access-Control-Allow-Origin': '*','Access-Control-Allow-Methods': 'GET, POST, OPTIONS, DELETE, PUT','Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token',Authorization: `Bearer ${token}`} });
    // const req1 = req.clone({
    //   headers: req.headers.set('Authorization', `Bearer ${token}`),
    // });
    // return next.handle(authReq);
    //const request = req.clone();
    const request = req.clone({
      withCredentials: true
  });
  return next.handle(request);
  }
}