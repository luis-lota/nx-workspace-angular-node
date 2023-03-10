
        import { NgModule } from '@angular/core';
        import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { selfcareRoutes } from './lib.routes';
        
        @NgModule({
          imports: [
            CommonModule,
            
    RouterModule.forChild(selfcareRoutes) 
          ]
        })
        export class SelfcareModule { }
        