/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NgxNotificationService } from './ngx-notification.service';
import { template, style } from './ngx-notification.component.html';
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var newItemIndex;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var i;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
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
export { NgxNotificationComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW5vdGlmaWNhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbm90aWZpY2F0aW9uLyIsInNvdXJjZXMiOlsibGliL25neC1ub3RpZmljYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUVsRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRXBFO0lBVUUsa0NBQW9CLG1CQUEyQztRQUEzQyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXdCO1FBSi9ELGlCQUFZLEdBQXdCLEVBQUUsQ0FBQztRQUNoQyxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLG1CQUFjLEdBQUcsS0FBSyxDQUFDO0lBRW9DLENBQUM7Ozs7SUFFbkUsMkNBQVE7OztJQUFSO1FBQUEsaUJBRUM7UUFEQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsY0FBYyxFQUFFLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBWixDQUFZLEVBQUMsQ0FBQztJQUN6RSxDQUFDOzs7Ozs7O0lBRUQsZ0RBQWE7Ozs7OztJQUFiLFVBQWMsS0FBYSxFQUFFLFFBQWMsRUFBRSxPQUFpQjtRQUM1RCxJQUFJLFFBQVEsRUFBRTtZQUNaLFFBQVEsRUFBRSxDQUFDO1NBQ1o7UUFFRCxJQUFHLE9BQU8sRUFBRTtZQUNWLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDckI7SUFDSCxDQUFDOzs7OztJQUVLLHVDQUFJOzs7O0lBQVYsVUFBVyxDQUFvQjs7Ozs7Z0JBQzdCLElBQUksQ0FBQyxDQUFDLEVBQUU7b0JBQ04sc0JBQU87aUJBQ1I7Z0JBQ0ssWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDOUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO2dCQUMzQixJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxLQUFLLENBQUMsQ0FBQyxFQUFFO29CQUM3QixVQUFVOzs7b0JBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxFQUE5QixDQUE4QixHQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQ3RFOzs7O0tBQ0Y7Ozs7OztJQUVLLDBDQUFPOzs7OztJQUFiLFVBQWMsS0FBYyxFQUFFLEdBQVk7Ozs7Ozs7NkJBQ3BDLENBQUEsS0FBSyxLQUFLLElBQUksSUFBSSxPQUFPLEtBQUssS0FBSyxXQUFXLENBQUEsRUFBOUMsd0JBQThDO3dCQUNoRCxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTs0QkFDaEMsS0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQ0FDakQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7NkJBQ3RCO3lCQUNGO3dCQUNELHNCQUFPOzs2QkFFSCxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUF4Qix3QkFBd0I7d0JBQzFCLElBQ0UsR0FBRyxLQUFLLFVBQVU7NEJBQ2xCLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQWUsS0FBSyxLQUFLLEVBQzFEOzRCQUNBLHNCQUFPO3lCQUNSO3dCQUVELElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQzt3QkFDckMscUJBQU0sVUFBVTs7OzRCQUFDO2dDQUNmLEtBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztnQ0FDbkMsSUFBSSxLQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7b0NBQ2xDLEtBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO29DQUM1QixVQUFVOzs7b0NBQUMsY0FBTSxPQUFBLENBQUMsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsRUFBdEIsQ0FBc0IsR0FBRSxHQUFHLENBQUMsQ0FBQztpQ0FDL0M7NEJBQ0gsQ0FBQyxHQUFFLEdBQUcsQ0FBQyxFQUFBOzt3QkFOUCxTQU1PLENBQUM7Ozs7OztLQUdiOztnQkFqRUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFFBQVEsRUFBRSxRQUFRLEdBQUcsRUFBRTs2QkFDYixLQUFLLEdBQUcsRUFBRTtpQkFDckI7Ozs7Z0JBUFEsc0JBQXNCOztJQXFFL0IsK0JBQUM7Q0FBQSxBQWxFRCxJQWtFQztTQTdEWSx3QkFBd0I7OztJQUNuQyxnREFBdUM7O0lBQ3ZDLDJDQUF1Qjs7SUFDdkIsa0RBQThCOzs7OztJQUVsQix1REFBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uTW9kZWwgfSBmcm9tICcuL25vdGlmaWNhdGlvbi5tb2RlbCc7XG5pbXBvcnQgeyBOZ3hOb3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9uZ3gtbm90aWZpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgdGVtcGxhdGUsIHN0eWxlIH0gZnJvbSAnLi9uZ3gtbm90aWZpY2F0aW9uLmNvbXBvbmVudC5odG1sJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LW5vdGlmaWNhdGlvbicsXG4gIHRlbXBsYXRlOiB0ZW1wbGF0ZSArIGBgLFxuICBzdHlsZXM6IFsgc3R5bGUgKyBgYCBdXG59KVxuZXhwb3J0IGNsYXNzIE5neE5vdGlmaWNhdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIG5vdGlmaWNhdGlvbjogTm90aWZpY2F0aW9uTW9kZWxbXSA9IFtdO1xuICBwdWJsaWMgdmlzaWJsZSA9IGZhbHNlO1xuICBwdWJsaWMgdmlzaWJsZUFuaW1hdGUgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5vdGlmaWNhdGlvblNlcnZpY2U6IE5neE5vdGlmaWNhdGlvblNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5ub3RpZmljYXRpb25TZXJ2aWNlLm9uTm90aWZpY2F0aW9uKCkuc3Vic2NyaWJlKG4gPT4gdGhpcy5zaG93KG4pKTtcbiAgfVxuXG4gIG9uQnV0dG9uQ2xpY2soaW5kZXg6IG51bWJlciwgY2FsbGJhY2s/OiBhbnksIGRpc21pc3M/OiBib29sZWFuKSB7XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgIH1cblxuICAgIGlmKGRpc21pc3MpIHtcbiAgICAgIHRoaXMuZGlzbWlzcyhpbmRleCk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgc2hvdyhuOiBOb3RpZmljYXRpb25Nb2RlbCkge1xuICAgIGlmICghbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBuZXdJdGVtSW5kZXggPSB0aGlzLm5vdGlmaWNhdGlvbi5wdXNoKG4pO1xuICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XG4gICAgdGhpcy52aXNpYmxlQW5pbWF0ZSA9IHRydWU7XG4gICAgaWYgKG4ub3B0aW9ucy5kdXJhdGlvbiAhPT0gLTEpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5kaXNtaXNzKG5ld0l0ZW1JbmRleCAtIDEpLCBuLm9wdGlvbnMuZHVyYXRpb24pO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGRpc21pc3MoaW5kZXg/OiBudW1iZXIsIHJlbD86IHN0cmluZykge1xuICAgIGlmIChpbmRleCA9PT0gbnVsbCB8fCB0eXBlb2YgaW5kZXggPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBpZiAodGhpcy5ub3RpZmljYXRpb24ubGVuZ3RoID4gMCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubm90aWZpY2F0aW9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdGhpcy5kaXNtaXNzKGksIHJlbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMubm90aWZpY2F0aW9uW2luZGV4XSkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcmVsID09PSAnYmFja2Ryb3AnICYmXG4gICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25baW5kZXhdLm9wdGlvbnMuYmFja2Ryb3BEaXNtaXNzID09PSBmYWxzZVxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbltpbmRleF0uaGlkZSA9IHRydWU7XG4gICAgICAgIGF3YWl0IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgaWYgKHRoaXMubm90aWZpY2F0aW9uLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy52aXNpYmxlQW5pbWF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiAodGhpcy52aXNpYmxlID0gZmFsc2UpLCAzMDApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgMzAwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==