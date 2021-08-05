import { NgModule } from "@angular/core";
import { ServerModule } from "@angular/platform-server";

import { AppModule } from "./app.module";
import { AppComponent } from "./app.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { Routes, RouterModule } from "@angular/router";
import { AppShellComponent } from "./app-shell/app-shell.component";

const routes: Routes = [{ path: "shell", component: AppShellComponent }];

@NgModule({
  declarations: [AppShellComponent],
  imports: [
    AppModule,
    ServerModule,
    FlexLayoutModule, // To use flex layout with SSR
    RouterModule.forRoot(routes),
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
