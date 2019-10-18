import { NgForm } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { OrderService } from "../shared/order/order.service";
import { Order } from "../shared/order/order";

import { FormGroup, FormBuilder, FormArray, Validators } from "@angular/forms";

declare var M: any;
@Component({
  selector: "app-order",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.scss"],
  providers: [OrderService]
})
export class OrderComponent implements OnInit {
  orderForm: FormGroup;
  submitted = false;
  constructor(public orderService: OrderService, private fb: FormBuilder) {
    this.createForm();
  }
  
  createForm() {
    this.orderForm = this.fb.group({
     _id:[""],
      customerName: ["",Validators.required],
      customerContact: [null,[Validators.required, Validators.maxLength(10)]],
      totalAmount: ["",Validators.required],
      products: this.fb.array([this.addProductFormGroup()])
    });
  }
  // onSubmit() {
  //   console.log(this.orderForm.value)
  // }
  //status: Status[];
  addProductButtonClick(): void {
    (<FormArray>this.orderForm.get("products")).push(
      this.addProductFormGroup()
    );
  }

  removeProductButtonClick(index: number): void {
    (<FormArray>this.orderForm.get("products")).removeAt(index);
  }

  addProductFormGroup(): FormGroup {
    return this.fb.group({
      productName: ["",Validators.required],
      rate: ["",Validators.required],
      quantity: ["",Validators.required],
      total: ["",Validators.required]
    });
  }

  ngOnInit() {
    
    this.resetForm();
    this.refreshOrderList();
  }

  resetForm(orderForm?: NgForm) {
    if (orderForm) {
      orderForm.reset();
    }
    this.orderService.selectedOrder = {
      _id: null,
      orderDate: "",
      customerName: "",
      customerContact: null,
      totalAmount:null,
      products:[
      
    ]
   
    };
  }

  onSubmit(orderForm) {
    this.submitted = true;
    if (this.orderForm.invalid) {
      return;
  }
    //  if(orderForm.value._id == null){
      console.log(orderForm.value);
    this.orderService.postOrder(orderForm.value).subscribe(res => {
    console.log(orderForm.value);
      console.log(res);
      this.resetForm(orderForm);
      this.refreshOrderList();
      //M.toast({ html: 'Saved successfully', classes: 'rounded' });
      var toastHTML =
        '<span style="color:black">Saved Successfuly</span><button class="btn-flat toast-action">Undo</button>';
      M.toast({ html: toastHTML });
    });
  //}else{
    // this.orderService.putOrder(orderForm.value).subscribe(res => {
    //   this.resetForm(orderForm);
    //   this.refreshOrderList();
    //   //M.toast({ html: 'Saved successfully', classes: 'rounded' });
    //   var toastHTML =
    //     '<span style="color:black">Updated Successfuly</span><button class="btn-flat toast-action">Undo</button>';
    //   M.toast({ html: toastHTML });
    // });
  }
  
  // onUp(orderForm:NgForm){
  //   this.orderService.putOrder(orderForm.value).subscribe((res) => {
  //     this.resetForm(orderForm);
  //     this.refreshOrderList();
  //     //M.toast({ html: 'Updated successfully', classes: 'rounded' });
  //     var toastHTML = '<span>I am toast content</span><button class="btn-flat toast-action">Undo</button>';
  //     M.toast({html: toastHTML});

  //   });
  // }

  get f() { return this.orderForm.controls; }

  
  refreshOrderList() {
    this.submitted=false;
    this.orderService.getOrderList().subscribe(res => {
      this.orderService.orders = res as Order[];
    });
  }

  onEdit(rog: Order) {
    this.orderService.selectedOrder = rog;
  }

  onDelete(_id: string, orderForm: NgForm) {
    this.orderService.deleteOrder(_id).subscribe(res => {
      this.refreshOrderList();
      this.resetForm();
      M.toast({ html: "deleted Successfully", classes: "rounded" });
    });
  }
}
