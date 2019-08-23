import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './clients/clients.component';
import { ClientsDetailsComponent } from './clients-details/clients-details.component';


@NgModule({
  declarations: [ClientsComponent, ClientsDetailsComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule
  ]
})
export class ClientsModule { }
