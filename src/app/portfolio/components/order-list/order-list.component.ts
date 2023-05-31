import {Component, Input, OnInit} from '@angular/core';
import {Order} from "../../../../domain/model/order.model";
import {OrderApiService} from "../../../../domain/service/api/order.api";
import {uuid} from "../../../../domain/function/uuid.helper";

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent implements OnInit {

  @Input() portfolioId: string = "";
  orders: Order[] = [];
  sellInput: string = "";
  buyInput: string = "";

  constructor(private api: OrderApiService) {
  }

  ngOnInit() {
    this.initializeOrders();
  }

  async initializeOrders(): Promise<void> {
    const orders = await this.api.fetchOrders();
    console.log(orders);
    this.orders = orders.filter(order => order.portfolioId === this.portfolioId)
  }

  async createOrder(type: string) {
    await this.api.createOrder({
      id: uuid(),
      portfolioId: this.portfolioId,
      allocationId: type === 'sell' ? this.sellInput : this.buyInput,
      type: type,
      shares: 1,
    });
     await this.initializeOrders();
  }

}
