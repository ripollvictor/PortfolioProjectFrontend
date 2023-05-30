export interface Portfolio {
  id: string;
  allocations: Allocation[];
}

export interface Allocation {
  id: string;
  shares: number;
}
