// import {NgForm} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import{OrderService} from '../shared/order/order.service';
// import{Order} from '../shared/order/order';
// import {Status} from './status';
import { FormGroup, FormBuilder,FormArray } from '@angular/forms';


declare var M: any;
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  providers: [OrderService]
})
export class OrderComponent implements OnInit {
 orderForm: FormGroup;
  constructor(public orderService: OrderService, private fb:FormBuilder) {
    this.createForm();

  }

  createForm() {
    this.orderForm = this.fb.group({
      customerName: [''],
      customerContact: [''],
        totalAmount:[''],
      products:this.fb.array([
        this.addProductFormGroup()
      ])
    });
  }
  onSubmit() {
    alert('Your Email is : ');
  }
  // status:Status[];
addProductButtonClick():void{
  (<FormArray>this.orderForm.get('products')).push(this.addProductFormGroup());
}

removeProductButtonClick(index:number):void{
  (<FormArray>this.orderForm.get('products')).removeAt(index);
}

addProductFormGroup():FormGroup{
  return this.fb.group({
    productName:[''],
    price:[''],
    quantity:[''],
    total:['']
  })
}

  ngOnInit() {
    // this.status=[{Id:1,name:"Active"},
    // {Id:2,name:"Hold"},
    // {Id:3,name:"Pause"}
    //
    // ]
    // this.resetForm();
    // this.refreshOrderList();
  }

  // resetForm(form?: NgForm) {
  //   if (form) {
  //   form.reset();
  //   }
  //   this.orderService.selectedOrder = {
  //     _id:null,
  //     orderDate:'',
  //     customerName:'',
  //     customerContact:null,
  //     productName:'',
  //     rate:null,
  //     quantity:null,
  //     totalAmount:null
  //
  //   };
  // }

  //  onSubmit(orderForm) {
  //
  //     this.orderService.postOrder(form.value).subscribe((res) => {
  //       // this.resetForm(form);
  //       // this.refreshOrderList();
  //       M.toast({ html: 'Saved successfully', classes: 'rounded' });
  //     });
  // }
    // onUp(form:NgForm){
    //   this.orderService.putOrder(form.value).subscribe((res) => {
    //     this.resetForm(form);
    //     this.refreshOrderList();
    //     M.toast({ html: 'Updated successfully', classes: 'rounded' });
    //   });
    // }

  // refreshOrderList(){
  //   this.orderService.getOrderList().subscribe((res)=>{
  //
  //     this.orderService.orders= res as Order[];
  //   })
  // }

  // onEdit(rog:Order){
  //   this.orderService.selectedOrder=rog;
  // }

  // onDelete(_id:string, form:NgForm){
  //   this.orderService.deleteOrder(_id).subscribe((res)=>
  //   {
  //     this.refreshOrderList();
  //     this.resetForm();
  //     M.toast({html:'deleted Successfully', classes:"rounded"});
  //   })
  // }
}
