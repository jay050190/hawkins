import { Observable } from 'rxjs';

export interface ApiResponse {
  data: any;
  Success: boolean;
  Message:string;
}


export interface User {
  name?: string;
  picture?: string;
  id?:number;
}

export interface Contacts {
  user: User;
  type: string;
}

export interface RecentUsers extends Contacts {
  time: number;
}

export abstract class UserData {
  abstract getUsers(): Observable<User[]>;
  abstract getContacts(): Observable<Contacts[]>;
  abstract getRecentUsers(): Observable<RecentUsers[]>;
}
