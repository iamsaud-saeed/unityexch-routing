import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CasinoInterceptor implements HttpInterceptor {
    omitCalls = ['auth'];
    skipInterceptor = false;
  
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      
      let token = localStorage.getItem('token');
      if (token) {
        const Authorization = "Bearer " + localStorage.getItem('token') || "";
        return next.handle(req.clone({ setHeaders: { Authorization } }));
      }
      return next.handle(req);
    }
  
}