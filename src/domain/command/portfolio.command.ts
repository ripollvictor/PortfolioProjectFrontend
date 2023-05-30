import {Allocation} from "../model/portfolio.model";

export interface CreatePortfolioCommand {
  id: string;
}

export interface UpdatePortfolioCommand {
  id: string;
  allocations: Allocation[]
}


