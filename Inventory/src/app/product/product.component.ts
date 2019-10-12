import {NgForm} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import{ProductService} from '../shared/product/product.service';
import{Product} from '../shared/product/product';
import {Status} from './status';
declare var M: any;
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {

  constructor(public productService: ProductService) { }
  status:Status[];

  ngOnInit() {
    this.resetForm();
    this.refreshProductList();
    this.status=[{Id:1,name:"Active"},
    {Id:2,name:"Hold"},
    {Id:3,name:"Pause"}

    ]
    
  }

  resetForm(form?: NgForm) {
    if (form) {
    form.reset();
    }
    this.productService.selectedProduct = {
      _id:null,
      productName: '',
      quantity: null,
      rate:null

    };
  }
 
  onSubmit(form: NgForm) {
    //console.log(form.value._id);
     if(form.value._id == null){
     
      this.productService.postProduct(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshProductList();
        var toastHTML =
        '<span style="color:black">Saved Successfuly</span>';
      M.toast({ html: toastHTML });
      });
    }
     else{
      this.productService.putProduct(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshProductList();
        var toastHTML =
        '<span style="color:black">Updated Successfuly</span>';
      M.toast({ html: toastHTML });
      });
    }
  }
    // onUp(form:NgForm){
    //   this.productService.putProduct(form.value).subscribe((res) => {
    //     this.resetForm(form);
    //     this.refreshProductList();
    //     M.toast({ html: 'Updated successfully', classes: 'rounded' });
    //   });
    // }

  refreshProductList(){
    this.productService.getProductList().subscribe((res)=>{

      this.productService.products= res as Product[];
    })
  }

  onEdit(rog:Product){
    
    this.productService.selectedProduct=rog;
  }

  onDelete(_id:string, form:NgForm){
    if(confirm("Are you sure to delete this record?")== true){
    this.productService.deleteProduct(_id).subscribe((res)=>
    {
      this.refreshProductList();
      this.resetForm();
      M.toast({html:'deleted Successfully', classes:"rounded"});
    })
  }
}
}
