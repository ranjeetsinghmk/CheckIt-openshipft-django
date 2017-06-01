import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Autosize } from '../../node_modules/angular2-autosize/angular2-autosize';
import { UpdatesComponent } from './updates/updates.component';
import { AppComponent } from './app.component';
import { CheckItAutoComplete } from './_utils/components/autocomplete';
import { NotFoundCompontent } from './_utils/components/app.notfound';
import { RegisterComponent } from './accounts/register.component';
import { ProductsComponent } from "./products/products.component";
import { ProductDetailComponent } from "./products/detail.component";
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { UserService, AlertService } from './_services/index';
import { UpdatesService } from "./_services/updates";
import { StringUtil } from './_utils/index';
import { PersonComponent } from "./personalities/component.person";

@NgModule({
  declarations: [
    Autosize,
    CheckItAutoComplete,
    UpdatesComponent,
    AppComponent,
    HomeComponent,
    RegisterComponent,
    NotFoundCompontent,
    ProductsComponent,
    ProductDetailComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule,
    routing
  ],
  providers: [UserService, AlertService, StringUtil, UpdatesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
