import { Routes } from '@angular/router';
import { AppRoutes } from 'src/app/shared/model/AppRoutes';
import { LandingComponent } from './landing/landing.component';

export const homeRoutes: Routes = [
  { path: AppRoutes.Home.sub, component: LandingComponent },
]
