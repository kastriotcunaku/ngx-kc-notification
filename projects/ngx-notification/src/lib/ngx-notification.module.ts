import { NgModule } from '@angular/core';
import { NgxNotificationComponent } from './ngx-notification.component';
import { NgxNotificationService } from './ngx-notification.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NgxNotificationComponent],
  imports: [
    CommonModule
  ],
  exports: [NgxNotificationComponent],
  providers: [NgxNotificationService]
})
export class NgxNotificationModule { }
