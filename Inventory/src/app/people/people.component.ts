import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {PeopleService} from '../shared/people/people.service';

import { People } from  "../shared/people/people";
import {Status} from './status';
declare var M: any;
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
  providers: [PeopleService]
})
export class PeopleComponent implements OnInit {

  constructor(public peopleService: PeopleService) { }
  status:Status[];

  ngOnInit() {
    this.status=[{Id:1,name:"Active"},
    {Id:2,name:"Hold"},
    {Id:3,name:"Pause"}

    ]
    this.resetForm();
    this.refreshPeopleList();
  }

  resetForm(form?: NgForm) {
    if (form) {
    form.reset();
    }
    this.peopleService.selectedPeople = {
      _id:null,
      firstName: '',
      lastName: '',
      dob: null,
      Status: null
    };
  }

  onSubmit(form: NgForm) {

      this.peopleService.postPeople(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshPeopleList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
  }
    onUp(form:NgForm){
      this.peopleService.putPeople(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshPeopleList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }

  refreshPeopleList(){
    this.peopleService.getPeopleList().subscribe((res)=>{

      this.peopleService.peoples= res as People[];
    })
  }

  onEdit(rog:People){
    this.peopleService.selectedPeople=rog;
  }

  onDelete(_id:string, form:NgForm){
    this.peopleService.deletePeople(_id).subscribe((res)=>
    {
      this.refreshPeopleList();
      this.resetForm();
      M.toast({html:'deleted Successfully', classes:"rounded"});
    })
  }
}
