import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { LoginComponent } from './autenticacion/login/login.component';

export const AppRoutes: Routes = [{
  
    path:'login',
    component:LoginComponent
    
    
},{
  path: '',
  component: FullComponent,
  children: [{ 
    path: '', 
    redirectTo: '/starter', 
    pathMatch: 'full' 
  },
  {
    path: 'material',
    loadChildren: './material-component/material.module#MaterialComponentsModule'
  }, {
    path: 'starter',
    loadChildren: './starter/starter.module#StarterModule'
  }, {
    path: 'icons',
    loadChildren: './icons/mat-icon.module#IconsModule'
  },
]
}];

