import { Component, OnInit } from '@angular/core';
import { NotificationModel } from './notification.model';
import { NgxNotificationService } from './ngx-notification.service';

@Component({
  selector: 'ngx-notification',
  templateUrl: './ngx-notification.component.html',
  styleUrls: ['./ngx-notification.component.scss']
})
export class NgxNotificationComponent implements OnInit {
  notifications: NotificationModel[] = [];
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

  get length() {
    return this.notifications?.length;
  }

  async show(n: NotificationModel) {
    if (!n) {
      return;
    }
    const newItemIndex = this.notifications.push(n);
    this.visible = true;
    this.visibleAnimate = true;
    if (n.options?.duration !== -1) {
      setTimeout(() => this.dismiss(newItemIndex - 1), n.options?.duration);
    }
  }

  async dismiss(index: number | null, rel?: string) {
    if (index === null || typeof index === 'undefined') {
      if (this.notifications.length > 0) {
        for (let i = 0; i < this.notifications.length; i++) {
          this.dismiss(i, rel);
        }
      }
      return;
    } else {
      if (this.notifications[index]) {
        if (
          rel === 'backdrop' &&
          this.notifications[index].options?.backdropDismiss === false
        ) {
          return;
        }

        this.notifications[index].hide = true;
        await setTimeout(() => {
          this.notifications.splice(index, 1);
          if (this.notifications.length === 0) {
            this.visibleAnimate = false;
            setTimeout(() => (this.visible = false), 300);
          }
        }, 300);
      }
    }
  }
}
