import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import{MatInputModule} from '@angular/material/input';

const MaterialComponents=[MatButtonModule,MatCheckboxModule,MatCardModule,MatInputModule]
@NgModule({

  imports: [MaterialComponents],
  exports:[MaterialComponents]
})
export class MaterialModule { }
