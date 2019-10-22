import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CustomerComponent } from "./customer/customer.component";
import { OrderComponent } from "./order/order.component";
import { HomeComponent } from "./home/home.component";
import { ProductComponent } from "./product/product.component";
import { SettingComponent } from "./setting/setting.component";
import { PeopleComponent } from "./people/people.component";
import { StudentComponent } from "./student/student.component";
import { ManageorderComponent } from "./manageorder/manageorder.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "./auth.guard";
const routes: Routes = [
  { path: "home", canActivate: [AuthGuard], component: HomeComponent },
  { path: "customer", canActivate: [AuthGuard], component: CustomerComponent },
  { path: "order", canActivate: [AuthGuard], component: OrderComponent },
  { path: "product", canActivate: [AuthGuard], component: ProductComponent },
  { path: "setting", canActivate: [AuthGuard], component: SettingComponent },
  { path: "people", canActivate: [AuthGuard], component: PeopleComponent },
  { path: "student", canActivate: [AuthGuard], component: StudentComponent },
  {
    path: "manageorder",
    canActivate: [AuthGuard],
    component: ManageorderComponent
  },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
