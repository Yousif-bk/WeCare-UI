import { Routes } from '@angular/router';
import { AppRoutes } from '../model/AppRoutes';
import { SignUpComponent } from 'src/app/components/auth/sign-up/sign-up.component';

export const routes: Routes = [
  {
    path: AppRoutes.Auth.main,
    loadChildren: () => import('../../components/auth/auth.module').then(m => m.AuthModule)
  },

  { path: '**', component: SignUpComponent },
]
