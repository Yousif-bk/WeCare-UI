import { Routes } from '@angular/router';
import { AppRoutes } from '../model/AppRoutes';
import { PathNotFoundComponent } from '../components/path-not-found/path-not-found.component';
import { AuthGuard } from '../helper/guard/auth.guard';
import { UnauthGuard } from '../helper/guard/unauth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: AppRoutes.Home.main,
    pathMatch: 'full',
  },
  {
    path: AppRoutes.Auth.main,
    // canActivate: [UnauthGuard],
    loadChildren: () => import('../../components/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: AppRoutes.Home.main,
    // canActivate:[AuthGuard],
    loadChildren: () => import('../../components/home/home.module').then(m => m.HomeModule)
  },
  { path: '**', component: PathNotFoundComponent },
]
