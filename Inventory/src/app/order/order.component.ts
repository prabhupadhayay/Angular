import {NgForm} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import{OrderService} from '../shared/order.service';
import{Order} from '../shared/order';
import {Status} from './status';
declare var M: any;
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  providers: [OrderService]
})
export class OrderComponent implements OnInit {

  constructor(public orderService: OrderService) { }
  status:Status[];

  ngOnInit() {
    this.status=[{Id:1,name:"Active"},
    {Id:2,name:"Hold"},
    {Id:3,name:"Pause"}

    ]
    this.resetForm();
    this.refreshOrderList();
  }

  resetForm(form?: NgForm) {
    if (form) {
    form.reset();
    }
    this.orderService.selectedOrder = {
      _id:null,
      orderDate:'',
      customerName:'',
      customerContact:null,
      productName:'',
      rate:null,
      quantity:null,
      totalAmount:null
      
    };
  }

  onSubmit(form: NgForm) {

      this.orderService.postOrder(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshOrderList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
  }
    onUp(form:NgForm){
      this.orderService.putOrder(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshOrderList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }

  refreshOrderList(){
    this.orderService.getOrderList().subscribe((res)=>{

      this.orderService.orders= res as Order[];
    })
  }

  onEdit(rog:Order){
    this.orderService.selectedOrder=rog;
  }

  onDelete(_id:string, form:NgForm){
    this.orderService.deleteOrder(_id).subscribe((res)=>
    {
      this.refreshOrderList();
      this.resetForm();
      M.toast({html:'deleted Successfully', classes:"rounded"});
    })
  }
}

