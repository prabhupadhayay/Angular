import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatTableModule } from "@angular/material/table";
import {
  MatToolbarModule,
  MatPaginatorModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatFormFieldModule
} from "@angular/material";
const MaterialComponents = [
  MatListModule,
  MatFormFieldModule,
  MatSidenavModule,
  MatIconModule,
  MatToolbarModule,
  MatPaginatorModule,
  MatTableModule,
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatInputModule
];
@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule {}
