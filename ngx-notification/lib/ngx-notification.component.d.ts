import { OnInit } from '@angular/core';
import { NotificationModel } from './notification.model';
import { NgxNotificationService } from './ngx-notification.service';
export declare class NgxNotificationComponent implements OnInit {
    private notificationService;
    notification: NotificationModel[];
    visible: boolean;
    visibleAnimate: boolean;
    constructor(notificationService: NgxNotificationService);
    ngOnInit(): void;
    onButtonClick(index: number, callback?: any, dismiss?: boolean): void;
    show(n: NotificationModel): Promise<void>;
    dismiss(index?: number, rel?: string): Promise<void>;
}
