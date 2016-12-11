import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { RegisterComponent } from './accounts/register.component';
import { HomeComponent } from './home/home.component';
import { routing }        from './app.routing';
import { UserService, AlertService } from './_services/index';
import { StringUtil } from './_utils/index';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    routing
  ],
  providers: [UserService, AlertService, StringUtil],
  bootstrap: [AppComponent]
})
export class AppModule { }
