import { Component } from "@angular/core";
import { AuthService } from "./shared/auth/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "Inventory";
  navbarOpen = false;
  constructor(private _authService: AuthService){}
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
