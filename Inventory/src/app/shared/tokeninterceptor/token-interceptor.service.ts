import { Injectable} from '@angular/core';
import { HttpInterceptor } from '@angular/common/http'
import { AuthService } from '../auth/auth.service';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService){}
  intercept(req, next) {
    //let authService = this.injector.get(AuthService)
    let tokenizedReq = req.clone(
      {
        headers: req.headers.set('Authorization', 'bearer ' + this.authService.getToken())
      }
    )
    return next.handle(tokenizedReq)
  }

}