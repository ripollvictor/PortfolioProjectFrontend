import {Component} from '@angular/core';
import {PortfolioApiService} from "../../domain/service/api/portfolio.api";
import {uuid} from "../../domain/function/uuid.helper";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  existsPortfolio: boolean = false;
  isLoading: boolean = true;

  constructor(private api: PortfolioApiService) {
  }

  ngOnInit() {
    this.checkPortfolioExistence();
  }

  async checkPortfolioExistence() {
    const portfolios = await this.api.fetchPortfolios();
    this.existsPortfolio = portfolios.length > 0;
    this.isLoading = false;
  }

  async createPortfolio(): Promise<void> {
    const portfolios = await this.api.fetchPortfolios();
    console.log(portfolios);

    await this.api.createPortfolio({id: uuid()})
  }
}