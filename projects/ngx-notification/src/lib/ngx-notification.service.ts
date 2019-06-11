import { Injectable } from '@angular/core';
import { NotificationModel, NotificationButton, NotificationType, NotificationOptions } from './notification.model'
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgxNotificationService {
  private $notification = new Subject<NotificationModel>();

  public onNotification() {
    return this.$notification.asObservable();
  }

  public success(message: string, title?: string, buttons?: NotificationButton[], options?: NotificationOptions) {
    this.$notification.next({
      type: NotificationType.Success,
      message: message,
      title: title,
      buttons: buttons,
      hide: false,
      options: this.setOptions(options)
    });
  }

  public info(message: string, title?: string, buttons?: NotificationButton[], options?: NotificationOptions) {
    this.$notification.next({
      type: NotificationType.Info,
      message: message,
      title: title,
      buttons: buttons,
      hide: false,
      options: this.setOptions(options)
    });
  }

  public warning(message: string, title?: string, buttons?: NotificationButton[], options?: NotificationOptions) {
    this.$notification.next({
      type: NotificationType.Warning,
      message: message,
      title: title,
      buttons: buttons,
      hide: false,
      options: this.setOptions(options)
    });
  }

  public error(message: string, title?: string, buttons?: NotificationButton[], options?: NotificationOptions) {
    this.$notification.next({
      type: NotificationType.Danger,
      message: message,
      title: title,
      buttons: buttons,
      hide: false,
      options: this.setOptions(options)
    });
  }

  private setOptions(opt: NotificationOptions): NotificationOptions {
    const options = {
      duration: 3000,
      closeButton: false,
      backdropDismiss: true
    };

    if (opt) {
      if (opt.duration !== null && typeof(opt.duration) !== 'undefined') {
        options.duration = opt.duration;
      }
      if (opt.closeButton !== null && typeof(opt.closeButton) !== 'undefined') {
        options.closeButton = opt.closeButton;
      }
      if (opt.backdropDismiss !== null && typeof(opt.backdropDismiss) !== 'undefined') {
        options.backdropDismiss = opt.backdropDismiss;
      }
    }

    return options;
  }
}
