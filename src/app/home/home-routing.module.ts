import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePage} from "./home.page";
import {PortfolioPage} from "../portfolio/portfolio.page";

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'portfolio/:id',
    component: PortfolioPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {
}

