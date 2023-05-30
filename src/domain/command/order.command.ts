export interface CreateOrderCommand {
  id: string;
  portfolioId: string;
  allocationId: string;
  type: string;
  shares: number;
}

export interface CompleteOrderCommand {
  id: string;
  completed: boolean;
}


