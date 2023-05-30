import {Component} from '@angular/core';
import {PortfolioApiService} from "../../domain/service/api/portfolio.api";
import {uuid} from "../../domain/function/uuid.helper";
import {Allocation, Portfolio} from "../../domain/model/portfolio.model";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  existsPortfolio: boolean = false;
  isLoading: boolean = true;
  portfolio: Portfolio | null = null;
  allocations: Allocation[] = [];

  constructor(private api: PortfolioApiService) {
  }

  ngOnInit() {
    this.checkPortfolioExistence();
  }

  async checkPortfolioExistence() {
    const portfolios = await this.api.fetchPortfolios();
    this.existsPortfolio = portfolios.length > 0;
    this.portfolio = portfolios.length > 0 ? portfolios[0] : null;
    this.allocations = this.portfolio?.allocations ? this.portfolio.allocations : [];
    this.isLoading = false;
  }

  async createPortfolio(): Promise<void> {
    const portfolios = await this.api.fetchPortfolios();
    console.log(portfolios);

    await this.api.createPortfolio({id: uuid()})
  }
}
