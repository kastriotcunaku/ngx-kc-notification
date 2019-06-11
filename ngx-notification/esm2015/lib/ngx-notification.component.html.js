/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const template = `
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
export const style = `
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW5vdGlmaWNhdGlvbi5jb21wb25lbnQuaHRtbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1rYy1ub3RpZmljYXRpb24vIiwic291cmNlcyI6WyJsaWIvbmd4LW5vdGlmaWNhdGlvbi5jb21wb25lbnQuaHRtbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE1BQU0sT0FBTyxRQUFRLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBa0R2Qjs7QUFFRCxNQUFNLE9BQU8sS0FBSyxHQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FrSHhCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHRlbXBsYXRlID0gYFxyXG48ZGl2XHJcbiAgY2xhc3M9XCJub3RpZmljYXRpb24td3JhcHBlclwiXHJcbiAgW25nQ2xhc3NdPVwidmlzaWJsZUFuaW1hdGUgPyAnb24nIDogJ29mZidcIlxyXG4gIFtuZ1N0eWxlXT1cIntcclxuICAgIGRpc3BsYXk6IHZpc2libGUgPyAnYmxvY2snIDogJ25vbmUnLFxyXG4gICAgb3BhY2l0eTogdmlzaWJsZUFuaW1hdGUgPyAxIDogMFxyXG4gIH1cIlxyXG4+XHJcbiAgPGRpdlxyXG4gICAgY2xhc3M9XCJub3RpZmljYXRpb25cIlxyXG4gICAgKm5nRm9yPVwibGV0IG4gb2Ygbm90aWZpY2F0aW9uOyBsZXQgaSA9IGluZGV4XCJcclxuICAgIFtuZ0NsYXNzXT1cIm4uaGlkZSA/ICdvZmYnIDogJ29uJ1wiXHJcbiAgICBbY2xhc3Muc3VjY2Vzc109XCJuPy50eXBlID09PSAxXCJcclxuICAgIFtjbGFzcy5pbmZvXT1cIm4/LnR5cGUgPT09IDJcIlxyXG4gICAgW2NsYXNzLndhcm5pbmddPVwibj8udHlwZSA9PT0gM1wiXHJcbiAgICBbY2xhc3MuZGFuZ2VyXT1cIm4/LnR5cGUgPT09IDRcIlxyXG4gICAgW25nU3R5bGVdPVwieyAnei1pbmRleCc6IG5vdGlmaWNhdGlvbj8ubGVuZ3RoICsgMSAtIGkgfVwiXHJcbiAgPlxyXG4gICAgPGRpdiBjbGFzcz1cIm1lc3NhZ2VcIj5cclxuICAgICAgPHN0cm9uZyAqbmdJZj1cIm4/LnRpdGxlXCI+e3sgbj8udGl0bGUgfX08L3N0cm9uZz5cclxuICAgICAge3sgbj8ubWVzc2FnZSB9fVxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uc1wiICpuZ0lmPVwibj8uYnV0dG9uc1wiPlxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgY2xhc3M9XCJidXR0b25cIlxyXG4gICAgICAgICpuZ0Zvcj1cImxldCBidXR0b24gb2Ygbi5idXR0b25zXCJcclxuICAgICAgICAoY2xpY2spPVwib25CdXR0b25DbGljayhpLCBidXR0b24/LmNhbGxiYWNrLCBidXR0b24/LmRpc21pc3MpXCJcclxuICAgICAgPlxyXG4gICAgICAgIHt7IGJ1dHRvbj8udGV4dCB9fVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGJ1dHRvblxyXG4gICAgICAqbmdJZj1cIm4/Lm9wdGlvbnM/LmNsb3NlQnV0dG9uXCJcclxuICAgICAgY2xhc3M9XCJidXR0b24gY2xvc2UtYnRuXCJcclxuICAgICAgKGNsaWNrKT1cImRpc21pc3MoaSlcIlxyXG4gICAgPlxyXG4gICAgICAgIDxzdmcgdmVyc2lvbj1cIjEuMVwiIGlkPVwiQ2FwYV8xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiXHJcbiAgICAgICAgICAgIHg9XCIwcHhcIiB5PVwiMHB4XCIgdmlld0JveD1cIjAgMCA0Ny45NzEgNDcuOTcxXCIgc3R5bGU9XCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ3Ljk3MSA0Ny45NzE7XCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIj5cclxuICAgICAgICAgICAgPGc+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTI4LjIyOCwyMy45ODZMNDcuMDkyLDUuMTIyYzEuMTcyLTEuMTcxLDEuMTcyLTMuMDcxLDAtNC4yNDJjLTEuMTcyLTEuMTcyLTMuMDctMS4xNzItNC4yNDIsMEwyMy45ODYsMTkuNzQ0TDUuMTIxLDAuODhcclxuICAgICAgICAgICAgICAgICAgICBjLTEuMTcyLTEuMTcyLTMuMDctMS4xNzItNC4yNDIsMGMtMS4xNzIsMS4xNzEtMS4xNzIsMy4wNzEsMCw0LjI0MmwxOC44NjUsMTguODY0TDAuODc5LDQyLjg1Yy0xLjE3MiwxLjE3MS0xLjE3MiwzLjA3MSwwLDQuMjQyXHJcbiAgICAgICAgICAgICAgICAgICAgQzEuNDY1LDQ3LjY3NywyLjIzMyw0Ny45NywzLDQ3Ljk3czEuNTM1LTAuMjkzLDIuMTIxLTAuODc5bDE4Ljg2NS0xOC44NjRMNDIuODUsNDcuMDkxYzAuNTg2LDAuNTg2LDEuMzU0LDAuODc5LDIuMTIxLDAuODc5XHJcbiAgICAgICAgICAgICAgICAgICAgczEuNTM1LTAuMjkzLDIuMTIxLTAuODc5YzEuMTcyLTEuMTcxLDEuMTcyLTMuMDcxLDAtNC4yNDJMMjguMjI4LDIzLjk4NnpcIi8+XHJcbiAgICAgICAgICAgIDwvZz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgIDwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJiYWNrZHJvcFwiIChjbGljayk9XCJkaXNtaXNzKG51bGwsICdiYWNrZHJvcCcpXCI+PC9kaXY+XHJcbjwvZGl2PlxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IHN0eWxlID0gICAgIGBcclxuLm5vdGlmaWNhdGlvbi13cmFwcGVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHotaW5kZXg6IDk5OTk5OTk7XHJcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbn1cclxuLm5vdGlmaWNhdGlvbi13cmFwcGVyIC5iYWNrZHJvcCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuLm5vdGlmaWNhdGlvbi13cmFwcGVyIC5ub3RpZmljYXRpb24ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgei1pbmRleDogMTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA3MHB4O1xyXG59XHJcbi5ub3RpZmljYXRpb24td3JhcHBlciAubm90aWZpY2F0aW9uIC5tZXNzYWdlLCAubm90aWZpY2F0aW9uLXdyYXBwZXIgLm5vdGlmaWNhdGlvbiAuYnV0dG9ucyB7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG59XHJcbi5ub3RpZmljYXRpb24td3JhcHBlciAubm90aWZpY2F0aW9uLnN1Y2Nlc3Mge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzOGQxODk7XHJcbn1cclxuLm5vdGlmaWNhdGlvbi13cmFwcGVyIC5ub3RpZmljYXRpb24uaW5mbyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4OTlkMTtcclxufVxyXG4ubm90aWZpY2F0aW9uLXdyYXBwZXIgLm5vdGlmaWNhdGlvbi53YXJuaW5nIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5ZjFjO1xyXG59XHJcbi5ub3RpZmljYXRpb24td3JhcHBlciAubm90aWZpY2F0aW9uLmRhbmdlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5NzA1ZTtcclxufVxyXG4ubm90aWZpY2F0aW9uLXdyYXBwZXIgLm5vdGlmaWNhdGlvbi5vbiB7XHJcbiAgYW5pbWF0aW9uOiBzbGlkZUluIDAuMnMgZWFzZS1pbjtcclxufVxyXG4ubm90aWZpY2F0aW9uLXdyYXBwZXIgLm5vdGlmaWNhdGlvbi5vZmYge1xyXG4gIGFuaW1hdGlvbjogc2xpZGVPdXQgMC4zcyBlYXNlLWluO1xyXG59XHJcbi5ub3RpZmljYXRpb24td3JhcHBlciAuYnV0dG9uIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIG1pbi1oZWlnaHQ6IDMycHg7XHJcbiAgbWluLXdpZHRoOiAzMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG59XHJcbi5ub3RpZmljYXRpb24td3JhcHBlciAuYnV0dG9ucyAuYnV0dG9uIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbi5ub3RpZmljYXRpb24td3JhcHBlciAuY2xvc2UtYnRuIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDE1cHg7XHJcbiAgdG9wOiAxOHB4O1xyXG59XHJcbi5ub3RpZmljYXRpb24td3JhcHBlciAuY2xvc2UtYnRuIHN2ZyB7XHJcbiAgZmlsbDogI2ZmZmZmZjtcclxuICB3aWR0aDogMTZweDtcclxuICBoZWlnaHQ6IDE2cHg7XHJcbn1cclxuLm5vdGlmaWNhdGlvbi13cmFwcGVyLm9uIHtcclxuICBhbmltYXRpb246IGZhZGVJbiAwLjNzIGVhc2UtaW47XHJcbn1cclxuLm5vdGlmaWNhdGlvbi13cmFwcGVyLm9mZiB7XHJcbiAgYW5pbWF0aW9uOiBmYWRlT3V0IDAuM3MgZWFzZS1pbjtcclxufVxyXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxMDA7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgZmFkZU91dCB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMTAwO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgc2xpZGVJbiB7XHJcbiAgMCUge1xyXG4gICAgbWFyZ2luLXRvcDogLTcwcHg7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBzbGlkZU91dCB7XHJcbiAgMCUge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBtYXJnaW4tdG9wOiAtNzBweDtcclxuICB9XHJcbn1cclxuYDsiXX0=