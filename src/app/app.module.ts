import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import  { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { CustomhttpInterceptor } from './customhttp.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:CustomhttpInterceptor,
      multi:true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
