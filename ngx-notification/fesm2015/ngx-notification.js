import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';
import { Subject } from 'rxjs';
import { __awaiter } from 'tslib';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const NotificationType = {
    Success: 1,
    Info: 2,
    Warning: 3,
    Danger: 4,
};
NotificationType[NotificationType.Success] = 'Success';
NotificationType[NotificationType.Info] = 'Info';
NotificationType[NotificationType.Warning] = 'Warning';
NotificationType[NotificationType.Danger] = 'Danger';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxNotificationService {
    constructor() {
        this.$notification = new Subject();
    }
    /**
     * @return {?}
     */
    onNotification() {
        return this.$notification.asObservable();
    }
    /**
     * @param {?} message
     * @param {?=} title
     * @param {?=} buttons
     * @param {?=} options
     * @return {?}
     */
    success(message, title, buttons, options) {
        this.$notification.next({
            type: NotificationType.Success,
            message: message,
            title: title,
            buttons: buttons,
            hide: false,
            options: this.setOptions(options)
        });
    }
    /**
     * @param {?} message
     * @param {?=} title
     * @param {?=} buttons
     * @param {?=} options
     * @return {?}
     */
    info(message, title, buttons, options) {
        this.$notification.next({
            type: NotificationType.Info,
            message: message,
            title: title,
            buttons: buttons,
            hide: false,
            options: this.setOptions(options)
        });
    }
    /**
     * @param {?} message
     * @param {?=} title
     * @param {?=} buttons
     * @param {?=} options
     * @return {?}
     */
    warning(message, title, buttons, options) {
        this.$notification.next({
            type: NotificationType.Warning,
            message: message,
            title: title,
            buttons: buttons,
            hide: false,
            options: this.setOptions(options)
        });
    }
    /**
     * @param {?} message
     * @param {?=} title
     * @param {?=} buttons
     * @param {?=} options
     * @return {?}
     */
    error(message, title, buttons, options) {
        this.$notification.next({
            type: NotificationType.Danger,
            message: message,
            title: title,
            buttons: buttons,
            hide: false,
            options: this.setOptions(options)
        });
    }
    /**
     * @private
     * @param {?} opt
     * @return {?}
     */
    setOptions(opt) {
        /** @type {?} */
        const options = {
            duration: 3000,
            closeButton: false,
            backdropDismiss: true
        };
        if (opt) {
            if (opt.duration !== null && typeof (opt.duration) !== 'undefined') {
                options.duration = opt.duration;
            }
            if (opt.closeButton !== null && typeof (opt.closeButton) !== 'undefined') {
                options.closeButton = opt.closeButton;
            }
            if (opt.backdropDismiss !== null && typeof (opt.backdropDismiss) !== 'undefined') {
                options.backdropDismiss = opt.backdropDismiss;
            }
        }
        return options;
    }
}
NgxNotificationService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ NgxNotificationService.ngInjectableDef = ɵɵdefineInjectable({ factory: function NgxNotificationService_Factory() { return new NgxNotificationService(); }, token: NgxNotificationService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const template = `
<div
  class="notification-wrapper"
  [ngClass]="visibleAnimate ? 'on' : 'off'"
  [ngStyle]="{
    display: visible ? 'block' : 'none',
    opacity: visibleAnimate ? 1 : 0
  }"
>
  <div
    class="notification"
    *ngFor="let n of notification; let i = index"
    [ngClass]="n.hide ? 'off' : 'on'"
    [class.success]="n?.type === 1"
    [class.info]="n?.type === 2"
    [class.warning]="n?.type === 3"
    [class.danger]="n?.type === 4"
    [ngStyle]="{ 'z-index': notification?.length + 1 - i }"
  >
    <div class="message">
      <strong *ngIf="n?.title">{{ n?.title }}</strong>
      {{ n?.message }}
    </div>
    <div class="buttons" *ngIf="n?.buttons">
      <button
        class="button"
        *ngFor="let button of n.buttons"
        (click)="onButtonClick(i, button?.callback, button?.dismiss)"
      >
        {{ button?.text }}
      </button>
    </div>
    <button
      *ngIf="n?.options?.closeButton"
      class="button close-btn"
      (click)="dismiss(i)"
    >
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px" y="0px" viewBox="0 0 47.971 47.971" style="enable-background:new 0 0 47.971 47.971;" xml:space="preserve">
            <g>
                <path d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88
                    c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242
                    C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879
                    s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z"/>
            </g>
        </svg>
    </button>
  </div>
  <div class="backdrop" (click)="dismiss(null, 'backdrop')"></div>
</div>
`;
/** @type {?} */
const style = `
.notification-wrapper {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 9999999;
  font-family: Helvetica, Arial, sans-serif;
}
.notification-wrapper .backdrop {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
.notification-wrapper .notification {
  display: block;
  position: relative;
  width: 100%;
  height: 70px;
  color: #fff;
  z-index: 1;
  text-align: center;
  font-size: 16px;
  line-height: 70px;
}
.notification-wrapper .notification .message, .notification-wrapper .notification .buttons {
  display: inline;
}
.notification-wrapper .notification.success {
  background-color: #38d189;
}
.notification-wrapper .notification.info {
  background-color: #3899d1;
}
.notification-wrapper .notification.warning {
  background-color: #ff9f1c;
}
.notification-wrapper .notification.danger {
  background-color: #f9705e;
}
.notification-wrapper .notification.on {
  animation: slideIn 0.2s ease-in;
}
.notification-wrapper .notification.off {
  animation: slideOut 0.3s ease-in;
}
.notification-wrapper .button {
  display: inline-block;
  text-transform: uppercase;
  border-style: none;
  border-radius: 3px;
  background: transparent;
  min-height: 32px;
  min-width: 32px;
  text-align: center;
  margin-left: 15px;
  line-height: normal;
}
.notification-wrapper .buttons .button {
  border: 2px solid #fff;
  color: #ffffff;
}
.notification-wrapper .close-btn {
  position: absolute;
  right: 15px;
  top: 18px;
}
.notification-wrapper .close-btn svg {
  fill: #ffffff;
  width: 16px;
  height: 16px;
}
.notification-wrapper.on {
  animation: fadeIn 0.3s ease-in;
}
.notification-wrapper.off {
  animation: fadeOut 0.3s ease-in;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 100;
  }
}
@keyframes fadeOut {
  0% {
    opacity: 100;
  }
  100% {
    opacity: 0;
  }
}
@keyframes slideIn {
  0% {
    margin-top: -70px;
  }
  100% {
    margin-top: 0;
  }
}
@keyframes slideOut {
  0% {
    margin-top: 0;
  }
  100% {
    margin-top: -70px;
  }
}
`;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxNotificationComponent {
    /**
     * @param {?} notificationService
     */
    constructor(notificationService) {
        this.notificationService = notificationService;
        this.notification = [];
        this.visible = false;
        this.visibleAnimate = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.notificationService.onNotification().subscribe((/**
         * @param {?} n
         * @return {?}
         */
        n => this.show(n)));
    }
    /**
     * @param {?} index
     * @param {?=} callback
     * @param {?=} dismiss
     * @return {?}
     */
    onButtonClick(index, callback, dismiss) {
        if (callback) {
            callback();
        }
        if (dismiss) {
            this.dismiss(index);
        }
    }
    /**
     * @param {?} n
     * @return {?}
     */
    show(n) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!n) {
                return;
            }
            /** @type {?} */
            const newItemIndex = this.notification.push(n);
            this.visible = true;
            this.visibleAnimate = true;
            if (n.options.duration !== -1) {
                setTimeout((/**
                 * @return {?}
                 */
                () => this.dismiss(newItemIndex - 1)), n.options.duration);
            }
        });
    }
    /**
     * @param {?=} index
     * @param {?=} rel
     * @return {?}
     */
    dismiss(index, rel) {
        return __awaiter(this, void 0, void 0, function* () {
            if (index === null || typeof index === 'undefined') {
                if (this.notification.length > 0) {
                    for (let i = 0; i < this.notification.length; i++) {
                        this.dismiss(i, rel);
                    }
                }
                return;
            }
            else {
                if (this.notification[index]) {
                    if (rel === 'backdrop' &&
                        this.notification[index].options.backdropDismiss === false) {
                        return;
                    }
                    this.notification[index].hide = true;
                    yield setTimeout((/**
                     * @return {?}
                     */
                    () => {
                        this.notification.splice(index, 1);
                        if (this.notification.length === 0) {
                            this.visibleAnimate = false;
                            setTimeout((/**
                             * @return {?}
                             */
                            () => (this.visible = false)), 300);
                        }
                    }), 300);
                }
            }
        });
    }
}
NgxNotificationComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-notification',
                template: template + ``,
                styles: [style + ``]
            }] }
];
/** @nocollapse */
NgxNotificationComponent.ctorParameters = () => [
    { type: NgxNotificationService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxNotificationModule {
}
NgxNotificationModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NgxNotificationComponent],
                imports: [
                    CommonModule
                ],
                exports: [NgxNotificationComponent],
                providers: [NgxNotificationService]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgxNotificationComponent, NgxNotificationModule, NgxNotificationService, template as ɵa, style as ɵb };
//# sourceMappingURL=ngx-notification.js.map
