import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {catchError, firstValueFrom, throwError} from 'rxjs';
import {CreatePortfolioCommand} from "../../command/portfolio.command";
import {Portfolio} from "../../model/portfolio.model";

@Injectable({
  providedIn: 'root'
})
export class PortfolioApiService {

  private apiUrl = 'http://localhost:1100/api/v1/portfolios';
  private urlGetPortfolios = 'http://localhost:1100/api/v1/portfolios';

  constructor(private http: HttpClient) {
  }

  createPortfolio(command: CreatePortfolioCommand): Promise<any> {
    return firstValueFrom(this.http.post<any>(this.apiUrl, command).pipe(
      catchError((error: any) => throwError(error)))
    );
  }

  async fetchPortfolios(): Promise<Portfolio[]> {
    return (await (firstValueFrom(this.http.get<any>(this.urlGetPortfolios).pipe(
      catchError((error: any) => throwError(error)))
    ))) as Portfolio[];
  }
}
