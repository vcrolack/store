import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './components/signup/signup.component';

import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    SignupComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule

  ]
})
export class SignupModule { }
