import { NotificationModel, NotificationButton, NotificationOptions } from './notification.model';
export declare class NgxNotificationService {
    private $notification;
    onNotification(): import("rxjs").Observable<NotificationModel>;
    success(message: string, title?: string, buttons?: NotificationButton[], options?: NotificationOptions): void;
    info(message: string, title?: string, buttons?: NotificationButton[], options?: NotificationOptions): void;
    warning(message: string, title?: string, buttons?: NotificationButton[], options?: NotificationOptions): void;
    error(message: string, title?: string, buttons?: NotificationButton[], options?: NotificationOptions): void;
    private setOptions;
}
