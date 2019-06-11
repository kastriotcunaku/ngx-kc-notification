<div align="center">
  <img src="https://raw.githubusercontent.com/kastriotcunaku/ngx-kc-notification/master/assets/preview.png" width="882" alt="ngx-kc-notification preview">
  <br>
  <h1>ngx-kc-notification</h1>
</div>

DEMO: https://kastriotcunaku.github.io/ngx-kc-notification/

## Features

- Modern UI
- Smooth animation
- Different notification types
- Show multiple notifications in the same time
- Use as prompt with action buttons
- Easy to install and use

## Dependencies

| ngx-kc-notification | Angular |
| ---------------- | ------- |
| 1.0.0            | 5.x     |

## Install

```bash
npm install ngx-kc-notification --save
```

## Setup
**step 1:** Add NgxNotificationModule to AppModule

```typescript
import { CommonModule } from '@angular/common';

import { NgxNotificationModule } from 'ngx-notification';

@NgModule({
  imports: [
    CommonModule,
    NgxNotificationModule // NgxNotificationModule added
  ],
  bootstrap: [App],
  declarations: [App]
})
class AppModule {}
```
**step 2:** Add notification component tag on top of app.component.html

```html
<ngx-notification></ngx-notification>
<!-- Your app template goes below -->
```

## Use

```typescript
import { Component } from '@angular/core';
import { NgxNotificationService } from 'ngx-notification';

@Component({
  selector: 'my-component',
  templateUrl: `
  <button (click)="show()">Show notification</button>
  `,
  styleUrls: []
})
export class MyComponent {

  constructor(private notification: NgxNotificationService) { }

  show() {
      this.notification.success('Your first notification');
  }
}
```
More examples and options can be found [here](https://kastriotcunaku.github.io/ngx-kc-notification/)


## Options
### Parameters
| Option | Type | Description |
| ------ | ---- | ----------- |
| message | string | Notification message |
| title | string | Notification Title |
| buttons | NotificationButton[] | Notification action buttons |
| options | NotificationOptions | Notification options |


### NotificationButton
| Option | Type | Description |
| ------ | ---- | ----------- |
| text | string | Button text |
| callback | callback function | On click callback function |
| dismiss | boolean | Dismiss notification on button click |


### NotificationOptions
| Option | Type | Description |
| ------ | ---- | ----------- |
| duration | number | Notification duration in milliseconds |
| closeButton | boolean | Show X button on right corner |
| backdropDismiss | boolean | Dismiss notification on backdrop click |


## License

MIT