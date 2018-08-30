import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PWARoutingModule } from './pwa-routing.module';
import { AppListComponent } from './app-list/app-list.component';
import { AppListItemComponent } from './app-list/app-list-item/app-list-item.component';
import { PWAService } from './pwa.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    PWARoutingModule
  ],
  declarations: [AppListComponent, AppListItemComponent],
  providers: [PWAService]
})
export class PWAModule { }
