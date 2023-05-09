import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent { 
  isLogin :any =false;
  ShowMyAccount: any = false;
  dataLoad: any;
  userBalance: any;
  userBalanceTotal: any;
  userExposure: any;
  
  constructor(private backendService : BackendService){

  }
    ngOnInit() {
      this.getuserBalance();
   
    }

    getuserBalance(){
      //calling backend service here in header component.ts file
      this.backendService.getUserBalanceURL().subscribe((res:any)=>{
        this.dataLoad = res.meta.status;
        this.userBalance = res?.data;
        let bankBalance = res.data.bankBalance - res.data.exposure;
        this.userBalanceTotal = bankBalance.toString();
        this.userExposure = res.data.exposure;
      })
    }


  }


