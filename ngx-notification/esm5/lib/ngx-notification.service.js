/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { NotificationType } from './notification.model';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
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
    /** @nocollapse */ NgxNotificationService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NgxNotificationService_Factory() { return new NgxNotificationService(); }, token: NgxNotificationService, providedIn: "root" });
    return NgxNotificationService;
}());
export { NgxNotificationService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgxNotificationService.prototype.$notification;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW5vdGlmaWNhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWtjLW5vdGlmaWNhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtbm90aWZpY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUF5QyxnQkFBZ0IsRUFBdUIsTUFBTSxzQkFBc0IsQ0FBQTtBQUNuSCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUUvQjtJQUFBO1FBSVUsa0JBQWEsR0FBRyxJQUFJLE9BQU8sRUFBcUIsQ0FBQztLQXVFMUQ7Ozs7SUFyRVEsK0NBQWM7OztJQUFyQjtRQUNFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMzQyxDQUFDOzs7Ozs7OztJQUVNLHdDQUFPOzs7Ozs7O0lBQWQsVUFBZSxPQUFlLEVBQUUsS0FBYyxFQUFFLE9BQThCLEVBQUUsT0FBNkI7UUFDM0csSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7WUFDdEIsSUFBSSxFQUFFLGdCQUFnQixDQUFDLE9BQU87WUFDOUIsT0FBTyxFQUFFLE9BQU87WUFDaEIsS0FBSyxFQUFFLEtBQUs7WUFDWixPQUFPLEVBQUUsT0FBTztZQUNoQixJQUFJLEVBQUUsS0FBSztZQUNYLE9BQU8sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQztTQUNsQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7OztJQUVNLHFDQUFJOzs7Ozs7O0lBQVgsVUFBWSxPQUFlLEVBQUUsS0FBYyxFQUFFLE9BQThCLEVBQUUsT0FBNkI7UUFDeEcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7WUFDdEIsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUk7WUFDM0IsT0FBTyxFQUFFLE9BQU87WUFDaEIsS0FBSyxFQUFFLEtBQUs7WUFDWixPQUFPLEVBQUUsT0FBTztZQUNoQixJQUFJLEVBQUUsS0FBSztZQUNYLE9BQU8sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQztTQUNsQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7OztJQUVNLHdDQUFPOzs7Ozs7O0lBQWQsVUFBZSxPQUFlLEVBQUUsS0FBYyxFQUFFLE9BQThCLEVBQUUsT0FBNkI7UUFDM0csSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7WUFDdEIsSUFBSSxFQUFFLGdCQUFnQixDQUFDLE9BQU87WUFDOUIsT0FBTyxFQUFFLE9BQU87WUFDaEIsS0FBSyxFQUFFLEtBQUs7WUFDWixPQUFPLEVBQUUsT0FBTztZQUNoQixJQUFJLEVBQUUsS0FBSztZQUNYLE9BQU8sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQztTQUNsQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7OztJQUVNLHNDQUFLOzs7Ozs7O0lBQVosVUFBYSxPQUFlLEVBQUUsS0FBYyxFQUFFLE9BQThCLEVBQUUsT0FBNkI7UUFDekcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7WUFDdEIsSUFBSSxFQUFFLGdCQUFnQixDQUFDLE1BQU07WUFDN0IsT0FBTyxFQUFFLE9BQU87WUFDaEIsS0FBSyxFQUFFLEtBQUs7WUFDWixPQUFPLEVBQUUsT0FBTztZQUNoQixJQUFJLEVBQUUsS0FBSztZQUNYLE9BQU8sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQztTQUNsQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFTywyQ0FBVTs7Ozs7SUFBbEIsVUFBbUIsR0FBd0I7O1lBQ25DLE9BQU8sR0FBRztZQUNkLFFBQVEsRUFBRSxJQUFJO1lBQ2QsV0FBVyxFQUFFLEtBQUs7WUFDbEIsZUFBZSxFQUFFLElBQUk7U0FDdEI7UUFFRCxJQUFJLEdBQUcsRUFBRTtZQUNQLElBQUksR0FBRyxDQUFDLFFBQVEsS0FBSyxJQUFJLElBQUksT0FBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxXQUFXLEVBQUU7Z0JBQ2pFLE9BQU8sQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQzthQUNqQztZQUNELElBQUksR0FBRyxDQUFDLFdBQVcsS0FBSyxJQUFJLElBQUksT0FBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsS0FBSyxXQUFXLEVBQUU7Z0JBQ3ZFLE9BQU8sQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQzthQUN2QztZQUNELElBQUksR0FBRyxDQUFDLGVBQWUsS0FBSyxJQUFJLElBQUksT0FBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsS0FBSyxXQUFXLEVBQUU7Z0JBQy9FLE9BQU8sQ0FBQyxlQUFlLEdBQUcsR0FBRyxDQUFDLGVBQWUsQ0FBQzthQUMvQztTQUNGO1FBRUQsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQzs7Z0JBMUVGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7OztpQ0FORDtDQStFQyxBQTNFRCxJQTJFQztTQXhFWSxzQkFBc0I7Ozs7OztJQUNqQywrQ0FBeUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25Nb2RlbCwgTm90aWZpY2F0aW9uQnV0dG9uLCBOb3RpZmljYXRpb25UeXBlLCBOb3RpZmljYXRpb25PcHRpb25zIH0gZnJvbSAnLi9ub3RpZmljYXRpb24ubW9kZWwnXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5neE5vdGlmaWNhdGlvblNlcnZpY2Uge1xuICBwcml2YXRlICRub3RpZmljYXRpb24gPSBuZXcgU3ViamVjdDxOb3RpZmljYXRpb25Nb2RlbD4oKTtcblxuICBwdWJsaWMgb25Ob3RpZmljYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuJG5vdGlmaWNhdGlvbi5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIHB1YmxpYyBzdWNjZXNzKG1lc3NhZ2U6IHN0cmluZywgdGl0bGU/OiBzdHJpbmcsIGJ1dHRvbnM/OiBOb3RpZmljYXRpb25CdXR0b25bXSwgb3B0aW9ucz86IE5vdGlmaWNhdGlvbk9wdGlvbnMpIHtcbiAgICB0aGlzLiRub3RpZmljYXRpb24ubmV4dCh7XG4gICAgICB0eXBlOiBOb3RpZmljYXRpb25UeXBlLlN1Y2Nlc3MsXG4gICAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgYnV0dG9uczogYnV0dG9ucyxcbiAgICAgIGhpZGU6IGZhbHNlLFxuICAgICAgb3B0aW9uczogdGhpcy5zZXRPcHRpb25zKG9wdGlvbnMpXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgaW5mbyhtZXNzYWdlOiBzdHJpbmcsIHRpdGxlPzogc3RyaW5nLCBidXR0b25zPzogTm90aWZpY2F0aW9uQnV0dG9uW10sIG9wdGlvbnM/OiBOb3RpZmljYXRpb25PcHRpb25zKSB7XG4gICAgdGhpcy4kbm90aWZpY2F0aW9uLm5leHQoe1xuICAgICAgdHlwZTogTm90aWZpY2F0aW9uVHlwZS5JbmZvLFxuICAgICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIGJ1dHRvbnM6IGJ1dHRvbnMsXG4gICAgICBoaWRlOiBmYWxzZSxcbiAgICAgIG9wdGlvbnM6IHRoaXMuc2V0T3B0aW9ucyhvcHRpb25zKVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHdhcm5pbmcobWVzc2FnZTogc3RyaW5nLCB0aXRsZT86IHN0cmluZywgYnV0dG9ucz86IE5vdGlmaWNhdGlvbkJ1dHRvbltdLCBvcHRpb25zPzogTm90aWZpY2F0aW9uT3B0aW9ucykge1xuICAgIHRoaXMuJG5vdGlmaWNhdGlvbi5uZXh0KHtcbiAgICAgIHR5cGU6IE5vdGlmaWNhdGlvblR5cGUuV2FybmluZyxcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICBidXR0b25zOiBidXR0b25zLFxuICAgICAgaGlkZTogZmFsc2UsXG4gICAgICBvcHRpb25zOiB0aGlzLnNldE9wdGlvbnMob3B0aW9ucylcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBlcnJvcihtZXNzYWdlOiBzdHJpbmcsIHRpdGxlPzogc3RyaW5nLCBidXR0b25zPzogTm90aWZpY2F0aW9uQnV0dG9uW10sIG9wdGlvbnM/OiBOb3RpZmljYXRpb25PcHRpb25zKSB7XG4gICAgdGhpcy4kbm90aWZpY2F0aW9uLm5leHQoe1xuICAgICAgdHlwZTogTm90aWZpY2F0aW9uVHlwZS5EYW5nZXIsXG4gICAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgYnV0dG9uczogYnV0dG9ucyxcbiAgICAgIGhpZGU6IGZhbHNlLFxuICAgICAgb3B0aW9uczogdGhpcy5zZXRPcHRpb25zKG9wdGlvbnMpXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHNldE9wdGlvbnMob3B0OiBOb3RpZmljYXRpb25PcHRpb25zKTogTm90aWZpY2F0aW9uT3B0aW9ucyB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIGR1cmF0aW9uOiAzMDAwLFxuICAgICAgY2xvc2VCdXR0b246IGZhbHNlLFxuICAgICAgYmFja2Ryb3BEaXNtaXNzOiB0cnVlXG4gICAgfTtcblxuICAgIGlmIChvcHQpIHtcbiAgICAgIGlmIChvcHQuZHVyYXRpb24gIT09IG51bGwgJiYgdHlwZW9mKG9wdC5kdXJhdGlvbikgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG9wdGlvbnMuZHVyYXRpb24gPSBvcHQuZHVyYXRpb247XG4gICAgICB9XG4gICAgICBpZiAob3B0LmNsb3NlQnV0dG9uICE9PSBudWxsICYmIHR5cGVvZihvcHQuY2xvc2VCdXR0b24pICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBvcHRpb25zLmNsb3NlQnV0dG9uID0gb3B0LmNsb3NlQnV0dG9uO1xuICAgICAgfVxuICAgICAgaWYgKG9wdC5iYWNrZHJvcERpc21pc3MgIT09IG51bGwgJiYgdHlwZW9mKG9wdC5iYWNrZHJvcERpc21pc3MpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBvcHRpb25zLmJhY2tkcm9wRGlzbWlzcyA9IG9wdC5iYWNrZHJvcERpc21pc3M7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH1cbn1cbiJdfQ==