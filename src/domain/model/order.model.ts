export interface Order {
  id: string;
  portfolioId: string;
  allocationId: string;
  type: string;
  shares: number;
  completed: boolean;
}
