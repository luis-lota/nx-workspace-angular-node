
        import { NgModule } from '@angular/core';
        import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { coreRoutes } from './lib.routes';
        
        @NgModule({
          imports: [
            CommonModule,
            
    RouterModule.forChild(coreRoutes) 
          ]
        })
        export class CoreModule { }
        