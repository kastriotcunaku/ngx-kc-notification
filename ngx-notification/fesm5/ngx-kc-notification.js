import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';
import { Subject } from 'rxjs';
import { __awaiter, __generator } from 'tslib';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var NotificationType = {
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
var NgxNotificationService = /** @class */ (function () {
    function NgxNotificationService() {
        this.$notification = new Subject();
    }
    /**
     * @return {?}
     */
    NgxNotificationService.prototype.onNotification = /**
     * @return {?}
     */
    function () {
        return this.$notification.asObservable();
    };
    /**
     * @param {?} message
     * @param {?=} title
     * @param {?=} buttons
     * @param {?=} options
     * @return {?}
     */
    NgxNotificationService.prototype.success = /**
     * @param {?} message
     * @param {?=} title
     * @param {?=} buttons
     * @param {?=} options
     * @return {?}
     */
    function (message, title, buttons, options) {
        this.$notification.next({
            type: NotificationType.Success,
            message: message,
            title: title,
            buttons: buttons,
            hide: false,
            options: this.setOptions(options)
        });
    };
    /**
     * @param {?} message
     * @param {?=} title
     * @param {?=} buttons
     * @param {?=} options
     * @return {?}
     */
    NgxNotificationService.prototype.info = /**
     * @param {?} message
     * @param {?=} title
     * @param {?=} buttons
     * @param {?=} options
     * @return {?}
     */
    function (message, title, buttons, options) {
        this.$notification.next({
            type: NotificationType.Info,
            message: message,
            title: title,
            buttons: buttons,
            hide: false,
            options: this.setOptions(options)
        });
    };
    /**
     * @param {?} message
     * @param {?=} title
     * @param {?=} buttons
     * @param {?=} options
     * @return {?}
     */
    NgxNotificationService.prototype.warning = /**
     * @param {?} message
     * @param {?=} title
     * @param {?=} buttons
     * @param {?=} options
     * @return {?}
     */
    function (message, title, buttons, options) {
        this.$notification.next({
            type: NotificationType.Warning,
            message: message,
            title: title,
            buttons: buttons,
            hide: false,
            options: this.setOptions(options)
        });
    };
    /**
     * @param {?} message
     * @param {?=} title
     * @param {?=} buttons
     * @param {?=} options
     * @return {?}
     */
    NgxNotificationService.prototype.error = /**
     * @param {?} message
     * @param {?=} title
     * @param {?=} buttons
     * @param {?=} options
     * @return {?}
     */
    function (message, title, buttons, options) {
        this.$notification.next({
            type: NotificationType.Danger,
            message: message,
            title: title,
            buttons: buttons,
            hide: false,
            options: this.setOptions(options)
        });
    };
    /**
     * @private
     * @param {?} opt
     * @return {?}
     */
    NgxNotificationService.prototype.setOptions = /**
     * @private
     * @param {?} opt
     * @return {?}
     */
    function (opt) {
        /** @type {?} */
        var options = {
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
    };
    NgxNotificationService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ NgxNotificationService.ngInjectableDef = ɵɵdefineInjectable({ factory: function NgxNotificationService_Factory() { return new NgxNotificationService(); }, token: NgxNotificationService, providedIn: "root" });
    return NgxNotificationService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var template = "\n<div\n  class=\"notification-wrapper\"\n  [ngClass]=\"visibleAnimate ? 'on' : 'off'\"\n  [ngStyle]=\"{\n    display: visible ? 'block' : 'none',\n    opacity: visibleAnimate ? 1 : 0\n  }\"\n>\n  <div\n    class=\"notification\"\n    *ngFor=\"let n of notification; let i = index\"\n    [ngClass]=\"n.hide ? 'off' : 'on'\"\n    [class.success]=\"n?.type === 1\"\n    [class.info]=\"n?.type === 2\"\n    [class.warning]=\"n?.type === 3\"\n    [class.danger]=\"n?.type === 4\"\n    [ngStyle]=\"{ 'z-index': notification?.length + 1 - i }\"\n  >\n    <div class=\"message\">\n      <strong *ngIf=\"n?.title\">{{ n?.title }}</strong>\n      {{ n?.message }}\n    </div>\n    <div class=\"buttons\" *ngIf=\"n?.buttons\">\n      <button\n        class=\"button\"\n        *ngFor=\"let button of n.buttons\"\n        (click)=\"onButtonClick(i, button?.callback, button?.dismiss)\"\n      >\n        {{ button?.text }}\n      </button>\n    </div>\n    <button\n      *ngIf=\"n?.options?.closeButton\"\n      class=\"button close-btn\"\n      (click)=\"dismiss(i)\"\n    >\n        <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n            x=\"0px\" y=\"0px\" viewBox=\"0 0 47.971 47.971\" style=\"enable-background:new 0 0 47.971 47.971;\" xml:space=\"preserve\">\n            <g>\n                <path d=\"M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88\n                    c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242\n                    C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879\n                    s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z\"/>\n            </g>\n        </svg>\n    </button>\n  </div>\n  <div class=\"backdrop\" (click)=\"dismiss(null, 'backdrop')\"></div>\n</div>\n";
/** @type {?} */
var style = "\n.notification-wrapper {\n  position: fixed;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 9999999;\n  font-family: Helvetica, Arial, sans-serif;\n}\n.notification-wrapper .backdrop {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.notification-wrapper .notification {\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 70px;\n  color: #fff;\n  z-index: 1;\n  text-align: center;\n  font-size: 16px;\n  line-height: 70px;\n}\n.notification-wrapper .notification .message, .notification-wrapper .notification .buttons {\n  display: inline;\n}\n.notification-wrapper .notification.success {\n  background-color: #38d189;\n}\n.notification-wrapper .notification.info {\n  background-color: #3899d1;\n}\n.notification-wrapper .notification.warning {\n  background-color: #ff9f1c;\n}\n.notification-wrapper .notification.danger {\n  background-color: #f9705e;\n}\n.notification-wrapper .notification.on {\n  animation: slideIn 0.2s ease-in;\n}\n.notification-wrapper .notification.off {\n  animation: slideOut 0.3s ease-in;\n}\n.notification-wrapper .button {\n  display: inline-block;\n  text-transform: uppercase;\n  border-style: none;\n  border-radius: 3px;\n  background: transparent;\n  min-height: 32px;\n  min-width: 32px;\n  text-align: center;\n  margin-left: 15px;\n  line-height: normal;\n}\n.notification-wrapper .buttons .button {\n  border: 2px solid #fff;\n  color: #ffffff;\n}\n.notification-wrapper .close-btn {\n  position: absolute;\n  right: 15px;\n  top: 18px;\n}\n.notification-wrapper .close-btn svg {\n  fill: #ffffff;\n  width: 16px;\n  height: 16px;\n}\n.notification-wrapper.on {\n  animation: fadeIn 0.3s ease-in;\n}\n.notification-wrapper.off {\n  animation: fadeOut 0.3s ease-in;\n}\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 100;\n  }\n}\n@keyframes fadeOut {\n  0% {\n    opacity: 100;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes slideIn {\n  0% {\n    margin-top: -70px;\n  }\n  100% {\n    margin-top: 0;\n  }\n}\n@keyframes slideOut {\n  0% {\n    margin-top: 0;\n  }\n  100% {\n    margin-top: -70px;\n  }\n}\n";

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxNotificationComponent = /** @class */ (function () {
    function NgxNotificationComponent(notificationService) {
        this.notificationService = notificationService;
        this.notification = [];
        this.visible = false;
        this.visibleAnimate = false;
    }
    /**
     * @return {?}
     */
    NgxNotificationComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.notificationService.onNotification().subscribe((/**
         * @param {?} n
         * @return {?}
         */
        function (n) { return _this.show(n); }));
    };
    /**
     * @param {?} index
     * @param {?=} callback
     * @param {?=} dismiss
     * @return {?}
     */
    NgxNotificationComponent.prototype.onButtonClick = /**
     * @param {?} index
     * @param {?=} callback
     * @param {?=} dismiss
     * @return {?}
     */
    function (index, callback, dismiss) {
        if (callback) {
            callback();
        }
        if (dismiss) {
            this.dismiss(index);
        }
    };
    /**
     * @param {?} n
     * @return {?}
     */
    NgxNotificationComponent.prototype.show = /**
     * @param {?} n
     * @return {?}
     */
    function (n) {
        return __awaiter(this, void 0, void 0, function () {
            var newItemIndex;
            var _this = this;
            return __generator(this, function (_a) {
                if (!n) {
                    return [2 /*return*/];
                }
                newItemIndex = this.notification.push(n);
                this.visible = true;
                this.visibleAnimate = true;
                if (n.options.duration !== -1) {
                    setTimeout((/**
                     * @return {?}
                     */
                    function () { return _this.dismiss(newItemIndex - 1); }), n.options.duration);
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * @param {?=} index
     * @param {?=} rel
     * @return {?}
     */
    NgxNotificationComponent.prototype.dismiss = /**
     * @param {?=} index
     * @param {?=} rel
     * @return {?}
     */
    function (index, rel) {
        return __awaiter(this, void 0, void 0, function () {
            var i;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(index === null || typeof index === 'undefined')) return [3 /*break*/, 1];
                        if (this.notification.length > 0) {
                            for (i = 0; i < this.notification.length; i++) {
                                this.dismiss(i, rel);
                            }
                        }
                        return [2 /*return*/];
                    case 1:
                        if (!this.notification[index]) return [3 /*break*/, 3];
                        if (rel === 'backdrop' &&
                            this.notification[index].options.backdropDismiss === false) {
                            return [2 /*return*/];
                        }
                        this.notification[index].hide = true;
                        return [4 /*yield*/, setTimeout((/**
                             * @return {?}
                             */
                            function () {
                                _this.notification.splice(index, 1);
                                if (_this.notification.length === 0) {
                                    _this.visibleAnimate = false;
                                    setTimeout((/**
                                     * @return {?}
                                     */
                                    function () { return (_this.visible = false); }), 300);
                                }
                            }), 300)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    NgxNotificationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-notification',
                    template: template + "",
                    styles: [style + ""]
                }] }
    ];
    /** @nocollapse */
    NgxNotificationComponent.ctorParameters = function () { return [
        { type: NgxNotificationService }
    ]; };
    return NgxNotificationComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxNotificationModule = /** @class */ (function () {
    function NgxNotificationModule() {
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
    return NgxNotificationModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgxNotificationComponent, NgxNotificationModule, NgxNotificationService, template as ɵa, style as ɵb };
//# sourceMappingURL=ngx-kc-notification.js.map
