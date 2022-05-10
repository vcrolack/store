import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import  {AngularFireModule} from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';


import { AppComponent } from './app.component';
import { CartComponent } from './shared/components/cart/cart.component';
import { LayoutComponent } from './layout/layout.component';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from 'src/environments/environment';
import { HolaComponent } from './hola/hola.component';




@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    LayoutComponent,
    HolaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    CoreModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
