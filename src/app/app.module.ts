import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularAgoraRtcModule, AgoraConfig } from 'angular-agora-rtc'; // Add

import { AppComponent } from './app.component';

// Add
const agoraConfig: AgoraConfig = {
  AppID: '3a28def90cd047489223531ddbdce690',
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularAgoraRtcModule.forRoot(agoraConfig) // Add
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }