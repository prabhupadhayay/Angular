import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { FormGroup, FormBuilder } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customer/customer.component';
import { ProductComponent } from './product/product.component';
import { OrderComponent } from './order/order.component';
import { SettingComponent } from './setting/setting.component';
import { PeopleComponent } from './people/people.component';
import { StudentComponent } from './student/student.component';

import { ClientsModule } from './clients/clients.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import {HttpClientModule} from '@angular/common/http';

 import {CustomerService} from './shared/customer/customer.service';
 import {PeopleService} from './shared/people/people.service';
 import {ProductService} from './shared/product/product.service';
 import{OrderService} from './shared/order/order.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomerComponent,
    ProductComponent,
    OrderComponent,
    SettingComponent,
    PeopleComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ClientsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule

  ],
  providers: [CustomerService,PeopleService,ProductService,OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
