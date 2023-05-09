import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HeaderComponent } from './Partials/header/header.component';
import { FooterComponent } from './Partials/footer/footer.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { BackendService } from './services/backend.service';
import { CasinoInterceptor } from './services/interceptors';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule 
    
  ],
  providers: [
    BackendService,
    { provide: HTTP_INTERCEPTORS, useClass: CasinoInterceptor, multi: true }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
