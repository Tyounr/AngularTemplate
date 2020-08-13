import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';

// Routing
import { AppRoutingModule } from './app-routing.module';

// App component
import { AppComponent } from './app.component';

// PWA
import { ServiceWorkerModule } from '@angular/service-worker';

// Browser
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Shared module
import { SharedModule } from '../shared/shared.module';

// Animations

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule, // Necessary to run the application,
    BrowserAnimationsModule, // To support animations
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }), // Necessary for PWA
    SharedModule, // Shared modules
    AppRoutingModule,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
