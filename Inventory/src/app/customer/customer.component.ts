import { NgForm } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { CustomerService } from "../shared/customer/customer.service";
import { Customer } from "../shared/customer/customer";

import { Flag } from "./flag";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
declare var M: any;
//declare var f:any;

@Component({
  selector: "app-customer",
  templateUrl: "./customer.component.html",
  styleUrls: ["./customer.component.scss"],
  providers: [CustomerService]
})
export class CustomerComponent implements OnInit {
  constructor(public customerService: CustomerService) {}
  //status: Status[];
  flag: Flag;

  ngOnInit() {
    this.resetForm();
    this.refreshCustomerList();
    this.flag = { flag: 1 };
   
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
    }
    this.customerService.selectedCustomer = {
      _id: null,
      customerName: "",
      customerContact: null
    };
  }

  onSubmit(form: NgForm) {
    console.log(form.value._id);
    if (form.value._id == null) {
      this.customerService.postCustomer(form.value).subscribe(res => {
        this.resetForm(form);
        this.refreshCustomerList();
        var toastHTML = '<span style="color:black">Saved Successfuly</span>';
        M.toast({ html: toastHTML });
      });
    } else {
      this.customerService.putCustomer(form.value).subscribe(res => {
        this.resetForm(form);
        this.refreshCustomerList();
        var toastHTML = '<span style="color:black">Updated Successfuly</span>';
        M.toast({ html: toastHTML });
      });
    }
  }
  // onUp(form:NgForm){
  //   this.customerService.putCustomer(form.value).subscribe((res) => {
  //     this.resetForm(form);
  //     this.refreshCustomerList();
  //     M.toast({ html: 'Updated successfully', classes: 'rounded' });
  //   });
  // }

  refreshCustomerList() {
    this.customerService.getCustomerList().subscribe(res => {
      this.customerService.customers = res as Customer[];
    });
  }

  onEdit(rog: Customer) {
    //flag=true;
    this.customerService.selectedCustomer = rog;
  }

  onDelete(_id: string, form: NgForm) {
    if(confirm("Are you sure to delete this record?")== true){
    this.customerService.deleteCustomer(_id).subscribe(res => {
      this.refreshCustomerList();
      this.resetForm();
      M.toast({ html: "deleted Successfully", classes: "rounded" });
    });
  }
}
  setFlag() {
    return (this.flag = { flag: 0 });
  }
}
