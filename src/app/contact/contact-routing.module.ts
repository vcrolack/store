import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import { ContactComponent } from './components/contact.component';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class ContactRoutingModule {}