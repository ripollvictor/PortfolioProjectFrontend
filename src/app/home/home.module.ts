import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {HomeRoutingModule} from './home-routing.module';

import { HomePage } from './home.page';
import {RouterLink} from "@angular/router";
import {AllocationListComponent} from "../portfolio/components/allocation-list/allocation-list.component";
import {PortfolioListComponent} from "./components/portfolio-list/portfolio-list.component";
import {PortfolioPage} from "../portfolio/portfolio.page";
import {OrderListComponent} from "../portfolio/components/order-list/order-list.component";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    RouterLink
  ],
  exports: [
    OrderListComponent
  ],
  declarations: [HomePage, AllocationListComponent, PortfolioListComponent, PortfolioPage, OrderListComponent]
})
export class HomePageModule {}
