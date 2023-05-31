import {Injectable} from "@angular/core";
import {catchError, firstValueFrom, throwError} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {CompleteOrderCommand, CreateOrderCommand} from "../../command/order.command";
import {Order} from "../../model/order.model";

@Injectable({
  providedIn: 'root',
})
export class OrderApiService {

  private apiUrl = 'http://localhost:1100/api/v1/order';

  constructor(private http: HttpClient) {
  }

  createOrder(command: CreateOrderCommand): Promise<any> {
    return firstValueFrom(this.http.post<any>(this.apiUrl, command).pipe(
      catchError((error: any) => throwError(error)))
    );
  }

  completeOrder(command: CompleteOrderCommand): Promise<any> {
    return firstValueFrom(this.http.patch<any>(this.apiUrl + '/' + command.id, command).pipe(
      catchError((error: any) => throwError(error)))
    );
  }

  async fetchOrders(): Promise<Order[]> {
    return (await (firstValueFrom(this.http.get<any>(this.apiUrl).pipe(
      catchError((error: any) => throwError(error)))
    ))) as Order[];
  }


}
