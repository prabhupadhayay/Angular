import { Component, OnInit } from '@angular/core';
import { Order } from "../shared/order/order";
import { OrderService } from "../shared/order/order.service";

@Component({
  selector: 'app-manageorder',
  templateUrl: './manageorder.component.html',
  styleUrls: ['./manageorder.component.scss'],
  providers: [OrderService]
})
export class ManageorderComponent implements OnInit {

  constructor(public orderService: OrderService) { }

  ngOnInit() {
    this.refreshOrderList();
  }

  refreshOrderList() {
    this.orderService.getOrderList().subscribe(res => {
      this.orderService.orders = res as Order[];
    });
  }

  onEdit(rog: Order) {
    this.orderService.selectedOrder = rog;
  }

  

}
