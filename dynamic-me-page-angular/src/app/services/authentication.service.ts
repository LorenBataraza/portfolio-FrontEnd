import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private url = 'localhost:3306/portfolio.database';
  currentUserSubject : BehaviorSubject<any>;

  constructor(
    private http: HttpClient
  ) { 
    console.log("El servicio de autentificacion fue inicializado")
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}'))
  }

  singIn(credentials : any): Observable<any>{
    return this.http.post(this.url, credentials).pipe(map(
      (data) => {
      sessionStorage.setItem('currentUser', JSON.stringify(data))
      this.currentUserSubject.next(data)
      return data; }
    ))
  }

  get authenticatedUser(){
    return this.currentUserSubject.value
  }
}
