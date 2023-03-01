import { Component, OnInit } from '@angular/core';
import { NgxNotificationService } from 'ngx-notification';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  options = {
    title: '',
    message: '',
    type: 'success',
    timeout: 3000,
    disableTimeout: false,
    backdropDismiss: true,
    closeButton: true,
    actionButtons: false
  }
  showCode = false;

  constructor(private notification: NgxNotificationService) { }

  ngOnInit() {
  }

  showNotification() {
    if(!this.options.message) {
      this.notification.error('Enter notification message');
      return;
    }
    switch(this.options.type) {
      case 'success':
        this.notification.success(this.options.message, this.options.title, this.options.actionButtons ? [
          {
            text: 'Yes',
            callback: () => this.notification.info('Confirm button clicked!'),
            dismiss: false
          },
          {
            text: 'Not really',
            callback: null,
            dismiss: true
          }
        ] : undefined, {
          backdropDismiss: this.options.backdropDismiss,
          closeButton: this.options.closeButton,
          duration: this.options.disableTimeout ? -1 : this.options.timeout
        });
        break;
      case 'info':
        this.notification.info(this.options.message, this.options.title, this.options.actionButtons ? [
          {
            text: 'Confirm',
            callback: () => this.notification.info('Confirm button clicked!'),
            dismiss: false
          },
          {
            text: 'Cancel',
            callback: null,
            dismiss: true
          }
        ] : undefined, {
          backdropDismiss: this.options.backdropDismiss,
          closeButton: this.options.closeButton,
          duration: this.options.disableTimeout ? -1 : this.options.timeout
        });
        break;
      case 'warning':
        this.notification.warning(this.options.message, this.options.title, this.options.actionButtons ? [
          {
            text: 'Confirm',
            callback: () => this.notification.info('Confirm button clicked!'),
            dismiss: false
          },
          {
            text: 'Cancel',
            callback: null,
            dismiss: true
          }
        ] : undefined, {
          backdropDismiss: this.options.backdropDismiss,
          closeButton: this.options.closeButton,
          duration: this.options.disableTimeout ? -1 : this.options.timeout
        });
        break;
      case 'error':
        this.notification.error(this.options.message, this.options.title, this.options.actionButtons ? [
          {
            text: 'Confirm',
            callback: () => this.notification.info('Confirm button clicked!'),
            dismiss: false
          },
          {
            text: 'Cancel',
            callback: null,
            dismiss: true
          }
        ] : undefined, {
          backdropDismiss: this.options.backdropDismiss,
          closeButton: this.options.closeButton,
          duration: this.options.disableTimeout ? -1 : this.options.timeout
        });
        break;
    }
  }

  get getCode(): string {
    return `
    this.notification.${this.options.type}(
      ${this.options.message ? `'${this.options.message}'`: `null`},
      ${this.options.title ? `'${this.options.title}'`: `null`}, 
      ${this.options.actionButtons ? `[
        {
          text: 'Confirm',
          callback: () => this.notification.info('Confirm button clicked!'),
          dismiss: false
        },
        {
          text: 'Cancel',
          callback: null,
          dismiss: true
        }
      ]` : `null` },
      {
        backdropDismiss: ${this.options.backdropDismiss ? `true` : `false`},
        closeButton: ${this.options.closeButton ? `true` : `false`},
        duration: ${this.options.disableTimeout ? -1 : this.options.timeout}
      }
    );`
  }

  reset() {
    this.options = {
      title: '',
      message: '',
      type: 'success',
      timeout: 3000,
      disableTimeout: false,
      backdropDismiss: true,
      closeButton: true,
      actionButtons: false
    };
  }
}
