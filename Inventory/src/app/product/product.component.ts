import { NgForm } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { ProductService } from "../shared/product/product.service";
import { Product } from "../shared/product/product";
//import{Product1} from '../shared/product/product1';
import { Status } from "./status";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  FormArray,
  Validators
} from "@angular/forms";
import { Product1 } from "../shared/product/product1";
declare var M: any;
@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {
  productForm: FormGroup;
  submitted = false;
  constructor(public productService: ProductService, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.productForm = this.fb.group({
      _id: [""],
      productName: ["", Validators.required],
      quantity: [null, [Validators.required, Validators.maxLength(10)]],
      rate: ["", Validators.required]
    });
  }

  ngOnInit() {
    this.refreshProductList();
    this.resetForm();
    // this.status=[{Id:1,name:"Active"},
    // {Id:2,name:"Hold"},
    // {Id:3,name:"Pause"}

    // ]
  }
  get f() {
    return this.productForm.controls;
  }
  resetForm(productForm?: NgForm) {
    this.submitted = false;
    if (productForm) {
      productForm.reset();
    }
    this.productService.selectedProduct = {
      _id: null,
      productName: "",
      quantity: null,
      rate: null
    };
  }

  onSubmit(productForm: NgForm) {
    this.submitted = true;
    if (this.productForm.invalid) {
      return;
    }

    //console.log(form.value._id);
    if (productForm.value._id == null) {
      //if(productForm.value.productName == this.productService.selectedProduct.productName)
      this.productService.postProduct(productForm.value).subscribe(res => {
        // if(productForm.value.productName == this.productService.selectedProduct.productName)
        // {console.log("product already exsists");}
        this.resetForm(productForm);
        this.refreshProductList();
        var toastHTML = '<span style="color:black">Saved Successfuly</span>';
        M.toast({ html: toastHTML });
      });
    } else {
      this.productService.putProduct(productForm.value).subscribe(res => {
        this.resetForm(productForm);
        this.refreshProductList();
        var toastHTML = '<span style="color:black">Updated Successfuly</span>';
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

  refreshProductList() {
    // this.submitted = false;
    this.productService.getProductList().subscribe(res => {
      this.productService.products = res as Product[];
    });
  }
  getProductbyId(_id: string) {
    this.productService.getProductbyId(_id).subscribe(res => {
      this.productService.products;
    });
  }

  onEdit(rog: Product) {
    this.productService.selectedProduct = rog;
  }

  onDelete(_id: string, productForm: NgForm) {
    if (confirm("Are you sure to delete this record?") == true) {
      this.productService.deleteProduct(_id).subscribe(res => {
        this.refreshProductList();
        this.resetForm();
        var toastHTML = '<span style="color:black">Deleted Successfully</span>';
        M.toast({ html: toastHTML });
      });
    }
  }
}
