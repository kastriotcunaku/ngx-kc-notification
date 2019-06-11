import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HighlightModule } from 'ngx-highlightjs';
import typescript from 'highlight.js/lib/languages/typescript';

import { AppComponent } from './app.component';
import { NgxNotificationModule } from 'ngx-notification';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HighlightModule.forRoot({
      languages: () => [
        { name: 'typescript', func: typescript }
      ]
    }),
    NgxNotificationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
