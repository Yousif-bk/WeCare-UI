import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { homeRoutes } from './home.routes';
import { LandingComponent } from './landing/landing.component';



@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes)
  ]
})
export class HomeModule {}
