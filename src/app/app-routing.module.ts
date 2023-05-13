import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { OrderPageComponent } from './components/order-page/order-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' }
  , { path: 'welcome', component: LandingComponent }
  , { path: 'order', component: OrderPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
