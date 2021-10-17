import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserdataComponent } from './userdata/userdata.component';
import { DisplayUserComponent } from './display-user/display-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { CacheInterceptor } from './shared/cache.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    UserdataComponent,
    DisplayUserComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule  
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true }  
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
