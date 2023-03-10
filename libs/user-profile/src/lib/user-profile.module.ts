
        import { NgModule } from '@angular/core';
        import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { userProfileRoutes } from './lib.routes';
        
        @NgModule({
          imports: [
            CommonModule,
            
    RouterModule.forChild(userProfileRoutes) 
          ]
        })
        export class UserProfileModule { }
        