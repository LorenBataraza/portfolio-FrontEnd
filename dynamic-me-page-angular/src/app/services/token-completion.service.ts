import { Injectable } from '@angular/core';
import{ HttpEvent, HttpHandler, HttpRequest, HttpInterceptor} from '@angular/common/http'
import { Observable } from 'rxjs';
import{ AuthenticationService } from '../services/authentication.service'
@Injectable({
  providedIn: 'root'
})
export class TokenCompletionService {

  constructor(
    private authenticationService : AuthenticationService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    var currentUser = this.authenticationService.authenticatedUser()
    if(currentUser && currentUser.accessToken){
      req = req.clone({
        setHeaders: {
          Authorization: 'Bearer ${currentUser.accessToken}'
        }
      })
    }
    console.log("interception funcionando")
    return next.handle(req);
  }


}
