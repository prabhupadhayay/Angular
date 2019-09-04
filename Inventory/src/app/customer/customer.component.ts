import {NgForm} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import{CustomerService} from '../shared/customer/customer.service';
import{Customer} from '../shared/customer/customer';
import {Status} from './status';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
declare var M: any;
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
  providers: [CustomerService]
})
export class CustomerComponent implements OnInit {

  constructor(public customerService: CustomerService) { }
  status:Status[];

  ngOnInit() {
    this.status=[{Id:1,name:"Active"},
    {Id:2,name:"Hold"},
    {Id:3,name:"Pause"}

    ]
    this.resetForm();
    this.refreshCustomerList();
  }

  resetForm(form?: NgForm) {
    if (form) {
    form.reset();
    }
    this.customerService.selectedCustomer = {
      _id:null,
      customerName: '',
      customerContact: null,

    };
  }

  onSubmit(form: NgForm) {

      this.customerService.postCustomer(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshCustomerList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
  }
    onUp(form:NgForm){
      this.customerService.putCustomer(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshCustomerList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }

  refreshCustomerList(){
    this.customerService.getCustomerList().subscribe((res)=>{

      this.customerService.customers= res as Customer[];
    })
  }

  onEdit(rog:Customer){
    this.customerService.selectedCustomer=rog;
  }

  onDelete(_id:string, form:NgForm){
    this.customerService.deleteCustomer(_id).subscribe((res)=>
    {
      this.refreshCustomerList();
      this.resetForm();
      M.toast({html:'deleted Successfully', classes:"rounded"});
    })
  }
}
