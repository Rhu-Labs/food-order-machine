import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { HttpClientModule } from '@angular/common/http';
import { CapacityService } from './services/capacity.service';
import { OrderPageComponent } from './components/order-page/order-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    OrderPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CapacityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
