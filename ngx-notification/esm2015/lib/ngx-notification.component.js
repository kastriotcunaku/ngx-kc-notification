/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NgxNotificationService } from './ngx-notification.service';
import { template, style } from './ngx-notification.component.html';
export class NgxNotificationComponent {
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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
if (false) {
    /** @type {?} */
    NgxNotificationComponent.prototype.notification;
    /** @type {?} */
    NgxNotificationComponent.prototype.visible;
    /** @type {?} */
    NgxNotificationComponent.prototype.visibleAnimate;
    /**
     * @type {?}
     * @private
     */
    NgxNotificationComponent.prototype.notificationService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW5vdGlmaWNhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gta2Mtbm90aWZpY2F0aW9uLyIsInNvdXJjZXMiOlsibGliL25neC1ub3RpZmljYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUVsRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBT3BFLE1BQU0sT0FBTyx3QkFBd0I7Ozs7SUFLbkMsWUFBb0IsbUJBQTJDO1FBQTNDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBd0I7UUFKL0QsaUJBQVksR0FBd0IsRUFBRSxDQUFDO1FBQ2hDLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsbUJBQWMsR0FBRyxLQUFLLENBQUM7SUFFb0MsQ0FBQzs7OztJQUVuRSxRQUFRO1FBQ04sSUFBSSxDQUFDLG1CQUFtQixDQUFDLGNBQWMsRUFBRSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztJQUN6RSxDQUFDOzs7Ozs7O0lBRUQsYUFBYSxDQUFDLEtBQWEsRUFBRSxRQUFjLEVBQUUsT0FBaUI7UUFDNUQsSUFBSSxRQUFRLEVBQUU7WUFDWixRQUFRLEVBQUUsQ0FBQztTQUNaO1FBRUQsSUFBRyxPQUFPLEVBQUU7WUFDVixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQzs7Ozs7SUFFSyxJQUFJLENBQUMsQ0FBb0I7O1lBQzdCLElBQUksQ0FBQyxDQUFDLEVBQUU7Z0JBQ04sT0FBTzthQUNSOztrQkFDSyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzlDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1lBQzNCLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEtBQUssQ0FBQyxDQUFDLEVBQUU7Z0JBQzdCLFVBQVU7OztnQkFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsR0FBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3RFO1FBQ0gsQ0FBQztLQUFBOzs7Ozs7SUFFSyxPQUFPLENBQUMsS0FBYyxFQUFFLEdBQVk7O1lBQ3hDLElBQUksS0FBSyxLQUFLLElBQUksSUFBSSxPQUFPLEtBQUssS0FBSyxXQUFXLEVBQUU7Z0JBQ2xELElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUNoQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7d0JBQ2pELElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO3FCQUN0QjtpQkFDRjtnQkFDRCxPQUFPO2FBQ1I7aUJBQU07Z0JBQ0wsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUM1QixJQUNFLEdBQUcsS0FBSyxVQUFVO3dCQUNsQixJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFlLEtBQUssS0FBSyxFQUMxRDt3QkFDQSxPQUFPO3FCQUNSO29CQUVELElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztvQkFDckMsTUFBTSxVQUFVOzs7b0JBQUMsR0FBRyxFQUFFO3dCQUNwQixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQ25DLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFOzRCQUNsQyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQzs0QkFDNUIsVUFBVTs7OzRCQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsR0FBRSxHQUFHLENBQUMsQ0FBQzt5QkFDL0M7b0JBQ0gsQ0FBQyxHQUFFLEdBQUcsQ0FBQyxDQUFDO2lCQUNUO2FBQ0Y7UUFDSCxDQUFDO0tBQUE7OztZQWpFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsUUFBUSxFQUFFLFFBQVEsR0FBRyxFQUFFO3lCQUNiLEtBQUssR0FBRyxFQUFFO2FBQ3JCOzs7O1lBUFEsc0JBQXNCOzs7O0lBUzdCLGdEQUF1Qzs7SUFDdkMsMkNBQXVCOztJQUN2QixrREFBOEI7Ozs7O0lBRWxCLHVEQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25Nb2RlbCB9IGZyb20gJy4vbm90aWZpY2F0aW9uLm1vZGVsJztcbmltcG9ydCB7IE5neE5vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuL25neC1ub3RpZmljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyB0ZW1wbGF0ZSwgc3R5bGUgfSBmcm9tICcuL25neC1ub3RpZmljYXRpb24uY29tcG9uZW50Lmh0bWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtbm90aWZpY2F0aW9uJyxcbiAgdGVtcGxhdGU6IHRlbXBsYXRlICsgYGAsXG4gIHN0eWxlczogWyBzdHlsZSArIGBgIF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4Tm90aWZpY2F0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgbm90aWZpY2F0aW9uOiBOb3RpZmljYXRpb25Nb2RlbFtdID0gW107XG4gIHB1YmxpYyB2aXNpYmxlID0gZmFsc2U7XG4gIHB1YmxpYyB2aXNpYmxlQW5pbWF0ZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbm90aWZpY2F0aW9uU2VydmljZTogTmd4Tm90aWZpY2F0aW9uU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm5vdGlmaWNhdGlvblNlcnZpY2Uub25Ob3RpZmljYXRpb24oKS5zdWJzY3JpYmUobiA9PiB0aGlzLnNob3cobikpO1xuICB9XG5cbiAgb25CdXR0b25DbGljayhpbmRleDogbnVtYmVyLCBjYWxsYmFjaz86IGFueSwgZGlzbWlzcz86IGJvb2xlYW4pIHtcbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfVxuXG4gICAgaWYoZGlzbWlzcykge1xuICAgICAgdGhpcy5kaXNtaXNzKGluZGV4KTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBzaG93KG46IE5vdGlmaWNhdGlvbk1vZGVsKSB7XG4gICAgaWYgKCFuKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG5ld0l0ZW1JbmRleCA9IHRoaXMubm90aWZpY2F0aW9uLnB1c2gobik7XG4gICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcbiAgICB0aGlzLnZpc2libGVBbmltYXRlID0gdHJ1ZTtcbiAgICBpZiAobi5vcHRpb25zLmR1cmF0aW9uICE9PSAtMSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmRpc21pc3MobmV3SXRlbUluZGV4IC0gMSksIG4ub3B0aW9ucy5kdXJhdGlvbik7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZGlzbWlzcyhpbmRleD86IG51bWJlciwgcmVsPzogc3RyaW5nKSB7XG4gICAgaWYgKGluZGV4ID09PSBudWxsIHx8IHR5cGVvZiBpbmRleCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGlmICh0aGlzLm5vdGlmaWNhdGlvbi5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ub3RpZmljYXRpb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB0aGlzLmRpc21pc3MoaSwgcmVsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5ub3RpZmljYXRpb25baW5kZXhdKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICByZWwgPT09ICdiYWNrZHJvcCcgJiZcbiAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbltpbmRleF0ub3B0aW9ucy5iYWNrZHJvcERpc21pc3MgPT09IGZhbHNlXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uW2luZGV4XS5oaWRlID0gdHJ1ZTtcbiAgICAgICAgYXdhaXQgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5ub3RpZmljYXRpb24uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICBpZiAodGhpcy5ub3RpZmljYXRpb24ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnZpc2libGVBbmltYXRlID0gZmFsc2U7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+ICh0aGlzLnZpc2libGUgPSBmYWxzZSksIDMwMCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCAzMDApO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19