import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { ClientsDetailsComponent } from './clients-details/clients-details.component';

const routes: Routes = [{path:'clients', component:ClientsComponent},
         {path:'clients-details',component:ClientsDetailsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
