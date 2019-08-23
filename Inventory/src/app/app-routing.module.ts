import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { OrderComponent } from './order/order.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { SettingComponent } from './setting/setting.component';


const routes: Routes = [{ path: 'home', component: HomeComponent },
{ path: 'customer', component: CustomerComponent },
{ path: 'order', component: OrderComponent },
{ path: 'product', component: ProductComponent },
{ path: 'setting', component: SettingComponent },
{ path: '', redirectTo: '/home', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
