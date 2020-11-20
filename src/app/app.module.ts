import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireMessagingModule } from "@angular/fire/messaging";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFireModule } from '@angular/fire';
import { AsyncPipe } from '@angular/common';
import { MessagingService } from './Service/messaging.service';

const firebaseConfig = {
  apiKey: "AIzaSyCybLsa48bxFYHqNHVosvz_M52H8Pe635c",
    authDomain: "chatwork-81276.firebaseapp.com",
    databaseURL: "https://chatwork-81276.firebaseio.com",
    projectId: "chatwork-81276",
    storageBucket: "chatwork-81276.appspot.com",
    messagingSenderId: "65535727055",
    appId: "1:65535727055:web:46c93ff27eacc9ebd0eeba",
    measurementId: "G-CF63Q8GWYD"
};
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireMessagingModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [MessagingService,AsyncPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
