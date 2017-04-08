import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UpdatesComponent } from './updates/updates.component';
import { AppComponent } from './app.component';
import { CheckItAutoComplete } from './_utils/components/autocomplete';
import { RegisterComponent } from './accounts/register.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { UserService, AlertService } from './_services/index';
import { UpdatesService } from "./_services/updates";
import { StringUtil } from './_utils/index';

@NgModule({
  declarations: [
    CheckItAutoComplete,
    UpdatesComponent,
    AppComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    routing
  ],
  providers: [UserService, AlertService, StringUtil, UpdatesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
