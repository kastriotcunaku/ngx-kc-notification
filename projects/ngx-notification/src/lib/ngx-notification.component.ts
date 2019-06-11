import { Component, OnInit } from '@angular/core';
import { NotificationModel } from './notification.model';
import { NgxNotificationService } from './ngx-notification.service';
import { template, style } from './ngx-notification.component.html';

@Component({
  selector: 'ngx-notification',
  template: template + ``,
  styles: [ style + `` ]
})
export class NgxNotificationComponent implements OnInit {
  notification: NotificationModel[] = [];
  public visible = false;
  public visibleAnimate = false;

  constructor(private notificationService: NgxNotificationService) {}

  ngOnInit(): void {
    this.notificationService.onNotification().subscribe(n => this.show(n));
  }

  onButtonClick(index: number, callback?: any, dismiss?: boolean) {
    if (callback) {
      callback();
    }

    if(dismiss) {
      this.dismiss(index);
    }
  }

  async show(n: NotificationModel) {
    if (!n) {
      return;
    }
    const newItemIndex = this.notification.push(n);
    this.visible = true;
    this.visibleAnimate = true;
    if (n.options.duration !== -1) {
      setTimeout(() => this.dismiss(newItemIndex - 1), n.options.duration);
    }
  }

  async dismiss(index?: number, rel?: string) {
    if (index === null || typeof index === 'undefined') {
      if (this.notification.length > 0) {
        for (let i = 0; i < this.notification.length; i++) {
          this.dismiss(i, rel);
        }
      }
      return;
    } else {
      if (this.notification[index]) {
        if (
          rel === 'backdrop' &&
          this.notification[index].options.backdropDismiss === false
        ) {
          return;
        }

        this.notification[index].hide = true;
        await setTimeout(() => {
          this.notification.splice(index, 1);
          if (this.notification.length === 0) {
            this.visibleAnimate = false;
            setTimeout(() => (this.visible = false), 300);
          }
        }, 300);
      }
    }
  }
}
