import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{FormGroup,FormBuilder,FormControl,FormArray} from '@angular/forms';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
title='my Angular';
FormGroup:FormGroup;
totalRow:number;
  constructor(private _fb:FormBuilder) { }

  ngOnInit():void {
    this.FormGroup=this._fb.group({
      itemRows:this._fb.array([this.initItemRow()]),
    })
  }
  initItemRow(){
    return this._fb.group({
      Name:[''],
      Rollno:[''],
      class:[''],
      MobileNo:['']
    })
  }

  addnewRow(){
    const control=<FormArray> this.FormGroup.controls['itemRows'];
    control.push(this.initItemRow());
  }
  deleteRow(index:number){
    const control =<FormArray>this.FormGroup.controls['itemRows'];
    if(control!=null){
      this.totalRow=control.value.length;
    }
    if(this.totalRow>1){
      control.removeAt(index);
    }else{
      alert('one row is mandatory');
      return false;
    }
  }
}
