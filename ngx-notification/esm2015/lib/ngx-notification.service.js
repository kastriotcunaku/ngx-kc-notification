/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { NotificationType } from './notification.model';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class NgxNotificationService {
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
/** @nocollapse */ NgxNotificationService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NgxNotificationService_Factory() { return new NgxNotificationService(); }, token: NgxNotificationService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgxNotificationService.prototype.$notification;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW5vdGlmaWNhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWtjLW5vdGlmaWNhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtbm90aWZpY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUF5QyxnQkFBZ0IsRUFBdUIsTUFBTSxzQkFBc0IsQ0FBQTtBQUNuSCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUsvQixNQUFNLE9BQU8sc0JBQXNCO0lBSG5DO1FBSVUsa0JBQWEsR0FBRyxJQUFJLE9BQU8sRUFBcUIsQ0FBQztLQXVFMUQ7Ozs7SUFyRVEsY0FBYztRQUNuQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDM0MsQ0FBQzs7Ozs7Ozs7SUFFTSxPQUFPLENBQUMsT0FBZSxFQUFFLEtBQWMsRUFBRSxPQUE4QixFQUFFLE9BQTZCO1FBQzNHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO1lBQ3RCLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxPQUFPO1lBQzlCLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLEtBQUssRUFBRSxLQUFLO1lBQ1osT0FBTyxFQUFFLE9BQU87WUFDaEIsSUFBSSxFQUFFLEtBQUs7WUFDWCxPQUFPLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7U0FDbEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7Ozs7SUFFTSxJQUFJLENBQUMsT0FBZSxFQUFFLEtBQWMsRUFBRSxPQUE4QixFQUFFLE9BQTZCO1FBQ3hHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO1lBQ3RCLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJO1lBQzNCLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLEtBQUssRUFBRSxLQUFLO1lBQ1osT0FBTyxFQUFFLE9BQU87WUFDaEIsSUFBSSxFQUFFLEtBQUs7WUFDWCxPQUFPLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7U0FDbEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7Ozs7SUFFTSxPQUFPLENBQUMsT0FBZSxFQUFFLEtBQWMsRUFBRSxPQUE4QixFQUFFLE9BQTZCO1FBQzNHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO1lBQ3RCLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxPQUFPO1lBQzlCLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLEtBQUssRUFBRSxLQUFLO1lBQ1osT0FBTyxFQUFFLE9BQU87WUFDaEIsSUFBSSxFQUFFLEtBQUs7WUFDWCxPQUFPLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7U0FDbEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7Ozs7SUFFTSxLQUFLLENBQUMsT0FBZSxFQUFFLEtBQWMsRUFBRSxPQUE4QixFQUFFLE9BQTZCO1FBQ3pHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO1lBQ3RCLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxNQUFNO1lBQzdCLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLEtBQUssRUFBRSxLQUFLO1lBQ1osT0FBTyxFQUFFLE9BQU87WUFDaEIsSUFBSSxFQUFFLEtBQUs7WUFDWCxPQUFPLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7U0FDbEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBRU8sVUFBVSxDQUFDLEdBQXdCOztjQUNuQyxPQUFPLEdBQUc7WUFDZCxRQUFRLEVBQUUsSUFBSTtZQUNkLFdBQVcsRUFBRSxLQUFLO1lBQ2xCLGVBQWUsRUFBRSxJQUFJO1NBQ3RCO1FBRUQsSUFBSSxHQUFHLEVBQUU7WUFDUCxJQUFJLEdBQUcsQ0FBQyxRQUFRLEtBQUssSUFBSSxJQUFJLE9BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssV0FBVyxFQUFFO2dCQUNqRSxPQUFPLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUM7YUFDakM7WUFDRCxJQUFJLEdBQUcsQ0FBQyxXQUFXLEtBQUssSUFBSSxJQUFJLE9BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEtBQUssV0FBVyxFQUFFO2dCQUN2RSxPQUFPLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUM7YUFDdkM7WUFDRCxJQUFJLEdBQUcsQ0FBQyxlQUFlLEtBQUssSUFBSSxJQUFJLE9BQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLEtBQUssV0FBVyxFQUFFO2dCQUMvRSxPQUFPLENBQUMsZUFBZSxHQUFHLEdBQUcsQ0FBQyxlQUFlLENBQUM7YUFDL0M7U0FDRjtRQUVELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7OztZQTFFRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7Ozs7O0lBRUMsK0NBQXlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uTW9kZWwsIE5vdGlmaWNhdGlvbkJ1dHRvbiwgTm90aWZpY2F0aW9uVHlwZSwgTm90aWZpY2F0aW9uT3B0aW9ucyB9IGZyb20gJy4vbm90aWZpY2F0aW9uLm1vZGVsJ1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hOb3RpZmljYXRpb25TZXJ2aWNlIHtcbiAgcHJpdmF0ZSAkbm90aWZpY2F0aW9uID0gbmV3IFN1YmplY3Q8Tm90aWZpY2F0aW9uTW9kZWw+KCk7XG5cbiAgcHVibGljIG9uTm90aWZpY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiRub3RpZmljYXRpb24uYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBwdWJsaWMgc3VjY2VzcyhtZXNzYWdlOiBzdHJpbmcsIHRpdGxlPzogc3RyaW5nLCBidXR0b25zPzogTm90aWZpY2F0aW9uQnV0dG9uW10sIG9wdGlvbnM/OiBOb3RpZmljYXRpb25PcHRpb25zKSB7XG4gICAgdGhpcy4kbm90aWZpY2F0aW9uLm5leHQoe1xuICAgICAgdHlwZTogTm90aWZpY2F0aW9uVHlwZS5TdWNjZXNzLFxuICAgICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIGJ1dHRvbnM6IGJ1dHRvbnMsXG4gICAgICBoaWRlOiBmYWxzZSxcbiAgICAgIG9wdGlvbnM6IHRoaXMuc2V0T3B0aW9ucyhvcHRpb25zKVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGluZm8obWVzc2FnZTogc3RyaW5nLCB0aXRsZT86IHN0cmluZywgYnV0dG9ucz86IE5vdGlmaWNhdGlvbkJ1dHRvbltdLCBvcHRpb25zPzogTm90aWZpY2F0aW9uT3B0aW9ucykge1xuICAgIHRoaXMuJG5vdGlmaWNhdGlvbi5uZXh0KHtcbiAgICAgIHR5cGU6IE5vdGlmaWNhdGlvblR5cGUuSW5mbyxcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICBidXR0b25zOiBidXR0b25zLFxuICAgICAgaGlkZTogZmFsc2UsXG4gICAgICBvcHRpb25zOiB0aGlzLnNldE9wdGlvbnMob3B0aW9ucylcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyB3YXJuaW5nKG1lc3NhZ2U6IHN0cmluZywgdGl0bGU/OiBzdHJpbmcsIGJ1dHRvbnM/OiBOb3RpZmljYXRpb25CdXR0b25bXSwgb3B0aW9ucz86IE5vdGlmaWNhdGlvbk9wdGlvbnMpIHtcbiAgICB0aGlzLiRub3RpZmljYXRpb24ubmV4dCh7XG4gICAgICB0eXBlOiBOb3RpZmljYXRpb25UeXBlLldhcm5pbmcsXG4gICAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgYnV0dG9uczogYnV0dG9ucyxcbiAgICAgIGhpZGU6IGZhbHNlLFxuICAgICAgb3B0aW9uczogdGhpcy5zZXRPcHRpb25zKG9wdGlvbnMpXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZXJyb3IobWVzc2FnZTogc3RyaW5nLCB0aXRsZT86IHN0cmluZywgYnV0dG9ucz86IE5vdGlmaWNhdGlvbkJ1dHRvbltdLCBvcHRpb25zPzogTm90aWZpY2F0aW9uT3B0aW9ucykge1xuICAgIHRoaXMuJG5vdGlmaWNhdGlvbi5uZXh0KHtcbiAgICAgIHR5cGU6IE5vdGlmaWNhdGlvblR5cGUuRGFuZ2VyLFxuICAgICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIGJ1dHRvbnM6IGJ1dHRvbnMsXG4gICAgICBoaWRlOiBmYWxzZSxcbiAgICAgIG9wdGlvbnM6IHRoaXMuc2V0T3B0aW9ucyhvcHRpb25zKVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRPcHRpb25zKG9wdDogTm90aWZpY2F0aW9uT3B0aW9ucyk6IE5vdGlmaWNhdGlvbk9wdGlvbnMge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICBkdXJhdGlvbjogMzAwMCxcbiAgICAgIGNsb3NlQnV0dG9uOiBmYWxzZSxcbiAgICAgIGJhY2tkcm9wRGlzbWlzczogdHJ1ZVxuICAgIH07XG5cbiAgICBpZiAob3B0KSB7XG4gICAgICBpZiAob3B0LmR1cmF0aW9uICE9PSBudWxsICYmIHR5cGVvZihvcHQuZHVyYXRpb24pICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBvcHRpb25zLmR1cmF0aW9uID0gb3B0LmR1cmF0aW9uO1xuICAgICAgfVxuICAgICAgaWYgKG9wdC5jbG9zZUJ1dHRvbiAhPT0gbnVsbCAmJiB0eXBlb2Yob3B0LmNsb3NlQnV0dG9uKSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgb3B0aW9ucy5jbG9zZUJ1dHRvbiA9IG9wdC5jbG9zZUJ1dHRvbjtcbiAgICAgIH1cbiAgICAgIGlmIChvcHQuYmFja2Ryb3BEaXNtaXNzICE9PSBudWxsICYmIHR5cGVvZihvcHQuYmFja2Ryb3BEaXNtaXNzKSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgb3B0aW9ucy5iYWNrZHJvcERpc21pc3MgPSBvcHQuYmFja2Ryb3BEaXNtaXNzO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvcHRpb25zO1xuICB9XG59XG4iXX0=