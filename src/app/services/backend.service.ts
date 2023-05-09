import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import { CONFIG } from 'config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  getUserBalance() {
    throw new Error('Method not implemented.');
  }
    
  constructor(private http: HttpClient) { 

  }
  public getUserBalanceURL() : Observable <any>{
   return this.http.post(CONFIG.getUserBalanceURL, {});
}

}
