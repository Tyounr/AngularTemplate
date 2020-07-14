import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule, //Necessary to run the application
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }), //Necessary for PWA
    SharedModule, //Shared modules
    AppRoutingModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
