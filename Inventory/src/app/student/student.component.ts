import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{FormGroup,FormBuilder,FormControl,FormArray,Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import{OrderService} from '../shared/order/order.service';
import{Order} from '../shared/order/order';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {
  profileForm = this.fb.group({
    Name: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  constructor(private fb: FormBuilder, public OrderService:OrderService) { }


  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }

  refreshOrderList(){
    this.OrderService.getOrderList().subscribe((res)=>{

      this.OrderService.orders= res as Order[];
    })
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }
deleteRow(index:number){
  this.aliases.removeAt(index);
}
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
}
