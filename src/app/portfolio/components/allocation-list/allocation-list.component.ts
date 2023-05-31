import {Component, Input, OnInit} from '@angular/core';
import {Allocation} from "../../../../domain/model/portfolio.model";

@Component({
  selector: 'app-allocation-list',
  templateUrl: './allocation-list.component.html',
  styleUrls: ['./allocation-list.component.scss'],
})
export class AllocationListComponent  implements OnInit {

  @Input() allocations: Allocation[] | null = [];
  constructor() { }

  ngOnInit() {}

}
