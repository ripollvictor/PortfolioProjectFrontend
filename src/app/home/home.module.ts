import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {HomeRoutingModule} from './home-routing.module';

import { HomePage } from './home.page';
import {RouterLink} from "@angular/router";
import {AllocationListComponent} from "../allocation-list/allocation-list.component";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    RouterLink
  ],
  declarations: [HomePage, AllocationListComponent]
})
export class HomePageModule {}
