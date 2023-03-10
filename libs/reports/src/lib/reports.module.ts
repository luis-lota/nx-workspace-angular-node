
        import { NgModule } from '@angular/core';
        import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { reportsRoutes } from './lib.routes';
        
        @NgModule({
          imports: [
            CommonModule,
            
    RouterModule.forChild(reportsRoutes) 
          ]
        })
        export class ReportsModule { }
        