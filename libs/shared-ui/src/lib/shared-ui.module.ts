
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { sharedUiRoutes } from './lib.routes';
import { FormUserComponent } from './components/form-user/form-user.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild(sharedUiRoutes)
  ],
  declarations: [
    FormUserComponent
  ],
  exports: [
    FormUserComponent
  ]
})
export class SharedUiModule { }
