import { Observable } from 'rxjs';
export interface AuthenticateEntity {
    Email?: string;
    Password?: string;
  }
  
  export abstract class AuthenticateData {
    abstract login(req:AuthenticateEntity): Observable<any>;
    abstract register(req:AuthenticateEntity): Observable<any>;
    abstract logout();
  }
  