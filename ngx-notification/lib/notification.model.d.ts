export interface NotificationModel {
    type: NotificationType;
    title?: string;
    message: string;
    buttons?: NotificationButton[];
    options?: NotificationOptions;
    hide: boolean;
}
export interface NotificationButton {
    text: string;
    callback?: any;
    dismiss?: boolean;
}
export declare enum NotificationType {
    Success = 1,
    Info = 2,
    Warning = 3,
    Danger = 4
}
export interface NotificationOptions {
    duration?: number;
    closeButton?: boolean;
    backdropDismiss?: boolean;
}
