import { Routes } from '@angular/router';
import { AppRoutes } from '../model/AppRoutes';
import { PathNotFoundComponent } from '../components/path-not-found/path-not-found.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: AppRoutes.Home.main,
    pathMatch: 'full',
  },
  {
    path: AppRoutes.Auth.main,
    loadChildren: () => import('../../components/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: AppRoutes.Home.main,
    loadChildren: () => import('../../components/home/home.module').then(m => m.HomeModule)
  },
  { path: '**', component: PathNotFoundComponent },
]
