import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HttpErrorInterceptor } from "./interceptors/http-error.interceptor";

import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { MenuModule } from "./components/menu/menu.module";
import { SpinnerModule } from "./components/spinner/spinner.module";
import { SharedModule } from "./shared-modules/shared/shared.module";
import { ErrorModule } from "./components/error/error.module";

import { AppComponent } from "./app.component";
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    MenuModule,
    SpinnerModule,
    ErrorModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
