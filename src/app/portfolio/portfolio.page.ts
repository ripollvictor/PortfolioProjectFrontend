import {Component, OnInit} from '@angular/core';
import {PortfolioApiService} from "../../domain/service/api/portfolio.api";
import {uuid} from "../../domain/function/uuid.helper";
import {ActivatedRoute} from "@angular/router";
import {Allocation, Portfolio} from "../../domain/model/portfolio.model";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.page.html',
  styleUrls: ['./portfolio.page.scss'],
})
export class PortfolioPage implements OnInit {

  existsPortfolio: boolean = false;
  isLoading: boolean = true;
  portfolioId: string = "";
  portfolio: Portfolio | null = null;
  allocations: Allocation[] = [];

  constructor(private api: PortfolioApiService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.portfolioId = this.route.snapshot.params['id'];
    this.initializePortfolio();

  }

  async initializePortfolio() {
    this.portfolio = await this.api.fetchPortfolio(this.portfolioId);
    if (this.portfolio) {
      this.existsPortfolio = true;
      this.allocations = this.portfolio.allocations;
    }
    this.isLoading = false;
  }

  async createOrder(): Promise<void> {
    await this.api.createPortfolio({id: uuid()})
  }

}
