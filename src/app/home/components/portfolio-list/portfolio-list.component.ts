import {Component, Input, OnInit} from '@angular/core';
import {Portfolio} from "../../../../domain/model/portfolio.model";

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.scss'],
})
export class PortfolioListComponent implements OnInit {
  @Input() portfolios: Portfolio[] = [];

  constructor() {
  }

  ngOnInit() {
  }

}
