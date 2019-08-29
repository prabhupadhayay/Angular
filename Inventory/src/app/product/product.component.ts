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
    this.status=[{Id:1,name:"Active"},
    {Id:2,name:"Hold"},
    {Id:3,name:"Pause"}

    ]
    this.resetForm();
    this.refreshProductList();
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

      this.productService.postProduct(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshProductList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
  }
    onUp(form:NgForm){
      this.productService.putProduct(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshProductList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }

  refreshProductList(){
    this.productService.getProductList().subscribe((res)=>{

      this.productService.products= res as Product[];
    })
  }

  onEdit(rog:Product){
    this.productService.selectedProduct=rog;
  }

  onDelete(_id:string, form:NgForm){
    this.productService.deleteProduct(_id).subscribe((res)=>
    {
      this.refreshProductList();
      this.resetForm();
      M.toast({html:'deleted Successfully', classes:"rounded"});
    })
  }
}
