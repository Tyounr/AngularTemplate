import { NgModule } from "@angular/core";
import { environment } from "@env/environment";

// Routing
import { AppRoutingModule } from "./app-routing.module";

// App component
import { AppComponent } from "./app.component";

// PWA
import { ServiceWorkerModule } from "@angular/service-worker";

// Browser
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// Shared module
import { SharedModule } from "@shared/shared.module";
import { RouterModule } from "@angular/router";

// Animations

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: "serverApp" }), // Necessary to run the application,
    BrowserAnimationsModule, // To support animations
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production,
    }), // Necessary for PWA
    SharedModule, // Shared modules
    AppRoutingModule,
    RouterModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
